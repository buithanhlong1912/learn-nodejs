const { readFile, writeFile } = require("fs"); // methods

readFile("./demo/first.txt", "utf8", (err, res) => {
  if (err) {
    console.log(err);
    return;
  }

  const first = res;
  readFile("./demo/first.txt", "utf8", (error, result) => {
    if (error) {
      console.log(error);
      return;
    }
    const second = result;
    writeFile(
      "./demo/result-async.txt",
      "Here is the result",
      { flag: "a" },
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
