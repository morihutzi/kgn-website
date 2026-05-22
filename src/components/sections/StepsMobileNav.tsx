"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

type StepsMobileNavProps = {
  containerSelector: string;
  count: number;
};

/**
 * Mobile-Carousel-Navigation für die Steps-Section. Liest die scroll-snap
 * Liste via DOM-Selector und zeigt Pfeile + Position-Dots darunter.
 *
 * Pfeile springen pro Klick einen Step weiter / zurück; Dots zeigen den
 * aktiven Step und sind ebenfalls klickbar.
 */
export function StepsMobileNav({
  containerSelector,
  count,
}: StepsMobileNavProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const list = document.querySelector(containerSelector) as HTMLElement | null;
    if (!list) return;

    const update = () => {
      const first = list.firstElementChild as HTMLElement | null;
      if (!first) return;
      const itemWidth = first.offsetWidth;
      const gap = parseFloat(getComputedStyle(list).columnGap || "0") || 24;
      const idx = Math.round(list.scrollLeft / (itemWidth + gap));
      setActiveIdx(Math.max(0, Math.min(idx, count - 1)));
    };

    list.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      list.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [containerSelector, count]);

  const scrollTo = (idx: number) => {
    const list = document.querySelector(containerSelector) as HTMLElement | null;
    if (!list) return;
    const first = list.firstElementChild as HTMLElement | null;
    if (!first) return;
    const itemWidth = first.offsetWidth;
    const gap = parseFloat(getComputedStyle(list).columnGap || "0") || 24;
    const target = Math.max(0, Math.min(idx, count - 1));
    list.scrollTo({
      left: target * (itemWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-4 flex items-center justify-center gap-3 md:hidden">
      <button
        type="button"
        onClick={() => scrollTo(activeIdx - 1)}
        disabled={activeIdx === 0}
        className="flex size-9 items-center justify-center rounded-full border-2 border-brand-yellow text-brand-yellow transition-opacity disabled:opacity-30"
        aria-label="Vorheriger Schritt"
      >
        <ChevronLeft className="size-4" strokeWidth={2.5} aria-hidden />
      </button>

      <div className="flex items-center gap-1.5">
        {Array.from({ length: count }).map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => scrollTo(idx)}
            className={`block h-2 rounded-full transition-all ${
              idx === activeIdx
                ? "w-6 bg-brand-yellow"
                : "w-2 bg-text-dark/20"
            }`}
            aria-label={`Zu Schritt ${idx + 1}`}
            aria-current={idx === activeIdx ? "step" : undefined}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollTo(activeIdx + 1)}
        disabled={activeIdx === count - 1}
        className="flex size-9 items-center justify-center rounded-full border-2 border-brand-yellow text-brand-yellow transition-opacity disabled:opacity-30"
        aria-label="Nächster Schritt"
      >
        <ChevronRight className="size-4" strokeWidth={2.5} aria-hidden />
      </button>
    </div>
  );
}
