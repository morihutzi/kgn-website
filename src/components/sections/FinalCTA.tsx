import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { finalCta } from "@/content/home";
import { siteConfig } from "@/content/site";

export function FinalCTA() {
  return (
    <section className="bg-[#1a2035] py-14 md:py-20">
      <div className="mx-auto w-full max-w-[720px] px-4 text-center">
        <Image
          src="/brand/logo-weiss.png"
          alt="Kidgonet"
          width={200}
          height={27}
          className="mx-auto h-8 w-auto md:h-10"
        />
        <h2 className="mt-5 text-2xl font-bold leading-snug text-white md:text-[33px] md:leading-[1.15]">
          {finalCta.headline}
          <br />
          <span className="font-extrabold text-brand-yellow">
            {finalCta.subheadline}
          </span>
        </h2>
        <Button
          href={siteConfig.portalWelcomeUrl}
          external
          variant="secondary"
          size="lg"
          className="mt-7"
        >
          {finalCta.ctaLabel}
        </Button>
        <StoreBadges className="mt-6 justify-center" size="sm" />
      </div>
    </section>
  );
}
