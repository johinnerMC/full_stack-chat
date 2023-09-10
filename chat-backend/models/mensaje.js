const { Schema, model } = require("mongoose");


const MensajeSchema = Schema({
    of: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true,
    },
    for: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

MensajeSchema.method('toJSON', function(){
    const { __v, ...object } = this.toObject();
    return object
});

module.exports = model('Mensaje', MensajeSchema);