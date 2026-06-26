# DESIGN — Proyecto Roentgen
`v0.1 | Junio 2026`

---

## 1. Principios visuales

- **Sobriedad técnica**: el contenido manda, el diseño acompaña
- **Dos colores, infinitas variaciones**: todo el sistema vive en el swap crema/azul
- **Mobile first**: cada decisión se toma pensando en 390px primero
- **Animaciones funcionales**: solo si comunican algo (transición de página, hover de estado)
- **Accesibilidad no negociable**: WCAG 2.1 AA en todos los textos

---

## 2. Paleta

| Token | Light | Dark |
|---|---|---|
| `--bg` | `#fef7e5` | `#262948` |
| `--text` | `#262948` | `#fef7e5` |
| `--accent-bg` | `#262948` | `#fef7e5` |
| `--accent-text` | `#fef7e5` | `#262948` |
| `--surface` | `#f7edce` | `#2e3257` |
| `--border` | `#d6d4c8` | `#3d4060` |
| `--muted` | `#7a7e99` | `#9b9fb8` |

Sin gradientes. Sin sombras decorativas. Sin tercer color.

`--surface`: fondo de cards, ligeramente diferenciado de `--bg` para que floten sin sombra.
`--muted` y `--border` son colores sólidos calculados para cumplir ratio 4.5:1 (WCAG AA).

---

## 3. Tipografía

| Rol | Fuente | Peso | Mobile (<640px) | Tablet (640-1024px) | Desktop (>1024px) |
|---|---|---|---|---|---|
| Título home / región | Bebas Neue | 400 | 48px | 56px | 72px |
| Título subregión | Bebas Neue | 400 | 36px | 42px | 48px |
| Título enfoque | Bebas Neue | 400 | 42px | 48px | 56px |
| Nombre de card | Bebas Neue | 400 | 24px | 26px | 28px |
| Label de campo | Outfit | 600 | 12px | 12px | 12px |
| Valor de campo | Outfit | 400 | 15px | 15px | 16px |
| Breadcrumb | Outfit | 400 | 13px | 13px | 13px |
| Navegación / UI | Outfit | 500 | 14px | 14px | 14px |

- `letter-spacing: 0.02em` en Bebas Neue a tamaños grandes (≥42px)
- `letter-spacing: 0.04em` en Bebas Neue a tamaños de card (24-28px)
- Google Fonts: preconnect obligatorio, cargar solo weights necesarios

---

## 4. Cards

### Card de región (Home)
- 2 columnas en mobile y tablet, 4 en desktop
- Grid: `repeat(2, 1fr)` base, `repeat(4, 1fr)` en `min-width: 1024px`
- Proporción aproximada 1:1.2
- Estado default: fondo `--surface`, borde `--border` 1px, texto `--text`
- Estado hover (desktop): fondo `--accent-bg`, texto `--accent-text`, borde `--accent-bg`
- Estado active (touch): mismo swap que hover, dura mientras se presiona
- `@media (hover: none)`: sin hover styles, solo `:active`
- Transición: `background 200ms ease, color 200ms ease, border-color 200ms ease`
- Card activa / sección actual: `border-left: 3px solid var(--text)`

### Card de subregión
- Grid 2 columnas en mobile
- Fondo `--surface`, mismo comportamiento de hover/active
- Muestra: nombre + cantidad de enfoques ("6 enfoques")

### Card de enfoque
- Lista vertical en mobile
- Fondo `--surface`, mismo comportamiento de hover/active
- Muestra: nombre de la proyección (ej: "PA", "OAD")

---

## 5. Página de enfoque

Layout de sección única, scroll vertical.

```
[Breadcrumb]
[Título del enfoque — Bebas Neue grande]
[Divider]

[Campo: Dato Clínico]
[Campo: Receptor de Imagen]
[Campo: Distancia]
[Campo: Técnica]
[Campo: Posición del Paciente]
[Campo: Posición de la Región]
[Campo: Rayo Central]
[Campo: Anatomía Visible]
[Campo: Criterios de Calidad]

[Imagen — si existe]

[Botón: ← Volver]
```

Cada campo:
- Label: Outfit 600 12px, uppercase, letter-spacing 1.5px, color `--muted`
- Valor: Outfit 400 15px, color `--text`
- Separador `--border` entre campos
- Animación de entrada: fade in staggered, 50ms por campo

### Imagen (si existe)
- `<figure>` + `<figcaption>` semántico
- `loading="lazy"`, `width` y `height` explícitos (evita layout shift)
- Tap en mobile abre `<dialog>` nativo con imagen ampliada
- Si imagen falta: placeholder con texto "Sin imagen de referencia" en `--muted`
- `alt` obligatorio en schema (`imagen_alt`)

---

## 6. Header

- Auto-hide en mobile: scroll down → `transform: translateY(-100%)`, scroll up → reaparece
- Transición: `transform 250ms ease`
- Contenido: nombre "PROYECTO ROENTGEN" en Bebas Neue + ícono lupa (búsqueda) + toggle light/dark
- Fondo `--bg` con `backdrop-filter: blur(8px)` y opacidad 90%
- En desktop: fijo en top, sin auto-hide

### Búsqueda (Pagefind)
- Ícono de lupa en header (Lucide `Search`)
- Al hacer tap/click despliega input de búsqueda (no barra permanente)
- Resultados muestran: título del enfoque + subregión + región
- Índice generado en build time por Pagefind — cero JS hasta que el usuario la abre

---

## 7. Breadcrumb

```
Inicio  /  Miembro Superior  /  Mano  /  PA
```

- Outfit 400 13px
- Color `--muted` para separadores y niveles anteriores
- Color `--text` para nivel actual
- Sin fondo, pegado al contenido

---

## 8. Toggle Light/Dark

- Ícono Lucide: `Sun` / `Moon`
- Sin label
- Estado activo: fondo `--accent-bg`, ícono `--accent-text`
- Persistido en `localStorage`
- Implementado en React (`ThemeToggle.tsx`) — necesita cliente para `localStorage`

---

## 9. Animaciones

| Elemento | Animación | Duración |
|---|---|---|
| Hover de card | color swap | 200ms ease |
| Cambio de página | fade in | 300ms ease |
| Toggle light/dark | color de toda la página | 250ms ease |
| Campo en página de enfoque | fade in staggered | 50ms por campo |
| Header auto-hide | transform Y | 250ms ease |
| Dialog de imagen | fade in | 200ms ease |

Sin animaciones de entrada complejas. Sin parallax. Sin scroll animations.

---

## 10. SEO

Cada página de enfoque incluye en `<head>`:

```html
<title>PA — Mano — Miembro Superior | Proyecto Roentgen</title>
<meta name="description" content="Técnica, posición y criterios de calidad para la proyección PA de mano.">
<meta property="og:title" content="PA — Mano | Proyecto Roentgen">
<meta property="og:description" content="...">
```

---

## 11. Print styles

```css
@media print {
  header, .breadcrumb, .btn-volver { display: none; }
  body { background: white; color: black; }
  .enfoque-fields { page-break-inside: avoid; }
}
```

---

## 12. Página 404

- Mantiene estética completa (header, dark mode, fuentes)
- Título en Bebas Neue: "404 — PROYECCIÓN NO ENCONTRADA"
- Link de vuelta a inicio
- Sin contenido adicional

---

## 13. Estructura de archivos Astro

```
src/
├── content/
│   ├── config.ts              ← schema de Content Collections
│   └── enfoques/
│       ├── miembro-superior/
│       │   ├── mano/
│       │   ├── muneca/
│       │   ├── antebrazo/
│       │   ├── codo/
│       │   ├── brazo/
│       │   └── hombro/
│       ├── miembro-inferior/
│       │   ├── pelvis/
│       │   ├── muslo/
│       │   ├── rodilla/
│       │   ├── pierna/
│       │   └── pie/
│       ├── torax/
│       ├── craneo/
│       │   ├── boveda/
│       │   └── macizo-facial/
│       └── abdomen/
├── layouts/
│   ├── BaseLayout.astro        ← html base, fonts, CSS vars
│   └── PageLayout.astro        ← header + breadcrumb + slot
├── pages/
│   ├── index.astro             ← home
│   ├── 404.astro               ← página 404 branded
│   ├── [region].astro          ← página de región
│   └── [region]/
│       ├── [subregion].astro   ← página de subregión
│       └── [subregion]/
│           └── [slug].astro    ← página de enfoque
├── components/
│   ├── RegionCard.astro
│   ├── SubregionCard.astro
│   ├── EnfoqueCard.astro
│   ├── EnfoqueDetail.astro
│   ├── ImageDialog.tsx         ← dialog con showModal/close, necesita cliente React
│   ├── Breadcrumb.astro
│   ├── Header.astro
│   ├── Search.tsx              ← React — Pagefind UI
│   └── ThemeToggle.tsx         ← React — localStorage
└── styles/
    └── global.css              ← CSS vars, reset, fuentes, print
```

---

## 14. CSS Variables (global.css)

```css
:root {
  --bg: #fef7e5;
  --text: #262948;
  --accent-bg: #262948;
  --accent-text: #fef7e5;
  --surface: #f7edce;
  --border: #d6d4c8;
  --muted: #7a7e99;
  --transition-color: 200ms ease;
}

[data-theme="dark"] {
  --bg: #262948;
  --text: #fef7e5;
  --accent-bg: #fef7e5;
  --accent-text: #262948;
  --surface: #2e3257;
  --border: #3d4060;
  --muted: #9b9fb8;
}

body {
  background: var(--bg);
  color: var(--text);
  transition: background var(--transition-color), color var(--transition-color);
  font-family: 'Outfit', sans-serif;
}
```

---

## 15. Content Collections — Schema (config.ts)

```typescript
// Campos obligatorios
titulo: z.string()
region: z.string()
subregion: z.string()

// orden dentro de la subregión
orden: z.number().optional()

// alias para búsqueda (ej: ["PA", "Posteroanterior", "Frontal de mano"])
alias: z.array(z.string()).default([])

// Campos de contenido
dato_clinico: z.string().default("")
receptor: z.string().default("")
distancia: z.string().default("")
tecnica: z.string().default("")
posicion_paciente: z.string().default("")
posicion_region: z.string().default("")
rayo_central: z.string().default("")
anatomia_visible: z.string().default("")
criterios_calidad: z.string().default("")

// Imagen
imagen: z.string().optional()
imagen_alt: z.string().optional()
```

Nota: el `slug` lo genera Astro automáticamente del nombre del archivo. No se declara en el schema.

---

## 16. Fuera de scope v0.1 — reservado para v0.2

- PWA / acceso offline
- Modo estudio (ocultar valores, revelar en tap)
- Favoritos (localStorage)
- Pestaña Calculadora de técnica radiológica

---

*DESIGN Proyecto Roentgen | v0.1 | Junio 2026*
