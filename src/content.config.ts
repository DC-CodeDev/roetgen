import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const enfoques = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/enfoques' }),
  schema: z.object({
    // Campos obligatorios
    titulo: z.string(),
    region: z.string(),
    subregion: z.string(),

    // Orden dentro de la subregión
    orden: z.number().optional(),

    // Alias para búsqueda (ej: ["PA", "Posteroanterior", "Frontal de mano"])
    alias: z.array(z.string()).default([]),

    // Campos de contenido clínico
    dato_clinico: z.string().default(''),
    receptor: z.string().default(''),
    distancia: z.string().default(''),
    tecnica: z.string().default(''),
    posicion_paciente: z.string().default(''),
    posicion_region: z.string().default(''),
    rayo_central: z.string().default(''),
    anatomia_visible: z.string().default(''),
    criterios_calidad: z.string().default(''),

    // Tip / nota técnica
    tip: z.string().optional(),

    // Imagen de referencia
    imagen: z.string().optional(),
    imagen_alt: z.string().optional(),
  }),
});

export const collections = { enfoques };
