/**
 * The page registry: every URL on the site.
 *
 * Slugs live here, not in the dictionaries, because the brief requires Latin
 * slugs in all three languages. One slug per page, prefixed by locale:
 *
 *   /airport-transfers/      /he/airport-transfers/      /ru/airport-transfers/
 *
 * That also means the language switcher can always link to the equivalent
 * page rather than falling back to the home page.
 */

import { DEFAULT_LOCALE, LOCALE_CODES, type Locale } from './config';
import type { PageKey } from './types';

/** Which template renders the page. */
export type PageKind = 'home' | 'landing' | 'contact';

export type { PageKey };

type PageRoute = {
  kind: PageKind;
  /** URL segment, Latin letters, no leading or trailing slash. */
  slug: string;
};

export const PAGES: Record<PageKey, PageRoute> = {
  home: { kind: 'home', slug: '' },
  airportTransfer: { kind: 'landing', slug: 'ben-gurion-airport-transfer' },
  privateDriver: { kind: 'landing', slug: 'private-driver-israel' },
  jerusalemTour: { kind: 'landing', slug: 'jerusalem-day-tour-private' },
  deadSeaTour: { kind: 'landing', slug: 'dead-sea-masada-private-tour' },
  galileeTour: { kind: 'landing', slug: 'galilee-private-tour' },
  contact: { kind: 'contact', slug: 'contact' },
};

export const PAGE_KEYS = Object.keys(PAGES) as PageKey[];

export function isPageKey(value: string): value is PageKey {
  return value in PAGES;
}

/**
 * The absolute path for a page. Trailing slash on every URL, including the
 * locale roots, to match the page map in the brief.
 */
export function pathFor(key: PageKey, locale: Locale = DEFAULT_LOCALE): string {
  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
  const { slug } = PAGES[key];
  return slug === '' ? `${prefix}/` : `${prefix}/${slug}/`;
}

/** Every locale variant of one page, for hreflang and the switcher. */
export function alternatesFor(key: PageKey): Array<{ locale: Locale; path: string }> {
  return LOCALE_CODES.map((locale) => ({ locale, path: pathFor(key, locale) }));
}

/** Every (page x locale) combination, as Astro getStaticPaths entries. */
export function allPagePaths() {
  return LOCALE_CODES.flatMap((locale) =>
    PAGE_KEYS.map((key) => {
      const path = pathFor(key, locale);
      // Astro's rest parameter wants the path without its surrounding
      // slashes, and `undefined` for the site root.
      const trimmed = path.replace(/^\/|\/$/g, '');
      return {
        params: { slug: trimmed === '' ? undefined : trimmed },
        props: { pageKey: key, locale, kind: PAGES[key].kind },
      };
    }),
  );
}

/** Nav order in the header. */
export const HEADER_NAV: PageKey[] = [
  'airportTransfer',
  'privateDriver',
  'jerusalemTour',
  'contact',
];

/** Inner pages linked from the footer. */
export const FOOTER_NAV: PageKey[] = [
  'airportTransfer',
  'privateDriver',
  'jerusalemTour',
  'deadSeaTour',
  'galileeTour',
  'contact',
];
