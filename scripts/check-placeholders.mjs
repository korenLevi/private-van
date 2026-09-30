/**
 * Lists every unfilled placeholder left in the content and config.
 *
 * Runs automatically after `npm run build`, and on its own with
 * `npm run check:placeholders`. It never fails the build — placeholders are
 * expected before launch — it just makes sure none of them ship unnoticed.
 *
 * Anything reported here is also kept out of the structured data by
 * `prune()` in src/lib/schema.ts, so an unfilled value is never published as
 * a fact about the business.
 */
import { readFile, readdir } from 'node:fs/promises';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const PATTERN = /\[(?:PLACEHOLDER|PRICE)\b[^\]]*\]/g;

const FILES = [
  'src/config/site.ts',
  'src/data/reviews.json',
  ...(await readdir(join(root, 'src/i18n/ui')))
    .filter((f) => f.endsWith('.ts') && f !== 'index.ts')
    .map((f) => `src/i18n/ui/${f}`),
];

const findings = [];

for (const file of FILES) {
  let source;
  try {
    source = await readFile(join(root, file), 'utf8');
  } catch {
    continue;
  }

  const lines = source.split('\n');
  lines.forEach((line, index) => {
    for (const match of line.matchAll(PATTERN)) {
      findings.push({
        file,
        line: index + 1,
        text: match[0].length > 72 ? `${match[0].slice(0, 69)}…` : match[0],
      });
    }
  });
}

if (findings.length === 0) {
  console.log('\n✓ No placeholders left — every business detail is filled in.\n');
  process.exit(0);
}

const byFile = new Map();
for (const finding of findings) {
  if (!byFile.has(finding.file)) byFile.set(finding.file, []);
  byFile.get(finding.file).push(finding);
}

console.log(
  `\n${findings.length} placeholder${findings.length === 1 ? '' : 's'} still to fill in:\n`,
);
for (const [file, items] of byFile) {
  console.log(`  ${relative('.', file)}`);
  for (const item of items) {
    console.log(`    ${String(item.line).padStart(4)}  ${item.text}`);
  }
  console.log();
}
console.log(
  'These are safe to deploy: none of them reach the JSON-LD, and the site\n' +
    'works without them. Replace them before you start buying traffic.\n',
);
