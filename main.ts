// Say What Actually Broke — make.fun one-liner entry.
// Writes one brutally honest error line to /output/entry.txt: the deploy
// went to localhost, so the visitor's browser is now talking to a laptop
// on Dave's desk. No dependencies; plain Node 22.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The line, kept as its two clauses so the mistake and the consequence
// stay readable on their own. Joined with ", " at build time.
const CLAUSES = [
  "We accidentally pushed code pointing to localhost:3000 to production",
  "so your browser is currently trying to talk to a laptop sitting on Dave's desk.",
];

const OUTPUT_PATH = "/output/entry.txt";

function buildLine(): string {
  return CLAUSES.join(", ");
}

function save(line: string, outPath: string): void {
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, line, "utf8");
}

// Self-check: the entry must be one line, non-empty, and within the
// 200-char limit. Fail loudly instead of silently shipping a bad line.
const MAX_LENGTH = 200;

function validate(line: string): void {
  if (line.length === 0 || line.length > MAX_LENGTH) {
    throw new Error(`entry length ${line.length} is outside 1..${MAX_LENGTH}`);
  }
  if (line.includes("\n")) {
    throw new Error("entry must be a single line");
  }
}

const line = buildLine();
validate(line);
save(line, OUTPUT_PATH);
console.log(line);
