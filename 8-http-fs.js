// Http module

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage");
  }

  if (req.url === "/about") {
    res.end("This is about page");
  }
  //   res.write("Welcome to our homepage");
  res.end(`
    <h1>Oops!</h1>
    `);
});

server.listen(5000); // port for server
