//initialitation of server expres, socket consiguration
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const cors = require('cors');

const Socketss = require('./sockets');
class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //Http server configuration
        this.server = http.createServer(this.app);
        //sockect configuration
        this.io = socketIo(this.server, {/**socket server configuration */ });
    }

    middlewares() {
        // Deploy public directory
        this.app.use(express.static(path.resolve(__dirname,'../public')))

        //CORS
        this.app.use(cors());
    }
    socketConfiguration(){
        //socket = cliente
        new Socketss(this.io);
    }

    execute() {
        //initialation middlewares
        this.middlewares();
        //sockets nitialation
        this.socketConfiguration();

        //init server
        this.server.listen(this.port, () => {
            console.log('server corriendo en puerto', this.port);
        });
    }

}

module.exports = Server;