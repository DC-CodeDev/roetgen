**Ruta:** `src/components/Header.astro`

> ⚠️ **PLANIFICADO — archivo no creado aún.** Spec en [[../../DESIGN_RadWeb.md.md]] sección 6.

## Responsabilidad
Header fijo con auto-hide en mobile (transform translateY en scroll down, reaparece en scroll up, 250ms ease). Contenido: "PROYECTO ROENTGEN" en Bebas Neue (izq.) + ícono lupa + `ThemeToggle` (der.). Backdrop-filter blur 8px, fondo `--bg` 90% opacidad. Sin auto-hide en desktop.

## Exporta
- `Header` (componente Astro)
  - Script inline para el auto-hide: listener de scroll, compara `scrollY` con posición anterior

## Importa
- [[./ThemeToggle.tsx.md]] — isla React (`client:load`)
- [[./Search.tsx.md]] — isla React (`client:idle`)
- Lucide React (externo): `Search`

## Importado por
- [[../layouts/PageLayout.astro.md]]

## Flujos relacionados
- [[../../../Flujos/Flujo - Toggle Light-Dark Mode.md]]
- [[../../../Flujos/Flujo - Búsqueda Pagefind.md]]
