function validacion(values){

    
    let error={}
    
    if (values.nombre === ""){
        error.nombre ="Tiene que ingresar su correo"

    }
    else {
        error.nombre=""
    }

    if (values.password === ""){
        error.password ="Tiene que ingresar su password"

    } else {
        error.password=""
    }

    return error

}

export default validacion