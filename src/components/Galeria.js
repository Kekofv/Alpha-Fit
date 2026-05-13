// HU5 — Galería
import React, { useState } from 'react';
import './Galeria.css';

const categorias = ['Todos', 'Instalaciones', 'Clases', 'Equipamiento', 'Eventos'];

const fotos = [
  { id: 1,  cat: 'Instalaciones', titulo: 'Sala principal de pesas',    color: '#1a1208', emoji: '🏋️' },
  { id: 2,  cat: 'Clases',        titulo: 'Clase de Spinning',          color: '#0d1520', emoji: '🚴' },
  { id: 3,  cat: 'Equipamiento',  titulo: 'Zona de cardio',             color: '#0f1a0f', emoji: '🏃' },
  { id: 4,  cat: 'Clases',        titulo: 'Sesión de Yoga',             color: '#1a1208', emoji: '🧘' },
  { id: 5,  cat: 'Instalaciones', titulo: 'Área de vestuarios',         color: '#150d1a', emoji: '🛁' },
  { id: 6,  cat: 'Equipamiento',  titulo: 'Ring de boxeo',              color: '#1a0d0d', emoji: '🥊' },
  { id: 7,  cat: 'Eventos',       titulo: 'Competencia interna 2025',   color: '#1a1208', emoji: '🏆' },
  { id: 8,  cat: 'Clases',        titulo: 'Entrenamiento funcional',    color: '#0d1a14', emoji: '💪' },
  { id: 9,  cat: 'Instalaciones', titulo: 'Recepción y lobby',          color: '#0d0d1a', emoji: '🏢' },
  { id: 10, cat: 'Eventos',       titulo: 'Clase magistral invitado',   color: '#1a1208', emoji: '⭐' },
  { id: 11, cat: 'Equipamiento',  titulo: 'Mancuernas y accesorios',    color: '#1a0f08', emoji: '🔩' },
  { id: 12, cat: 'Instalaciones', titulo: 'Área de sauna y spa',        color: '#1a1208', emoji: '♨️' },
];

export default function Galeria() {
  const [catActiva, setCatActiva] = useState('Todos');
  const [fotoAmpliada, setFotoAmpliada] = useState(null);

  const fotosFiltradas = catActiva === 'Todos'
    ? fotos
    : fotos.filter(f => f.cat === catActiva);

  return (
    <section id="galeria" className="galeria">
      <div className="container">
        <div className="gold-line" />
        <p className="section-sub">Conoce nuestras instalaciones</p>
        <h2 className="section-title">GA<span>LERÍA</span></h2>

        <div className="galeria-filtros">
          {categorias.map(c => (
            <button
              key={c}
              className={`filtro-btn${catActiva === c ? ' active' : ''}`}
              onClick={() => setCatActiva(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="galeria-grid">
          {fotosFiltradas.map((foto, i) => (
            <div
              className={`foto-card${i === 0 ? ' featured' : ''}`}
              key={foto.id}
              style={{ background: foto.color }}
              onClick={() => setFotoAmpliada(foto)}
            >
              <div className="foto-placeholder">
                <span className="foto-emoji">{foto.emoji}</span>
              </div>
              <div className="foto-overlay">
                <span className="foto-cat">{foto.cat}</span>
                <span className="foto-titulo">{foto.titulo}</span>
                <span className="foto-zoom">🔍 Ver</span>
              </div>
            </div>
          ))}
        </div>
        <p className="galeria-note">
          💡 Las imágenes serán reemplazadas con fotografías reales del gimnasio.
        </p>
      </div>

      {fotoAmpliada && (
        <div className="lightbox" onClick={() => setFotoAmpliada(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setFotoAmpliada(null)}>✕</button>
            <div className="lightbox-img" style={{ background: fotoAmpliada.color }}>
              <span className="lightbox-emoji">{fotoAmpliada.emoji}</span>
            </div>
            <div className="lightbox-info">
              <span className="foto-cat">{fotoAmpliada.cat}</span>
              <h3>{fotoAmpliada.titulo}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
