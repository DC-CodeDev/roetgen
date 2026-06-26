## Flujo: Búsqueda con Pagefind

> **Estado:** PLANIFICADO — no implementado. Comportamiento definido en `DESIGN_RadWeb.md` sección 6.

El usuario abre la búsqueda desde el header, escribe un término y navega al enfoque encontrado. Cero JS de búsqueda hasta que el usuario la activa explícitamente.

Secuencia de archivos involucrados, en orden:

1. [[../Archivos/src/components/Header.astro.md]] — monta `Search` con `client:idle`; el ícono lupa es el trigger de apertura.
2. [[../Archivos/src/components/Search.tsx.md]] — al expandir, importa Pagefind dinámicamente (`import('/pagefind/pagefind.js')`) e inicializa la UI. Renderiza input + resultados.
3. Pagefind (externo) — índice generado en build time a partir del HTML de `dist/`. Los `alias` de cada enfoque deben estar presentes en el HTML para ser indexados.
4. [[../Archivos/src/pages/[region]/[subregion]/[slug].astro.md]] — destino de la navegación al seleccionar un resultado.

## Notas
- El índice Pagefind se genera con `npx pagefind --site dist` como paso post-build (no parte del build de Astro).
- `client:idle` en `Search` asegura que no bloquea el LCP — se hidrata cuando el hilo principal está libre.
- Los `alias` del schema (ej: "Posteroanterior", "Frontal de mano") deben renderizarse en el HTML de cada página de enfoque para que Pagefind los incluya en el índice.
- Los resultados muestran: título del enfoque + subregión + región (configurado en la UI de Pagefind).
