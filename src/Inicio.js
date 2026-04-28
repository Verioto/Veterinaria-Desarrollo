import React, { useEffect, useRef, useState } from "react";

function Inicio({ setPaginaActual }) {
  const vd_estadisticas_ref = useRef(null);

  const [vd_animar_estadisticas, setVd_animar_estadisticas] = useState(false);
  const [vd_pacientes, setVd_pacientes] = useState(0);
  const [vd_medicos, setVd_medicos] = useState(0);
  const [vd_opiniones, setVd_opiniones] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          setVd_animar_estadisticas(true);
        }
      },
      { threshold: 0.4 }
    );

    if (vd_estadisticas_ref.current) {
      observer.observe(vd_estadisticas_ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!vd_animar_estadisticas) return;

    let contador_pacientes = 0;
    let contador_medicos = 0;
    let contador_opiniones = 0;

    const intervalo = setInterval(() => {
      if (contador_pacientes < 1500) {
        contador_pacientes += 50;
        if (contador_pacientes > 1500) contador_pacientes = 1500;
        setVd_pacientes(contador_pacientes);
      }

      if (contador_medicos < 12) {
        contador_medicos += 1;
        if (contador_medicos > 12) contador_medicos = 12;
        setVd_medicos(contador_medicos);
      }

      if (contador_opiniones < 200) {
        contador_opiniones += 10;
        if (contador_opiniones > 200) contador_opiniones = 200;
        setVd_opiniones(contador_opiniones);
      }

      if (
        contador_pacientes === 1500 &&
        contador_medicos === 12 &&
        contador_opiniones === 200
      ) {
        clearInterval(intervalo);
      }
    }, 40);

    return () => clearInterval(intervalo);
  }, [vd_animar_estadisticas]);

  return (
    <section className="vd_inicio_principal">
      <div className="vd_fondo_verde"></div>

      <img
        className="vd_perrito_corriendo"
        src="/imagenes/perritosos.gif"
        alt="Perrito corriendo"
      />

      <div className="vd_hero">
        <div className="vd_hero_imagen">
          <img src="/imagenes/perrito.png" />
        </div>

        <div className="vd_hero_texto">
          <h1>Cuidamos cada atención con orden, empatía y confianza</h1>
          <p>
            Somos una propuesta digital orientada a mejorar nuestros servicios,
            especialidades y registro de solicitudes, de manera simple e intuitiva.
            Nuestro objetivo es facilitar el acceso a la información, presentar
            los servicios disponibles y permitir el registro de atenciones de forma
            rápida y ordenada.
          </p>

          <div className="vd_botones_inicio">
            <a className="vd_boton_principal" href="#" onClick={(e) => { e.preventDefault(); setPaginaActual("citas"); }}>
              Reservar cita
            </a>
            <a className="vd_boton_secundario" href="#" onClick={(e) => { e.preventDefault(); setPaginaActual("servicios"); }}>
              Ver servicios
            </a>
          </div>
        </div>
      </div>

      <div className="vd_sobre_nosotros">
        <h5 className="vd_sobre_etiqueta">Sobre Nosotros</h5>
        <h2 className="vd_sobre_titulo">
          Cuidamos de tu mascota en cada detalle
        </h2>
        <p className="vd_sobre_texto">
          Servicios especializados para su salud, bienestar y felicidad.
        </p>

        <div className="vd_sobre_servicios">
          <div className="vd_servicio_card">
            <img
              className="vd_icono_servicio"
              src="/imagenes/Icono tijera.png"
            />
            <h3>Servicio de Estética</h3>
            <p>
              Baños, cortes y cuidado para que tu mascota luzca
              y se sienta increíble.
            </p>
          </div>

          <div className="vd_servicio_card">
            <img
              className="vd_icono_servicio"
              src="/imagenes/Icono cruz.png"
            />
            <h3>Urgencias 24/7</h3>
            <p>
              Atención veterinaria inmediata para emergencias,
              siempre que lo necesiten.
            </p>
          </div>

          <div className="vd_servicio_card">
            <img
              className="vd_icono_servicio"
              src="/imagenes/Icono monedero.png"
            />
            <h3>Venta de alimentos y accesorios</h3>
            <p>
              Nutrición y productos de calidad para el bienestar
              de tu mascota.
            </p>
          </div>
        </div>
      </div>

      <div className="vd_compromiso">
        <div className="vd_compromiso_imagen">
          <img src="/imagenes/doctor.png" />
        </div>

        <div className="vd_compromiso_texto">
          <h2 className="vd_compromiso_titulo">
            Atendemos a tu mascota con amor y profesionalismo.
          </h2>
          <p className="vd_compromiso_descripcion">
            Brindamos atención especializada para garantizar su bienestar en cada etapa
            de su vida. Nuestro equipo está conformado por expertos dedicados a ofrecer
            el mejor cuidado.
          </p>

          <div className="vd_compromiso_lista">
            <p><span>✓</span> Veterinarios altamente capacitados</p>
            <p><span>✓</span> Atención personalizada y cercana</p>
            <p><span>✓</span> Compromiso con la salud y felicidad de tu mascota</p>
          </div>

          <a className="vd_compromiso_boton" href="#" onClick={(e) => { e.preventDefault(); setPaginaActual("citas"); }}>
            Contáctanos
          </a>
        </div>
      </div>

      <div className="vd_estadisticas" ref={vd_estadisticas_ref}>
        <div className="vd_estadistica_item">
          <h3>{vd_pacientes.toLocaleString()}</h3>
          <p>Pacientes al año</p>
        </div>

        <div className="vd_estadistica_item">
          <h3>{vd_medicos}</h3>
          <p>Médicos veterinarios</p>
        </div>

        <div className="vd_estadistica_item">
          <h3>{vd_opiniones}+</h3>
          <p>Opiniones 5 estrellas</p>
        </div>
      </div>

      <div className="vd_testimonios">
        <h2 className="vd_testimonios_titulo">Lo que dicen de nosotros</h2>
        <p className="vd_testimonios_texto">¡Conoce las opiniones de nuestros clientes!</p>

        <div className="vd_testimonios_grid">
          <div className="vd_testimonio_card">
            <div className="vd_testimonio_estrellas">★★★★★</div>
            <p className="vd_testimonio_mensaje">
              Llevé a mi perro por una urgencia y el equipo fue increíble. Lo atendieron rápido
              y con mucho cariño. Ahora es nuestra veterinaria de confianza.
            </p>
            <h4>Alejandro Villegas</h4>
            <span>Tutor de Max</span>
          </div>

          <div className="vd_testimonio_card">
            <div className="vd_testimonio_estrellas">★★★★★</div>
            <p className="vd_testimonio_mensaje">
              No solo cuidan de mi mascota, sino que también ofrecen los mejores alimentos y
              accesorios. ¡Mi perro ama los productos que venden!
            </p>
            <h4>Fernanda Orozco</h4>
            <span>Tutora de Manchitas</span>
          </div>

          <div className="vd_testimonio_card">
            <div className="vd_testimonio_estrellas">★★★★★</div>
            <p className="vd_testimonio_mensaje">
              Siempre traigo a mi gato para sus chequeos y vacunación. Los veterinarios son
              amables y explican todo con detalle. ¡100% recomendados!
            </p>
            <h4>Sebastian Olivares</h4>
            <span>Tutor de Loki</span>
          </div>
        </div>
      </div>

      <div className="vd_contacto">
        <div className="vd_contacto_texto">
          <h2 className="vd_contacto_titulo">
            Disponibles 24/7 para ti y tu mascota.
          </h2>
          <p className="vd_contacto_descripcion">
            Si tienes alguna duda, o deseas tramitar alguna factura, ¡contáctanos!
          </p>

          <div className="vd_contacto_info">
            <div className="vd_contacto_item">
              <img
                className="vd_icono_cruz"
                src="/imagenes/Icono cruz.png"
              />
              <h4>Número de Emergencias</h4>
              <p>Atención 24/7.</p>
              <strong>(51) 937 522 006</strong>
            </div>

            <div className="vd_contacto_item">
              <img
                className="vd_icono_ubicacion"
                src="/imagenes/Icono Ubicación.png"
              />
              <h4>Ubicación</h4>
              <p>Conoce nuestra sucursal.</p>
              <strong>San Isidro, Lima, Perú</strong>
            </div>
          </div>

          <div className="vd_contacto_mapa">
            <iframe
              title="Mapa de San Isidro Lima"
              src="https://www.google.com/maps?q=San%20Isidro%2C%20Lima%2C%20Peru&z=15&output=embed"
              width="100%"
              height="150"
              style={{ border: 0, borderRadius: "16px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="vd_contacto_formulario">
          <div className="vd_form_fila">
            <input type="text" placeholder="Nombre" />
            <input type="text" placeholder="Apellido" />
          </div>

          <input type="email" placeholder="Correo electrónico" />

          <textarea placeholder="Escriba su mensaje aquí..."></textarea>

          <label className="vd_check_privacidad">
            <input type="checkbox" />
            Usted está de acuerdo con nuestra política de privacidad.
          </label>

          <button type="button">Enviar</button>
        </div>
      </div>
    </section>
  );
}

export default Inicio;