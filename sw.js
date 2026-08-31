/* Andiamo offline cache — lets the app work on a plane or with no roaming data. */
const V = "andiamo-v1";
const SHELL = [
  "./", "./index.html", "./manifest.webmanifest",
  "./favicon.png", "./favicon.ico", "./apple-touch-icon.png",
  "./icon-192.png", "./icon-512.png", "./icon-512-maskable.png"
];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
      const copy = res.clone();
      if (res.ok) caches.open(V).then(c => c.put(e.request, copy)).catch(()=>{});
      return res;
    }).catch(() => caches.match("./index.html")))
  );
});
