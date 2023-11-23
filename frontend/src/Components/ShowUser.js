import axios from "axios";
import { useState, useEffect } from "react";
import CrearUser from "./CrearUser";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../";

const URI = 'http://localhost:8000/usuario';

const CompShowUser = () => {
    const [usuario, setUsuario] = useState([]);
    useEffect(() => {
        getUsuario();
    }, []);

    const getUsuario = async () => {
        try {
            const resp = await axios.get(URI);
            setUsuario(resp.data);
        } catch (error) {
            console.error("Error al obtener usuarios:", error);
        }
    }

    const deleteUsuario = async (usuario_id) => {
        try {
            await axios.delete(`${URI}/${usuario_id}`); // Agrega '/' antes de usuario_id
            getUsuario();
        } catch (error) {
            console.error("Error al eliminar usuario:", error);
        }
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

    return (

        <div className="containerU" >
            <div className="row">
                <div className="col">
                <Link to="/Crear" onClick={handleReload} className='btn btn-primary mt-2 mb-2'>Agregar Usuario</Link>
                    <div className="table">
                    <table className=" table-primary">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Telefono</th>
                                <th>Correo Electronico</th>
                                <th>Rol</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuario.map((user) => (
                                <tr key={user.usuario_id}>
                                    <td className="tdusuario">{user.nombre}</td>
                                    <td className="tdusuario">{user.apellido}</td>
                                    <td className="tdusuario">{user.telefono}</td>
                                    <td className="tdusuario">{user.correo_electronico}</td>
                                    <td className="tdusuario">{user.rol_usuario}</td>
                                    <td>
                                        <button onClick={() => deleteUsuario(user.usuario_id)} className="btn btn-danger">Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    );
}

export default CompShowUser;
