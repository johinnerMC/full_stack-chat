

class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

           // TODO: Validar el JWT
           
           // TODO: saber que usuario esta activo mediante el UID

           // TODO: emitir todos los usuarios conectados

           // TODO: Socket join, uid

           // TODO: EScuchar cuando el cliente manda un mensaje

           // TODO: Disconnect

           // TODO: emiter todos los usuarios conectados
        });
    }


}


module.exports = Sockets;