import type { Metadata } from "next";
import Link from "next/link";
import {
  KeywordLandingPage,
  type LandingContent,
} from "@/components/landing/KeywordLandingPage";
import { trialCopy } from "@/content/site";

export const metadata: Metadata = {
  title: "Kindersicherung Android – Smartphone-Schutz | Kidgonet",
  description: `Kindersicherung für Android-Smartphones: Bildschirmzeit, Webfilter, App-Sperre und Standort. DSGVO-konform mit Servern in Deutschland. ${trialCopy.metaShort}`,
  alternates: { canonical: "/kindersicherung-android" },
  openGraph: {
    title: "Kindersicherung Android – App für sicheres Smartphone",
    description:
      "Bildschirmzeit, Webfilter und App-Sperre auf dem Android-Handy deines Kindes — DSGVO-konform, ohne Werbung, mit Servern in Deutschland.",
    url: "https://www.kidgonet.de/kindersicherung-android",
  },
};

const content: LandingContent = {
  slug: "kindersicherung-android",
  breadcrumbName: "Kindersicherung Android",
  heroHeadline: (
    <>
      Kindersicherung<br /> für Android.
    </>
  ),
  heroSubheadline: "Sicher für jedes Android-Handy.",
  eyebrow: "Kindersicherung Android",
  headline: "Die Kindersicherung für Android — Bildschirmzeit, Webfilter & App-Sperre.",
  paragraphs: [
    <>
      Eine <strong>Kindersicherung für Android</strong> muss tiefer ins System
      eingreifen als unter iOS — denn Android ist offener. Kidgonet nutzt
      Geräteadministrator-Rechte, einen lokalen <strong>VPN-Webfilter</strong>{" "}
      und die Bedienungshilfe, um Bildschirmzeit präzise zu messen und Apps
      zuverlässig zu sperren. So bleibt der Schutz auch nach Neustart aktiv.
    </>,
    <>
      Kidgonet bietet einen{" "}
      <strong>altersgerechten Webfilter</strong>, App-Limits pro App,
      Sofort-Sperre für alle Geräte gleichzeitig und ein zentrales
      Eltern-Portal — auch im Browser. Server in Deutschland, DSGVO-konform,
      keine Werbung und kein Verkauf von Kinderdaten.
    </>,
    <>
      Unterstützt werden alle aktuellen Android-Versionen. Die Einrichtung
      dauert ca. 5 Minuten und führt dich Schritt für Schritt durch jede
      Berechtigung — siehe „Hilfe → Installation Android".
    </>,
    <>
      Nutzt dein Kind ein iPhone oder habt ihr gemischte Geräte? Einen
      plattformübergreifenden Überblick gibt die Seite zur{" "}
      <Link href="/kindersicherung-handy" className="font-semibold text-brand-yellow underline">
        Kindersicherung fürs Handy
      </Link>
      .
    </>,
  ],
  faqEyebrow: "Häufige Fragen Kindersicherung Android",
  faqHeadline: "Kindersicherung Android — was Eltern wissen sollten.",
  faqs: [
    {
      question: "Wie funktioniert eine Kindersicherung auf Android?",
      answer:
        "Auf Android nutzt Kidgonet Geräteadministrator-Rechte, einen lokalen VPN-Webfilter und die Bedienungshilfe, um Bildschirmzeit zu messen und Apps zu sperren. Der Schutz bleibt auch nach Neustart oder Akku-Optimierung aktiv.",
    },
    {
      question: "Welche Funktionen bietet Kidgonet auf Android?",
      answer:
        "Kidgonet bietet auf Android: altersgerechten Webfilter, Bildschirmzeit-Limits pro App und pro Tag, gleichzeitige Sofort-Sperre aller Geräte, Sperrmodus für Hausaufgaben, Standortabruf und ein zentrales Eltern-Portal im Browser. Server in Deutschland, DSGVO-konform, keine Werbung.",
    },
    {
      question: "Welche Berechtigungen braucht die Kindersicherung?",
      answer:
        `Kidgonet benötigt: Geräteadministrator (Schutz vor Deinstallation), VPN (Webfilter), Bedienungshilfe (App-Zeitmessung), Nutzungsstatistik (Tageslimits), Standort (optional) und „Über anderen Apps" (Sperrbildschirm). Alle werden bei der Installation einzeln erklärt.`,
    },
    {
      question: "Kann mein Kind die Kindersicherung deinstallieren?",
      answer:
        "Nein. Sobald Kidgonet als Geräteadministrator eingerichtet ist, lässt sich die App nicht ohne Eingabe der Eltern-PIN deinstallieren oder deaktivieren.",
    },
    {
      question: "Welche Android-Versionen werden unterstützt?",
      answer:
        "Kidgonet unterstützt Android 9 und alle neueren Versionen. Auf neueren Samsung-Geräten gibt es zusätzlich tiefere Integrationen über Samsung Knox.",
    },
  ],
};

export default function KindersicherungAndroidPage() {
  return <KeywordLandingPage content={content} />;
}
