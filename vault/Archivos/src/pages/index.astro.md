**Ruta:** `src/pages/index.astro`

## Responsabilidad
Página home (`/`): grid de 5 cards de región. Toma los slugs de `REGION_SLUGS` (hardcodeados en `regions.ts`). La card cuya `href` coincide con el path actual recibe `rg-card--active` (border-left 3px).

## Exporta
- (página Astro — no exporta símbolos)

## Importa
- [[../../layouts/PageLayout.astro.md]]
- [[../../lib/regions.ts.md]] — `REGION_SLUGS`, `getRegionName`

## Importado por
- (ninguno — es la ruta raíz `/`)

## Medidas exactas (del diseño de referencia)
- Content: `padding: 20px 20px 40px` mobile / `34px 40px 56px` desktop
- Título "REGIONES": 46px → 56px → 64px, line-height 0.92, margin-bottom 18px → 26px
- Grid: `repeat(2,1fr)` gap 12px → `repeat(4,1fr)` gap 18px en ≥1024px
- Card: `aspect-ratio: 1/1.2`, align flex-end, padding 14px → 20px
- Card name: Bebas Neue 24px → 32px, letter-spacing 0.03em

## Flujos relacionados
- [[../../../Flujos/Flujo - Navegación por Proyección.md]]
