import { Section, SectionHeading } from "@/components/layout/Section";
import { ChildviewMockupScaled } from "@/components/mockups/ChildviewMockupScaled";
import { ConnectDevicesMockupScaled } from "@/components/mockups/ConnectDevicesMockupScaled";
import { TwoModesMockupScaled } from "@/components/mockups/TwoModesMockupScaled";
import { StepsMobileNav } from "@/components/sections/StepsMobileNav";
import { steps } from "@/content/home";

const MOBILE_LIST_ID = "steps-mobile-list";

export function Steps() {
  return (
    <Section maxWidth={1080}>
      <SectionHeading size="small" align="center">
        {steps.headline}
      </SectionHeading>

      {/* Mobile: horizontal scroll-snap (one step visible at a time) */}
      <ol
        id={MOBILE_LIST_ID}
        className="mt-7 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:hidden"
      >
        {steps.items.map((item, idx) => (
          <li
            key={item.title}
            className="flex min-w-full snap-center flex-col items-center text-center"
          >
            <div className="flex h-[360px] items-center justify-center">
              {idx === 0 ? (
                <TwoModesMockupScaled width={160} />
              ) : idx === 1 ? (
                <ConnectDevicesMockupScaled width={160} />
              ) : (
                <ChildviewMockupScaled width={160} />
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

      <StepsMobileNav
        containerSelector={`#${MOBILE_LIST_ID}`}
        count={steps.items.length}
      />

      {/* Desktop: 3-column grid */}
      <ol className="mt-7 hidden gap-4 md:grid md:grid-cols-3">
        {steps.items.map((item, idx) => (
          <li
            key={item.title}
            className="flex flex-col items-center text-center"
          >
            <div className="flex h-[410px] items-center justify-center">
              {idx === 0 ? (
                <TwoModesMockupScaled width={185} />
              ) : idx === 1 ? (
                <ConnectDevicesMockupScaled width={185} />
              ) : (
                <ChildviewMockupScaled width={185} />
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
