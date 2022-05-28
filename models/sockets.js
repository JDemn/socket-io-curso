class Socketss {

    constructor(io){
        this.io = io;
        this.socketEvents();
        // sockets = {
        //     idSocket : {}
        // }
    }
    socketEvents(){
        this.io.on('connection', (socket) => { 
            //listening event emited by the client
            // socket.on('sending-client-message',(data)=>{
            //     console.log('receiving data from client side',data);
            // })
        
            //receive message from client
            socket.on('client-menssage',(message)=>{
                console.log('mensaje del cliente :', message);
        
                this.io.emit('msg-from-server', message);
            })
        });
    }
}



module.exports = Socketss;