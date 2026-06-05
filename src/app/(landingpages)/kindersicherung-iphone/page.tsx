import type { Metadata } from "next";
import Link from "next/link";
import {
  KeywordLandingPage,
  type LandingContent,
} from "@/components/landing/KeywordLandingPage";
import { trialCopy } from "@/content/site";

export const metadata: Metadata = {
  title: "Kindersicherung iPhone – Bildschirmzeit & Filter | Kidgonet",
  description: `Kindersicherung für das iPhone deines Kindes: Bildschirmzeit, Webfilter, App-Sperre und Standort — DSGVO-konform aus Deutschland. ${trialCopy.metaShort}`,
  alternates: { canonical: "/kindersicherung-iphone" },
  openGraph: {
    title: "Kindersicherung iPhone – App für iOS",
    description:
      "Bildschirmzeit, Webfilter und App-Sperre auf dem iPhone deines Kindes — DSGVO-konform aus Deutschland.",
    url: "https://www.kidgonet.de/kindersicherung-iphone",
  },
};

const content: LandingContent = {
  slug: "kindersicherung-iphone",
  breadcrumbName: "Kindersicherung iPhone",
  heroHeadline: (
    <>
      Kindersicherung<br /> für das iPhone.
    </>
  ),
  heroSubheadline: "Sicher für iPhone & iPad.",
  eyebrow: "Kindersicherung iPhone",
  headline:
    "Die Kindersicherung fürs iPhone — Bildschirmzeit, Webfilter & App-Sperre in einer App.",
  paragraphs: [
    <>
      Eine <strong>Kindersicherung für das iPhone</strong> ist tief in iOS
      integriert und mit der Eltern-Apple-ID abgesichert. Das bedeutet: dein
      Kind kann den Schutz nicht einfach umgehen, die App nicht löschen und
      keine Limits eigenständig aufheben.
    </>,
    <>
      Anders als die Apple-Bordmittel allein verwaltest du mit Kidgonet mehrere
      Kinder zentral in einem Eltern-Portal, kombinierst Bildschirmzeit mit
      altersgerechtem <strong>Webfilter</strong> und App-Sperre, siehst den
      Standort deines Kindes auf Anfrage und kannst Regeln auch über Browser
      verwalten — nicht nur am eigenen iPhone.
    </>,
    <>
      Voraussetzung: iOS 16 oder höher und ein Apple-Kinderaccount in deiner
      Familienfreigabe. Die Einrichtung dauert ca. 5 Minuten, eine{" "}
      <strong>Schritt-für-Schritt-Anleitung</strong> findest du unter „Hilfe →
      Installation iOS".
    </>,
    <>
      Hat dein Kind ein Android-Gerät oder habt ihr verschiedene Smartphones im
      Einsatz? Einen plattformübergreifenden Überblick gibt die Seite zur{" "}
      <Link href="/kindersicherung-handy" className="font-semibold text-brand-yellow underline">
        Kindersicherung fürs Handy
      </Link>
      .
    </>,
  ],
  faqEyebrow: "Häufige Fragen Kindersicherung iPhone",
  faqHeadline: "Kindersicherung iPhone — was Eltern wissen sollten.",
  faqs: [
    {
      question: "Wie funktioniert eine Kindersicherung auf dem iPhone?",
      answer:
        "Kidgonet ist tief in iOS integriert und nutzt deine Eltern-Apple-ID zur Absicherung. So funktionieren Bildschirmzeit-Limits, App-Sperren und Webfilter zuverlässig — egal ob du selbst iPhone oder Android nutzt. Geschützt werden iPhones ab iOS 16.",
    },
    {
      question: "Brauche ich einen Apple-Kinderaccount?",
      answer:
        `Ja. Mit einer eigenen Kind-Apple-ID in deiner Familienfreigabe greift der Systemschutz vollumfänglich — das Kind kann die App nicht eigenständig löschen oder den Webfilter über Private Relay umgehen. Apple-Kinderaccount erstellst du in „Einstellungen → Apple-ID → Familie".`,
    },
    {
      question: "Funktioniert Kidgonet auch ohne Eltern-iPhone?",
      answer:
        "Ja. Das Eltern-Gerät kann Android sein oder du verwaltest alles im Browser über das Eltern-Portal. Es genügt, dass das Kind-Gerät ein iPhone ist.",
    },
    {
      question: "Kann mein Kind die Kindersicherung umgehen?",
      answer:
        "Bei vollständig eingerichtetem Apple-Kinderaccount nicht. Die zentralen Schutzfunktionen (Bildschirmzeit, App-Sperre) sind auf System-Ebene durch Apple gesichert. Der Webfilter läuft als lokales VPN auf dem Gerät — auch hier hat dein Kind keinen Zugriff zum Deaktivieren.",
    },
    {
      question: "Welche iOS-Versionen werden unterstützt?",
      answer:
        "Kidgonet unterstützt iOS 16 und alle neueren Versionen. Bei älteren iPhones, die kein iOS 16 mehr bekommen, empfehlen wir ein Update oder einen Gerätewechsel — die Schutzfunktionen sind sonst nur eingeschränkt verfügbar.",
    },
  ],
};

export default function KindersicherungIphonePage() {
  return <KeywordLandingPage content={content} />;
}
