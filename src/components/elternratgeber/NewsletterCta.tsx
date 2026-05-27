"use client";

import { useState, type FormEvent } from "react";
import { NewsletterOverlay } from "@/components/newsletter/NewsletterOverlay";

type Props = {
  headline?: string;
  text?: string;
};

declare global {
  interface Window {
    _paq?: unknown[];
  }
}

export function NewsletterCta({
  headline = "Bleib auf dem Laufenden",
  text = "Einmal im Monat die wichtigsten Ratgeber-Beiträge und Tipps für sichere Mediennutzung in der Familie. Jederzeit kündbar.",
}: Props) {
  const [email, setEmail] = useState("");
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
        body: JSON.stringify({ email }),
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

  return (
    <>
      {status === "success" && (
        <NewsletterOverlay variant="sent" onClose={() => setStatus("idle")} />
      )}

      <section className="bg-brand-yellow">
        <div className="mx-auto w-full max-w-[760px] px-5 py-12 sm:px-8 md:py-16">
          <h2 className="text-2xl font-extrabold leading-tight text-white md:text-[33px] md:leading-[1.15]">
            {headline}
          </h2>
          <p className="mt-3 text-base font-medium leading-relaxed text-white md:text-lg">
            {text}
          </p>
          <form
            onSubmit={onSubmit}
            className="mt-6 flex flex-col gap-3 sm:flex-row"
          >
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
              className="w-full flex-1 rounded-[12px] bg-white px-4 py-3 text-sm text-text-dark outline-none placeholder:text-text-dark/60 focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-[12px] bg-text-dark px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white transition-colors hover:bg-black disabled:opacity-60"
            >
              {status === "loading" ? "Sende..." : "Abonnieren"}
            </button>
          </form>
          {status === "error" && message && (
            <p className="mt-4 rounded-[8px] bg-white px-3 py-2 text-sm font-semibold text-brand-orange" role="status">
              {message}
            </p>
          )}
          <p className="mt-4 text-xs font-medium text-white/85">
            Mit dem Klick auf „Abonnieren" stimmst du unserer{" "}
            <a href="/datenschutz" className="underline hover:text-text-dark">
              Datenschutzerklärung
            </a>{" "}
            zu. Du kannst dich jederzeit abmelden.
          </p>
        </div>
      </section>
    </>
  );
}
