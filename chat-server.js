var express = require('express');
var socket  = require('socket.io');

var app = express();
var io  = socket.listen( app.listen(8080) );

app.get('/', function(req, res){
    res.sendFile( __dirname + '/Chat.html' );
});

io.sockets.on('connection', function(client){
    console.log('Client connected');

    client.on('sendMessage', function(data){
        console.log('Recieve message: ', data);
        client.broadcast.emit('pullMessage', data);
    });
});
