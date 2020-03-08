var fs = require('fs');

//make directories
//fs.mkdirSync('stuff');

//fs.rmdirSync('stuff');

fs.mkdir('stuff', function(){

    fs.readFile('readMe.txt', 'utf8', function(err,data){

      fs.writeFile('./stuff/writeMe.txt', data);
    });

});


//delete directory
fs.unlink('./stuff/writeMe.txt',function(){
  fs.rmdir('stuff');
});
