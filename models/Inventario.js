const { Schema, model } = require("mongoose");

const InventarioSchema = Schema({
    serial: {
        type: String,
        required: true,
    },
    modelo: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    serviceTag:{
        type: String,
    },
    af:{
        type: Number,
    },
    foto: {
        type: String,
        required: true,
    },
    fechaEntrega: {
        type: String,
        required: true,
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: false,
    },
    marca: {
        type: Schema.Types.ObjectId,
        ref: 'Marca',
        required: true,
    },
    tipoEquipo: {
        type: Schema.Types.ObjectId,
        ref: 'TipoEquipo',
        required: true,
    },
    estadoEquipo: {
        type: Schema.Types.ObjectId,
        ref: 'EstadoEquipo',
        required: true,
    },
    fechaCreacion: {
        type: Date,
        required: true,
    },
    fechaActualizacion: {
        type: Date,
        required: true,
    },

});

module.exports = module('Inventario', InventarioSchema);