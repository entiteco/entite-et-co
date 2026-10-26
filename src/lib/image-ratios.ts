// Ratios des cadres d'image : dimensions réservées, zéro CLS.

export type ImageRatio = 'video' | 'square' | 'portrait' | 'landscape' | 'wide';

export const imageRatios: Record<ImageRatio, string> = {
  video: 'aspect-video',
  square: 'aspect-square',
  portrait: 'aspect-[4/5]',
  landscape: 'aspect-[4/3]',
  wide: 'aspect-[21/9]',
};

