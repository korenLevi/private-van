import {
  DEFAULT_LOCALE,
  isLocale,
  LOCALES,
  localeDefinition,
  type Locale,
} from './config';
import { getDictionary, type Dictionary } from './ui';

/**
 * Read the locale out of a URL. "/es/contacto" -> "es", "/contact" -> "en".
 */
export function getLocaleFromUrl(url: URL): Locale {
  const [, first] = url.pathname.split('/');
  return first && isLocale(first) ? first : DEFAULT_LOCALE;
}

/**
 * Translation accessor for a locale.
 *
 *   const t = useTranslations(locale);
 *   t.nav.services
 *
 * Typed against the English dictionary, so a missing key in a translated file
 * is a TypeScript error rather than a blank space on the page.
 */
export function useTranslations(locale: Locale): Dictionary {
  return getDictionary(locale);
}

/** Absolute URL for a path, using the configured site origin. */
export function absoluteUrl(path: string, site: URL | undefined): string {
  const origin = site ? site.origin : '';
  return `${origin}${path === '/' ? '/' : path.replace(/\/$/, '')}`;
}

/** hreflang entries for the <head>, including x-default. */
export function hreflangLinks(
  alternates: Array<{ locale: Locale; path: string }>,
  site: URL | undefined,
): Array<{ hreflang: string; href: string }> {
  const links = alternates.map(({ locale, path }) => ({
    hreflang: localeDefinition(locale).hreflang,
    href: absoluteUrl(path, site),
  }));

  const fallback = alternates.find((a) => a.locale === DEFAULT_LOCALE);
  if (fallback) {
    links.push({ hreflang: 'x-default', href: absoluteUrl(fallback.path, site) });
  }
  return links;
}

/** Interpolate {name} tokens in a translated string. */
export function fill(
  template: string,
  values: Record<string, string | number>,
): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}

export { LOCALES, DEFAULT_LOCALE, localeDefinition };
export type { Locale, Dictionary };
