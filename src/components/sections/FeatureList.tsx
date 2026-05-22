import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
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
    <>
      <section className="bg-brand-yellow py-16 md:py-24">
        <Container>
          <div className="text-center">
            <p className="text-2xl font-bold text-white drop-shadow md:text-3xl">
              {problemSolution.eyebrow}
            </p>
            <h2 className="mt-3 text-4xl font-extrabold text-white drop-shadow md:text-6xl">
              {problemSolution.headline}
            </h2>
          </div>

          <ul className="mx-auto mt-10 grid max-w-4xl gap-3 rounded-card bg-white p-6 shadow-lg md:grid-cols-2 md:gap-x-8 md:gap-y-4 md:p-10">
            {problemSolution.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-base text-text-dark md:text-lg">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Section background="white">
        <h3 className="sr-only">Bekannt aus</h3>
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-80">
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
