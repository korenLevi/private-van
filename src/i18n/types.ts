/**
 * Shapes shared by every dictionary. Kept separate from routes.ts so a
 * dictionary can be checked against them without a circular import.
 */

export type PageKey =
  | 'home'
  // Airport transfers
  | 'airportTransfers'
  | 'bgJerusalem'
  | 'bgTelAviv'
  | 'bgHaifa'
  | 'bgDeadSea'
  | 'bgEilat'
  // Van with driver
  | 'vanWithDriver'
  // Tours
  | 'privateTours'
  | 'deadSeaMasadaTour'
  | 'jerusalemDayTour'
  | 'galileeDayTour'
  // Audience pages
  | 'weddingTransportation'
  | 'artistBandTransportation'
  | 'businessTransportation'
  | 'privateTransfers'
  // Information
  | 'fleet'
  | 'about'
  | 'faq'
  | 'contact'
  // Guides. Each one is written for one audience in one language, so a
  // Hebrew guide for Israelis has no English twin and vice versa.
  | 'guidesIndex'
  | 'guideBgJerusalemOptions'
  | 'guideShabbatTravel'
  | 'guideDriverOrRental'
  | 'guideWeddingPlanning'
  | 'guideVehicleSize'
  | 'guideCompanyEvent';

export type FaqItem = {
  q: string;
  a: string;
};

export type BodySection = {
  heading: string;
  paragraphs: readonly string[];
  bullets: readonly string[];
};

/**
 * A comparison table. AI answer engines lift these almost verbatim, and a
 * reader deciding between options reads the table and nothing else.
 */
export type ComparisonTable = {
  caption: string;
  columns: readonly string[];
  rows: readonly (readonly string[])[];
  /** Shown under the table, for caveats such as "fares change". */
  note?: string;
};

/**
 * Facts a route page states up front. No drive time or distance: both depend
 * on the hour and the exact address, and are given per quote instead.
 */
export type TripFacts = {
  vehicle: string;
  seats: string;
  pickup: string;
  availability: string;
};

/**
 * Everything a page needs apart from its URL, which lives in routes.ts
 * because slugs are shared across languages.
 */
export type PageContent = {
  title: string;
  description: string;
  /** Short label for breadcrumbs, nav and related links. */
  breadcrumb: string;
  h1: string;
  /** Two or three sentences directly under the H1, carrying the keyword. */
  intro: string;
  /** Key into the image registry in src/assets. */
  heroImage: string;
  heroImageAlt: string;
  /** Route pages only: trip time, distance, vehicle and seats. */
  trip?: TripFacts;
  /** What the price covers. Rendered as a checked list. */
  included: readonly string[];
  body: readonly BodySection[];
  /** Route ids from the config to show as price cards. */
  routeIds: readonly string[];
  faq: readonly FaqItem[];
  /** Parent hub page, linked back to from this page. */
  hub?: PageKey;
  /** Three related pages, linked at the foot of the body. */
  related: readonly PageKey[];
  /** Renders the fleet gallery on this page. */
  showFleet?: boolean;
  /**
   * schema.org serviceType. Present on service and route pages, absent on
   * the home page and purely informational pages.
   */
  serviceType?: string;

  /* --- Guides only --------------------------------------------------- */

  /**
   * The answer, in two or three sentences, before anything else on the
   * page. Search engines and AI assistants quote this; a reader who stops
   * here should still have what they came for.
   */
  summary?: string;
  /** ISO date of the last substantive edit, shown and put in the schema. */
  updated?: string;
  /** Optional comparison table, rendered above the body. */
  table?: ComparisonTable;
  /** Service pages this guide points readers at. */
  leadsTo?: readonly PageKey[];
};
