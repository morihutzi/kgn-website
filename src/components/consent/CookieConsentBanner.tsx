"use client";

import { useEffect, useState } from "react";
import {
  hasDecided,
  readConsent,
  writeConsent,
  type ConsentState,
} from "@/lib/consent";

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [draft, setDraft] = useState<ConsentState>({
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    if (!hasDecided()) {
      setVisible(true);
    }

    // Programmatisches Öffnen (z.B. Footer-Link "Cookie-Einstellungen")
    const handleOpen = () => {
      const current = readConsent();
      setDraft(current ?? { analytics: false, marketing: false });
      setShowSettings(true);
      setVisible(true);
    };
    window.addEventListener("kgn:consent-open", handleOpen);
    return () => window.removeEventListener("kgn:consent-open", handleOpen);
  }, []);

  const close = () => {
    setVisible(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    writeConsent({ analytics: true, marketing: true });
    close();
  };

  const rejectAll = () => {
    writeConsent({ analytics: false, marketing: false });
    close();
  };

  const saveSettings = () => {
    writeConsent(draft);
    close();
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-banner-title"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/15 bg-[#4A4A49]/80 text-white shadow-2xl backdrop-blur-xl"
    >
      <div className="mx-auto max-w-screen-xl px-4 py-5 sm:px-6 lg:px-8">
        {showSettings ? (
          <SettingsPanel
            draft={draft}
            setDraft={setDraft}
            onAcceptAll={acceptAll}
            onRejectAll={rejectAll}
            onSave={saveSettings}
            onBack={() => setShowSettings(false)}
          />
        ) : (
          <MainBanner
            onAcceptAll={acceptAll}
            onRejectAll={rejectAll}
            onSettings={() => {
              setDraft(readConsent() ?? { analytics: false, marketing: false });
              setShowSettings(true);
            }}
          />
        )}
      </div>
    </div>
  );
}

function MainBanner({
  onAcceptAll,
  onRejectAll,
  onSettings,
}: {
  onAcceptAll: () => void;
  onRejectAll: () => void;
  onSettings: () => void;
}) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex-1 space-y-1 text-sm">
        <p id="cookie-banner-title" className="font-bold text-white">
          Datenschutz-Einstellungen
        </p>
        <p className="leading-relaxed text-white/80">
          Wir verwenden Cookies und ähnliche Technologien für Statistiken und
          personalisierte Werbung. Technisch notwendige Cookies sind immer
          aktiv. Mehr dazu in unserer{" "}
          <a href="/datenschutz" className="underline hover:text-white">
            Datenschutzerklärung
          </a>
          .
        </p>
      </div>
      <div className="flex flex-shrink-0 flex-wrap items-center gap-2">
        <button
          onClick={onSettings}
          className="rounded-lg border border-white/25 px-4 py-2 text-xs font-semibold text-white/75 transition hover:border-white/50 hover:text-white"
        >
          Einstellungen
        </button>
        <button
          onClick={onRejectAll}
          className="rounded-lg border border-white/25 px-4 py-2 text-xs font-semibold text-white/75 transition hover:border-white/50 hover:text-white"
        >
          Ablehnen
        </button>
        <button
          onClick={onAcceptAll}
          className="rounded-lg bg-[#F9B000] px-5 py-2 text-xs font-extrabold text-white transition hover:brightness-110"
        >
          Alle akzeptieren
        </button>
      </div>
    </div>
  );
}

function SettingsPanel({
  draft,
  setDraft,
  onAcceptAll,
  onRejectAll,
  onSave,
  onBack,
}: {
  draft: ConsentState;
  setDraft: (state: ConsentState) => void;
  onAcceptAll: () => void;
  onRejectAll: () => void;
  onSave: () => void;
  onBack: () => void;
}) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <button
          onClick={onBack}
          aria-label="Zurück zur Übersicht"
          className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-white/60 transition hover:border-white/50 hover:text-white"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <h2 className="text-sm font-bold">Cookie-Einstellungen anpassen</h2>
      </div>

      <div className="space-y-2">
        <ConsentRow
          title="Notwendig"
          description="Technisch erforderlich für den Betrieb der Website, z.B. Speicherung dieser Einwilligung. Kein Opt-out möglich."
          checked={true}
          disabled={true}
          onChange={() => undefined}
        />
        <ConsentRow
          title="Statistik"
          description="Anonyme Auswertung der Website-Nutzung (Matomo, Google Analytics). Hilft uns, die Seite zu verbessern."
          checked={draft.analytics}
          onChange={(v) => setDraft({ ...draft, analytics: v })}
        />
        <ConsentRow
          title="Marketing"
          description="Personalisierte Werbung und Conversion-Tracking (Google Ads, Remarketing)."
          checked={draft.marketing}
          onChange={(v) => setDraft({ ...draft, marketing: v })}
        />
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-end gap-2">
        <button
          onClick={onRejectAll}
          className="rounded-lg border border-white/25 px-4 py-2 text-xs font-semibold text-white/75 transition hover:border-white/50 hover:text-white"
        >
          Alle ablehnen
        </button>
        <button
          onClick={onAcceptAll}
          className="rounded-lg border border-white/25 px-4 py-2 text-xs font-semibold text-white/75 transition hover:border-white/50 hover:text-white"
        >
          Alle akzeptieren
        </button>
        <button
          onClick={onSave}
          className="rounded-lg bg-[#F9B000] px-5 py-2 text-xs font-extrabold text-white transition hover:brightness-110"
        >
          Auswahl speichern
        </button>
      </div>
    </div>
  );
}

function ConsentRow({
  title,
  description,
  checked,
  disabled = false,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-lg bg-white/[0.06] px-4 py-3">
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-white">{title}</span>
          {disabled && (
            <span className="rounded bg-white/15 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white/60">
              Immer aktiv
            </span>
          )}
        </div>
        <p className="mt-0.5 text-[11px] leading-snug text-white/55">
          {description}
        </p>
      </div>
      {/* Toggle-Switch — h-5 w-9 = 20x36 px; Thumb 16x16 px */}
      <button
        role="switch"
        aria-checked={checked}
        aria-label={title}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={[
          "relative mt-0.5 h-5 w-9 flex-shrink-0 rounded-full transition-colors",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F9B000]",
          disabled ? "cursor-not-allowed" : "cursor-pointer",
          checked ? "bg-[#F9B000]" : "bg-white/20",
        ].join(" ")}
      >
        <span
          aria-hidden="true"
          className={[
            "absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-[left]",
            checked ? "left-[18px]" : "left-0.5",
          ].join(" ")}
        />
      </button>
    </div>
  );
}
