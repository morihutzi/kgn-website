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
      {/* Yellow block — phone from Steps section below will overhang into here */}
      <Section>
        <div className="relative rounded-[20px] bg-brand-yellow px-6 py-10 md:px-12 md:py-12">
          <div className="grid items-start gap-6 md:grid-cols-[200px_1fr]">
            {/* Reserved space for the phone that overhangs from the section below */}
            <div className="hidden md:block" aria-hidden="true" />

            <div>
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

          <div className="mt-8 flex justify-center">
            <Image
              src="/brand/logo-weiss.png"
              alt="Kidgonet"
              width={200}
              height={27}
              className="h-7 w-auto opacity-95 md:h-9"
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
