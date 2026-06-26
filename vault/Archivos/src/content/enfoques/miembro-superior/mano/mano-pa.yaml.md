**Ruta:** `src/content/enfoques/miembro-superior/mano/mano-pa.yaml`

## Responsabilidad
Enfoque de prueba: proyección PA (Posteroanterior) de mano. Primer archivo de datos reales en la colección `enfoques`. Valida el schema completo y sirve como referencia de formato para futuros archivos.

## Exporta
- (archivo YAML de datos — no exporta símbolos)
- Campos cubiertos: todos los definidos en el schema (`titulo`, `region`, `subregion`, `orden`, `alias`, `dato_clinico`, `receptor`, `distancia`, `tecnica`, `posicion_paciente`, `posicion_region`, `rayo_central`, `anatomia_visible`, `criterios_calidad`)
- Campos opcionales no presentes: `imagen`, `imagen_alt` (sin imagen de referencia aún)

## Importa
- (no aplica — archivo de datos)

## Importado por
- [[../../../../content.config.ts.md]] — indexado automáticamente via glob loader (`**/*.yaml`)
