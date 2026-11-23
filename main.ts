// One Line, Zero Use: The Useless Superpower Sprint
// Writes exactly one original line describing a hilariously useless
// superpower to /output/entry.txt. Deterministic, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I can teleport anywhere on Earth in a blink, silently and for free — but only to the exact spot I was standing three seconds ago, and only when absolutely nobody is watching, including me.";

if (LINE.length < 1 || LINE.length > 200) {
  console.error(`Invalid line length: ${LINE.length} characters (must be 1-200).`);
  process.exit(1);
}

if (LINE.trim().length === 0) {
  console.error("Invalid line: only whitespace.");
  process.exit(1);
}

if (LINE.includes("\n") || LINE.includes("\r")) {
  console.error("Invalid line: must be a single line.");
  process.exit(1);
}

// Round-trip check: the line must survive UTF-8 encoding unchanged.
if (Buffer.from(LINE, "utf8").toString("utf8") !== LINE) {
  console.error("Invalid line: not valid UTF-8.");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`OK: wrote one line of ${LINE.length} characters to /output/entry.txt`);
