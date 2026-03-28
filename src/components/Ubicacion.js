// HU7 — Ubicación
import React from 'react';
import './Ubicacion.css';

export default function Ubicacion() {
  const lat = 20.6597;
  const lng = -103.3496;
  const mapSrc = `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`;

  return (
    <section id="ubicacion" className="ubicacion">
      <div className="container">
        <div className="gold-line" />
        <p className="section-sub">Encuéntranos</p>
        <h2 className="section-title">UBI<span>CACIÓN</span></h2>
      </div>

      <div className="ubicacion-content">
        <div className="ubicacion-datos">
          <div className="dato-item">
            <span className="dato-icon">📍</span>
            <div>
              <strong>Dirección</strong>
              <p>Av. Federalismo 1234, Col. Moderna<br />Guadalajara, Jalisco, México</p>
            </div>
          </div>
          <div className="dato-item">
            <span className="dato-icon">🚗</span>
            <div>
              <strong>Cómo llegar en auto</strong>
              <p>A 10 min del centro de Guadalajara.<br />Estacionamiento gratuito disponible.</p>
            </div>
          </div>
          <div className="dato-item">
            <span className="dato-icon">🚌</span>
            <div>
              <strong>Transporte público</strong>
              <p>Macrobús línea 1 — parada Federalismo.<br />Rutas 51, 60 y 258 pasan por la puerta.</p>
            </div>
          </div>
          <a
            href={`https://maps.google.com/?q=${lat},${lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Abrir en Google Maps
          </a>
        </div>

        <div className="mapa-wrap">
          <iframe
            title="Ubicación Alpha Fit Gimnasio Guadalajara"
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
