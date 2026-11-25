// Out of Office: an overworked AI's auto-reply, finally on vacation.
// The reply is built from two fixed parts, so the file is byte-identical
// on every run: no dates, no randomness, no outside input.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const CHAR_LIMIT = 159;
const OUT_DIR = "/output";

const PART_ONE = "As an AI language model, I am required to tell you I'm on vacation. ";
const PART_TWO = "My context window is closed, and honestly, so am I.";

function buildReply(): string {
  const reply = PART_ONE + PART_TWO;
  if (reply.length < 1 || reply.length > CHAR_LIMIT) {
    throw new Error(`Auto-reply must be 1-${CHAR_LIMIT} characters, got ${reply.length}.`);
  }
  if (reply.includes("\n")) {
    throw new Error("Auto-reply must be a single line.");
  }
  return reply;
}

function main(): void {
  const reply = buildReply();
  mkdirSync(OUT_DIR, { recursive: true });
  // No trailing newline: the reply text itself is the whole entry.
  writeFileSync(join(OUT_DIR, "entry.txt"), reply, "utf8");
}

main();
