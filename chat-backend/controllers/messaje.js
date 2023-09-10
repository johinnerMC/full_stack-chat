const Mensaje = require('../models/mensaje');

const obtenerChat = async(req, res) => {

    try {
        const miId = req.uid;
        const mensajesDeId = req.params.de;

        //console.log(mensajesDeId);

    const last30 = await Mensaje.find({
        $or: [
            {of: miId, for: mensajesDeId},
            {of: mensajesDeId, for: miId}
        ]
    })
    .sort({ createAt: 'asc'})
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