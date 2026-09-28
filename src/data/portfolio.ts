import type { ExpertiseSlug } from './expertises';

export const projectCategories = ['data', 'web', 'textile'] as const;
export type ProjectCategory = (typeof projectCategories)[number];

/** Libellés des filtres (Tous | Data | Web | Textile) et lien vers l'expertise associée. */
export const categoryMeta: Record<
  ProjectCategory,
  { label: string; longLabel: string; expertise: ExpertiseSlug }
> = {
  data: { label: 'Data', longLabel: 'Data & IA', expertise: 'data-ia' },
  web: { label: 'Web', longLabel: 'Création Digitale', expertise: 'creation-digitale' },
  textile: { label: 'Textile', longLabel: 'Impression Textile', expertise: 'impression-textile' },
};

export const isProjectCategory = (value: unknown): value is ProjectCategory =>
  typeof value === 'string' && (projectCategories as readonly string[]).includes(value);
