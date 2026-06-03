import { trialCopy } from "@/content/site";

export const hero = {
  headline: "Digitale Sicherheit beginnt mit Kidgonet",
  subheadline: "Klare Regeln für Handy, Apps und Onlinezeit.",
  primaryCtaLabel: "Jetzt gratis testen!",
} as const;

export type Bullet = { strong: string; rest: string };

export const problemSolution: {
  eyebrow: string;
  headline: string;
  bullets: Bullet[];
  trustLogos: { src: string; alt: string }[];
} = {
  // Geschütztes Leerzeichen zwischen "ums" und "Handy", damit der Umbruch
  // nur nach "Streit" passiert: "Ständig Streit" / "ums Handy?".
  eyebrow: "Ständig Streit ums Handy?",
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
      text: "Kidgonet aus dem App Store oder Play Store laden, fertig. Beim Einrichten wählst du den Modus: Dein Kind bekommt den Kindermodus, du die volle Steuerung.",
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
  role: "Weltmeister und Partner von Kidgonet",
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
  // ours ist überall true; others gibt an, ob andere Apps die Funktion bieten.
  features: [
    { label: "Altersgerechter Webfilter", others: false },
    { label: "Geräteübergreifende Bildschirmzeiten", others: false },
    { label: "Bildschirmpausen", others: true },
    { label: "Geräteübergreifende Limits", others: false },
    { label: "Apps freigeben", others: false },
    { label: "Privatsphäre Deiner Kinder", others: false },
  ],
} as const;

/**
 * Medienführerschein — separates, einmalig kostenpflichtiges Programm.
 * Positioniert als Stufe VOR dem ersten Handy (gemeinsam, Urkunde), damit es
 * die App nicht konkurriert, sondern zu ihr hinführt.
 */
export const medienfuehrerschein = {
  eyebrow: "Der Medienführerschein von Kidgonet",
  headline: "Mehr Sicherheit für dein Kind im digitalen Alltag.",
  chaptersIntro:
    "Fünf Kapitel, die ihr als Eltern und Kind gemeinsam durchgeht – spielerisch und im eigenen Tempo:",
  chapters: [
    {
      title: "Bildschirmzeit & Medienbalance",
      text: "Eine gesunde Balance finden – wie viel Bildschirm tut wirklich gut?",
      premium: false,
      subchapters: ["Bildschirmzeit", "Gute Zeit, smarte Zeit", "Lebenszeit"],
    },
    {
      title: "Gefahren & Miteinander im Netz",
      text: "Risiken erkennen, respektvoll chatten und im Ernstfall richtig reagieren.",
      premium: false,
      subchapters: ["Chat", "Detektiv", "In-Game"],
    },
    {
      title: "Privatsphäre & Sicherheit",
      text: "Persönliche Daten und Accounts schützen – sichere Passwörter inklusive.",
      premium: true,
      subchapters: ["Privatsphäre", "Passwörter", "Profile"],
    },
    {
      title: "KI verstehen & klug nutzen",
      text: "Entdecken, was KI kann – und sie sinnvoll zum Lernen einsetzen.",
      premium: true,
      subchapters: ["Was ist KI?", "KI-Talente", "Mit KI lernen"],
    },
    {
      title: "KI mit Köpfchen",
      text: "KI-Risiken erkennen: Fake-Bilder, Halluzinationen und Datenschutz.",
      premium: true,
      subchapters: ["Halluzinationen", "Fake-Bilder", "KI & Daten"],
    },
  ],
  ctaLabel: "Kidgonet Medienführerschein starten",
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
      question: "Ist Kidgonet DSGVO-konform und wo werden die Daten gespeichert?",
      answer:
        "Ja, Kidgonet ist vollständig DSGVO-konform. Alle Daten werden ausschließlich auf Servern in Deutschland gespeichert und verarbeitet, nicht weitergegeben und nicht an Werbenetzwerke verkauft. Der Webfilter arbeitet DNS-basiert direkt auf dem Kindergerät, ohne den Datenverkehr über externe Server zu leiten.",
    },
    {
      question: "Wurde Kidgonet in Deutschland entwickelt?",
      answer:
        "Ja. Kidgonet wird von der Kidgonet GmbH in Brunnthal bei München entwickelt und betrieben. Für das Engagement im Kinderschutz wurde Kidgonet 2025 mit dem Bayerischen Digitalpreis ausgezeichnet.",
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
        "Ja. Kidgonet ist für Android im Google Play Store und für iOS im Apple App Store verfügbar.",
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
