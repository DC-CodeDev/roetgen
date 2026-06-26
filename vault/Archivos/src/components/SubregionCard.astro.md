**Ruta:** `src/components/SubregionCard.astro`

> ⚠️ **PLANIFICADO — archivo no creado aún.** Spec en [[../../DESIGN_RadWeb.md.md]] sección 4.

## Responsabilidad
Card de subregión: muestra nombre de subregión (Bebas Neue) + conteo de enfoques ("6 enfoques" en `--muted`). Mismo comportamiento hover/active que `RegionCard`. Grid 2 columnas en mobile.

## Exporta
- `SubregionCard` (componente Astro) — Props: `nombre` (string), `slug` (string), `region` (string), `cantidadEnfoques` (number)

## Importa
- (no importa otros componentes del proyecto)

## Importado por
- [[../pages/[region].astro.md]]
