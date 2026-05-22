import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { manuelNeuer } from "@/content/home";
import { siteConfig } from "@/content/site";

export function ManuelNeuer() {
  return (
    <div className="relative overflow-hidden bg-[#F8F2E7]">
      <Image
        src="/images/banners/cta-teens.jpeg"
        alt=""
        aria-hidden="true"
        fill
        sizes="(min-width: 1280px) 1200px, 100vw"
        priority={false}
        className="object-cover object-right"
      />

      <Section maxWidth={1200} className="relative">
        <div className="grid items-center gap-8 md:grid-cols-[320px_1fr] md:gap-16">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-3xl">
            <Image
              src={manuelNeuer.image}
              alt={manuelNeuer.alt}
              fill
              sizes="(min-width: 768px) 320px, 280px"
              className="object-cover"
              priority={false}
            />
          </div>

          <figure>
            <blockquote className="text-balance text-2xl font-extrabold leading-[1.15] text-text-dark md:text-3xl lg:text-[40px]">
              &bdquo;{manuelNeuer.quote}&ldquo;
            </blockquote>
            <figcaption className="mt-5 text-base text-text-dark/80 md:text-lg">
              {manuelNeuer.author}, {manuelNeuer.role}
            </figcaption>
            <Button
              href={siteConfig.portalRegisterUrl}
              external
              size="md"
              className="mt-7"
            >
              Jetzt downloaden!
            </Button>
          </figure>
        </div>
      </Section>
    </div>
  );
}
