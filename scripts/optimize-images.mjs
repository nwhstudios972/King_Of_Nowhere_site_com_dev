#!/usr/bin/env node
// Optimise les images de public/images en place.
// - Convertit en JPEG q82 progressive
// - Redimensionne à max 1600px sur le plus grand côté
// - N'opère que sur les fichiers > THRESHOLD_BYTES
//
// Les originaux restent dans l'historique git si besoin de revert.

import { readdir, stat, readFile, writeFile } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const PROJECT_ROOT = join(__filename, '..', '..');
const IMAGES_DIR = join(PROJECT_ROOT, 'public', 'images');

const THRESHOLD_BYTES = 500 * 1024; // 500 KB
const MAX_DIMENSION = 1600;
const JPEG_QUALITY = 82;
const SUPPORTED = new Set(['.jpg', '.jpeg', '.png', '.webp']);

async function walk(dir) {
  const out = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...(await walk(fullPath)));
    } else if (entry.isFile()) {
      const ext = extname(entry.name).toLowerCase();
      if (SUPPORTED.has(ext)) out.push(fullPath);
    }
  }
  return out;
}

async function optimizeOne(filePath) {
  const before = (await stat(filePath)).size;
  if (before < THRESHOLD_BYTES) return { filePath, skipped: true, before };

  const buf = await readFile(filePath);
  const img = sharp(buf, { failOn: 'none' });
  const meta = await img.metadata();
  const longest = Math.max(meta.width ?? 0, meta.height ?? 0);

  let pipeline = img.rotate(); // honor EXIF orientation
  if (longest > MAX_DIMENSION) {
    pipeline = pipeline.resize({
      width: meta.width >= meta.height ? MAX_DIMENSION : null,
      height: meta.height > meta.width ? MAX_DIMENSION : null,
      fit: 'inside',
      withoutEnlargement: true,
    });
  }
  pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, progressive: true, mozjpeg: true });

  const out = await pipeline.toBuffer();
  // Ne réécrit que si on gagne quelque chose
  if (out.length >= before) {
    return { filePath, skipped: 'no-gain', before, after: out.length };
  }
  await writeFile(filePath, out);
  return { filePath, before, after: out.length, dim: `${meta.width}x${meta.height}` };
}

function fmt(bytes) {
  if (bytes >= 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  if (bytes >= 1024) return (bytes / 1024).toFixed(0) + ' KB';
  return bytes + ' B';
}

const files = await walk(IMAGES_DIR);
let totalBefore = 0;
let totalAfter = 0;
let processed = 0;
let skipped = 0;

for (const file of files) {
  try {
    const r = await optimizeOne(file);
    if (r.skipped) {
      skipped++;
      totalBefore += r.before;
      totalAfter += r.before;
      continue;
    }
    processed++;
    totalBefore += r.before;
    totalAfter += r.after;
    const rel = file.replace(PROJECT_ROOT + '/', '');
    const saved = (((r.before - r.after) / r.before) * 100).toFixed(0);
    console.log(`✓ ${rel} — ${fmt(r.before)} → ${fmt(r.after)} (-${saved}%) ${r.dim || ''}`);
  } catch (e) {
    console.error(`✗ ${file} — ${e.message}`);
  }
}

console.log('\n— Résumé —');
console.log(`Fichiers scannés : ${files.length}`);
console.log(`Optimisés        : ${processed}`);
console.log(`Ignorés (< seuil): ${skipped}`);
console.log(`Avant : ${fmt(totalBefore)}`);
console.log(`Après : ${fmt(totalAfter)}`);
console.log(`Gain  : ${fmt(totalBefore - totalAfter)} (${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(0)}%)`);
