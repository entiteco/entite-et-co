// Visuels réels des pôles d'expertise (héros des pages /expertises/*, cartes À Propos).
import type { ContentImageData } from '@/lib/image-ratios';
import type { ExpertiseSlug } from './expertises';
import xena from '@/assets/page-data-ia/entite_co_xena.webp';
import kvnHgsLogo from '@/assets/page-creation-digitale/entite_co_logo_kvn_hgs.webp';
import kvnHgsSlider from '@/assets/page-accueil/entite_start_slider_kvn_hgs.webp';
import sfbSlider from '@/assets/page-accueil/entite_start_slider_sfb_4.webp';
import dataScience from '@/assets/page-data-ia/entite_co_data_ia_data_science.webp';
import dataVisualisation from '@/assets/page-data-ia/entite_co_data_ia_data_visualisation.webp';
import eCommerce from '@/assets/page-creation-digitale/entite_co_creation_digitale_e_commerce.webp';
import graphisme from '@/assets/page-creation-digitale/entite_co_creation_digitale_graphisme.webp';
import sfbTextile from '@/assets/page-impression-textile/entite_co_sfb_textile.webp';
import sfbAccessoire from '@/assets/page-impression-textile/entite_co_sfb_accessoire.webp';

/** Héros des pages d'expertise (cadre carré). */
export const expertiseHeroImages: Record<ExpertiseSlug, ContentImageData> = {
  'data-ia': {
    src: xena,
    alt: 'Ingénieure data devant un mur d’écrans de supervision, sous le logo XENA',
  },
  'creation-digitale': {
    src: kvnHgsLogo,
    alt: 'Logo KVN HGS en lettres noires et rouges, le studio de création digitale d’Entité & Co',
  },
  // Pas encore de visuel dédié dans page-impression-textile/ : reprise du visuel SFB de l'accueil.
  'impression-textile': {
    src: sfbSlider,
    alt: 'Pile de feutrines colorées aux teintes de l’arc-en-ciel, marquée du logo SFB',
  },
};

/** Cartes des pôles (cadre 16/9). */
export const expertiseCardImages: Record<ExpertiseSlug, ContentImageData> = {
  'data-ia': expertiseHeroImages['data-ia'],
  'creation-digitale': {
    src: kvnHgsSlider,
    alt: 'Globe numérique formé d’un réseau de points lumineux, signé KVN HGS',
  },
  'impression-textile': expertiseHeroImages['impression-textile'],
};

/** Visuels des sections des pages d'expertise (cadre 4/3), indexés par `ExpertiseSection.id`. */
export const expertiseSectionImages: Record<string, ContentImageData> = {
  'data-science-ia': {
    src: dataScience,
    alt: 'Faisceaux de lumière bleue convergeant vers un point de fuite, sous le logo XENA',
  },
  'data-analyst-bi': {
    src: dataVisualisation,
    alt: 'Analyste de dos face à un mur d’écrans de tableaux de bord et de cartes, sous le logo XENA',
  },
  'web-e-commerce': {
    src: eCommerce,
    alt: 'Réunion d’équipe en open space, superposée d’icônes de paiement, de sécurité et de statistiques autour du mot E-COMMERCE',
  },
  'graphisme-social-media': {
    src: graphisme,
    alt: 'Bureau de graphiste vu de dessus : clavier, nuanciers de couleurs, cercle chromatique et lunettes',
  },
  'marquage-textile': {
    src: sfbTextile,
    alt: 'Polo noir à col blanc et manches liserées de rouge, marqué du logo SFB',
    fit: 'contain',
  },
  'objets-publicitaires': {
    src: sfbAccessoire,
    alt: 'Mug noir à intérieur rouge, marqué du logo SFB',
    fit: 'contain',
  },
};
