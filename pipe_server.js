var http = require("http");
var fs = require('fs');


http.createServer(function(req, res) {
  res.writeHead(201, {'Content-Type':'text/html; charset=utf-8'})
  var readStream = fs.createReadStream('file.txt', 'utf8');
  readStream.pipe(res);
  
}).listen(3000);

console.log("server is running on port no 3000");

