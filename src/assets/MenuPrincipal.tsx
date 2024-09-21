import React from "react";
import { Link } from "react-router-dom";
import './MenuPrincipal.css'; // Importa los estilos

const Menu = () => {
  return (
    <div className="menu-container">
      <button className="menu-title">Menu</button>
      <Link to="/consulta">
        <button className="menu-button">Consulta Alumno</button>
      </Link>
      <Link to="/crearcurso">
        <button className="menu-button">Ingreso Curso</button>
      </Link>
    </div>
  );
};

export default Menu;