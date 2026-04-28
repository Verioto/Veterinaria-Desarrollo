import React from "react";

function Navbar({ paginaActual, setPaginaActual }) {
  return (
    <nav className="barra-menu">
      <a
        className={`menu ${paginaActual === "inicio" ? "menu-activo" : ""}`}
        href="#"
        onClick={(e) => { e.preventDefault(); setPaginaActual("inicio"); }}
      >
        Inicio
      </a>
      <a
        className={`menu ${paginaActual === "nosotros" ? "menu-activo" : ""}`}
        href="#"
        onClick={(e) => { e.preventDefault(); setPaginaActual("nosotros"); }}
      >
        Nosotros
      </a>
      <a
        className={`menu ${paginaActual === "servicios" ? "menu-activo" : ""}`}
        href="#"
        onClick={(e) => { e.preventDefault(); setPaginaActual("servicios"); }}
      >
        Servicios
      </a>
      <a
        className={`menu ${paginaActual === "citas" ? "menu-activo" : ""}`}
        href="#"
        onClick={(e) => { e.preventDefault(); setPaginaActual("citas"); }}
      >
        Citas médicas
      </a>
    </nav>
  );
}

export default Navbar;
