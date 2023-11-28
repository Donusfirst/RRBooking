//*modelo de las tablas de phpmyandmin

import db from "../database/db.js";
import { DataTypes } from "sequelize";

const ReservaModel = db.define('reservas',{
    reserva_id:{type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true},
    usuario_id:{type: DataTypes.INTEGER},
    restaurante_id:{type: DataTypes.INTEGER},
    fecha_reserva:{type: DataTypes.DATE},
    hora_reserva:{type: DataTypes.TIME},
    cantidad_personas:{type: DataTypes.INTEGER}
})

export default ReservaModel