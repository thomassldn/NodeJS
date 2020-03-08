var http = require('http');

var fs = require('fs');

var server = http.createServer(function(req, res){

  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'application/json'});

  var myObj = {

    name: 'Ryu',
    job: 'Ninja',
    age: 29
  }

  res.end(JSON.stringify(myObj)); //res send back string or a buffer, so make the object a string to be able to send it background



});

server.listen(3000, '127.0.0.1');

console.log('Now listening on 127.0.0.1:3000');
