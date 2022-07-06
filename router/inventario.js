const { Router } = require('express');

const router = Router();

router.get('/', function(req,res){
    res.send('INVENTARIO GET');
});

router.post('/', function(req,res){
    res.send('INVENTARIO POST');
});

router.put('/', function(req,res){
    res.send('INVENTARIO PUT');
});

module.exports = router;