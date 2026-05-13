// HU6 — Contacto
import React, { useState } from 'react';
import './Contacto.css';

const initialForm = { nombre: '', email: '', telefono: '', asunto: 'membresia', mensaje: '' };

export default function Contacto() {
  const [form, setForm]     = useState(initialForm);
  const [enviado, setEnviado] = useState(false);
  const [error, setError]   = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.nombre || !form.email || !form.mensaje) {
      setError('Por favor completa los campos obligatorios.');
      return;
    }
    setEnviado(true);
  };

  return (
    <section id="contacto" className="contacto">
      <div className="container">
        <div className="gold-line" />
        <p className="section-sub">Estamos para ayudarte</p>
        <h2 className="section-title">CON<span>TACTO</span></h2>

        <div className="contacto-grid">
          <div className="contacto-info">
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <strong>Dirección</strong>
                <p>Av. Federalismo 1234, Col. Moderna<br />Guadalajara, Jalisco, México</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">📞</span>
              <div>
                <strong>Teléfono</strong>
                <p>+52 (378) 123-4567</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">✉️</span>
              <div>
                <strong>Correo</strong>
                <p>info@alphafit.mx</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">🕐</span>
              <div>
                <strong>Horario de atención</strong>
                <p>Lun–Vie: 06:00 – 23:00<br />Sáb: 07:00 – 21:00<br />Dom: 08:00 – 18:00</p>
              </div>
            </div>
            <div className="redes-sociales">
              <p className="redes-titulo">Síguenos</p>
              <div className="redes-links">
                <a href="#!" className="red-link">📘 Facebook</a>
                <a href="#!" className="red-link">📸 Instagram</a>
                <a href="#!" className="red-link">▶️ YouTube</a>
              </div>
            </div>
          </div>

          <div className="contacto-form-wrap">
            {enviado ? (
              <div className="form-success">
                <span className="success-icon">✅</span>
                <h3>¡Mensaje enviado!</h3>
                <p>Nos comunicaremos contigo a la brevedad. ¡Gracias por tu interés en Alpha Fit!</p>
                <button className="btn-primary" onClick={() => { setForm(initialForm); setEnviado(false); }} style={{ marginTop: '20px' }}>
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form className="contacto-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label>Nombre completo *</label>
                    <input type="text" name="nombre" value={form.nombre} onChange={handleChange} placeholder="Tu nombre" />
                  </div>
                  <div className="form-group">
                    <label>Correo electrónico *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="tu@correo.com" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Teléfono</label>
                    <input type="tel" name="telefono" value={form.telefono} onChange={handleChange} placeholder="(378) 000-0000" />
                  </div>
                  <div className="form-group">
                    <label>Asunto</label>
                    <select name="asunto" value={form.asunto} onChange={handleChange}>
                      <option value="membresia">Información de membresía</option>
                      <option value="clases">Clases grupales</option>
                      <option value="entrenador">Entrenador personal</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Mensaje *</label>
                  <textarea name="mensaje" value={form.mensaje} onChange={handleChange} placeholder="¿En qué podemos ayudarte?" rows={5} />
                </div>
                {error && <p className="form-error">⚠️ {error}</p>}
                <button type="submit" className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
