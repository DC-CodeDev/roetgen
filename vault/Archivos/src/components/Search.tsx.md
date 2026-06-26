**Ruta:** `src/components/Search.tsx`

> ⚠️ **PLANIFICADO — archivo no creado aún.** Spec en [[../../DESIGN_RadWeb.md.md]] sección 6.

## Responsabilidad
Integración de Pagefind UI para búsqueda full-text. Ícono lupa que expande un input al tap/click. Carga Pagefind dinámicamente solo al expandir — cero JS hasta entonces. Resultados muestran título del enfoque + subregión + región.

## Exporta
- `Search` (componente React)
  - Estado interno: `expanded` (boolean) — controla visibilidad del input
  - Efecto al expandir: `import('/pagefind/pagefind.js')` dinámico e inicializa la UI

## Importa
- React (externo): `useState`, `useEffect`
- Pagefind (externo, cargado dinámicamente en runtime — índice generado en build time con `npx pagefind --site dist`)

## Importado por
- [[./Header.astro.md]] — con directiva `client:idle`

## Flujos relacionados
- [[../../../Flujos/Flujo - Búsqueda Pagefind.md]]
