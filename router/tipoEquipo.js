const { Router } = require('express');
const TipoEquipo = require('../models/TipoEquipo');
const {validarTipoEquipo} = require('../helpers/validar-tipoEquipo');

const router = Router();

router.get('/', async function(req,res){
    try {
        const tipos = await TipoEquipo.find();
        res.send(tipos);
    } catch (error) {
        console.log(error);
        res.status(500).send("Ocurrio un error al consultar tipo de equipo");
    }
});

router.post('/', async function(req,res){
    try {
        
        const validaciones = validarTipoEquipo(req);
        if(validaciones.length > 0){
            return res.status(400).send(validaciones);
        }

        console.log(req.body);
        let tipoEquipo = new TipoEquipo();

        tipoEquipo.nombre = req.body.nombre;
        tipoEquipo.estado = req.body.estado;
        tipoEquipo.fechaCreacion = new Date();
        tipoEquipo.fechaActualizacion = new Date();

        tipoEquipo = await tipoEquipo.save();

        res.send(tipoEquipo);
    } catch (error) {
        console.log(error);
        res.status(500).send("Ocurrio un error al consultar tipo de equipo");
    }
});

router.put('/:tipoEquipoId', async function(req,res){
    try {

        const validaciones = validarTipoEquipo(req);
        if(validaciones.length > 0){
            return res.status(400).send(validaciones);
        }

        console.log(req.body, req.params);
        let tipoEquipo = await TipoEquipo.findById(req.params.tipoEquipoId);

        if(!tipoEquipo){
            return res.status(400).send('Tipo de equipo no existe');
        }

        tipoEquipo.nombre = req.body.nombre;
        tipoEquipo.estado = req.body.estado;
        tipoEquipo.fechaActualizacion = new Date();

        tipoEquipo = await tipoEquipo.save();
        res.send(tipoEquipo);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error al consultar tipo de equipo');
    }
});

router.get('/:tipoEquipoId', async function(req,res){
    try {
        const  tipoEquipo = await TipoEquipo.findById(req.params.tipoEquipo);
        if(!tipoEquipo){
            return res.status(400).send('Tipo de equipo no existe');
        }
        res.send(tipoEquipo);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error al consultar tipo de equipo')
    }
})

module.exports = router;