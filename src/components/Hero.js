import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-bg">
        <div className="hero-overlay" />
      </div>
      <div className="hero-content container">
        <p className="hero-pre">Bienvenido a</p>
        <h1 className="hero-title">
          ALPHA<span>FIT</span>
          <br />GIMNASIO
        </h1>
        <p className="hero-desc">
          Transforma tu cuerpo. Fortalece tu mente. Supera tus límites.
        </p>
        <div className="hero-btns">
          <a href="#membresias" className="btn-primary">Ver Membresías</a>
          <a href="#informacion" className="btn-outline">Conocer más</a>
        </div>
      </div>
      <div className="hero-scroll">
        <span>scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
