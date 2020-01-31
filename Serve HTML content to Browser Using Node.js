var http = require('http');

var fs = require('fs');

var server = http.createServer(function(req, res){

  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/html'});

  var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
  myReadStream.pipe(res);

});

server.listen(3000, '127.0.0.1');

console.log('Now listening on 127.0.0.1:3000');

//Paste the following code into index.html file in current directory
<!DOCTYPE html>
<html>
<head>
  <style>
    body{background: skyblue; font-family: verdana; color: #fff; padding 30px; }
    h1{font-size: 48px; text-transform: uppercase; letter-spacing: 2px; text-align: center;}
    p{font-size: 16px; text-align: center; }
    </style>
</head>
<body>
  <h1> Node JS !</h1>
  <p> Node JS </p>
</body>
</html>
