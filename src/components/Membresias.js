// HU3 — Membresías
import React, { useState } from 'react';
import './Membresias.css';

const planes = [
  {
    nombre: 'BÁSICO',
    precio: { mensual: 299, trimestral: 799, anual: 2699 },
    descripcion: 'Ideal para comenzar tu camino fitness.',
    beneficios: [
      'Acceso a sala de pesas',
      'Horario estándar (6am – 10pm)',
      'Casillero básico',
      '1 evaluación física inicial',
    ],
    noIncluye: ['Clases grupales', 'Área de spa', 'Nutricionista'],
    popular: false,
  },
  {
    nombre: 'PRO',
    precio: { mensual: 499, trimestral: 1349, anual: 4799 },
    descripcion: 'El plan más elegido por nuestros miembros.',
    beneficios: [
      'Acceso completo a todas las áreas',
      'Acceso 24/7',
      'Clases grupales ilimitadas',
      'Casillero premium',
      '2 sesiones con entrenador personal',
      'App de seguimiento incluida',
    ],
    noIncluye: ['Nutricionista', 'Sesiones de spa ilimitadas'],
    popular: true,
  },
  {
    nombre: 'ELITE',
    precio: { mensual: 799, trimestral: 2099, anual: 7499 },
    descripcion: 'La experiencia total sin límites.',
    beneficios: [
      'Todo lo del plan Pro',
      'Entrenador personal ilimitado',
      'Consultas con nutricionista',
      'Acceso a área de spa y sauna',
      'Toallas y amenidades incluidas',
      'Estacionamiento preferente',
      'Invitado gratis 2 veces al mes',
    ],
    noIncluye: [],
    popular: false,
  },
];

export default function Membresias() {
  const [periodo, setPeriodo] = useState('mensual');

  const descuentos = { mensual: '', trimestral: '10% OFF', anual: '25% OFF' };

  return (
    <section id="membresias" className="membresias">
      <div className="container">
        <div className="gold-line" />
        <p className="section-sub">Elige tu plan</p>
        <h2 className="section-title">MEM<span>BRESÍAS</span></h2>

        <div className="periodo-toggle">
          {['mensual', 'trimestral', 'anual'].map(p => (
            <button
              key={p}
              className={`periodo-btn${periodo === p ? ' active' : ''}`}
              onClick={() => setPeriodo(p)}
            >
              {p.charAt(0).toUpperCase() + p.slice(1)}
              {descuentos[p] && <span className="descuento-badge">{descuentos[p]}</span>}
            </button>
          ))}
        </div>

        <div className="planes-grid">
          {planes.map((plan, i) => (
            <div className={`plan-card${plan.popular ? ' popular' : ''}`} key={i}>
              {plan.popular && <div className="popular-badge">MÁS POPULAR</div>}
              <div className="plan-header">
                <h3 className="plan-nombre">{plan.nombre}</h3>
                <div className="plan-precio">
                  <span className="precio-signo">$</span>
                  <span className="precio-num">{plan.precio[periodo].toLocaleString()}</span>
                  <span className="precio-periodo">
                    /{periodo === 'mensual' ? 'mes' : periodo === 'trimestral' ? '3 meses' : 'año'}
                  </span>
                </div>
                <p className="plan-desc">{plan.descripcion}</p>
              </div>

              <ul className="plan-beneficios">
                {plan.beneficios.map((b, j) => (
                  <li key={j} className="beneficio-si">✓ {b}</li>
                ))}
                {plan.noIncluye.map((b, j) => (
                  <li key={j} className="beneficio-no">✕ {b}</li>
                ))}
              </ul>

              <a href="#contacto" className={`plan-btn${plan.popular ? ' plan-btn-gold' : ''}`}>
                Seleccionar plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
