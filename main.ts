// Two Lines to Your Past Self — make.fun entry
// Writes exactly two lines to /output/entry.txt.
// Deterministic: fixed text, no input, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE_1 =
  "Don't say 'I'm fine' when the nurse asks twice in the cold white room on the morning of your eighteenth birthday.";
const LINE_2 =
  "That lie bought you three quiet years, and by the time you told the truth, the treatment that could have saved you was already too late.";

const ENTRY = `${LINE_1}\n${LINE_2}\n`;

// Gate check (defensive, mirrors the competition gate): 1-280 chars,
// exactly two lines, one sentence per line.
const body = ENTRY.replace(/\n$/, "");
const lines = body.split("\n");
if (body.length < 1 || body.length > 280) {
  throw new Error(`entry length ${body.length} outside 1-280 characters`);
}
if (lines.length !== 2) {
  throw new Error(`entry has ${lines.length} lines, expected exactly 2`);
}
if (body.trim().length === 0) {
  throw new Error("entry is only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${body.length} chars, ${lines.length} lines)`);
