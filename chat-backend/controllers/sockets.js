const Mensaje = require('../models/mensaje');
const Usuario = require('../models/usuario')

// Registrar conetcion y desconecion Un usuario
const usuarioOnline = async( uid, online ) => {

    const usuario = await Usuario.findById(uid);
    usuario.online = online;

    await usuario.save();

    return usuario;
}

const getUsuarios = async () => {

   const usuarios = await Usuario
   .find()
   .sort('-online');
   
   return usuarios
}

const grabarMensaje = async( payload ) => {
    try {
        
        const mensaje = new Mensaje( payload );
        await mensaje.save();

        return mensaje;

    } catch (error) {
        console.log(error)
        return false;
    }
}

module.exports = {
    usuarioOnline,
    getUsuarios,
    grabarMensaje
}