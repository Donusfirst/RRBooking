import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";

const URI = 'http://localhost:8000/usuario';

const EditarUsuario = () => {
  const [userData, setUserData] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    correo_electronico: '',
    rol_usuario: '',
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showEmptyFieldsError, setShowEmptyFieldsError] = useState(false);

  const history = useHistory();
  const { usuario_id } = useParams();

  useEffect(() => {
    getUsuarioByID();
  }, []);

  const getUsuarioByID = async () => {
    try {
      const res = await axios.get(`${URI}/${usuario_id}`);
      const user = res.data;
      setUserData(user);
    } catch (error) {
      console.error('Error al obtener el usuario por ID:', error);
    }
  };

  const update = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${URI}/${usuario_id}`, userData);

      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
        history.push('/Admin'); // Redirige después de actualizar
      }, 2000); // Muestra el mensaje de éxito durante 2 segundos
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
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
      <h1>Editar Usuario</h1>
      {showSuccessMessage && (
        <div className="alert alert-success" role="alert">
          Usuario actualizado correctamente.
        </div>
      )}
      {showEmptyFieldsError && (
        <div className="alert alert-danger" role="alert">
          Por favor, complete todos los campos antes de actualizar el usuario.
        </div>
      )}
      <div>
        <form onSubmit={update}>
          <div className='mb-3'>
            <label className='form-label'>Nombre</label>
            <input
              value={userData.nombre}
              onChange={(e) => setUserData({ ...userData, nombre: e.target.value })}
              type='text'
              className='form-control'
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Apellido</label>
            <input
              value={userData.apellido}
              onChange={(e) => setUserData({ ...userData, apellido: e.target.value })}
              type='text'
              className='form-control'
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Teléfono</label>
            <input
              value={userData.telefono}
              onChange={(e) => setUserData({ ...userData, telefono: e.target.value })}
              type='text'
              className='form-control'
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Correo Electrónico</label>
            <input
              value={userData.correo_electronico}
              onChange={(e) => setUserData({ ...userData, correo_electronico: e.target.value })}
              type='text'
              className='form-control'
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Rol de Usuario</label>
            <select
              value={userData.rol_usuario}
              onChange={(e) => setUserData({ ...userData, rol_usuario: e.target.value })}
              className='form-control'
            >
              <option value=""></option>
              <option value="admin">Admin</option>
              <option value="usuario">Usuario</option>
            </select>
          </div>
          <button type='submit' className='btn btn-success'>
            Actualizar Usuario
          </button>
          <br />
          <Link to="/Admin" className='btn btn-danger mt-2 mb-2' onClick={handleReload}>
            Volver Atrás
          </Link>
        </form>
      </div>
    </div>
  );
};

export default EditarUsuario;

