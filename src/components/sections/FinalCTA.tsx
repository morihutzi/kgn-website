import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { finalCta } from "@/content/home";
import { siteConfig } from "@/content/site";

export function FinalCTA() {
  return (
    <Section className="text-center">
      <Image
        src="/brand/logo.png"
        alt="Kidgonet"
        width={200}
        height={27}
        className="mx-auto h-8 w-auto md:h-10"
      />
      <h2 className="mt-4 text-2xl font-medium text-text-dark md:text-[33px] md:leading-[1.1]">
        {finalCta.headline}
        <br />
        <span className="text-brand-yellow font-extrabold">
          {finalCta.subheadline}
        </span>
      </h2>
      <Button
        href={siteConfig.portalWelcomeUrl}
        external
        size="lg"
        className="mt-6"
      >
        {finalCta.ctaLabel}
      </Button>
      <StoreBadges className="mt-5 justify-center" size="sm" />
    </Section>
  );
}
