import db from "../database/db.js";
import { DataTypes } from "sequelize";

const ReservaModel = db.define('reservas',{
    id:{type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true},
    nombre:{type: DataTypes.STRING},
    fecha:{type: DataTypes.DATE},
    hora:{type: DataTypes.TIME},
})

export default ReservaModel