// Say What Actually Broke — make.fun one-liner entry.
// The program writes a single honest error line to /output/entry.txt:
// the deploy pointed at localhost, so the user's browser is now
// knocking on a laptop on Dave's desk. No dependencies, Node 22 only.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

function entryLine(): string {
  const whatHappened = "We accidentally pushed code pointing to localhost:3000 to production";
  const consequence =
    "so your browser is currently trying to talk to a laptop sitting on Dave's desk.";
  return `${whatHappened}, ${consequence}`;
}

function main(): void {
  const line = entryLine();
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, line, "utf8");
  console.log(line);
}

main();
