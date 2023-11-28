import React, { useState } from 'react';

function useReloadAndRedirect() {
  const [shouldReload, setShouldReload] = useState(false);
  const [redirectPath, setRedirectPath] = useState('');

  const handleReload = (path) => {
    setRedirectPath(path);
    setShouldReload(true);
  };

  if (shouldReload) {
    // Redirige antes de recargar la página
    window.location.replace(redirectPath);
    return;
  }

  return handleReload;
}

const OverlayButton = () => {
  const handleReload = useReloadAndRedirect();
  const targetRoute = '/reservas';

  return (
    <button className="overlay-button" onClick={() => handleReload(targetRoute)}>
      Reserva Aquí
    </button>
  );
};

export default OverlayButton;
