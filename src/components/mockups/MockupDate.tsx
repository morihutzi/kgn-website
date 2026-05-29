"use client";

import { useEffect, useState } from "react";

function formatGermanDate(d: Date): string {
  // z. B. "Donnerstag, 22. Mai"
  return d.toLocaleDateString("de-DE", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

/**
 * Rendert das aktuelle Datum (deutscher Wochentag + Tag + Monat) für die
 * Mockups. Der Wert wird nach dem Mount im Browser gesetzt, damit Besucher
 * immer das echte heutige Datum sehen – mit suppressHydrationWarning, falls
 * Build-/Render-Zeitpunkt vom Besuchszeitpunkt abweicht.
 */
export function MockupDate({ className }: { className?: string }) {
  const [label, setLabel] = useState(() => formatGermanDate(new Date()));

  useEffect(() => {
    setLabel(formatGermanDate(new Date()));
  }, []);

  return (
    <span className={className} suppressHydrationWarning>
      {label}
    </span>
  );
}
