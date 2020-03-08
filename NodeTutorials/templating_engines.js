var express = require('express');
var app = express();

app.set('view engine', 'ejs');


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req, res){
  res.sendFile(__dirname + '/contact.html');
});

//Route parameters
app.get('/profile/:name', function(req, res){
  //res.send ('You requested to see a profile with the id of: ' + req.params.id);
  var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
  res.render('profile', {person: req.params.name, data: data});
});

//listen on a port
app.listen(3000);
