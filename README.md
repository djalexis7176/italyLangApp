# Andiamo — Italian for travellers

A single-page web app: phrases, verb conjugation, flashcards, matching, and role-play conversations aimed at eating, drinking, travelling and talking to people in Italy. No build step, no dependencies, no server code.

**Live:** https://YOUR-USERNAME.github.io/andiamo/

![Andiamo](social-preview.png)

## Files — upload all of these to the repository

| File | What it does |
|---|---|
| `index.html` | The whole app. This is the only file that has to be there. |
| `manifest.webmanifest` | Tells the phone the app's name, colours and icons. |
| `sw.js` | Caches the app so it still works with no signal. |
| `apple-touch-icon.png` | The icon iPhone and iPad use on the home screen. |
| `icon-192.png`, `icon-512.png` | The icons Android uses. |
| `icon-512-maskable.png` | Android version that fills round or squircle icon shapes. |
| `favicon.ico`, `favicon.png` | The little icon in the browser tab. |
| `social-preview.png` | The picture that shows when you text or post the link. |
| `README.md` | This page. GitHub shows it on the repo's front page. It is not part of the app. |

Keep them all in the same folder, at the top level of the repository. Don't rename them — `index.html` refers to each by name.

## Publish it

1. Go to github.com → **New repository**. Name it `andiamo`, set it **Public**, and create it.
2. On the repo page click **Add file → Upload files**, drag in all the files above, then **Commit changes**.
3. **Settings → Pages**. Under *Build and deployment* choose **Source: Deploy from a branch**, **Branch: main**, **Folder: / (root)**. Save.
4. Wait a minute or two, then open `https://YOUR-USERNAME.github.io/andiamo/`.

Optional, for a nicer link preview: **Settings → General → Social preview → Edit → Upload an image** and pick `social-preview.png`.

## Put it on your phone's home screen

Open the Pages link on the phone, then:

- **iPhone / iPad (Safari):** Share button → **Add to Home Screen** → Add. Safari must be the browser; Chrome on iOS can't do this.
- **Android (Chrome):** ⋮ menu → **Add to Home screen** / **Install app**.

You get the gold **A.** icon, it opens full screen with no browser bars, and it keeps working when you have no data. Your streak, saved phrases and card progress live on that device, so your phone and laptop track separately.

## Spoken Italian

The **Voice** button in the top bar cycles through the Italian voices installed on your device and steps the speed down to 0.7×. If nothing plays, add an Italian voice:

- **iPhone:** Settings → Accessibility → Spoken Content → Voices → Italian.
- **Android:** Settings → System → Languages & input → Text-to-speech → install the Italian voice.

## What's in it

- 300 phrases across 18 travel situations, with pronunciation and audio
- 44 verbs conjugated in the present tense, stem and ending colour-coded
- 100 nouns with their articles, 30 adjectives
- 52 question-and-answer pairs (they ask, you answer)
- 10 full role-play conversations
- 19 confusable word pairs — sapere/conoscere, piace/piacciono, vorrei/voglio and the rest
- 10 drill types and a 14-day plan

**Plan → Clear all progress** wipes everything on that device.

## Changing the content

All the material sits in plain arrays near the top of `index.html`, marked with `DATA:` comments. Phrases are `["Italian", "English", "pronunciation"]` — add a line to any category and it appears everywhere: search, flashcards, quizzes, matching, gap-fill.

After you edit and re-upload, the old cached version may linger for one visit because of `sw.js`. Bump `const V = "andiamo-v1"` to `v2` when you change the app, and it refreshes.
