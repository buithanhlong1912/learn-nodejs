const { readFile, writeFile } = require("fs"); // methods

readFile("./demo/first.txt", (err, res) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(res);
});
