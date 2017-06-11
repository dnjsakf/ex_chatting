module.exports = function(server){
  var io = require('socket.io')(server);
  io.sockets.on('connection', function(socket){
    socket.on('login', function(data){

      var name = socket.name = data.userName;
      var nick = socket.nick = data.userNick;

      var connectedInfo = {
        name: socket.name,
        nick: socket.nick
      }
      io.emit('connected', connectedInfo);
      console.log(name, nick);
    });
    socket.on('disconnect', function(data){
      console.log('user disconnect');
    });
  });

  return io;
}
