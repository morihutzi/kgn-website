"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

type FAQItemProps = {
  question: string;
  children: React.ReactNode;
};

/**
 * Einzelner FAQ-Eintrag mit smoother Aufklapp-Animation.
 *
 * Verwendet den grid-template-rows-Trick (0fr → 1fr) fuer eine saubere
 * Hoehen-Animation, ohne explizite Hoehe vorab kennen zu muessen. Plus
 * Chevron-Rotation und Opacity-Fade fuer den Content.
 */
export function FAQItem({ question, children }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <li className="border-b border-brand-yellow/70 last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between gap-4 py-3.5 text-left text-sm font-bold text-text-dark md:text-[15px]"
      >
        <span className="flex-1">{question}</span>
        <span
          aria-hidden="true"
          className={`flex size-6 shrink-0 items-center justify-center rounded-full border-2 border-brand-yellow text-brand-yellow transition-transform duration-300 ease-out ${
            open ? "rotate-180" : ""
          }`}
        >
          <ChevronDown className="size-3.5" strokeWidth={2.5} aria-hidden />
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div
          className={`overflow-hidden transition-opacity duration-200 ${
            open ? "opacity-100 delay-100" : "opacity-0"
          }`}
        >
          <div className="pb-5 pr-10 text-sm leading-relaxed text-text-dark/75">
            {children}
          </div>
        </div>
      </div>
    </li>
  );
}
