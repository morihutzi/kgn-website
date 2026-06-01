import { Hero } from "@/components/partner/hans-dorfner/sections/hero";
import { CoInitiative } from "@/components/partner/hans-dorfner/sections/co-initiative";
import { Atmosphere } from "@/components/partner/hans-dorfner/sections/atmosphere";
import { Testimonial } from "@/components/partner/hans-dorfner/sections/testimonial";
import { ForParents } from "@/components/partner/hans-dorfner/sections/for-parents";
import { Trust } from "@/components/partner/hans-dorfner/sections/trust";
import { Medienfuehrerschein } from "@/components/sections/Medienfuehrerschein";
import { dorfnerConfig } from "@/components/partner/hans-dorfner/config";

/**
 * Partner-Landingpage "Stark am Ball" — Co-Initiative der Hans Dorfner
 * Fußballschule und Kidgonet. 1:1 übernommen aus HansDorfnerInitative/web
 * (Tenant "dorfner"), hier als feste Route /stark-am-ball.
 */
export default function StarkAmBallPage() {
  const tenant = dorfnerConfig;

  return (
    <>
      <Hero tenant={tenant} />
      <CoInitiative tenant={tenant} />
      <Atmosphere tenant={tenant} />
      <Testimonial tenant={tenant} />
      <ForParents tenant={tenant} />
      <Medienfuehrerschein />
      <Trust tenant={tenant} />
    </>
  );
}
