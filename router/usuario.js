const { Router } = require('express');
const router = Router();
const Usuario = require('../models/Usuario');
const {validarUsuario} = require('../helpers/validar-usuario');
const {validationResult, check} = require('express-validator');



//Crear usuario
router.post('/',
    async function(req,res){
        try{

            const validaciones = validarUsuario(req);
            if(validaciones.length > 0){
                return res.status(400).send(validaciones);
            }
            
            console.log(req.body);

            //Validar número empleado
            const existeUsuario = await Usuario.findOne({ numero: req.body.numero });
            console.log('RESPUESTA EXISTE USUARIO: ',existeUsuario);

            if(existeUsuario){
                return res.status(400).send("Numero de empleado ya existe");
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
            res.status(500).send('Ocurrio un error al consultar usuario')
        }


});


//Listar Usuarios
router.get('/',async function(req,res){
    try{
        const usuarios = await Usuario.find();
        res.send(usuarios);
    }catch(error){
        console.log(error);
        res.status(500).send("Ocurrio un error al consultar usuario")
    }
});


//Actualizar usuario
router.put('/:usuarioId', async function(req,res){
    try{

        const validaciones = validarUsuario(req);
        if(validaciones.length > 0){
            return res.status(400).send(validaciones);
        }

        console.log(req.body, req.params);
        let usuario = await Usuario.findById( req.params.usuarioId );
        if(!usuario){
            return res.status(400).send('Usuario no existe');
        }


        //Validar número empleado
        let existeUsuario = await Usuario.findOne({ numero: req.body.numero, _id: {$ne: usuario._id} });
        console.log('RESPUESTA EXISTE USUARIO: ',existeUsuario);

        if(existeUsuario){
            return res.status(400).send("Numero de empleado ya existe");
        }
        
        usuario.numero = req.body.numero;
        usuario.nombre = req.body.nombre;
        usuario.estado = req.body.estado;
        usuario.fechaActualizacion = new Date();
        usuario =  await usuario.save();
    
        res.send(usuario);

    }catch(error){
        console.log(error);
        res.status(500).send('Ocurrio un error al consultar usuario');
    }
});

module.exports = router;