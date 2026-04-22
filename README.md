# 🏋️ AlphaFit — Sitio Web de Gimnasio

Proyecto desarrollado con metodología **SCRUM** en 3 sprints.  
Materia: Gestión Ágil de Proyectos de Software — Unidad 3

---

## 👥 Equipo

| Rol | Integrante |
|-----|-----------|
| Product Owner | Alexis Alcántar González |
| Desarrollador | Derek Mateo Galaviz Ibarra |
| Equipo | Libni Sinai Barrita Martínez |

---

## 🚀 Cómo correr el proyecto

```bash
npm install
npm start
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 📋 Historias de Usuario por Sprint

### Sprint 1 — (3–7 marzo 2026)
- ✅ HU1: Información del gimnasio (`Informacion.js`)
- ✅ HU2: Horarios con filtro por día (`Horarios.js`)

### Sprint 2 — (10–14 marzo 2026)
- ✅ HU3: Membresías con 3 planes y toggle de precios (`Membresias.js`)
- ✅ HU4: Servicios con íconos por categoría (`Servicios.js`)

### Sprint 3 — (24–29 marzo 2026)
- ✅ HU5: Galería de 12 fotos con filtros y lightbox (`Galeria.js`)
- ✅ HU6: Formulario de contacto con validación (`Contacto.js`)
- ✅ HU7: Ubicación con Google Maps embebido (`Ubicacion.js`)

---

## 🗂️ Estructura del proyecto

```
src/
├── App.js                  # Componente raíz — integra los 7 componentes
├── App.css
├── index.js
├── index.css
└── components/
    ├── Navbar.js/.css      # Navegación responsive con scroll
    ├── Hero.js/.css        # Sección de bienvenida
    ├── Informacion.js/.css # HU1 — Info del gimnasio
    ├── Horarios.js/.css    # HU2 — Horarios y clases
    ├── Membresias.js/.css  # HU3 — Planes de membresía
    ├── Servicios.js/.css   # HU4 — Servicios ofrecidos
    ├── Galeria.js/.css     # HU5 — Galería con lightbox
    ├── Contacto.js/.css    # HU6 — Formulario de contacto
    ├── Ubicacion.js/.css   # HU7 — Mapa Google Maps
    └── Footer.js/.css      # Pie de página
```

---

## 🛠️ Tecnologías

- React.js 18
- CSS3 (sin librerías externas)
- Google Maps Embed API

---

## 📦 Commits por Sprint

```
feat: Sprint 1 — HU1 Informacion.js y HU2 Horarios.js
feat: Sprint 2 — HU3 Membresias.js y HU4 Servicios.js
feat: Sprint 3 — HU5 Galeria.js, HU6 Contacto.js y HU7 Ubicacion.js
```

---

© 2026 AlphaFit — Proyecto SCRUM — Guadalajara, Jalisco
