import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { problemSolution } from "@/content/home";

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="mt-1 h-6 w-6 flex-shrink-0 text-brand-green"
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
    <Section background="white">
      <div className="text-center">
        <p className="text-lg font-semibold text-text-dark md:text-xl">
          {problemSolution.eyebrow}
        </p>
        <h2 className="mt-2 text-3xl font-bold text-brand-green md:text-4xl">
          {problemSolution.headline}
        </h2>
      </div>

      <ul className="mx-auto mt-12 grid max-w-4xl gap-x-8 gap-y-5 md:grid-cols-2">
        {problemSolution.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-3">
            <CheckIcon />
            <span className="text-base text-text-dark md:text-lg">
              {bullet}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-80">
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
  );
}
