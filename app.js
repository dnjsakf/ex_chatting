var express = require('express');
var bodyParser = require('body-parser');
var route = express.Router();
var app = express();
var server = require('http').createServer(app);

app.locals.pretty = true;
app.set('view engine', 'pug');
app.set('views', './views');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));

/*********/
/* Route */
/*********/
app.get('/main', function(req, res){
  res.render('main');
});
app.get('/robby/:robbyNumber', function(req, res){
  var robbyNumber = req.params.robbyNumber;
  res.render('robby' , {robbyNum:robbyNumber});
});
app.get('/room/:roomNumber/:roomName', function(req, res){
  var roomNumber = req.params.roomNumber;
  var roomName = req.params.roomName;
  res.render('room', {roomName:roomName, roomNumber:roomNumber});
});

/**********/
/* socket */
/**********/

server.listen('3000', function(req, res){
  console.log('Connected Server 3000 port!!');
});
