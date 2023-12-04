// authService.js


const logout = () => {
  localStorage.removeItem('token');
};

const getToken = () => {
  return localStorage.getItem('token');
};

export { logout, getToken };
