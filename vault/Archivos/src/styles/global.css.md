**Ruta:** `src/styles/global.css`

## Responsabilidad
CSS variables del sistema de diseño (light/dark mode), reset base, declaración de font-family y print styles. Único punto de importación de estilos globales. Con Tailwind v4 se importa via `@import "tailwindcss"` en lugar del antiguo `@tailwind base/components/utilities`.

## Exporta
- `:root` — tokens CSS light mode: `--bg`, `--text`, `--accent-bg`, `--accent-text`, `--surface`, `--border`, `--muted`, `--transition-color: 200ms ease`
- `[data-theme="dark"]` — override de los mismos tokens para dark mode
- `*` reset — `box-sizing: border-box`, `margin: 0`, `padding: 0`
- `body` — `font-family: 'Outfit'`, background y color via variables, `transition: background 200ms ease, color 200ms ease`, `-webkit-font-smoothing: antialiased`
- `@media print` — oculta `header`, `.breadcrumb`, `.btn-volver`; fondo blanco, texto negro; `.enfoque-fields` sin saltos de página internos

## Importa
- Tailwind CSS v4 (externo): `@import "tailwindcss"`

## Importado por
- [[../../layouts/BaseLayout.astro.md]] — único punto de importación
