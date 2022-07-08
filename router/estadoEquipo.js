const { Router } = require('express');
const EstadoEquipo = require('../models/EstadoEquipo');

const router = Router();

//LISTAR ESTADO DE EQUIPOS
router.get('/', async function(req,res){
    try {
        const tipos = await EstadoEquipo.find();
        res.send(tipos);
    } catch (error) {
        console.log(error);
        res.send("Ocurrio un error");
    }
});


//Crear ESTADO DE EQUIPO
router.post('/', async function(req,res){
    try {
        console.log(req.body);
        let estadoEquipo = new EstadoEquipo();

        estadoEquipo.nombre = req.body.nombre;
        estadoEquipo.estado = req.body.estado;
        estadoEquipo.fechaCreacion = new Date();
        estadoEquipo.fechaActualizacion = new Date();

        estadoEquipo = await estadoEquipo.save();

        res.send(estadoEquipo);

    } catch (error) {
        console.log(error);
        res.send("Ocurrio un error");
    }
});

router.put('/:estadoEquipoId', async function(req,res){
    try {
        console.log(req.body, req.params);
        let estadoEquipo = await EstadoEquipo.findById(req.params.estadoEquipoId);
        if(!estadoEquipo){
            return res.send('Estado del equipo no existe');
        }
        estadoEquipo.nombre = req.body.nombre;
        estadoEquipo.estado = req.body.estado;
        estadoEquipo.fechaActualizacion = new Date();

        estadoEquipo = await estadoEquipo.save();
        res.send(estadoEquipo);

    } catch (error) {
        console.log(error);
        res.send('Ocurrio un pendejo');
    }
});

module.exports = router;