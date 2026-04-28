import React from "react";

export default function Servicios() {
  const servicios = [
    {
      titulo: "Servicio de Estética",
      texto: "Baños, cortes y cuidado para que tu mascota luzca y se sienta increíble.",
      icono: "/imagenes/Icono tijera.png",
    },
    {
      titulo: "Urgencias 24/7",
      texto: "Atención veterinaria inmediata para emergencias, siempre que lo necesiten.",
      icono: "/imagenes/Icono cruz.png",
    },
    {
      titulo: "Venta de alimentos y accesorios",
      texto: "Nutrición y productos de calidad para el bienestar de tu mascota.",
      icono: "/imagenes/Icono monedero.png",
    },
  ];

  const especialidades = [
    { titulo: "Medicina preventiva", icono: "🩺" },
    { titulo: "Cirugía veterinaria", icono: "🏥" },
    { titulo: "Dermatología", icono: "🐾" },
    { titulo: "Odontología veterinaria", icono: "😁" },
    { titulo: "Nutrición animal", icono: "🥗" },
    { titulo: "Laboratorio clínico", icono: "🧪" },
  ];

  return (
    <section className="vd_servicios_principal">

      {/* Hero */}
      <div className="vd_servicios_encabezado">
        <h5 className="vd_servicios_etiqueta">Lo que ofrecemos</h5>
        <h1 className="vd_servicios_titulo">Nuestros servicios</h1>
        <p className="vd_servicios_descripcion">
          Cuidado integral para tu mascota bajo un mismo techo, con profesionales
          comprometidos con su salud y bienestar.
        </p>
      </div>

      {/* Servicios principales */}
      <div className="vd_sobre_nosotros">
        <h5 className="vd_sobre_etiqueta">Servicios principales</h5>
        <h2 className="vd_sobre_titulo">Cuidamos de tu mascota en cada detalle</h2>
        <p className="vd_sobre_texto">Servicios especializados para su salud, bienestar y felicidad.</p>

        <div className="vd_sobre_servicios">
          {servicios.map((s, i) => (
            <div className="vd_servicio_card" key={i}>
              <img className="vd_icono_servicio" src={s.icono} alt={s.titulo} />
              <h3>{s.titulo}</h3>
              <p>{s.texto}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Especialidades */}
      <div className="vd_servicios_especialidades">
        <h5 className="vd_servicios_etiqueta" style={{ textAlign: "center" }}>Especialidades</h5>
        <h2 className="vd_nosotros_seccion_titulo">Atención clínica especializada</h2>
        <p className="vd_nosotros_seccion_texto">
          Contamos con profesionales certificados en distintas áreas de la medicina veterinaria.
        </p>

        <div className="vd_servicios_especialidades_grid">
          {especialidades.map((e, i) => (
            <div className="vd_servicios_especialidad_card" key={i}>
              <div className="vd_servicios_especialidad_icono">{e.icono}</div>
              <h3>{e.titulo}</h3>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
