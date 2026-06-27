**Ruta:** `src/layouts/PageLayout.astro`

## Responsabilidad
Layout de página completa: header fijo con auto-hide en mobile, breadcrumb opcional, y slot para contenido. Envuelve `BaseLayout`. También aloja todos los estilos `:global()` del componente Search.

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
- [[../components/Search.tsx.md]] — con directiva `client:load`

## Importado por
- [[../pages/index.astro.md]]
- [[../pages/[region].astro.md]]
- (futuras páginas: `[subregion].astro`, `[slug].astro`, `404.astro`)

## Medidas exactas (del diseño de referencia)
- Header mobile: `padding: 15px 20px`, title 21px, icons 18×18, gap 14px
- Header desktop: `padding: 18px 40px`, title 26px, icons 20×20, gap 20px
- Header altura: ~52px mobile / ~63px desktop (usa `padding-top` en `<main>`)
- Breadcrumb: Outfit 13px, `padding: 14px 20px 0`, sep `/` con `margin: 0 5px`

## Blur de pantalla al abrir Search
Cuando Search agrega `body.search-open`, estos estilos aplican `filter: blur(5px)` al header y al main:
```css
:global(body.search-open) #site-header,
:global(body.search-open) main {
  filter: blur(5px);
  transition: filter 200ms ease;
}
```
Funciona correctamente porque el overlay de Search vive en `document.body` via portal, no dentro del header — un `filter` en un ancestro rompería el `position: fixed` del overlay.

## Search overlay (estilos :global)
- `.search-overlay`: `position: fixed; inset: 0; z-index: 400; display: flex; align-items: center; justify-content: center; background: color-mix(in srgb, var(--bg) 40%, transparent)`
- `.search-backdrop`: `position: absolute; inset: 0; background: transparent; border: none; cursor: pointer` — solo catch de clicks, sin z-index explícito
- `.search-box`: `position: relative; z-index: 1` — queda encima del backdrop

## Flujos relacionados
- [[../../../Flujos/Flujo - Búsqueda Pagefind.md]]
- [[../../../Flujos/Flujo - Toggle Light-Dark Mode.md]]
