import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { finalCta } from "@/content/home";
import { siteConfig } from "@/content/site";

export function FinalCTA() {
  return (
    <section className="bg-brand-yellow py-16 md:py-24">
      <Container className="flex flex-col items-center text-center">
        <Image
          src="/brand/logo.png"
          alt="Kidgonet"
          width={240}
          height={32}
          className="h-9 w-auto md:h-12"
        />
        <h2 className="mt-6 text-balance text-4xl font-extrabold text-white drop-shadow md:text-5xl lg:text-6xl">
          {finalCta.headline}
        </h2>
        <p className="mt-2 text-3xl font-extrabold text-white drop-shadow md:text-4xl">
          {finalCta.subheadline}
        </p>
        <Button
          href={siteConfig.portalWelcomeUrl}
          external
          size="lg"
          className="mt-8 bg-white text-text-dark hover:bg-text-dark hover:text-white"
        >
          {finalCta.ctaLabel}
        </Button>
        <StoreBadges className="mt-6 justify-center" />
      </Container>
    </section>
  );
}
