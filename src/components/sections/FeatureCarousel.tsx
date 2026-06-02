"use client";

import { Children, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Mobile-Carousel für volle Slides (eine Karte pro Ansicht). Scroll-Snap mit
 * Pfeil-Buttons und Punkt-Indikatoren, damit erkennbar ist, dass es mehrere
 * Karten zum Wischen gibt. Jedes direkte Kind wird zu einem vollbreiten Slide.
 */
export function FeatureCarousel({
  children,
  ariaLabel,
}: {
  children: ReactNode;
  ariaLabel?: string;
}) {
  const slides = Children.toArray(children);
  const listRef = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = (i: number) => {
    const list = listRef.current;
    if (!list) return;
    const clamped = Math.max(0, Math.min(slides.length - 1, i));
    const child = list.children[clamped] as HTMLElement | undefined;
    if (!child) return;
    const delta =
      child.getBoundingClientRect().left -
      list.getBoundingClientRect().left -
      (list.clientWidth - child.clientWidth) / 2;
    list.scrollBy({ left: delta, behavior: "smooth" });
  };

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const onScroll = () => {
      const center = list.scrollLeft + list.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;
      Array.from(list.children).forEach((c, i) => {
        const el = c as HTMLElement;
        const elCenter = el.offsetLeft + el.offsetWidth / 2;
        const d = Math.abs(elCenter - center);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      setActive(best);
    };
    list.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => list.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="mt-3 md:hidden" aria-label={ariaLabel} role="group">
      <ol
        ref={listRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((slide, i) => (
          <li key={i} className="min-w-full snap-center">
            {slide}
          </li>
        ))}
      </ol>

      <div className="mt-3 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => scrollToIndex(active - 1)}
          aria-label="Vorherige Funktion"
          disabled={active === 0}
          className="flex size-9 items-center justify-center rounded-full border-2 border-brand-yellow text-brand-yellow transition-colors hover:bg-brand-yellow hover:text-white disabled:cursor-default disabled:opacity-35 disabled:hover:bg-transparent disabled:hover:text-brand-yellow"
        >
          <ChevronLeft className="size-5" strokeWidth={2.5} aria-hidden />
        </button>

        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToIndex(i)}
              aria-label={`Funktion ${i + 1}`}
              aria-current={i === active}
              className={`h-2 rounded-full transition-all ${
                i === active ? "w-5 bg-brand-yellow" : "w-2 bg-[#DCD6CD]"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollToIndex(active + 1)}
          aria-label="Nächste Funktion"
          disabled={active === slides.length - 1}
          className="flex size-9 items-center justify-center rounded-full border-2 border-brand-yellow text-brand-yellow transition-colors hover:bg-brand-yellow hover:text-white disabled:cursor-default disabled:opacity-35 disabled:hover:bg-transparent disabled:hover:text-brand-yellow"
        >
          <ChevronRight className="size-5" strokeWidth={2.5} aria-hidden />
        </button>
      </div>
    </div>
  );
}
