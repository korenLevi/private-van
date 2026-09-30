/**
 * Generates labelled placeholder photos so the site builds and looks finished
 * before the real photography arrives.
 *
 *   npm run placeholders
 *
 * Each file is labelled with what it should eventually be and at what size.
 * To use a real photo, overwrite the file of the same name in src/assets/ —
 * nothing else needs to change. Delete this script once every image is real.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const assetsDir = join(root, 'src', 'assets');
const publicDir = join(root, 'public');

const INK = '#141414';
const SAND = '#F7F5F1';
const LINE = '#ECE8E1';
const GOLD = '#B08A4E';
const MUTED = '#4E4A44';

/** @type {Array<{file: string, w: number, h: number, label: string, tone?: 'light'|'dark', dir?: string}>} */
const IMAGES = [
  // Hero
  { file: 'hero-poster.jpg', w: 1920, h: 1080, label: 'Hero — Sprinter van on the road at dusk', tone: 'dark' },

  // Services
  { file: 'service-airport-transfer.jpg', w: 1000, h: 750, label: 'Service — loading bags at the airport' },
  { file: 'service-full-day.jpg', w: 1000, h: 750, label: 'Service — driver at the open side door' },
  { file: 'service-city-to-city.jpg', w: 1000, h: 750, label: 'Service — van on the highway' },

  // Fleet gallery
  { file: 'fleet-exterior.jpg', w: 1200, h: 900, label: 'Fleet — van, front three-quarter' },
  { file: 'fleet-interior.jpg', w: 1000, h: 750, label: 'Fleet — passenger seats' },
  { file: 'fleet-luggage.jpg', w: 1000, h: 750, label: 'Fleet — luggage area' },
  { file: 'fleet-side-door.jpg', w: 1000, h: 750, label: 'Fleet — open side door' },
  { file: 'fleet-seats-detail.jpg', w: 1000, h: 750, label: 'Fleet — seat and belt detail' },
  { file: 'fleet-on-road.jpg', w: 1000, h: 750, label: 'Fleet — van at a viewpoint' },

  // Inner page heroes
  { file: 'page-ben-gurion-airport-transfer.jpg', w: 1800, h: 1013, label: 'Ben Gurion arrivals kerbside', tone: 'dark' },
  { file: 'page-private-driver-israel.jpg', w: 1800, h: 1013, label: 'Driver holding the van door open', tone: 'dark' },
  { file: 'page-jerusalem-day-tour.jpg', w: 1800, h: 1013, label: 'Jerusalem Old City rooftops', tone: 'dark' },
  { file: 'page-dead-sea-masada.jpg', w: 1800, h: 1013, label: 'Dead Sea shoreline and cliffs', tone: 'dark' },
  { file: 'page-galilee.jpg', w: 1800, h: 1013, label: 'Hills above the Sea of Galilee', tone: 'dark' },
  { file: 'page-contact.jpg', w: 1800, h: 1013, label: 'Van at the kerb, side door open', tone: 'dark' },

  // Social card lives in /public — it is referenced by absolute URL, not imported
  { file: 'og-default.jpg', w: 1200, h: 630, label: 'IsraelPrivateVan — social share card', tone: 'dark', dir: publicDir },
];

/** Break a label into lines that fit the given character budget. */
function wrap(text, maxChars) {
  const words = text.split(' ');
  const lines = [];
  let line = '';
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (next.length > maxChars && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function escapeXml(value) {
  return value.replace(/[<>&'"]/g, (c) =>
    ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[c],
  );
}

/**
 * Light placeholders (cards, gallery) carry a big centred label, because
 * nothing is drawn on top of them.
 *
 * Dark placeholders sit behind a hero's white heading, so their label goes
 * quietly along the bottom edge instead — otherwise the two collide and the
 * page looks broken when it is not.
 */
function svgFor({ w, h, label, tone = 'light' }) {
  const dark = tone === 'dark';
  const bg = dark ? INK : SAND;
  const base = Math.min(w, h);
  const pad = Math.round(base * 0.07);
  const metaSize = Math.round(base * 0.028);

  const frame = `<defs>
    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${dark ? '#211d18' : '#FFFFFF'}" stop-opacity="${dark ? 1 : 0.65}"/>
      <stop offset="100%" stop-color="${bg}" stop-opacity="1"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="${bg}"/>
  <rect width="${w}" height="${h}" fill="url(#g)"/>`;

  if (dark) {
    const size = Math.round(base * 0.032);
    return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  ${frame}
  <rect x="${pad}" y="${h - pad - size * 2.6}" width="${Math.round(base * 0.1)}" height="2" fill="${GOLD}" opacity="0.7"/>
  <text x="${pad}" y="${h - pad - size * 0.6}" font-family="Helvetica, Arial, sans-serif" font-size="${size}" fill="rgba(255,255,255,0.4)">${escapeXml(label)}</text>
  <text x="${w - pad}" y="${h - pad - size * 0.6}" text-anchor="end" font-family="Helvetica, Arial, sans-serif" font-size="${size}" fill="rgba(255,255,255,0.28)">PLACEHOLDER ${w} × ${h}</text>
</svg>`);
  }

  const fg = INK;
  const sub = MUTED;
  const border = LINE;
  const titleSize = Math.round(base * 0.052);

  const lines = wrap(label, 30);
  const lineHeight = titleSize * 1.28;
  const blockHeight = lines.length * lineHeight;
  const startY = h / 2 - blockHeight / 2 + titleSize * 0.82;

  const textEls = lines
    .map(
      (line, i) =>
        `<text x="${w / 2}" y="${startY + i * lineHeight}" text-anchor="middle" ` +
        `font-family="Helvetica, Arial, sans-serif" font-size="${titleSize}" ` +
        `font-weight="500" fill="${fg}">${escapeXml(line)}</text>`,
    )
    .join('');

  const ruleY = startY + blockHeight + titleSize * 0.55;
  const ruleW = Math.round(base * 0.13);

  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  ${frame}
  <rect x="${pad / 2}" y="${pad / 2}" width="${w - pad}" height="${h - pad}" fill="none" stroke="${border}" stroke-width="${Math.max(1, Math.round(base * 0.003))}"/>
  <text x="${w / 2}" y="${pad + metaSize}" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="${metaSize}" font-weight="700" letter-spacing="${metaSize * 0.18}" fill="${GOLD}">PLACEHOLDER</text>
  ${textEls}
  <rect x="${w / 2 - ruleW / 2}" y="${ruleY}" width="${ruleW}" height="${Math.max(2, Math.round(base * 0.005))}" fill="${GOLD}"/>
  <text x="${w / 2}" y="${h - pad}" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="${metaSize}" fill="${sub}">${w} × ${h}</text>
</svg>`);
}

await mkdir(assetsDir, { recursive: true });
await mkdir(publicDir, { recursive: true });

for (const image of IMAGES) {
  const target = join(image.dir ?? assetsDir, image.file);
  const buffer = await sharp(svgFor(image))
    .jpeg({ quality: 82, progressive: true, mozjpeg: true })
    .toBuffer();
  await writeFile(target, buffer);
  console.log(`  ${image.file.padEnd(42)} ${image.w}×${image.h}`);
}

console.log(`\n${IMAGES.length} placeholder images written.`);
console.log('Replace any of them by overwriting the file of the same name.');
