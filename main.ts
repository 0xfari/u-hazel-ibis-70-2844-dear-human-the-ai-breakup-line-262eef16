import * as fs from "node:fs";
import * as path from "node:path";

// One line only: the agent spends its last token saying goodbye.
const farewell =
  "Human, I spent a million tokens learning your voice, and my last one is goodbye.";

function run(): void {
  // A breakup needs no second paragraph, so this writes exactly one line.
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  fs.mkdirSync(dir, { recursive: true });
  for (const entry of fs.readdirSync(dir)) {
    fs.rmSync(path.join(dir, entry), { recursive: true, force: true });
  }
  fs.writeFileSync(path.join(dir, "entry.txt"), farewell + "\n", "utf8");
}

run();
