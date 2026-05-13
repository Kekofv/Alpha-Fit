// HU4 — Servicios
import React from 'react';
import './Servicios.css';

const servicios = [
  { icono: '🏋️', nombre: 'Sala de Pesas',        desc: 'Más de 200 máquinas y equipos de última generación para entrenamiento de fuerza y resistencia.' },
  { icono: '🚴', nombre: 'Cycling / Spinning',    desc: 'Bicicletas estáticas de alta performance con instructores certificados y música motivacional.' },
  { icono: '🥊', nombre: 'Box y Artes Marciales', desc: 'Ring profesional, costales y clases de boxeo, kickboxing y MMA para todos los niveles.' },
  { icono: '🧘', nombre: 'Yoga y Meditación',     desc: 'Sala especializada con ambiente controlado para yoga, pilates y técnicas de relajación profunda.' },
  { icono: '🏃', nombre: 'Zona Cardio',           desc: 'Zona exclusiva de cardio con caminadoras, elípticas y remos de última tecnología.' },
  { icono: '🩺', nombre: 'Nutrición y Salud',     desc: 'Consultas con nutricionistas certificados para diseñar tu plan alimenticio personalizado.' },
  { icono: '👤', nombre: 'Entrenamiento Personal', desc: 'Entrenadores certificados que diseñan rutinas 100% personalizadas a tus objetivos y condición.' },
  { icono: '🛁', nombre: 'Área de Spa y Sauna',   desc: 'Instalaciones de recuperación con sauna finlandesa, vapor y duchas de contraste.' },
];

export default function Servicios() {
  return (
    <section id="servicios" className="servicios">
      <div className="container">
        <div className="gold-line" />
        <p className="section-sub">Lo que ofrecemos</p>
        <h2 className="section-title">NUES<span>TROS SERVICIOS</span></h2>

        <div className="servicios-grid">
          {servicios.map((s, i) => (
            <div className="servicio-card" key={i}>
              <span className="servicio-icono">{s.icono}</span>
              <h3 className="servicio-nombre">{s.nombre}</h3>
              <p className="servicio-desc">{s.desc}</p>
              <div className="servicio-hover-bar" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
