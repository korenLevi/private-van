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
  | 'contact';

export type FaqItem = {
  q: string;
  a: string;
};

export type BodySection = {
  heading: string;
  paragraphs: readonly string[];
  bullets: readonly string[];
};

/** Facts a route page states up front: how long, how far, which vehicle. */
export type TripFacts = {
  duration: string;
  distance: string;
  vehicle: string;
  seats: string;
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
};
