var http = require('http');

var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');//add utf8
var myWriteStream = fs.createWriteStream(__dirname +  '/writeme.txt');


//take the readable sream  and pipe it to  the writeable stream
myReadStream.pipe(myWriteStream);//can only use pipe on readable streams
