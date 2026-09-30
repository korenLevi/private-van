// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

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
  ],

  image: {
    // Responsive images everywhere: Astro emits srcset + sizes and the
    // width/height attributes that keep CLS at zero.
    layout: 'constrained',
    responsiveStyles: true,
  },

  integrations: [
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