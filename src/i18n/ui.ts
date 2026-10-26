// Dictionnaire des textes d'interface partagés (navigation, footer, boutons, statuts).
// Les contenus éditoriaux restent dans src/data/ (expertises), src/content/ (portfolio)
// et dans les composants de page (src/components/pages/).

export const languages = { fr: 'Français', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'fr';
export const langs = Object.keys(languages) as Lang[];

/** Locale Open Graph / sitemap. */
export const ogLocales: Record<Lang, string> = { fr: 'fr_FR', en: 'en_US' };

const fr = {
  'site.defaultTitle': 'Expert Data Engineering & Intelligence Artificielle | Entité & Co',
  'site.defaultDescription':
    'Architectures de données robustes, automatisation MLOps et modèles prédictifs sur-mesure. Création web et impression textile en compétences transverses.',
  'site.slogan':
    "L'alliance de la technologie, de la créativité et de l'innovation. Un est tout, tout est un.",

  'nav.home': 'Accueil',
  'nav.dataIa': 'Data & IA',
  'nav.creation': 'Création Digitale',
  'nav.textile': 'Impression Textile',
  'nav.portfolio': 'Portfolio',
  'nav.about': 'À Propos',
  'nav.contact': 'Contact',
  'nav.label': 'Navigation principale',
  'nav.openMenu': 'Ouvrir le menu',
  'nav.closeMenu': 'Fermer le menu',
  'nav.skip': 'Aller au contenu',
  'nav.breadcrumb': "Fil d'Ariane",

  'lang.label': 'Langue du site',

  'theme.label': 'Thème sombre',
  'theme.toLight': 'Passer au thème clair',
  'theme.toDark': 'Passer au thème sombre',

  'footer.expertises': 'Expertises',
  'footer.studio': 'Studio',
  'footer.contact': 'Contact',
  'footer.rights': 'Tous droits réservés.',
  'footer.legal': 'Mentions Légales',
  'footer.privacy': 'Politique de confidentialité',

  'common.discussProject': 'Discuter de votre projet',
  'common.learnMore': 'En savoir plus',
  'common.newTab': 'nouvel onglet',
  'common.optional': 'facultatif',

  'expertise.viewProjects': 'Voir les projets',
  'expertise.viewPortfolio': 'Voir le Portfolio',
  'expertise.allPortfolio': 'Tout le portfolio',
  'expertise.others': 'Nos autres expertises',
  'expertise.discover': 'Découvrir',
  'expertise.pole': 'Pôle',

  'project.view': 'Voir le projet',
  'project.stack': 'Stack technique',
  'project.tags': 'Stack et prestations',
  'project.client': 'Client',
  'project.year': 'Année',
  'project.expertise': 'Expertise',
  'project.services': 'Prestations',
  'project.tools': 'Outils',
  'project.demo': 'Projet de démonstration',
  'project.similar': "Discuter d'un projet similaire",
  'project.others': 'Autres projets',
  'project.close': 'Fermer le projet',
  'project.openPage': 'Ouvrir la page du projet',
  'project.back': 'Retour au portfolio',
  'project.gallery': 'Galerie',
  'project.context': 'Contexte',
  'project.approach': 'Notre approche',
  'project.deliverables': 'Livrables',
  'project.visual': 'visuel',

  'portfolio.all': 'Tous',
  'portfolio.filterLabel': 'Filtrer les projets par catégorie',
  'portfolio.projects': 'Projets',
  'portfolio.countOne': '{n} projet affiché',
  'portfolio.countMany': '{n} projets affichés',
} as const;

export type UiKey = keyof typeof fr;

const en: Record<UiKey, string> = {
  'site.defaultTitle': 'Data Engineering & Artificial Intelligence Expert | Entité & Co',
  'site.defaultDescription':
    'Robust data architectures, MLOps automation and custom predictive models. Web design and textile printing as cross-functional skills.',
  'site.slogan':
    'Where technology, creativity and innovation meet. One is all, all is one.',

  'nav.home': 'Home',
  'nav.dataIa': 'Data & AI',
  'nav.creation': 'Digital Design',
  'nav.textile': 'Textile Printing',
  'nav.portfolio': 'Portfolio',
  'nav.about': 'About',
  'nav.contact': 'Contact',
  'nav.label': 'Main navigation',
  'nav.openMenu': 'Open menu',
  'nav.closeMenu': 'Close menu',
  'nav.skip': 'Skip to content',
  'nav.breadcrumb': 'Breadcrumb',

  'lang.label': 'Site language',

  'theme.label': 'Dark theme',
  'theme.toLight': 'Switch to light theme',
  'theme.toDark': 'Switch to dark theme',

  'footer.expertises': 'Expertise',
  'footer.studio': 'Studio',
  'footer.contact': 'Contact',
  'footer.rights': 'All rights reserved.',
  'footer.legal': 'Legal notice (FR)',
  'footer.privacy': 'Privacy policy (FR)',

  'common.discussProject': "Let's discuss your project",
  'common.learnMore': 'Learn more',
  'common.newTab': 'new tab',
  'common.optional': 'optional',

  'expertise.viewProjects': 'See the projects',
  'expertise.viewPortfolio': 'See the Portfolio',
  'expertise.allPortfolio': 'Full portfolio',
  'expertise.others': 'Our other areas of expertise',
  'expertise.discover': 'Discover',
  'expertise.pole': 'Unit',

  'project.view': 'View project',
  'project.stack': 'Tech stack',
  'project.tags': 'Stack and services',
  'project.client': 'Client',
  'project.year': 'Year',
  'project.expertise': 'Expertise',
  'project.services': 'Services',
  'project.tools': 'Tools',
  'project.demo': 'Demo project',
  'project.similar': 'Discuss a similar project',
  'project.others': 'More projects',
  'project.close': 'Close project',
  'project.openPage': 'Open the project page',
  'project.back': 'Back to portfolio',
  'project.gallery': 'Gallery',
  'project.context': 'Context',
  'project.approach': 'Our approach',
  'project.deliverables': 'Deliverables',
  'project.visual': 'image',

  'portfolio.all': 'All',
  'portfolio.filterLabel': 'Filter projects by category',
  'portfolio.projects': 'Projects',
  'portfolio.countOne': '{n} project shown',
  'portfolio.countMany': '{n} projects shown',
};

export const ui: Record<Lang, Record<UiKey, string>> = { fr, en };
