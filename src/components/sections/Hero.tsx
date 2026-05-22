import { Button } from "@/components/ui/Button";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { Container } from "@/components/layout/Container";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { hero } from "@/content/home";
import { siteConfig } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-yellow">
      <Container className="grid items-center gap-10 py-16 md:grid-cols-[1fr_1.1fr] md:py-24">
        <div className="order-2 md:order-1">
          <HeroCarousel slides={hero.icons} />
        </div>
        <div className="order-1 text-center md:order-2 md:text-left">
          <h1 className="text-balance text-5xl font-extrabold leading-[1] text-white drop-shadow-md md:text-6xl lg:text-7xl">
            {hero.headline}
          </h1>
          <p className="mt-6 text-2xl font-bold text-white drop-shadow md:text-3xl">
            {hero.subheadline}
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
            <Button
              href={siteConfig.portalWelcomeUrl}
              external
              size="lg"
              className="bg-white text-text-dark shadow-lg hover:bg-text-dark hover:text-white"
            >
              {hero.primaryCtaLabel}
            </Button>
            <StoreBadges size="sm" />
          </div>
        </div>
      </Container>
    </section>
  );
}
