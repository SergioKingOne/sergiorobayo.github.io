// Process public/sergio.jpg → public/sergio-halftone.png
// Inverted Bayer ordered dither: bright pixels (face skin) become opaque ink
// so the face emerges as the halftone shape — dark photo background becomes
// transparent so there's no rectangular block in the rendered hero.
// Run: node scripts/dither-portrait.mjs

import sharp from "sharp";

const SRC = "public/sergio.jpg";
const OUT = "public/sergio-halftone.png";
const TARGET_WIDTH = 1100;

// 8x8 Bayer matrix, normalized to [0..255]
const BAYER = [
  [0, 32, 8, 40, 2, 34, 10, 42],
  [48, 16, 56, 24, 50, 18, 58, 26],
  [12, 44, 4, 36, 14, 46, 6, 38],
  [60, 28, 52, 20, 62, 30, 54, 22],
  [3, 35, 11, 43, 1, 33, 9, 41],
  [51, 19, 59, 27, 49, 17, 57, 25],
  [15, 47, 7, 39, 13, 45, 5, 37],
  [63, 31, 55, 23, 61, 29, 53, 21],
].map((row) => row.map((v) => (v * 256) / 64));

// Step 1: get source dimensions. Wider crop — full upper body for editorial feel.
const meta = await sharp(SRC).metadata();
const srcW = meta.width ?? 896;
const srcH = meta.height ?? 1195;

// Head + shoulders + top of blazer. Stops short of the full torso so the
// face still dominates the frame.
const cropH = Math.round(srcH * 0.75);
const cropW = srcW;
const cropLeft = 0;
const cropTop = 0;

const { data, info } = await sharp(SRC)
  .extract({ left: cropLeft, top: cropTop, width: cropW, height: cropH })
  .resize({ width: TARGET_WIDTH })
  .grayscale()
  .normalise()
  .linear(1.35, -40) // aggressive contrast: face bright, shadows + bg pushed dark
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height } = info;

// Output: opaque BLACK where source pixel is BRIGHTER than the threshold
// (face skin / highlights) — that's the inversion. Everything dark → transparent.
const out = Buffer.alloc(width * height * 4);
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const gray = data[y * width + x];
    const threshold = BAYER[y % 8][x % 8];
    const isInk = gray > threshold; // ← inverted
    const i = (y * width + x) * 4;
    if (isInk) {
      out[i] = 0;
      out[i + 1] = 0;
      out[i + 2] = 0;
      out[i + 3] = 255;
    } else {
      out[i] = 0;
      out[i + 1] = 0;
      out[i + 2] = 0;
      out[i + 3] = 0;
    }
  }
}

await sharp(out, {
  raw: { width, height, channels: 4 },
})
  .png({ compressionLevel: 9, palette: false })
  .toFile(OUT);

console.log(`✓ ${OUT}  ${width}×${height}  (cropped from ${srcW}×${srcH})`);
