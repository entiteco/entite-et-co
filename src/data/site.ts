// Source : migration-entite/global/informations_globales.md

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  network: 'linkedin' | 'instagram';
  label: string;
  href: string;
}

export const site = {
  name: 'Entité & Co',
  url: 'https://www.entite.co',
  locale: 'fr_FR',
  slogan:
    "L'alliance de la technologie, de la créativité et de l'innovation. Un est tout, tout est un.",
  email: 'contact@entite.co',
  founder: 'Kévin Heugas',
  defaultTitle: 'Studio Digital & IA | Web, Data et Merchandising | Entité & Co',
  defaultDescription:
    "L'alliance de la technologie, de la créativité et de l'innovation. Entité & Co est votre studio tout-en-un pour le web, l'intelligence artificielle et l'impression textile.",
} as const;

export const mainNav: readonly NavItem[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Data & IA', href: '/expertises/data-ia' },
  { label: 'Création Digitale', href: '/expertises/creation-digitale' },
  { label: 'Impression Textile', href: '/expertises/impression-textile' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'À Propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' },
];

export const legalNav: readonly NavItem[] = [
  { label: 'Mentions Légales', href: '/mentions-legales' },
  { label: 'Politique de confidentialité', href: '/politique-de-confidentialite' },
];

export const socials: readonly SocialLink[] = [
  {
    network: 'linkedin',
    label: 'LinkedIn (Kévin Heugas)',
    href: 'https://www.linkedin.com/in/kevinheugas/',
  },
  {
    network: 'instagram',
    label: 'Instagram (Entité & Co)',
    href: 'https://www.instagram.com/entite.co/',
  },
];
