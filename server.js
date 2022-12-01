const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("'<h1>Hello Node!!!!</h1>");
}

const server = http.createServer(requestListener);
listen(3000);