---
name: kidgonet-website-rebuild
description: Orchestriert den 1:1-Nachbau von www.kidgonet.de in Next.js. Dispatcht drei Agents (Developer, Visual-Parity-Reviewer, React-Best-Practices-Auditor) und nutzt Chrome/Playwright + Figma MCP, um Live-Vorlage und lokalen Build automatisch zu vergleichen. Trigger bei Aufgaben wie "neue Section bauen", "Seite nachbauen", "mit Live-Site vergleichen", "Komponente reviewen".
---

# Kidgonet Website Rebuild

Workflow-Skill fuer den Nachbau von `https://www.kidgonet.de` als Next.js-Site unter `Website/kgn-website/`.

## Ziel & Scope

- Quelle der Wahrheit: Live-Seite `https://www.kidgonet.de`
- Tech-Stack: Next.js 16 (App Router), React 19, TypeScript, Tailwind 4, pnpm
- Pixel-naehe an die Vorlage, aber semantisches HTML und A11y haben Vorrang
- Inhalte content-first in `src/content/*.ts` (spaeter MDX moeglich)
- Detailziele und Definition of Done: siehe `GOAL.md` im Projekt-Root

## Projekt-Setup (Pfade & Ports)

- Repo-Root: `Website/kgn-website/`
- App Router: `src/app/`
- Sections: `src/components/sections/`
- UI-Primitives: `src/components/ui/`
- Layout: `src/components/layout/`
- Content/Daten: `src/content/`
- Dev-Server-Start: `cd Website/kgn-website && PORT=3210 pnpm dev`
- Dev-URL: `http://localhost:3210`
- Live-URL: `https://www.kidgonet.de`
- Lint/Typecheck: `pnpm lint` und `pnpm exec tsc --noEmit`

## Workflow (3 Phasen)

Jede groessere Aufgabe (neue Section, neue Route, Redesign) laeuft durch alle drei Phasen. Kleinere Tweaks koennen mit Phase 2 + 3 enden.

### Phase 1: Build (Developer)

Dispatche `kidgonet-developer` mit:
- **Was**: neue/zu aendernde Komponente oder Route, betroffene Dateien
- **Vorlage**: konkrete URL auf `kidgonet.de` (z.B. `/preise`, `/was-kann-die-app`) oder Figma-Frame
- **Daten**: gehoert Inhalt nach `src/content/*.ts`? Welche Datei?
- **Constraints**: aus `GOAL.md` (DSGVO-konform, Tailwind 4, App Router Server Components als Default)

Der Agent darf die Live-Site fetchen (`WebFetch`), Screenshots/DOM mit Playwright ziehen, Figma-Frames lesen, Bilder aus `/public/images/` referenzieren und CR-Konventionen aus `MEMORY.md` befolgen (solide Hintergruende, weisser Text auf Primary-Buttons, Open Sans, Brand-Yellow `#F9B000`).

### Phase 2: Visual Parity (Reviewer)

Dispatche `visual-parity-reviewer` mit:
- **URL-Paar**: `https://www.kidgonet.de/<route>` vs. `http://localhost:3210/<route>`
- **Viewports**: mindestens `390x844` (Mobile) und `1440x900` (Desktop)
- **Fokus-Areas**: welche Section ist gerade neu/geaendert

Agent vergleicht via Playwright-Screenshots (oder Chrome MCP wenn installiert) und liefert eine Diff-Liste: Abweichungen in Spacing, Typografie, Farben, Bildausschnitten, Reihenfolge, fehlenden Elementen.

### Phase 3: Best Practices (Auditor)

Dispatche `react-best-practices-auditor` mit:
- **Diff**: aktuelle Aenderungen (Dateien aus Phase 1)
- **Kontext**: Next.js 16 App Router, React 19

Agent checkt: `"use client"`-Grenzen, Server/Client-Split, Hydration-Risiken, `next/image`-Nutzung, Tailwind-Klassen-Hygiene, A11y (Landmarks, Alt-Texte, Tastatur), Performance-Antipattern, TypeScript-Striktheit.

## Parallelisierung

Phase 2 und Phase 3 sind unabhaengig und sollten in **einer** Nachricht parallel dispatched werden (zwei Agent-Tool-Calls). Phase 1 ist Voraussetzung.

## CI-Vertretungen

- `kidgonet-developer` -> Datei-Edits, Tailwind-Klassen, Komponenten-Aufbau
- `visual-parity-reviewer` -> nur lesend; Output ist Markdown-Diff
- `react-best-practices-auditor` -> nur lesend; Output ist priorisierte Findings-Liste

## Verwendete Tools / MCPs

Siehe `references/tools.md` fuer die vollstaendige Liste und Beispielaufrufe (Playwright, Chrome MCP, Figma MCP, WebFetch).

## Memory-Praeferenzen, die hier gelten

- Borders nie mit Transparenz
- Cards/Callouts immer solide Hintergrund-Tokens
- Primary-Buttons: oranger Hintergrund -> weisse Schrift
- Echte Umlaute, keine Em-Dashes in deutschen Texten
- Commits nur auf explizite Freigabe, ohne Co-Authored-By
- `.env.local` nicht lesen

## Aktivierung

- "Bau die <Section> nach von kidgonet.de/<route>" -> Phase 1 -> 2 -> 3
- "Vergleich Hero mit Live" -> nur Phase 2
- "Review meine Aenderungen am Pricing" -> nur Phase 3
- "Mach den Hero responsive" -> Phase 1 (klein) -> 2 -> 3
