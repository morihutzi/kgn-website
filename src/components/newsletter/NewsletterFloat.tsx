"use client";

import { useState, useEffect, type FormEvent } from "react";
import { NewsletterOverlay } from "@/components/newsletter/NewsletterOverlay";

declare global {
  interface Window {
    _paq?: unknown[];
  }
}

export function NewsletterFloat() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [dismissed, setDismissed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 3_000);
    return () => clearTimeout(t);
  }, []);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; message?: string };
      if (!res.ok || !data.ok) {
        setStatus("error");
        setErrorMsg(data.message ?? "Anmeldung hat nicht geklappt. Bitte erneut versuchen.");
        return;
      }
      setStatus("success");
      setEmail("");
      if (typeof window !== "undefined" && Array.isArray(window._paq)) {
        window._paq.push(["trackEvent", "Elternratgeber", "Newsletter-Float-Submit", "Success"]);
      }
    } catch {
      setStatus("error");
      setErrorMsg("Anmeldung hat nicht geklappt. Bitte erneut versuchen.");
    }
  };

  if (dismissed) return null;

  return (
    <>
      {status === "success" && (
        <NewsletterOverlay variant="sent" onClose={() => setStatus("idle")} />
      )}

      {/* Nur auf Desktop sichtbar — fade-in nach 3 s */}
      <div
        className={[
          "fixed bottom-6 right-6 z-40 hidden w-72 md:block",
          "transition-all duration-500 ease-out",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none",
        ].join(" ")}
      >
        <div className="overflow-hidden rounded-2xl bg-white shadow-[0_8px_32px_rgba(0,0,0,0.14)] ring-1 ring-black/5">
          {/* Header */}
          <div className="flex items-center justify-between bg-[#F9B000] px-4 py-3">
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 6h16v12H4z" />
                <path d="M4 6l8 7 8-7" />
              </svg>
              <span className="text-sm font-extrabold text-white">Newsletter</span>
            </div>
            <button
              onClick={() => setDismissed(true)}
              aria-label="Schliessen"
              className="flex h-6 w-6 items-center justify-center rounded-full text-white/70 transition hover:bg-white/20 hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="px-4 py-4">
            <p className="text-[13px] leading-snug text-[#4A4A49]/80">
              Einmal im Monat: Tipps und Ratgeber für sichere Mediennutzung in der Familie.
            </p>

            <form onSubmit={onSubmit} className="mt-3 flex flex-col gap-2">
              <label className="sr-only" htmlFor="float-newsletter-email">E-Mail-Adresse</label>
              <input
                id="float-newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-Mail-Adresse"
                autoComplete="email"
                className="w-full rounded-lg border border-[#E5E5E5] px-3 py-2 text-sm text-[#4A4A49] outline-none placeholder:text-[#4A4A49]/40 focus:border-[#F9B000] focus:ring-1 focus:ring-[#F9B000]"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-lg bg-[#F9B000] py-2 text-sm font-extrabold text-white transition hover:brightness-105 disabled:opacity-60"
              >
                {status === "loading" ? "Sende..." : "Abonnieren"}
              </button>
            </form>

            {status === "error" && errorMsg && (
              <p className="mt-2 text-[11px] text-red-500">{errorMsg}</p>
            )}

            <p className="mt-3 text-[10px] leading-relaxed text-[#4A4A49]/45">
              Mit dem Klick auf „Abonnieren" stimmst du unserer{" "}
              <a href="/datenschutz" className="underline hover:text-[#4A4A49]">Datenschutzerklärung</a>{" "}
              zu. Jederzeit kündbar.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
