// Importar módulos usando la sintaxis ESM
import express from 'express';
import cors from 'cors';
import db from './database/db.js';
import usuariorouts from './routs/routsusuarios.js';
import session from 'express-session';
import bodyParser from 'body-parser';
import authRoutes from './routs/authRoutes.js';



// Crear la aplicación Express
const app = express();

// Configurar el middleware para analizar el cuerpo de la solicitud
app.use(bodyParser.json());

// Configurar el middleware para permitir solicitudes desde cualquier origen
app.use(cors());

// Configurar el middleware para analizar el cuerpo de la solicitud en formato JSON
app.use(express.json());


app.use(express.json());
app.use(
  session({
    secret: 'tu_secreto',
    resave: false,
    saveUninitialized: false,
  })
);

app.use('/api', authRoutes);
app.use('/usuario', usuariorouts);


// Intentar autenticar con la base de datos
try {
  await db.authenticate();
  console.log('CONEXIÓN EXITOSA A LA BD');
} catch (error) {
  console.log(`EL ERROR DE CONEXIÓN ES: ${error}`);
}

// Definir una ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor levantado perrras');
});

// Iniciar el servidor en el puerto 8000
app.listen(8000, () =>
  console.log('Servidor en funcionamiento en http://localhost:8000')
);
