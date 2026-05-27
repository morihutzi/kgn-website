import { trialCopy } from "@/content/site";

export const hero = {
  headline: "Deine Kinder surfen sicher – mit Kidgonet",
  subheadline: "Nur 3 Klicks für mehr Sicherheit im Netz.",
  primaryCtaLabel: "Jetzt gratis testen!",
  icons: [
    { src: "/images/hero/block.webp", alt: "Webseite blockiert" },
    { src: "/images/hero/sanduhr.webp", alt: "Bildschirmzeit" },
    { src: "/images/hero/portal.webp", alt: "Elternportal" },
    { src: "/images/hero/internetsperre.webp", alt: "Internetsperre" },
  ],
} as const;

export type Bullet = { strong: string; rest: string };

export const problemSolution: {
  eyebrow: string;
  headline: string;
  bullets: Bullet[];
  trustLogos: { src: string; alt: string }[];
} = {
  eyebrow: "Ständig Streit ums Handy?",
  headline: "Hier ist die Lösung:",
  bullets: [
    { strong: "Bildschirmzeiten", rest: " ganz einfach festlegen, für alle Geräte" },
    { strong: "Webfilter", rest: " zum Schutz vor unangemessenen Seiten & Inhalten" },
    { strong: "Geräteortung", rest: " – immer wissen, wo deine Kinder sind" },
    { strong: "Bildschirmpausen", rest: " werden endlich eingehalten" },
    { strong: "Medienkompetenztraining", rest: " – damit deine Kinder Gefahren im Netz erkennen" },
    { strong: "Privatsphäre", rest: " deiner Kinder bleibt geschützt" },
  ],
  trustLogos: [
    { src: "/images/trust/eltern.png", alt: "Eltern.de" },
    { src: "/images/trust/elternguideonline.png", alt: "ElternGuideOnline" },
    { src: "/images/trust/merkur.png", alt: "Merkur.de" },
    { src: "/images/trust/mittelbayerische.jpg", alt: "Mittelbayerische Zeitung" },
    { src: "/images/trust/augsburger-allgemeine.png", alt: "Augsburger Allgemeine" },
  ],
};

export const steps = {
  headline: "So einfach geht's",
  items: [
    {
      image: "/images/steps/google-play-store.png",
      alt: "Kidgonet-App im Play Store und App Store",
      title: "Eine App, zwei Modi",
      text: "Aus dem Play Store oder App Store aufs Kindergerät. Dein Kind hat seinen Kindermodus, du die volle Steuerung. Direkt am Gerät.",
    },
    {
      image: "/images/steps/portal-install.jpeg",
      alt: "Geräte der Kinder mit Eltern-Account verbinden",
      title: "Alle Kindergeräte verbinden",
      text: "Smartphone, Tablet und Laptop deiner Kinder. Alle Geräte mit deinem Kidgonet-Account verbinden, alle Regeln pro Kind.",
    },
    {
      image: "/images/steps/internetsperre.png",
      alt: "Regeln pro Kind festlegen",
      title: "Pro Kind eigene Regeln",
      text: "Bildschirmzeiten, Pausen und Webfilter individuell festlegen. Am Gerät oder im Browser. Jederzeit anpassbar.",
    },
  ],
} as const;

export const manuelNeuer = {
  image: "/images/testimonials/manuel-neuer.jpg",
  alt: "Manuel Neuer",
  quote: "Kidgonet vereint pädagogische Verantwortung und Sicherheit.",
  author: "Manuel Neuer",
  role: "Weltmeister und Vater",
} as const;

export const testimonials = {
  headline: "Das sagen andere Eltern:",
  items: [
    {
      name: "Martha V.",
      avatar: "/images/testimonials/avatar-woman-1.png",
      quote:
        "Super App! Endlich kein Stress mehr um die Handynutzung. Einfach zu bedienen und der SOS-Button ist genial. Klare Empfehlung!",
    },
    {
      name: "Pascal S.",
      avatar: "/images/testimonials/avatar-man.png",
      quote:
        "Seit wir die App haben, gibt es endlich Ruhe im Haus. Die Kinder wissen, wie viel Zeit sie haben, und erledigen ihre Aufgaben schneller. Danke!",
    },
    {
      name: "Sarah M.",
      avatar: "/images/testimonials/avatar-woman-2.png",
      quote:
        "Top Kundenservice, schnelle Hilfe und eine intuitive App. Funktioniert perfekt für mehrere Kinder und Geräte. Volle Sterne!",
    },
  ],
} as const;

export const comparison = {
  headline: "Mit Kidgonet sind Deine Kinder & Du auf der sicheren Seite",
  columns: { ours: "Kidgonet", others: "Andere Apps" },
  features: [
    "Altersgerechter Webfilter",
    "Geräteübergreifende Bildschirmzeiten",
    "Bildschirmpausen",
    "Geräteübergreifende Limits",
    "Apps sperren",
    "Privatsphäre Deiner Kinder",
  ],
} as const;

export type FaqItem = { question: string; answer: string };

export const faq: { headline: string; items: FaqItem[] } = {
  headline: "Noch Fragen?",
  items: [
    {
      question:
        "Werden meine persönlichen Daten oder die Daten meines Kindes an Dritte weitergegeben?",
      answer:
        "Nein, Kidgonet gibt keine Daten Deines Kindes an Dritte weiter. Der Schutz der Privatsphäre hat für uns höchste Priorität. Alle persönlichen Daten werden vertraulich behandelt und ausschließlich für den vorgesehenen Zweck verwendet.",
    },
    {
      question: "Wie viele Kinder kann ich über das Elternportal steuern?",
      answer:
        "Du kannst unendlich viele Kinder ins Elternportal einpflegen und alle ihre Geräte zentral verwalten.",
    },
    {
      question: "Macht die App das Smartphone langsamer?",
      answer:
        "Nein. Der Abgleich mit unserer Blacklist (gesperrte Internetseiten) dauert nicht viel länger als bei Google. Dein Kind wird keine Geschwindigkeitseinbußen bemerken.",
    },
    {
      question: "Welche Abomodelle gibt es?",
      answer:
        "Wir bieten ein 1-Jahres-Abo sowie ein flexibel kündbares Monats-Abo.",
    },
    {
      question:
        "Wie lange dauert die kostenlose Testphase und was passiert danach?",
      answer:
        "Kidgonet bietet Dir eine 7-tägige kostenlose Testphase, in der Du uneingeschränkten Zugang zu allen Funktionen erhältst. Fünf Tage vor Ablauf der Testphase erinnern wir Dich per E-Mail.",
    },
    {
      question:
        "Unterstützt Kidgonet neben Android auch iOS oder andere Betriebssysteme?",
      answer:
        "Aktuell ist Kidgonet ausschließlich für Android-Geräte verfügbar. Die Entwicklung einer iOS-Version ist jedoch bereits Teil unserer Roadmap.",
    },
  ],
};

export type PricingPlan = {
  name: string;
  price: string;
  unit: string;
  highlight?: string;
  note?: string;
  features: string[];
  ctaLabel: string;
  guarantee: string;
  recommended?: boolean;
};

export const pricing: { headline: string; plans: PricingPlan[] } = {
  headline: "Welche Abomodelle gibt es?",
  plans: [
    {
      name: "Monatsabo",
      price: "€4,99",
      unit: "pro Monat",
      note: "flexibel monatlich kündbar",
      features: [],
      ctaLabel: trialCopy.cta,
      guarantee: "30 Tage Geld zurück Garantie",
    },
    {
      name: "Jahresabo",
      price: "€2,99",
      unit: "pro Monat",
      highlight: "Empfohlen",
      note: "Ersparnis: 24€ pro Jahr im Vgl. zum Monatsabo",
      features: [],
      ctaLabel: trialCopy.cta,
      guarantee: "30 Tage Geld zurück Garantie",
      recommended: true,
    },
  ],
};

export const finalCta = {
  headline: "Damit Deine Kinder sicher surfen –",
  subheadline: `jetzt App ${trialCopy.cta}!`,
  ctaLabel: "Jetzt downloaden!",
} as const;
