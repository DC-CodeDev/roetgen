## Flujo: Toggle Light/Dark Mode

> **Estado:** PLANIFICADO — no implementado. Comportamiento definido en `DESIGN_RadWeb.md` secciones 2, 8, 14.

El usuario activa/desactiva el dark mode desde el header. La preferencia persiste entre sesiones vía `localStorage`. El swap de colores ocurre por CSS transition sobre variables CSS.

Secuencia de archivos involucrados, en orden:

1. [[../Archivos/src/components/Header.astro.md]] — monta `ThemeToggle` como isla React con `client:load`.
2. [[../Archivos/src/components/ThemeToggle.tsx.md]] — al montar: lee `localStorage('theme')` y sincroniza `data-theme` en `document.documentElement`. Al click: swapea tema, persiste, actualiza atributo.
3. [[../Archivos/src/layouts/BaseLayout.astro.md]] — contiene el script inline en `<head>` que aplica `data-theme` antes del primer paint (evita FOUC). El `<html>` tiene el atributo que ThemeToggle controla.
4. [[../Archivos/src/styles/global.css.md]] — `[data-theme="dark"]` redefine todas las variables CSS. `body` tiene `transition: background 250ms ease, color 250ms ease` que anima el swap completo.

## Notas
- `client:load` en ThemeToggle es necesario porque `localStorage` no existe en SSR.
- El script inline de `BaseLayout` debe ejecutarse sincrónicamente (sin `defer`/`async`) para evitar el flash de tema incorrecto.
- No hay animación de JS: el swap visual es puramente CSS reaccionando al cambio de `data-theme` en `<html>`.

## Animaciones
- Toda la página: `background 250ms ease, color 250ms ease` definido en `body` (global.css).
- El ícono Sun/Moon en ThemeToggle: swap inmediato de estado React, sin transición adicional.
