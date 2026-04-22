// HU1 — Información del Gimnasio
import React from 'react';
import './Informacion.css';

const stats = [
  { num: '8+',  label: 'Años de experiencia' },
  { num: '500+',label: 'Miembros activos' },
  { num: '20+', label: 'Instructores certificados' },
  { num: '24/7',label: 'Acceso disponible' },
];

export default function Informacion() {
  return (
    <section id="informacion" className="informacion">
      <div className="container">
        <div className="info-grid">
          <div className="info-text">
            <div className="gold-line" />
            <p className="section-sub">Quiénes somos</p>
            <h2 className="section-title">El GIM<span>NASIO</span><br />que te impulsa</h2>
            <p className="info-p">
              PowerFit Gimnasio nació con una misión clara: ofrecer un espacio de alta calidad
              donde cada persona pueda alcanzar su máximo potencial físico y mental. Contamos
              con instalaciones de primer nivel, equipo de última generación y un equipo de
              profesionales comprometidos con tu progreso.
            </p>
            <p className="info-p">
              Desde 2016, hemos acompañado a cientos de personas en su transformación.
              Ya seas principiante o atleta avanzado, aquí encontrarás el ambiente y las
              herramientas que necesitas para superarte cada día.
            </p>
            <a href="#membresias" className="btn-primary" style={{ marginTop: '24px', display: 'inline-block' }}>
              Únete ahora
            </a>
          </div>

          <div className="info-stats">
            {stats.map((s, i) => (
              <div className="stat-card" key={i}>
                <span className="stat-num">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
