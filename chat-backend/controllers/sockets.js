const Usuario = require('../models/usuario')

// Registrar conetcion y desconecion Un usuario
const usuarioOnline = async( uid, online ) => {

    const usuario = await Usuario.findById(uid);
    usuario.online = online;

    await usuario.save();

    return usuario;
    
}

module.exports = {
    usuarioOnline
}