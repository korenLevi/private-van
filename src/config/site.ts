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
  email: 'israelprivatevan@gmail.com',
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
  /** Rendered as "Israel Private" + accented "Van" in the wordmark. */
  nameParts: { lead: 'Israel Private', accent: 'Van' },
  name: 'Israel Private Van',
  /** The brand as Hebrew speakers write it. */
  nameHe: 'ישראל פרייבט ואן',
  legalName: 'Amir Levi Transportation Services Ltd.',
  /** The registered name as it appears in Hebrew records. */
  legalNameHe: 'אמיר לוי שירותי הסעות בע"מ',
  /** Used in the og:site_name tag and the LocalBusiness schema. */
  shortDescription:
    'Private van and driver service in Israel for English-speaking travellers.',
  /**
   * Square logo in /public, 512x512. Google wants a logo it can crop to a
   * square for the knowledge panel and Business Profile, which the 1200x630
   * social card is the wrong shape for.
   */
  logo: '/logo-512.png',
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
    locality: 'Holon',
    region: '',
    postalCode: '',
    country: 'IL',
  },
  /** Coordinates of the base of operations. Used by LocalBusiness schema. */
  geo: {
    latitude: null as number | null, // e.g. 32.0853
    longitude: null as number | null, // e.g. 34.7818
  },
  /**
   * Machine-readable hours for schema.org. The service runs around the
   * clock, nights, Shabbat and holidays included. The visible wording lives
   * in the dictionaries (`footer.hoursText`), so it is translated.
   */
  openingHours: [
    { days: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'], opens: '00:00', closes: '23:59' },
  ] as Array<{ days: string[]; opens: string; closes: string }>,
  /** Currency for any price you fill in below. */
  currency: 'USD',
  /**
   * Left empty on purpose: prices depend on the route and the job and are
   * quoted on request, so none is published. `prune()` drops the field.
   */
  priceRange: '',
  /** Languages the drivers speak. */
  languages: ['Hebrew', 'English', 'Russian'],
  /** Profile URLs for the schema `sameAs` field. Blank entries are dropped. */
  sameAs: [] as string[],
} as const;

/* ------------------------------------------------------------------ */
/* Fleet                                                               */
/* ------------------------------------------------------------------ */

export const FLEET = {
  /**
   * The vehicles actually operated. No fleet size is published: the brief
   * gives none, and a count is exactly the kind of number that must not be
   * invented.
   */
  vehicles: [
    { name: 'Mercedes-Benz Sprinter', seats: '⁦12–15⁩' },
    { name: 'Savanna', seats: '⁦12–15⁩' },
  ],
  /** Used wherever one vehicle name reads better than a list. */
  vehicleName: 'Mercedes Sprinter',
  /** Passenger seats per vehicle, excluding the driver. Varies by van. */
  /*
   * Wrapped in Unicode isolates (U+2066 / U+2069). A range like 12-15 sits
   * inside Hebrew sentences all over the site, and without the isolates the
   * bidi algorithm renders it as 15-12. Invisible in English and Russian.
   */
  seats: '⁦12–15⁩',
  /**
   * No luggage count is published: it depends on the van and on how many
   * seats are taken, so the copy asks visitors to say what they are bringing.
   */
  /** Model years across the fleet. */
  modelYear: '2024–2026',
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
/* Track record                                                        */
/* ------------------------------------------------------------------ */

/**
 * Supplied by the business. Both are real figures, so they may be stated on
 * the site; anything not listed here stays a placeholder.
 */
export const TRACK_RECORD = {
  yearsInBusiness: 30,
  /** Stated as "over 200", never as an exact count. */
  regularCustomersOver: 200,
} as const;

/* ------------------------------------------------------------------ */
/* Popular routes                                                      */
/* ------------------------------------------------------------------ */

/**
 * No price or drive time is published per route: both depend on the job and
 * the hour, so every route card asks the visitor to message for a quote.
 */
export type Route = {
  /** Stable id, also used as the key for translated names. */
  id: string;
  from: string;
  to: string;
};

export const ROUTES: readonly Route[] = [
  {
    id: 'tlv-jerusalem',
    from: 'Ben Gurion Airport',
    to: 'Jerusalem',
  },
  {
    id: 'tlv-telaviv',
    from: 'Ben Gurion Airport',
    to: 'Tel Aviv',
  },
  {
    id: 'tlv-deadsea',
    from: 'Ben Gurion Airport',
    to: 'Dead Sea',
  },
  {
    id: 'tlv-haifa',
    from: 'Ben Gurion Airport',
    to: 'Haifa',
  },
  {
    id: 'tlv-tiberias',
    from: 'Ben Gurion Airport',
    to: 'Tiberias',
  },
  {
    id: 'tlv-eilat',
    from: 'Ben Gurion Airport',
    to: 'Eilat',
  },
  {
    id: 'jerusalem-deadsea',
    from: 'Jerusalem',
    to: 'Dead Sea',
  },
  {
    id: 'telaviv-jerusalem',
    from: 'Tel Aviv',
    to: 'Jerusalem',
  },
] as const satisfies readonly Route[];

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
 * `[PLACEHOLDER: describe how you handle delayed flights.]`, so that text can
 * be visible on the page as a reminder while staying out of the structured
 * data.
 */
const PLACEHOLDER_PATTERN = /\[(?:PLACEHOLDER|PRICE)\b/;

export function isPlaceholder(value: string): boolean {
  return PLACEHOLDER_PATTERN.test(value);
}
