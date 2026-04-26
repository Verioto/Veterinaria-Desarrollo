import React from "react";

function Footer() {
  return (
    <footer className="vd_footer">
      <div className="vd_footer_contenido">
        <div className="vd_footer_superior">
          <div className="vd_footer_logo">
            <h3>Veterinaria Desarrollo</h3>
            <p>Cuidamos a tu mascota con confianza.</p>
          </div>

          <div className="vd_footer_menu">
            <a href="">¿Quiénes somos?</a>
            <a href="">Servicios</a>
            <a href="">Nuestros clientes</a>
            <a href="">Contacto</a>
          </div>
        </div>

        <div className="vd_footer_linea"></div>

        <div className="vd_footer_inferior">
          <p>© 2026 Veterinaria Desarrollo. Todos los derechos reservados.</p>
          <a href="">Términos y condiciones</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;