# PROMPT — Diseño de pantallas Proyecto Roentgen

> Copiar y pegar directamente en la herramienta de diseño.

---

Diseña las pantallas de una aplicación web de referencia clínica llamada 
"PROYECTO ROENTGEN", para estudiantes y residentes de radiología. 
Es una herramienta de consulta rápida de proyecciones radiológicas (enfoques).

---

## ESTÉTICA Y DIRECCIÓN VISUAL

Minimalismo editorial técnico. La referencia es un wallpaper app para Android 
llamado "KLCK" que usa exactamente este lenguaje: fondo crema, texto y bloques 
en azul marino oscuro, tipografía bold prominente, sin decoración. El sistema 
entero vive en ese swap de dos colores. Sin gradientes. Sin sombras decorativas. 
Sin un tercer color. El diseño acompaña al contenido, no compite con él.

---

## PALETA DE COLORES (úsala exactamente)

Light mode:
  Fondo de página:  #fef7e5  (crema)
  Texto principal:  #262948  (azul marino)
  Fondo de cards:   #f7edce  (crema ligeramente más oscura)
  Borde:            #d6d4c8  (crema grisácea, sutil)
  Texto secundario: #7a7e99  (navy desaturado, para labels y metadata)
  
  Hover de cards: inversión total — fondo #262948, texto #fef7e5
  
Dark mode (swap exacto):
  Fondo de página:  #262948
  Texto principal:  #fef7e5
  Fondo de cards:   #2e3257
  Borde:            #3d4060
  Texto secundario: #9b9fb8
  
  Hover de cards: inversión total — fondo #fef7e5, texto #262948

---

## TIPOGRAFÍA

Display / Títulos grandes: Bebas Neue 400
  - letter-spacing: 0.02em a tamaños grandes (≥42px)
  - letter-spacing: 0.04em a tamaños pequeños (24-28px)

Body / UI / Labels: Outfit
  - Labels de campos: Outfit 600, 12px, uppercase, letter-spacing 1.5px
  - Valores: Outfit 400, 15-16px
  - Navegación: Outfit 500, 14px
  - Breadcrumb: Outfit 400, 13px

---

## PANTALLAS A DISEÑAR

Muéstralas en mobile (390px) y desktop side by side.
Muestra light mode y dark mode para cada una.

---

### PANTALLA 1 — HOME

Header fijo: "PROYECTO ROENTGEN" (Bebas Neue) a la izquierda. 
A la derecha: ícono lupa + ícono sol/luna (toggle dark mode). 
Fondo header: crema 90% opacidad con blur.

Debajo del header, título de sección en Bebas Neue grande: "REGIONES"

Grid de cards de región. En mobile: 2 columnas. En desktop: 4 columnas.
Cada card: fondo --surface (#f7edce), borde 1px #d6d4c8, proporción 1:1.2.
Nombre de región en Bebas Neue. Cards en estado default y una en estado hover 
(inversión total negro/crema).

Regiones a mostrar: MIEMBRO SUPERIOR, MIEMBRO INFERIOR, TÓRAX, CRÁNEO, ABDOMEN.

La card activa/seleccionada tiene un borde izquierdo de 3px en #262948.

---

### PANTALLA 2 — PÁGINA DE REGIÓN (ej: Miembro Superior)

Breadcrumb arriba: "Inicio / Miembro Superior" — texto secundario / texto principal
Título grande en Bebas Neue: "MIEMBRO SUPERIOR"
Línea divisora fina en --border

Grid de subregiones, 2 columnas en mobile.
Cada card muestra: nombre de subregión (Bebas Neue) + "6 enfoques" (Outfit, texto secundario).
Cards: mismo estilo que región — surface, borde, hover con inversión.

Subregiones: MANO, MUÑECA, ANTEBRAZO, CODO, BRAZO, HOMBRO.

---

### PANTALLA 3 — PÁGINA DE SUBREGIÓN (ej: Mano)

Breadcrumb: "Inicio / Miembro Superior / Mano"
Título: "MANO"
Línea divisora

Lista vertical de enfoques (en mobile, una columna).
Cada item es una card horizontal (full-width): nombre de proyección en Bebas Neue.
Ejemplos: PA, OAD, OAI, LATERAL, OBLICUA.
Una de ellas en hover (inversión total).

---

### PANTALLA 4 — PÁGINA DE ENFOQUE (ej: PA de Mano)

Breadcrumb: "Inicio / Miembro Superior / Mano / PA"
Título grande en Bebas Neue: "PA"
Línea divisora

Lista vertical de campos técnicos. Cada campo:
  - Label arriba: Outfit 600, 12px, uppercase, color secundario (#7a7e99)
    Ejemplos: "DATO CLÍNICO", "RECEPTOR DE IMAGEN", "DISTANCIA", "TÉCNICA", 
              "POSICIÓN DEL PACIENTE", "POSICIÓN DE LA REGIÓN", "RAYO CENTRAL",
              "ANATOMÍA VISIBLE", "CRITERIOS DE CALIDAD"
  - Valor abajo: Outfit 400, 15px, color principal
  - Línea divisora fina entre cada campo

Al final: zona de imagen con figura + pie de foto. Si no hay imagen, 
placeholder con texto "SIN IMAGEN DE REFERENCIA" en texto secundario.

Botón "← VOLVER" en Outfit 500, alineado a la izquierda, 
estilo minimal: sin fondo, solo el texto con el color principal.

---

## NOTAS DE DISEÑO

- Sin sombras box-shadow en ningún elemento
- Sin border-radius grandes (máximo 2-4px si usas alguno, o 0px)
- Los separadores son líneas de 1px en --border, no espacios en blanco
- El header tiene backdrop-filter blur, pero el contenido debajo es nítido
- Las animaciones no se ven en pantallas estáticas, pero el diseño 
  debe sugerir que los hover son transiciones de color (200ms ease)
- El conjunto debe sentirse como un manual técnico tipográfico, 
  no como una app de salud genérica con colores verde/blanco

Genera todos los estados en un artboard limpio. 
Prioriza mobile ya que es el uso principal (consulta clínica en el lugar).
