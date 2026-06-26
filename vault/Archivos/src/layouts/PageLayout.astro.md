**Ruta:** `src/layouts/PageLayout.astro`

## Responsabilidad
Layout de página completa: header fijo con auto-hide en mobile, breadcrumb opcional, y slot para contenido. Envuelve `BaseLayout`.

## Exporta
- `PageLayout` (componente Astro) — Props:
  - `title` (string)
  - `description` (string)
  - `breadcrumb?: BreadcrumbItem[]` — array de `{ label: string, href: string | null }`
- `BreadcrumbItem` (interface, re-exportada)
- Script de auto-hide: listener de scroll con `requestAnimationFrame`, añade/quita clase `header-hidden` (que aplica `transform: translateY(-100%)`) cuando `scrollY > 60` y descendente

## Importa
- [[./BaseLayout.astro.md]]
- [[../components/ThemeToggle.tsx.md]] — con directiva `client:load`

## Importado por
- [[../pages/index.astro.md]]
- [[../pages/[region].astro.md]]
- (futuras páginas: `[subregion].astro`, `[slug].astro`, `404.astro`)

## Medidas exactas (del diseño de referencia)
- Header mobile: `padding: 15px 20px`, title 21px, icons 18×18, gap 14px
- Header desktop: `padding: 18px 40px`, title 26px, icons 20×20, gap 20px
- Header altura: ~52px mobile / ~63px desktop (usa `padding-top` en `<main>`)
- Breadcrumb: Outfit 13px, `padding: 14px 20px 0`, sep `/` con `margin: 0 5px`
