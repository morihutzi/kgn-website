"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Section, SectionHeading } from "@/components/layout/Section";
import { testimonials } from "@/content/home";

function StarRow() {
  return (
    <div className="flex gap-1 text-brand-yellow" aria-label="5 von 5 Sternen">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="currentColor"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  t,
}: {
  t: (typeof testimonials.items)[number];
}) {
  return (
    <div className="flex h-full flex-col items-center rounded-[20px] border border-neutral-200 bg-white p-8 text-center shadow-sm">
      <div className="relative h-16 w-16 overflow-hidden rounded-full">
        <Image
          src={t.avatar}
          alt={t.name}
          fill
          sizes="64px"
          className="object-cover"
        />
      </div>
      <cite className="mt-3 block text-sm font-semibold not-italic text-text-dark">
        {t.name}
      </cite>
      <StarRow />
      <blockquote className="mt-4 flex-1 text-sm text-text-dark">
        {t.quote}
      </blockquote>
    </div>
  );
}

export function Testimonials() {
  const items = testimonials.items;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActive = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / items.length;
    const idx = Math.round(el.scrollLeft / cardWidth);
    setActiveIndex(Math.max(0, Math.min(items.length - 1, idx)));
  }, [items.length]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateActive, { passive: true });
    return () => el.removeEventListener("scroll", updateActive);
  }, [updateActive]);

  const scrollTo = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / items.length;
    el.scrollTo({ left: cardWidth * idx, behavior: "smooth" });
  };

  return (
    <Section maxWidth={1100}>
      <SectionHeading align="center">{testimonials.headline}</SectionHeading>

      {/* Desktop: normales Grid */}
      <ul className="mt-10 hidden gap-6 md:grid md:grid-cols-3">
        {items.map((t) => (
          <li key={t.name} className="h-full">
            <TestimonialCard t={t} />
          </li>
        ))}
      </ul>

      {/* Mobile: Scroll-Snap-Karussell */}
      <div className="mt-8 md:hidden">
        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ scrollPaddingLeft: "1rem", paddingLeft: "1rem", paddingRight: "1rem" }}
        >
          {items.map((t) => (
            <div
              key={t.name}
              className="w-[85%] shrink-0 snap-center self-stretch"
            >
              <TestimonialCard t={t} />
            </div>
          ))}
        </div>

        {/* Dot-Indikatoren */}
        <div className="mt-5 flex justify-center gap-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              aria-label={`Testimonial ${idx + 1}`}
              className={[
                "h-2 rounded-full transition-all duration-300",
                idx === activeIndex
                  ? "w-5 bg-brand-yellow"
                  : "w-2 bg-neutral-300",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
