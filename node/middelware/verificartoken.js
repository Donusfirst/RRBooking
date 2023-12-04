import jwt from 'jsonwebtoken';

function verificarToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ mensaje: 'Token faltante' });
  }

  jwt.verify(token, 'tu_clave_secreta', (err, decoded) => {
    if (err) {
      return res.status(401).json({ mensaje: 'Token inválido o expirado' });
    }

    req.usuario = decoded.usuario;
    next(); // Continuar con la siguiente función en la cadena de middleware
  });
}

module.exports = verificarToken;