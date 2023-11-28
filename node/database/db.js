import { Sequelize } from "sequelize";


const db = new Sequelize('basededatos2','root','12345',{
    host:'localhost',
    dialect:'mysql',
    port: 3307,
})

export default db