const { Router } = require('express');
const router = Router();
const Usuario = require('../models/Usuario');



//Crear usuario
router.post('/', async function(req,res){
    try{
        console.log(req.body);

        //Validar número empleado
        const existeUsuario = await Usuario.findOne({ numero: req.body.numero });
        console.log('RESPUESTA EXISTE USUARIO: ',existeUsuario);

        if(existeUsuario){
            return res.send("Numero de empleado ya existe");
        }

        let usuario = new Usuario();
        usuario.nombre = req.body.nombre;
        usuario.numero = req.body.numero;
        usuario.puesto = req.body.puesto;
        usuario.estado = req.body.estado;
        usuario.fechaCreacion = new Date();
        usuario.fechaActualizacion = new Date();
    
        usuario =  await usuario.save();
    
        res.send(usuario);

    }catch(error){
        console.log(error);
        res.send('Ocurrio un error')
    }


});


//Listar Usuarios
router.get('/',async function(req,res){
    try{
        const usuarios = await Usuario.find();
        res.send(usuarios);
    }catch(error){
        console.log(error);
        res.send("Ocurrio un error")
    }
});


//Actualizar usuario
router.put('/:usuarioId', async function(req,res){
    try{
        console.log(req.body, req.params);
        let usuario = await Usuario.findById( req.params.usuarioId );
        if(!usuario){
            return res.send('Usuario no existe');
        }


        //Validar número empleado
        let existeUsuario = await Usuario.findOne({ numero: req.body.numero, _id: {$ne: usuario._id} });
        console.log('RESPUESTA EXISTE USUARIO: ',existeUsuario);

        if(existeUsuario){
            return res.send("Numero de empleado ya existe");
        }
        
        usuario.numero = req.body.numero;
        usuario.nombre = req.body.nombre;
        usuario.estado = req.body.estado;
        usuario.fechaActualizacion = new Date();
        usuario =  await usuario.save();
    
        res.send(usuario);

    }catch(error){
        console.log(error);
        res.send('Ocurrio un error')
    }
});

module.exports = router;