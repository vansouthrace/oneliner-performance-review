import { mkdirSync, writeFileSync } from "node:fs";

// Review-form language all the way down: the "stretch goal" is the punchline.
const entry = "Goal for next quarter: read past the first line. Stretch goal: read the second one too.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
console.log(entry);
console.log(`chars: ${entry.length}`);
