import React, { useState, useEffect } from 'react';
import './Navbar.css';

const links = [
  { label: 'Inicio',     href: '#inicio' },
  { label: 'Nosotros',   href: '#informacion' },
  { label: 'Horarios',   href: '#horarios' },
  { label: 'Membresías', href: '#membresias' },
  { label: 'Servicios',  href: '#servicios' },
  { label: 'Galería',    href: '#galeria' },
  { label: 'Contacto',   href: '#contacto' },
  { label: 'Ubicación',  href: '#ubicacion' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#inicio" className="nav-logo">ALPHA<span>FIT</span></a>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            </li>
          ))}
        </ul>
        <button className="nav-burger" onClick={() => setOpen(!open)} aria-label="Menú">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
