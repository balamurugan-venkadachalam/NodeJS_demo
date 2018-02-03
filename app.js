var http = require("http");

http.createServer(function(req, res) {
  res.writeHead(201, {'Content-Type':'text/plain'})
  res.end("Hello World, this is my first node program");
}).listen(3000);

console.log("server is running on port no 3000");

