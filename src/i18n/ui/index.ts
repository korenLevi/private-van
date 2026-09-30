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
  return getDictionary(locale).pages[key] as PageContent;
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
