import { Hero } from "@/components/sections/Hero";
import { FeatureList } from "@/components/sections/FeatureList";
import { Steps } from "@/components/sections/Steps";
import { ManuelNeuer } from "@/components/sections/ManuelNeuer";
import { Testimonials } from "@/components/sections/Testimonials";
import { Comparison } from "@/components/sections/Comparison";
import { FAQ } from "@/components/sections/FAQ";
import { PricingTable } from "@/components/sections/PricingTable";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureList />
      <Steps />
      <ManuelNeuer />
      <Testimonials />
      <Comparison />
      <FAQ />
      <PricingTable />
      <FinalCTA />
    </>
  );
}
