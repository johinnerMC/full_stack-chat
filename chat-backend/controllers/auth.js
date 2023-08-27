const { response } = require("express");
const Usuario = require('../models/usuario');
const bcrypt = require("bcryptjs/dist/bcrypt");
const { generarJWT } = require("../helpers/jwt");

const crearUsuario = async(req, res = response) => {
    try {
        
        const {email, password} = req.body;

        const existeEmail = await Usuario.findOne({email});
        if(existeEmail){
           return res.status(400).json({
                ok: false,
                msg: 'El correo ya existe'
            })
        }

        const usuario = new Usuario( req.body );

        // encriptar password
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

        // Guardar usuario en DB
        await usuario.save()

        // Generar el JWT
        const token = await generarJWT( usuario.id );

        return  res.json({
            usuario, token
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
};


const login = async(req, res = response) => {

    const {email, password} = req.body;

    res.json({
        ok: true,
        msg: 'login',
        email,
        password
    })
};


const renewToken = async(req, res = response) => {
    res.json({
        ok: true,
        msg: 'renew'
    })
}

module.exports = {
    crearUsuario,
    login,
    renewToken

}