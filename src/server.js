var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/index.html');
});

app.get("/:path", function(req, res){
    res.sendFile(__dirname + "/client/" +req.params.path);
    
});

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });

    socket.on("send message",function(data) {
        console.log(data);
        io.emit("msg",data);
    });
  });  

http.listen(process.env.PORT || 4000);
  console.log('listening');