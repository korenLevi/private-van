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
export type PageKind = 'home' | 'landing' | 'contact' | 'guide' | 'guideIndex';

export type { PageKey };

type PageRoute = {
  kind: PageKind;
  /** URL segment, Latin letters, no leading or trailing slash. */
  slug: string;
  /**
   * Which languages this page is published in. Omitted means all of them.
   *
   * Guides are written for one audience at a time: a Hebrew guide about
   * wedding transport is aimed at Israelis planning a wedding here, and
   * translating it into English would serve nobody. Pages that exist in one
   * language are simply not generated in the others, and their hreflang
   * cluster only names the languages that really exist.
   */
  locales?: readonly Locale[];
};

export const PAGES: Record<PageKey, PageRoute> = {
  home: { kind: 'home', slug: '' },

  // Airport transfers: one hub, five routes beneath it.
  airportTransfers: { kind: 'landing', slug: 'airport-transfers' },
  bgJerusalem: { kind: 'landing', slug: 'ben-gurion-to-jerusalem' },
  bgTelAviv: { kind: 'landing', slug: 'ben-gurion-to-tel-aviv' },
  bgHaifa: { kind: 'landing', slug: 'ben-gurion-to-haifa' },
  bgDeadSea: { kind: 'landing', slug: 'ben-gurion-to-dead-sea' },
  bgEilat: { kind: 'landing', slug: 'ben-gurion-to-eilat' },

  vanWithDriver: { kind: 'landing', slug: 'van-with-driver-full-day' },

  // Tours: one hub, three day trips beneath it.
  privateTours: { kind: 'landing', slug: 'private-tours' },
  deadSeaMasadaTour: { kind: 'landing', slug: 'dead-sea-masada-tour' },
  jerusalemDayTour: { kind: 'landing', slug: 'jerusalem-day-tour' },
  galileeDayTour: { kind: 'landing', slug: 'galilee-day-tour' },

  // One page per audience in section 2 of the brief.
  weddingTransportation: { kind: 'landing', slug: 'wedding-transportation' },
  artistBandTransportation: { kind: 'landing', slug: 'artist-band-transportation' },
  businessTransportation: { kind: 'landing', slug: 'business-transportation' },
  privateTransfers: { kind: 'landing', slug: 'private-transfers' },

  fleet: { kind: 'landing', slug: 'fleet' },
  about: { kind: 'landing', slug: 'about' },
  faq: { kind: 'landing', slug: 'faq' },
  contact: { kind: 'contact', slug: 'contact' },

  // Guides.
  guidesIndex: { kind: 'guideIndex', slug: 'guides', locales: ['en', 'he'] },

  // English: travellers arriving in Israel.
  guideBgJerusalemOptions: {
    kind: 'guide',
    slug: 'guides/ben-gurion-to-jerusalem-options',
    locales: ['en'],
  },
  guideShabbatTravel: {
    kind: 'guide',
    slug: 'guides/travelling-on-shabbat',
    locales: ['en'],
  },
  guideDriverOrRental: {
    kind: 'guide',
    slug: 'guides/private-driver-or-rental-car',
    locales: ['en'],
  },

  // Hebrew: Israelis organising transport for an event or a company.
  guideWeddingPlanning: {
    kind: 'guide',
    slug: 'guides/wedding-guest-transport',
    locales: ['he'],
  },
  guideVehicleSize: {
    kind: 'guide',
    slug: 'guides/choosing-vehicle-size',
    locales: ['he'],
  },
  guideCompanyEvent: {
    kind: 'guide',
    slug: 'guides/company-event-checklist',
    locales: ['he'],
  },
};

/** Guides in the order the index lists them, newest first. */
export const GUIDE_KEYS: PageKey[] = [
  'guideBgJerusalemOptions',
  'guideShabbatTravel',
  'guideDriverOrRental',
  'guideWeddingPlanning',
  'guideVehicleSize',
  'guideCompanyEvent',
];

/** Which languages a page is published in. */
export function localesFor(key: PageKey): readonly Locale[] {
  return PAGES[key].locales ?? LOCALE_CODES;
}

export function existsIn(key: PageKey, locale: Locale): boolean {
  return localesFor(key).includes(locale);
}

/** The guides published in one language, in index order. */
export function guidesFor(locale: Locale): PageKey[] {
  return GUIDE_KEYS.filter((key) => existsIn(key, locale));
}

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

/**
 * Every locale variant of one page, for hreflang and the switcher. A page
 * published in one language names only that one, so the cluster never
 * points at a URL that was never built.
 */
export function alternatesFor(key: PageKey): Array<{ locale: Locale; path: string }> {
  return localesFor(key).map((locale) => ({ locale, path: pathFor(key, locale) }));
}

/** Every (page x locale) combination, as Astro getStaticPaths entries. */
export function allPagePaths() {
  return LOCALE_CODES.flatMap((locale) =>
    PAGE_KEYS.filter((key) => existsIn(key, locale)).map((key) => {
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
  'airportTransfers',
  'vanWithDriver',
  'privateTours',
  'fleet',
  'about',
  'contact',
];

/** Footer columns, so the whole map is reachable in one click from any page. */
export const FOOTER_NAV: Array<{ heading: 'services' | 'tours' | 'company'; pages: PageKey[] }> = [
  {
    heading: 'services',
    pages: [
      'airportTransfers',
      'vanWithDriver',
      'privateTransfers',
      'businessTransportation',
      'weddingTransportation',
      'artistBandTransportation',
    ],
  },
  {
    heading: 'tours',
    pages: ['privateTours', 'jerusalemDayTour', 'deadSeaMasadaTour', 'galileeDayTour'],
  },
  {
    heading: 'company',
    pages: ['fleet', 'about', 'faq', 'contact'],
  },
];

/** The five airport routes, in the order they appear on the hub page. */
export const AIRPORT_ROUTES: PageKey[] = [
  'bgJerusalem',
  'bgTelAviv',
  'bgHaifa',
  'bgDeadSea',
  'bgEilat',
];

/** The three day tours. */
export const TOUR_PAGES: PageKey[] = [
  'jerusalemDayTour',
  'deadSeaMasadaTour',
  'galileeDayTour',
];
