## Flujo: Imagen en Dialog

> **Estado:** PLANIFICADO — no implementado. Comportamiento definido en `DESIGN_RadWeb.md` sección 5.

El usuario toca/hace click en la imagen de referencia de un enfoque y se abre un `<dialog>` nativo fullscreen con la imagen ampliada. Si no hay imagen, se muestra un placeholder.

Secuencia de archivos involucrados, en orden:

1. [[../Archivos/src/pages/[region]/[subregion]/[slug].astro.md]] — pasa `imagen` e `imagen_alt` del frontmatter a `EnfoqueDetail`.
2. [[../Archivos/src/components/EnfoqueDetail.astro.md]] — si `imagen` existe, renderiza `<figure>` con imagen (`loading="lazy"`, dimensiones explícitas) + `ImageDialog`. Si no, muestra placeholder "SIN IMAGEN DE REFERENCIA" en `--muted`.
3. [[../Archivos/src/components/ImageDialog.tsx.md]] — al hacer tap/click en la imagen llama `dialogRef.current.showModal()`. Click fuera del contenido del dialog o en botón cierre llama `dialog.close()`.

## Notas
- `ImageDialog` usa `client:visible` para no cargar React hasta que el elemento entra al viewport.
- La imagen en `<figure>` tiene `width` y `height` explícitos para evitar layout shift (CLS).
- La imagen dentro del dialog mantiene `aspect-ratio` y no excede el viewport.
- `imagen_alt` es obligatorio en el schema cuando `imagen` existe — se usa como `alt` en ambas instancias de la imagen.

## Animaciones
- Dialog: fade in 200ms ease al abrir. Implementable con `@starting-style` CSS (nativo) o con clase CSS añadida por JS al abrir.
