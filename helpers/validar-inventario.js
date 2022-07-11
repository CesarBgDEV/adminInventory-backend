const validarInventario = (req) =>{
    const validaciones = [];

    if(!req.body.serial){
        validaciones.push('Serial es requerido');
    }

    if(!req.body.modelo){
        validaciones.push('modelo es requerido');
    }
    if(!req.body.descripcion){
        validaciones.push('descripcion es requerido');
    }
    if(!req.body.serviceTag){
        validaciones.push('service Tag es requerido');
    }
    if(!req.body.af){
        validaciones.push('af es requerido');
    }
    if(!req.body.foto){
        validaciones.push('foto es requerido');
    }
    if(!req.body.fechaEntrega){
        validaciones.push('fecha de entrega es requerido');
    }
    if(!req.body.usuario){
        validaciones.push('usuario es requerido');
    }
    if(!req.body.marca){
        validaciones.push('marca es requerido');
    }
    if(!req.body.tipoEquipo){
        validaciones.push('tipo de equipo es requerido');
    }
    if(!req.body.estadoEquipo){
        validaciones.push('estado de equipo es requerido');
    }
    return validaciones;
}


module.exports = {
    validarInventario,
};