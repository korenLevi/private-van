import {
  DEFAULT_LOCALE,
  isLocale,
  LOCALES,
  localeDefinition,
  type Locale,
} from './config';
import { getDictionary, type Dictionary } from './ui';
import { fill } from '../lib/text';

/** Read the locale out of a URL. "/he/contact/" -> "he", "/contact/" -> "en". */
export function getLocaleFromUrl(url: URL): Locale {
  const [, first] = url.pathname.split('/');
  return first && isLocale(first) ? first : DEFAULT_LOCALE;
}

/**
 * Translation accessor. Typed against the English dictionary, so a missing
 * key in a translated file is a TypeScript error rather than a blank space.
 */
export function useTranslations(locale: Locale): Dictionary {
  return getDictionary(locale);
}

/**
 * Absolute URL for a site path. Every URL carries a trailing slash, matching
 * `trailingSlash: 'always'` in the Astro config, so the canonical, the
 * sitemap and the internal links can never disagree about which form is
 * authoritative.
 */
export function absoluteUrl(path: string, site: URL | undefined): string {
  const origin = site ? site.origin : '';
  // A file keeps its name. Appending a slash to /og-default.jpg turns it into
  // a directory that does not exist, which silently broke og:image,
  // twitter:image and LocalBusiness.logo on every page.
  const isFile = /\.[a-z0-9]{2,5}$/i.test(path);
  const withSlash = isFile || path.endsWith('/') ? path : `${path}/`;
  return `${origin}${withSlash}`;
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

export { LOCALES, DEFAULT_LOCALE, localeDefinition, fill };
export type { Locale, Dictionary };
