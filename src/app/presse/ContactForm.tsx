"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "./actions";

const inputClass =
  "mt-1 w-full rounded-lg border border-[#E5E5E5] px-3 py-2 text-sm text-text-dark placeholder:text-text-dark/40 outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState<
    ContactFormState,
    FormData
  >(submitContactForm, null);

  if (state?.success) {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 px-5 py-4">
        <p className="text-sm font-semibold text-green-800">
          Vielen Dank! Wir melden uns schnellstmöglich bei Ihnen.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="space-y-3">
      {/* Name + E-Mail */}
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label
            htmlFor="presse-name"
            className="block text-xs font-semibold uppercase tracking-wide text-text-dark"
          >
            Dein Name <span className="text-brand-orange" aria-hidden="true">*</span>
          </label>
          <input
            id="presse-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Max Mustermann"
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="presse-email"
            className="block text-xs font-semibold uppercase tracking-wide text-text-dark"
          >
            E-Mail <span className="text-brand-orange" aria-hidden="true">*</span>
          </label>
          <input
            id="presse-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="max@redaktion.de"
            className={inputClass}
          />
        </div>
      </div>

      {/* Betreff */}
      <div>
        <label
          htmlFor="presse-subject"
          className="block text-xs font-semibold uppercase tracking-wide text-text-dark"
        >
          Betreff
        </label>
        <input
          id="presse-subject"
          name="subject"
          type="text"
          placeholder="Worum geht es?"
          className={inputClass}
        />
      </div>

      {/* Nachricht */}
      <div>
        <label
          htmlFor="presse-message"
          className="block text-xs font-semibold uppercase tracking-wide text-text-dark"
        >
          Nachricht <span className="text-brand-orange" aria-hidden="true">*</span>
        </label>
        <textarea
          id="presse-message"
          name="message"
          rows={4}
          required
          placeholder="Ihre Nachricht an uns..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {state?.error && (
        <p role="alert" className="text-xs font-semibold text-red-600">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex items-center justify-center rounded-lg bg-brand-yellow px-6 py-2.5 text-sm font-extrabold text-white transition hover:brightness-105 disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2"
      >
        {isPending ? "Wird gesendet…" : "Nachricht senden"}
      </button>

      <p className="text-xs text-text-dark/50">
        Mit dem Absenden erklärst du dich mit der Verarbeitung deiner Daten gemäß unserer{" "}
        <a href="/datenschutz" className="underline hover:text-text-dark">
          Datenschutzerklärung
        </a>{" "}
        einverstanden.
      </p>
    </form>
  );
}
