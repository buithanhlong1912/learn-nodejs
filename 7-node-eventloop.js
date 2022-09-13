const { readFile, writeFile, write } = require("fs");
const util = require("util");

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);
// const getText = (path) =>
//   new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, text) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(text);
//     });
//   });

// getText("./demo/first.txt")
//   .then((text) => {
//     console.log(text);
//   })
//   .catch((err) => console.log(err));

const start = async () => {
  try {
    const first = await readFilePromise("./demo/first.txt", "utf8");
    const second = await readFilePromise("./demo/second.txt", "utf8");
    await writeFilePromise(
      "./demo/result-mind-grenade.txt",
      `THIS IS AWESOME : { ${first}, ${second} }`,
      { flag: "a" }
    );
    console.log({ first, second });
  } catch (err) {
    console.log(err);
  }
};

start();
