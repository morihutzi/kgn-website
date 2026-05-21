import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { Container } from "@/components/layout/Container";
import { hero } from "@/content/home";
import { siteConfig } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-yellow/15 via-white to-white py-16 md:py-24">
      <Container className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-balance text-4xl font-extrabold leading-tight text-text-dark md:text-5xl lg:text-6xl">
            {hero.headline}
          </h1>
          <p className="mt-4 text-xl text-text-dark/80 md:text-2xl">
            {hero.subheadline}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              href={siteConfig.portalWelcomeUrl}
              external
              size="lg"
            >
              {hero.primaryCtaLabel}
            </Button>
            <StoreBadges size="sm" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {hero.icons.map((icon) => (
            <div
              key={icon.src}
              className="relative aspect-square overflow-hidden rounded-card bg-white shadow-sm"
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                fill
                sizes="(min-width: 768px) 250px, 45vw"
                className="object-contain p-4"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
