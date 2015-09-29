var app = require('express')();
var http = require('http').Server(app);

// Je met socket.io dans le serveur http
var io = require('socket.io')(http);

app.get('/',function(req,res){
   // __dirname supergolobale
    res.sendFile(__dirname + '/index.html');
});

http.listen(3000,function(){
    console.log('listening on *3000');
});

io.on('connection',function(socket){
    var choices ='';
    console.log('a user is connected');
        socket.on('choice',function(what){
            choices += ' '+what;
            console.log('chosen: ' +what);
            socket.emit('choices', choices);
    });
});