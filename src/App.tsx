import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Consulta from './assets/Getapi'; // Componente de consulta (GET)
import CursoForm from './assets/Postapi'; // Componente de creación de curso (POST)
import Menu from './assets/MenuPrincipal'; // Importamos el nuevo menú
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/consulta" element={<Consulta />} />
          <Route path="/" element={<Menu />} />
          <Route path="/crearcurso" element={<CursoForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
