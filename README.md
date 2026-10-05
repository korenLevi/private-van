# IsraelPrivateVan.com

Static marketing site for Israel Private Van, the transport service of Amir
Levi Transportation Services Ltd. of Holon. Airport transfers, a van with a
driver by the day, private tours and event transport across Israel, in
English, Hebrew and Russian. Built for search visibility and page speed
first.

- **Astro 7**, static output, TypeScript
- **Tailwind CSS 4** (CSS-first config, no `tailwind.config.js`)
- **React** for the two booking forms, nothing else
- **Cloudflare Pages**, with one Pages Function for the email copy
- **Three languages**: English at `/`, Hebrew at `/he/` (RTL), Russian at `/ru/`
- 20 pages per language, 63 HTML files including the localized 404s

---

## Getting started

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # static site into dist/
npm run preview      # serve dist/ locally
npm run check        # TypeScript + Astro diagnostics
```

| Script                     | What it does                                              |
| -------------------------- | --------------------------------------------------------- |
| `npm run dev`              | Dev server with HMR                                        |
| `npm run build`            | Production build, then lists remaining placeholders        |
| `npm run check`            | `astro check` — types across `.astro`, `.ts` and `.tsx`    |
| `npm run check:placeholders` | Lists every unfilled `[PLACEHOLDER]` and `[PRICE]`       |
| `npm run check:seo`        | Audits the built HTML against the SEO rules                |
| `npm run placeholders`     | Regenerates the labelled placeholder photos                |

---

## The two files you will edit most

### 1. `src/config/site.ts` — every business detail

Phone, WhatsApp number, email, fleet facts, route list and prices all live
here. Nothing is hard-coded anywhere else.

Values written `[PLACEHOLDER]` or `[PRICE]` have not been supplied yet.
They are safe to deploy: `prune()` in `src/lib/schema.ts` strips them out of
the JSON-LD, so Google is never told a price or an address that is not real.
`npm run build` prints what is still outstanding.

### 2. `src/i18n/ui/en.ts` — every word on the site

All copy, all page titles and meta descriptions, all URL slugs, the FAQ, and
the section headings. Editing a page's text and editing its URL happen in the
same object.

Reviews are separate, in `src/data/reviews.json`, so they can be edited
without touching TypeScript. Replace the placeholder entries and set
`arePlaceholders` to `false`.

---

## Folder structure

```
.
├── astro.config.mjs        site URL, i18n, fonts, image and sitemap config
├── wrangler.toml           Cloudflare Pages project settings
├── functions/
│   └── api/quote.ts        Pages Function: emails a copy of each quote
├── public/
│   ├── _headers            cache and security headers for Pages
│   ├── favicon.svg
│   ├── og-default.jpg      1200x630 social card
│   ├── robots.txt
│   └── media/hero.mp4      hero background video (placeholder clip)
├── scripts/
│   ├── generate-placeholders.mjs
│   └── check-placeholders.mjs
└── src/
    ├── assets/             every photo, plus index.ts (the image registry)
    ├── components/
    │   ├── react/QuoteForm.tsx     the only client-side component
    │   ├── sections/               the homepage sections, in order
    │   └── …                       Header, Footer, Seo, Icon, LiteYouTube…
    ├── config/site.ts      all business details
    ├── data/reviews.json   review content
    ├── i18n/
    │   ├── config.ts       the locale list — add a language here
    │   ├── routes.ts       the page registry (URL for every page × locale)
    │   ├── types.ts        the shape every dictionary must match
    │   ├── ui/en.ts        all English copy
    │   └── utils.ts        locale helpers, hreflang
    ├── layouts/BaseLayout.astro
    ├── lib/                schema.ts (JSON-LD), text.ts
    ├── pages/
    │   ├── [...slug].astro the only route file — builds every page
    │   └── 404.astro
    ├── styles/global.css   design tokens and component classes
    └── templates/          HomePage, LandingPage, ContactPage
```

### Pages

20 pages, each one in all three languages. Slugs stay Latin in every
language, so the Hebrew airport page is `/he/airport-transfers/`.

| URL | Targets |
| --- | --- |
| `/` | private van with driver israel |
| `/airport-transfers/` | ben gurion airport transfer |
| `/ben-gurion-to-jerusalem/` | ben gurion to jerusalem |
| `/ben-gurion-to-tel-aviv/` | ben gurion to tel aviv |
| `/ben-gurion-to-haifa/` | ben gurion to haifa |
| `/ben-gurion-to-dead-sea/` | ben gurion to dead sea |
| `/ben-gurion-to-eilat/` | ben gurion to eilat |
| `/van-with-driver-full-day/` | private van with driver israel |
| `/private-tours/` | private tours israel |
| `/jerusalem-day-tour/` | jerusalem day tour private |
| `/dead-sea-masada-tour/` | dead sea masada private tour |
| `/galilee-day-tour/` | galilee private tour |
| `/wedding-transportation/` | wedding transportation israel |
| `/artist-band-transportation/` | artist transportation israel |
| `/business-transportation/` | business transportation israel |
| `/private-transfers/` | private transfers israel |
| `/fleet/` | mercedes sprinter hire israel |
| `/about/` | brand |
| `/faq/` | long tail questions |
| `/contact/` | contact |

`src/i18n/routes.ts` is the single registry of URLs. `src/pages/[...slug].astro`
generates every page in every language from it, so adding a page means one
entry there plus its content, never a new route file.

---

## Working on the content

| File | Holds |
| --- | --- |
| `src/config/site.ts` | every business fact: phone, email, fleet, prices, track record |
| `src/i18n/routes.ts` | every URL |
| `src/i18n/ui/en.ts` | English site chrome |
| `src/i18n/ui/en-pages.ts` | English page content |
| `src/i18n/ui/he.ts`, `he-pages.ts` | Hebrew |
| `src/i18n/ui/ru.ts`, `ru-pages.ts` | Russian |
| `src/data/reviews.json` | reviews |

Translated dictionaries are partial. Anything they leave out falls back to
English per key, so a missing string shows in English rather than blanking a
page. Arrays are replaced whole, never merged item by item, so a partly
translated list cannot come out in two languages.

------------------------------- | ----------------------------- |
| `/`                             | private van and driver Israel |
| `/ben-gurion-airport-transfer`  | Ben Gurion airport transfer   |
| `/private-driver-israel`        | private driver Israel         |
| `/jerusalem-day-tour-private`   | private Jerusalem day tour    |
| `/dead-sea-masada-private-tour` | Dead Sea and Masada private tour |
| `/galilee-private-tour`         | Galilee private tour          |
| `/contact`                      | contact                       |

There is one route file. `src/pages/[...slug].astro` asks the registry in
`src/i18n/routes.ts` for every page in every locale and picks a template.
Adding a page means adding one entry to `PAGE_KINDS` and its content to the
dictionary — no new file under `src/pages/`.

---

## Adding a language

Spanish, French and Russian were planned for, so nothing needs restructuring.

1. Uncomment the locale in `src/i18n/config.ts`.
2. Copy `src/i18n/ui/en.ts` to `src/i18n/ui/es.ts` and translate it — including
   each page's `slug`, so `/es/traslado-aeropuerto-ben-gurion` is a Spanish URL
   rather than an English one in a Spanish folder.
3. Register it in `src/i18n/ui/index.ts`.

That is the whole change. Every page builds under `/es/`, `hreflang` tags and
`x-default` appear in each `<head>`, and the sitemap gains the alternates.
TypeScript checks the new dictionary against the English one, so a missing
key is a build error rather than a blank space on a live page.

English stays at the root, with no `/en` prefix.

---

## Images

Everything in `src/assets/` is a labelled placeholder. To use a real photo,
**overwrite the file of the same name** — no code changes. The registry in
`src/assets/index.ts` maps a stable key to each file, and the content files
refer to images only by key.

Astro's `<Picture>` handles all of them: AVIF with a WebP and JPEG fallback,
several widths, `sizes` tuned per layout, `loading="lazy"` below the fold,
and width/height on every `<img>` so nothing shifts as the page loads. Every
image has descriptive alt text written for a screen reader, not for keywords.

Hero video: `public/media/hero.mp4` is a placeholder clip. The poster image
is what actually paints — the video is not requested until the browser is
idle, and is skipped entirely on a metered connection or when the visitor has
asked for reduced motion. Replace the file, or set `MEDIA.heroVideo.mp4` to
`null` in the config to show only the poster.

YouTube: set `MEDIA.youtubeId`. The player is a facade — a thumbnail and a
play button — so no YouTube script or cookie loads until someone clicks.

---

## The quote form

`src/components/react/QuoteForm.tsx` is the only hydrated component on the
site. On submit it:

1. Opens `wa.me` with the trip details prefilled. This happens first and
   synchronously, inside the click, so popup blockers leave it alone.
2. Posts the same details to `/api/quote`, which emails a copy to the
   business. This is fire-and-forget: a failure here is never shown to the
   visitor, who is already in WhatsApp.

The message template is in the dictionary (`form.whatsappTemplate`), so it
translates with everything else. Empty fields drop out of the message rather
than leaving `Name:` hanging.

### Configuring the email copy

In the Cloudflare Pages dashboard, under Settings → Environment variables:

| Variable           | Value                                           |
| ------------------ | ----------------------------------------------- |
| `RESEND_API_KEY`   | API key from [resend.com](https://resend.com)   |
| `QUOTE_TO_EMAIL`   | where enquiries land                            |
| `QUOTE_FROM_EMAIL` | a verified sender on your domain                |

Locally, copy `.dev.vars.example` to `.dev.vars`. With none of them set the
function returns `{ ok: true, delivered: false }` and the form still works.

Using a different email provider is a change to `sendEmail` in
`functions/api/quote.ts` and nothing else.

---

## SEO

- Unique `<title>` and meta description per page, from the dictionary
- Canonical URL on every page; `hreflang` plus `x-default`
- Open Graph and Twitter card tags
- JSON-LD in a single `@graph` per page: `LocalBusiness` + `TaxiService` +
  `WebSite` + `FAQPage` on the homepage, `BreadcrumbList` + `FAQPage` on
  inner pages
- `@astrojs/sitemap` with locale alternates; `robots.txt` points at it
- One `<h1>` per page, semantic landmarks, skip link, visible focus rings

**Before launch:** update the `Sitemap:` line in `public/robots.txt` and
`SITE.url` in `src/config/site.ts` if the domain differs.

---

## Measured results

Lighthouse, mobile, simulated throttling, against `npm run preview`:

| Page                           | Perf | A11y | Best practices | SEO |
| ------------------------------ | ---- | ---- | -------------- | --- |
| `/`                            | 99   | 100  | 100            | 100 |
| `/ben-gurion-airport-transfer` | 100  | 100  | 100            | 100 |
| `/contact`                     | 100  | 100  | 100            | 100 |

Production will measure a little higher: Cloudflare adds Brotli and the
`_headers` caching rules that a local preview does not apply.

---

## Deploying

Connect the repository in the Cloudflare Pages dashboard:

- Build command: `npm run build`
- Build output directory: `dist`
- Node version: 20 or later

`functions/` is picked up automatically and served at `/api/*` alongside the
static files. Or deploy by hand:

```bash
npm run build
npx wrangler pages deploy
```
# private-van
