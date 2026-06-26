**Ruta:** `src/components/EnfoqueDetail.astro`

> ⚠️ **PLANIFICADO — archivo no creado aún.** Spec en [[../../DESIGN_RadWeb.md.md]] sección 5.

## Responsabilidad
Renderiza todos los campos técnicos de un enfoque (dato clínico, receptor, distancia, técnica, posición del paciente, posición de la región, rayo central, anatomía visible, criterios de calidad) con animación de entrada staggered (fade in, 50ms por campo). Gestiona el placeholder "SIN IMAGEN DE REFERENCIA" si `imagen` no está presente.

## Exporta
- `EnfoqueDetail` (componente Astro) — Props: objeto completo del enfoque (tipos del schema de `config.ts`)
  - Cada campo renderiza: label (Outfit 600, 12px, uppercase, `--muted`) + valor (Outfit 400, 15px, `--text`) + separador 1px `--border`
  - `<figure>` + `<figcaption>` semántico para la imagen, con `loading="lazy"` y dimensiones explícitas

## Importa
- [[./ImageDialog.tsx.md]] — con directiva `client:visible`

## Importado por
- [[../pages/[region]/[subregion]/[slug].astro.md]]

## Flujos relacionados
- [[../../../Flujos/Flujo - Imagen en Dialog.md]]
