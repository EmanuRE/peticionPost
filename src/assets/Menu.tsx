import { Link } from 'react-router-dom';
import './Menu.css'; // Puedes crear este archivo para darle estilos al menú


const Menu: React.FC = () => {
  return (
    <nav className="menu">
      <ul>
      <li>
          <Link to="/">Menu</Link>
        </li>
        <li>
          <Link to="/consulta">Consulta Estudiantes</Link>
        </li>
        <li>
          <Link to="/crearcurso">Crear Curso</Link>
        </li>
  
      </ul>
    </nav>
  );
};

export default Menu;