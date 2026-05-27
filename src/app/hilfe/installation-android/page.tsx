import type { Metadata } from "next";
import {
  Breadcrumb,
  Hero,
  PrepGrid,
  SectionMarker,
  DeviceBanner,
  Step,
  ConnectOptions,
  ClosingCTA,
  GuideBody,
} from "@/components/hilfe/InstallGuide";

export const metadata: Metadata = {
  title: "Kidgonet auf Android einrichten – Schritt-für-Schritt-Anleitung",
  description:
    "Installation von Kidgonet auf einem Android-Gerät in 12 Schritten. App installieren, Berechtigungen erteilen, Webfilter aktivieren, Standort freigeben, mit dem Eltern-Konto verbinden.",
  alternates: { canonical: "/hilfe/installation-android" },
  openGraph: {
    title: "Kidgonet auf Android einrichten",
    description: "Android-Gerät deines Kindes in etwa 5 Minuten einrichten.",
    url: "https://www.kidgonet.de/hilfe/installation-android",
  },
};

const IMG = "/hilfe/android";

export default function InstallationAndroidPage() {
  return (
    <>
      <Breadcrumb current="Installation Android" />

      <Hero
        eyebrow="Android · Eltern-Anleitung"
        title="Kindgerät einrichten —"
        italic="vom Download"
        titleRest="bis zum Schutz."
        description="Diese Anleitung führt dich in 12 Schritten durch die komplette Einrichtung am Gerät deines Kindes: App installieren, Rolle wählen und alle Berechtigungen einzeln freigeben."
        pills={["Ca. 5 Minuten", "12 Schritte", "App-Version 2.0"]}
      />

      <PrepGrid
        prepTitle="Bevor du startest"
        prepItems={[
          "Du hast auf deinem eigenen Gerät bereits ein Kidgonet-Eltern-Konto angelegt.",
          "Du hast das Kindgerät bereit – Display entsperrt, mit WLAN oder mobilen Daten verbunden.",
          "Du nimmst dir kurz Zeit – diese Bestätigungen machst du selbst, nicht dein Kind.",
        ]}
        roleTitle="Wer macht was"
        roleText={
          <>
            Alle Schritte passieren <strong>am Gerät deines Kindes</strong>.
            Achte auf das Label oben in jedem Abschnitt – es zeigt dir, an
            welchem Gerät du gerade arbeitest. In dieser Anleitung: immer das
            Kind-Gerät.
          </>
        }
      />

      <GuideBody>
        {/* ── Setup & erste Berechtigungen ───────────────────── */}
        <SectionMarker
          range="Schritte 01 — 04"
          title="Setup und erste Berechtigungen."
          lede={
            <>
              App installieren, Rolle <strong>„Kind"</strong> wählen, dann
              führt Kidgonet dich durch jede Berechtigung einzeln.
            </>
          }
        />
        <DeviceBanner text="Am Kind-Gerät" />

        <Step
          num={1}
          title="Kidgonet herunterladen"
          what={
            <>
              <strong>Google Play Store</strong> öffnen → nach „Kidgonet"
              suchen → <strong>„Installieren"</strong> tippen.
            </>
          }
          why="Es ist exakt dieselbe App wie auf deinem Eltern-Gerät – beim ersten Start entscheidet die Rolle, wie das Gerät arbeitet."
        />

        <Step
          num={2}
          title={`Rolle „Kind" wählen`}
          what={
            <>
              App öffnen → <strong>„Jetzt starten"</strong> → Intro-Slides mit{" "}
              <strong>„Weiter"</strong> → bei{" "}
              <strong>„Wer nutzt dieses Gerät?"</strong> auf{" "}
              <strong>„Kind"</strong> tippen.
            </>
          }
          why="Damit Kidgonet weiß, dass dieses Gerät als geschütztes Kindgerät arbeiten soll."
        />

        <Step
          num={3}
          title="Mitteilungen"
          what={
            <>
              In Kidgonet auf <strong>„Erlauben"</strong>, im System-Dialog{" "}
              <strong>„Zulassen"</strong>.
            </>
          }
          why="Kidgonet meldet dir, wenn der Schutz aktiv wurde oder deine Aufmerksamkeit braucht."
          shots={[
            { src: `${IMG}/03-notifications.png`, caption: "Erlauben" },
            { src: `${IMG}/03b-notifications-system.png`, caption: "Zulassen" },
          ]}
        />

        <Step
          num={4}
          title="Geräteadministrator"
          what={
            <>
              „Erlauben" → <strong>„Diese App zur Geräteverwaltung aktivieren"</strong>.
            </>
          }
          why="Damit dein Kind die App nicht einfach löschen kann und der Schutz erhalten bleibt."
          shots={[
            { src: `${IMG}/04-device-admin.png`, caption: "Erlauben" },
            { src: `${IMG}/04b-device-admin-system.png`, caption: "Aktivieren" },
          ]}
        />

        {/* ── System-Berechtigungen ───────────────────────── */}
        <SectionMarker
          range="Schritte 05 — 07"
          title="Die System-Berechtigungen."
          lede="Bildschirmzeit messen, App-Nutzung erkennen, stabil im Hintergrund laufen – die Kern-Funktionen."
        />

        <Step
          num={5}
          title="Bedienungshilfe"
          what={
            <>
              <strong>„Kidgonet"</strong> antippen →{" "}
              <strong>„Kidgonet Kinderschutz verwenden"</strong> einschalten →{" "}
              <strong>„Zulassen"</strong>. Auf Samsung-Geräten ggf. zuerst{" "}
              <strong>„Installierte Apps"</strong>.
            </>
          }
          why={
            <>
              Damit Kidgonet erkennt, welche App gerade läuft, und
              Bildschirmzeiten korrekt zählt.{" "}
              <strong>
                Ohne diese Berechtigung funktioniert der Schutz nicht.
              </strong>
            </>
          }
          shots={[
            { src: `${IMG}/05b-accessibility-list.png`, caption: "Kidgonet auswählen" },
            { src: `${IMG}/05c-accessibility-toggle.png`, caption: "Toggle einschalten" },
            { src: `${IMG}/05d-accessibility-confirm.png`, caption: "Zulassen" },
          ]}
        />

        <Step
          num={6}
          title="Nutzungsstatistik"
          what={
            <>
              In der System-Liste{" "}
              <strong>„Zugriff auf Nutzungsdaten gewähren"</strong> für
              Kidgonet aktivieren.
            </>
          }
          why="Damit wir sehen, wie lange welche Apps verwendet wurden – die Grundlage für Tageslimits."
          shots={[
            { src: `${IMG}/06-usage-stats.png`, caption: "Erlauben" },
            { src: `${IMG}/06b-usage-stats-list.png`, caption: "Toggle einschalten" },
          ]}
        />

        <Step
          num={7}
          title="Akku-Optimierung"
          what={
            <>
              Im System-Dialog auf <strong>„Zulassen"</strong> tippen.
            </>
          }
          why="Damit Android die App im Hintergrund nicht beendet und der Schutz auch bei längerer Nicht-Nutzung läuft."
          shots={[
            { src: `${IMG}/07-battery.png`, caption: "Erlauben" },
            { src: `${IMG}/07b-battery-system.png`, caption: "Zulassen" },
          ]}
        />

        {/* ── Sperrbildschirm, Launcher, Web ─────────────── */}
        <SectionMarker
          range="Schritte 08 — 10"
          title="Sperrbildschirm, Launcher, Webfilter."
          lede="Drei Schritte für die sichtbaren Teile des Schutzes."
        />

        <Step
          num={8}
          title="Über anderen Apps"
          what={
            <>
              <strong>„Einblendung über andere Apps zulassen"</strong> für
              Kidgonet aktivieren.
            </>
          }
          why="Damit der Sperrbildschirm bei Tageslimit, Auszeit oder SOS zuverlässig erscheint."
          shots={[
            { src: `${IMG}/08-overlay.png`, caption: "Erlauben" },
            { src: `${IMG}/08b-overlay-system.png`, caption: "Toggle einschalten" },
          ]}
        />

        <Step
          num={9}
          title="Standard-Startbildschirm"
          what={
            <>
              <strong>„Kidgonet"</strong> als Start-App auswählen →{" "}
              <strong>„Als Standard festlegen"</strong>. Bei der Frage:{" "}
              <strong>„Kidgonet"</strong> und <strong>„Immer"</strong>.
            </>
          }
          why="In der Auszeit zeigt Kidgonet nur die erlaubten Apps. Außerhalb öffnet das Kind wie gewohnt seinen normalen Startbildschirm."
          shots={[
            { src: `${IMG}/09-launcher.png`, caption: "Erlauben" },
            { src: `${IMG}/09b-launcher-picker.png`, caption: "Als Standard" },
          ]}
        />

        <Step
          num={10}
          title="Webfilter (VPN-Anfrage)"
          what={
            <>
              In Kidgonet auf <strong>„Verstanden"</strong> → System-Dialog mit{" "}
              <strong>„OK"</strong> bestätigen.
            </>
          }
          why={
            <>
              Der Webfilter prüft jede Seite{" "}
              <strong>lokal auf dem Gerät</strong> und blockiert schädliche
              oder altersungeeignete Inhalte automatisch. Kein externes VPN,
              kein Browserverlauf, keine IP-Adressen.
            </>
          }
          shots={[
            { src: `${IMG}/10-vpn.png`, caption: "Verstanden" },
            { src: `${IMG}/10b-vpn-system.png`, caption: "OK" },
          ]}
        />

        {/* ── Finalisierung ──────────────────────────────── */}
        <SectionMarker
          range="Schritte 11 — 12"
          title="Reboot-Schutz und Standort."
          lede="Die letzten zwei Schritte machen den Schutz neustart-sicher und geben Standort frei."
        />

        <Step
          num={11}
          title={`Reboot-Schutz „Immer aktiv"`}
          what={
            <>
              <strong>„Zu den VPN-Einstellungen"</strong> → ⚙ neben Kidgonet →{" "}
              <strong>„Immer aktiv"</strong> einschalten → zweimal Zurück.
            </>
          }
          why="Damit der Webfilter nach einem Geräte-Neustart automatisch wieder anspringt – nicht erst, wenn das Kind die App öffnet."
          shots={[
            { src: `${IMG}/11-reboot.png`, caption: "Zu VPN-Einstellungen" },
            { src: `${IMG}/11b-vpn-settings.png`, caption: "⚙ neben Kidgonet" },
            { src: `${IMG}/11c-vpn-always-on.png`, caption: "Immer aktiv" },
          ]}
        />

        <Step
          num={12}
          title="Standort"
          what={
            <>
              In Kidgonet auf <strong>„Erlauben"</strong> → System-Dialog:{" "}
              <strong>„Bei Nutzung der App"</strong> → in der
              Berechtigungs-Liste <strong>„Immer zulassen"</strong>.
            </>
          }
          why="Damit du den Standort deines Kindes in der Eltern-App sehen kannst. Der Standort wird nur auf Anfrage abgerufen – keine kontinuierliche Verfolgung."
          shots={[
            { src: `${IMG}/12-location.png`, caption: "Erlauben" },
            { src: `${IMG}/12b-location-system.png`, caption: "Bei Nutzung" },
            { src: `${IMG}/12c-location-always.png`, caption: "Immer zulassen" },
          ]}
        />
      </GuideBody>

      <ConnectOptions
        heading="So verbindest du das Kind-Gerät mit deinem Eltern-Konto."
        options={[
          {
            name: "QR-Code scannen",
            desc: "Schnellste Methode. Im Eltern-Portal den QR-Code anzeigen lassen und mit dem Kind-Gerät scannen – fertig.",
          },
          {
            name: "Pairing-Code eingeben",
            desc: "Wenn kein QR-Code möglich ist: 8-stelligen Code aus dem Portal am Kind-Gerät eintippen.",
          },
          {
            name: "Mit Eltern-Konto anmelden",
            desc: "E-Mail + Passwort am Kind-Gerät eingeben – das richtige Kind wird automatisch ausgewählt.",
          },
        ]}
      />

      <ClosingCTA
        title="Geschafft. Der Schutz ist aktiv."
        description={
          <>
            Auf dem Eltern-Gerät kannst du jetzt Tageslimit, Auszeiten und
            freigegebene Apps anpassen – oder im Eltern-Portal auf{" "}
            <strong>portal.kidgonet.de</strong>.
          </>
        }
      />
    </>
  );
}
