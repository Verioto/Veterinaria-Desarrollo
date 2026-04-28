import React from "react";

export default function Especialidades() {

  const especialidades = [
    { titulo:"Medicina preventiva", icono:"🩺" },
    { titulo:"Cirugía veterinaria", icono:"🏥" },
    { titulo:"Dermatología", icono:"🐾" },
    { titulo:"Odontología", icono:"😁" },
    { titulo:"Nutrición animal", icono:"🥗" },
    { titulo:"Laboratorio clínico", icono:"🧪" }
  ];

  return (
    <div style={{padding:"80px 20px", textAlign:"center"}}>
      <h2 style={{color:"#2F3A2F"}}>Nuestras especialidades</h2>
      <p style={{color:"#6B6F6A"}}>
        Atención integral con profesionales capacitados.
      </p>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",
        gap:"30px",
        maxWidth:"1000px",
        margin:"40px auto"
      }}>
        {especialidades.map((e, i) => (
          <div key={i} style={{
            background:"#F4F1EA",
            padding:"25px",
            borderRadius:"10px"
          }}>
            <div style={{fontSize:"28px"}}>{e.icono}</div>
            <h3>{e.titulo}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
