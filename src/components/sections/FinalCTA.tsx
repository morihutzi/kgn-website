import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { finalCta } from "@/content/home";
import { siteConfig } from "@/content/site";

export function FinalCTA() {
  return (
    <Section background="dark">
      <div className="flex flex-col items-center text-center">
        <Image
          src="/brand/logo-weiss.png"
          alt="Kidgonet"
          width={240}
          height={32}
          className="h-8 w-auto md:h-10"
        />
        <h2 className="mt-6 text-3xl font-bold text-white md:text-4xl">
          {finalCta.headline}
        </h2>
        <p className="mt-2 text-2xl font-semibold text-white md:text-3xl">
          {finalCta.subheadline}
        </p>
        <Button
          href={siteConfig.portalWelcomeUrl}
          external
          size="lg"
          className="mt-8"
        >
          {finalCta.ctaLabel}
        </Button>
        <StoreBadges className="mt-6 justify-center" />
      </div>
    </Section>
  );
}
