# SEO- & GEO-Audit kgn-website

Stand: 2026-06-03. Bezieht sich auf den Stand im Branch `main` (Next.js 16, App Router, `output: export`, deutschsprachig, Domain `www.kidgonet.de`).

GEO = Generative Engine Optimization: Auffindbarkeit und Zitierbarkeit in KI-Antwortmaschinen (ChatGPT/OAI-Search, Perplexity, Google AI Overviews, Claude).

---

## 1. Gesamteinschätzung

Die Seite ist technisch und strukturell überdurchschnittlich gut aufgestellt. Vieles, was in einem SEO-Audit normalerweise als Lücke auftaucht, ist hier bereits vorhanden: pro Seite gepflegte Metadaten, Canonicals, eine dynamisch generierte Sitemap mit `lastModified` aus dem Git-Log, dynamische OG-Bilder, ein RSS-Feed, ein Glossar mit `DefinedTermSet`, eine vorhandene `llms.txt`/`llms-full.txt` und ein breites, aktuelles Content-Fundament (ca. 57 Elternratgeber-Artikel).

Kurzbewertung:

| Bereich | Reifegrad | Kommentar |
|---|---|---|
| Technische SEO | Hoch | Sitemap, Canonicals, Caching, Security-Header, saubere URLs vorhanden |
| Structured Data | Hoch | Organization, WebSite, SoftwareApplication, FAQPage, HowTo, BlogPosting, BreadcrumbList, DefinedTermSet |
| On-Page / Content | Hoch | Titel/Descriptions sauber dimensioniert, klare H1, Themencluster |
| GEO / KI-Zitierbarkeit | Mittel bis hoch | llms.txt + starke E-E-A-T vorhanden; kleine Lücken bei Crawler-Regeln, Quellen-Links, Ratings |
| Performance (SEO-Faktor) | Mittel | LCP-Optimierung läuft bereits (separater Track) |

Es gibt also keine Grundsanierung zu tun, sondern gezielte Feinarbeit mit gutem Aufwand-Nutzen-Verhältnis.

---

## 2. Bestandsaufnahme (Befund)

### 2.1 Technische SEO

Vorhanden:
- `src/app/sitemap.ts`: statisch zur Build-Zeit, `lastModified` aus Git-Log (Fallback mtime), `changeFrequency`/`priority` differenziert, enthält statische Seiten + Kategorien + alle Artikel.
- `public/robots.txt`: `Allow: /`, `Disallow: /newsletter/`, Sitemap verlinkt.
- `public/.htaccess`: saubere URLs (`.html`-Rewrite), ein 301-Redirect, Security-Header (X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy), Caching (`immutable` für Assets, `must-revalidate` für HTML), gzip.
- `metadataBase` gesetzt, Canonical pro Seite via `alternates.canonical`.
- Dynamische OG-Bilder über `opengraph-image.tsx` (Root + viele Unterseiten), Twitter-Card `summary_large_image`.
- RSS-Feed unter `/elternratgeber/feed.xml`.

Lücken:
- Keine AI-Crawler-spezifischen Regeln in `robots.txt` (siehe GEO).
- Kein HSTS-Header in der `.htaccess` (PageSpeed/Best-Practices-Audit nennt HSTS).
- Kein PWA-Manifest und kein `theme-color` (geringe SEO-Relevanz, eher PWA/Mobile-Politur).
- `hreflang` nur `de`, kein `x-default` (bei Einsprachigkeit unkritisch).
- Kein `AggregateRating`/`Review`-Schema, obwohl App-Store-Bewertungen existieren (Rich-Result-Chance).

### 2.2 Structured Data

Vorhanden und korrekt verknüpft (`@id`-Referenzen zwischen Organization und WebSite):
- Organization (legalName, foundingDate, foundingLocation, address, award, `sameAs` zu Instagram/Facebook/LinkedIn/App Store/Play Store).
- WebSite mit `SearchAction` auf die Elternratgeber-Suche.
- SoftwareApplication mit zwei `offers` (Monats-/Jahresabo), `featureList`, `award`.
- FAQPage (Startseite + Funktionsseiten), HowTo (Installationsseiten), BlogPosting (pro Artikel mit datePublished/dateModified/author/publisher), BreadcrumbList, DefinedTermSet (Glossar).

Lücken:
- Kein `AggregateRating` an SoftwareApplication (App-Bewertungen nicht strukturiert).
- Kein explizites `Person`-Schema mit `sameAs` für Experten-Autoren (nur Byline).

### 2.3 On-Page / Content

Vorhanden:
- Ca. 30 Routen, durchgängig mit `title`/`description`/`canonical`/`openGraph`; Längen plausibel (Titel < 60, Description < 160).
- Klare Themencluster: Funktionsseiten (Bildschirmzeit, Webfilter, Standort, Apps-freigeben, Sperrmodus), Keyword-Landingpages (Kindersicherung iPhone/Android/Handy), Content-Hub (Elternratgeber, Glossar).
- Saubere H1/H2/H3-Hierarchie, je Seite genau eine H1 (auch Startseite, H1 liegt im Mobile-Hero, immer im DOM).
- Alt-Texte konsequent und beschreibend, sprechende Dateinamen.
- Robustes Artikel-Frontmatter (SEO-Override, `noindex`-Flag, Custom-Author, `verwandt`).

Lücken / Beobachtungen:
- `/datenschutz-ios-app` und `/datenschutz-android-app` sind kaum/nicht intern verlinkt (Orphan-Tendenz). Logischer Platz: von den Installationsseiten verlinken.
- `/app` wird nicht aus der Navigation verlinkt (Zweck/Index-Status klären).
- Mögliche Keyword-Nähe zwischen `/kindersicherung-handy` und `/kindersicherung-iphone`/`-android` (beobachten, ggf. konsolidieren, nicht akut).
- Einige Feature-Mockup-Bilder haben generische Alt-Texte (Detailpolitur).

### 2.4 GEO / KI-Zitierbarkeit

Stark:
- `llms.txt` und `llms-full.txt` vorhanden, mit Kurzbeschreibungen und Links zu Kernseiten und Artikeln.
- Sehr klare Entität: Firma (Kidgonet GmbH, Brunnthal bei München), Gründer namentlich, Gründungsjahr, Award (Bayerischer Digitalpreis 2025), Partner (Manuel Neuer).
- Trust-Signale: DSGVO, Server in Deutschland, Datenschutz-Fokus.
- Antwort-freundliche Strukturen: FAQ mit eigenständigen, definitorischen Antworten; Glossar mit `<dl>/<dt>/<dd>`; semantische Vergleichstabelle.
- Aktualität: `datePublished`/`dateModified` werden ausgegeben (`<time>`).

Lücken:
- `robots.txt` listet AI-Crawler nicht explizit (sie sind über `*` erlaubt, aber nicht benannt).
- Statistiken in Artikeln (JIM-/KIM-Studie etc.) werden genannt, aber nicht auf die Originalquelle verlinkt: für GEO und E-E-A-T ein klarer Hebel.
- Kein `AggregateRating` (KI-Antworten zitieren gern Bewertungen).
- Experten-Autoren ohne maschinenlesbare `sameAs`-Verknüpfung.

---

## 3. Maßnahmenplan (priorisiert)

Priorisierung nach Aufwand/Nutzen. „Quick Wins" sind risikoarm und in Minuten bis wenigen Stunden umsetzbar.

### 3.1 Quick Wins (sofort, risikoarm)

1. **AI-Crawler in `robots.txt` explizit erlauben.**
   GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, PerplexityBot, Perplexity-User, Google-Extended, CCBot, Amazonbot explizit `Allow: /`. Effekt: unmissverständliches Signal, dass die Inhalte für KI-Antworten genutzt werden dürfen. Sitemap-Zeile beibehalten.
   Datei: `public/robots.txt`. Aufwand: 10 Min.

2. **Verweis auf `llms.txt` zugänglich machen.**
   Sicherstellen, dass `llms.txt`/`llms-full.txt` im Deploy landen (liegen aktuell in `out/`) und stabil erreichbar sind. Optional Hinweiszeile in `robots.txt`.
   Aufwand: 15 Min (Prüfung).

3. **HSTS-Header in `.htaccess`.**
   `Strict-Transport-Security: max-age=31536000; includeSubDomains` ergänzen (adressiert das Best-Practices-Audit). Vorsicht: erst setzen, wenn dauerhaft HTTPS gewünscht ist (ist hier der Fall).
   Datei: `public/.htaccess`. Aufwand: 10 Min.

4. **Datenschutz-App-Seiten intern verlinken.**
   Von `/hilfe/installation-ios` auf `/datenschutz-ios-app`, von `/hilfe/installation-android` auf `/datenschutz-android-app`. Behebt Orphan-Tendenz.
   Aufwand: 20 Min.

5. **`theme-color` und Web-App-Meta ergänzen (optional).**
   `theme-color` (Brand-Yellow) im Metadata-Export. Kleiner Mobile-/Politur-Gewinn.
   Aufwand: 10 Min.

### 3.2 Mittel (klarer Nutzen, etwas mehr Arbeit)

6. **`AggregateRating` an SoftwareApplication ergänzen: nur mit echten Werten.**
   App-Store-/Play-Store-Bewertung (Wert + Anzahl) strukturiert ausgeben. Chance auf Sterne-Rich-Results und häufigere KI-Zitate. Wichtig: ausschließlich reale, belegbare Zahlen verwenden, sonst Richtlinienverstoß.
   Datei: `src/components/seo/JsonLd.tsx`. Aufwand: 1 Std (plus echte Zahlen beschaffen).

7. **Quellen-Links in Statistik-Aussagen der Artikel.**
   Wo Studien genannt werden (JIM, KIM, BZgA, WHO), auf die Originalquelle verlinken. Stärkt E-E-A-T und macht Aussagen für KI besser zitierbar/verifizierbar. Schrittweise bei den meistgelesenen Artikeln beginnen.
   Dateien: `src/content/elternratgeber/...`. Aufwand: laufend, pro Artikel 10 bis 20 Min.

8. **Experten-Autoren als `Person` mit `sameAs`.**
   Für Interview-/Experten-Artikel das `author`-Objekt um Rolle/Profil-Link erweitern und im BlogPosting-Schema als `Person` mit `sameAs` ausgeben. Stärkt Autoren-Entitäten für GEO.
   Dateien: Author-Typ + Artikel-Schema. Aufwand: halber Tag (Konzept + Umsetzung).

9. **`/app` und `/kindersicherung-handy` klären.**
   Index-Status und Navigationseinbindung von `/app` festlegen (verlinken, `noindex`, oder konsolidieren). Bei `/kindersicherung-handy` Keyword-Overlap beobachten (Search Console) und nur bei echter Kannibalisierung konsolidieren/redirecten.
   Aufwand: 1 bis 2 Std inkl. Analyse.

### 3.3 Strategisch (laufend, höchster Langzeitwert)

10. **Topical Authority im Elternratgeber ausbauen.**
    Content-Cluster gezielt vervollständigen (jede Funktionsseite mit 3 bis 5 unterstützenden Ratgeber-Artikeln verknüpfen, beidseitige interne Links). GEO belohnt thematische Tiefe und klare Themenautorität.

11. **FAQ-Abdeckung pro Funktionsseite erhöhen.**
    Funktionsseiten konsequent mit FAQPage-Schema und 4 bis 6 prägnanten, eigenständig zitierbaren Antworten ausstatten (erste Antwortsätze definitorisch). Das ist das stärkste GEO-Format für Featured-Snippets und AI-Overviews.

12. **Performance als Ranking-/GEO-Faktor weiterführen.**
    Der LCP-Track läuft bereits. Nach Deploy per PageSpeed neu messen; ungenutztes JS (Client- vs. Server-Components) als separaten Schritt prüfen.

13. **Monitoring etablieren.**
    Google Search Console (Indexabdeckung, Queries, Kannibalisierung), Bing Webmaster Tools, und stichprobenhaft KI-Antworten testen („Was ist Kidgonet?", „Beste Kindersicherung iPhone") zur GEO-Erfolgskontrolle.

---

## 4. Was bewusst NICHT empfohlen wird

- Keine `headers()`/`redirects()` in `next.config.ts`: bei `output: export` ignoriert Next sie, Webserver-`.htaccess` ist der richtige Ort.
- Kein Sitemap-Index: bei aktueller URL-Zahl unnötig.
- Keine mehrsprachigen hreflang-Konstrukte, solange die Seite einsprachig (de) ist.
- Keine erfundenen Bewertungen/Fakten für Schema: ausschließlich belegbare Werte.

---

## 5. Vorgeschlagene Reihenfolge

1. Quick Wins 1 bis 4 in einem kleinen PR (robots.txt, HSTS, interne Links). Risikoarm, sofort deploybar.
2. `AggregateRating` (sobald echte Zahlen vorliegen) + erste Quellen-Links.
3. Laufend: Content-Cluster, FAQ-Ausbau, Autoren-Entitäten, Monitoring.
