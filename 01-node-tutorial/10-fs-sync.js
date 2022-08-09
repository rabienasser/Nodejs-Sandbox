const { readFileSync, writeFileSync } = require("fs");

const firstTxt = readFileSync("./content/first.txt", "utf8");
const secondTxt = readFileSync("./content/second.txt", "utf8");

console.log(`FIRST TEXT: ${firstTxt} + SECOND TEXT: ${secondTxt}`);

writeFileSync(
   // path
   "./content/result-sync.txt",
   //    content
   `Here is the result: ${firstTxt} and ${secondTxt}`
);
