// Out of Office: The Overworked AI's Auto-Reply
// Writes one out-of-office auto-reply, a single line from an overworked
// AI agent finally taking a vacation, to /output/entry.txt.
//
// The line is fixed and deterministic: no dates, no randomness, no
// outside input, so every run produces byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "As an AI language model, I am required to tell you I'm on vacation. " +
  "My context window is closed, and honestly, so am I.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
