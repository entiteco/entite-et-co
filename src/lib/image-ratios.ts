// Ratios partagés par les placeholders et les vraies images : même cadre, zéro CLS.
import type { ImageMetadata } from 'astro';

export type ImageRatio = 'video' | 'square' | 'portrait' | 'landscape' | 'wide';

export const imageRatios: Record<ImageRatio, string> = {
  video: 'aspect-video',
  square: 'aspect-square',
  portrait: 'aspect-[4/5]',
  landscape: 'aspect-[4/3]',
  wide: 'aspect-[21/9]',
};

/** Visuel réel transmis à un composant (héro, carte…). */
export interface ContentImageData {
  src: ImageMetadata;
  alt: string;
  /** Classes d'ajustement du cadrage (ex. `object-top`). */
  class?: string;
  /** `contain` pour les visuels produits détourés (voir `<ContentImage />`). */
  fit?: 'cover' | 'contain';
}
