const validarUsuario = (req) =>{
    const validaciones = [];

    if(!req.body.nombre){
        validaciones.push('nombre es requerido');
    }
    if(!req.body.numero){
        validaciones.push('numero es requerido');
    }
    if(!req.body.puesto){
        validaciones.push('puesto es requerido');
    }
    if(!req.body.estado){
        validaciones.push('estado es requerido');
    }
 
    return validaciones;
}


module.exports = {
    validarUsuario,
};