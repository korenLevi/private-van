import { DEFAULT_LOCALE, type Locale } from '../config';
import type { PageContent, PageKey } from '../types';
import en from './en';

/**
 * Widen the literal types that `as const` produces in a dictionary file, so a
 * translated dictionary is allowed to hold different strings while still being
 * checked for the same shape. Miss a key in `es.ts` and TypeScript says so.
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
 * Register a new language here after adding its file.
 *   import es from './es';
 *   const dictionaries = { en, es } satisfies Record<Locale, Dictionary>;
 */
const dictionaries: Partial<Record<Locale, Dictionary>> = {
  en,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? (dictionaries[DEFAULT_LOCALE] as Dictionary);
}

/**
 * One page's content, typed as PageContent.
 *
 * The cast is what lets every page share a template: `as const` in a
 * dictionary narrows empty arrays to `readonly never[]`, which is true but
 * useless to a caller that iterates them. Each dictionary's `pages` object
 * carries `satisfies Record<PageKey, PageContent>`, so the shape is checked
 * where it is written and this only widens it back.
 */
export function getPage(locale: Locale, key: PageKey): PageContent {
  return getDictionary(locale).pages[key] as PageContent;
}

export { en };
