var http = require('http');

var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');//add utf8

myReadStream.on('data', function(chunk){
  console.log('new chunk received:');
  console.log(chunk);
});

/*
var server = http.createServer(function(req,res){
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Sup ma due');

});

server.listen(3000, '127.0.0.1');
console.log('now listening on port 3000');
*/
