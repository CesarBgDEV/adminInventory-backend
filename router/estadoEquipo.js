const { Router } = require('express');

const router = Router();

router.get('/', function(req,res){
    res.send('ESTADO EQUIPO GET');
});

router.post('/', function(req,res){
    res.send('ESTADO EQUIPO POST');
});

router.put('/', function(req,res){
    res.send('ESTADO EQUIPO PUT');
});

module.exports = router;