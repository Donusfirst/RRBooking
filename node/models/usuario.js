//*modelo de las tablas de phpmyandmin

import db from "../database/db.js";
import { DataTypes } from "sequelize";

const UsuarioModel = db.define('usuarios',{
    usuario_id:{type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true},
    rol_usuario:{type: DataTypes.STRING, },
    nombre:{type: DataTypes.STRING},
    apellido:{type: DataTypes.STRING, },
    correo_electronico:{type: DataTypes.STRING},
    contrasena:{type: DataTypes.STRING},
    telefono:{type: DataTypes.STRING, },
})


export default UsuarioModel;