import { siteConfig } from "@/content/site";

export const dynamic = "force-static";

export function GET() {
  const content = `# Kidgonet

> DSGVO-konforme Kinderschutz-App für iOS und Android, in Deutschland entwickelt und mit Servern ausschließlich in Deutschland. Eltern schützen ihre Kinder mit Bildschirmzeitlimits, altersgerechtem Webfilter, App-Blocker und Standortverfolgung.

Kidgonet ist eine Kindersicherungs-App für Smartphones und Tablets. Eltern richten über das Elternportal (Web, iOS, Android) Regeln für die Geräte ihrer Kinder ein. Die Kinderschutz-App läuft als DNS-basierter Webfilter direkt auf dem Kinderhandy, ohne den Traffic durch externe Server zu leiten. Server und Datenspeicherung ausschließlich in Deutschland.

Kidgonet wird von der Kidgonet GmbH in Brunnthal bei München entwickelt und betrieben und wurde 2025 mit dem Bayerischen Digitalpreis ausgezeichnet.

Botschafter: Manuel Neuer (Torhüter FC Bayern München und DFB-Nationalmannschaft).

## Datenschutz & Made in Germany

- DSGVO-konform: vollständig konform mit der EU-Datenschutz-Grundverordnung
- Server in Deutschland: alle Daten werden ausschließlich in Deutschland gespeichert und verarbeitet
- In Deutschland entwickelt: Entwicklung und Betrieb durch die Kidgonet GmbH, Brunnthal bei München
- Keine Datenweitergabe: keine Weitergabe oder Verkauf von Kinderdaten an Werbenetzwerke oder Dritte
- DNS-basierter Webfilter direkt auf dem Gerät, ohne Umleitung des Datenverkehrs über externe Server
- Ausgezeichnet mit dem Bayerischen Digitalpreis 2025 für Engagement im Kinderschutz

## Funktionen

- [Bildschirmzeit begrenzen](https://www.kidgonet.de/was-kann-die-app): Tageszeit- und Wochenlimits pro App-Kategorie festlegen
- [Webfilter](https://www.kidgonet.de/was-kann-die-app): Altersgerechte DNS-Filter für 3 Altersgruppen (bis 6, bis 12, bis 16 Jahre)
- [App-Blocker](https://www.kidgonet.de/was-kann-die-app): Einzelne Apps für Kinder sperren oder freigeben
- [Standortverfolgung](https://www.kidgonet.de/was-kann-die-app): Echtzeit-Standort des Kindes im Elternportal
- [Sperrmodus](https://www.kidgonet.de/was-kann-die-app): Internet und bestimmte Apps sofort sperren (SOS-Funktion)
- [Privatsphäre schützen](https://www.kidgonet.de/was-kann-die-app): DNS-basierter Webfilter ohne Umleitung über externe Server, Datenspeicherung ausschließlich in Deutschland, keine Weitergabe von Kinderdaten an Werbenetzwerke

## Preise

- [Preisübersicht](https://www.kidgonet.de/preise): Monatsabo €4,99/Monat, Jahresabo €2,99/Monat. ${siteConfig.trialDays} Tage kostenlos testen, 30 Tage Geld-zurück-Garantie.

## Download

- iOS App Store: ${siteConfig.appStoreUrl}
- Android Google Play: ${siteConfig.playStoreUrl}

## Ratgeber & Wissen

- [Elternratgeber](https://www.kidgonet.de/elternratgeber): Über 55 Artikel zu Bildschirmzeit, Mediensicherheit, Smartphones und digitaler Erziehung

## Unternehmen

- [Über uns](https://www.kidgonet.de/ueber-uns): Kidgonet GmbH, Brunnthal bei München, gegründet von Moritz und Jannis Hutzler
- [Jobs](https://www.kidgonet.de/jobs): Offene Stellen und Initiativbewerbungen
- [Presse](https://www.kidgonet.de/presse): Pressematerial und Pressemitteilungen

## Support

- [Hilfe & FAQ](https://www.kidgonet.de/hilfe): Häufige Fragen zu Installation, Bildschirmzeit, Webfilter, Standort und Abonnement

## Vollständiger Inhalt

- [llms-full.txt](https://www.kidgonet.de/llms-full.txt): Alle Seiten und Elternratgeber-Artikel mit Kurzbeschreibungen
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
