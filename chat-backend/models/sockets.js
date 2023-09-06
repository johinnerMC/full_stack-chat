const { usuarioOnline } = require("../controllers/sockets");
const { comprobarJWT } = require("../helpers/jwt");


class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', async( socket ) => {

            const [ valido, uid ] = comprobarJWT(socket.handshake.query['x-token']);

            if( !valido ) {
                console.log('socket no identificado');
                return socket.disconnect();
            }

            await usuarioOnline( uid , true);

           // TODO: Validar el JWT
           
           // TODO: saber que usuario esta activo mediante el UID

           // TODO: emitir todos los usuarios conectados

           // TODO: Socket join, uid

           // TODO: EScuchar cuando el cliente manda un mensaje

           // TODO: emiter todos los usuarios conectados

           // TODO: Disconnect
           socket.on('disconnect', async() => {
            console.log('cliente desconectado')
            await usuarioOnline( uid , false);
           })
        });
    }


}


module.exports = Sockets;