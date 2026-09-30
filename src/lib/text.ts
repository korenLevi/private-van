/**
 * Tiny string helpers shared by the Astro components and the React island.
 * Kept free of imports so pulling it into the client bundle costs almost
 * nothing.
 */

/** Replace {name} tokens in a template. Unknown tokens are left alone. */
export function fill(
  template: string,
  values: Record<string, string | number>,
): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}

/**
 * Tidy a filled message: drop "Label:" lines whose value came back empty,
 * and collapse runs of blank lines.
 */
export function compactMessage(message: string): string {
  const kept: string[] = [];
  for (const line of message.split('\n')) {
    const trimmed = line.trim();
    if (/^[^:]+:\s*$/.test(trimmed)) continue;
    if (trimmed === '' && kept.at(-1)?.trim() === '') continue;
    kept.push(line);
  }
  return kept.join('\n').trim();
}

/** wa.me link with a prefilled message. Number is digits only, no "+". */
export function waLink(number: string, message: string): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/** Today as YYYY-MM-DD in the visitor's own timezone, for a date input `min`. */
export function todayISO(): string {
  const now = new Date();
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60_000);
  return local.toISOString().slice(0, 10);
}
