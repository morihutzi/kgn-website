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
    title: "Erste Schritte / Start",
    items: [
      {
        question: "Welches Gerät brauche ich als Elternteil?",
        answer:
          "Du brauchst kein bestimmtes Gerät. Du kannst Kidgonet komplett im Browser auf portal.kidgonet.de bedienen, ohne App. Falls du lieber eine App willst, läuft sie auf iPhone und Android. Auch wenn dein Kind ein iPhone hat, brauchst du selbst keines.",
      },
      {
        question: "Kann ich Kidgonet auch im Browser bedienen?",
        answer:
          "Ja. Das Eltern-Portal läuft in der App und parallel im Browser auf portal.kidgonet.de. Beide Wege synchronisieren live, du kannst jederzeit zwischen Handy und Computer wechseln.",
      },
      {
        question: "Mein Kind hat noch keine eigene Apple-ID. Was tun?",
        answer:
          "Wenn dein Kind noch keine Apple-ID hat, legst du sie als Kinderaccount in deiner Familienfreigabe an. Auf deinem iPhone öffnest du dazu „Einstellungen → dein Name → Familie → Kind hinzufügen“ und folgst dem Assistenten. Eine eigene Kind-Apple-ID in deiner Familie ist auf iOS Voraussetzung, damit der Systemschutz von Kidgonet nicht umgangen werden kann. Auf Android reicht das normale Google-Konto.",
      },
      {
        question: "Wie verbinde ich später ein weiteres Kind-Gerät?",
        answer:
          "Im Eltern-Portal oder in der Eltern-App legst du ein neues Kind an oder wählst ein bestehendes aus. Anschließend bekommst du einen QR-Code oder Pairing-Code, mit dem das neue Kind-Gerät verbunden wird. Das Setup ist identisch zur ersten Einrichtung.",
      },
    ],
  },
  {
    title: "Funktionen / Sicherheit",
    items: [
      {
        question: "Wie funktioniert das Tageslimit?",
        answer:
          "Du vergibst im Eltern-Portal ein tägliches Zeitbudget für die gesamte Bildschirmzeit auf dem Kind-Gerät. Dein Kind sieht die verbleibende Zeit direkt im Kidgonet-Startbildschirm. Innerhalb des Tageslimits sind alle Apps frei nutzbar. Nur während Auszeiten oder Pausen greift die App-Freigabe: dann darf dein Kind nur die Apps öffnen, die du dafür explizit erlaubt hast.",
      },
      {
        question: "Was ist eine Auszeit und wann nutze ich sie?",
        answer:
          "Auszeiten begrenzen die Nutzung, zum Beispiel zur Hausaufgabenzeit, beim Essen oder nachts. Während einer Auszeit sieht das Kind nur die Apps, die du dafür freigegeben hast. Das können Notfall-Apps wie Telefon sein, aber auch Musik- oder Lern-Apps, die in der Pause weiter laufen dürfen.",
      },
      {
        question: "Wie sehe ich den Standort meines Kindes?",
        answer:
          "Im Eltern-Portal unter „Standort“ oder in der Eltern-App siehst du den aktuellen Aufenthaltsort. Der Standort wird nur auf Anfrage abgerufen, es gibt keine permanente Verfolgung.",
      },
      {
        question: "Speichert Kidgonet den Browserverlauf?",
        answer:
          "Nein. Kidgonet filtert über drei eigene DNS-Server, einer pro Altersgruppe. Je nachdem, welche Altersstufe du für dein Kind ausgewählt hast, läuft die DNS-Abfrage über den passenden Server, der ungeeignete Domains direkt blockiert. Auf diesen Servern werden weder Browserverlauf noch besuchte Adressen gespeichert oder ausgewertet. Es ist kein klassisches Tracking-VPN.",
      },
      {
        question: "Werden Daten meines Kindes an Dritte weitergegeben?",
        answer:
          "Nein. Kidgonet gibt keine Kinderdaten an Werbenetzwerke, Analyse-Dienste oder andere Dritte weiter. Wir verkaufen keine Daten, es gibt keine Werbung in der Kinder-App.",
      },
      {
        question: "Wo werden meine Daten gespeichert?",
        answer:
          "Alle Daten liegen auf Servern in Deutschland und werden DSGVO-konform verarbeitet. Du kannst deinen Account jederzeit im Eltern-Portal löschen, dabei werden auch alle gespeicherten Daten entfernt.",
      },
      {
        question: "Was passiert nach einem Geräteneustart?",
        answer:
          "Der Schutz aktiviert sich automatisch wieder. Auf Android stelle dazu im VPN-Profil einmalig „Immer aktiv“ ein, das zeigt dir das Android-Tutorial. Auf iOS ist nichts weiter nötig.",
      },
      {
        question: "Kann mein Kind Kidgonet selbst deinstallieren?",
        answer:
          "Nicht, solange das Gerät korrekt eingerichtet ist. Auf iOS verhindert die Kind-Apple-ID in deiner Familienfreigabe das Entfernen. Auf Android schützt der Geräteadministrator-Status. Beides aktivierst du im jeweiligen Setup automatisch mit.",
      },
    ],
  },
  {
    title: "Probleme & Tipps / Account",
    items: [
      {
        question: "Mein Webfilter blockiert eine erlaubte Seite. Was tun?",
        answer:
          "Schick uns die Adresse an support@kidgonet.de. Wir prüfen die Seite und passen den Filter bei Bedarf an. Der Internetfilter wird regelmäßig aktualisiert, kommen also gerne mit Hinweisen auf uns zu.",
      },
      {
        question: "Pairing klappt nicht. Was kann ich tun?",
        answer:
          "Prüfe, ob das Kind-Gerät online ist und der QR-Code aus dem Eltern-Portal noch gültig ist (Codes laufen nach kurzer Zeit ab). Generiere im Portal einen neuen Code und versuche es erneut. Hilft das nicht, kontaktiere uns über support@kidgonet.de.",
      },
      {
        question: "Was kostet Kidgonet?",
        answer:
          "Die aktuellen Tarife stehen auf unserer Preisseite. Es gibt keine versteckten Kosten und keine Werbung in der Kinder-App.",
      },
      {
        question: "Gibt es eine kostenlose Testphase?",
        answer:
          "Ja. Du kannst Kidgonet zunächst kostenfrei ausprobieren und alle Funktionen prüfen, bevor du dich für ein Abo entscheidest. Eine Kündigung der Testphase ist jederzeit möglich.",
      },
      {
        question: "Kann ich jederzeit kündigen?",
        answer:
          "Ja. Du kündigst direkt im Eltern-Portal unter „Abo verwalten“. Es gibt keine Mindestlaufzeit nach der Testphase. Bei einer Kündigung bleibt dein Account bis zum Ende des bezahlten Zeitraums aktiv.",
      },
    ],
  },
];
