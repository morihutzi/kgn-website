import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PhoneSlideshow } from "@/components/ui/PhoneSlideshow";
import { Button } from "@/components/ui/Button";
import { hero, problemSolution } from "@/content/home";
import { siteConfig } from "@/content/site";

function CheckIcon() {
  // Green-filled checkbox with white border and white check inside
  return (
    <span
      aria-hidden="true"
      className="mt-0.5 inline-flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-[4px] border-2 border-white bg-brand-green"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-3 w-3 text-white"
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
      {/* MOBILE Yellow Block — phone prominent at top, text + bullets below */}
      <section className="px-4 pb-5 pt-2 md:hidden">
        <div className="mx-auto max-w-[400px]">
          <div className="rounded-[20px] bg-brand-yellow px-5 py-6">
            {/* Phone centered at top */}
            <div className="flex justify-center">
              <PhoneSlideshow
                slides={hero.icons}
                className="w-[150px]"
              />
            </div>

            <div className="mt-5 text-center">
              <p className="text-base font-semibold text-white">
                {problemSolution.eyebrow}
              </p>
              <h2 className="mt-1 text-xl font-extrabold text-white">
                {problemSolution.headline}
              </h2>
            </div>

            <ul className="mt-5 grid gap-2">
              {problemSolution.bullets.map((bullet) => (
                <li key={bullet.strong} className="flex items-start gap-2.5">
                  <CheckIcon />
                  <span className="text-[13px] leading-snug text-white">
                    <span className="font-extrabold">{bullet.strong}</span>
                    {bullet.rest}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex justify-center">
              <Button
                href={siteConfig.portalRegisterUrl}
                external
                size="md"
                className="bg-white text-text-dark hover:bg-text-dark hover:text-white"
              >
                Jetzt downloaden!
              </Button>
            </div>

            <div className="mt-5 flex justify-center">
              <Image
                src="/brand/logo-weiss.png"
                alt="Kidgonet"
                width={200}
                height={27}
                className="h-6 w-auto opacity-95"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DESKTOP Yellow Block — phone overhangs upward, bullets right */}
      <section className="hidden pt-2 pb-5 md:block md:pt-3 md:pb-8">
        <Container>
          <div className="mx-auto w-full max-w-[720px]">
            <div className="relative rounded-[20px] bg-brand-yellow px-5 py-7 md:px-10 md:py-9">
              <PhoneSlideshow
                slides={hero.icons}
                className="pointer-events-none absolute left-4 top-[-130px] z-10 w-[150px] lg:left-10 lg:top-[-160px] lg:w-[180px]"
              />

              <div className="grid items-start gap-6 md:grid-cols-[190px_1fr] lg:grid-cols-[220px_1fr]">
                <div aria-hidden="true" />

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

              {/* Logo positioned under phone on desktop */}
              <div className="absolute left-4 top-[220px] w-[150px] flex justify-center lg:left-10 lg:top-[255px] lg:w-[180px]">
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

      {/* Trust logos strip — both mobile and desktop */}
      <Section>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12 md:gap-y-6">
          {problemSolution.trustLogos.map((logo) => (
            <Image
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              width={150}
              height={50}
              className="h-7 w-auto object-contain md:h-12"
            />
          ))}
        </div>
      </Section>
    </>
  );
}
