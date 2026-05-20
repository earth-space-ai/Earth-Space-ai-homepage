import { skillGroups } from "./skills";

export type Pillar = {
  slug: string;
  idx: string;
  nm: string;
  short: string;
  dsc: string;
};

export const pillars: Pillar[] = skillGroups.map((g) => ({
  slug: g.slug,
  idx: g.idx,
  nm: g.nm,
  short: g.short,
  dsc: g.dsc,
}));

export function pillarBySlug(slug: string): Pillar | undefined {
  return pillars.find((p) => p.slug === slug);
}
