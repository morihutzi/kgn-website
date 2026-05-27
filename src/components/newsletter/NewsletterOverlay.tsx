"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {
  variant: "sent" | "confirmed";
  /** Nur bei inline-Nutzung (NewsletterCta): Overlay schliessen */
  onClose?: () => void;
};

export function NewsletterOverlay({ variant, onClose }: Props) {
  const router = useRouter();

  function dismiss() {
    if (onClose) {
      onClose();
    } else {
      // Page-Modus: zurück oder Startseite als Fallback
      if (window.history.length > 1) {
        router.back();
      } else {
        router.push("/");
      }
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={dismiss}
    >
      <div
        className="relative w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Schliessen-Button */}
        <button
          onClick={dismiss}
          aria-label="Schliessen"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-[#4A4A49]/40 transition hover:bg-[#4A4A49]/8 hover:text-[#4A4A49]"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Icon */}
        <div className="mb-5 flex justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F9B000]">
            {variant === "sent" ? (
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            ) : (
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            )}
          </span>
        </div>

        {/* Inhalt */}
        {variant === "sent" ? (
          <>
            <h2 className="text-2xl font-extrabold text-[#4A4A49]">Fast geschafft!</h2>
            <p className="mt-3 text-base text-[#4A4A49]/75">
              Wir haben dir eine Bestätigungs-E-Mail geschickt.
            </p>
            <p className="mt-2 text-sm text-[#4A4A49]/50">
              Klicke auf den Link darin, um deine Anmeldung abzuschliessen. Schau auch im Spam-Ordner nach, falls die E-Mail nicht ankommt.
            </p>
            <div className="mt-7 flex flex-col items-center gap-3">
              <a
                href="mailto:"
                className="inline-flex items-center gap-2 rounded-xl bg-[#F9B000] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-105"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 6h16v12H4z" />
                  <path d="M4 6l8 7 8-7" />
                </svg>
                E-Mail-Postfach öffnen
              </a>
              {onClose && (
                <button
                  onClick={dismiss}
                  className="text-sm text-[#4A4A49]/50 underline underline-offset-2 hover:text-[#4A4A49]"
                >
                  Weiterlesen
                </button>
              )}
            </div>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-extrabold text-[#4A4A49]">Du bist dabei!</h2>
            <p className="mt-3 text-base text-[#4A4A49]/75">
              Deine Anmeldung ist bestätigt.
            </p>
            <p className="mt-2 text-sm text-[#4A4A49]/50">
              Ab sofort hältst du dich mit unseren Updates rund um Kidgonet auf dem Laufenden. Du kannst dich jederzeit über den Link in unseren E-Mails abmelden.
            </p>
            {/* Kein CTA-Button — Backdrop-Klick oder X schliesst das Overlay */}
          </>
        )}
      </div>
    </div>
  );
}
