import { useId, useMemo, useRef, useState, type SyntheticEvent } from 'react';
import { compactMessage, fill, todayISO, waLink } from '../../lib/text';

/**
 * The only interactive island on the site.
 *
 * Everything it needs arrives as props, so the client bundle never pulls in
 * the config file or the translation dictionary. On submit it opens WhatsApp
 * with the trip details prefilled — synchronously, inside the click, so popup
 * blockers leave it alone — and then posts a copy to the Pages Function that
 * emails it to the business.
 */

export type QuoteFormStrings = {
  title: string;
  subtitle: string;
  service: string;
  servicePlaceholder: string;
  from: string;
  fromPlaceholder: string;
  to: string;
  toPlaceholder: string;
  date: string;
  passengers: string;
  name: string;
  namePlaceholder: string;
  email: string;
  emailPlaceholder: string;
  notes: string;
  notesPlaceholder: string;
  submit: string;
  submitting: string;
  successTitle: string;
  successBody: string;
  errorRequired: string;
  errorEmail: string;
  emailCopyNote: string;
  passengerSuffix: string;
  passengerSuffixOne: string;
  whatsappTemplate: string;
  whatsappNotesPrefix: string;
};

export type ServiceOption = { id: string; label: string };

type Props = {
  strings: QuoteFormStrings;
  services: ServiceOption[];
  maxPassengers: number;
  whatsappNumber: string;
  /** `bar` is the horizontal strip under the hero; `card` is the stacked form. */
  variant?: 'bar' | 'card';
  /** Ask for name, email and notes. On by default for the card. */
  contactFields?: boolean;
  /** Page the enquiry came from, included in the email copy. */
  source?: string;
};

type Values = {
  service: string;
  from: string;
  to: string;
  date: string;
  passengers: string;
  name: string;
  email: string;
  notes: string;
};

const EMPTY: Values = {
  service: '',
  from: '',
  to: '',
  date: '',
  passengers: '2',
  name: '',
  email: '',
  notes: '',
};

export default function QuoteForm({
  strings,
  services,
  maxPassengers,
  whatsappNumber,
  variant = 'card',
  contactFields = variant === 'card',
  source = '',
}: Props) {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [sent, setSent] = useState(false);
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);

  const min = useMemo(todayISO, []);
  const isBar = variant === 'bar';

  const passengerOptions = useMemo(
    () => Array.from({ length: maxPassengers }, (_, i) => String(i + 1)),
    [maxPassengers],
  );

  function set<K extends keyof Values>(key: K, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof Values, string>> = {};
    const required: Array<keyof Values> = ['service', 'from', 'to', 'date'];
    if (contactFields) required.push('name');

    for (const key of required) {
      if (!values[key].trim()) next[key] = strings.errorRequired;
    }
    if (contactFields && values.email.trim() && !/^\S+@\S+\.\S+$/.test(values.email)) {
      next.email = strings.errorEmail;
    }

    setErrors(next);
    if (Object.keys(next).length > 0) {
      const first = Object.keys(next)[0];
      formRef.current
        ?.querySelector<HTMLElement>(`[name="${first}"]`)
        ?.focus();
      return false;
    }
    return true;
  }

  function buildMessage(): string {
    const serviceLabel =
      services.find((s) => s.id === values.service)?.label ?? values.service;
    const notes = values.notes.trim()
      ? `${strings.whatsappNotesPrefix}${values.notes.trim()}`
      : '';

    return compactMessage(
      fill(strings.whatsappTemplate, {
        service: serviceLabel,
        from: values.from.trim(),
        to: values.to.trim(),
        date: values.date,
        passengers: values.passengers,
        name: values.name.trim(),
        notes,
      }),
    );
  }

  function emailCopy(message: string) {
    // Fire and forget. The visitor is already in WhatsApp; a failed copy must
    // never surface as an error to them.
    void fetch('/api/quote', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      keepalive: true,
      body: JSON.stringify({ ...values, message, source: source || location.pathname }),
    }).catch(() => {});
  }

  function onSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;

    const message = buildMessage();
    // Opened first, while the click gesture is still live.
    window.open(waLink(whatsappNumber, message), '_blank', 'noopener,noreferrer');
    emailCopy(message);
    setSent(true);
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

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      className={isBar ? '' : 'flex flex-col'}
      aria-labelledby={isBar ? undefined : `${uid}-title`}
    >
      {!isBar && (
        <div className="mb-6">
          <h2 id={`${uid}-title`} className="font-[var(--font-display)] text-2xl text-ink">
            {strings.title}
          </h2>
          <p className="mt-2 text-sm text-muted">{strings.subtitle}</p>
        </div>
      )}

      <div
        className={
          isBar
            ? 'grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[1.15fr_1fr_1fr_0.9fr_0.7fr_auto] lg:items-end lg:gap-3'
            : 'grid grid-cols-1 gap-4 sm:grid-cols-2'
        }
      >
        {/* Service */}
        <div className={isBar ? '' : 'sm:col-span-2'}>
          <label className="field-label" htmlFor={`${uid}-service`}>
            {strings.service}
          </label>
          <select
            id={`${uid}-service`}
            name="service"
            className="field-control"
            value={values.service}
            onChange={(e) => set('service', e.target.value)}
            required
            {...errorProps('service')}
          >
            <option value="">{strings.servicePlaceholder}</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.label}
              </option>
            ))}
          </select>
          {fieldError('service')}
        </div>

        {/* From */}
        <div>
          <label className="field-label" htmlFor={`${uid}-from`}>
            {strings.from}
          </label>
          <input
            id={`${uid}-from`}
            name="from"
            type="text"
            className="field-control"
            placeholder={strings.fromPlaceholder}
            autoComplete="off"
            value={values.from}
            onChange={(e) => set('from', e.target.value)}
            required
            {...errorProps('from')}
          />
          {fieldError('from')}
        </div>

        {/* To */}
        <div>
          <label className="field-label" htmlFor={`${uid}-to`}>
            {strings.to}
          </label>
          <input
            id={`${uid}-to`}
            name="to"
            type="text"
            className="field-control"
            placeholder={strings.toPlaceholder}
            autoComplete="off"
            value={values.to}
            onChange={(e) => set('to', e.target.value)}
            required
            {...errorProps('to')}
          />
          {fieldError('to')}
        </div>

        {/* Date */}
        <div>
          <label className="field-label" htmlFor={`${uid}-date`}>
            {strings.date}
          </label>
          <input
            id={`${uid}-date`}
            name="date"
            type="date"
            className="field-control"
            min={min}
            value={values.date}
            onChange={(e) => set('date', e.target.value)}
            required
            {...errorProps('date')}
          />
          {fieldError('date')}
        </div>

        {/* Passengers */}
        <div>
          <label className="field-label" htmlFor={`${uid}-passengers`}>
            {strings.passengers}
          </label>
          <select
            id={`${uid}-passengers`}
            name="passengers"
            className="field-control"
            value={values.passengers}
            onChange={(e) => set('passengers', e.target.value)}
          >
            {passengerOptions.map((count) => (
              <option key={count} value={count}>
                {count}
              </option>
            ))}
          </select>
        </div>

        {contactFields && (
          <>
            <div>
              <label className="field-label" htmlFor={`${uid}-name`}>
                {strings.name}
              </label>
              <input
                id={`${uid}-name`}
                name="name"
                type="text"
                className="field-control"
                placeholder={strings.namePlaceholder}
                autoComplete="name"
                value={values.name}
                onChange={(e) => set('name', e.target.value)}
                required
                {...errorProps('name')}
              />
              {fieldError('name')}
            </div>

            <div>
              <label className="field-label" htmlFor={`${uid}-email`}>
                {strings.email}
              </label>
              <input
                id={`${uid}-email`}
                name="email"
                type="email"
                inputMode="email"
                className="field-control"
                placeholder={strings.emailPlaceholder}
                autoComplete="email"
                value={values.email}
                onChange={(e) => set('email', e.target.value)}
                {...errorProps('email')}
              />
              {fieldError('email')}
            </div>

            <div className="sm:col-span-2">
              <label className="field-label" htmlFor={`${uid}-notes`}>
                {strings.notes}
              </label>
              <textarea
                id={`${uid}-notes`}
                name="notes"
                rows={3}
                className="field-control resize-y"
                placeholder={strings.notesPlaceholder}
                value={values.notes}
                onChange={(e) => set('notes', e.target.value)}
              />
            </div>
          </>
        )}

        {/* Submit */}
        <div className={isBar ? 'lg:pb-0' : 'sm:col-span-2 mt-2'}>
          {isBar && <span className="field-label hidden lg:block">&nbsp;</span>}
          <button type="submit" className="btn btn-primary w-full lg:w-auto">
            {strings.submit}
          </button>
        </div>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-muted">
        {strings.emailCopyNote}
      </p>

      <p role="status" aria-live="polite" className={sent ? 'mt-3 text-sm text-ink' : 'sr-only'}>
        {sent ? `${strings.successTitle}. ${strings.successBody}` : ''}
      </p>
    </form>
  );
}
