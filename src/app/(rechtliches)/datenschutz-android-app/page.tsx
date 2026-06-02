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

            <h2>Rechtsgrundlagen der Verarbeitung</h2>
            <p>Die Verarbeitung erfolgt auf folgenden Rechtsgrundlagen:</p>
            <ul>
              <li>
                <strong>Art. 6 Abs. 1 lit. b DSGVO</strong> (Vertragserfüllung): Elternkonto, Kinderprofile, Geräte- und Konfigurationsdaten, Abo-Daten.
              </li>
              <li>
                <strong>Art. 6 Abs. 1 lit. c DSGVO</strong> (gesetzliche Pflicht): Abrechnungs- und steuerrelevante Unterlagen.
              </li>
              <li>
                <strong>Art. 6 Abs. 1 lit. f DSGVO</strong> (berechtigtes Interesse): IT-Sicherheit, Schutz vor Missbrauch, Standortabruf zur Sicherheit des Kindes.
              </li>
              <li>
                <strong>Art. 6 Abs. 1 lit. a DSGVO</strong> (Einwilligung): Standortverfolgung, optionale Dienste.
              </li>
            </ul>

            <h2>Speicherdauer</h2>
            <p>
              Personenbezogene Daten werden gelöscht, sobald der Speicherzweck entfällt. Bei einem Abonnement, das nicht verlängert wird, werden alle gespeicherten Daten 7 Tage nach Ablauf des Abonnementzeitraums unwiderruflich gelöscht. Der Nutzer kann sein Konto jederzeit selbst löschen.
            </p>

            <h2>Empfänger und Auftragsverarbeiter</h2>
            <p>
              Personenbezogene Daten werden nicht an Werbenetzwerke oder Analyse-Dienste weitergegeben. Zur Vertragserfüllung erhalten folgende Auftragsverarbeiter Zugriff auf bestimmte Daten:
            </p>
            <ul>
              <li>
                <strong>Stripe:</strong> Zahlungsabwicklung
              </li>
              <li>
                <strong>Firebase Cloud Messaging (Google):</strong> Push-Benachrichtigungen
              </li>
              <li>
                <strong>Mailgun:</strong> Transaktions-E-Mails (Willkommens-Mails, Passwort-Reset)
              </li>
            </ul>
            <p>
              Alle Server, auf denen Kidgonet-eigene Daten verarbeitet werden, stehen in Deutschland.
            </p>

            <h2>Datensicherheit</h2>
            <p>
              Die Datenübertragung zwischen der App und unseren Servern erfolgt verschlüsselt nach dem aktuellen Stand der Technik (TLS/HTTPS). Zugriffe auf personenbezogene Daten sind intern auf das notwendige Personal beschränkt.
            </p>

            <h2>Kinder und Datenschutz</h2>
            <p>
              Die Kidgonet Android App verarbeitet Daten von minderjährigen Gerätenutzern ausschließlich im Auftrag und auf Weisung der sorgeberechtigten Eltern. Wir verkaufen keine Kinderdaten, schalten keine Werbung und geben keine Daten zu Marketing- oder Werbezwecken weiter.
            </p>

            <h2>Automatisierte Entscheidungen im Einzelfall</h2>
            <p>
              Es findet keine automatisierte Entscheidungsfindung im Sinne von Art. 22 DSGVO statt. Schutzregeln werden ausschließlich durch die Eltern definiert.
            </p>

            <h2>Ihre Rechte</h2>
            <p>Sie haben jederzeit das Recht auf:</p>
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
              Sofern Daten an Dritte übermittelt wurden, teilen wir diesen eine Berichtigung, Löschung oder Einschränkung mit, sofern dies möglich und mit verhältnismäßigem Aufwand verbunden ist.
            </p>
            <p>
              Anfragen richten Sie bitte an{" "}
              <a href="mailto:info@kidgonet.de">info@kidgonet.de</a>.
            </p>

            <h2>Beschwerderecht</h2>
            <p>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO), insbesondere in dem Mitgliedstaat Ihres Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes. Für Kidgonet zuständig ist das Bayerische Landesamt für Datenschutzaufsicht (BayLDA), Promenade 18, 91522 Ansbach.
            </p>

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
