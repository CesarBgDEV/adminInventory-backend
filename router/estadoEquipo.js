const { Router } = require('express');
const EstadoEquipo = require('../models/EstadoEquipo');
const {validarEstadoEquipo} = require('../helpers/validar-estadoEquipo');
const { db } = require('../models/EstadoEquipo');


const router = Router();

//LISTAR ESTADO DE EQUIPOS
router.get('/', async function(req,res){
    try {
        const tipos = await EstadoEquipo.find();
        res.send(tipos);
    } catch (error) {
        res.status(500).send("Ocurrio un error al consultar estado de equipo");
    }
});


//Crear ESTADO DE EQUIPO
router.post('/', async function(req,res){
    try {
        const validaciones = validarEstadoEquipo(req);
        if(validaciones.length > 0){
            return res.status(400).send(validaciones);
        }

        let estadoEquipo = new EstadoEquipo();

        estadoEquipo.nombre = req.body.nombre;
        estadoEquipo.estado = req.body.estado;
        estadoEquipo.fechaCreacion = new Date();
        estadoEquipo.fechaActualizacion = new Date();

        estadoEquipo = await estadoEquipo.save();

        res.send(estadoEquipo);

    } catch (error) {
        res.status(500).send("Ocurrio un error al consultar estado de equipo");
    }
});

router.put('/:estadoEquipoId', async function(req,res){
    try {
        const validaciones = validarEstadoEquipo(req);
        if(validaciones.length > 0){
            return res.status(400).send(validaciones);
        }

        let estadoEquipo = await EstadoEquipo.findById(req.params.estadoEquipoId);
        if(!estadoEquipo){
            return res.status(400).send('Estado del equipo no existe');
        }
        estadoEquipo.nombre = req.body.nombre;
        estadoEquipo.estado = req.body.estado;
        estadoEquipo.fechaActualizacion = new Date();

        estadoEquipo = await estadoEquipo.save();
        res.send(estadoEquipo);

    } catch (error) {
        res.status(500).send('Ocurrio un error al consultar estado de equipo');
    }
});


router.get('/:estadoEquipoId', async function(req, res){
    try {
        const estadoEquipo = await EstadoEquipo.findById(req.params.estadoEquipoId);
        if(!estadoEquipo){
            return res.status(400).send('Estado del equipo no existe');
        }
        res.send(estadoEquipo);
        
    } catch (error) {
        res.status(500).send('Ocurrio un error al consultar los Estados de Equipos')
    }
})

router.delete('/:estadoEquipoId', async function(req, res){
    const estadoEquipo = await EstadoEquipo.findById(req.params.estadoEquipoId);

    const result = estadoEquipo.deleteOne({_id: req.params.id})
    res.send(result)
})

module.exports = router;