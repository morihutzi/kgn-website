import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Kidgonet – Kinderschutz App für iOS & Android",
  description: `Kidgonet ist die Kinderschutz-App für iOS und Android. Bildschirmzeit begrenzen, Webfilter einrichten, Standort verfolgen und Apps sperren. ${trialCopy.metaShort}`,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Kidgonet – Kinderschutz App für iOS & Android",
    description:
      "Bildschirmzeit begrenzen, Webfilter einrichten, Standort verfolgen. Die Kindersicherungs-App für iOS und Android.",
    url: "https://www.kidgonet.de",
  },
};

export default function HomePage() {
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
      <FinalCTA />
    </>
  );
}
