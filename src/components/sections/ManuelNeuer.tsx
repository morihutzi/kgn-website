import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { manuelNeuer } from "@/content/home";
import { siteConfig } from "@/content/site";

export function ManuelNeuer() {
  return (
    <Section background="white">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-card">
          <Image
            src={manuelNeuer.image}
            alt={manuelNeuer.alt}
            fill
            sizes="(min-width: 768px) 400px, 80vw"
            className="object-cover"
          />
        </div>
        <figure>
          <blockquote className="text-2xl font-medium leading-snug text-text-dark md:text-3xl">
            <span aria-hidden="true" className="text-brand-yellow">
              &bdquo;
            </span>
            {manuelNeuer.quote}
            <span aria-hidden="true" className="text-brand-yellow">
              &ldquo;
            </span>
          </blockquote>
          <figcaption className="mt-4">
            <span className="block font-bold text-text-dark">
              {manuelNeuer.author}
            </span>
            <span className="block text-text-dark/70">{manuelNeuer.role}</span>
          </figcaption>
          <Button
            href={siteConfig.portalRegisterUrl}
            external
            size="lg"
            className="mt-8"
          >
            Jetzt downloaden!
          </Button>
        </figure>
      </div>
    </Section>
  );
}
