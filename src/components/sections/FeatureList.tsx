import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { problemSolution } from "@/content/home";

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="mt-1 h-5 w-5 flex-shrink-0 text-brand-green"
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
      {/* Yellow inverted card: "Hier ist die Lösung" */}
      <Section>
        <div className="rounded-[20px] bg-brand-yellow px-8 py-10 md:px-12 md:py-14">
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
                <span className="text-sm text-white md:text-base">{bullet}</span>
              </li>
            ))}
          </ul>
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
