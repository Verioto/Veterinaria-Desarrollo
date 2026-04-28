import React from "react";

function Nosotros() {
  const valores = [
    {
      icono: "/imagenes/Icono cruz.png",
      titulo: "Salud primero",
      texto: "La salud de tu mascota es nuestra prioridad. Cada atención está respaldada por protocolos clínicos rigurosos.",
    },
    {
      icono: "/imagenes/Icono tijera.png",
      titulo: "Cuidado integral",
      texto: "Desde consultas preventivas hasta estética y nutrición, cubrimos todas las necesidades de tu compañero.",
    },
    {
      icono: "/imagenes/Icono monedero.png",
      titulo: "Accesibilidad",
      texto: "Servicios de calidad a precios justos, porque el bienestar animal no debería tener barreras.",
    },
  ];

  const equipo = [
    {
      nombre: "Dra. Mariana Torres",
      especialidad: "Medicina General y Urgencias",
    },
    {
      nombre: "Dr. Carlos Mendoza",
      especialidad: "Cirugía Veterinaria",
    },
    {
      nombre: "Dra. Valeria Ríos",
      especialidad: "Dermatología y Nutrición",
    },
  ];

  return (
    <section className="vd_nosotros_principal">

      {/* Hero nosotros */}
      <div className="vd_nosotros_hero">
        <div className="vd_nosotros_hero_texto">
          <h5 className="vd_nosotros_etiqueta">Quiénes somos</h5>
          <h1 className="vd_nosotros_titulo">
            Una clínica con vocación, experiencia y corazón
          </h1>
          <p className="vd_nosotros_descripcion">
            Somos una clínica veterinaria comprometida con el bienestar animal.
            Nacimos con el objetivo de ofrecer atención de calidad, cercana y accesible
            para cada mascota y su familia. Nuestro equipo de profesionales trabaja
            con dedicación, empatía y los más altos estándares clínicos.
          </p>
        </div>
        <div className="vd_nosotros_hero_imagen">
          <img src="/imagenes/doctores.jpg" alt="Equipo veterinario" />
        </div>
      </div>

      {/* Misión y Visión */}
      <div className="vd_nosotros_mision_vision">
        <div className="vd_nosotros_mv_card">
          <h5 className="vd_nosotros_etiqueta">Nuestra misión</h5>
          <h2 className="vd_nosotros_mv_titulo">Cuidar con propósito</h2>
          <p className="vd_nosotros_mv_texto">
            Brindar atención veterinaria integral, humana y de calidad que mejore
            la calidad de vida de las mascotas y tranquilice a sus familias, siendo
            siempre un aliado confiable en cada etapa.
          </p>
        </div>

        <div className="vd_nosotros_mv_divider"></div>

        <div className="vd_nosotros_mv_card">
          <h5 className="vd_nosotros_etiqueta">Nuestra visión</h5>
          <h2 className="vd_nosotros_mv_titulo">Ser referentes en bienestar animal</h2>
          <p className="vd_nosotros_mv_texto">
            Consolidarnos como la clínica veterinaria de mayor confianza en la región,
            reconocida por la excelencia de nuestros profesionales, la calidez de nuestra
            atención y nuestro compromiso con la salud animal.
          </p>
        </div>
      </div>

      {/* Valores */}
      <div className="vd_nosotros_valores">
        <h5 className="vd_nosotros_etiqueta" style={{ textAlign: "center" }}>Nuestros valores</h5>
        <h2 className="vd_nosotros_seccion_titulo">Lo que nos define</h2>
        <p className="vd_nosotros_seccion_texto">
          Principios que guían cada atención y cada decisión en nuestra clínica.
        </p>

        <div className="vd_nosotros_valores_grid">
          {valores.map((v, i) => (
            <div className="vd_nosotros_valor_card" key={i}>
              <img className="vd_icono_servicio" src={v.icono} alt={v.titulo} />
              <h3>{v.titulo}</h3>
              <p>{v.texto}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Compromisos */}
      <div className="vd_nosotros_compromiso">
        <div className="vd_nosotros_compromiso_imagen">
          <img src="/imagenes/doctor.png" alt="Veterinario con mascota" />
        </div>
        <div className="vd_nosotros_compromiso_texto">
          <h5 className="vd_nosotros_etiqueta">Por qué elegirnos</h5>
          <h2 className="vd_nosotros_mv_titulo">
            Más de 10 años cuidando a quienes más quieres
          </h2>
          <p className="vd_nosotros_mv_texto">
            Nuestra trayectoria nos respalda. Hemos acompañado a miles de familias
            en los momentos más importantes de la vida de sus mascotas.
          </p>
          <div className="vd_compromiso_lista">
            <p><span>✓</span> Atención 24/7 para urgencias</p>
            <p><span>✓</span> Equipo certificado y en constante formación</p>
            <p><span>✓</span> Instalaciones modernas y equipadas</p>
            <p><span>✓</span> Historial clínico digital de tu mascota</p>
          </div>
        </div>
      </div>

      {/* Equipo */}
      <div className="vd_nosotros_equipo">
        <h5 className="vd_nosotros_etiqueta" style={{ textAlign: "center" }}>El equipo</h5>
        <h2 className="vd_nosotros_seccion_titulo">Conoce a nuestros especialistas</h2>
        <p className="vd_nosotros_seccion_texto">
          Profesionales apasionados por la salud animal.
        </p>

        <div className="vd_nosotros_equipo_grid">
          {equipo.map((m, i) => (
            <div className="vd_nosotros_equipo_card" key={i}>
              <div className="vd_nosotros_equipo_avatar">
                {m.nombre.charAt(0)}
              </div>
              <h3>{m.nombre}</h3>
              <span>{m.especialidad}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default Nosotros;
