var express = require('express');
var route = express.Router();
var app = express();

var server = require('http').createServer(app);
var io = require('./server.js')(server);

var bodyParser = require('body-parser');

app.locals.pretty = true;
app.set('view engine', 'pug');
app.set('views', './views');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));

/*********/
/* Route */
/*********/
app.get('/main', function(req, res){
  var userInfo = {
    userName: "heo"
  }
  res.render('main', userInfo);
});
app.get('/robby/:robbyNumber', function(req, res){
  var robbyInfo = {
    robbyNum: req.params.robbyNumber
  }
  res.render('robby' , robbyInfo);
});
app.get('/room/:roomNumber/:roomName', function(req, res){
  var roomInfo = {
    roomNumber: req.params.roomNumber,
    roomName: req.params.roomName
  }
  res.render('room', roomInfo);
});

/**********/
/* socket */
/**********/

server.listen('3000', function(req, res){
  console.log('Connected Server 3000 port!!');
});
