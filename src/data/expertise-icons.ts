import type { Icon } from '@phosphor-icons/react';
import {
  BrainIcon,
  BrowsersIcon,
  ChartLineUpIcon,
  DatabaseIcon,
  GiftIcon,
  PaletteIcon,
  PenNibIcon,
  TShirtIcon,
} from '@phosphor-icons/react/ssr';
import type { ExpertiseSlug } from './expertises';

export const expertiseIcons: Record<ExpertiseSlug, Icon> = {
  'data-ia': BrainIcon,
  'creation-digitale': PenNibIcon,
  'impression-textile': TShirtIcon,
};

/** Icônes des cartes de la grille bento, indexées par `ExpertiseSection.id`. */
export const sectionIcons: Record<string, Icon> = {
  'data-engineering-cloud': DatabaseIcon,
  'data-science-ia': BrainIcon,
  'data-analyst-bi': ChartLineUpIcon,
  'web-e-commerce': BrowsersIcon,
  'graphisme-social-media': PaletteIcon,
  'marquage-textile': TShirtIcon,
  'objets-publicitaires': GiftIcon,
};
