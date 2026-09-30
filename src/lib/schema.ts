/**
 * JSON-LD builders.
 *
 * Every builder runs its output through `prune()`, which removes empty values
 * and anything still marked `[PLACEHOLDER]`. Unfilled config never reaches the
 * structured data, so Google is never handed a fake address, rating or price.
 */
import { BUSINESS, CONTACT, FLEET, SITE, isPlaceholder } from '../config/site';

type Json = Record<string, unknown>;

/** Drop nulls, empty strings, empty arrays and unfilled placeholders. */
function prune<T>(value: T): T | undefined {
  if (value === null || value === undefined) return undefined;
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (trimmed === '' || isPlaceholder(trimmed)) return undefined;
    return trimmed as unknown as T;
  }
  if (Array.isArray(value)) {
    const items = value.map(prune).filter((v) => v !== undefined);
    return (items.length ? items : undefined) as unknown as T;
  }
  if (typeof value === 'object') {
    const out: Json = {};
    for (const [key, raw] of Object.entries(value as Json)) {
      const cleaned = prune(raw);
      if (cleaned !== undefined) out[key] = cleaned;
    }
    // An object holding only its @type carries no information.
    const meaningful = Object.keys(out).filter((k) => k !== '@type');
    return (meaningful.length ? out : undefined) as unknown as T;
  }
  return value;
}

const businessId = `${SITE.url}/#business`;

function postalAddress() {
  return {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.locality,
    addressRegion: BUSINESS.address.region,
    postalCode: BUSINESS.address.postalCode,
    addressCountry: BUSINESS.address.country,
  };
}

function geoCoordinates() {
  if (BUSINESS.geo.latitude === null || BUSINESS.geo.longitude === null) {
    return undefined;
  }
  return {
    '@type': 'GeoCoordinates',
    latitude: BUSINESS.geo.latitude,
    longitude: BUSINESS.geo.longitude,
  };
}

function openingHours() {
  if (BUSINESS.openingHours.length === 0) return undefined;
  return BUSINESS.openingHours.map((slot) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: slot.days,
    opens: slot.opens,
    closes: slot.closes,
  }));
}

/** Phone in +E.164 form, or undefined while it is still a placeholder. */
function telephone(): string | undefined {
  const digits = CONTACT.phoneE164;
  if (!digits || /^9720+$/.test(digits) || /^0+$/.test(digits)) return undefined;
  return `+${digits}`;
}

/* ------------------------------------------------------------------ */
/* LocalBusiness + TaxiService (homepage)                              */
/* ------------------------------------------------------------------ */

export function localBusinessSchema(description: string, imageUrl: string) {
  return prune({
    '@type': 'LocalBusiness',
    '@id': businessId,
    name: SITE.name,
    legalName: SITE.legalName,
    description,
    url: SITE.url,
    image: imageUrl,
    logo: imageUrl,
    telephone: telephone(),
    email: CONTACT.email,
    address: postalAddress(),
    geo: geoCoordinates(),
    openingHoursSpecification: openingHours(),
    priceRange: BUSINESS.priceRange,
    currenciesAccepted: BUSINESS.currency,
    areaServed: { '@type': 'Country', name: 'Israel' },
    knowsLanguage: [...BUSINESS.languages],
    sameAs: [...BUSINESS.sameAs],
  });
}

export function taxiServiceSchema(description: string, serviceType: string) {
  return prune({
    '@type': 'TaxiService',
    '@id': `${SITE.url}/#taxiservice`,
    name: `${SITE.name} — private van and driver`,
    description,
    serviceType,
    provider: { '@id': businessId },
    areaServed: { '@type': 'Country', name: 'Israel' },
    availableLanguage: [...BUSINESS.languages],
    // Prices stay out of the schema until they are real. Adding a fake
    // `priceRange` or `offers.price` is worse than having none.
    vehicle: {
      '@type': 'Vehicle',
      name: FLEET.vehicleName,
      vehicleSeatingCapacity: /^\d+$/.test(FLEET.seats)
        ? Number(FLEET.seats)
        : undefined,
    },
  });
}

export function websiteSchema() {
  return prune({
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    publisher: { '@id': businessId },
    inLanguage: 'en',
  });
}

/* ------------------------------------------------------------------ */
/* FAQPage                                                             */
/* ------------------------------------------------------------------ */

export function faqSchema(items: ReadonlyArray<{ q: string; a: string }>) {
  const entities = items
    .filter((item) => !isPlaceholder(item.a))
    .map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    }));

  if (entities.length === 0) return undefined;

  return {
    '@type': 'FAQPage',
    mainEntity: entities,
  };
}

/* ------------------------------------------------------------------ */
/* BreadcrumbList                                                      */
/* ------------------------------------------------------------------ */

export function breadcrumbSchema(
  trail: ReadonlyArray<{ name: string; url: string }>,
) {
  if (trail.length < 2) return undefined;
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

/* ------------------------------------------------------------------ */
/* Assembly                                                            */
/* ------------------------------------------------------------------ */

/**
 * Wrap the page's schema objects in a single @graph, which is smaller than
 * several separate <script> blocks and lets the nodes reference each other
 * by @id.
 */
export function graph(...nodes: Array<unknown>): string {
  const present = nodes.filter((n) => n !== undefined && n !== null);
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': present,
  });
}
