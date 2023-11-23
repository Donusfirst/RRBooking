import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom/cjs/react-router-dom.min';

const URI = 'http://localhost:8000/usuario';

const CrearUser = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo_electronico, setCorreoElectronico] = useState('');
  const [rol_usuario, setRolUsuario] = useState('');
  const [contraseña, setContraseña]= useState('');
  const [telefono, setTelefono]= useState('');
  
  const navigate = useNavigate()
  const id=useParams()

  const update = async (e)=>{
    e.preventDefoult()
    await axios.put(URI+id,{
        nombre: nombre,
        apellido: apellido,
        correo_electronico: correo_electronico,
        rol_usuario: rol_usuario,
        contraseña: contraseña

    })
    navigate('/')
    
    useEffect(()=>{
        getUserbyid()
    },[])
    
    const getUserbyid= async ()=>{
        await axios.get(URI+usuario_id)
        setNombre(res.data.nombre)
        setApellido(res.data.apellido)
        setContraseña(res.data.contraseña)
        setCorreoElectronico(res.data.correo_electronico)
        setRolUsuario(res.data.rol_usuario)
        setTelefono(res.data.telefono)
    }

    return(
        <form onSubmit={update}>
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

    )

}


export default EditUser