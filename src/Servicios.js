import React from "react";

export default function Servicios() {

  const servicios = [
    {
      titulo: "Servicio de Estética",
      texto: "Baños, cortes y cuidado para que tu mascota luzca bien.",
      icono: "✂️"
    },
    {
      titulo: "Urgencias 24/7",
      texto: "Atención veterinaria inmediata para emergencias.",
      icono: "🚑"
    },
    {
      titulo: "Venta de alimentos y accesorios",
      texto: "Productos de calidad para el bienestar de tu mascota.",
      icono: "🛍️"
    }
  ];

  return (
    <div style={{background:"#F4F1EA", padding:"80px 20px", textAlign:"center"}}>
      <p style={{color:"#6F7B4B"}}>Sobre Nosotros</p>
      <h2 style={{color:"#2F3A2F"}}>Cuidamos de tu mascota en cada detalle</h2>
      <p style={{color:"#6B6F6A"}}>
        Servicios especializados para su salud, bienestar y felicidad.
      </p>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",
        gap:"40px",
        maxWidth:"1000px",
        margin:"40px auto"
      }}>
        {servicios.map((s, i) => (
          <div key={i}>
            <div style={{
              background:"#DCE2C8",
              width:"50px",
              height:"50px",
              borderRadius:"50%",
              margin:"auto",
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              fontSize:"22px"
            }}>
              {s.icono}
            </div>

            <h3>{s.titulo}</h3>
            <p style={{color:"#6B6F6A"}}>{s.texto}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
