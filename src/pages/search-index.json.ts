import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getRegionName, getSubregionName } from '../lib/regions';

export const GET: APIRoute = async () => {
  const enfoques = await getCollection('enfoques');
  const data = enfoques.map(e => ({
    titulo: e.data.titulo,
    region: e.data.region,
    subregion: e.data.subregion,
    regionNombre: getRegionName(e.data.region),
    subregionNombre: getSubregionName(e.data.subregion),
    slug: e.id.split('/').at(-1)!,
    alias: e.data.alias,
    href: `/${e.data.region}/${e.data.subregion}/${e.id.split('/').at(-1)}`,
  }));
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
};
