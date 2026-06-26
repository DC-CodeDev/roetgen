## Flujo: Navegación por Proyección

> **Estado:** PLANIFICADO — no implementado. Comportamiento definido en `DESIGN_RadWeb.md` secciones 4, 5, 7 y estructura de páginas en sección 13.

El usuario navega desde el home hasta la página de un enfoque específico atravesando tres niveles: región → subregión → enfoque. Todo el routing es estático (SSG).

Secuencia de archivos involucrados, en orden:

1. [[../Archivos/src/pages/index.astro.md]] — renderiza grid de RegionCards; el usuario toca una región.
2. [[../Archivos/src/components/RegionCard.astro.md]] — es un `<a href="/[region]">`, navegación nativa sin JS.
3. [[../Archivos/src/pages/[region].astro.md]] — renderiza SubregionCards filtradas por la región. Breadcrumb: "Inicio / Región".
4. [[../Archivos/src/components/SubregionCard.astro.md]] — enlaza a `/[region]/[subregion]`, muestra conteo de enfoques.
5. [[../Archivos/src/pages/[region]/[subregion].astro.md]] — renderiza EnfoqueCards ordenadas por `orden`. Breadcrumb: "Inicio / Región / Subregión".
6. [[../Archivos/src/components/EnfoqueCard.astro.md]] — enlaza a `/[region]/[subregion]/[slug]`.
7. [[../Archivos/src/pages/[region]/[subregion]/[slug].astro.md]] — renderiza EnfoqueDetail con todos los campos. Breadcrumb: "Inicio / Región / Subregión / Título".
8. [[../Archivos/src/components/EnfoqueDetail.astro.md]] — muestra campos con animación fade in staggered (50ms por campo).

## Notas
- No hay JS de navegación: son `<a>` HTML estándar. Astro genera HTML estático.
- La fuente de datos en cada nivel es `getCollection('enfoques')` filtrado por `region` y/o `subregion`.
- El `Breadcrumb` en `PageLayout` recibe `items[]` del frontmatter del enfoque — `region` y `subregion` están explícitos en el schema.
- El campo `orden` (number, opcional) controla el orden de los enfoques dentro de cada subregión.
