import type { Metadata } from "next";
import {
  KeywordLandingPage,
  type LandingContent,
} from "@/components/landing/KeywordLandingPage";
import { trialCopy } from "@/content/site";

export const metadata: Metadata = {
  title: "Bildschirmzeit App für Kinder – iOS & Android | Kidgonet",
  description: `Bildschirmzeit-App für Kinder: Tageslimits, Auszeiten, geräteübergreifende Begrenzung. iPhone & Android. ${trialCopy.metaShort}`,
  alternates: { canonical: "/bildschirmzeit-app" },
  openGraph: {
    title: "Bildschirmzeit App für Kinder – iOS & Android",
    description:
      "Bildschirmzeit begrenzen, Pausen festlegen und Auszeiten durchsetzen — geräteübergreifend für Smartphone, Tablet und Laptop.",
    url: "https://www.kidgonet.de/bildschirmzeit-app",
  },
};

const content: LandingContent = {
  slug: "bildschirmzeit-app",
  breadcrumbName: "Bildschirmzeit-App",
  relatedFeature: "bildschirmzeit",
  heroHeadline: (
    <>
      Bildschirmzeit-App<br /> für Kinder.
    </>
  ),
  heroSubheadline: "Tageslimits auf allen Geräten.",
  eyebrow: "Bildschirmzeit App",
  headline:
    "Die Bildschirmzeit-App für Kinder — Limits, die wirklich gelten.",
  paragraphs: [
    <>
      Eine <strong>Bildschirmzeit-App</strong> hilft Eltern, die tägliche
      Smartphone-Nutzung ihres Kindes klar zu begrenzen — und zwar so, dass
      vereinbarte Regeln auch ohne Diskussion eingehalten werden. Kidgonet
      bietet Tageslimits, Wochenpläne, geplante Pausen (Hausaufgaben,
      Mahlzeiten, Schlafenszeit) und eine sofortige Sperre per Knopfdruck.
    </>,
    <>
      Anders als reine iOS-Bildschirmzeit oder Android-Family-Link arbeitet
      Kidgonet <strong>geräteübergreifend</strong>: Die Bildschirmzeit deines
      Kindes wird über Smartphone, Tablet und Laptop summiert — so kann es
      sich nicht eine Stunde am Handy und nochmal zwei Stunden am Tablet
      hinzuverdienen.
    </>,
    <>
      Eingestellt werden Limits zentral im Eltern-Portal oder direkt in der
      Kidgonet-App. Du siehst auf einen Blick, wie viel Zeit dein Kind heute
      schon verbraucht hat — pro Tag, pro Woche und pro App. Wer möchte, kann{" "}
      <strong>App-Limits</strong> pro App festlegen, z. B. „TikTok max. 30
      Minuten pro Tag".
    </>,
  ],
  faqEyebrow: "Häufige Fragen zur Bildschirmzeit-App",
  faqHeadline: "Bildschirmzeit-App — was Eltern wissen sollten.",
  faqs: [
    {
      question: "Was macht eine gute Bildschirmzeit-App aus?",
      answer:
        "Sie misst Nutzungszeit präzise, lässt sich vom Kind nicht ohne Eltern-PIN umgehen, deckt alle Geräte gemeinsam ab und unterscheidet zwischen Tageslimits, Pausen und App-spezifischen Limits. Kidgonet bietet all das in einer App für iOS und Android.",
    },
    {
      question: "Wie viel Bildschirmzeit ist für Kinder gesund?",
      answer:
        "Empfehlungen variieren nach Alter: Bis 6 Jahre max. 30 Minuten pro Tag, 6–10 Jahre ca. 60 Minuten, ab 10 Jahren je nach Kind und Nutzung 90–120 Minuten. Wichtiger als feste Zahlen sind feste Pausen und smartphonefreie Zonen. Mehr dazu im Elternratgeber.",
    },
    {
      question:
        "Was ist der Unterschied zwischen iOS-Bildschirmzeit und Kidgonet?",
      answer:
        "Apples Bildschirmzeit ist eine gute Basis, aber begrenzt: keine geräteübergreifenden Limits, kein Webfilter, kein zentrales Eltern-Portal für mehrere Kinder. Kidgonet erweitert die System-Funktionen um genau diese Punkte und ist dabei DSGVO-konform mit Servern in Deutschland.",
    },
    {
      question: "Kann ich App-Limits pro App festlegen?",
      answer:
        `Ja. Du kannst für einzelne Apps eigene Tageslimits setzen — z. B. „YouTube 60 Minuten, TikTok 30 Minuten, Schule und Übersetzer unbegrenzt". Limits summieren sich auf das Gesamt-Tageslimit oder können davon ausgenommen werden.`,
    },
    {
      question: "Funktioniert die Bildschirmzeit auch nach Neustart?",
      answer:
        "Ja. Kidgonet startet automatisch mit dem Gerät und behält alle festgelegten Regeln. Auch wenn dein Kind das Gerät neu startet oder den Flugmodus aktiviert, gelten die Limits weiter, sobald das Gerät wieder online ist.",
    },
  ],
};

export default function BildschirmzeitAppPage() {
  return <KeywordLandingPage content={content} />;
}
