import express from "express";
import cors from 'cors';
import db from "./database/db.js"
import usuariorouts from "./routs/routsusuarios.js"


const app = express()

app.use(cors())
app.use(express.json())
app.use('/usuario', usuariorouts)


try {
    await db.authenticate()
    console.log('CONECCION EXITOSA A LA BD')
} catch (error) {
    console.log(`EL ERROR DE CONECCION ES: ${error}`)
}

app.get ('/',(req,res)=>{
   res.send('servidor levantado perrras')
})

app.listen(8000, ()=>
console.log('server up running in http://localhost:8000')
)