**Ruta:** `src/content.config.ts`

> En Astro 7 el archivo de configuración de Content Collections se ubica en `src/content.config.ts` (no `src/content/config.ts`). El sufijo `.config` es requerido por el framework.

## Responsabilidad
Registra la colección `enfoques` con el schema Zod y el glob loader de Astro 7. Fuente de verdad del modelo de datos del proyecto.

## Exporta
- `collections` (const) — registra la colección `enfoques` con:
  - `loader`: `glob({ pattern: '**/*.yaml', base: './src/content/enfoques' })`
  - `schema`: Zod — campos obligatorios: `titulo`, `region`, `subregion`; opcionales: `orden`, `tip`, `imagen`, `imagen_alt`; todos los campos clínicos con `default('')`: `dato_clinico`, `receptor`, `distancia`, `tecnica`, `posicion_paciente`, `posicion_region`, `rayo_central`, `anatomia_visible`, `criterios_calidad`; `alias: z.array(z.string()).default([])`

## Importa
- `astro:content` (externo): `defineCollection`, `z`
- `astro/loaders` (externo): `glob`

## Importado por
- Registrado automáticamente por Astro al build — no se importa directamente en páginas.
  Accedido vía `getCollection('enfoques')` desde `astro:content`.
