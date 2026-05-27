"use client";

import { openConsentBanner } from "@/lib/consent";

/**
 * Schaltfläche zum Öffnen der Cookie-Einstellungen.
 * Kann im Footer und auf der Datenschutzseite eingesetzt werden.
 */
export function CookieSettingsButton({
  className,
  children = "Cookie-Einstellungen",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <button type="button" onClick={openConsentBanner} className={className}>
      {children}
    </button>
  );
}
