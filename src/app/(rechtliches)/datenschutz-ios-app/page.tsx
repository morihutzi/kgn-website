import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Datenschutzerklärung iOS App",
  description: "Datenschutzerklärung für die Kidgonet iOS App gemäß DSGVO.",
  alternates: { canonical: "/datenschutz-ios-app" },
  robots: { index: false },
};

export default function DatenschutzIosAppPage() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-2 text-3xl font-extrabold text-text-dark md:text-4xl">
            Datenschutzerklärung iOS App
          </h1>
          <p className="mb-10 text-sm text-text-dark/60">
            Kidgonet GmbH — gültig für die Kidgonet iOS App
          </p>

          <div className="prose-elternratgeber">
            <h2>Verantwortlicher</h2>
            <p>
              Kidgonet GmbH<br />
              Eugen-Sänger-Ring 13<br />
              85649 Brunnthal<br />
              Registernummer: HRB 225289<br />
              E-Mail: <a href="mailto:info@kidgonet.de">info@kidgonet.de</a>
            </p>

            <h2>Überblick</h2>
            <p>
              Die Kidgonet iOS App dient Eltern und Sorgeberechtigten zur Verwaltung von Kinderschutzregeln, Standortabruf und Bildschirmzeitkontrolle auf iOS-Geräten ihrer Kinder. Wir verarbeiten ausschließlich die für den Betrieb erforderlichen Daten, speichern auf Servern in Deutschland, verkaufen keine Daten und schalten keine Werbung.
            </p>

            <h2>Welche Daten wir in der iOS-App verarbeiten</h2>

            <h3>Elternkonto und Zugangsdaten</h3>
            <p>
              Name, E-Mail-Adresse, gehashtes Passwort sowie Authentifizierungs-Token. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).
            </p>

            <h3>Kinderprofildaten</h3>
            <p>
              Vorname und Geburtsdatum des Kindes zur altersgerechten Konfiguration des Schutzes. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO i.V.m. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am Kinderschutz).
            </p>

            <h3>Geräte- und Laufzeitdaten</h3>
            <p>
              UUID des Geräts, iOS-Version, App-Version, Push-Token, FamilyControls-Status (technischer Status). Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.
            </p>

            <h3>Standortdaten</h3>
            <p>
              GPS-Koordinaten werden ausschließlich auf Anfrage der Eltern übermittelt — keine kontinuierliche Verfolgung. Automatische Löschung nach 30 Tagen. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (Sicherheit des Kindes), bei aktiver Standortfreigabe zusätzlich Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
            </p>

            <h3>Bildschirmzeit-, Schutz- und Konfigurationsdaten</h3>
            <p>
              Tageslimits, Auszeiten, App-Freigaben, Filtereinstellungen sowie die aus iOS Family Controls zurückgemeldeten Nutzungszeiten pro App-Kategorie. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.
            </p>

            <h3>Abo- und Vertragsdaten</h3>
            <p>
              Abostatus, Laufzeiten, Rechnungs- und Zahlungsdaten. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO sowie Art. 6 Abs. 1 lit. c DSGVO (gesetzliche Aufbewahrungspflichten, insbesondere HGB und AO).
            </p>

            <h3>Technische Protokoll- und Sicherheitsdaten</h3>
            <p>
              Server-Logfiles zur Abwehr von Missbrauch und zur Aufrechterhaltung der IT-Sicherheit. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
            </p>

            <h3>Anonyme Nutzungsstatistiken</h3>
            <p>
              Anonymisierte Ereignismessungen ohne Personenbezug zur Verbesserung der App. Eine Re-Identifizierung ist nicht möglich.
            </p>

            <h2>Push-Benachrichtigungen</h2>
            <p>
              Für Push-Benachrichtigungen nutzen wir den Apple Push Notification Service (APNs). Hierfür wird ein gerätespezifischer Push-Token an Apple übertragen. Inhalte (z. B. „Auszeit beendet") werden über unsere Server an Apple zur Zustellung übergeben. Sie können Push-Benachrichtigungen jederzeit in den iOS-Einstellungen deaktivieren.
            </p>

            <h2>Empfänger und Drittanbieter</h2>
            <p>
              Kidgonet gibt keine Kinderdaten an Werbenetzwerke oder Analyse-Dienste weiter. Folgende Auftragsverarbeiter erhalten im Rahmen der Vertragserfüllung Zugriff auf bestimmte Daten:
            </p>
            <ul>
              <li>
                <strong>Apple Push Notification Service (APNs) &amp; Apple App Store / StoreKit:</strong> Push-Zustellung sowie Abo- und Vertriebsabwicklung
              </li>
              <li>
                <strong>Stripe Inc.:</strong> Zahlungsabwicklung bei Buchung über die Website
              </li>
              <li>
                <strong>HERE Technologies:</strong> Kartendienste für die Standortanzeige
              </li>
              <li>
                <strong>Mailgun / Sinch:</strong> Versand von Transaktions-E-Mails (Willkommens-Mails, Passwort-Reset, Benachrichtigungen)
              </li>
            </ul>
            <p>
              Alle Server, auf denen Kidgonet-eigene Daten verarbeitet werden, stehen in Deutschland.
            </p>

            <h2>Speicherdauer und Löschung</h2>
            <p>
              Daten werden gelöscht, sobald der Speicherzweck entfällt. Standortdaten werden automatisch nach 30 Tagen gelöscht. Bei Kündigung ohne Verlängerung werden alle Daten 7 Tage nach Ablauf des Abonnements gelöscht. Der Nutzer kann sein Konto und alle gespeicherten Daten jederzeit selbst und unwiderruflich löschen. Abrechnungsrelevante Unterlagen werden gemäß HGB und AO bis zu 10 Jahre aufbewahrt.
            </p>

            <h2>Ihre Rechte</h2>
            <p>Sie haben das Recht auf:</p>
            <ul>
              <li>Auskunft über gespeicherte Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)</li>
            </ul>
            <p>
              Sie haben außerdem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO). Für Kidgonet zuständig ist das Bayerische Landesamt für Datenschutzaufsicht (BayLDA), Promenade 18, 91522 Ansbach.
            </p>
            <p>
              Anfragen richten Sie bitte an{" "}
              <a href="mailto:info@kidgonet.de">info@kidgonet.de</a>.
            </p>

            <h2>Datensicherheit</h2>
            <p>
              Die Datenübertragung zwischen der App und unseren Servern erfolgt verschlüsselt nach dem aktuellen Stand der Technik (TLS/HTTPS). Passwörter werden ausschließlich als kryptografische Hashes gespeichert. Interne Zugriffe auf personenbezogene Daten sind auf das notwendige Personal beschränkt.
            </p>

            <h2>Kinder und Datenschutz</h2>
            <p>
              Die Kidgonet iOS App verarbeitet Daten von minderjährigen Gerätenutzern ausschließlich im Auftrag und auf Weisung der sorgeberechtigten Eltern. Wir verkaufen keine Kinderdaten, schalten keine Werbung und geben keine Daten zu Marketing- oder Werbezwecken weiter.
            </p>

            <h2>Automatisierte Entscheidungen im Einzelfall</h2>
            <p>
              Es findet keine automatisierte Entscheidungsfindung im Sinne von Art. 22 DSGVO statt. Schutzregeln werden ausschließlich durch die Eltern definiert.
            </p>

            <h2>Erforderliche iOS-Berechtigungen</h2>
            <ul>
              <li>
                <strong>VPN:</strong> Für den DNS-basierten Webfilter
              </li>
              <li>
                <strong>Standort:</strong> Für die optionale Standortverfolgung (nur auf Anfrage der Eltern)
              </li>
              <li>
                <strong>Bildschirmzeit / Family Controls:</strong> Für die Bildschirmzeitverwaltung und App-Sperrung
              </li>
            </ul>

            <h2>Änderungen dieser Datenschutzerklärung</h2>
            <p>
              Kidgonet behält sich vor, diese Datenschutzerklärung anzupassen, um sie aktuellen rechtlichen Anforderungen oder Änderungen der Dienste anzupassen. Für die weitere Nutzung gilt dann die jeweils aktualisierte Datenschutzerklärung.
            </p>

            <h2>Kontakt</h2>
            <p>
              Kidgonet GmbH<br />
              Eugen-Sänger-Ring 13<br />
              85649 Brunnthal<br />
              E-Mail: <a href="mailto:info@kidgonet.de">info@kidgonet.de</a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
