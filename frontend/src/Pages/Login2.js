// Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        email,
        password,
      });
      const { token } = response.data;
      
      
        // Almacena el token en el estado o en el almacenamiento local
        localStorage.setItem('token', token);

        // Lógica adicional después de iniciar sesión, por ejemplo, redireccionar a otra página
        // Puedes usar la función de redirección de React Router o window.location.href
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>Contraseña:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <button type="submit">Iniciar sesión</button>
      
    </form>
  );
};

export default Login;
