
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  console.log(req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World \n');
});

server.listen(3000, '127.0.0.1');


var server = http.createServer(function (req, res) {
  console.log(req.url);
  fs.readFile('index.html', function(err, data) {
    if (err) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end("Unable to read file index.html\n");
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data.toString());
    }
  })
})
