import type { Metadata } from "next";
import {
  Breadcrumb,
  Hero,
  PrepGrid,
  SectionMarker,
  DeviceBanner,
  Step,
  WarningCard,
  ConnectOptions,
  ClosingCTA,
  GuideBody,
} from "@/components/hilfe/InstallGuide";
import { JsonLd, howToSchema } from "@/components/seo/JsonLd";

const HOW_TO_STEPS = [
  {
    name: "Kidgonet aus dem App Store laden",
    text: `App Store öffnen, „Kidgonet" laden, App öffnen und „Jetzt starten" antippen.`,
  },
  {
    name: `Rolle „Kind" wählen`,
    text: `Bei der Frage „Wer nutzt dieses Gerät?" auf „Kind" tippen.`,
  },
  {
    name: "Mitteilungen erlauben",
    text: `In Kidgonet auf „Erlauben" tippen, dann im iOS-Dialog erneut „Erlauben".`,
  },
  {
    name: "Systemschutz (Bildschirmzeit) aktivieren",
    text: `„Verstanden" in der App, iOS-Dialog mit „Fortfahren". Eltern-Apple-ID und Passwort eingeben.`,
  },
  {
    name: "Webfilter einrichten",
    text: `„Verstanden" in der App. Im VPN-Dialog auf „Erlauben". iPhone-Code des Kind-Geräts eingeben.`,
  },
  {
    name: "Standort freigeben",
    text: `„Erlauben" in der App. Ersten Dialog mit „Beim Verwenden der App", zweiten mit „In Immer erlauben ändern".`,
  },
  {
    name: "Schutzregeln laden",
    text: `Status prüfen und auf „Weiter zum Pairing" tippen.`,
  },
  {
    name: "Mit Eltern-Konto verbinden",
    text: "QR-Code aus dem Eltern-Portal scannen, mit Eltern-Login verbinden oder Pairing-Code manuell eingeben.",
  },
];

export const metadata: Metadata = {
  title: "Kidgonet auf iOS einrichten – Schritt-für-Schritt-Anleitung",
  description:
    "In 8 Schritten Kidgonet auf einem iPhone einrichten: App laden, Berechtigungen erteilen, Webfilter & Standort freigeben, mit Eltern-Konto verbinden.",
  alternates: { canonical: "/hilfe/installation-ios" },
  openGraph: {
    title: "Kidgonet auf iOS einrichten",
    description: "iPhone deines Kindes in etwa 5 Minuten einrichten.",
    url: "https://www.kidgonet.de/hilfe/installation-ios",
  },
};

const IMG = "/hilfe/ios";

export default function InstallationIosPage() {
  return (
    <>
      <JsonLd
        data={howToSchema({
          name: "Kidgonet auf dem iPhone deines Kindes einrichten",
          description:
            "Schritt-für-Schritt-Anleitung zur Installation der Kidgonet Kindersicherung auf einem iPhone. In etwa 5 Minuten startklar.",
          totalTime: "PT5M",
          image: "https://www.kidgonet.de/hilfe/ios/IMG_0016-2.png",
          steps: HOW_TO_STEPS,
        })}
      />
      <Breadcrumb current="Installation iOS" />

      <Hero
        eyebrow="iOS · Eltern-Anleitung"
        title="Kindgerät einrichten in"
        italic="acht"
        titleRest="Schritten."
        description="Etwa 5 Minuten am iPhone deines Kindes. Du brauchst dein Eltern-Konto, deine Eltern-Apple-ID und einen Apple-Kinderaccount in deiner Familienfreigabe."
        pills={["Ca. 5 Minuten", "8 Schritte", "iOS 16+"]}
      />

      <PrepGrid
        prepTitle="Bevor du startest"
        prepItems={[
          "Eltern-Konto in der Kidgonet-App angelegt",
          "Apple-Kinderaccount in deiner Familienfreigabe",
          "Eltern-Apple-ID und Passwort parat",
          "iPhone-Code des Kind-Geräts parat",
        ]}
        roleTitle="So funktioniert Kidgonet"
        roleText={
          <>
            Kidgonet ist gleichzeitig Eltern- und Kinder-App – beim ersten
            Start auf jedem Gerät entscheidest du, in welchem Modus es läuft.
            Das Eltern-Portal nutzt du wahlweise in der App oder im Browser
            auf <strong>portal.kidgonet.de</strong>. Beides synchronisiert
            live. Du brauchst kein iPhone als Eltern-Gerät – Kidgonet läuft
            auch auf Android und steuert das Kind-iPhone genauso.
          </>
        }
      />

      <GuideBody>
        {/* ── Setup & Rollenwahl ───────────────────────────── */}
        <SectionMarker
          range="Schritte 01 — 02"
          title="Setup und Rollenwahl."
          lede="Erst die App laden, dann die Rolle wählen. Dieses iPhone wird zum Kind-Gerät."
        />
        <DeviceBanner text="Am iPhone des Kindes" />

        <Step
          num={1}
          title="Kidgonet aus dem App Store laden"
          what={
            <>
              App Store öffnen, „Kidgonet" laden, App öffnen,{" "}
              <strong>„Jetzt starten"</strong> antippen.
            </>
          }
          why="Es ist dieselbe App wie auf deinem iPhone. Die Rolle bestimmst du beim ersten Start."
          shots={[
            { src: `${IMG}/IMG_0016-2.png`, caption: "Willkommen" },
          ]}
        />

        <Step
          num={2}
          title={`Rolle „Kind" wählen`}
          what={
            <>
              Bei „Wer nutzt dieses Gerät?" auf <strong>„Kind"</strong> tippen.
            </>
          }
          why="Damit Kidgonet weiß, dass dieses iPhone als Kind-Gerät eingerichtet wird."
          shots={[
            {
              src: `${IMG}/IMG_0017-2.png`,
              caption: "Rollenauswahl",
            },
          ]}
        />

        {/* ── Berechtigungen ──────────────────────────────── */}
        <SectionMarker
          range="Schritte 03 — 06"
          title="Die vier Berechtigungen."
          lede="iOS fragt für jede Funktion einzeln. Pro Schritt: erst in Kidgonet bestätigen, dann den System-Dialog."
        />

        <Step
          num={3}
          title="Mitteilungen erlauben"
          what={
            <>
              In Kidgonet auf <strong>„Erlauben"</strong>. Im iOS-Dialog noch
              einmal <strong>„Erlauben"</strong>.
            </>
          }
          why="Kidgonet meldet sich, sobald der Schutz aktiv ist oder etwas braucht."
          shots={[
            { src: `${IMG}/IMG_0018-2.png`, caption: "In Kidgonet" },
            { src: `${IMG}/IMG_0019.png`, caption: "iOS-Dialog" },
          ]}
        />

        <Step
          num={4}
          title="Systemschutz (Bildschirmzeit)"
          what={
            <>
              <strong>„Verstanden"</strong> in der App. iOS-Dialog mit{" "}
              <strong>„Fortfahren"</strong>. Deine{" "}
              <strong>Eltern-Apple-ID</strong> und Passwort eingeben. Sheet
              mit „Fertig" schließen.
            </>
          }
          why="Apple aktiviert damit den Bildschirmzeit-Schutz im System. Dein Kind kann ihn nicht eigenständig abschalten."
          note={
            <>
              <strong>Wichtig:</strong> Es ist deine Eltern-Apple-ID, nicht die
              deines Kindes.
            </>
          }
          shots={[
            { src: `${IMG}/IMG_0020-2.png`, caption: "In Kidgonet" },
            { src: `${IMG}/IMG_0021-2.png`, caption: "iOS-Dialog" },
            { src: `${IMG}/IMG_0022.png`, caption: "Eltern-Apple-ID" },
            { src: `${IMG}/IMG_0023.png`, caption: "Bestätigung" },
          ]}
        />

        <WarningCard
          title="Du brauchst einen Apple-Kinderaccount"
          intro="Ohne eigene Kind-Apple-ID in deiner Familienfreigabe greift der Systemschutz nur eingeschränkt:"
          bullets={[
            "Dein Kind könnte die App selbst löschen.",
            "Safari würde den Webfilter über Private Relay umgehen.",
            "Die Berechtigung könnte selbst widerrufen werden.",
          ]}
          outro={
            <>
              <strong>Einrichten:</strong> Auf deinem iPhone „Einstellungen →
              Apple-ID → Familie → Kind hinzufügen". Dann am Kind-iPhone mit
              der neuen Apple-ID anmelden.
            </>
          }
          linkLabel="Schritt-für-Schritt bei Apple ansehen"
          linkHref="https://support.apple.com/de-de/HT201084"
        />

        <Step
          num={5}
          title="Webfilter einrichten"
          what={
            <>
              <strong>„Verstanden"</strong> in der App. Im VPN-Dialog auf{" "}
              <strong>„Erlauben"</strong>. Anschließend den{" "}
              <strong>iPhone-Code</strong> des Kind-Geräts eingeben.
            </>
          }
          why="Der Webfilter prüft Seiten lokal auf dem Gerät. Kein Browserverlauf, kein externes VPN."
          note={
            <>
              <strong>Vorsicht:</strong> Der blaue Button im VPN-Dialog ist
              „Nicht erlauben". Auf „Erlauben" darunter tippen.
            </>
          }
          shots={[
            { src: `${IMG}/IMG_0024.png`, caption: "In Kidgonet" },
            { src: `${IMG}/IMG_0025-2.png`, caption: "VPN-Dialog" },
            { src: `${IMG}/IMG_0026-2.png`, caption: "iPhone-Code" },
          ]}
        />

        <Step
          num={6}
          title="Standort freigeben"
          what={
            <>
              <strong>„Erlauben"</strong> in der App. Ersten Dialog mit{" "}
              <strong>„Beim Verwenden der App erlauben"</strong>. Zweiten mit{" "}
              <strong>„In ‚Immer erlauben' ändern"</strong>.
            </>
          }
          why="Damit du den Standort im Eltern-Portal abrufen kannst. Kein Tracking, nur auf Anfrage."
          shots={[
            { src: `${IMG}/IMG_0027.png`, caption: "In Kidgonet" },
            { src: `${IMG}/IMG_0028.png`, caption: "Beim Verwenden" },
            { src: `${IMG}/IMG_0029.png`, caption: "Immer erlauben" },
          ]}
        />

        {/* ── Pairing ──────────────────────────────────────── */}
        <SectionMarker
          range="Schritte 07 — 08"
          title="Schutzregeln und Pairing."
          lede="Letzter Schritt: Konto-Einstellungen ziehen und mit deinem Eltern-Konto verbinden."
        />

        <Step
          num={7}
          title="Schutzregeln laden"
          what={
            <>
              Status prüfen, auf <strong>„Weiter zum Pairing"</strong> tippen.
            </>
          }
          why="Kidgonet zieht deine Konto-Einstellungen. Tageslimits und Auszeiten greifen direkt nach dem Pairing."
          shots={[
            { src: `${IMG}/IMG_0030.png`, caption: "Status laden" },
          ]}
        />

        <Step
          num={8}
          title="Drei Wege zum Verbinden"
          what="QR-Code aus dem Eltern-Portal scannen, mit Eltern-Login verbinden, oder Pairing-Code manuell eingeben."
          why="Such dir den Weg, der für dich passt – alle drei führen zum gleichen Ergebnis."
          shots={[
            { src: `${IMG}/IMG_0031.png`, caption: "Pairing-Optionen" },
          ]}
        />
      </GuideBody>

      <ConnectOptions
        heading="Drei Wege zum Verbinden."
        options={[
          {
            name: "QR-Code scannen",
            desc: "Schnellster Weg. QR-Code aus dem Eltern-Portal mit dem Kind-iPhone scannen.",
          },
          {
            name: "Mit Eltern-Login verbinden",
            desc: "E-Mail und Passwort eintippen, Kind auswählen oder neu anlegen.",
          },
          {
            name: "Pairing-Code manuell",
            desc: `8-stelligen Code aus dem Portal abtippen, „Verbinden" tippen.`,
          },
        ]}
      />

      <ClosingCTA
        title="Geschafft."
        description="Das Kind-iPhone ist verbunden. Tageslimit, Auszeiten und freigegebene Apps passt du jetzt im Eltern-Portal an."
        finalShot={{
          src: `${IMG}/IMG_0032.png`,
          alt: "Kidgonet Kind-Startbildschirm",
        }}
      />
    </>
  );
}
