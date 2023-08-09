import * as fs from "node:fs";
import { setTimeout as sleep } from "node:timers/promises";

const targetFilePaths = [
  "./src/app/appdir/page.jsx",
  "./src/App.jsx",
  "./src/pages/App.jsx",
];

const contents = fs.readFileSync(targetFilePath, "utf-8");

for (let i = 0; i < 1000; ++i) {
  await sleep(100);
  fs.writeFileSync(
    targetFilePath,
    contents.replace(/REWRITE_HERE\d*/, "REWRITE_HERE" + i),
  );
  console.log(i);
}
