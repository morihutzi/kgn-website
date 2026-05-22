import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { manuelNeuer } from "@/content/home";
import { siteConfig } from "@/content/site";

export function ManuelNeuer() {
  return (
    <Section>
      <div className="grid items-center gap-8 md:grid-cols-[300px_1fr] md:gap-12">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-[20px]">
          <Image
            src={manuelNeuer.image}
            alt={manuelNeuer.alt}
            fill
            sizes="(min-width: 768px) 300px, 280px"
            className="object-cover"
          />
        </div>
        <figure>
          <blockquote className="text-xl font-medium leading-snug text-text-dark md:text-2xl">
            &bdquo;{manuelNeuer.quote}&ldquo;
          </blockquote>
          <figcaption className="mt-4">
            <span className="block font-bold text-text-dark">{manuelNeuer.author}</span>
            <span className="block text-sm text-text-muted">{manuelNeuer.role}</span>
          </figcaption>
          <Button
            href={siteConfig.portalRegisterUrl}
            external
            size="md"
            className="mt-6"
          >
            Jetzt downloaden!
          </Button>
        </figure>
      </div>
    </Section>
  );
}
