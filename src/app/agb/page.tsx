import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "AGB – Allgemeine Geschäftsbedingungen",
  description:
    "Allgemeine Geschäftsbedingungen der Kidgonet GmbH für die Nutzung der Kinderschutz-App.",
  alternates: { canonical: "/agb" },
  robots: { index: false },
};

export default function AgbPage() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-2 text-3xl font-extrabold text-text-dark md:text-4xl">
            Allgemeine Geschäftsbedingungen
          </h1>
          <p className="mb-10 text-sm text-text-dark/60">
            für die Nutzung der Kidgonet Kinder- und Jugendschutz App | Stand April 2026
          </p>

          <div className="prose-elternratgeber">
            <h2>1. Allgemeines</h2>
            <p>
              Diese Allgemeinen Geschäftsbedingungen regeln das Vertragsverhältnis zwischen der <strong>Kidgonet GmbH</strong>, Eugen-Sänger-Ring 13, 85649 Brunnthal (nachfolgend „Kidgonet“) und dem Kunden bezüglich der Kidgonet Kinder- und Jugendsicherung (nachfolgend „App“).
            </p>
            <p>
              Diese AGB stellen eine Vereinbarung ausschließlich zwischen dem Kunden und Kidgonet dar — nicht zwischen dem Kunden und Apple Inc. Es gilt deutsches Recht. Gerichtsstand für Kaufleute und juristische Personen ist München. Kontakt: <a href="mailto:support@kidgonet.de">support@kidgonet.de</a>
            </p>

            <h2>2. Vertragslaufzeit und Kündigung</h2>
            <p><strong>Abonnement-Optionen:</strong></p>
            <ul>
              <li>Monatsabo: 1 Monat Laufzeit mit automatischer Verlängerung</li>
              <li>Jahresabo: 12 Monate Laufzeit mit automatischer Verlängerung</li>
            </ul>
            <p><strong>Kündigungsregeln:</strong></p>
            <ul>
              <li>
                <strong>Apple App Store:</strong> Kündigung nur über die iOS-Einstellungen möglich, mindestens 24 Stunden vor Ablauf der aktuellen Laufzeit.
              </li>
              <li>
                <strong>Google Play Store / Website:</strong> Kündigung mit einer Frist von 7 Tagen zum Ende der aktuellen Laufzeit.
              </li>
            </ul>
            <p>
              Nach Kündigung wird der Schutz deaktiviert. Bereits gespeicherte Einstellungen bleiben erhalten.
            </p>

            <h2>3. Kostenlose Testphase</h2>
            <p>
              Neukunden erhalten derzeit 7 Tage kostenfrei mit vollem Funktionsumfang. Die Testphase ist einmalig pro Kunde nutzbar. Kidgonet behält sich vor, die Dauer der Testphase jederzeit zu ändern oder die Testphase einzustellen.
            </p>

            <h2>4. Vertragsgegenstand</h2>
            <p>
              Die App ermöglicht Eltern und Sorgeberechtigten, den Zugriff auf unangemessene Inhalte zu begrenzen, die Internetnutzung zeitlich zu beschränken sowie altersgerechte Filter einzusetzen.
            </p>
            <p>
              <strong>Installation und Aktivierung:</strong> Kunden installieren die App und aktivieren den Schutz über den Elternbereich. Mit der Aktivierung ist der altersgerechte Kinder- und Jugendschutz sofort aktiv.
            </p>
            <p>
              <strong>Vertragsschluss:</strong> Im Apple App Store und Google Play Store bei Kaufbestätigung; über die Website bei Annahme durch Kidgonet.
            </p>
            <p><strong>Erforderliche Geräteberechtigungen:</strong></p>
            <ul>
              <li>
                <em>Android:</em> Standort, externer Speicher, VPN, Geräte-Administrator, Eingabehilfe
              </li>
              <li>
                <em>iOS:</em> VPN, Standort, Bildschirmzeit / Family Controls
              </li>
            </ul>

            <h2>5. Kein lückenloser Schutz</h2>
            <p>
              Kidgonet weist ausdrücklich darauf hin, dass die Kidgonet-Sicherung einen Zugriff der Gerätenutzer auf für Kinder ungeeignete Inhalte über das Internet nicht lückenlos verhindern kann. Insbesondere:
            </p>
            <ul>
              <li>Der Filter erkennt nicht alle problematischen Inhalte.</li>
              <li>Der Content-Filter arbeitet mit Wörtern, nicht mit Bildern.</li>
              <li>E-Mail-Inhalte und Inhalte sozialer Netzwerke werden nicht blockiert.</li>
            </ul>

            <h2>6. Registrierung</h2>
            <p>Für die Nutzung sind folgende Angaben erforderlich:</p>
            <ul>
              <li>Vor- und Nachname</li>
              <li>E-Mail-Adresse</li>
              <li>Wohnort</li>
              <li>Benutzername und Passwort</li>
            </ul>
            <p>
              Die Aktivierung erfolgt per Double-Opt-In über einen E-Mail-Link. Eine Registrierung, die ein Nutzer nicht innerhalb von einer Woche durch das Anklicken des Aktivierungslinks bestätigt, kann von Kidgonet gelöscht werden.
            </p>

            <h2>7. Preise, Umsatzsteuer und Zahlung</h2>
            <p>
              Alle Preise enthalten die gesetzliche Mehrwertsteuer. Bei Käufen über den Apple App Store oder Google Play Store erfolgt die Zahlungsabwicklung ausschließlich durch den jeweiligen Store-Betreiber nach dessen Bedingungen.
            </p>
            <p>
              Bei Käufen über die Website stehen SEPA-Lastschrift, Kreditkarte und PayPal zur Verfügung. Die Kreditkarte oder das Bankkonto wird innerhalb von 24 Stunden nach Bestellung belastet. Die Zahlungsfrist beträgt eine Woche nach Vertragsschluss. Bei Zahlungsverzug kann Kidgonet Schadensersatz verlangen und den Zugang sperren.
            </p>
            <p>
              Rechnungen für Website-Käufe werden elektronisch von Kidgonet ausgestellt; bei Store-Käufen durch den jeweiligen Store-Betreiber.
            </p>

            <h2>8. Bereitstellung der Kidgonet-Sicherung</h2>
            <p>
              Die Bereitstellung erfolgt nach Zahlungseingang oder unmittelbar nach Kaufbestätigung im App Store. Eine Internetverbindung ist erforderlich. Das Abonnement verlängert sich automatisch, sofern es nicht fristgerecht gekündigt wird.
            </p>
            <p>
              Kidgonet kann den Zugang zu den eigenen Leistungen beschränken, sofern die Sicherheit des Netzbetriebes, die Aufrechterhaltung der Netzintegrität oder die Interoperabilität der Dienste dies erfordert. Änderungen werden mit einer Vorankündigungsfrist von zwei Wochen mitgeteilt.
            </p>

            <h2>9. Wartung und Support</h2>
            <p>
              Kidgonet ist allein verantwortlich für die Wartung und den Support der Kidgonet-Sicherung. Kontakt: <a href="mailto:support@kidgonet.de">support@kidgonet.de</a> oder über das Hilfecenter unter kidgonet.de/hilfe. Apple ist nicht verpflichtet, Wartungs- oder Supportleistungen in Bezug auf die Kidgonet-Sicherung zu erbringen.
            </p>

            <h2>10. Haftung für Sach- und Rechtsmängel (Gewährleistung)</h2>
            <p>
              Die Gewährleistungsfrist beträgt 2 Jahre. Bei Käufen über den Apple App Store erstattet Apple im Rahmen der gesetzlichen Gewährleistung maximal den Kaufpreis. Eine darüber hinausgehende Haftung trägt Kidgonet.
            </p>

            <h2>11. Haftungsausschluss</h2>
            <p><strong>Kidgonet haftet unbeschränkt bei:</strong></p>
            <ul>
              <li>Vorsatz oder grober Fahrlässigkeit</li>
              <li>Verletzung des Lebens, des Körpers oder der Gesundheit</li>
              <li>Fehlen garantierter Eigenschaften</li>
            </ul>
            <p>
              Bei leichter Fahrlässigkeit haftet Kidgonet nur bei Verletzung wesentlicher Vertragspflichten und nur auf den typischen und vorhersehbaren Schaden beschränkt. Ansprüche aus dem Produkthaftungsgesetz sowie nach dem Verbraucherschutzrecht bleiben unberührt.
            </p>

            <h2>12. Urheberrechte und Nutzungsbestimmungen</h2>
            <p>
              Kidgonet behält alle Rechte an digitalen Inhalten, Logos und Abbildungen. Die eingeräumten Nutzungsrechte sind einfach, auf die Vertragslaufzeit beschränkt, persönlich und nicht übertragbar.
            </p>
            <p><strong>Verboten sind insbesondere:</strong></p>
            <ul>
              <li>Öffentliche Wiedergabe oder Veröffentlichung im Internet</li>
              <li>Verleihen, Weiterverkauf oder kommerzielle Nutzung</li>
              <li>Weitergabe von Zugangsdaten an Dritte</li>
            </ul>
            <p>
              Kidgonet hat das Recht, den Zugang des Kunden bei Missbrauch zeitweilig oder endgültig zu sperren.
            </p>

            <h2>13. Datenschutz und Kinderdaten</h2>
            <p>
              Die Datenverarbeitung erfolgt gemäß DSGVO und der Datenschutzerklärung (kidgonet.de/datenschutz-ios-app). Kinderdaten werden ausschließlich im Auftrag der Sorgeberechtigten verarbeitet.
            </p>
            <p><strong>Erhobene Daten umfassen:</strong></p>
            <ul>
              <li>Vorname und Geburtsdatum des Kindes</li>
              <li>Standortdaten (optional, nach Zustimmung)</li>
              <li>Bildschirmzeitdaten</li>
              <li>Geräteinformationen</li>
            </ul>
            <p>
              Kidgonet verkauft keine personenbezogenen Daten und schaltet keine Werbung. Alle Daten werden ausschließlich auf Servern in Deutschland verarbeitet und gespeichert. Auftragsverarbeiter: Stripe (Zahlungen), Firebase (Push-Benachrichtigungen), Mailgun (E-Mails). Der Kunde kann sein Konto und alle gespeicherten Daten jederzeit unwiderruflich löschen.
            </p>

            <h2>14. Einhaltung gesetzlicher Vorschriften</h2>
            <p>
              Der Kunde versichert, nicht in einem Land ansässig zu sein, das einem US-Regierungsembargo unterliegt oder von der US-Regierung als terrorismusunterstützendes Land eingestuft ist, und nicht auf einer US-Sanktionsliste zu stehen. Der Kunde verpflichtet sich zur Einhaltung aller anwendbaren Gesetze sowie der Nutzungsbedingungen beteiligter Drittanbieter.
            </p>

            <h2>15. Apple als Drittbegünstigter</h2>
            <p>
              Apple Inc. und die Tochtergesellschaften von Apple sind Drittbegünstigte dieser AGB und haben das Recht, diese AGB gegenüber dem Kunden als Drittbegünstigte durchzusetzen.
            </p>

            <h2>16. Salvatorische Klausel</h2>
            <p>
              Sollte eine Bestimmung dieser AGB ganz oder teilweise unwirksam oder undurchführbar sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Die unwirksame Bestimmung wird durch eine wirtschaftlich gleichwertige wirksame Regelung ersetzt.
            </p>

            <hr />
            <p>
              <strong>Kontakt:</strong>{" "}
              <a href="mailto:support@kidgonet.de">support@kidgonet.de</a>
              <br />
              Kidgonet GmbH, Eugen-Sänger-Ring 13, 85649 Brunnthal
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
