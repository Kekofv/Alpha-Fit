import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">ALPHA<span>FIT</span></span>
          <p>Transforma tu cuerpo.<br />Fortalece tu mente.</p>
        </div>
        <div className="footer-links">
          <strong>Navegación</strong>
          <a href="#informacion">Nosotros</a>
          <a href="#horarios">Horarios</a>
          <a href="#membresias">Membresías</a>
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto</a>
        </div>
        <div className="footer-links">
          <strong>Contacto</strong>
          <span>📍 Av. Fitness 123, Tepatitlán</span>
          <span>📞 +52 (378) 123-4567</span>
          <span>✉️ info@powerfit.mx</span>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Alpha Fit — Proyecto SCRUM — Alexis · Libni · Derek</p>
      </div>
    </footer>
  );
}
