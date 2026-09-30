/**
 * Locale registry.
 *
 * To add Spanish, French or Russian later:
 *   1. Uncomment (or add) the entry below.
 *   2. Copy `src/i18n/ui/en.ts` to `src/i18n/ui/es.ts` and translate it,
 *      including the per-page `slug` values.
 *   3. Register it in `src/i18n/ui/index.ts`.
 *
 * No route files change. `src/pages/[...slug].astro` generates every page in
 * every locale from this list, and the layout emits the hreflang tags.
 */

export type LocaleDefinition = {
  /** URL prefix and Astro locale key. */
  code: string;
  /** Value for <html lang> and hreflang. */
  hreflang: string;
  /** Shown in a future language switcher. */
  label: string;
  dir: 'ltr' | 'rtl';
};

export const LOCALES = [
  { code: 'en', hreflang: 'en', label: 'English', dir: 'ltr' },
  // { code: 'es', hreflang: 'es', label: 'Español', dir: 'ltr' },
  // { code: 'fr', hreflang: 'fr', label: 'Français', dir: 'ltr' },
  // { code: 'ru', hreflang: 'ru', label: 'Русский', dir: 'ltr' },
] as const satisfies readonly LocaleDefinition[];

export type Locale = (typeof LOCALES)[number]['code'];

export const DEFAULT_LOCALE: Locale = 'en';

/** English is served from the root; every other locale gets a /<code> prefix. */
export const PREFIX_DEFAULT_LOCALE = false;

export const LOCALE_CODES = LOCALES.map((l) => l.code) as readonly Locale[];

export function localeDefinition(code: Locale): LocaleDefinition {
  return LOCALES.find((l) => l.code === code) ?? LOCALES[0];
}

export function isLocale(value: string): value is Locale {
  return (LOCALE_CODES as readonly string[]).includes(value);
}

/** True once a second language exists — used to show the language switcher. */
export const IS_MULTILINGUAL = LOCALES.length > 1;
