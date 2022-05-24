//server express and first socket io connection

const express = require('express');
const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server);
//socket = cliente
io.on('connection', (socket) => { 
    //listening event emited by the client
    socket.on('sending-client-message',(data)=>{
        console.log('receiving data from client side',data);
    })

    //receive message from client
    socket.on('client-menssage',(message)=>{
        console.log('mensaje del cliente :', message);

        socket.emit('msg-from-server', message);
    })
});

// Deploy public directory
app.use(express.static(__dirname + '/public'))

server.listen(3001, ()=>{
    console.log('server corriendo en puerto 3001');
});