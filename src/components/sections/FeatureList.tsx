import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PhoneSlideshow } from "@/components/ui/PhoneSlideshow";
import { hero, problemSolution } from "@/content/home";

function CheckIcon() {
  // White-bordered rounded checkbox with green check inside
  return (
    <span
      aria-hidden="true"
      className="mt-0.5 inline-flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-[4px] border-2 border-white"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-3 w-3 text-brand-green"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
      >
        <path
          d="M5 13l4 4L19 7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function FeatureList() {
  return (
    <>
      {/* Yellow block — same wrapper structure as Hero so widths align */}
      <section className="py-5 md:py-8">
        <Container>
          <div className="mx-auto w-full max-w-[720px]">
            <div className="relative rounded-[20px] bg-brand-yellow px-5 py-7 md:px-10 md:py-9">
              {/* Phone slideshow positioned to overhang upward into white space above */}
              <PhoneSlideshow
                slides={hero.icons}
                className="pointer-events-none absolute left-4 top-[-130px] z-10 hidden w-[150px] md:block lg:left-10 lg:top-[-160px] lg:w-[180px]"
              />

              <div className="grid items-start gap-6 md:grid-cols-[190px_1fr] lg:grid-cols-[220px_1fr]">
                {/* Reserved space for the phone */}
                <div className="hidden md:block" aria-hidden="true" />

                <div>
                  <p className="text-base font-semibold text-white md:text-lg">
                    {problemSolution.eyebrow}
                  </p>
                  <h2 className="mt-1 text-xl font-extrabold text-white md:text-[28px] md:leading-[1.15]">
                    {problemSolution.headline}
                  </h2>
                  <ul className="mt-4 grid gap-1.5">
                    {problemSolution.bullets.map((bullet) => (
                      <li key={bullet.strong} className="flex items-start gap-2.5">
                        <CheckIcon />
                        <span className="text-xs text-white md:text-[13px] md:leading-snug">
                          <span className="font-extrabold">{bullet.strong}</span>
                          {bullet.rest}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Logo under the phone mockup on the left, same x and width as phone */}
              <div className="mt-8 flex justify-center md:absolute md:bottom-6 md:left-4 md:mt-0 md:w-[150px] md:justify-center lg:left-10 lg:w-[180px]">
                <Image
                  src="/brand/logo-weiss.png"
                  alt="Kidgonet"
                  width={203}
                  height={28}
                  className="h-auto w-full max-w-[200px] opacity-95"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

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
