function validacionRegistro(values){
    let error={}
    const email_patron = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const password_patron= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/

    if (values.nombre === ""){
        error.nombre ="Tiene que ingresar su nombre"

    }
    else {
        error.nombre = ""
    }
    
    if (values.apellido === ""){
        error.apellido ="Tiene que ingresar su apellido"

    }
    else {
        error.apellido = ""
    }
    
    if (values.email === ""){
        error.email ="Tiene que ingresar su correo"
    }
    else {
        error.email=""
    }
    if (values.password === ""){
        error.password ="Tiene que ingresar su password"

    }
    else {
        error.password=""
    }
    return error

}

export default validacionRegistro