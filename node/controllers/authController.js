// UsuarioController.js
import UsuarioModel from '../models/usuario.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';




const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Verificar si el usuario existe en la base de datos
    const usuario = await UsuarioModel.findOne({ where: { correo_electronico: email } });

    if (!usuario) {
      return res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
    }

    // Verificar la contraseña
    const passwordMatch = await bcrypt.compare(password, usuario.contrasena);

    if (!passwordMatch) {
      return res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
    }

    // Generar JWT
    const token = jwt.sign(
      { usuario_id: usuario.usuario_id, email: usuario.correo_electronico },
      'tu_secreto',
      {
        expiresIn: '1h',
      }
    );
    


    res.json({ success: true, message: 'Inicio de sesión exitoso', userFound: true, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error interno del servidor' });
  }
};

export { login };

