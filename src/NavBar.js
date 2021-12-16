import React from 'react';
import './navbar.css';
import logo from './Complementos/logo.png';

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="Logo de la pagina" />
        <ul>
          <li>Home</li>
          <li>Pedidos</li>
          <li>Contacto</li>
          <li>¿Quienes Somos?</li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
