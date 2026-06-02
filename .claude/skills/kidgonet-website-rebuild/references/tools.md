# Tool-Inventar fuer den Kidgonet-Nachbau

Welches Tool wofuer — mit konkretem Beispielaufruf.

## 1. Live-Site lesen

### `WebFetch`
Schnellster Weg, HTML/Text einer Live-Seite zu lesen.

```text
WebFetch(url="https://www.kidgonet.de/preise", prompt="Liste alle sichtbaren Headlines, Preise und CTA-Buttons in Reihenfolge auf.")
```

Vorteile: kein Browser-Setup, direkt LLM-gefiltert.
Limitierungen: kein JS-Render, kein visueller Vergleich, kein Cookie-Handling.

### `curl` ueber Bash
Wenn DOM direkt gebraucht wird:

```bash
curl -sL -H "Cookie: pll_language=de" "https://www.kidgonet.de/preise" > /tmp/live.html
```

## 2. Lokal rendern & Screenshots

### Playwright (empfohlen, kein MCP noetig)
Funktioniert immer, auch ohne installierte Chrome-Extension.

Setup (einmalig):
```bash
cd "Website/kgn-website" && pnpm add -D playwright && npx playwright install chromium
```

Screenshot-Vergleich-Script unter `/tmp/parity.mjs`:
```js
import { chromium } from 'playwright';

const routes = ['/', '/preise', '/was-kann-die-app'];
const viewports = [
  { name: 'mobile',  width: 390,  height: 844 },
  { name: 'desktop', width: 1440, height: 900 },
];

const browser = await chromium.launch();
for (const route of routes) {
  for (const vp of viewports) {
    for (const target of ['local', 'live']) {
      const base = target === 'local' ? 'http://localhost:3210' : 'https://www.kidgonet.de';
      const ctx = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
        deviceScaleFactor: 2,
        extraHTTPHeaders: { Cookie: 'pll_language=de' },
      });
      const page = await ctx.newPage();
      await page.goto(base + route, { waitUntil: 'networkidle' });
      await page.screenshot({
        path: `/tmp/parity${route === '/' ? '/home' : route}/${vp.name}-${target}.png`,
        fullPage: true,
      });
      await ctx.close();
    }
  }
}
await browser.close();
```

Aufruf:
```bash
mkdir -p /tmp/parity/home /tmp/parity/preise /tmp/parity/was-kann-die-app
node /tmp/parity.mjs
```

### Chrome MCP / `claude-in-chrome` (wenn installiert)
Falls die `mcp__claude-in-chrome__*` Tools verfuegbar sind, kannst du:
- live in einem echten Browser-Tab navigieren
- DOM-Snapshot ziehen
- Screenshots ohne Playwright erzeugen

Bei Problemen: Skill `claude-in-chrome-troubleshooting` aufrufen.

## 3. Figma-Vorlagen lesen

Wenn der User einen Figma-Frame nennt oder eine Selektion in Figma hat:

```text
mcp__TalkToFigma__join_channel(channelName="kidgonet")  # einmalig pro Session
mcp__TalkToFigma__get_selection()
mcp__TalkToFigma__read_my_design()
mcp__TalkToFigma__scan_text_nodes(nodeId="...")
mcp__TalkToFigma__export_node_as_image(nodeId="...", scale=2)
```

Token, Farben, Spacing aus Figma -> 1:1 in Tailwind-Klassen uebernehmen (Brand-Yellow ist `#F9B000`).

## 4. Dev-Server steuern

```bash
# Start im Hintergrund
cd "Website/kgn-website" && PORT=3210 pnpm dev 2>&1 | tee /tmp/kgn_dev.log &

# Auf "Ready in" warten
until grep -q "Ready in" /tmp/kgn_dev.log 2>/dev/null; do sleep 0.5; done

# Status pruefen
curl -sI http://localhost:3210 | head -3
```

## 5. Quality-Gates

```bash
cd "Website/kgn-website"
pnpm lint
pnpm exec tsc --noEmit
pnpm build  # nur fuer Full-Check vor Merge
```

## 6. Bestaendige Skills (aus Skill-Liste verfuegbar)

- `web-design-guidelines` -> Review UI-Code gegen Web Interface Guidelines + A11y
- `webapp-testing` -> Playwright-basierte Browser-Interaktion / Logs
- `frontend-design` -> Distinctive Frontend-Bauen (nur wenn ueber 1:1-Vorlage hinaus designed wird; aktuell ausserhalb des Scope laut `GOAL.md`)
- `claude-in-chrome-troubleshooting` -> wenn Chrome MCP haengt
