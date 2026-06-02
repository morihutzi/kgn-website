import ExportedImage from "next-image-export-optimizer";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { manuelNeuer } from "@/content/home";
import { siteConfig } from "@/content/site";

export function ManuelNeuer() {
  return (
    <div className="relative overflow-hidden bg-[#F8F2E7]">
      <ExportedImage
        src="/images/banners/cta-teens.jpeg"
        alt=""
        aria-hidden="true"
        fill
        sizes="(min-width: 1280px) 1200px, 100vw"
        priority={false}
        className="object-cover object-right"
      />

      <Section maxWidth={1080} className="relative">
        <div className="grid items-center gap-6 md:grid-cols-[240px_1fr] md:gap-12">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[240px] overflow-hidden rounded-3xl">
            <ExportedImage
              src={manuelNeuer.image}
              alt={manuelNeuer.alt}
              fill
              sizes="(min-width: 768px) 240px, 220px"
              className="object-cover"
              priority={false}
            />
          </div>

          <figure className="text-center md:text-left">
            <blockquote className="text-balance text-xl font-extrabold leading-[1.2] text-text-dark md:text-2xl lg:text-[28px]">
              &bdquo;{manuelNeuer.quote}&ldquo;
            </blockquote>
            <figcaption className="mt-3 text-sm text-text-dark/75 md:text-base">
              {manuelNeuer.author}, {manuelNeuer.role}
            </figcaption>
            <div className="mt-5 flex justify-center md:justify-start">
              <Button
                href={siteConfig.portalRegisterUrl}
                external
                size="md"
              >
                Jetzt downloaden!
              </Button>
            </div>
          </figure>
        </div>
      </Section>
    </div>
  );
}
