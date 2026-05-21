import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { pricing } from "@/content/home";
import { siteConfig } from "@/content/site";

export function PricingTable() {
  return (
    <Section background="white">
      <h2 className="text-center text-3xl font-bold text-text-dark md:text-4xl">
        {pricing.headline}
      </h2>

      <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
        {pricing.plans.map((plan) => (
          <article
            key={plan.name}
            className={`relative flex flex-col rounded-card border-2 p-8 shadow-sm ${
              plan.recommended
                ? "border-brand-yellow bg-white"
                : "border-black/10 bg-white"
            }`}
          >
            {plan.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-yellow px-4 py-1 text-xs font-bold uppercase tracking-wide text-black">
                {plan.highlight}
              </span>
            )}
            <h3 className="text-xl font-bold text-text-dark">{plan.name}</h3>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-text-dark">
                {plan.price}
              </span>
              <span className="text-text-dark/70">{plan.unit}</span>
            </div>
            {plan.note && (
              <p className="mt-2 text-sm text-text-dark/70">{plan.note}</p>
            )}
            <ul className="mt-6 flex-1 space-y-2 text-text-dark">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 text-brand-green"
                  >
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <Button
              href={siteConfig.portalRegisterUrl}
              external
              size="lg"
              className="mt-6 w-full"
              variant={plan.recommended ? "primary" : "outline"}
            >
              {plan.ctaLabel}
            </Button>
            <p className="mt-3 text-center text-xs text-text-dark/60">
              {plan.guarantee}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
