import bcrypt from 'bcrypt';
import UsuarioModel from './models/usuario.js';

const updatePasswords = async () => {
  const usuarios = await UsuarioModel.findAll();

  for (const usuario of usuarios) {
    const hashedPassword = bcrypt.hashSync(usuario.contrasena, 10);
    await usuario.update({ contrasena: hashedPassword });
  }

  console.log('Contraseñas actualizadas con éxito.');
};

updatePasswords();