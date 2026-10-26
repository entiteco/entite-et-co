import type { Lang } from '@/i18n/ui';
import type { ExpertiseSlug } from './expertises';

export const projectCategories = ['data', 'web', 'textile'] as const;
export type ProjectCategory = (typeof projectCategories)[number];

/** Libellés des filtres (Tous | Data | Web | Textile) et lien vers l'expertise associée. */
export const categoryMeta: Record<
  ProjectCategory,
  {
    label: Record<Lang, string>;
    longLabel: Record<Lang, string>;
    expertise: ExpertiseSlug;
  }
> = {
  data: {
    label: { fr: 'Data & IA', en: 'Data & AI' },
    longLabel: { fr: 'Data & IA', en: 'Data & AI' },
    expertise: 'data-ia',
  },
  web: {
    label: { fr: 'Web', en: 'Web' },
    longLabel: { fr: 'Création Digitale', en: 'Digital Design' },
    expertise: 'creation-digitale',
  },
  textile: {
    label: { fr: 'Textile', en: 'Textile' },
    longLabel: { fr: 'Impression Textile', en: 'Textile Printing' },
    expertise: 'impression-textile',
  },
};

/** Icônes disponibles pour les cartes « Notre approche » (champ `intro.approach[].icon`). */
export const approachIconKeys = [
  'brain',
  'database',
  'api',
  'dashboard',
  'map',
  'search',
  'shield',
  'rocket',
  'users',
  'ticket',
  'planet',
  'flask',
  'sun',
  'wrench',
] as const;
export type ApproachIconKey = (typeof approachIconKeys)[number];

export const isProjectCategory = (value: unknown): value is ProjectCategory =>
  typeof value === 'string' && (projectCategories as readonly string[]).includes(value);
