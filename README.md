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

## The Words page

A full dictionary of everything the app uses — verbs, nouns, adjectives and the small words that hold sentences together. One button flips it between **Italian → English** and **English → Italian**, there's a search box that looks in both languages, filters for each word type, and an A–Z strip to jump down the list.

Tap any entry and you get the same panel as tapping a word anywhere else: the meaning, the full verb table if it's a verb, and a real sentence from the app showing it in use. Expressions that need a person in front of them are conjugated out in full — look up **hunger** and you get *avere fame*, then ho fame / hai fame / ha fame / abbiamo fame / avete fame / hanno fame with the English beside each.

## Tapping a word

Every Italian word in the app is underlined and tappable — in phrase lists, flashcards, quiz feedback, gap-fills and role-play conversations. Tap one and a panel slides up with the meaning. If it's a verb, you also get the full present-tense table with the form you tapped highlighted, so `sono` shows: *the io form of essere (to be), irregular* — and the whole table underneath. Words that change ending (plurals, feminine forms, past participles like `visitato`) are traced back to the base word automatically.

Tap the star in that panel and the word goes to your word list under **Saved**, where you can practise the collection as flashcards.

## Notes

**Saved → Notes** is a notepad: type, save, edit, delete. Notes stay in the browser on that device, so use **Copy all notes** or **Download** now and then to get them somewhere permanent.

## What's in it

- 300 phrases across 18 travel situations, with pronunciation and audio
- 93 verbs conjugated in the present tense, stem and ending colour-coded
- 100 nouns with their articles, 30 adjectives
- 52 question-and-answer pairs (they ask, you answer)
- 10 full role-play conversations
- 19 confusable word pairs — sapere/conoscere, piace/piacciono, vorrei/voglio and the rest
- 10 drill types and a 14-day plan
- A two-way dictionary of 860 entries, plus a word list and notepad you fill as you go

**Plan → Clear all progress** wipes everything on that device.

## Changing the content

All the material sits in plain arrays near the top of `index.html`, marked with `DATA:` comments. Phrases are `["Italian", "English", "pronunciation"]` — add a line to any category and it appears everywhere: search, flashcards, quizzes, matching, gap-fill.

After you edit and re-upload, the old cached version may linger for one visit because of `sw.js`. Bump `const V = "andiamo-v1"` to `v2` when you change the app, and it refreshes.
