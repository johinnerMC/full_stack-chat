const { Router } = require("express");

// Controladores
const { crearUsuario, login, renewToken } = require("../controllers/auth");


const router = Router();

// Creaer nuevo usuario
router.post('/new', crearUsuario)

// Login
router.post('/', login);

// Revalidar Token
router.get('/renew', renewToken);

module.exports = router;