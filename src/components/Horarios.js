// HU2 — Horarios
import React, { useState } from 'react';
import './Horarios.css';

const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

const clases = [
  { nombre: 'CrossFit',       instructor: 'Carlos R.',  hora: '06:00', duracion: '60 min', dias: ['Lunes','Miércoles','Viernes'],     color: '#e03030' },
  { nombre: 'Yoga',           instructor: 'María L.',   hora: '07:30', duracion: '50 min', dias: ['Martes','Jueves','Sábado'],         color: '#c9a84c' },
  { nombre: 'Spinning',       instructor: 'Luis M.',    hora: '08:00', duracion: '45 min', dias: ['Lunes','Martes','Miércoles','Jueves','Viernes'], color: '#2e75b6' },
  { nombre: 'Funcional',      instructor: 'Ana P.',     hora: '09:30', duracion: '60 min', dias: ['Lunes','Miércoles','Viernes'],     color: '#5a9e6f' },
  { nombre: 'Zumba',          instructor: 'Sofía G.',   hora: '10:00', duracion: '55 min', dias: ['Martes','Jueves'],                  color: '#9b59b6' },
  { nombre: 'Pilates',        instructor: 'Renata V.',  hora: '11:00', duracion: '50 min', dias: ['Lunes','Miércoles','Viernes','Sábado'], color: '#e07b30' },
  { nombre: 'Boxeo',          instructor: 'Miguel F.',  hora: '18:00', duracion: '60 min', dias: ['Martes','Jueves','Sábado'],         color: '#e03030' },
  { nombre: 'Musculación',    instructor: 'David S.',   hora: '19:00', duracion: '90 min', dias: ['Lunes','Martes','Miércoles','Jueves','Viernes'], color: '#c9a84c' },
];

const horarioGym = [
  { dia: 'Lunes – Viernes', hora: '05:30 – 23:00' },
  { dia: 'Sábado',          hora: '06:00 – 21:00' },
  { dia: 'Domingo',         hora: '08:00 – 18:00' },
];

export default function Horarios() {
  const [diaActivo, setDiaActivo] = useState('Lunes');

  const clasesFiltradas = clases.filter(c => c.dias.includes(diaActivo));

  return (
    <section id="horarios" className="horarios">
      <div className="container">
        <div className="gold-line" />
        <p className="section-sub">Planifica tu semana</p>
        <h2 className="section-title">HORA<span>RIOS</span></h2>

        {/* Horario general */}
        <div className="horario-general">
          {horarioGym.map((h, i) => (
            <div className="hg-card" key={i}>
              <span className="hg-dia">{h.dia}</span>
              <span className="hg-hora">{h.hora}</span>
            </div>
          ))}
        </div>

        {/* Clases por día */}
        <h3 className="clases-titulo">Clases grupales</h3>
        <div className="dias-tabs">
          {dias.map(d => (
            <button
              key={d}
              className={`dia-tab${diaActivo === d ? ' active' : ''}`}
              onClick={() => setDiaActivo(d)}
            >
              {d.slice(0, 3)}
            </button>
          ))}
        </div>

        <div className="clases-grid">
          {clasesFiltradas.length > 0 ? clasesFiltradas.map((c, i) => (
            <div className="clase-card" key={i} style={{ '--accent': c.color }}>
              <div className="clase-color-bar" />
              <div className="clase-info">
                <span className="clase-nombre">{c.nombre}</span>
                <span className="clase-instructor">👤 {c.instructor}</span>
                <div className="clase-meta">
                  <span>🕐 {c.hora}</span>
                  <span>⏱ {c.duracion}</span>
                </div>
              </div>
            </div>
          )) : (
            <p className="no-clases">No hay clases programadas este día.</p>
          )}
        </div>
      </div>
    </section>
  );
}
