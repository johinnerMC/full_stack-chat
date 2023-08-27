const Mensaje = require('../models/mensaje');

const obtenerChat = async(req, res) => {

    try {
        const miId = req.uid;
        const mensajesDeId = req.params.de;

    const last30 = await Mensaje.find({
        $or: [
            {de: miId, para: mensajesDeId},
            {de: mensajesDeId, para: miId}
        ]
    })
    .sort({ createAt: 'desc'})
    .limit(30);

    return res.json({
        ok: true,
        messaje: last30
    });

    } catch (error) {
        console.log(error)
        return res.json({
            ok: false,
            messaje: "Id params Erroneo"
        });
    }
}

module.exports = {
    obtenerChat
}