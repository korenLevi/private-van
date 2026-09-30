/**
 * Shapes shared by every dictionary. Kept separate from routes.ts so a
 * dictionary can be checked against them without a circular import.
 */

export type PageKey =
  | 'home'
  | 'airportTransfer'
  | 'privateDriver'
  | 'jerusalemTour'
  | 'deadSeaTour'
  | 'galileeTour'
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

/**
 * Everything a page needs apart from its URL, which lives in routes.ts
 * because slugs are shared across languages.
 */
export type PageContent = {
  title: string;
  description: string;
  /** Short label for breadcrumbs and nav. */
  breadcrumb: string;
  h1: string;
  /** Key into the image registry in src/assets. */
  heroImage: string;
  heroImageAlt: string;
  lead: string;
  body: readonly BodySection[];
  /** Route ids from the config to show on this page. */
  routeIds: readonly string[];
  faq: readonly FaqItem[];
};
