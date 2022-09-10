//Core Modules
// -http(for lauching a server and sending requests),
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  // process.exit(); /*hard coding the server exit */

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first page</title></head>");
  res.write("<body><h1>Hello from my node.js Server</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);

// https(), fs, path, os
