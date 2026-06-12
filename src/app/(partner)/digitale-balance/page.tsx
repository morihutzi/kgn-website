import { Hero } from "@/components/partner/hans-dorfner/sections/hero";
import { CoInitiative } from "@/components/partner/hans-dorfner/sections/co-initiative";
import { Atmosphere } from "@/components/partner/hans-dorfner/sections/atmosphere";
import { Testimonial } from "@/components/partner/hans-dorfner/sections/testimonial";
import { ForParents } from "@/components/partner/hans-dorfner/sections/for-parents";
import { Faq } from "@/components/partner/hans-dorfner/sections/faq";
import { Trust } from "@/components/partner/hans-dorfner/sections/trust";
import { Medienfuehrerschein } from "@/components/sections/Medienfuehrerschein";
import { Steps } from "@/components/sections/Steps";
import { Button } from "@/components/partner/hans-dorfner/ui/button";
import { Container } from "@/components/partner/hans-dorfner/ui/container";
import { dorfnerConfig } from "@/components/partner/hans-dorfner/config";

/**
 * Partner-Landingpage "Initiative Digitale Balance" — Co-Initiative der Hans
 * Dorfner Fußballschule und Kidgonet, Route /digitale-balance.
 *
 * Conversion-Aufbau (Spec 2026-06-12): Hero → geteilte "So einfach geht's"-
 * Sektion der Homepage (1:1, duzt bewusst) mit CTA-Block → App-Karte →
 * Initiative-Story → FAQ → Trust. Alle CTAs zeigen auf die Portal-
 * Registrierung mit campaign-Parameter; der Aktionscode selbst steht nur auf
 * dem Camp-Material, nie auf der Seite.
 */
export default function DigitaleBalancePage() {
  const tenant = dorfnerConfig;

  return (
    <>
      <Hero tenant={tenant} />

      <ForParents tenant={tenant} />

      {/* Steps-Band: erst der Nutzen (ForParents), dann die Einrichtung.
       * Die geteilte Sektion ist transparent und bringt keinen Button mit,
       * deshalb Wrapper mit Beige-Ton + eigener CTA-Block. */}
      <div className="bg-surface">
        <Steps />
        <section className="pb-12 sm:pb-16">
          <Container className="text-center">
            <Button
              href={tenant.hero.primaryCta.href}
              external={tenant.hero.primaryCta.external}
              size="lg"
            >
              {tenant.hero.primaryCta.label}
            </Button>
            {tenant.hero.primaryCta.microcopy ? (
              <p className="mt-4 text-sm text-foreground/60">
                {tenant.hero.primaryCta.microcopy}
              </p>
            ) : null}
          </Container>
        </section>
      </div>

      <CoInitiative tenant={tenant} />
      <Atmosphere tenant={tenant} />
      <Testimonial tenant={tenant} />
      {/* Medienführerschein als ZUSÄTZLICHES Angebot positioniert (Kicker über
       * der geteilten Sektion). Die Sektion bringt bg-white mit; der
       * Kind-Selektor färbt nur lokal beige um, ohne die Homepage-Komponente
       * anzufassen. */}
      <div className="bg-surface pt-12 sm:pt-16 [&>section]:bg-surface">
        <p className="px-5 text-center text-sm font-semibold uppercase tracking-widest text-primary">
          Zusätzliches Angebot für Ihre Familie
        </p>
        <Medienfuehrerschein />
      </div>
      <Faq tenant={tenant} />
      <Trust tenant={tenant} />
    </>
  );
}
