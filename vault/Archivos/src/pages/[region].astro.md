**Ruta:** `src/pages/[region].astro`

## Responsabilidad
Página dinámica de región. Lee las subcarpetas de `src/content/enfoques/[region]/` con `readdir` para generar la lista de subregiones. Cuenta enfoques existentes por subregión via `getCollection`. Genera 5 rutas estáticas (una por región de `REGION_SLUGS`).

## Exporta
- `getStaticPaths` (función async) — itera `REGION_SLUGS`, lee filesystem para subregiones, cuenta entradas con `getCollection`

## Importa
- `node:fs/promises` (externo): `readdir`
- `node:path` (externo): `join` — ruta via `process.cwd()` (más confiable que `import.meta.url` con nombres de archivo que contienen `[]`)
- `astro:content` (externo): `getCollection`
- [[../../layouts/PageLayout.astro.md]]
- [[../../lib/regions.ts.md]] — `REGION_SLUGS`, `getRegionName`, `getSubregionName`, `SUBREGION_ORDER`

## Importado por
- (ninguno — es una ruta dinámica Astro)

## Medidas exactas (del diseño de referencia)
- Content: `padding: 18px 20px 40px` mobile / `26px 40px 56px` desktop
- Breadcrumb: proporcionado a PageLayout como `[{label:'Inicio', href:'/'}, {label: regionNombre, href: null}]`
- Título: Bebas Neue 46px → 56px → 64px, line-height 0.92
- Divider: 1px `var(--border)`, `margin: 14px 0 18px`
- Grid subregiones: `repeat(2,1fr)` gap 12px → `repeat(3,1fr)` gap 16px en ≥1024px
- Card: `min-height: 96px`, flex-col, justify-end, padding 14px
- Card name: Bebas Neue 24px letter-spacing 0.03em
- Card count: Outfit 13px color `--muted` margin-top 5px; en hover: `inherit opacity 0.7`

## Flujos relacionados
- [[../../../Flujos/Flujo - Navegación por Proyección.md]]
