"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = { src: string; alt: string };

export function HeroCarousel({ slides }: { slides: readonly Slide[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative mx-auto w-full max-w-[300px] md:max-w-[360px]">
      <div className="relative aspect-[9/19] overflow-hidden rounded-[42px] border-[6px] border-text-dark bg-white shadow-2xl">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === index ? 1 : 0 }}
            aria-hidden={i !== index}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(min-width: 768px) 360px, 280px"
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      <div
        className="mt-4 flex justify-center gap-2"
        role="tablist"
        aria-label="Vorschau-Bilder"
      >
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            role="tab"
            aria-selected={i === index}
            aria-label={slide.alt}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              i === index ? "w-6 bg-white" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
