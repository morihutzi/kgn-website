"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = { src: string; alt: string };

type Props = {
  slides: readonly Slide[];
  className?: string;
  intervalMs?: number;
};

export function PhoneSlideshow({ slides, className = "", intervalMs = 3000 }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [slides.length, intervalMs]);

  return (
    <div className={className}>
      <div className="relative aspect-[9/19] w-full overflow-hidden rounded-[28px] border-[5px] border-[#fafafa] bg-white shadow-2xl">
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
              sizes="(min-width: 1024px) 220px, 180px"
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
