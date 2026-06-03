import type { Metadata } from "next";
import {
  KeywordLandingPage,
  type LandingContent,
} from "@/components/landing/KeywordLandingPage";
import { trialCopy } from "@/content/site";

export const metadata: Metadata = {
  title: "Kinderschutz-App aus Deutschland – DSGVO-konform | Kidgonet",
  description: `DSGVO-konforme Kinderschutz-App, in Deutschland entwickelt, Server ausschließlich in Deutschland. Bildschirmzeit, Webfilter und Standort für iOS & Android. ${trialCopy.metaShort}`,
  alternates: { canonical: "/kinderschutz-app-deutschland" },
  openGraph: {
    title: "Kinderschutz-App aus Deutschland – DSGVO-konform",
    description:
      "Kidgonet ist eine DSGVO-konforme Kinderschutz-App aus Deutschland: Server und Datenspeicherung ausschließlich in Deutschland, keine Weitergabe von Kinderdaten.",
    url: "https://www.kidgonet.de/kinderschutz-app-deutschland",
  },
};

const content: LandingContent = {
  slug: "kinderschutz-app-deutschland",
  breadcrumbName: "Kinderschutz-App aus Deutschland",
  relatedFeature: "webfilter",
  heroHeadline: (
    <>
      Kinderschutz aus<br /> Deutschland.
    </>
  ),
  heroSubheadline: "DSGVO-konform. Server in Deutschland.",
  eyebrow: "DSGVO-konform · Made in Germany",
  headline:
    "Die Kinderschutz-App aus Deutschland: DSGVO-konform, Server in Deutschland.",
  paragraphs: [
    <>
      Kidgonet ist eine <strong>Kinderschutz-App aus Deutschland</strong>. Sie
      wird von der Kidgonet GmbH in Brunnthal bei München entwickelt und
      betrieben und wurde 2025 mit dem <strong>Bayerischen Digitalpreis</strong>{" "}
      für ihr Engagement im Kinderschutz ausgezeichnet. Eltern steuern
      Bildschirmzeit, Webfilter, App-Freigaben und Standort zentral über das
      Eltern-Portal, für iOS und Android.
    </>,
    <>
      Datenschutz ist dabei kein Zusatz, sondern Grundprinzip: Kidgonet ist{" "}
      <strong>vollständig DSGVO-konform</strong>. Alle Daten werden{" "}
      <strong>ausschließlich auf Servern in Deutschland</strong> gespeichert und
      verarbeitet. Es gibt keine Weitergabe oder Verkauf von Kinderdaten an
      Werbenetzwerke oder Dritte und keine Werbung in der Kinder-App. Deinen
      Account kannst du jederzeit im Eltern-Portal löschen, dabei werden alle
      gespeicherten Daten mit entfernt.
    </>,
    <>
      Auch technisch bleibt der Schutz datensparsam: Der Webfilter arbeitet{" "}
      <strong>DNS-basiert direkt auf dem Kindergerät</strong> und leitet den
      Datenverkehr nicht über externe Server um. Es wird kein Browserverlauf
      gespeichert und keine App-Nutzung im Detail protokolliert. So entsteht
      Schutz, der die Privatsphäre des Kindes respektiert, statt es zu
      überwachen.
    </>,
  ],
  faqEyebrow: "Häufige Fragen zu Datenschutz und Standort",
  faqHeadline: "DSGVO, Server und Made in Germany, kurz erklärt.",
  faqs: [
    {
      question: "Ist Kidgonet DSGVO-konform?",
      answer:
        "Ja, Kidgonet ist vollständig konform mit der EU-Datenschutz-Grundverordnung (DSGVO). Alle personenbezogenen Daten werden vertraulich behandelt und ausschließlich für den vorgesehenen Zweck verwendet.",
    },
    {
      question: "Wo werden die Daten gespeichert?",
      answer:
        "Ausschließlich auf Servern in Deutschland. Es werden keine Daten in Länder außerhalb der EU übertragen. Standortdaten werden zudem nur kurz vorgehalten und danach automatisch gelöscht.",
    },
    {
      question: "Wurde Kidgonet in Deutschland entwickelt?",
      answer:
        "Ja. Kidgonet wird von der Kidgonet GmbH in Brunnthal bei München entwickelt und betrieben und wurde 2025 mit dem Bayerischen Digitalpreis ausgezeichnet.",
    },
    {
      question: "Werden die Daten meines Kindes an Dritte weitergegeben?",
      answer:
        "Nein. Kidgonet gibt keine Kinderdaten an Werbenetzwerke, Analyse-Dienste oder andere Dritte weiter und verkauft keine Daten. In der Kinder-App gibt es keine Werbung.",
    },
    {
      question: "Überwacht Kidgonet den Browserverlauf oder die Chats meines Kindes?",
      answer:
        "Nein. Der Webfilter arbeitet DNS-basiert direkt auf dem Gerät, ohne den Datenverkehr über externe Server zu leiten. Kidgonet speichert keinen Browserverlauf, keine Chat-Verläufe und keine detaillierten App-Nutzungsdaten.",
    },
    {
      question: "Kann ich meinen Account und alle Daten wieder löschen?",
      answer:
        "Ja. Du kannst deinen Account jederzeit selbst im Eltern-Portal löschen. Dabei werden alle gespeicherten Daten entfernt.",
    },
  ],
};

export default function KinderschutzAppDeutschlandPage() {
  return <KeywordLandingPage content={content} />;
}
