/**
 * The page registry: every URL on the site, in every locale.
 *
 * Slugs are per-locale so a Spanish page can live at a Spanish URL
 * (/es/traslado-aeropuerto-ben-gurion) rather than an English one. The slug
 * for each locale comes from that locale's dictionary, so translating a page
 * and translating its URL happen in the same place.
 */

import { DEFAULT_LOCALE, LOCALE_CODES, type Locale } from './config';
import type { PageKey } from './types';
import { getDictionary } from './ui';

/** Which template renders the page. */
export type PageKind = 'home' | 'landing' | 'contact';

export type { PageKey };

export const PAGE_KINDS: Record<PageKey, PageKind> = {
  home: 'home',
  airportTransfer: 'landing',
  privateDriver: 'landing',
  jerusalemTour: 'landing',
  deadSeaTour: 'landing',
  galileeTour: 'landing',
  contact: 'contact',
};

export const PAGE_KEYS = Object.keys(PAGE_KINDS) as PageKey[];

/** The slug for a page in a locale, e.g. "ben-gurion-airport-transfer". */
export function slugFor(key: PageKey, locale: Locale): string {
  return getDictionary(locale).pages[key].slug;
}

/**
 * The absolute path for a page, e.g. "/ben-gurion-airport-transfer" or
 * "/es/traslado-aeropuerto-ben-gurion". Never has a trailing slash except "/".
 */
export function pathFor(key: PageKey, locale: Locale = DEFAULT_LOCALE): string {
  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
  const slug = slugFor(key, locale);
  return slug === '' ? prefix || '/' : `${prefix}/${slug}`;
}

/** Every locale variant of one page, for hreflang alternates. */
export function alternatesFor(key: PageKey): Array<{ locale: Locale; path: string }> {
  return LOCALE_CODES.map((locale) => ({ locale, path: pathFor(key, locale) }));
}

/**
 * Every (page × locale) combination, as Astro getStaticPaths entries.
 * `src/pages/[...slug].astro` is the only consumer.
 */
export function allPagePaths() {
  return LOCALE_CODES.flatMap((locale) =>
    PAGE_KEYS.map((key) => {
      const path = pathFor(key, locale);
      // Astro's rest param wants the path without the leading slash, and
      // `undefined` for the site root.
      const slug = path === '/' ? undefined : path.slice(1);
      return {
        params: { slug },
        props: { pageKey: key, locale, kind: PAGE_KINDS[key] },
      };
    }),
  );
}

/** Nav order in the header. Keys must exist in PAGE_KINDS. */
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
