import { HeroAndIntro } from "@/components/sections/HeroAndIntro";
import { Steps } from "@/components/sections/Steps";
import { ManuelNeuer } from "@/components/sections/ManuelNeuer";
import { Testimonials } from "@/components/sections/Testimonials";
import { Comparison } from "@/components/sections/Comparison";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroAndIntro />
      <Steps />
      <ManuelNeuer />
      <Testimonials />
      <Comparison />
      <FAQ />
      <FinalCTA />
    </>
  );
}
