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
            ok: true,
            usuario, 
            token
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

    try {
        const {email, password} = req.body;

        const usuarioDB = await Usuario.findOne({email});
        if(!usuarioDB){
            return res.status(400).json({
                ok: false,
                msg: 'Email no encontrado'
            })
        }

        
        const validPassword = bcrypt.compareSync( password, usuarioDB.password )
        if(!validPassword){
            return res.status(400).json({
                ok: false,
                msg: 'Password no es correcto'
            })
        }

        // Generar el JWT
        const token = await generarJWT( usuarioDB.id );

        return  res.json({
            ok: true,
            usuarioDB, 
            token
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
};


const renewToken = async(req, res = response) => {
    
    const uid = req.uid;
    // Generar un nuevo JWT
    const token = await generarJWT( uid );

    // Obtener el usuario por UID
    const usuario = await Usuario.findById( uid );

    res.json({
        ok: true,
        token,
        usuario
    })
}

module.exports = {
    crearUsuario,
    login,
    renewToken

}