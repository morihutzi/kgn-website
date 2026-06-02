"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PressItem = {
  outlet: string;
  title: string;
  href: string;
  date?: string;
};

/**
 * Horizontales Press-Coverage-Carousel mit Scroll-Snap und immer sichtbaren
 * Pfeil-Buttons (anders als StepsMobileNav, das nur mobil greift). Zeigt auf
 * Desktop ~3 Karten, scrollt pro Klick eine Karte weiter.
 */
export function PressCoverageCarousel({ items }: { items: PressItem[] }) {
  const listRef = useRef<HTMLUListElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const list = listRef.current;
    if (!list) return;
    const first = list.firstElementChild as HTMLElement | null;
    const gap = parseFloat(getComputedStyle(list).columnGap || "16") || 16;
    const step = first ? first.offsetWidth + gap : 320;
    list.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <div className="mt-8">
      <ul
        ref={listRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <li
            key={item.href}
            className="w-[80%] shrink-0 snap-start sm:w-[47%] lg:w-[31.5%]"
          >
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-2xl border-2 border-[#F0F0F0] bg-white p-5 transition-colors hover:border-brand-yellow"
            >
              <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-yellow">
                {item.outlet}
                {item.date ? (
                  <span className="text-text-dark/40"> · {item.date}</span>
                ) : null}
              </span>
              <span className="mt-2 text-balance text-base font-bold leading-snug text-text-dark">
                {item.title}
              </span>
              <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-text-dark/70 group-hover:text-brand-yellow">
                Artikel lesen <span aria-hidden>↗</span>
              </span>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Vorherige Artikel"
          className="flex size-10 items-center justify-center rounded-full border-2 border-brand-yellow text-brand-yellow transition-colors hover:bg-brand-yellow hover:text-white"
        >
          <ChevronLeft className="size-5" strokeWidth={2.5} aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Weitere Artikel"
          className="flex size-10 items-center justify-center rounded-full border-2 border-brand-yellow text-brand-yellow transition-colors hover:bg-brand-yellow hover:text-white"
        >
          <ChevronRight className="size-5" strokeWidth={2.5} aria-hidden />
        </button>
      </div>
    </div>
  );
}
