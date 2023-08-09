import * as fs from "node:fs";
import { setTimeout as sleep } from "node:timers/promises";

const targetFilePaths = [
  "./src/app/appdir/page.jsx",
  "./src/App.jsx",
  "./src/pages/App.jsx",
];

// Just edit target files 1000 times with 100ms intervals
for (let i = 0; i < 1000; ++i) {
  await sleep(100);
  for (const filePath of targetFilePaths) {
    const contents = fs.readFileSync(filePath, "utf-8");
    fs.writeFileSync(
      filePath,
      contents.replace(/REWRITE_HERE\d*/, "REWRITE_HERE" + i),
    );
  }
  console.log(i);
}
