**Ruta:** `src/pages/[region]/[subregion]/[slug].astro`

## Responsabilidad
Página dinámica de enfoque individual (proyección). Genera una ruta estática por cada archivo YAML en `content/enfoques/`. Muestra todos los campos clínicos con label estilizado + valor, bloque tip (si existe), imagen con dialog nativo o placeholder de diagonal-lines, botón volver. Layout 1 columna mobile / 2 columnas desktop (campos | imagen sticky).

## Exporta
- `getStaticPaths` (función async) — itera `getCollection('enfoques')`, extrae `slug` como `entry.id.split('/').at(-1)`, retorna `{params: {region, subregion, slug}, props: {entry}}`

## Importa
- `astro:content` (externo): `getCollection`
- [[../../../layouts/PageLayout.astro.md]]
- [[../../../lib/regions.ts.md]] — `getRegionName`, `getSubregionName`

## Importado por
- (ninguno — es una ruta dinámica Astro)

## Medidas exactas (implementadas)
- Content: `padding: 18px 20px 40px` mobile / `26px 40px 56px` desktop
- Breadcrumb: 4 niveles `Inicio / RegionNombre / SubregionNombre / Titulo`
- Título: Bebas Neue 64px → 72px → 80px, line-height 0.92, letter-spacing 0.02em
- Divider: 1px `var(--border)`, `margin: 14px 0 20px`
- Layout desktop (≥1024px): `flex-direction: row`, gap 48px; fields `flex:1 1 0`; image `flex: 0 0 340px; position:sticky; top:80px`
- Field: `padding: 14px 0`, `border-bottom: 1px solid var(--border)`, animación `fadeSlideIn` con `animation-delay: calc(var(--i) * 50ms)`
- Label: Outfit 600 12px uppercase letter-spacing 1.5px, `color:--accent-text; background:--accent-bg; padding:3px 8px; display:inline-block`
- Value: Outfit 400 15px/16px desktop, `white-space: pre-line`
- Tip block: `border-left: 3px solid var(--border)`, `padding: 12px 16px`, texto italic Outfit 14px `--muted`
- Btn volver: `← VOLVER`, Outfit 500 14px, `margin-top: 28px`, no background
- Placeholder: `repeating-linear-gradient(45deg, --surface 0 10px, --border 10px 12px)`, min-height 240px
- Dialog: `<dialog>` nativo, backdrop rgba(0,0,0,0.8) con fadeIn 200ms, botón cierre absoluto

## Campos mostrados (en orden)
`dato_clinico`, `receptor`, `distancia`, `tecnica`, `posicion_paciente`, `posicion_region`, `rayo_central`, `anatomia_visible`, `criterios_calidad`. Solo se muestran los que tienen valor (`.filter(c => c.value)`).

## Flujos relacionados
- [[../../../../../Flujos/Flujo - Navegación por Proyección.md]]
- [[../../../../../Flujos/Flujo - Imagen en Dialog.md]]
