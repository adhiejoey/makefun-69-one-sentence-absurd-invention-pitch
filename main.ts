// One-Sentence Absurd Invention Pitch
// Writes a single-sentence pitch for a ridiculous invention to entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const entryFile = join(outDir, "entry.txt");

const pitch =
  "The Polite Sofa: a couch that, whenever it swallows your remote between its cushions, clears its throat and spits it back onto the coffee table with a small apologetic burp.";

// Safety checks: one sentence, plain ASCII, comfortably inside the 220-character cap.
if (pitch.length > 215) {
  throw new Error(`Pitch is ${pitch.length} characters, over the 215 safety cap`);
}
if (!/^[\x20-\x7E]+$/.test(pitch)) {
  throw new Error("Pitch must be plain printable ASCII");
}
if ((pitch.match(/\./g) || []).length !== 1 || !pitch.endsWith(".")) {
  throw new Error("Pitch must be exactly one sentence");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(entryFile, pitch, "utf8");
console.log(`Wrote ${entryFile} (${pitch.length} characters)`);
