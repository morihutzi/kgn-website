import Image from "next/image";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { Container } from "@/components/layout/Container";
import { hero } from "@/content/home";
import { siteConfig } from "@/content/site";

export function Hero() {
  return (
    <section className="bg-white py-5 md:py-8">
      <Container>
        <div className="relative mx-auto aspect-[16/9] w-full max-w-[930px] overflow-hidden rounded-[20px] md:aspect-[930/496]">
          <Image
            src="/images/hero/vater-sohn.jpeg"
            alt="Vater und Sohn nutzen gemeinsam ein Smartphone"
            fill
            sizes="(min-width: 1024px) 930px, 100vw"
            priority
            className="object-cover"
          />

          <div className="relative flex h-full flex-col items-end justify-center px-6 pr-8 text-right md:px-12 md:pr-16">
            <h1 className="max-w-[520px] text-xl font-extrabold leading-[1.05] text-text-dark md:text-3xl lg:text-[40px] lg:leading-[42px]">
              {hero.headline}
            </h1>
            <p className="mt-3 max-w-[520px] text-sm font-medium text-text-dark md:text-lg lg:text-[22px] lg:leading-[32px]">
              {hero.subheadline}
            </p>
            <div className="mt-6 flex flex-col items-end gap-3">
              <a
                href={siteConfig.portalWelcomeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-brand-yellow underline underline-offset-4 hover:text-brand-orange md:text-base"
              >
                {hero.primaryCtaLabel}
              </a>
              <StoreBadges size="sm" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
