**Ruta:** `src/layouts/BaseLayout.astro`

## Responsabilidad
Layout HTML base: provee `<html data-theme>`, `<head>` con meta tags SEO y OG, preconnect a Google Fonts, importación de `global.css`, script inline anti-FOUC para el tema, y `<slot />`.

## Exporta
- `BaseLayout` (componente Astro) — Props: `title` (string), `description` (string)
  - Script `is:inline` en `<head>`: lee `localStorage('theme')`, si es `'dark'` o si `prefers-color-scheme: dark` y no hay preferencia guardada, aplica `data-theme="dark"` en `<html>` antes del primer paint
  - Meta tags: `<meta name="description">`, `<meta property="og:title">`, `<meta property="og:description">`, `<title>`
  - Fuentes: Bebas Neue 400 + Outfit 400/500/600 via Google Fonts con `rel="preconnect"` a `fonts.googleapis.com` y `fonts.gstatic.com`

## Importa
- [[../styles/global.css.md]]

## Importado por
- [[./PageLayout.astro.md]] *(planificado)*
