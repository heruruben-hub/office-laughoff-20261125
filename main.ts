// One-Line Office Joke Laugh-Off — make.fun entry
// Writes one original one-line office joke to /output/entry.txt

import { mkdirSync, writeFileSync } from "node:fs";
import assert from "node:assert";

const joke =
  "I asked IT for a raise and they told me to turn my salary off and on again.";

assert.ok(joke.length >= 1 && joke.length <= 200, "joke must be 1-200 characters");
assert.ok(!joke.includes("\n"), "joke must be a single line");
assert.ok(joke.trim().length > 0, "joke must not be only whitespace");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
console.log(`Wrote ${joke.length} characters to /output/entry.txt`);
