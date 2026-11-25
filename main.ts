// Midnight Fridge Roast — program/v1 entry.
// Writes one roast line to /output/entry.txt. Deterministic: no network,
// no clock, no randomness. Revised down in-session: the v1 draft ran 269
// chars (over the 200-char gate) with two jokes crowding each other, so the
// clipboard, the pizza detail and the camera/touchscreen bit are cut. One
// turn (sleep-hygiene lecture) + one punchline (bouncer guarding leftovers
// already paid for) remain.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "At midnight my smart fridge locks itself and lectures me about sleep hygiene, like a bouncer guarding the leftovers I already paid for.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
