var fs = require('fs');

var readme  = fs.readFileSync('readme.txt', 'utf8');

//console.log(readme);

fs.writeFileSync('writeMe.txt', readme);


//Delete files
//fs.unlink('writeMe.txt');
