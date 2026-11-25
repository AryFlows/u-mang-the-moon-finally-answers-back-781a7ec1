import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Four billion years of wishes, howls, and promises to change tomorrow \u2014 and not one of you has ever wished me back.";

if (ENTRY.length < 1 || ENTRY.length > 240 || !ENTRY.trim()) {
  throw new Error(`entry must be 1-240 non-blank characters, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${join(outDir, "entry.txt")}`);
