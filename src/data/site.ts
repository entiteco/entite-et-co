// Source : migration-entite/global/informations_globales.md
import type { Lang, UiKey } from '@/i18n/ui';
import { localizePath, useTranslations } from '@/i18n/utils';

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
  email: 'contact@entite.co',
  founder: 'Kévin Heugas',
} as const;

/** Lien de navigation : libellé dans le dictionnaire `ui`, chemin sans préfixe de langue. */
export interface NavLink {
  key: UiKey;
  href: string;
}

export const mainNav: readonly NavLink[] = [
  { key: 'nav.home', href: '/' },
  { key: 'nav.dataIa', href: '/expertises/data-ia' },
  { key: 'nav.creation', href: '/expertises/creation-digitale' },
  { key: 'nav.textile', href: '/expertises/impression-textile' },
  { key: 'nav.portfolio', href: '/portfolio' },
  { key: 'nav.about', href: '/a-propos' },
  { key: 'nav.contact', href: '/contact' },
];

/** Pages légales : en français uniquement (non préfixées). */
export const legalNav: readonly NavLink[] = [
  { key: 'footer.legal', href: '/mentions-legales' },
  { key: 'footer.privacy', href: '/politique-de-confidentialite' },
];

/** Liens traduits et préfixés pour `lang` (les pages légales restent en français). */
export const localizeNav = (items: readonly NavLink[], lang: Lang): NavItem[] => {
  const t = useTranslations(lang);
  return items.map(({ key, href }) => ({
    label: t(key),
    href: legalNav.some((item) => item.href === href) ? href : localizePath(href, lang),
  }));
};

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
