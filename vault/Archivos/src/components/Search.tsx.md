**Ruta:** `src/components/Search.tsx`

## Responsabilidad
Componente React de búsqueda client-side con Fuse.js. Al montar fetchea `/search-index.json` e inicializa Fuse. Al hacer clic en la lupa (o `Ctrl/Cmd+K`) abre un overlay con input. Busca en tiempo real mientras se escribe. Resultados como lista de links con título y región. `ESC` o clic en backdrop cierra.

## Exporta
- `default` (componente React) — usado en PageLayout con `client:load`

## Importa
- `react` (externo): `useState`, `useEffect`, `useRef`, `useCallback`
- `fuse.js` (externo): `Fuse`

## Importado por
- [[../../layouts/PageLayout.astro.md]] — `<Search client:load />`

## Comportamiento
- Fetch de `/search-index.json` al montar (una sola vez)
- Fuse keys: `titulo` (weight 3), `alias` (weight 2), `subregionNombre` (weight 1), threshold 0.4
- Máximo 8 resultados
- Cada resultado muestra: titulo en Bebas Neue 20px + `subregionNombre — regionNombre` en Outfit 12px muted
- Navegación al resultado cierra el overlay
- `Ctrl/Cmd+K` abre, `ESC` cierra

## Estilos
Todos los estilos están en [[../../layouts/PageLayout.astro.md]] como `:global()` (clases: `search-trigger-btn`, `search-overlay`, `search-box`, `search-header`, `search-input`, `search-close-btn`, `search-results-list`, `search-result`, `result-title`, `result-meta`, `search-empty`, `search-backdrop`).
