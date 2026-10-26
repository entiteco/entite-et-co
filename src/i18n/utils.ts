// Outils i18n : langue courante, traduction des libellés, préfixage des chemins.
// Routage : français à la racine (/), anglais sous /en (prefixDefaultLocale: false).
import { defaultLang, languages, ui, type Lang, type UiKey } from './ui';

/** Pages sans version anglaise (le sélecteur de langue renvoie alors vers /en). */
const untranslatedPaths: readonly string[] = [
  '/mentions-legales',
  '/politique-de-confidentialite',
  '/404',
];

const isLang = (value: string | undefined): value is Lang =>
  value !== undefined && Object.hasOwn(languages, value);

export const getLangFromUrl = (url: URL): Lang => {
  const first = url.pathname.split('/')[1];
  return isLang(first) ? first : defaultLang;
};

export const useTranslations =
  (lang: Lang) =>
  (key: UiKey): string =>
    ui[lang][key];

/** Préfixe un chemin interne (`/contact?sujet=…`) ; ancres, mailto et URL externes inchangés. */
export const localizePath = (path: string, lang: Lang): string => {
  if (lang === defaultLang || !path.startsWith('/')) return path;
  if (path === `/${lang}` || path.startsWith(`/${lang}/`)) return path;
  return path === '/' ? `/${lang}` : `/${lang}${path}`;
};

/** Chemin sans préfixe de langue ni slash final (`/en/portfolio/` → `/portfolio`). */
const stripLang = (pathname: string): string => {
  const first = pathname.split('/')[1];
  const rest = isLang(first) && first !== defaultLang ? pathname.slice(first.length + 1) : pathname;
  return rest.replace(/\/$/, '') || '/';
};

/** Équivalent de la page courante dans `target`, ou `null` si elle n'est pas traduite. */
export const translatePath = (pathname: string, target: Lang): string | null => {
  const path = stripLang(pathname);
  if (target !== defaultLang && untranslatedPaths.includes(path)) return null;
  return localizePath(path, target);
};

/** Libellé à quantité : `{n}` remplacé, forme plurielle au-delà de 1. */
export const formatCount = (n: number, one: string, many: string): string =>
  (n > 1 ? many : one).replace('{n}', String(n));
