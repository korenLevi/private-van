/**
 * POST /api/quote — emails the business a copy of a quote request.
 *
 * The visitor is already in WhatsApp by the time this runs; this is only so a
 * request is never lost if they close the chat without sending. It therefore
 * never returns an error the form would have to explain: if email is not
 * configured, it says so in the response body and still returns 200.
 *
 * Configure in the Cloudflare Pages dashboard (Settings → Environment
 * variables), or in `.dev.vars` for `wrangler pages dev`:
 *
 *   RESEND_API_KEY    API key from resend.com
 *   QUOTE_TO_EMAIL    where enquiries land, e.g. hello@israelprivatevan.com
 *   QUOTE_FROM_EMAIL  a verified sender on your domain, e.g. site@israelprivatevan.com
 *
 * Using a different provider is a change to `sendEmail` only.
 */

type Env = {
  RESEND_API_KEY?: string;
  QUOTE_TO_EMAIL?: string;
  QUOTE_FROM_EMAIL?: string;
};

type EventContext = {
  request: Request;
  env: Env;
  waitUntil: (promise: Promise<unknown>) => void;
};

type QuotePayload = {
  service?: string;
  from?: string;
  to?: string;
  date?: string;
  passengers?: string;
  name?: string;
  phone?: string;
  email?: string;
  notes?: string;
  message?: string;
  source?: string;
};

const MAX_BODY_BYTES = 8 * 1024;
const MAX_FIELD_LENGTH = 1000;
const MAX_MESSAGE_LENGTH = 4000;

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  });

/** Trim, cap length, and strip characters that let a value forge a header. */
function clean(value: unknown): string {
  if (typeof value !== 'string') return '';
  return value.replace(/[\r\n]+/g, ' ').trim().slice(0, MAX_FIELD_LENGTH);
}

/**
 * Same as `clean`, but keeps newlines — a message body is meant to have
 * them. Carriage returns still go, so a value cannot forge a mail header.
 */
function cleanMultiline(value: unknown): string {
  if (typeof value !== 'string') return '';
  return value
    .replace(/\r/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
    .slice(0, MAX_MESSAGE_LENGTH);
}

function escapeHtml(value: string): string {
  return value.replace(
    /[&<>"']/g,
    (char) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      })[char] as string,
  );
}

async function handlePost(context: EventContext): Promise<Response> {
  const { request, env } = context;

  // Only accept posts from this site's own pages.
  const origin = request.headers.get('origin');
  if (origin) {
    const site = new URL(request.url).origin;
    if (origin !== site) return json({ ok: false, error: 'bad_origin' }, 403);
  }

  const length = Number(request.headers.get('content-length') ?? '0');
  if (length > MAX_BODY_BYTES) {
    return json({ ok: false, error: 'too_large' }, 413);
  }

  let payload: QuotePayload;
  try {
    payload = (await request.json()) as QuotePayload;
  } catch {
    return json({ ok: false, error: 'bad_json' }, 400);
  }

  const fields = {
    service: clean(payload.service),
    from: clean(payload.from),
    to: clean(payload.to),
    date: clean(payload.date),
    passengers: clean(payload.passengers),
    name: clean(payload.name),
    phone: clean(payload.phone),
    email: clean(payload.email),
    notes: clean(payload.notes),
    message: cleanMultiline(payload.message),
    source: clean(payload.source),
  };

  // The hero form sends a trip; the footer form sends a message. Either is
  // a real enquiry, so accept a submission carrying either shape.
  const hasTrip = Boolean(fields.from || fields.to || fields.service);
  const hasMessage = Boolean(fields.message && (fields.phone || fields.email));
  if (!hasTrip && !hasMessage) {
    return json({ ok: false, error: 'empty' }, 400);
  }

  const to = env.QUOTE_TO_EMAIL;
  const from = env.QUOTE_FROM_EMAIL;
  const apiKey = env.RESEND_API_KEY;

  if (!to || !from || !apiKey) {
    // Not an error the visitor needs to see — WhatsApp already has the message.
    return json({
      ok: true,
      delivered: false,
      reason: 'email_not_configured',
    });
  }

  const rows: Array<[string, string]> = (
    [
      ['Service', fields.service],
      ['From', fields.from],
      ['To', fields.to],
      ['Date', fields.date],
      ['Passengers', fields.passengers],
      ['Name', fields.name],
      ['Phone', fields.phone],
      ['Email', fields.email],
      ['Notes', fields.notes],
      // Only the message-shaped enquiry needs this; a trip enquiry's own
      // rows above already say everything the composed text would repeat.
      ['Message', hasTrip ? '' : fields.message],
      ['Sent from', fields.source],
    ] as Array<[string, string]>
  ).filter(([, value]) => value !== '');

  const subject = hasTrip
    ? `Quote request: ${fields.from || '?'} → ${fields.to || '?'}${
        fields.date ? ` (${fields.date})` : ''
      }`
    : `Quote request from ${fields.name || 'the website'}`;

  const delivered = await sendEmail(
    { apiKey, to, from, replyTo: fields.email || undefined, subject, rows },
  );

  return json(
    delivered.ok
      ? { ok: true, delivered: true }
      : { ok: true, delivered: false, reason: delivered.reason },
  );
}

/** Single entry point, so there is no ambiguity about which handler runs. */
export const onRequest = async (context: EventContext): Promise<Response> => {
  if (context.request.method === 'POST') return handlePost(context);
  return new Response('Method Not Allowed', {
    status: 405,
    headers: { allow: 'POST' },
  });
};

/* ------------------------------------------------------------------ */
/* Email provider                                                      */
/* ------------------------------------------------------------------ */

type EmailJob = {
  apiKey: string;
  to: string;
  from: string;
  replyTo?: string;
  subject: string;
  rows: Array<[string, string]>;
};

type SendResult = { ok: true } | { ok: false; reason: string };

/**
 * The only provider-specific code in this file. To move off Resend, rewrite
 * this function and leave everything above it alone.
 */
async function sendEmail(job: EmailJob): Promise<SendResult> {
  const text = job.rows.map(([label, value]) => `${label}: ${value}`).join('\n');
  const html =
    '<table style="font-family:system-ui,sans-serif;font-size:15px;border-collapse:collapse">' +
    job.rows
      .map(
        ([label, value]) =>
          `<tr><td style="padding:4px 16px 4px 0;color:#4E4A44">${escapeHtml(label)}</td>` +
          `<td style="padding:4px 0;color:#141414;white-space:pre-wrap"><strong>${escapeHtml(value)}</strong></td></tr>`,
      )
      .join('') +
    '</table>';

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${job.apiKey}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        from: job.from,
        to: [job.to],
        subject: job.subject,
        text,
        html,
        // Hitting reply goes to the traveller when they gave an address.
        ...(job.replyTo ? { reply_to: job.replyTo } : {}),
      }),
    });

    return response.ok ? { ok: true } : { ok: false, reason: 'provider_error' };
  } catch {
    return { ok: false, reason: 'network_error' };
  }
}
