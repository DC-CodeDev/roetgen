**Ruta:** `src/lib/regions.ts`

## Responsabilidad
Diccionario de nombres de display para regiones y subregiones, orden anatómico de subregiones por región, y helpers de formateo. Fuente de verdad de los slugs y la secuencia proximal→distal.

## Exporta
- `REGION_NAMES` (const) — Record<slug, nombre display> para las 6 regiones: miembro-superior, miembro-inferior, pelvis, torax, craneo, abdomen
- `SUBREGION_NAMES` (const) — Record<slug, nombre display> para las 13 subregiones, en orden proximal→distal por region
- `SUBREGION_ORDER` (const) — Record<regionSlug, string[]> — orden canónico proximal→distal para usar en `getStaticPaths` al ordenar resultados de `readdir`:
  - `miembro-superior`: hombro → brazo → codo → antebrazo → muneca → mano
  - `miembro-inferior`: pelvis → muslo → rodilla → pierna → pie
- `REGION_SLUGS` (const) — `Object.keys(REGION_NAMES)`, usado en `getStaticPaths`
- `getRegionName(slug)` (función) — lookup con fallback al slug
- `getSubregionName(slug)` (función) — lookup con fallback a capitalización por palabras

## Importa
- (ninguno)

## Importado por
- [[../pages/index.astro.md]] — `REGION_SLUGS`, `getRegionName`
- [[../pages/[region].astro.md]] — `REGION_SLUGS`, `getRegionName`, `getSubregionName`, `SUBREGION_ORDER`
