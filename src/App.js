import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Informacion from './components/Informacion';   // HU1
import Horarios from './components/Horarios';         // HU2
import Membresias from './components/Membresias';     // HU3
import Servicios from './components/Servicios';       // HU4
import Galeria from './components/Galeria';           // HU5
import Contacto from './components/Contacto';         // HU6
import Ubicacion from './components/Ubicacion';       // HU7
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Informacion />
        <Horarios />
        <Membresias />
        <Servicios />
        <Galeria />
        <Contacto />
        <Ubicacion />
      </main>
      <Footer />
    </div>
  );
}

export default App;
