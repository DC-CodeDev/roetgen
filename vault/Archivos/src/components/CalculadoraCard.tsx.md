**Ruta:** `src/components/CalculadoraCard.tsx`

## Responsabilidad
Isla React con tres tabs que comparten estado `kvp` y `mas`. Permite calcular técnica radiológica, compensar por distancia e incorporar factor de rejilla Bucky. Portado desde `jsOriginal.js` (sin DOM).

## Exporta
- `CalculadoraCard` (componente React default) — sin props; toda la lógica es interna

## Importa
- `react` — `useState`

## Importado por
- [[../pages/index.astro.md]]

## Estado compartido raíz
| Estado | Tipo | Descripción |
|---|---|---|
| `kvp` | `number` | kVp actual (actualizado al seleccionar variante en Tab Técnica) |
| `mas` | `number` | mAs actual (actualizado por las tres tabs) |
| `tabActiva` | `'tecnica' \| 'compensar' \| 'bucky'` | Tab visible |

## Funciones de cálculo (puras, sin DOM)

### `calcularTecnica(constante, espesor, base)`
Retorna `{ tecnicaBasica, masBasica, tecnicaInter, masInter, tecnicaHomo, masHomo, tecnicaUltra, masUltra }`.

Fórmulas:
- **Básica**: `kVp = Math.ceil(espesor × 2 + constante)`, `mAs = base`
- **Intermedia**: `kVp = Math.ceil(básica × 1.15)`, `mAs = base / 2`
- **Homogénea**: `kVp = Math.ceil(inter × 1.15)`, `mAs = inter_mAs / 2`
- **Ultra** (≡ `tecnicaUltra5` del original): base diferente `Math.ceil((espesor/3 × 2) × 2 + constante)`, luego 5 pasos × 1.15; `mAs = base / 31.25`

### `compensarDistancia(masActual, di, df)`
Retorna `masActual / di² × df²` (ley inversa del cuadrado).

### `calcularFactorBucky(masActual, factor)`
Retorna `masActual × factor`.

## Estructura del componente
```
CalculadoraCard
  .cc-readout-bar    ← kVp y mAs actuales en Bebas Neue 56px (siempre visibles)
  .cc-layout         ← flex: columna mobile / fila desktop (≥1024px)
    .cc-tabs         ← TÉCNICA · DISTANCIA · BUCKY
    .cc-panel
      TabTecnica     ← inputs + botón + 4 variantes clickeables (B/I/H/U)
      TabCompensar   ← mAs actual + inputs DI/DF + botón
      TabBucky       ← mAs actual + tabla referencia + input factor + botón
```

## Estilos
Clases `.cc-*` definidas en `global.css`. Usa CSS variables del sistema. Sin sombras ni gradientes.

## Flujos relacionados
- [[../../../Flujos/Flujo - Navegación por Proyección.md]]
