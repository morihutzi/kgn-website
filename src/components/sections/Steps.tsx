import Image from "next/image";
import { Section, SectionHeading } from "@/components/layout/Section";
import { ChildviewMockupScaled } from "@/components/mockups/ChildviewMockupScaled";
import { DualModeMockupScaled } from "@/components/mockups/DualModeMockupScaled";
import { steps } from "@/content/home";

export function Steps() {
  return (
    <Section>
      <SectionHeading size="small" align="center">
        {steps.headline}
      </SectionHeading>

      {/* Mobile: horizontal scroll-snap (one step visible at a time) */}
      <ol className="mt-7 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:hidden">
        {steps.items.map((item, idx) => (
          <li
            key={item.title}
            className="flex min-w-[calc(100%-2rem)] snap-center flex-col items-center text-center"
          >
            <div className="flex h-[240px] items-center justify-center">
              {idx === 0 ? (
                <DualModeMockupScaled width={110} />
              ) : idx === 2 ? (
                <ChildviewMockupScaled width={110} />
              ) : (
                <div className="relative h-44 w-44">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="176px"
                    className="object-contain"
                  />
                </div>
              )}
            </div>
            <p className="mt-3 text-xs font-semibold text-brand-yellow">
              Schritt {idx + 1}
            </p>
            <p className="mt-1 text-balance text-sm font-bold text-text-dark">
              {item.title}
            </p>
            <p className="mt-1 max-w-[260px] text-xs text-text-dark">
              {item.text}
            </p>
          </li>
        ))}
      </ol>

      {/* Desktop: 3-column grid */}
      <ol className="mt-7 hidden gap-4 md:grid md:grid-cols-3">
        {steps.items.map((item, idx) => (
          <li
            key={item.title}
            className="flex flex-col items-center text-center"
          >
            <div className="flex h-[280px] items-center justify-center">
              {idx === 0 ? (
                <DualModeMockupScaled width={125} />
              ) : idx === 2 ? (
                <ChildviewMockupScaled width={125} />
              ) : (
                <div className="relative h-48 w-48">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="192px"
                    className="object-contain"
                  />
                </div>
              )}
            </div>
            <p className="mt-2 text-xs font-semibold text-brand-yellow">
              Schritt {idx + 1}
            </p>
            <p className="mt-1 text-balance text-base font-bold text-text-dark">
              {item.title}
            </p>
            <p className="mt-1 max-w-[240px] text-sm text-text-dark">
              {item.text}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
