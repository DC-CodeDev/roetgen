**Ruta:** `src/components/ThemeToggle.tsx`

## Responsabilidad
Toggle light/dark mode sin dependencias externas. Lee `localStorage` al montar, sincroniza `data-theme` en `document.documentElement`. Persiste la preferencia. Muestra ícono luna (→ pasar a dark) o sol (→ pasar a light).

## Exporta
- `ThemeToggle` (componente React, default export)
  - Estado: `theme: 'light' | 'dark'`
  - `useEffect` al montar: lee `localStorage('theme')` y `prefers-color-scheme`
  - `toggle()`: swapea `theme`, actualiza `document.documentElement.setAttribute('data-theme', next)`, persiste en `localStorage`
  - `SunIcon` (interno): SVG stroke con 9 rayos, circle r=3.2, 18×18
  - `MoonIcon` (interno): SVG fill path crescent, 18×18

## Importa
- React (externo): `useState`, `useEffect`

## Importado por
- [[../layouts/PageLayout.astro.md]] — con directiva `client:load`

## Flujos relacionados
- [[../../Flujos/Flujo - Toggle Light-Dark Mode.md]]
