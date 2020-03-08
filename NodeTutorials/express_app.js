var express = require('express');

 var app = express();

app.get('/', function(req, res){
  res.send('This is the home page.');
});

app.get('/contact', function(req, res){
  res.send('This is the contact page.');
});

//Route parameters
app.get('/profile/:id', function(req, res){
  res.send ('You requested to see a profile with the id of: ' + req.params.id);
});

//listen on a port
app.listen(3000);
