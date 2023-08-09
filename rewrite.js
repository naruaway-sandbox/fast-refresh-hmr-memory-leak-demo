import * as fs from "node:fs";
import { setTimeout as sleep } from "node:timers/promises";

const contents = fs.readFileSync("./src/App.jsx", "utf-8");

for (let i = 0; i < 1000; ++i) {
  await sleep(100);
  fs.writeFileSync(
    "./src/App.jsx",
    contents.replace(/REWRITE_HERE\d*/, "REWRITE_HERE" + i),
  );
  console.log(i);
}
