import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Datenschutzerklärung Android App",
  description: "Datenschutzerklärung für die Kidgonet Android App gemäß DSGVO.",
  alternates: { canonical: "/datenschutz-android-app" },
  robots: { index: false },
};

export default function DatenschutzAndroidAppPage() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-2 text-3xl font-extrabold text-text-dark md:text-4xl">
            Datenschutzerklärung Android App
          </h1>
          <p className="mb-10 text-sm text-text-dark/60">
            Kidgonet GmbH — gültig für die Kidgonet Android App
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

            <h2>Allgemeines</h2>
            <p>
              Personenbezogene Daten werden bei Kidgonet sehr sorgfältig behandelt und nur im Rahmen der gesetzlichen Bestimmungen erhoben und verarbeitet. Diese Datenschutzerklärung gilt für die Kidgonet Android App sowie die zugehörigen Kidgonet-Webseiten, nicht jedoch für externe Angebote Dritter.
            </p>

            <h2>Erhobene Daten</h2>
            <h3>Kostenlose Testphase</h3>
            <ul>
              <li>Vorname, Nachname</li>
              <li>E-Mail-Adresse</li>
              <li>Kindernamen und Geburtsdaten</li>
              <li>Letzter bekannter Standort</li>
            </ul>

            <h3>Bezahltes Abonnement</h3>
            <p>
              Zusätzlich zu den Daten der Testphase wird für die Rechnungsstellung und ggf. das Inkasso auch die postalische Adresse erhoben.
            </p>

            <h2>Technische Daten</h2>
            <p>
              Im Rahmen der App-Nutzung werden technische Daten erfasst, darunter Browser- und Geräteinformationen, Betriebssystemtyp, Standortdaten sowie öffentliche IP-Adressen.
            </p>

            <h2>Erforderliche Android-Berechtigungen</h2>
            <ul>
              <li>
                <strong>Standort:</strong> Für die optionale Standortverfolgung durch die Eltern
              </li>
              <li>
                <strong>VPN:</strong> Für den DNS-basierten Webfilter
              </li>
              <li>
                <strong>Geräte-Administrator:</strong> Zum Schutz vor Deinstallation durch das Kind
              </li>
              <li>
                <strong>Eingabehilfe:</strong> Zur Messung und Begrenzung der App-Nutzungszeit
              </li>
              <li>
                <strong>Externer Speicher:</strong> Für App-Konfigurationsdaten
              </li>
            </ul>

            <h2>Speicherdauer</h2>
            <p>
              Personenbezogene Daten werden gelöscht, sobald der Speicherzweck entfällt. Bei einem Abonnement, das nicht verlängert wird, werden alle gespeicherten Daten 7 Tage nach Ablauf des Abonnementzeitraums unwiderruflich gelöscht. Der Nutzer kann sein Konto jederzeit selbst löschen.
            </p>

            <h2>Zahlungsabwicklung</h2>
            <p>
              Die Zahlungsabwicklung erfolgt über einen deutschen Zahlungsdienstleister unter Datenschutzverpflichtung. Alle Daten werden ausschließlich auf Servern in Deutschland verarbeitet.
            </p>

            <h2>Ihre Rechte</h2>
            <p>Sie haben jederzeit das Recht auf:</p>
            <ul>
              <li>Auskunft über gespeicherte Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            </ul>
            <p>
              Anfragen richten Sie bitte an{" "}
              <a href="mailto:info@kidgonet.de">info@kidgonet.de</a>.
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
