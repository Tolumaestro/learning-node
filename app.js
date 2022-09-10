//Core Modules
// -http(for lauching a server and sending requests),
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
});

server.listen(3000);

// https(), fs, path, os
