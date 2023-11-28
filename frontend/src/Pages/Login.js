import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import validacion from '../Components/LoginValidation'
import Navbar from '../Components/Navbar'
import { Axios } from 'axios'

function Login() {

  const login = ()=> {
    Axios.post("http://localhost:8000/usuario",{
     values: values

    }).then((response)=>{
      console.log(response);
    });
  }

  function useReloadAndRedirect() {
    const [shouldReload, setShouldReload] = useState(false);
    const handleReload = () => {
      setShouldReload(true);
    };
    if (shouldReload) {
      window.location.reload();
    }
    return handleReload;
  }

  const handleReload = useReloadAndRedirect();
  const [values,setValues] = useState({
    correo_electronico:'',
    contraseña:''
  })

  const [errors,setErrors]=useState({})
  const hundleInput=(event)=>{
    setValues(prev=>({...prev,[event.target.name]:[event.target.value]}))
  }

  const hundleSumbit =(event)=>{
    event.preventDefault();
    setErrors(validacion(values));
  }


  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <Navbar/>
      <div className='d-flex justify-content-center align-items-center fondo-login' style={{ height: '100%' }}>
      <div className='p-3 bg-white rounded w-25' style={{ marginTop: '-80px' }}>
      <h2>Bienvenido</h2>
        <form action ="" onSubmit={hundleSumbit}>
          <div className='mb-3'>
            <label htmlFor='correo_electronico'><strong>Email</strong></label>
            <input type='correo_electronico'placeholder='Ingresar Correo' name='correo_electronico'
            onChange={hundleInput} className='form-control rounded-0'/>
            {errors.correo_electronico && <span className='text-danger'>{errors.correo_electronico}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor='password'><strong>Contraseña</strong></label>
            <input type='password'placeholder='Contraseña' name='contraseña'
            onChange={hundleInput} className='form-control rounded-0'/>
            {errors.contraseña && <span className='text-danger'>{errors.contraseña}</span>}
          </div>
          <div className='mb-3'>
          </div>
            <button onClick={login}>Login</button>
            <p>¿No tienes cuenta?</p>
            <Link to="/Registrarte" className='btn btn-dark text-light w-100'onClick={handleReload}>Crear Cuenta</Link>
          </form>
      </div>
    </div>
    </div>
  )
}

export default Login


