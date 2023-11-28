import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const URI = 'http://localhost:8000/usuario';

const CrearUser = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo_electronico, setCorreoElectronico] = useState('');
  const [rol_usuario, setRolUsuario] = useState('');
  const [contraseña, setContraseña]= useState('');
  const [telefono, setTelefono]= useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showEmptyFieldsError, setShowEmptyFieldsError] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const store = async (e) => {
    e.preventDefault();
    if (!nombre || !apellido || !correo_electronico || !rol_usuario) {
      setShowEmptyFieldsError(true);
      return;
    }
    try {
      const response = await axios.post(URI, {
        nombre: nombre,
        apellido: apellido,
        correo_electronico: correo_electronico,
        rol_usuario: rol_usuario,
        contraseña: contraseña,
      telefono: telefono,
      });
      setSuccessMessage('Usuario registrado correctamente.');
      setShowSuccessMessage(true);
      
      // Restablecer los campos del formulario
      setNombre('');
      setApellido('');
      setCorreoElectronico('');
      setRolUsuario('');
      setTelefono('');
      setContraseña('');

    } catch (error) {
      console.error('Error al enviar los datos al servidor:', error);
    }
  };

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

  return (
    <div>
        <h1>Crear Usuario</h1>
      {showSuccessMessage && (
        <div className="alert alert-success" role="alert">
          {successMessage}
          <button onClick={() => setShowSuccessMessage(false)} className="btn btn-secondary">
            x
          </button>
        </div>
      )}
      {showEmptyFieldsError && (
        <div className="alert alert-danger" role="alert">
          Por favor, complete todos los campos antes de crear un usuario.
          <button onClick={() => setShowEmptyFieldsError(false)} className="btn btn-secondary">
            x
          </button>
        </div>
      )}
      <div>
      <form onSubmit={store}>
        <div className='mb-3'>
          <label className='form-label'>Nombre</label>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            type='text'
            className='form-control'
          />
          <label className='form-label'>Apellido</label>
          <input
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            type='text'
            className='form-control'
          />
          <label className='form-label'>Correo Electrónico</label>
          <input
            value={correo_electronico}
            onChange={(e) => setCorreoElectronico(e.target.value)}
            type='text'
            className='form-control'
          />
            <label className='form-label'>Contraseña</label>
          <input
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            type='password'
            className='form-control'
          />
            <label className='form-label'>Numero de Telefono</label>
          <input
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            type='text'
            className='form-control'
          />
          <label className='form-label'>Rol</label>
          <select value={rol_usuario} onChange={(e) => setRolUsuario(e.target.value)} className='form-control'>
            <option value=""></option>
            <option value="admin">Admin</option>
            <option value="usuario">Usuario</option>
          </select>
        </div>
        <button type='submit' className='btn btn-success'>Crear Usuario</button>
        <br />
        <Link to="/Admin" onClick={handleReload} className='btn btn-danger mt-2 mb-2'>
          Volver Atrás
        </Link>
      </form>
        </div>

    </div>
  );
};
export default CrearUser;
