import type { Metadata } from "next";
import Link from "next/link";
import {
  KeywordLandingPage,
  type LandingContent,
} from "@/components/landing/KeywordLandingPage";
import { trialCopy } from "@/content/site";

export const metadata: Metadata = {
  title: "Kinderschutz App fürs iPhone (iOS) | Kidgonet",
  description: `Kinderschutz App fürs iPhone, die dein Kind nicht aushebelt: Bildschirmzeit, Webfilter und App-Sperre, abgesichert über die Eltern-Apple-ID. DSGVO-konform aus Deutschland. ${trialCopy.metaShort}`,
  alternates: { canonical: "/kinderschutz-app-iphone" },
  openGraph: {
    title: "Kinderschutz App fürs iPhone – iOS Schutz, der hält",
    description:
      "Mehr als Apples Bildschirmzeit: Webfilter, App-Sperre und Zeitlimits fürs iPhone deines Kindes, über die Eltern-Apple-ID abgesichert. DSGVO-konform aus Deutschland.",
    url: "https://www.kidgonet.de/kinderschutz-app-iphone",
  },
};

const content: LandingContent = {
  slug: "kinderschutz-app-iphone",
  breadcrumbName: "Kinderschutz App fürs iPhone",
  relatedFeature: "webfilter",
  heroHeadline: (
    <>
      Kinderschutz App<br /> fürs iPhone.
    </>
  ),
  heroSubheadline: "Schutz, den dein Kind nicht einfach aushebelt.",
  eyebrow: "Kinderschutz App iPhone",
  headline:
    "Die Kinderschutz App fürs iPhone: Bildschirmzeit, Webfilter und App-Sperre, die wirklich halten.",
  paragraphs: [
    <>
      Eine gute <strong>Kinderschutz App fürs iPhone</strong> schützt dein Kind
      online, ohne es auszuspionieren. Kidgonet bündelt Bildschirmzeit,
      altersgerechten <strong>Webfilter</strong> und App-Sperre in einer App und
      sichert alles über deine <strong>Eltern-Apple-ID</strong> ab. So kann dein
      Kind die App nicht eigenständig löschen und gesetzte Limits nicht einfach
      aufheben.
    </>,
    <>
      Apples eingebaute Bildschirmzeit ist ein guter Anfang, stößt im Alltag aber
      an Grenzen: Sie ist umständlich zu verwalten, wenn mehrere Geräte im Spiel
      sind, und der Webfilter ist weniger fein einstellbar als eine
      spezialisierte Lösung. Mit Kidgonet steuerst du mehrere Kinder zentral im
      Eltern-Portal, kombinierst Zeitlimits mit Webfilter und App-Freigaben und
      siehst den Standort deines Kindes auf Anfrage, am eigenen iPhone, am
      Android-Gerät oder im Browser.
    </>,
    <>
      Voraussetzung ist iOS 16 oder höher und ein Apple-Kinderaccount in deiner
      Familienfreigabe. Die Einrichtung dauert rund 5 Minuten, und du kannst
      Kidgonet vorab {trialCopy.cta}, ohne Angabe von Zahlungsdaten.
    </>,
  ],
  sections: [
    {
      heading: "Warum Apples Bildschirmzeit allein oft nicht reicht",
      body: [
        <>
          Viele Eltern verlassen sich auf die iPhone-Bildschirmzeit und stellen
          dann fest, dass Kinder Wege finden, Limits zu umgehen, ohne dass es
          jemandem auffällt. Kidgonet setzt genau dort an: Die zentralen
          Schutzfunktionen sind über deine Eltern-Apple-ID auf System-Ebene
          abgesichert, der Webfilter läuft als lokales VPN direkt auf dem Gerät.
          Dein Kind hat keinen Zugriff, um ihn zu deaktivieren.
        </>,
        <>
          Du suchst eher den Funktionsüberblick statt des Vergleichs zu den
          Bordmitteln? Dann findest du auf der Seite zur{" "}
          <Link
            href="/kindersicherung-iphone"
            className="font-semibold text-brand-yellow underline"
          >
            Kindersicherung fürs iPhone
          </Link>{" "}
          alle Einstellungen im Detail. Habt ihr verschiedene Smartphones im
          Einsatz, hilft der plattformübergreifende Überblick zur{" "}
          <Link
            href="/kindersicherung-handy"
            className="font-semibold text-brand-yellow underline"
          >
            Kindersicherung fürs Handy
          </Link>
          .
        </>,
      ],
    },
    {
      heading: "Datenschutz aus Deutschland, kein Mitlesen",
      body: [
        <>
          Kidgonet wird von der Kidgonet GmbH in Brunnthal bei München entwickelt
          und betrieben und wurde 2025 mit dem{" "}
          <strong>Bayerischen Digitalpreis</strong> ausgezeichnet. Die App ist
          vollständig DSGVO-konform, alle Daten werden ausschließlich auf Servern
          in Deutschland gespeichert. Es gibt keine Weitergabe von Kinderdaten an
          Dritte und keine Werbung in der Kinder-App. Mehr dazu auf der Seite zur{" "}
          <Link
            href="/kinderschutz-app-deutschland"
            className="font-semibold text-brand-yellow underline"
          >
            Kinderschutz-App aus Deutschland
          </Link>
          .
        </>,
        <>
          Der Schutz bleibt dabei datensparsam: Der Webfilter arbeitet DNS-basiert
          direkt auf dem Kindergerät, es wird kein Browserverlauf gespeichert und
          keine App-Nutzung im Detail protokolliert. So entsteht Schutz, der die
          Privatsphäre deines Kindes respektiert, statt es zu überwachen.
        </>,
      ],
    },
  ],
  faqEyebrow: "Häufige Fragen Kinderschutz App iPhone",
  faqHeadline: "Kinderschutz App fürs iPhone, was Eltern wissen sollten.",
  faqs: [
    {
      question: "Kann mein Kind die Kinderschutz App auf dem iPhone umgehen oder löschen?",
      answer:
        "Bei vollständig eingerichtetem Apple-Kinderaccount nicht. Die zentralen Schutzfunktionen (Bildschirmzeit, App-Sperre) sind auf System-Ebene über deine Eltern-Apple-ID gesichert. Der Webfilter läuft als lokales VPN auf dem Gerät, auch hier hat dein Kind keinen Zugriff zum Deaktivieren, und die App lässt sich nicht eigenständig löschen.",
    },
    {
      question: "Was kann Kidgonet, das die Apple-Bildschirmzeit nicht kann?",
      answer:
        "Kidgonet verwaltet mehrere Kinder zentral in einem Eltern-Portal, kombiniert Zeitlimits mit einem altersgerechten Webfilter und App-Freigaben und zeigt den Standort auf Anfrage. Du steuerst alles auch über Browser oder ein Android-Gerät, nicht nur am eigenen iPhone.",
    },
    {
      question: "Brauche ich einen Apple-Kinderaccount?",
      answer:
        `Ja. Mit einer eigenen Kind-Apple-ID in deiner Familienfreigabe greift der Systemschutz vollumfänglich, das Kind kann die App nicht eigenständig löschen oder den Webfilter umgehen. Den Apple-Kinderaccount erstellst du in „Einstellungen → Apple-ID → Familie".`,
    },
    {
      question: "Funktioniert Kidgonet auch ohne eigenes Eltern-iPhone?",
      answer:
        "Ja. Das Eltern-Gerät kann ein Android-Smartphone sein, oder du verwaltest alles im Browser über das Eltern-Portal. Es genügt, dass das Gerät deines Kindes ein iPhone ist.",
    },
    {
      question: "Welche iOS-Versionen werden unterstützt?",
      answer:
        "Kidgonet unterstützt iOS 16 und alle neueren Versionen. Bei älteren iPhones, die kein iOS 16 mehr bekommen, empfehlen wir ein Update oder einen Gerätewechsel, die Schutzfunktionen sind sonst nur eingeschränkt verfügbar.",
    },
    {
      question: "Werden Browserverlauf oder Chats meines Kindes mitgelesen?",
      answer:
        "Nein. Der Webfilter arbeitet DNS-basiert direkt auf dem Gerät, ohne den Datenverkehr über externe Server zu leiten. Kidgonet speichert keinen Browserverlauf, keine Chat-Verläufe und keine detaillierten App-Nutzungsdaten. Alle Daten liegen ausschließlich auf Servern in Deutschland.",
    },
  ],
};

export default function KinderschutzAppIphonePage() {
  return <KeywordLandingPage content={content} />;
}
