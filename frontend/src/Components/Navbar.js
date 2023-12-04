  import React, { useState } from 'react';
  import { IconoEmpresa, NavbarContainer, NavbarWrapper, Menu, MenuItem, MenuLink } from './NavbarElements';
  import { TfiAgenda } from "react-icons/tfi";
  import { Link } from 'react-router-dom';



  const Navbar = () => {
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

    const handleReload = useReloadAndRedirect();

    return (
      <>
        <NavbarContainer>
          <NavbarWrapper>
            {/* Logo y nombre en el centro */}
            <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>
              <IconoEmpresa>
                <TfiAgenda size={"1.5em"} onClick={handleReload} />
                <span onClick={handleReload}>RR Booking</span>
              </IconoEmpresa>
            </Link>
            <Menu>
              <MenuItem>
                <MenuLink>
                  <Link to="/Home" onClick={handleReload} style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
                </MenuLink>
                <MenuLink>
                  <Link to="/Registrarte" onClick={handleReload} style={{ textDecoration: 'none', color: 'white' }}>Registrar</Link>
                </MenuLink>
                <MenuLink>
                  <Link to="/Login" onClick={handleReload} style={{ textDecoration: 'none', color: 'white' }}>Login</Link>
                </MenuLink>
                <MenuLink>
                  <Link to="/Reservas" onClick={handleReload} style={{ textDecoration: 'none', color: 'white' }}>Reservas</Link>
                </MenuLink>
              </MenuItem>          
            </Menu>
            {/* Sección de usuario en el lado derecho */}
            
          </NavbarWrapper>
        </NavbarContainer>  
      </>
    );
  };

  export default Navbar;
