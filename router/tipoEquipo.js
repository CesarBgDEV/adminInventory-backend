const { Router } = require('express');

const router = Router();

router.get('/', function(req,res){
    res.send('TIPO EQUIPO GET');
});

router.post('/', function(req,res){
    res.send('TIPO EQUIPO POST');
});

router.put('/', function(req,res){
    res.send('TIPO EQUIPO PUT');
});

module.exports = router;