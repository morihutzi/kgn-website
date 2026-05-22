import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { problemSolution } from "@/content/home";

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="mt-1 h-5 w-5 flex-shrink-0 text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
    >
      <path
        d="M5 13l4 4L19 7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FeatureList() {
  return (
    <>
      {/* Yellow inverted card with phone-mockup ragging into next section below */}
      <Section className="relative pb-0">
        <div className="relative rounded-[20px] bg-brand-yellow px-6 pt-10 md:px-12 md:pt-12">
          <div className="grid items-start gap-6 md:grid-cols-[200px_1fr]">
            <div className="hidden md:block" aria-hidden="true">
              {/* Spacer so text starts after the phone column */}
            </div>

            <div className="md:pb-12">
              <p className="text-lg font-semibold text-white md:text-xl">
                {problemSolution.eyebrow}
              </p>
              <h2 className="mt-1 text-2xl font-extrabold text-white md:text-[33px] md:leading-[1.1]">
                {problemSolution.headline}
              </h2>
              <ul className="mt-6 grid gap-2 md:grid-cols-2 md:gap-x-8 md:gap-y-3">
                {problemSolution.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-sm text-white md:text-base">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex justify-center pb-8">
            <Image
              src="/brand/logo-weiss.png"
              alt="Kidgonet"
              width={200}
              height={27}
              className="h-7 w-auto opacity-95 md:h-9"
            />
          </div>

          {/* Phone mockup that overhangs into next section */}
          <div className="pointer-events-none absolute -bottom-16 left-4 hidden w-[180px] -rotate-3 md:block lg:left-8 lg:w-[200px]">
            <div className="relative aspect-[9/19] overflow-hidden rounded-[28px] border-[5px] border-text-dark bg-white shadow-2xl">
              <Image
                src="/images/hero/block.webp"
                alt="Kidgonet App Vorschau"
                fill
                sizes="200px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Trust logos strip on white — add extra top padding to make room for phone overhang */}
      <Section className="pt-24 md:pt-28">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {problemSolution.trustLogos.map((logo) => (
            <Image
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              width={150}
              height={50}
              className="h-10 w-auto object-contain md:h-12"
            />
          ))}
        </div>
      </Section>
    </>
  );
}
