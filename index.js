//server express and first socket io connection

const express = require('express');
const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', () => { console.log('cliente contectado'); });

// Deploy public directory
app.use(express.static(__dirname + './public'))

server.listen(3001, ()=>{
    console.log('server corriendo en puerto 3001');
});