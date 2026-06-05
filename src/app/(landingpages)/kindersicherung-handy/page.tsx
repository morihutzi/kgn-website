import type { Metadata } from "next";
import Link from "next/link";
import {
  KeywordLandingPage,
  type LandingContent,
} from "@/components/landing/KeywordLandingPage";
import { trialCopy } from "@/content/site";

export const metadata: Metadata = {
  title: "Kindersicherung Handy – App für iOS & Android | Kidgonet",
  description: `Kindersicherung fürs Handy: Bildschirmzeit, Webfilter, Standort & App-Sperre. iPhone und Android, DSGVO-konform. ${trialCopy.metaShort}`,
  alternates: { canonical: "/kindersicherung-handy" },
  openGraph: {
    title: "Kindersicherung Handy – App für iOS & Android",
    description:
      "Eine App, alle Geräte: Bildschirmzeit, Webfilter, Standort und App-Sperre auf dem Handy deines Kindes — DSGVO-konform aus Deutschland.",
    url: "https://www.kidgonet.de/kindersicherung-handy",
  },
};

const content: LandingContent = {
  slug: "kindersicherung-handy",
  breadcrumbName: "Kindersicherung Handy",
  heroHeadline: (
    <>
      Kindersicherung<br /> für jedes Handy.
    </>
  ),
  heroSubheadline: "Für iPhone und Android.",
  eyebrow: "Kindersicherung Handy",
  headline:
    "Die Kindersicherung für iPhone & Android — alles in einer App.",
  paragraphs: [
    <>
      Eine <strong>Kindersicherung fürs Handy</strong> hilft Eltern, den
      Umgang ihrer Kinder mit dem Smartphone zu steuern: wie lange das Gerät
      genutzt werden darf, welche Webseiten erreichbar sind und welche Apps
      zur Verfügung stehen. Kidgonet kombiniert all diese Funktionen in einer
      einzigen App — für iOS und Android.
    </>,
    <>
      Eine gute Kindersicherung sperrt nicht nur, sondern begleitet. Sie
      schützt vor ungeeigneten Inhalten, gibt Eltern die Gewissheit über
      vereinbarte Regeln und respektiert dabei die{" "}
      <strong>Privatsphäre des Kindes</strong>. Genau dafür wurde Kidgonet
      entwickelt: in Zusammenarbeit mit Experten, Pädagogen und dem LKA
      München, mit Servern in Deutschland und voller DSGVO-Konformität.
    </>,
  ],
  sections: [
    {
      heading: "Kindersicherung für iPhone und Android — eine App für beide",
      body: [
        <>
          Die meisten Familien haben gemischte Geräte: ein iPhone hier, ein
          Android-Handy dort. Kidgonet verwaltet beide Welten aus einem einzigen
          Eltern-Konto. Auf iOS ist der Schutz über die Apple-Familienfreigabe
          abgesichert, auf Android über die Geräteverwaltung — die Funktionen
          (Bildschirmzeit, Webfilter, App-Steuerung, Standort) sind auf beiden
          Plattformen dieselben.
        </>,
        <>
          Je nach Gerät deines Kindes findest du eine ausführliche Anleitung auf
          unseren spezialisierten Seiten zur{" "}
          <Link href="/kindersicherung-iphone" className="font-semibold text-brand-yellow underline">
            Kindersicherung fürs iPhone
          </Link>{" "}
          und zur{" "}
          <Link href="/kindersicherung-android" className="font-semibold text-brand-yellow underline">
            Kindersicherung für Android
          </Link>
          .
        </>,
      ],
    },
    {
      heading: "Welche Funktionen eine Handy-Kindersicherung abdecken sollte",
      body: [
        <>
          Eine vollständige Kindersicherung fürs Handy deckt vier Bereiche ab:
          <strong> Bildschirmzeit</strong> mit Tageslimits und Zeitplänen,
          einen <strong>Webfilter</strong> gegen ungeeignete Webseiten, die{" "}
          <strong>App-Steuerung</strong> für Freigaben und Sperren einzelner
          Apps sowie die <strong>Standortabfrage</strong> für mehr Sicherheit
          unterwegs. Kidgonet vereint alle vier in einer App — du musst keine
          getrennten Tools kombinieren.
        </>,
        <>
          Wichtig ist die Balance: Der Webfilter wächst mit dem Alter des Kindes
          mit, Lern- und Notfall-Apps lassen sich auch während einer Sperre
          freigeben, und der Standort wird nur auf aktive Anfrage übertragen —
          nicht dauerhaft im Hintergrund.
        </>,
      ],
    },
    {
      heading: "Kindersicherung auf dem Handy einrichten",
      body: [
        <>
          Die Einrichtung dauert rund fünf Minuten: Kidgonet auf dem Handy des
          Kindes installieren, das Gerät per QR-Code oder Pairing-Code mit dem
          Eltern-Konto verbinden und anschließend die Regeln festlegen.
          Änderungen an Bildschirmzeit oder Webfilter wirken in Echtzeit, ohne
          dass du das Kind-Gerät erneut in die Hand nehmen musst.
        </>,
        <>
          Alle Einstellungen verwaltest du im Eltern-Portal — am eigenen
          Smartphone oder im Browser. So behältst du auch mehrere Kinder mit
          unterschiedlichen Geräten zentral im Blick.
        </>,
      ],
    },
    {
      heading: "Datenschutz: warum Herkunft und Serverstandort zählen",
      body: [
        <>
          Eine Kindersicherung verarbeitet sensible Daten über dein Kind.
          Kidgonet speichert diese ausschließlich auf Servern in Deutschland,
          ist vollständig DSGVO-konform und gibt keine Daten an Dritte weiter.
          Das ist ein klarer Unterschied zu vielen internationalen Anbietern,
          bei denen Serverstandort und Datenverwendung unklar bleiben.
        </>,
      ],
    },
  ],
  relatedArticleSlugs: [
    "kindersicherung-am-handy",
    "kindersicherung-handy-2025",
    "sicher-surfen-so-schuetzt-du-dein-kind-im-netz",
  ],
  faqEyebrow: "Häufige Fragen zur Kindersicherung",
  faqHeadline: "Kindersicherung Handy — was Eltern wissen sollten.",
  faqs: [
    {
      question: "Was ist eine Kindersicherung fürs Handy?",
      answer:
        "Eine Kindersicherung ist eine App, mit der Eltern festlegen, was Kinder auf ihrem Smartphone tun können: wie lange sie es nutzen, welche Webseiten geöffnet werden dürfen und welche Apps verfügbar sind. Kidgonet kombiniert all diese Funktionen in einer App für iOS und Android.",
    },
    {
      question: "Welche Kindersicherung ist die beste für iPhone und Android?",
      answer:
        "Eine gute Kindersicherung deckt drei Bereiche ab: Bildschirmzeit, Webfilter und App-Steuerung — und respektiert dabei die Privatsphäre des Kindes. Kidgonet wurde speziell für deutsche Familien entwickelt, ist DSGVO-konform mit Servern in Deutschland und arbeitet sowohl auf iOS als auch auf Android.",
    },
    {
      question: "Wie richte ich eine Kindersicherung auf dem Handy ein?",
      answer:
        "In drei Schritten: 1) Kidgonet auf dem Handy deines Kindes installieren. 2) Mit deinem Eltern-Konto verbinden (QR-Code, Pairing-Code oder Login). 3) Regeln festlegen — Bildschirmzeit, Webfilter und App-Freigaben. Die komplette Einrichtung dauert ca. 5 Minuten.",
    },
    {
      question: "Spioniert eine Kindersicherung meine Kinder aus?",
      answer:
        "Kidgonet wurde als Schutz-, nicht als Überwachungstool entwickelt. Inhalte privater Nachrichten, Chats oder Social-Media-Posts werden nicht eingesehen. Standort wird nur auf aktive Anfrage übermittelt, nicht kontinuierlich. Der Schutz endet dort, wo die Privatsphäre des Kindes beginnt.",
    },
    {
      question: "Funktioniert eine Kindersicherung auf jedem Smartphone?",
      answer:
        "Kidgonet unterstützt alle aktuellen iPhones (iOS 16+) und Android-Geräte. Du kannst Geräte mit unterschiedlichen Betriebssystemen aus einem Eltern-Konto verwalten — z.B. dein iPhone als Eltern-Gerät und das Android-Handy deines Kindes.",
    },
  ],
};

export default function KindersicherungHandyPage() {
  return <KeywordLandingPage content={content} />;
}
