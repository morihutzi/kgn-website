"use client";

import { useState } from "react";
import { FAQItem } from "@/components/sections/FAQItem";
import type { FaqCategory } from "@/content/hilfe";

export function HilfeFaqTabs({ categories }: { categories: FaqCategory[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = categories[activeIndex];

  return (
    <div>
      {/* Tab bar — pill switcher inside a track */}
      <div
        role="tablist"
        className="mx-auto flex w-fit max-w-full flex-wrap items-center justify-center gap-1 rounded-full border border-border bg-white p-1.5 shadow-sm"
      >
        {categories.map((cat, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={cat.title}
              role="tab"
              type="button"
              aria-selected={isActive}
              onClick={() => setActiveIndex(idx)}
              className={`relative rounded-full px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.12em] transition-all duration-200 md:px-5 md:py-2.5 md:text-xs ${
                isActive
                  ? "bg-brand-yellow text-white shadow-md shadow-brand-yellow/30"
                  : "text-text-dark/60 hover:text-text-dark"
              }`}
            >
              {cat.title}
            </button>
          );
        })}
      </div>

      {/* Panel */}
      <div
        role="tabpanel"
        key={active.title}
        className="mt-8 overflow-hidden rounded-2xl border border-border bg-white shadow-sm"
      >
        <ul className="divide-y divide-brand-yellow/30 px-6">
          {active.items.map((item, idx) => (
            <FAQItem
              key={item.question}
              question={`${String(idx + 1).padStart(2, "0")}  ${item.question}`}
            >
              <p>{item.answer}</p>
            </FAQItem>
          ))}
        </ul>
      </div>
    </div>
  );
}
