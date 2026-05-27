#!/usr/bin/env node
/**
 * Optimiert Bilder unter public/images in-place.
 *
 * Strategie:
 *   - Originale werden überschrieben, Pfad + Endung bleiben gleich.
 *     So bleiben MDX-cover-Referenzen und Hero-Pfade intakt.
 *   - Max-Breite 1600px (Article-Hero ist ~760px = 2x retina genug).
 *   - PNG: Re-Encode mit Sharp (palette+compressionLevel 9).
 *   - JPEG: mozjpeg quality 82.
 *   - AVIF/WebP/SVG/GIF werden übersprungen.
 *   - Nur Dateien über SIZE_THRESHOLD werden bearbeitet.
 *
 * Aufruf:
 *   node scripts/optimize-images.mjs           — schreibt Änderungen
 *   node scripts/optimize-images.mjs --dry     — nur Report, kein Schreiben
 *   node scripts/optimize-images.mjs --path public/images/elternratgeber
 *
 * Vor jeder Datei wird eine Validierung gemacht (Sharp re-decode), und
 * nur überschrieben, wenn das Ergebnis kleiner ist als das Original.
 */

import { readdir, stat, readFile, writeFile } from "node:fs/promises";
import { join, extname, relative, resolve } from "node:path";
import sharp from "sharp";

const ROOT = resolve(process.cwd());
const args = process.argv.slice(2);
const DRY = args.includes("--dry");
const pathArgIndex = args.indexOf("--path");
const TARGET_REL = pathArgIndex >= 0 ? args[pathArgIndex + 1] : "public/images";
const TARGET = resolve(ROOT, TARGET_REL);

const SIZE_THRESHOLD = 500 * 1024; // 500 KB
const MAX_WIDTH = 1600;
const JPEG_QUALITY = 82;
const ALLOWED_EXT = new Set([".png", ".jpg", ".jpeg"]);

function fmtKB(bytes) {
  return `${(bytes / 1024).toFixed(0)} KB`;
}

async function* walk(dir) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    const abs = join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(abs);
    } else if (entry.isFile()) {
      yield abs;
    }
  }
}

async function processFile(abs) {
  const ext = extname(abs).toLowerCase();
  if (!ALLOWED_EXT.has(ext)) return null;

  const stats = await stat(abs);
  if (stats.size < SIZE_THRESHOLD) return null;

  const input = await readFile(abs);
  const pipeline = sharp(input, { failOn: "error" });
  const meta = await pipeline.metadata();
  if (!meta.width) return { abs, skipped: "no width metadata" };

  const needsResize = meta.width > MAX_WIDTH;
  let pipe = needsResize
    ? pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true })
    : pipeline;

  if (ext === ".png") {
    pipe = pipe.png({ compressionLevel: 9, palette: true });
  } else {
    pipe = pipe.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
  }

  const output = await pipe.toBuffer();

  if (output.length >= stats.size) {
    return {
      abs,
      before: stats.size,
      after: output.length,
      skipped: "no gain",
    };
  }

  if (!DRY) {
    await writeFile(abs, output);
  }

  return {
    abs,
    before: stats.size,
    after: output.length,
    width: meta.width,
    resized: needsResize,
  };
}

async function main() {
  console.log(
    `Scanne ${relative(ROOT, TARGET)} (${DRY ? "DRY RUN" : "schreibt"})\n` +
      `Schwellwert: ${fmtKB(SIZE_THRESHOLD)} · Max-Breite: ${MAX_WIDTH}px · JPEG-Qualität: ${JPEG_QUALITY}\n`,
  );

  let totalBefore = 0;
  let totalAfter = 0;
  let optimized = 0;
  let skipped = 0;

  for await (const abs of walk(TARGET)) {
    const result = await processFile(abs);
    if (!result) continue;
    const rel = relative(ROOT, abs);

    if (result.skipped) {
      skipped++;
      console.log(`  skip  ${rel} — ${result.skipped}`);
      continue;
    }

    optimized++;
    totalBefore += result.before;
    totalAfter += result.after;
    const saved = result.before - result.after;
    const pct = ((saved / result.before) * 100).toFixed(0);
    const tag = result.resized ? ` resize→${MAX_WIDTH}px` : "";
    console.log(
      `  ok    ${rel}  ${fmtKB(result.before)} → ${fmtKB(result.after)}  (-${pct}%${tag})`,
    );
  }

  console.log(
    `\n${optimized} Dateien ${DRY ? "würden optimiert" : "optimiert"}, ${skipped} übersprungen.`,
  );
  if (optimized > 0) {
    const saved = totalBefore - totalAfter;
    console.log(
      `Gesamt: ${fmtKB(totalBefore)} → ${fmtKB(totalAfter)}  (gespart: ${fmtKB(saved)}, ${((saved / totalBefore) * 100).toFixed(0)}%)`,
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
