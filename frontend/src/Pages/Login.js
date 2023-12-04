import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios'; // Importa Axios

import Navbar from '../Components/Navbar';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        email,
        password,
      });
      const {token } = response.data;
      localStorage.setItem('token', token);
      console.log(token);
      // Redirige a la página de inicio después de iniciar sesión
      history.push('/home');
      window.location.reload();
      // Lógica adicional después de iniciar sesión, por ejemplo, redireccionar a otra página
      // Puedes usar la función de redirección de React Router o window.location.href 
    } catch (error) {
      console.error(error)
    }
  };  
  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <Navbar />
      <div className='d-flex justify-content-center align-items-center fondo-login' style={{ height: '100%' }}>
        <div className='p-3 bg-white rounded w-25' style={{ marginTop: '-80px' }}>
          <h2>Bienvenido</h2>
          <form action='' onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor='nombre'><strong>Nombre de Usuario</strong></label>
              <input
                type='email'
                placeholder='Ingresar Nombre de Usuario'
                name='nombre'
                className='form-control rounded-0'
                value={email} onChange={(e) => setEmail(e.target.value)}
              />
              
            </div>
            <div className='mb-3'>
              <label htmlFor='contrasena'><strong>Contraseña</strong></label>
              <input
                type="password"
                placeholder='Contraseña'
                name='contrasena'
                className='form-control rounded-0'
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
              />             
            </div>
            <div className='mb-3'></div>
            <button type='submit' className='btn btn-success w-100'>Entrar</button>
            <p>¿No tienes cuenta?</p>
            <Link to='/Registrarte' className='btn btn-dark text-light w-100'>Crear Cuenta</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
