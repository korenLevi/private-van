// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import { rename, rm, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { SITE } from './src/config/site.ts';
import { LOCALES, DEFAULT_LOCALE } from './src/i18n/config.ts';

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  output: 'static',
  trailingSlash: 'always',

  // i18n is configured from src/i18n/config.ts. Adding "es" | "fr" | "ru" there
  // is the only change needed here — no routing refactor.
  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: LOCALES.map((l) => l.code),
    routing: {
      // English lives at the root (/), other locales under /es, /fr, /ru
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },

  // Astro downloads these from Google Fonts at build time and self-hosts the
  // woff2 files. Same typefaces as a <link> to fonts.googleapis.com, but with
  // no third-party connection, automatic preloading and a metric-matched
  // fallback so swapping in the real face causes no layout shift.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Fraunces',
      cssVariable: '--font-fraunces',
      weights: [500],
      styles: ['normal'],
      subsets: ['latin'],
      display: 'swap',
      fallbacks: ['Georgia', 'Times New Roman', 'serif'],
      optimizedFallbacks: true,
    },
    {
      provider: fontProviders.google(),
      name: 'Manrope',
      cssVariable: '--font-manrope',
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['latin'],
      display: 'swap',
      fallbacks: ['system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      optimizedFallbacks: true,
    },

    // Hebrew. Fraunces and Manrope carry no Hebrew glyphs, so /he/ would
    // otherwise fall through to whatever David / Frank Ruehl the OS ships —
    // a dated, high-contrast serif that reads nothing like the Latin pages.
    //
    // Hebrew does not pair a serif display with a sans body the way the
    // Latin side does: a Hebrew serif reads bookish and dated rather than
    // editorial, whatever its vintage. So both roles go to contemporary
    // sans faces and the hierarchy is carried on weight and size instead —
    // Rubik's geometric forms for headings, Assistant for running text.
    // Both carry latin too, so brand names and digits inside a Hebrew
    // sentence stay in the same family instead of switching face mid-line.
    {
      provider: fontProviders.google(),
      name: 'Rubik',
      cssVariable: '--font-rubik',
      weights: [500, 600],
      styles: ['normal'],
      subsets: ['hebrew', 'latin'],
      display: 'swap',
      fallbacks: ['Arial Hebrew', 'system-ui', 'sans-serif'],
      optimizedFallbacks: true,
    },
    {
      provider: fontProviders.google(),
      name: 'Assistant',
      cssVariable: '--font-assistant',
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['hebrew', 'latin'],
      display: 'swap',
      fallbacks: ['Arial Hebrew', 'system-ui', 'sans-serif'],
      optimizedFallbacks: true,
    },
  ],

  image: {
    // Responsive images everywhere: Astro emits srcset + sizes and the
    // width/height attributes that keep CLS at zero.
    layout: 'constrained',
    responsiveStyles: true,
  },

  integrations: [
    /**
     * `build.format: 'directory'` is what gives every URL its trailing slash,
     * but it also turns src/pages/he/404.astro into he/404/index.html.
     * Cloudflare Pages looks for a literal 404.html walking up from the
     * requested path, so the localized 404s have to sit at he/404.html and
     * ru/404.html or /he/nonsense falls through to the English one.
     */
    {
      name: 'localized-404-filenames',
      hooks: {
        'astro:build:done': async ({ dir, logger }) => {
          // `dir` is a file URL. This project path contains a space, so
          // reading .pathname directly yields %20 and every fs call misses.
          const root = fileURLToPath(dir);
          for (const entry of await readdir(root, { withFileTypes: true })) {
            if (!entry.isDirectory()) continue;
            const nested = join(root, entry.name, '404', 'index.html');
            try {
              await rename(nested, join(root, entry.name, '404.html'));
              await rm(join(root, entry.name, '404'), { recursive: true, force: true });
              logger.info(`moved ${entry.name}/404/index.html to ${entry.name}/404.html`);
            } catch {
              // No 404 in this directory, which is the normal case.
            }
          }
        },
      },
    },
    react(),
    sitemap({
      i18n: {
        defaultLocale: DEFAULT_LOCALE,
        locales: Object.fromEntries(LOCALES.map((l) => [l.code, l.hreflang])),
      },
      filter: (page) => !page.includes('/404'),
      changefreq: 'monthly',
      lastmod: new Date(),
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
    build: {
      // Small site: inline tiny assets rather than paying for extra requests.
      assetsInlineLimit: 2048,
    },
  },

  build: {
    inlineStylesheets: 'auto',
  },

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
});


////<Fleet locale={locale} />
// <Faq locale={locale} tone="paper" />
// <PopularRoutes locale={locale} tone="paper" />