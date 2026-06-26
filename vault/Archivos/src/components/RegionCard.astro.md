**Ruta:** `src/components/RegionCard.astro`

> ⚠️ **PLANIFICADO — archivo no creado aún.** Spec en [[../../DESIGN_RadWeb.md.md]] sección 4.

## Responsabilidad
Card de región para el home: fondo `--surface`, borde 1px `--border`, proporción 1:1.2. Hover con inversión total (color swap 200ms ease). Estado activo con `border-left: 3px solid var(--text)`. En touch: solo `:active`, sin hover styles.

## Exporta
- `RegionCard` (componente Astro) — Props: `nombre` (string), `slug` (string), `activa` (boolean)

## Importa
- (no importa otros componentes del proyecto)

## Importado por
- [[../pages/index.astro.md]]
