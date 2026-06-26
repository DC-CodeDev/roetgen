**Ruta:** `src/components/ImageDialog.tsx`

> ⚠️ **PLANIFICADO — archivo no creado aún.** Spec en [[../../DESIGN_RadWeb.md.md]] secciones 5, 13.

## Responsabilidad
Dialog nativo (`<dialog>`) para imagen ampliada al tap/click. Abre con `dialogRef.current.showModal()`, cierra con `dialog.close()` al hacer click fuera o en botón de cierre. Necesita isla React por acceso directo al DOM.

## Exporta
- `ImageDialog` (componente React) — Props: `src` (string), `alt` (string)
  - Estado interno: ref al elemento `<dialog>`
  - Animación de apertura: fade in 200ms ease

## Importa
- React (externo): `useRef`

## Importado por
- [[./EnfoqueDetail.astro.md]] — con directiva `client:visible`

## Flujos relacionados
- [[../../../Flujos/Flujo - Imagen en Dialog.md]]
