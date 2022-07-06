const {Schema, model} = require ('mongoose');



const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: true,
    },
    numero:{
        type: Number,
        required: true,
        unique: true,
    },
    puesto:{
        type: String,
        required: true,
    },
    estado:{
        type: String,
        required: true,
        enum: [
            'Activo',
            'Inactivo'
        ]
    },
    fechaCreacion:{
        type: Date,
        required: true,

    },
    fechaActualizacion:{
        type: Date,
        required: true,
    }


});

module.exports = model('Usuario', UsuarioSchema); 