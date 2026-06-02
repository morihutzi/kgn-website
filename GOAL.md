# Projektziel: kidgonet.de Website-Nachbau

Wir bauen die Marketing-Website von www.kidgonet.de 1:1 in React/Next.js nach.

## Aktuelle Phase: Inhalts-Nachbau

Wir konzentrieren uns ausschließlich darauf, die Inhalte und Struktur der Live-Site getreu zu übernehmen — Texte, Bilder, Navigation, Seitenaufbau (Startseite, "Was kann die App?", Preise, Hilfe, Elternratgeber, Über uns, FAQ, Impressum, Datenschutz).

**Quelle der Wahrheit:** die aktuelle Live-Seite www.kidgonet.de

## Vorgehensweise pro Seite

1. Live-Seite analysieren (Struktur, Texte, Medien, Links)
2. Als React-Komponente / Next.js-Route nachbauen
3. Inhalte content-first speichern (MDX oder ähnlich), damit sie später ohne Code-Änderung pflegbar sind
4. Pixel-Treue zur Vorlage anstreben, aber semantisches HTML und Accessibility nicht opfern

## Tech-Stack (initial)

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS

Detailentscheidungen (CMS, i18n-Library, Animationen) treffen wir, wenn sie konkret anstehen — nicht vorab.

## Aktuell nicht im Scope

- Hosting/Deployment-Setup (folgt später)
- Login/Portal-Funktionalität (läuft separat auf portal.kidgonet.de)
- Backend, App-Funktionalität, Bezahlflüsse
- Eigene Inhalte oder Redesigns — wir kopieren, nicht erfinden

## Qualitätsanspruch

Sauberer Code, der bei wachsendem Projekt skaliert. Komponenten-Komposition statt Prop-Wildwuchs, performante Datenflüsse, DSGVO-konform (Impressum, Datenschutz, Cookies).

Die Vercel-Skills `react-best-practices` und `web-design-guidelines` sollen aktiv genutzt werden.

## Definition of Done pro Seite

- Inhaltlich vollständig
- Responsiv
- Accessible (Tastatur + Screenreader)
- Keine TypeScript- oder Lint-Fehler
- Lighthouse Performance ≥ 90 lokal
