/**
 * Every business detail on the site lives here.
 *
 * Anything written as `[PLACEHOLDER]` or `[PRICE]` is a real-world fact that
 * has not been supplied yet. Nothing on the site invents prices, review text,
 * counts or policies — fill these in and the whole site updates.
 *
 * After editing, run `npm run build`; the build prints a list of any
 * placeholders still left in this file (see scripts/check-placeholders.mjs).
 */

export const PLACEHOLDER = '[PLACEHOLDER]';
export const PRICE_PLACEHOLDER = '[PRICE]';

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

export const CONTACT = {
  /** Shown to visitors, e.g. "+972 50 123 4567". */
  phoneDisplay: '+972 52 525 1806',
  /** Digits only, no "+" and no spaces — used for tel: and wa.me links. */
  phoneE164: '972525251806',
  /** WhatsApp number. Usually the same as the phone. Digits only, no "+". */
  whatsapp: '972525251806',
  /** Where quote-form copies are emailed. */
  email: 'info@israelprivatevan.com',
} as const;

export const telHref = `tel:+${CONTACT.phoneE164}`;

/** Build a wa.me link with a prefilled message. */
export function whatsappHref(message: string): string {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}

/* ------------------------------------------------------------------ */
/* Site identity                                                       */
/* ------------------------------------------------------------------ */

export const SITE = {
  url: 'https://israelprivatevan.com',
  /** Rendered as "Israel" + accented "Van" in the header wordmark. */
  nameParts: { lead: 'IsraelPrivate', accent: 'Van' },
  name: 'IsraelPrivateVan',
  legalName: 'IsraelPrivateVan',
  /** Used in the og:site_name tag and the LocalBusiness schema. */
  shortDescription:
    'Private van and driver service in Israel for English-speaking travellers.',
  /** Default social share image, in /public. 1200x630. */
  ogImage: '/og-default.jpg',
  /** Describes that image for screen readers and link previews. */
  ogImageAlt:
    'The Western Wall plaza in Jerusalem, with the gold Dome of the Rock behind it.',
  twitterHandle: '', // e.g. "@israelprivatevan" — leave empty to omit the tag
} as const;

/* ------------------------------------------------------------------ */
/* Business facts used by the LocalBusiness / TaxiService schema       */
/* ------------------------------------------------------------------ */

export const BUSINESS = {
  /** Street address is optional for a driver service; leave blank to omit. */
  address: {
    street: '',
    locality: PLACEHOLDER,
    region: '',
    postalCode: '',
    country: 'IL',
  },
  /** Coordinates of the base of operations. Used by LocalBusiness schema. */
  geo: {
    latitude: null as number | null, // e.g. 32.0853
    longitude: null as number | null, // e.g. 34.7818
  },
  /** Free-text opening hours shown in the footer. */
  hoursText: PLACEHOLDER,
  /**
   * Machine-readable hours for schema.org, e.g.
   * [{ days: ['Mo','Tu','We','Th','Su'], opens: '06:00', closes: '22:00' }]
   * Leave empty to omit openingHoursSpecification entirely.
   */
  openingHours: [] as Array<{ days: string[]; opens: string; closes: string }>,
  /** Currency for any price you fill in below. */
  currency: 'USD',
  priceRange: PLACEHOLDER, // e.g. "$$"
  /** Languages the drivers speak. */
  languages: ['English', 'Hebrew'],
  /** Profile URLs for the schema `sameAs` field. Blank entries are dropped. */
  sameAs: [] as string[],
} as const;

/* ------------------------------------------------------------------ */
/* Fleet                                                               */
/* ------------------------------------------------------------------ */

export const FLEET = {
  vehicleName: 'Mercedes-Benz Sprinter',
  /** How many vans are in the fleet. Used in the trust strip. */
  vanCount: 3,
  /** Passenger seats per van, excluding the driver. */
  seats: PLACEHOLDER, // e.g. "14"
  /** Large suitcases per van. */
  luggage: PLACEHOLDER, // e.g. "14"
  /** Model year or age description. */
  modelYear: PLACEHOLDER, // e.g. "2024"
  /**
   * Amenities. Only list things the vans actually have — these appear as
   * bullet points in the fleet section.
   */
  amenities: [
    'Air conditioning',
    'USB charging',
    'Bottled water',
    'Child seats on request',
  ],
} as const;

/* ------------------------------------------------------------------ */
/* Popular routes                                                      */
/* ------------------------------------------------------------------ */

export type Route = {
  /** Stable id, also used as the key for translated names. */
  id: string;
  from: string;
  to: string;
  /** Per van, not per person. Keep as PRICE_PLACEHOLDER until confirmed. */
  price: string;
  /** Approximate drive time, e.g. "About 1 hour". Placeholder until confirmed. */
  duration: string;
};

export const ROUTES: readonly Route[] = [
  {
    id: 'tlv-jerusalem',
    from: 'Ben Gurion Airport',
    to: 'Jerusalem',
    price: PRICE_PLACEHOLDER,
    duration: PLACEHOLDER,
  },
  {
    id: 'tlv-telaviv',
    from: 'Ben Gurion Airport',
    to: 'Tel Aviv',
    price: PRICE_PLACEHOLDER,
    duration: PLACEHOLDER,
  },
  {
    id: 'tlv-deadsea',
    from: 'Ben Gurion Airport',
    to: 'Dead Sea',
    price: PRICE_PLACEHOLDER,
    duration: PLACEHOLDER,
  },
  {
    id: 'tlv-haifa',
    from: 'Ben Gurion Airport',
    to: 'Haifa',
    price: PRICE_PLACEHOLDER,
    duration: PLACEHOLDER,
  },
  {
    id: 'tlv-tiberias',
    from: 'Ben Gurion Airport',
    to: 'Tiberias',
    price: PRICE_PLACEHOLDER,
    duration: PLACEHOLDER,
  },
  {
    id: 'tlv-eilat',
    from: 'Ben Gurion Airport',
    to: 'Eilat',
    price: PRICE_PLACEHOLDER,
    duration: PLACEHOLDER,
  },
  {
    id: 'jerusalem-deadsea',
    from: 'Jerusalem',
    to: 'Dead Sea',
    price: PRICE_PLACEHOLDER,
    duration: PLACEHOLDER,
  },
  {
    id: 'telaviv-jerusalem',
    from: 'Tel Aviv',
    to: 'Jerusalem',
    price: PRICE_PLACEHOLDER,
    duration: PLACEHOLDER,
  },
] as const satisfies readonly Route[];

/* ------------------------------------------------------------------ */
/* Full-day tours — priced per van, per day                            */
/* ------------------------------------------------------------------ */

export const DAY_TOURS = [
  { id: 'jerusalem', price: PRICE_PLACEHOLDER, duration: PLACEHOLDER },
  { id: 'dead-sea-masada', price: PRICE_PLACEHOLDER, duration: PLACEHOLDER },
  { id: 'galilee', price: PRICE_PLACEHOLDER, duration: PLACEHOLDER },
] as const;

/* ------------------------------------------------------------------ */
/* Media                                                               */
/* ------------------------------------------------------------------ */

export const MEDIA = {
  /**
   * Hero background video in /public/media. Set to null to show only the
   * poster image — no broken request, no wasted bytes.
   */
  heroVideo: {
    // null while there is no real footage: the placeholder clip in
    // /public/media is near-black and would sit on top of the hero
    // photograph, hiding it. Point this back at '/media/hero.mp4' once you
    // have a video of your own, and the poster becomes its first frame.
    mp4: null as string | null,
    webm: null as string | null, // add a webm for smaller files
  },
  /**
   * YouTube video id for the facade player in the fleet section.
   * Set to null to hide the video block entirely.
   */
  youtubeId: null as string | null, // e.g. "dQw4w9WgXcQ"
} as const;

/* ------------------------------------------------------------------ */
/* Quote form options                                                  */
/* ------------------------------------------------------------------ */

export const SERVICE_TYPES = [
  { id: 'airport-transfer', labelKey: 'service.airportTransfer' },
  { id: 'full-day', labelKey: 'service.fullDay' },
  { id: 'city-to-city', labelKey: 'service.cityToCity' },
] as const;

export type ServiceTypeId = (typeof SERVICE_TYPES)[number]['id'];

/** Largest party the form offers. Raise it if you run more than one van. */
export const MAX_PASSENGERS = 16;

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

/**
 * True when a value still contains an unfilled placeholder.
 *
 * Matches the bare markers and the explanatory form used in the copy,
 * `[PLACEHOLDER — describe how you handle delayed flights.]`, so that text can
 * be visible on the page as a reminder while staying out of the structured
 * data.
 */
const PLACEHOLDER_PATTERN = /\[(?:PLACEHOLDER|PRICE)\b/;

export function isPlaceholder(value: string): boolean {
  return PLACEHOLDER_PATTERN.test(value);
}
