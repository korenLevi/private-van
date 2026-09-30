import { useId, useRef, useState, type SyntheticEvent } from 'react';
import { compactMessage, fill, waLink } from '../../lib/text';

/**
 * The simple enquiry form at the foot of the homepage: name, phone, email,
 * message.
 *
 * Unlike the trip form it does not hand the visitor to WhatsApp — they have
 * given us a phone number and an email, so they expect a reply. It posts to
 * the Pages Function and reports honestly:
 *
 *   delivered: true   → thank-you message
 *   delivered: false  → say so, and offer WhatsApp with the same text
 *                       prefilled, so the enquiry is never silently lost.
 *
 * That second branch is the normal one until RESEND_API_KEY is configured.
 */

export type RequestQuoteStrings = {
  name: string;
  phone: string;
  email: string;
  message: string;
  messagePlaceholder: string;
  submit: string;
  sending: string;
  successTitle: string;
  successBody: string;
  fallbackTitle: string;
  fallbackBody: string;
  fallbackCta: string;
  errorRequired: string;
  errorEmail: string;
  errorContact: string;
  whatsappTemplate: string;
};

type Props = {
  strings: RequestQuoteStrings;
  whatsappNumber: string;
  source?: string;
};

type Values = { name: string; phone: string; email: string; message: string };
type Status = 'idle' | 'sending' | 'sent' | 'fallback';

const EMPTY: Values = { name: '', phone: '', email: '', message: '' };

export default function RequestQuoteForm({
  strings,
  whatsappNumber,
  source = '',
}: Props) {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [status, setStatus] = useState<Status>('idle');
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);

  function set<K extends keyof Values>(key: K, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  }

  function buildMessage(current: Values): string {
    return compactMessage(
      fill(strings.whatsappTemplate, {
        name: current.name.trim(),
        phone: current.phone.trim(),
        email: current.email.trim(),
        message: current.message.trim(),
      }),
    );
  }

  function validate(): boolean {
    const next: Partial<Record<keyof Values, string>> = {};

    if (!values.name.trim()) next.name = strings.errorRequired;
    if (!values.message.trim()) next.message = strings.errorRequired;

    // We need some way to answer them, but we do not mind which.
    const hasPhone = values.phone.trim() !== '';
    const hasEmail = values.email.trim() !== '';
    if (!hasPhone && !hasEmail) {
      next.phone = strings.errorContact;
      next.email = strings.errorContact;
    } else if (hasEmail && !/^\S+@\S+\.\S+$/.test(values.email.trim())) {
      next.email = strings.errorEmail;
    }

    setErrors(next);
    const first = Object.keys(next)[0];
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return false;
    }
    return true;
  }

  async function onSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'sending' || !validate()) return;

    setStatus('sending');

    try {
      // `values.message` goes as the visitor typed it. The composed WhatsApp
      // text is only for the fallback link — posting it here would repeat
      // every field inside the email's Message row.
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          ...values,
          source: source || location.pathname,
        }),
      });
      const result = (await response.json()) as { delivered?: boolean };
      setStatus(response.ok && result.delivered ? 'sent' : 'fallback');
    } catch {
      setStatus('fallback');
    }
  }

  const fieldError = (key: keyof Values) =>
    errors[key] ? (
      <p id={`${uid}-${key}-error`} className="mt-1.5 text-xs text-[#B4342A]">
        {errors[key]}
      </p>
    ) : null;

  const errorProps = (key: keyof Values) => ({
    'aria-invalid': errors[key] ? (true as const) : undefined,
    'aria-describedby': errors[key] ? `${uid}-${key}-error` : undefined,
  });

  if (status === 'sent') {
    return (
      <div
        role="status"
        className="rounded-[var(--radius-card)] border border-line bg-paper px-6 py-10 text-center"
      >
        <p className="font-display text-[1.5rem] text-ink">{strings.successTitle}</p>
        <span className="gold-rule mx-auto mt-5" aria-hidden="true" />
        <p className="mt-5 text-[0.9375rem] text-muted">{strings.successBody}</p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate>
      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <label className="sr-only" htmlFor={`${uid}-name`}>
            {strings.name}
          </label>
          <input
            id={`${uid}-name`}
            name="name"
            type="text"
            className="field-control"
            placeholder={strings.name}
            autoComplete="name"
            value={values.name}
            onChange={(e) => set('name', e.target.value)}
            {...errorProps('name')}
          />
          {fieldError('name')}
        </div>

        <div>
          <label className="sr-only" htmlFor={`${uid}-phone`}>
            {strings.phone}
          </label>
          <input
            id={`${uid}-phone`}
            name="phone"
            type="tel"
            inputMode="tel"
            className="field-control"
            placeholder={strings.phone}
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => set('phone', e.target.value)}
            {...errorProps('phone')}
          />
          {fieldError('phone')}
        </div>

        <div>
          <label className="sr-only" htmlFor={`${uid}-email`}>
            {strings.email}
          </label>
          <input
            id={`${uid}-email`}
            name="email"
            type="email"
            inputMode="email"
            className="field-control"
            placeholder={strings.email}
            autoComplete="email"
            value={values.email}
            onChange={(e) => set('email', e.target.value)}
            {...errorProps('email')}
          />
          {fieldError('email')}
        </div>
      </div>

      <div className="mt-4">
        <label className="sr-only" htmlFor={`${uid}-message`}>
          {strings.message}
        </label>
        <textarea
          id={`${uid}-message`}
          name="message"
          rows={5}
          className="field-control resize-y"
          placeholder={strings.messagePlaceholder}
          value={values.message}
          onChange={(e) => set('message', e.target.value)}
          {...errorProps('message')}
        />
        {fieldError('message')}
      </div>

      <button
        type="submit"
        className="btn btn-primary mt-4 w-full"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? strings.sending : strings.submit}
        {status !== 'sending' && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="rtl-flip"
            aria-hidden="true"
          >
            <path d="M4 12h15.5" />
            <path d="m13.5 5.8 6.2 6.2-6.2 6.2" />
          </svg>
        )}
      </button>

      {status === 'fallback' && (
        <div
          role="status"
          className="mt-5 rounded-[var(--radius-card)] border border-gold bg-sand px-5 py-5 text-center"
        >
          <p className="font-semibold text-ink">{strings.fallbackTitle}</p>
          <p className="mt-1.5 text-[0.9375rem] text-muted">
            {strings.fallbackBody}
          </p>
          <a
            href={waLink(whatsappNumber, buildMessage(values))}
            target="_blank"
            rel="noopener"
            className="btn btn-primary mt-4"
          >
            {strings.fallbackCta}
          </a>
        </div>
      )}
    </form>
  );
}
