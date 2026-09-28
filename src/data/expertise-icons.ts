import type { Icon } from '@phosphor-icons/react';
import { BrainIcon, PenNibIcon, TShirtIcon } from '@phosphor-icons/react/ssr';
import type { ExpertiseSlug } from './expertises';

export const expertiseIcons: Record<ExpertiseSlug, Icon> = {
  'data-ia': BrainIcon,
  'creation-digitale': PenNibIcon,
  'impression-textile': TShirtIcon,
};
