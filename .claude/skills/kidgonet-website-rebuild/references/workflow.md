# Typische Workflows

Beispiele, wie der Skill mit den drei Agents zusammenspielt.

## Workflow A — Neue Section bauen ("Bau den Hero von kidgonet.de nach")

1. **Vorab klaeren (Hauptkonversation):**
   - Welche Route? (`/` -> Hero auf der Startseite)
   - Gibt es einen Figma-Frame, oder Live-Site als Vorlage?
   - Mobile + Desktop, oder erstmal eines?

2. **Phase 1 — Dispatch `kidgonet-developer`:**
   ```
   Aufgabe: Hero-Section unter Website/kgn-website/src/components/sections/Hero.tsx 1:1 nach https://www.kidgonet.de/ nachbauen.
   - Mobile (<768px): Foto-Banner mit Aspect-Ratio 390/427
   - Desktop (>=768px): zweispaltig, links Text, rechts Foto
   - Texte aus src/content/home.ts laden (anlegen falls noch nicht da)
   - Brand-Yellow #F9B000 fuer Pill-Badges, weisse Schrift auf orangen Buttons
   ```

3. **Phase 2 + 3 parallel — Dispatch in **einer** Nachricht:**
   - `visual-parity-reviewer` mit Route `/`, Viewports `390x844` und `1440x900`
   - `react-best-practices-auditor` mit den geaenderten Dateien aus Phase 1

4. **Findings konsolidieren:** Hauptkonversation entscheidet, welche Findings adressiert werden — bei groesseren Aenderungen zurueck zu Phase 1.

## Workflow B — Nur Parity-Check ("wie nah sind wir an der Live-Site?")

- **Dispatch `visual-parity-reviewer`** mit allen aktuell gebauten Routen.
- Kein Developer-Dispatch — Output ist eine Diff-Liste, die der User priorisiert.

## Workflow C — Nur Best-Practices-Audit ("review meinen letzten Stand")

- **Dispatch `react-best-practices-auditor`** mit `git diff` oder konkreten Dateipfaden.
- Output: priorisierte Findings, keine Aenderungen am Code.

## Workflow D — Pixel-Tuning ("Spacing im Hero ist 4px zu eng")

- Klein genug, dass kein Audit noetig ist.
- **Direkt** `kidgonet-developer` mit konkreter Aenderung dispatchen, optional Parity-Re-Check.

## Anti-Patterns (nicht machen)

- ❌ Drei Agents fuer einen Klassen-Tweak
- ❌ Phase 2 dispatchen, bevor Phase 1 fertig ist
- ❌ Developer parallel zu Reviewer/Auditor laufen lassen (Race auf Dateien)
- ❌ Phase 2 + 3 sequentiell statt parallel — kostet Zeit ohne Mehrwert

## Wann KEIN Skill noetig ist

- Reine Doku-Aenderungen
- README/Lockfile-Updates
- Dependency-Bumps ohne UI-Auswirkung
- Fragen zur Architektur (-> Plan-Agent, nicht dieser Skill)
