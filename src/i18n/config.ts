/**
 * Locale registry.
 *
 * Three full versions of the site, not word-for-word translations. English is
 * served from the root and is the x-default; Hebrew and Russian sit under
 * /he/ and /ru/.
 *
 * URL slugs stay in Latin letters in every language (see src/i18n/routes.ts),
 * so a Hebrew page is /he/airport-transfers/ rather than a percent-encoded
 * Hebrew string.
 */

export type LocaleDefinition = {
  /** URL prefix and Astro locale key. */
  code: string;
  /** Value for <html lang> and the hreflang attribute. */
  hreflang: string;
  /** Value for og:locale. */
  ogLocale: string;
  /** Shown in the language switcher, in its own language. */
  label: string;
  /** Short code shown on narrow screens. */
  short: string;
  dir: 'ltr' | 'rtl';
};

export const LOCALES = [
  { code: 'en', hreflang: 'en', ogLocale: 'en_US', label: 'English', short: 'EN', dir: 'ltr' },
  { code: 'he', hreflang: 'he', ogLocale: 'he_IL', label: 'עברית', short: 'HE', dir: 'rtl' },
  { code: 'ru', hreflang: 'ru', ogLocale: 'ru_RU', label: 'Русский', short: 'RU', dir: 'ltr' },
] as const satisfies readonly LocaleDefinition[];

export type Locale = (typeof LOCALES)[number]['code'];

export const DEFAULT_LOCALE: Locale = 'en';

/** English lives at the root; every other locale gets a /<code> prefix. */
export const PREFIX_DEFAULT_LOCALE = false;

export const LOCALE_CODES = LOCALES.map((l) => l.code) as readonly Locale[];

export function localeDefinition(code: Locale): LocaleDefinition {
  return LOCALES.find((l) => l.code === code) ?? LOCALES[0];
}

export function isLocale(value: string): value is Locale {
  return (LOCALE_CODES as readonly string[]).includes(value);
}

export const IS_MULTILINGUAL = LOCALES.length > 1;
