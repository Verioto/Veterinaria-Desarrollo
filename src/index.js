import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from "./Navbar";
import Inicio from "./Inicio";
import Nosotros from "./Nosotros";
import Servicios from "./Servicios";
import Citas from "./Citas";
import Footer from "./Footer";
import "./Estilo.css";

function App() {
  const [paginaActual, setPaginaActual] = useState("inicio");

  return (
    <React.StrictMode>
      <Navbar paginaActual={paginaActual} setPaginaActual={setPaginaActual} />
      {paginaActual === "inicio" && <Inicio setPaginaActual={setPaginaActual} />}
      {paginaActual === "nosotros" && <Nosotros />}
      {paginaActual === "servicios" && <Servicios />}
      {paginaActual === "citas" && <Citas />}
      <Footer setPaginaActual={setPaginaActual} />
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals();
