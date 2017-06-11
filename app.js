var express = require('express');
var route = express.Router();
var app = express();
var server = require('http').createServer(app);

app.set('view engine', 'pug');
app.set('views', './views');

app.set(express.static('public'));

app.get('/main', function(req, res){
  res.send('This is robby');
});

app.get('/robby', function(req, res){
  res.send('test');
});

server.listen('3000', function(req, res){
  console.log('Connected Server 3000 port!!');
});
