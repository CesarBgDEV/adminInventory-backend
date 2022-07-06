const { Router } = require('express');
const Marca = require('../models/Marca');

const router = Router();


//Crear Marca
router.post('/', async function(req,res){
    try {
        console.log(req.body);

        //Validar si ya exite la marca
        const existeMarca = await Marca.findOne({ nombre: req.body.nombre });
        console.log('RESPUESTA EXISTE LA MARCA', existeMarca);

        if(existeMarca){
            return res.send("La marca que existe")
        }

        let marca = new Marca();
        marca.nombre = req.body.nombre;
        marca.estado = req.body.estado;
        marca.fechaCreacion = new Date();
        marca.fechaActualizacion = new Date();

        marca = await marca.save();

        res.send(marca);

        
    } catch (error) {
        console.log(error);
        res.send("Ocurrió un error");
    }
    
});


//LISTAR MARCAS
router.get('/', function(req,res){
    res.send('MARCA POST');
});

router.put('/', function(req,res){
    res.send('MARCA PUT');
});

module.exports = router;