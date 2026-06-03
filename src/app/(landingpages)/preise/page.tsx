import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { FinalCTA } from "@/components/sections/FinalCTA";
import {
  PricingJourney,
  type JourneyStep,
} from "@/components/preise/PricingJourney";
import {
  CalendarCheckIcon,
  ClockIcon,
  FlagIcon,
  MailIcon,
  PersonIcon,
  PhoneIcon,
} from "@/components/preise/icons";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { FAQItem } from "@/components/sections/FAQItem";
import {
  JsonLd,
  faqPageSchema,
  softwareApplicationSchema,
} from "@/components/seo/JsonLd";
import { pricing, type PricingPlan } from "@/content/home";
import { siteConfig, trialCopy } from "@/content/site";

export const metadata: Metadata = {
  title: "Preise – Kinderschutz-App ab €2,99 / Monat",
  description: `Kidgonet Preise: Monatsabo €4,99 oder Jahresabo €2,99 pro Monat. ${trialCopy.cta}, 30 Tage Geld-zurück-Garantie.`,
  alternates: { canonical: "/preise" },
  openGraph: {
    title: "Preise – Kidgonet Kinderschutz-App ab €2,99 / Monat",
    description: `Monatsabo €4,99 oder Jahresabo €2,99/Monat. ${trialCopy.cta}, 30 Tage Geld-zurück-Garantie.`,
    url: "https://www.kidgonet.de/preise",
  },
};

const ICON_CLASS = "h-full w-full";

// Preis-FAQ: ausschliesslich belegte Fakten (Tarife, Testphase, Lizenzen,
// Garantie, kostenloser Webfilter). Wird sichtbar gerendert UND als
// FAQPage-Schema ausgegeben.
const faqs = [
  {
    question: "Was kostet Kidgonet?",
    answer:
      "Kidgonet kostet im Jahresabo 2,99 € pro Monat (jährlich abgerechnet) und im flexibel monatlich kündbaren Monatsabo 4,99 € pro Monat. In beiden Tarifen sind 5 Lizenzen für bis zu fünf Geräte enthalten.",
  },
  {
    question: "Gibt es eine kostenlose Testphase?",
    answer: `Ja. Du kannst Kidgonet ${siteConfig.trialDays} Tage kostenlos und mit vollem Funktionsumfang testen. Vor Ablauf der Testphase erinnern wir Dich per E-Mail.`,
  },
  {
    question: "Kann ich jederzeit kündigen?",
    answer:
      "Ja. Das Monatsabo ist flexibel monatlich kündbar, nach der Testphase gibt es keine Mindestlaufzeit. Zusätzlich gilt eine 30-tägige Geld-zurück-Garantie.",
  },
  {
    question: "Wie viele Geräte und Kinder sind enthalten?",
    answer:
      "Beide Abos enthalten 5 Lizenzen, du kannst also bis zu fünf Geräte schützen. Im Eltern-Portal kannst du beliebig viele Kinder anlegen und zentral verwalten.",
  },
  {
    question: "Gibt es eine kostenlose Version?",
    answer:
      "Ja. Der altersgerechte Webfilter ist bei Kidgonet dauerhaft kostenlos, ohne Testphase und ohne Account-Zwang. Bildschirmzeit, Standort und App-Sperre sind Teil des Abos.",
  },
  {
    question: "Für welche Geräte gilt der Preis?",
    answer:
      "Der Preis gilt für iOS und Android. Kidgonet lädst du im Apple App Store oder im Google Play Store, das Eltern-Portal nutzt du zusätzlich im Browser.",
  },
];

const JOURNEY_STEPS: JourneyStep[] = [
  {
    title: "Start der Testphase",
    description: trialCopy.trialStartCopy,
    cardIcon: <CalendarCheckIcon className={ICON_CLASS} />,
    markerLabel: "Heute",
    markerIcon: <PersonIcon className={ICON_CLASS} />,
  },
  {
    title: "Voller Zugriff zu allen Funktionen der Kidgonet App",
    description:
      `In der Testphase kannst Du bis zu fünf Geräte anmelden und die Premium Features von Kidgonet ${siteConfig.trialDays} Tage kostenlos nutzen.`,
    cardIcon: <ClockIcon className={ICON_CLASS} />,
    markerLabel: "Testzeitraum",
    markerIcon: <PhoneIcon className={ICON_CLASS} />,
  },
  {
    title: "Automatische Verlängerung",
    description:
      "Wir schicken Dir eine Erinnerung, ob Du das Abonnement verlängern willst. Falls nicht kannst du es ganz einfach kündigen.",
    cardIcon: <MailIcon className={ICON_CLASS} />,
    markerLabel: trialCopy.afterMarker,
    markerIcon: <FlagIcon className={ICON_CLASS} />,
  },
];

export default function PreisePage() {
  return (
    <>
      <JsonLd data={softwareApplicationSchema} />
      <JsonLd data={faqPageSchema(faqs)} />
      <HeroSection />
      <PricingJourney steps={JOURNEY_STEPS} />
      <PlansSection />
      <FaqSection />
      <FinalCTA />
    </>
  );
}

function FaqSection() {
  return (
    <section className="bg-surface-warm py-16 md:py-20">
      <Container>
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-8 text-center text-2xl font-extrabold text-text-dark md:text-3xl">
            Häufige Fragen zu Preisen &amp; Abo
          </h2>
          <ul>
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question}>
                <p>{faq.answer}</p>
              </FAQItem>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-yellow">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #fff 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />
      <Container className="relative">
        <div className="py-16 md:py-24">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-white/80">
            Preise &amp; Pakete
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl">
            {trialCopy.pageHeadline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/95 md:text-lg">
            Voller Zugriff auf alle Funktionen. Jederzeit kündbar.
          </p>
        </div>
      </Container>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -bottom-px h-5 bg-white/30"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -bottom-px h-3 bg-white/50"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}
      />
    </section>
  );
}

function PlansSection() {
  return (
    <section className="bg-white pb-20 pt-4 md:pb-28 md:pt-8">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold leading-tight text-text-dark md:text-4xl">
            {trialCopy.ctaJetzt}
          </h2>
          <p className="mt-3 text-base text-text-dark/65 md:text-lg">
            Schütze Dein Kind jetzt und teste Kidgonet ohne Risiko
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
          {pricing.plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>

        {/* Trenner mit "oder" */}
        <div className="mx-auto mt-14 flex max-w-3xl items-center gap-4">
          <span className="h-px flex-1 bg-text-dark/10" />
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-text-dark/40">
            oder
          </span>
          <span className="h-px flex-1 bg-text-dark/10" />
        </div>

        {/* Freemium-Card */}
        <FreemiumCard />
      </Container>
    </section>
  );
}

function FreemiumCard() {
  return (
    <article className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-2xl border border-neutral-200 bg-surface-muted p-6 md:p-10">
      <div className="grid items-center gap-6 md:grid-cols-[auto_1fr_auto] md:gap-10">
        {/* Icon */}
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-yellow text-white">
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 12l2 2 4-4" />
          </svg>
        </div>

        {/* Text */}
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-brand-yellow">
            Kostenlos für immer
          </p>
          <h3 className="mt-2 text-xl font-extrabold leading-snug text-text-dark md:text-2xl">
            Webfilter gratis nutzen
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-text-dark/65 md:text-base">
            Der altersgerechte Internetfilter ist bei Kidgonet dauerhaft
            kostenlos. Kein Trial, kein Account-Zwang — installieren und
            loslegen.
          </p>
        </div>

        {/* Stores */}
        <StoreBadges size="sm" />
      </div>
    </article>
  );
}

function PlanCard({ plan }: { plan: PricingPlan }) {
  // Preis aus "€4,99" auseinandernehmen
  const match = plan.price.match(/€?\s*(\d+)[,.]?(\d*)/);
  const euros = match?.[1] ?? plan.price;
  const cents = match?.[2] || null;

  return (
    <article className="flex flex-col rounded-2xl border-[1.5px] border-brand-yellow bg-white p-6 text-center md:p-8">
      <h3 className="text-xl font-extrabold text-text-dark">{plan.name}</h3>
      <p className="mt-1 text-sm text-text-dark/65">5 Lizenzen</p>

      <PriceDisplay euros={euros} cents={cents} />
      <p className="mt-2 text-sm font-medium text-text-dark/70">pro Monat</p>

      <span className="mx-auto mt-5 block h-[2px] w-16 rounded-full bg-brand-yellow" />

      <div className="mt-5 min-h-[44px]">
        {plan.recommended ? (
          <>
            <p className="text-sm font-bold text-brand-green">
              Ersparnis: 24€ pro Jahr
            </p>
            <p className="text-xs text-text-dark/55">im Vgl. zum Monatsabo</p>
          </>
        ) : (
          <p className="text-sm font-semibold text-text-dark/85">
            {plan.note ?? "flexibel monatlich kündbar"}
          </p>
        )}
      </div>

      <Link
        href={siteConfig.portalRegisterUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center justify-center rounded-xl bg-brand-yellow px-6 py-3 text-sm font-extrabold text-white transition hover:brightness-105"
      >
        {trialCopy.cta}
      </Link>

      <p className="mt-3 text-xs text-text-dark/55">
        30 Tage Geld zurück Garantie
      </p>
    </article>
  );
}

function PriceDisplay({
  euros,
  cents,
}: {
  euros: string;
  cents: string | null;
}) {
  return (
    <div className="mt-7 flex items-start justify-center">
      <span className="mt-3 text-2xl font-extrabold text-text-dark md:text-3xl">
        €
      </span>
      <span className="text-6xl font-extrabold leading-none tracking-tight text-text-dark md:text-7xl">
        {euros}
      </span>
      {cents && (
        <span className="mt-2 text-xl font-extrabold leading-none text-text-dark md:text-2xl">
          {cents}
        </span>
      )}
      <span className="sr-only">,{cents} Euro</span>
    </div>
  );
}
