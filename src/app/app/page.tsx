import type { Metadata } from "next";
import ExportedImage from "next-image-export-optimizer";
import { Hero } from "@/components/sections/Hero";
import { FeatureList } from "@/components/sections/FeatureList";
import { Steps } from "@/components/sections/Steps";
import { ManuelNeuer } from "@/components/sections/ManuelNeuer";
import { Testimonials } from "@/components/sections/Testimonials";
import { Comparison } from "@/components/sections/Comparison";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import {
  JsonLd,
  softwareApplicationSchema,
  faqPageSchema,
} from "@/components/seo/JsonLd";
import { faq } from "@/content/home";
import { trialCopy } from "@/content/site";

/**
 * Kampagnen-Landingpage für die Google-Ads-App-Kampagne.
 *
 * 1:1-Klon der Startseite, jedoch OHNE die Medienführerschein-Sektion, damit
 * der Fokus voll auf der App liegt. Bewusst `noindex` gesetzt, damit diese
 * (zur Startseite nahezu identische) Paid-Landingpage nicht mit der echten
 * Homepage um das organische Ranking konkurriert (Duplicate Content). Nicht
 * in der Sitemap.
 */
export const metadata: Metadata = {
  title: "Kidgonet – Kinderschutz App für iOS & Android",
  description: `Kinderschutz-App für iOS & Android: Bildschirmzeit, Webfilter, Standort und App-Sperre — DSGVO-konform. ${trialCopy.metaShort}`,
  robots: { index: false, follow: true },
  openGraph: {
    title: "Kidgonet – Kinderschutz App für iOS & Android",
    description:
      "Bildschirmzeit begrenzen, Webfilter einrichten, Standort verfolgen. Die Kindersicherungs-App für iOS und Android.",
  },
};

export default function AppCampaignPage() {
  return (
    <>
      <JsonLd data={softwareApplicationSchema} />
      <JsonLd data={faqPageSchema(faq.items)} />
      <Hero />
      <FeatureList />
      <Steps />
      <ManuelNeuer />
      <Testimonials />
      <Comparison />
      <FAQ />
      {/* Banner: Kind nutzt sicher ihr Smartphone (Full-Width, nach FAQ) */}
      <section className="relative w-full">
        <div className="relative h-[200px] w-full sm:h-[260px] md:h-[340px] lg:h-[400px]">
          <ExportedImage
            src="/images/banners/maedchen-smartphone-kidgonet.jpeg"
            alt="Mädchen nutzt sicher ihr Smartphone mit Kidgonet"
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "30% 32%" }}
          />
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
