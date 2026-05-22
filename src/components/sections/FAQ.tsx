import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { faq, pricing, type PricingPlan } from "@/content/home";
import { siteConfig } from "@/content/site";

const PRICING_QUESTION = "Welche Abomodelle gibt es?";

export function FAQ() {
  return (
    <Section maxWidth={900}>
      <div className="flex items-center justify-center gap-2.5">
        <h2 className="text-2xl font-extrabold text-brand-yellow md:text-[32px]">
          {faq.headline}
        </h2>
        <Image
          src="/brand/smiley-square.png"
          alt=""
          width={48}
          height={48}
          className="size-9 md:size-10"
          aria-hidden
        />
      </div>

      <ul className="mt-10">
        {faq.items.map((item) => {
          const isPricingItem = item.question === PRICING_QUESTION;
          return (
            <li
              key={item.question}
              className="border-b border-text-dark/10 last:border-b-0"
            >
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left font-bold text-text-dark marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex-1">{item.question}</span>
                  <span
                    aria-hidden="true"
                    className="flex size-7 shrink-0 items-center justify-center rounded-full border-2 border-brand-yellow text-brand-yellow transition-transform duration-200 group-open:rotate-180"
                  >
                    <ChevronDown
                      className="size-4"
                      strokeWidth={2.5}
                      aria-hidden
                    />
                  </span>
                </summary>
                <div className="pb-6 pr-10 leading-relaxed text-text-dark/75">
                  <p>{item.answer}</p>
                  {isPricingItem && <PricingCards />}
                </div>
              </details>
            </li>
          );
        })}
      </ul>
    </Section>
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
            Ersparnis: 24€ pro Jahr
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
