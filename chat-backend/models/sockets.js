const { usuarioOnline, getUsuarios, grabarMensaje } = require("../controllers/sockets");
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
            // Unir al usuario a una sale de socket.io
            socket.join( uid )

           // TODO: Validar el JWT
           
           // TODO: saber que usuario esta activo mediante el UID

           // TODO: emitir todos los usuarios conectados
           this.io.emit('users-list', await getUsuarios())

           // TODO: Socket join, uid

           // TODO: EScuchar cuando el cliente manda un mensaje
           socket.on('personal-message', async ( payload ) => {
            const mensaje = await grabarMensaje( payload );
            this.io.to( payload.for ).emit('personal-message', mensaje ); // emitir a la sala 
            this.io.to( payload.of ).emit('personal-message', mensaje );

           // console.log(JSON.stringify(mensaje) )
           })

           // TODO: emiter todos los usuarios conectados

           // TODO: Disconnect
           socket.on('disconnect', async() => {
            console.log('cliente desconectado')
            await usuarioOnline( uid , false);
            this.io.emit('users-list', await getUsuarios());
           })
        });
    }


}


module.exports = Sockets;