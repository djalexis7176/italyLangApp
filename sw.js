/* Andiamo service worker.
   HTML is fetched from the network first, so opening the app with any signal
   always gets the newest build off GitHub. Everything else is served from
   cache and refreshed in the background. Cache still covers you offline. */
const BUILD = "23";
const V = "andiamo-" + BUILD;
const SHELL = [
  "./", "./index.html", "./manifest.webmanifest",
  "./favicon.png", "./favicon.ico", "./apple-touch-icon.png",
  "./icon-192.png", "./icon-512.png", "./icon-512-maskable.png"
];

self.addEventListener("install", e => {
  self.skipWaiting();
  e.waitUntil(caches.open(V).then(c => c.addAll(SHELL)).catch(()=>{}));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("message", e => { if(e.data === "SKIP_WAITING") self.skipWaiting(); });

self.addEventListener("fetch", e => {
  const req = e.request;
  if(req.method !== "GET") return;
  const isPage = req.mode === "navigate" || new URL(req.url).pathname.endsWith(".html");

  if(isPage){
    /* newest first, cache only as a fallback when there's no signal */
    e.respondWith(
      fetch(req, {cache:"no-store"})
        .then(res => { const copy = res.clone(); caches.open(V).then(c => c.put(req, copy)).catch(()=>{}); return res; })
        .catch(() => caches.match(req).then(hit => hit || caches.match("./index.html")))
    );
    return;
  }

  e.respondWith(
    caches.match(req).then(hit => {
      const net = fetch(req).then(res => {
        if(res.ok){ const copy = res.clone(); caches.open(V).then(c => c.put(req, copy)).catch(()=>{}); }
        return res;
      }).catch(() => hit);
      return hit || net;
    })
  );
});
