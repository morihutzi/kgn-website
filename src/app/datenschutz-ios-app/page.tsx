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

            <h2>Zweck der App</h2>
            <p>
              Die Kidgonet iOS App dient Eltern und Sorgeberechtigten zur Verwaltung von Kinderschutzregeln, Standortverfolgung und Bildschirmzeitkontrolle auf iOS-Geräten ihrer Kinder.
            </p>

            <h2>Verarbeitete Daten</h2>
            <p>Die App erfasst und verarbeitet folgende Datenkategorien:</p>
            <ul>
              <li>
                <strong>Elternkonten:</strong> Name, E-Mail-Adresse, Passwort (verschlüsselt)
              </li>
              <li>
                <strong>Kinderprofile:</strong> Vorname, Geburtsdatum
              </li>
              <li>
                <strong>Geräteinformationen:</strong> UUID, Betriebssystemversion, Push-Token
              </li>
              <li>
                <strong>Standortdaten:</strong> GPS-Koordinaten (werden automatisch nach 30 Tagen gelöscht)
              </li>
              <li>
                <strong>Schutzkonfigurationen:</strong> Zeitlimits, Filtereinstellungen
              </li>
              <li>
                <strong>Anonyme Statistiken:</strong> Anonymisierte Ereignismessungen ohne Personenbezug
              </li>
            </ul>

            <h2>Rechtsgrundlagen</h2>
            <p>
              Die Datenverarbeitung erfolgt auf Basis von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen) bei der Kindersicherheit und IT-Sicherheit.
            </p>

            <h2>Datenweitergabe an Dritte</h2>
            <p>
              Kidgonet gibt keine Kinderdaten an Werbenetzwerke oder Analyse-Dienste weiter. Folgende externe Partner erhalten im Rahmen der Vertragserfüllung Zugriff auf bestimmte Daten:
            </p>
            <ul>
              <li>
                <strong>Apple (APNs, App Store):</strong> Push-Benachrichtigungen und App-Vertrieb
              </li>
              <li>
                <strong>Stripe:</strong> Zahlungsabwicklung
              </li>
              <li>
                <strong>HERE Technologies:</strong> Kartendienste für die Standortanzeige
              </li>
              <li>
                <strong>Mailgun:</strong> Transaktions-E-Mails (Willkommens-E-Mails, Passwort-Reset)
              </li>
            </ul>
            <p>
              Alle Daten werden ausschließlich auf Servern in Deutschland verarbeitet und gespeichert.
            </p>

            <h2>Speicherdauer</h2>
            <p>
              Daten werden gelöscht, sobald der Speicherzweck entfällt. Standortdaten werden automatisch nach 30 Tagen gelöscht. Bei Kündigung ohne Verlängerung werden alle Daten 7 Tage nach Ablauf des Abonnements gelöscht. Der Nutzer kann sein Konto und alle gespeicherten Daten jederzeit selbst und unwiderruflich löschen.
            </p>

            <h2>Ihre Rechte</h2>
            <p>Sie haben das Recht auf:</p>
            <ul>
              <li>Auskunft über gespeicherte Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            </ul>
            <p>
              Anfragen richten Sie bitte an{" "}
              <a href="mailto:info@kidgonet.de">info@kidgonet.de</a>.
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
