function validacion(values){

    
    let error={}
    const email_patron = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const password_patron= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    
    if (values.email === ""){
        error.email ="Tiene que ingresar su correo"

    }
    else if(!email_patron.test(values.email)){
        error.email="El email no coincide"
    }else {
        error.email=""
    }

    if (values.password === ""){
        error.password ="Tiene que ingresar su password"

    }
    else if(!password_patron.test(values.password)){
        error.password="El password no coincide"
    }else {
        error.password=""
    }

    return error

}

export default validacion