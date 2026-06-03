/**
 * inline-critical-css.mjs — Post-Build-Schritt fuer den statischen Export.
 *
 * Laeuft nach `next build` + Image-Optimizer ueber alle out/*.html und inlined
 * mit beasties das kritische CSS pro Seite ins <head>. Die grosse, gemeinsame
 * Tailwind-CSS-Datei wird dadurch nicht-blockierend nachgeladen (preload+swap),
 * statt das erste Rendern zu blockieren. Reduziert Render-Blocking / verbessert
 * FCP und LCP auf langsamen Verbindungen.
 *
 * Hintergrund: Next `experimental.optimizeCss` greift bei `output: export`
 * nicht (die exportierten HTML-Dateien werden nicht nachbearbeitet), deshalb
 * dieser explizite Schritt direkt auf dem out/-Verzeichnis.
 */
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import Beasties from "beasties";

const OUT_DIR = "out";

async function htmlFiles(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await htmlFiles(full)));
    else if (entry.name.endsWith(".html")) out.push(full);
  }
  return out;
}

const files = await htmlFiles(OUT_DIR);
let ok = 0;
let skipped = 0;

for (const file of files) {
  const html = await readFile(file, "utf8");
  // Neue Beasties-Instanz pro Datei: vermeidet Zustand zwischen Seiten.
  const beasties = new Beasties({
    path: OUT_DIR,
    publicPath: "/",
    preload: "swap", // restliches CSS nicht-blockierend laden, dann einblenden
    pruneSource: false, // gemeinsame CSS-Datei unveraendert lassen (Cache)
    reduceInlineStyles: false,
    logLevel: "silent",
  });
  try {
    const processed = await beasties.process(html);
    if (processed && processed !== html) {
      await writeFile(file, processed, "utf8");
      ok++;
    } else {
      skipped++;
    }
  } catch (err) {
    skipped++;
    console.warn(`  beasties uebersprungen: ${file} (${err?.message ?? err})`);
  }
}

console.log(
  `Critical-CSS inlined: ${ok} Seiten, ${skipped} uebersprungen (von ${files.length}).`,
);
