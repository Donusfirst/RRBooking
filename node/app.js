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

app.get ('/Registrarte',(req,res)=>{
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const contraseña = req.body.contraseña;
    const correo_electronico = req.body.correo_electronico;
    db.query("INSERT IN TO usuario(nombre,apellido,contraseña,correo_electronico) VALUES (?,?,?,?)",
    [nombre,apellido,contraseña,correo_electronico],
    (err,result)=>{
        console.log(err);
    }

    );
});

app.post('/Login',(req,res)=>{
    const correo_electronico = req.body.correo_electronico;
    const contraseña = req.body.contraseña;
    
    db.query(
        "SELECT * FROM usuarios WHERE correo_electronico = ? AND contraseña = ?",
        [correo_electronico,contraseña],
        (err,result)=>{
            if (err){
                res.send({err:err})
            }
            if (result,length > 0){
                res.send(result);

            }else{
                res.sed({messege: "Error en la convinacion Correo/Contraseña!"})
            }

        }
    );
})

app.listen(8000, ()=>
console.log('server up running in http://localhost:8000')
)