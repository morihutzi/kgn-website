"use client";

import { useState, type FormEvent } from "react";

type Variant = "inline" | "card";

type Props = {
  variant?: Variant;
  headline?: string;
  text?: string;
};

declare global {
  interface Window {
    _paq?: unknown[];
  }
}

export function NewsletterCta({
  variant = "card",
  headline = "Bleib auf dem Laufenden",
  text = "Einmal im Monat die wichtigsten Ratgeber-Beiträge und Tipps für sichere Mediennutzung in der Familie. Jederzeit kündbar.",
}: Props) {
  const [email, setEmail] = useState("");
  const [vorname, setVorname] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, vorname }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        message?: string;
      };
      if (!res.ok || !data.ok) {
        setStatus("error");
        setMessage(
          data.message ??
            "Anmeldung hat leider nicht geklappt. Bitte versuche es später erneut.",
        );
        return;
      }
      setStatus("success");
      setMessage(
        "Fast geschafft. Bitte bestätige die Anmeldung in der E-Mail, die wir dir gerade geschickt haben.",
      );
      setEmail("");
      setVorname("");
      if (typeof window !== "undefined" && Array.isArray(window._paq)) {
        window._paq.push([
          "trackEvent",
          "Elternratgeber",
          "Newsletter-Submit",
          "Success",
        ]);
      }
    } catch {
      setStatus("error");
      setMessage(
        "Anmeldung hat leider nicht geklappt. Bitte versuche es später erneut.",
      );
    }
  };

  const containerClasses =
    variant === "card"
      ? "rounded-card border border-[var(--color-border)] bg-surface-warm p-6 md:p-8"
      : "border-t border-[var(--color-border)] py-8";

  return (
    <div className={containerClasses}>
      <div className="mx-auto w-full max-w-[600px]">
        <h3 className="text-xl font-extrabold text-text-dark md:text-2xl">
          {headline}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-text-dark/75">{text}</p>
        <form
          onSubmit={onSubmit}
          className="mt-5 flex flex-col gap-3 sm:flex-row"
        >
          <label className="sr-only" htmlFor="newsletter-vorname">
            Vorname
          </label>
          <input
            id="newsletter-vorname"
            type="text"
            value={vorname}
            onChange={(e) => setVorname(e.target.value)}
            placeholder="Vorname (optional)"
            autoComplete="given-name"
            className="w-full rounded-button border border-[var(--color-border)] bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-yellow sm:w-1/3"
          />
          <label className="sr-only" htmlFor="newsletter-email">
            E-Mail-Adresse
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-Mail-Adresse"
            autoComplete="email"
            className="w-full flex-1 rounded-button border border-[var(--color-border)] bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-yellow"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-button bg-brand-yellow px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#e09e00] disabled:opacity-60"
          >
            {status === "loading" ? "Sende..." : "Abonnieren"}
          </button>
        </form>
        {message && (
          <p
            className={`mt-3 text-sm ${status === "error" ? "text-red-600" : "text-green-700"}`}
            role="status"
          >
            {message}
          </p>
        )}
        <p className="mt-3 text-xs text-text-dark/55">
          Mit dem Klick auf „Abonnieren" stimmst du unserer{" "}
          <a href="/datenschutz" className="underline hover:text-brand-yellow">
            Datenschutzerklärung
          </a>{" "}
          zu. Du kannst dich jederzeit abmelden.
        </p>
      </div>
    </div>
  );
}
