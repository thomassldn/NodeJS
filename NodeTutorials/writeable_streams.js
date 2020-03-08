var http = require('http');

var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');//add utf8
var myWriteStream = fs.createWriteStream(__dirname +  '/writeme.txt');


myReadStream.on('data', function(chunk){
  console.log('new chunk received:');
  //console.log(chunk);
  myWriteStream.write(chunk);
});
