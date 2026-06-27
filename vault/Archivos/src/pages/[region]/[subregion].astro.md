**Ruta:** `src/pages/[region]/[subregion].astro`

## Responsabilidad
Página dinámica de subregión (`/miembro-superior/mano`, etc.). Lee las carpetas de `src/content/enfoques/[region]/[subregion]/` para detectar subregiones existentes. Lista los enfoques de esa subregión en tarjetas verticales, ordenados por el campo `orden`. Genera rutas para todas las combinaciones región/subregión encontradas en filesystem.

## Exporta
- `getStaticPaths` (función async) — itera `REGION_SLUGS`, lee filesystem con `readdir`, ordena subregiones por `SUBREGION_ORDER`, filtra enfoques de `getCollection` por `region` y `subregion`, los ordena por `orden`

## Importa
- `node:fs/promises` (externo): `readdir`
- `node:path` (externo): `join`
- `astro:content` (externo): `getCollection`
- [[../../../layouts/PageLayout.astro.md]]
- [[../../../lib/regions.ts.md]] — `REGION_SLUGS`, `getRegionName`, `getSubregionName`, `SUBREGION_ORDER`

## Importado por
- (ninguno — es una ruta dinámica Astro)

## Medidas exactas (implementadas)
- Content: `padding: 18px 20px 40px` mobile / `26px 40px 56px` desktop
- Breadcrumb: 3 niveles `[{label:'Inicio', href:'/'}, {label:regionNombre, href:'/{region}'}, {label:subregionNombre, href:null}]`
- Título: Bebas Neue 48px → 56px → 64px, line-height 0.92, letter-spacing 0.02em
- Divider: 1px `var(--border)`, `margin: 14px 0 18px`
- Lista: `flex-direction: column`, gap 8px
- Card: `min-height: 72px`, `padding: 16px 20px`, flex `align-items: center`
- Card name: Bebas Neue 28px letter-spacing 0.04em
- Hover: swap a `--accent-bg / --accent-text`; touch: `:active` mismo swap

## Slug de enfoque
El slug en la URL proviene de `entry.id.split('/').at(-1)`, donde `entry.id` es el path relativo al glob base (ej: `miembro-superior/mano/mano-pa` → slug `mano-pa`).

## Animación de entrada
Igual que `index.astro`: cada `.rg-card` recibe `style="--i: {índice}"` y anima con `@keyframes cardFadeIn` (150ms ease-out, delay `calc(var(--i) * 150ms)`), fade-in + `translateY(8px→0)`.

## Flujos relacionados
- [[../../../../Flujos/Flujo - Navegación por Proyección.md]]
