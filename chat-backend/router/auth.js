const { Router } = require("express");

// Controladores
const { crearUsuario, login, renewToken } = require("../controllers/auth");
const { check } = require("express-validator");
const { validarCampos } = require("../middleware/validar-campos");


const router = Router();

// Creaer nuevo usuario
router.post('/new',[
    check('name', 'El name es obligatorio').isString(),
    check('password', 'El password es obligatorio').isString(),
    check('email', 'No es un email valido').isEmail(),
    validarCampos
], crearUsuario)

// Login
router.post('/',[
    check('email', 'El email es obligatorio' ).isEmail(),
    check('password', 'El password es obligatorio' ).not().isEmpty(),
    validarCampos
] ,login);

// Revalidar Token
router.get('/renew', renewToken);

module.exports = router;