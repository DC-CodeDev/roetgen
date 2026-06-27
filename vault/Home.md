# Proyecto Roentgen — Vault de arquitectura

Stack: Astro 7.0.3 + React 19 + Tailwind CSS v4 + TypeScript strict.

> **Estado del proyecto (Junio 2026):** Flujo completo de navegación implementado + búsqueda Fuse.js. Build 0 errores. 37 páginas generadas (+ search-index.json).

---

## Archivos por área

### Documentación y diseño (archivos raíz)
- [[Archivos/DESIGN_RadWeb.md.md]] — especificación técnica completa. **Fuente de verdad del diseño.**
- [[Archivos/PROMPT_Design.md.md]] — prompt para herramienta de diseño visual
- [[Archivos/Proyecto Roentgen.html.md]] — preview HTML bundleado externo, no es fuente del proyecto
- [[Archivos/radiologia.jpg.md]] — imagen de referencia estática

### `src/styles/` — sistema de diseño base
- [[Archivos/src/styles/global.css.md]] — CSS variables, reset, print styles. **Fuente de verdad del CSS.**

### `src/lib/` — utilidades
- [[Archivos/src/lib/regions.ts.md]] — diccionario de nombres, slugs, helpers. Fuente de verdad de las regiones.

### `src/content.config.ts` — datos y schema
- [[Archivos/src/content.config.ts.md]] — schema Zod + glob loader Astro 7. **Fuente de verdad del modelo de datos.**
  > En Astro 7 el archivo vive en `src/content.config.ts` (no `src/content/config.ts`)

### `src/content/enfoques/` — datos clínicos
- [[Archivos/src/content/enfoques/miembro-superior/mano/mano-pa.yaml.md]] — PA de Mano (único enfoque real, valida el schema)

### `src/layouts/` — estructura de páginas
- [[Archivos/src/layouts/BaseLayout.astro.md]] — HTML base, fonts, script anti-FOUC, slot
- [[Archivos/src/layouts/PageLayout.astro.md]] — header fijo, auto-hide, breadcrumb, slot

### `src/components/` — componentes
- [[Archivos/src/components/ThemeToggle.tsx.md]] — React, SVGs inline, localStorage
- [[Archivos/src/components/Header.astro.md]] *(fusionado en PageLayout — no se creará como archivo separado)*
- [[Archivos/src/components/Breadcrumb.astro.md]] *(fusionado en PageLayout — no se creará como archivo separado)*
- [[Archivos/src/components/RegionCard.astro.md]] *(planificado — actualmente inline en index.astro)*
- [[Archivos/src/components/SubregionCard.astro.md]] *(planificado — actualmente inline en [region].astro)*
- [[Archivos/src/components/EnfoqueCard.astro.md]] *(planificado)*
- [[Archivos/src/components/EnfoqueDetail.astro.md]] *(planificado)*
- [[Archivos/src/components/ImageDialog.tsx.md]] *(planificado)*
- [[Archivos/src/components/Search.tsx.md]] — búsqueda Fuse.js client-side, overlay con resultados en tiempo real

### `src/pages/` — rutas
- [[Archivos/src/pages/index.astro.md]] — home, grid de 5 regiones
- [[Archivos/src/pages/[region].astro.md]] — página de región con subregiones (5 rutas estáticas)
- [[Archivos/src/pages/404.astro.md]] *(planificado)*
- [[Archivos/src/pages/[region]/[subregion].astro.md]] — página de subregión, lista vertical de enfoques
- [[Archivos/src/pages/[region]/[subregion]/[slug].astro.md]] — página de enfoque individual, 2 columnas desktop

---

## Flujos principales *(todos planificados)*

- [[Flujos/Flujo - Navegación por Proyección.md]]
- [[Flujos/Flujo - Toggle Light-Dark Mode.md]]
- [[Flujos/Flujo - Búsqueda Fuse.js.md]] *(Pagefind abandonado — incompatible con Vercel build)*
- [[Flujos/Flujo - Imagen en Dialog.md]]

---

## Decisiones técnicas registradas

| Decisión | Resultado |
|---|---|
| `@astrojs/tailwind` vs `@tailwindcss/vite` | Usamos `@tailwindcss/vite` — `@astrojs/tailwind@6` solo soporta Astro 3-5 y Tailwind v3 |
| `src/content/config.ts` vs `src/content.config.ts` | Astro 7 requiere `src/content.config.ts` en la raíz de `src/` |
| Header/Breadcrumb como componentes separados vs inline en PageLayout | Fusionados en PageLayout — son elementos únicos sin variaciones de props que justifiquen separación |
| Subregiones desde filesystem vs desde Content Collections | `readdir` en `getStaticPaths` — permite mostrar carpetas vacías (sin enfoques aún) |
| Pagefind vs Fuse.js | Fuse.js — Pagefind no generaba `_pagefind/` en Vercel; Fuse.js es 100% client-side, sin dependencia de build step externo |

---

## Mantenimiento

> Regla de trabajo: cada vez que se crea o modifica un archivo del proyecto,
> se debe actualizar (o crear) su nota correspondiente en `vault/Archivos/...`,
> incluyendo sus secciones de Exporta/Importa y las referencias inversas
> ("Importado por") en los archivos relacionados, antes de cerrar la tarea.
