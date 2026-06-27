export const REGION_NAMES: Record<string, string> = {
  'craneo': 'Cráneo',
  'torax': 'Tórax',
  'abdomen': 'Abdomen',
  'pelvis': 'Pelvis',
  'miembro-inferior': 'Miembro Inferior',
  'miembro-superior': 'Miembro Superior',
};

export const SUBREGION_NAMES: Record<string, string> = {
  'hombro': 'Hombro',
  'brazo': 'Brazo',
  'codo': 'Codo',
  'antebrazo': 'Antebrazo',
  'puno': 'Puño',
  'mano': 'Mano',
  'pelvis': 'Pelvis',
  'muslo': 'Muslo',
  'rodilla': 'Rodilla',
  'pierna': 'Pierna',
  'tobillo': 'Tobillo',
  'pie': 'Pie',
  'boveda': 'Bóveda',
  'macizo-facial': 'Macizo Facial',
};

// Orden proximal → distal por región (para páginas de región)
export const SUBREGION_ORDER: Record<string, string[]> = {
  'miembro-superior': ['hombro', 'brazo', 'codo', 'antebrazo', 'puno', 'mano'],
  'miembro-inferior': ['muslo', 'rodilla', 'pierna', 'tobillo', 'pie'],
};

export const REGION_SLUGS = Object.keys(REGION_NAMES);

export function getRegionName(slug: string): string {
  return REGION_NAMES[slug] ?? slug;
}

export function getSubregionName(slug: string): string {
  return SUBREGION_NAMES[slug] ?? slug
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}
