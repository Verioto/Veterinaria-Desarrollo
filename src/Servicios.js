import React from "react";

const serviciosData = [
  {
    title: "Servicio de Estética",
    desc: "Baños, cortes y cuidado para que tu mascota luzca y se sienta increíble.",
    icon: "✂️",
  },
  {
    title: "Urgencias 24/7",
    desc: "Atención veterinaria inmediata para emergencias, siempre que lo necesiten.",
    icon: "🚑",
  },
  {
    title: "Venta de alimentos y accesorios",
    desc: "Nutrición y productos de calidad para el bienestar de tu mascota.",
    icon: "🛍️",
  },
];

export default function Servicios() {
  return (
    <section className="servicios">
      <div className="container">
        <p className="overline">Sobre Nosotros</p>
        <h2>Cuidamos de tu mascota en cada detalle</h2>
        <p className="subtitle">
          Servicios especializados para su salud, bienestar y felicidad.
        </p>

        <div className="grid">
          {serviciosData.map((item, i) => (
            <div key={i} className="card">
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .servicios{
          background:#F4F1EA;
          padding:90px 20px;
          text-align:center;
        }
        .container{
          max-width:1100px;
          margin:auto;
        }
        .overline{
          color:#6F7B4B;
          font-weight:600;
          margin-bottom:10px;
        }
        h2{
          color:#2F3A2F;
          font-size:34px;
          margin-bottom:10px;
        }
        .subtitle{
          color:#6B6F6A;
          margin-bottom:50px;
        }
        .grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:40px;
        }
        .card{
          background:transparent;
          padding:10px 20px;
        }
        .icon{
          width:55px;
          height:55px;
          margin:0 auto 15px;
          background:#DCE2C8;
          border-radius:50%;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:24px;
        }
        h3{
          color:#2F3A2F;
          font-size:18px;
          margin-bottom:8px;
        }
        .card p{
          color:#6B6F6A;
          font-size:14px;
        }

        @media(max-width:900px){
          .grid{ grid-template-columns:repeat(2,1fr); }
        }
        @media(max-width:600px){
          .grid{ grid-template-columns:1fr; }
          h2{ font-size:28px; }
        }
      `}</style>
    </section>
  );
}
