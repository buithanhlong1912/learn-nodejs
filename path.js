const { readFileSync, writeFileSync } = require("fs"); // methods

const first = readFileSync("./demo/first.txt", "utf8"); // read a file

writeFileSync("./demo/result.txt", "Here is the result", { flag: "a" });
