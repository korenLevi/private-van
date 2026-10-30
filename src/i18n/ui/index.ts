import { DEFAULT_LOCALE, type Locale } from '../config';
import type { PageContent, PageKey } from '../types';
import en from './en';
import he from './he';
import ru from './ru';

/**
 * Widen the literal types that `as const` produces, so a translated
 * dictionary may hold different strings while still being checked for the
 * same shape.
 */
type Widen<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends readonly (infer U)[]
        ? readonly Widen<U>[]
        : T extends object
          ? { readonly [K in keyof T]: Widen<T[K]> }
          : T;

export type Dictionary = Widen<typeof en>;

/**
 * A translated dictionary may be partial. Anything it leaves out falls back
 * to English, which keeps the build green while Hebrew and Russian are still
 * being written, and means a single missing string shows in English rather
 * than blanking a page.
 *
 * Arrays are replaced whole, never merged item by item: a half-translated
 * list of four trust points would otherwise come out in two languages.
 */
export type Translation<T = Dictionary> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends readonly (infer U)[]
        ? readonly Translation<U>[]
        : T extends object
          ? { readonly [K in keyof T]?: Translation<T[K]> }
          : T;

function merge<T>(base: T, override: unknown): T {
  if (override === undefined || override === null) return base;
  if (Array.isArray(base)) return (Array.isArray(override) ? override : base) as T;
  if (typeof base === 'object' && base !== null && typeof override === 'object') {
    const out: Record<string, unknown> = { ...(base as Record<string, unknown>) };
    for (const [key, value] of Object.entries(override as Record<string, unknown>)) {
      if (value === undefined) continue;
      out[key] = merge((base as Record<string, unknown>)[key], value);
    }
    return out as T;
  }
  return override as T;
}

const overrides: Partial<Record<Locale, Translation>> = { he, ru };

const dictionaries = Object.fromEntries(
  (['en', 'he', 'ru'] as Locale[]).map((locale) => [
    locale,
    locale === DEFAULT_LOCALE ? (en as Dictionary) : merge(en as Dictionary, overrides[locale]),
  ]),
) as Record<Locale, Dictionary>;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}

/**
 * One page's content, typed as PageContent.
 *
 * The cast widens what `as const` narrowed: an empty array in a dictionary
 * becomes `readonly never[]`, which is true but useless to a caller that
 * iterates it. The shape is checked where it is written.
 */
export function getPage(locale: Locale, key: PageKey): PageContent {
  const page = getDictionary(locale).pages[key];
  if (!page) {
    // Routes are generated only for the locales a page is published in, so
    // reaching here means a link points somewhere that was never built.
    throw new Error(`No content for page "${key}" in locale "${locale}".`);
  }
  return withoutPlaceholders(page as PageContent);
}

/**
 * Placeholders mark facts the owner has not confirmed yet. They stay in the
 * dictionaries (npm run build lists them) but never reach a visitor: a
 * sentence loses its bracketed note, and a paragraph, list item, FAQ answer
 * or section left with nothing in it is dropped.
 */
const PLACEHOLDER_TEXT = /\s*\[(?:PLACEHOLDER|PRICE)\b[^\]]*\]/g;

const strip = (text: string) => text.replace(PLACEHOLDER_TEXT, '').trim();
const stripAll = (list: readonly string[]) => list.map(strip).filter(Boolean);

function withoutPlaceholders(page: PageContent): PageContent {
  return {
    ...page,
    intro: strip(page.intro),
    summary: page.summary === undefined ? undefined : strip(page.summary),
    included: stripAll(page.included),
    body: page.body
      .map((section) => ({
        ...section,
        paragraphs: stripAll(section.paragraphs),
        bullets: stripAll(section.bullets),
      }))
      .filter((section) => section.paragraphs.length > 0 || section.bullets.length > 0),
    faq: page.faq
      .map((item) => ({ q: strip(item.q), a: strip(item.a) }))
      .filter((item) => item.q && item.a),
    trip: page.trip && {
      vehicle: strip(page.trip.vehicle),
      seats: strip(page.trip.seats),
      pickup: strip(page.trip.pickup),
      availability: strip(page.trip.availability),
    },
    table: page.table && {
      ...page.table,
      rows: page.table.rows.map((row) => row.map(strip)),
      note: page.table.note === undefined ? undefined : strip(page.table.note),
    },
  };
}

/** The pages a locale actually publishes, for nav built from a key list. */
export function hasPage(locale: Locale, key: PageKey): boolean {
  return Boolean(getDictionary(locale).pages[key]);
}

/** How much of a locale is actually translated, for the step 7 report. */
export function translationCoverage(locale: Locale): number {
  if (locale === DEFAULT_LOCALE) return 1;
  const override = overrides[locale];
  if (!override) return 0;
  const count = (value: unknown): number => {
    if (typeof value === 'string') return 1;
    if (Array.isArray(value)) return value.reduce<number>((n, v) => n + count(v), 0);
    if (value && typeof value === 'object') {
      return Object.values(value).reduce<number>((n, v) => n + count(v), 0);
    }
    return 0;
  };
  return count(override) / count(en);
}

export { en, he, ru };
