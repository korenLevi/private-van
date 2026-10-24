/**
 * Audits the built HTML against the technical SEO rules in the brief.
 *
 * Runs after every build. Exits non-zero on a hard failure, so a regression
 * cannot ship quietly; length overruns and duplicates are reported as
 * warnings because they need an editor, not a code fix.
 */
import { readFile, readdir } from 'node:fs/promises';
import { join, relative } from 'node:path';

const DIST = 'dist';
const TITLE_MAX = 60;
const DESCRIPTION_MAX = 155;

async function htmlFiles(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await htmlFiles(path)));
    else if (entry.name.endsWith('.html')) out.push(path);
  }
  return out;
}

const attr = (html, re) => (html.match(re) ?? [])[1] ?? '';
const count = (html, re) => (html.match(re) ?? []).length;
const all = (html, re) => [...html.matchAll(re)].map((m) => m[1]);

/** Does this absolute site URL correspond to a file that was built? */
const built = (href, origin, pages) => {
  if (!href.startsWith(origin)) return true; // off-site, not ours to check
  const path = href.slice(origin.length) || '/';
  return pages.has(path);
};

const errors = [];
const warnings = [];
const titles = new Map();
const descriptions = new Map();

let files;
try {
  files = (await htmlFiles(DIST)).sort();
} catch {
  console.log('No dist/ to audit. Run `npm run build` first.');
  process.exit(0);
}

/** Every path this build actually produced, to validate links against. */
const pagePaths = new Set(
  files.map(
    (f) => '/' + relative(DIST, f).replace(/index\.html$/, '').replace(/\\/g, '/'),
  ),
);
const origin = 'https://israelprivatevan.com';

for (const file of files) {
  const html = await readFile(file, 'utf8');
  const url =
    '/' + relative(DIST, file).replace(/index\.html$/, '').replace(/\\/g, '/');
  const is404 = /(^|[\\/])404\.html$/.test(file);

  const title = attr(html, /<title>([^<]*)<\/title>/);
  const description = attr(html, /<meta name="description" content="([^"]*)"/);
  const canonical = attr(html, /<link rel="canonical" href="([^"]*)"/);
  const robots = attr(html, /<meta name="robots" content="([^"]*)"/);
  const h1s = count(html, /<h1[\s>]/g);
  const hreflangs = count(html, /rel="alternate" hreflang="/g);
  const hreflangHrefs = all(html, /rel="alternate" hreflang="[^"]*" href="([^"]+)"/g);
  const hasXDefault = html.includes('hreflang="x-default"');
  const imgsNoAlt = count(html, /<img(?![^>]*\balt=)[^>]*>/g);
  const langAttr = attr(html, /<html lang="([^"]*)"/);
  const dirAttr = attr(html, /<html[^>]*dir="([^"]*)"/);

  const add = (list, message) => list.push(`${url}  ${message}`);

  if (!title) add(errors, 'missing <title>');
  if (!description) add(errors, 'missing meta description');
  if (!langAttr) add(errors, 'missing <html lang>');
  if (h1s !== 1) add(errors, `${h1s} <h1> elements, expected exactly 1`);
  if (imgsNoAlt > 0) add(errors, `${imgsNoAlt} <img> without alt`);

  // A 404 is intentionally noindex and outside the hreflang cluster.
  if (!is404) {
    if (!canonical) add(errors, 'missing canonical');
    // Pages are not all published in every language: a guide written for one
    // audience exists in one. So rather than counting, check that the cluster
    // is self-consistent and that every URL in it was actually built. A
    // hreflang pointing at a page that does not exist is the failure that
    // actually costs rankings.
    if (!hasXDefault) add(errors, 'missing hreflang="x-default"');
    if (hreflangs < 2) add(errors, `${hreflangs} hreflang links, expected at least 2`);
    for (const href of hreflangHrefs) {
      if (!built(href, origin, pagePaths)) {
        add(errors, `hreflang points at a page that was not built: ${href}`);
      }
    }
    if (canonical && !built(canonical, origin, pagePaths)) {
      add(errors, `canonical points at a page that was not built: ${canonical}`);
    }
    if (canonical && !canonical.endsWith('/')) {
      add(errors, `canonical has no trailing slash: ${canonical}`);
    }
    if (robots.includes('noindex')) add(warnings, 'noindex (preview build?)');

    if (title.length > TITLE_MAX) {
      add(warnings, `title ${title.length} chars, limit ${TITLE_MAX}`);
    }
    if (description.length > DESCRIPTION_MAX) {
      add(warnings, `description ${description.length} chars, limit ${DESCRIPTION_MAX}`);
    }
    if (title) (titles.get(title) ?? titles.set(title, []).get(title)).push(url);
    if (description) {
      (descriptions.get(description) ?? descriptions.set(description, []).get(description)).push(url);
    }
  }

  if (langAttr === 'he' && dirAttr !== 'rtl') add(errors, 'Hebrew page is not dir="rtl"');

  // Guides live or die on being answerable and current.
  if (/\/guides\/[^/]+\/$/.test(url)) {
    if (!/<script type="application\/ld\+json">[^<]*"Article"/.test(html)) {
      add(errors, 'guide without Article structured data');
    }
    if (!/<time datetime="\d{4}-\d{2}-\d{2}"/.test(html)) {
      add(errors, 'guide without a visible update date');
    }
  }
}

for (const [value, urls] of titles) {
  if (urls.length > 1) warnings.push(`duplicate title across ${urls.length} pages: "${value.slice(0, 50)}"`);
}
for (const [value, urls] of descriptions) {
  if (urls.length > 1) {
    warnings.push(`duplicate description across ${urls.length} pages: "${value.slice(0, 50)}"`);
  }
}

console.log(`\nSEO audit: ${files.length} pages`);
if (warnings.length) {
  console.log(`\n  ${warnings.length} warning${warnings.length === 1 ? '' : 's'}`);
  for (const w of warnings) console.log(`    ${w}`);
}
if (errors.length) {
  console.log(`\n  ${errors.length} error${errors.length === 1 ? '' : 's'}`);
  for (const e of errors) console.log(`    ${e}`);
  console.log();
  process.exit(1);
}
console.log(warnings.length ? '' : '  no problems found\n');
