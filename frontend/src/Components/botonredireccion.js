import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function useReloadAndRedirect() {
  const [shouldReload, setShouldReload] = useState(false);

  const handleReload = () => {
    setShouldReload(true);
  };

  if (shouldReload) {
    window.location.reload();
  }

  return handleReload;
}

function Boton() {
  const handleReload = useReloadAndRedirect();

  return (
    <div>
      <h1>Mi Página en React</h1>
      <p>Contenido de la página.</p>

      <Link to="/home">
        <button onClick={handleReload}>home</button>
      </Link>
    </div>
  );
}

export default Boton;