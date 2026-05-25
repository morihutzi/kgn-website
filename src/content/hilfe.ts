export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  title: string;
  items: FaqItem[];
};

export const hilfeCategories: FaqCategory[] = [
  {
    title: "Erste Schritte",
    items: [
      {
        question: "Welches Gerät brauche ich als Elternteil?",
        answer:
          "Du brauchst kein bestimmtes Gerät. Du kannst Kidgonet komplett im Browser auf portal.kidgonet.de bedienen, ohne App.",
      },
      {
        question: "Kann ich Kidgonet im Browser bedienen?",
        answer:
          "Ja. Das Eltern-Portal läuft sowohl in der App als auch im Browser — alle Einstellungen sind jederzeit synchronisiert.",
      },
      {
        question: "Mein Kind hat keine Apple-ID. Was tun?",
        answer:
          "Erstelle einen Kinderaccount über die Familienfreigabe in den Apple-Einstellungen. Auf Android-Geräten benötigt Dein Kind nur ein Google-Konto.",
      },
      {
        question: "Wie verbinde ich ein weiteres Gerät meines Kindes?",
        answer:
          "Erstelle im Eltern-Portal ein neues Kinderprofil und verbinde es anschließend per QR-Code oder Pairing-Code mit dem Gerät Deines Kindes.",
      },
      {
        question: "Fallen bei der Registrierung Kosten an?",
        answer:
          "Nein. Die Anmeldung zur Testphase ist völlig unverbindlich und kostenlos — kein Zahlungsmittel erforderlich.",
      },
      {
        question: "Was passiert nach der Registrierung?",
        answer:
          "Du erhältst eine Willkommens-E-Mail mit Deinen Zugangsdaten. Falls sie nicht erscheint, prüfe bitte Deinen Spam-Ordner.",
      },
    ],
  },
  {
    title: "Bildschirmzeit & Limits",
    items: [
      {
        question: "Wie funktioniert das Tageslimit?",
        answer:
          "Du vergibst im Eltern-Portal ein tägliches Zeitbudget für die gesamte Bildschirmzeit. Innerhalb des Tageslimits sind alle Apps frei nutzbar.",
      },
      {
        question: "Was ist eine Auszeit?",
        answer:
          "Auszeiten begrenzen die Nutzung zu bestimmten Zeiten, z. B. für Hausaufgaben, Mahlzeiten oder nachts. Während einer Auszeit sind nur von Dir explizit freigegebene Apps nutzbar.",
      },
      {
        question: "Kann ich eigene Sperrzeiten einrichten?",
        answer:
          "Kidgonet bietet als Standard die Zeiten Schlafen, Schlafen Wochenende, Schule und Hausaufgaben. Diese sind anpassbar. Zusätzlich kannst Du bis zu vier eigene Sperrzeiten anlegen.",
      },
      {
        question: "Kann ich Auszeiten auch in der App einstellen?",
        answer:
          "Nein, alle Einstellungen erfolgen ausschließlich über das Eltern-Portal. Auf einem gesperrten Gerät kannst Du Dich über den Browser bei portal.kidgonet.de anmelden.",
      },
    ],
  },
  {
    title: "Standort & Sicherheit",
    items: [
      {
        question: "Wie sehe ich den Standort meines Kindes?",
        answer:
          "Im Eltern-Portal unter „Standort“ oder in der Eltern-App siehst Du den aktuellen Aufenthaltsort. Der Standort wird nur auf Anfrage abgerufen.",
      },
      {
        question: "Kann mein Kind Kidgonet selbst deinstallieren?",
        answer:
          "Nicht, solange das Gerät korrekt eingerichtet ist. Auf iOS verhindert die Kind-Apple-ID das Entfernen der App. Auf Android schützt der Geräteadministrator-Status vor der Deinstallation.",
      },
      {
        question: "Was passiert nach einem Geräteneustart?",
        answer:
          "Der Schutz aktiviert sich automatisch. Auf Android-Geräten empfiehlt sich die einmalige Einstellung „Immer aktiv“ im VPN-Profil, damit kein manueller Eingriff nötig ist.",
      },
      {
        question: "Mein Webfilter blockiert eine erlaubte Seite. Was tun?",
        answer:
          "Schreibe uns eine E-Mail an support@kidgonet.de — wir prüfen die Seite und schalten sie bei Bedarf frei.",
      },
      {
        question: "Das Pairing klappt nicht. Was kann ich tun?",
        answer:
          "Prüfe die Internetverbindung und die Gültigkeit des QR-Codes. Generiere im Portal einen neuen Code und versuche es erneut. Bei anhaltenden Problemen hilft unser Support unter support@kidgonet.de.",
      },
    ],
  },
  {
    title: "Datenschutz",
    items: [
      {
        question: "Speichert Kidgonet den Browserverlauf meines Kindes?",
        answer:
          "Nein. Kidgonet filtert über drei eigene DNS-Server. Auf diesen Servern werden weder Browserverlauf noch besuchte Adressen gespeichert oder ausgewertet.",
      },
      {
        question: "Werden Daten an Dritte weitergegeben?",
        answer:
          "Nein. Kidgonet gibt keine Kinderdaten an Werbenetzwerke, Analyse-Dienste oder sonstige Dritte weiter.",
      },
      {
        question: "Wo werden die Daten gespeichert?",
        answer:
          "Alle Daten liegen auf Servern in Deutschland, zertifiziert nach ISO/IEC 27001. Sie unterliegen strengen deutschen Datenschutzgesetzen und dem Telekommunikationsgesetz.",
      },
      {
        question: "Warum sehe ich nicht, welche Webseiten mein Kind besucht?",
        answer:
          "Auch Kinder haben ein Recht auf Privatsphäre. Kidgonet setzt sich bewusst ab, indem die Privatsphäre der Kinder gewahrt bleibt — wir sind kein Spionage-Tool.",
      },
      {
        question: "Wann werden meine Daten gelöscht?",
        answer:
          "Testest Du Kidgonet ohne ein Abo abzuschließen, werden Deine Daten nach Ablauf des Testzeitraums (7 Tage) unwiderruflich gelöscht.",
      },
    ],
  },
  {
    title: "Technische Fragen",
    items: [
      {
        question: "Was ist das VPN und warum wird es benötigt?",
        answer:
          "Bei einem VPN handelt es sich um ein geschlossenes Netzwerk. Der gesamte Internetverkehr läuft über einen IP-Tunnel. Die App benötigt diese Verbindung, damit Dein Kind vor nicht altersgerechten Seiten beim Surfen geschützt ist.",
      },
      {
        question: "Sieht die App, was mein Kind im Internet macht?",
        answer:
          "Die App sieht nur die angeforderte Webadresse. Diese wird durch unsere Jugendschutzliste geprüft und freigegeben bzw. gesperrt — Inhalte oder Seiteninhalte werden nicht eingesehen.",
      },
      {
        question: "Wird das Smartphone durch Kidgonet langsamer?",
        answer:
          "Nein. Der Abgleich der Webadressen dauert nicht länger als eine herkömmliche DNS-Anfrage, z. B. bei Google.",
      },
      {
        question: "Warum braucht die App so viele Berechtigungen?",
        answer:
          "Die verschiedenen Berechtigungen sind notwendig, damit Kidgonet alle Funktionen korrekt ausführen kann. Wichtig: Kidgonet speichert dabei keinerlei persönliche Daten Deines Kindes.",
      },
    ],
  },
  {
    title: "Kosten & Abonnement",
    items: [
      {
        question: "Was kostet Kidgonet?",
        answer:
          "Alle aktuellen Tarife findest Du auf unserer Preisseite. Es gibt keine versteckten Kosten.",
      },
      {
        question: "Gibt es eine kostenlose Testphase?",
        answer:
          "Ja. Du kannst alle Funktionen 7 Tage lang kostenlos testen — ohne Kreditkarte oder Zahlungsmittel.",
      },
      {
        question: "Kann ich jederzeit kündigen?",
        answer:
          "Ja. Du kündigst direkt im Eltern-Portal unter „Abo verwalten“. Es gibt keine Mindestlaufzeit.",
      },
      {
        question: "Wann muss ich spätestens kündigen?",
        answer:
          "Je nach Abo-Variante monatlich, halbjährlich oder jährlich bis 7 Tage vor Ablauf der aktuellen Laufzeit.",
      },
    ],
  },
  {
    title: "Elternportal",
    items: [
      {
        question: "Was ist das Elternportal?",
        answer:
          "Eine zentrale Plattform unter portal.kidgonet.de, über die Du alle Einstellungen und Funktionen von Kidgonet verwaltest — Zeitlimits, Auszeiten, Webfilter, Standort und mehr.",
      },
      {
        question: "Wo finde ich den Deaktivierungscode?",
        answer:
          "In der Übersicht des Eltern-Portals oben links. Klicke auf das Auge-Symbol, um ihn sichtbar zu machen.",
      },
      {
        question: "Wofür brauche ich den Deaktivierungscode?",
        answer:
          "Die Kidgonet-App kann nur mit diesem Code auf dem Gerät Deines Kindes vorübergehend deaktiviert werden.",
      },
      {
        question: "Kann ich zwei Standorte gleichzeitig sehen?",
        answer:
          "Wir gehen davon aus, dass Dein Kind nicht gleichzeitig mit zwei Geräten an zwei unterschiedlichen Standorten sein kann. Der zuletzt gemeldete Standort wird angezeigt.",
      },
    ],
  },
];
