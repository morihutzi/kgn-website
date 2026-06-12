import ExportedImage from "next-image-export-optimizer";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { faq, pricing, type PricingPlan } from "@/content/home";
import { siteConfig } from "@/content/site";
import { FAQItem } from "./FAQItem";

const PRICING_QUESTION = "Welche Abomodelle gibt es?";

export function FAQ() {
  return (
    <div className="bg-[#F4F0EB]">
      <Section maxWidth={880} className="py-10 md:py-14">
        <div className="flex items-start justify-center gap-2">
          <h2 className="text-xl font-extrabold text-brand-yellow md:text-[28px]">
            {faq.headline}
          </h2>
          <ExportedImage
            src="/brand/smiley.png"
            alt=""
            width={48}
            height={44}
            className="-mt-1 h-7 w-auto shrink-0 md:h-9"
          />
        </div>

        <ul className="mt-8">
          {faq.items.map((item) => (
            <FAQItem key={item.question} question={item.question}>
              <p>{item.answer}</p>
              {item.question === PRICING_QUESTION && <PricingCards />}
            </FAQItem>
          ))}
        </ul>
      </Section>
    </div>
  );
}

function PricingCards() {
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-2">
      {pricing.plans.map((plan) => (
        <PricingCard key={plan.name} plan={plan} />
      ))}
    </div>
  );
}

function PricingCard({ plan }: { plan: PricingPlan }) {
  const numeric = plan.price.replace(/€\s*/g, "");
  const [euros, cents] = numeric.split(",");

  return (
    <article className="flex flex-col items-center rounded-2xl border-2 border-brand-yellow bg-white px-5 py-6 text-center">
      <h3 className="text-base font-semibold text-text-dark">{plan.name}</h3>
      {plan.features[0] && (
        <p className="mt-0.5 text-xs text-text-dark/60">{plan.features[0]}</p>
      )}

      <div className="mt-5 flex items-start text-text-dark">
        <span className="mt-2 text-base font-bold">€</span>
        <span className="text-[44px] font-extrabold leading-none">{euros}</span>
        {cents && (
          <span className="mt-2 text-base font-bold">,{cents}</span>
        )}
      </div>
      <p className="mt-1 text-sm text-text-dark/70">{plan.unit}</p>

      <div className="my-5 h-px w-full bg-text-dark/10" />

      {plan.recommended ? (
        <>
          <p className="text-sm font-extrabold text-brand-green">
            Ersparnis: über 33€ pro Jahr
          </p>
          <p className="text-xs text-text-dark/65">im Vgl. zum Monatsabo</p>
        </>
      ) : (
        <p className="text-sm font-bold text-text-dark">{plan.note}</p>
      )}

      <Button
        href={siteConfig.portalRegisterUrl}
        external
        size="md"
        className="mt-5 w-full"
      >
        {plan.ctaLabel}
      </Button>
      <p className="mt-2 text-xs text-text-dark/55">{plan.guarantee}</p>
    </article>
  );
}
