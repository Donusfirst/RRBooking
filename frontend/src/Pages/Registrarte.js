import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Components/Navbar';
import axios from 'axios';
import Popup from '../Components/ConfirmationMessage';
import validacionRegistro from '../Components/RegistroValidation';
import { useHistory } from 'react-router-dom';



function Registrate() {
  const history = useHistory();
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [errors, setErrors] = useState({});
  
  
  const [values, setValues] = useState({
    nombre: '',
    apellido: '',
    correo_electronico: '',
    contrasena: ''
  });
  
  const redirectToDashboard = () => {
    history.push('/Login');
    window.location.reload();
  };
 

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  
  const closePopup = () => {
    setIsPopupVisible(false);
    redirectToDashboard();
  };
  const openPopup = () => {
    setIsPopupVisible(true);
    setTimeout(() => {
      closePopup();
    }, 1400);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    setErrors(validacionRegistro(values));
    
    
    axios.post('http://localhost:8000/usuario', values)
      .then((res) => {
        console.log('Registro exi toso', res.data);
    
      })
      .catch((err) => {
        console.error('Error en el registro', err);
        setErrors({ server: 'Error en el servidor, inténtalo de nuevo más tarde' });
      });
    openPopup();
    };

  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <Navbar />
      <div className='d-flex justify-content-center align-items-center fondo-login' style={{ height: '100%' }}>
        <div className='p-3 bg-white rounded w-25' style={{ marginTop: '-80px' }}>
          <h2 className="text-center">Registrate</h2>
          <form action="" onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor='nombre'><strong>Ingresa tu Nombre</strong></label>
              <input
                type='text'
                placeholder='Ingresar Nombre'
                name='nombre'
                value={values.nombre}
                onChange={handleInput}
                className='form-control rounded-0'
                />{errors.nombre && <span className='text-danger'> {errors.nombre}</span>}
            </div>
            <div className='mb-3'>
              <label htmlFor='apellido'><strong>Ingresa tu Apellido</strong></label>
              <input
                type='text'
                placeholder='Ingresar Apellido'
                name='apellido'
                value={values.apellido}
                onChange={handleInput}
                className='form-control rounded-0'
              />{errors.apellido && <span className='text-danger'> {errors.apellido}</span>}
            </div>
            <div className='mb-3'>
              <label htmlFor='email'><strong>Email</strong></label>
              <input
                type='email'
                placeholder='Ingresar Correo'
                name='correo_electronico'
                value={values.correo_electronico}
                onChange={handleInput}
                className='form-control rounded-0'
              />{errors.email && <span className='text-danger'> {errors.email}</span>}
            </div>
            <div className='mb-3'>
              <label htmlFor='password'><strong>Contraseña</strong></label>
              <input
                type='password'
                placeholder='Contraseña'
                name='contrasena'
                value={values.contrasena}
                onChange={handleInput}
                className='form-control rounded-0'
              />{errors.password&& <span className='text-danger'> {errors.password}</span>}
            </div>
            {errors.server && <span className='text-danger'>{errors.server}</span>}
            <button type="submit" className='btn btn-success text-light w-100'>Crear Cuenta</button>
            <Popup isVisible={isPopupVisible} onClose={closePopup}>
            <h2>Usuario Creado</h2>
            <p>Redireccionando</p>
            </Popup>
            <p>¿Ya tienes una cuenta?</p>
            <Link to="/login" className='btn btn-dark text-light w-100'>Ingresar</Link>
            
          </form>
          
        </div>
      </div>
    </div>
  );
}

export default Registrate;
