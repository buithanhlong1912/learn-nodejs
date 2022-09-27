const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3001;

app.use(morgan("combined"));

app.get("/", (req, res) => {
  return res.send("Hello, world!");
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
