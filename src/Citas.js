import React, { useState } from "react";

function Citas() {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    nombreMascota: "",
    especie: "",
    fecha: "",
    hora: "",
    motivo: "",
    privacidad: false,
  });

  const [enviado, setEnviado] = useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEnviado(true);
  }

  function handleNuevaCita() {
    setForm({
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      nombreMascota: "",
      especie: "",
      fecha: "",
      hora: "",
      motivo: "",
      privacidad: false,
    });
    setEnviado(false);
  }

  return (
    <section className="vd_citas_principal">

      {/* Encabezado */}
      <div className="vd_citas_encabezado">
        <h5 className="vd_citas_etiqueta">Reserva tu lugar</h5>
        <h1 className="vd_citas_titulo">Agenda una cita médica</h1>
        <p className="vd_citas_descripcion">
          Completa el formulario y nos pondremos en contacto contigo para confirmar
          la fecha y hora de la atención de tu mascota.
        </p>
      </div>

      <div className="vd_citas_contenido">

        {/* Info lateral */}
        <div className="vd_citas_info">
          <div className="vd_citas_info_card">
            <img className="vd_icono_cruz" src="/imagenes/Icono cruz.png" alt="Urgencias" />
            <h4>Urgencias 24/7</h4>
            <p>Para emergencias inmediatas llámanos directamente.</p>
            <strong>(51) 937 522 006</strong>
          </div>

          <div className="vd_citas_info_card">
            <img className="vd_icono_ubicacion" src="/imagenes/Icono Ubicación.png" alt="Ubicación" />
            <h4>Nuestra ubicación</h4>
            <p>Visítanos en nuestra clínica.</p>
            <strong>San Isidro, Lima, Perú</strong>
          </div>

          <div className="vd_citas_horarios">
            <h4>Horarios de atención</h4>
            <div className="vd_citas_horario_fila">
              <span>Lunes – Viernes</span>
              <span>8:00 am – 8:00 pm</span>
            </div>
            <div className="vd_citas_horario_fila">
              <span>Sábado</span>
              <span>9:00 am – 6:00 pm</span>
            </div>
            <div className="vd_citas_horario_fila">
              <span>Domingo</span>
              <span>Solo urgencias</span>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <div className="vd_citas_formulario">
          {enviado ? (
            <div className="vd_citas_confirmacion">
              <div className="vd_citas_check">✓</div>
              <h2>¡Cita registrada!</h2>
              <p>
                Gracias, <strong>{form.nombre}</strong>. Recibimos tu solicitud para
                <strong> {form.nombreMascota}</strong>. Nos comunicaremos pronto para confirmar
                tu cita el <strong>{form.fecha}</strong> a las <strong>{form.hora}</strong>.
              </p>
              <button className="vd_citas_btn_nuevo" onClick={handleNuevaCita}>
                Agendar otra cita
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h3 className="vd_citas_form_titulo">Datos del titular</h3>

              <div className="vd_form_fila">
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="apellido"
                  placeholder="Apellido"
                  value={form.apellido}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="vd_form_fila">
                <input
                  type="email"
                  name="email"
                  placeholder="Correo electrónico"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="telefono"
                  placeholder="Teléfono"
                  value={form.telefono}
                  onChange={handleChange}
                  required
                />
              </div>

              <h3 className="vd_citas_form_titulo">Datos de la mascota</h3>

              <div className="vd_form_fila">
                <input
                  type="text"
                  name="nombreMascota"
                  placeholder="Nombre de la mascota"
                  value={form.nombreMascota}
                  onChange={handleChange}
                  required
                />
                <select
                  name="especie"
                  value={form.especie}
                  onChange={handleChange}
                  required
                >
                  <option value="">Especie</option>
                  <option value="perro">Perro</option>
                  <option value="gato">Gato</option>
                  <option value="ave">Ave</option>
                  <option value="conejo">Conejo</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <h3 className="vd_citas_form_titulo">Fecha y motivo</h3>

              <div className="vd_form_fila">
                <input
                  type="date"
                  name="fecha"
                  value={form.fecha}
                  onChange={handleChange}
                  required
                />
                <input
                  type="time"
                  name="hora"
                  value={form.hora}
                  onChange={handleChange}
                  required
                />
              </div>

              <textarea
                name="motivo"
                placeholder="Describe brevemente el motivo de la consulta..."
                value={form.motivo}
                onChange={handleChange}
                required
              ></textarea>

              <label className="vd_check_privacidad">
                <input
                  type="checkbox"
                  name="privacidad"
                  checked={form.privacidad}
                  onChange={handleChange}
                  required
                />
                Acepto la política de privacidad y el tratamiento de mis datos.
              </label>

              <button type="submit">Confirmar cita</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Citas;
