import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { PhoneSlideshow } from "@/components/ui/PhoneSlideshow";
import { hero, problemSolution } from "@/content/home";

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
      {/* Yellow block — phone overhangs OUT THE TOP into the white divider above */}
      <Section>
        <div className="relative rounded-[20px] bg-brand-yellow px-5 py-7 md:px-10 md:py-9">
          {/* Phone slideshow positioned to overhang upward into white space above */}
          <PhoneSlideshow
            slides={hero.icons}
            className="pointer-events-none absolute left-4 top-[-100px] z-10 hidden w-[140px] md:block lg:left-10 lg:top-[-110px] lg:w-[160px]"
          />

          <div className="grid items-start gap-5 md:grid-cols-[160px_1fr]">
            {/* Reserved space for the phone */}
            <div className="hidden md:block" aria-hidden="true" />

            <div>
              <p className="text-base font-semibold text-white md:text-lg">
                {problemSolution.eyebrow}
              </p>
              <h2 className="mt-1 text-xl font-extrabold text-white md:text-[28px] md:leading-[1.15]">
                {problemSolution.headline}
              </h2>
              <ul className="mt-4 grid gap-1.5 md:grid-cols-2 md:gap-x-6 md:gap-y-2">
                {problemSolution.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5">
                    <CheckIcon />
                    <span className="text-xs text-white md:text-sm">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Logo under the phone mockup on the left, same x and width as phone */}
          <div className="mt-8 flex justify-center md:absolute md:bottom-6 md:left-4 md:mt-0 md:w-[140px] md:justify-center lg:left-10 lg:w-[160px]">
            <Image
              src="/brand/logo-weiss.png"
              alt="Kidgonet"
              width={203}
              height={28}
              className="h-auto w-full max-w-[160px] opacity-95"
            />
          </div>
        </div>
      </Section>

      {/* Trust logos strip on white */}
      <Section>
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
