const { Router } = require('express');
const Inventario = require('../models/Inventario');

const router = Router();


//LISTAR INVENTARIO
router.get('/', async function(req,res){
    try {
        const inventario = await Inventario.find();
        res.send(inventario);
    } catch (error) {
        console.log(error);
        res.send("Ocurrio un error");
    }
});

router.post('/', function(req,res){
    res.send('INVENTARIO POST');
});

router.put('/', function(req,res){
    res.send('INVENTARIO PUT');
});

module.exports = router;