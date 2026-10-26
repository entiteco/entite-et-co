// Contenus des pages d'expertise, repris des fichiers de migration :
// - migration-entite/page-data-ia/page_expertise_data_ia.md
// - migration-entite/page-creation-digitale/page_expertise_creation_digitale.md
// - migration-entite/page-impression-textile/page_expertise_impression_textile.md
// `**gras**` est converti par `inlineMarkdown`. Version anglaise : ./expertises.en.ts.
// Liens sans préfixe de langue : les composants les localisent (`localizePath`).
import type { Lang } from '@/i18n/ui';
import { expertisesEn } from './expertises.en';

export type ExpertiseSlug = 'data-ia' | 'creation-digitale' | 'impression-textile';

export interface Cta {
  label: string;
  href: string;
}

export interface FeatureGroup {
  title: string;
  /** Chaque point : « **Libellé :** description ». */
  items: readonly string[];
}

export interface ExpertiseSection {
  id: string;
  title: string;
  intro: string;
  groups: readonly FeatureGroup[];
  cta?: Cta;
}

export interface UseCase {
  /** Identifiant de l'entrée `portfolio` (nom du fichier sans `.md`). */
  id: string;
  /** Nom court affiché sur la carte. */
  name: string;
  /** Stack technique résumée en tags. */
  stack: readonly string[];
}

export interface Expertise {
  slug: ExpertiseSlug;
  /** Nom historique du pôle (conservé dans le texte narratif uniquement). */
  pole: string;
  navLabel: string;
  seo: { title: string; description: string };
  hero: { eyebrow: string; title: string; intro: string; cta: Cta };
  /** Bloc d'introduction optionnel (ex. « Comprendre la Data »). */
  highlight?: { title: string; intro: string; items: readonly string[]; cta?: Cta };
  sections: readonly ExpertiseSection[];
  /** En-tête de la grille bento des sections (icône, titre, texte ; sans visuel). */
  sectionsHeading: { eyebrow: string; title: string; intro: string };
  /** Projets du portfolio mis en avant directement sur la page. */
  useCases?: { title: string; intro: string; projects: readonly UseCase[] };
  stack?: { title: string; intro: string; groups: readonly { label: string; items: readonly string[] }[] };
  ecosystem?: { title: string; paragraphs: readonly string[] };
  closing: { title: string; text: string; cta: Cta };
}

const portfolioCta = (categorie: 'data' | 'web' | 'textile'): Cta => ({
  label: 'Voir les réalisations dans le Portfolio',
  href: `/portfolio?categorie=${categorie}`,
});

export const dataIa: Expertise = {
  slug: 'data-ia',
  pole: 'XENA',
  navLabel: 'Data & IA',
  seo: {
    title: 'Expertise Data Engineering, IA & Analytics | Entité & Co',
    description:
      "De l'architecture de vos bases de données jusqu'au déploiement de modèles d'IA générative. Découvrez l'expertise Data complète d'Entité & Co.",
  },
  hero: {
    eyebrow: 'Expertise — Data & IA',
    title: 'Expertise Data Engineering & Intelligence Artificielle',
    intro:
      "L'IA est le moteur de l'innovation, mais la donnée en est le carburant. Au sein d'Entité & Co, le pôle **XENA** maîtrise l'intégralité de la chaîne de valeur : de la construction d'infrastructures de données robustes (Data Engineering) jusqu'au déploiement de modèles prédictifs sur-mesure (MLOps).",
    cta: { label: 'Parler de mon projet Data', href: '/contact?sujet=data-ia' },
  },
  highlight: {
    title: "La Data de bout en bout : Structurer, Prédire, Piloter",
    intro: "Un écosystème data performant repose sur trois piliers indissociables :",
    items: [
      "**Le Data Engineering (Structurer) :** Construire des fondations solides, des bases de données aux Data Lakes, pour garantir la disponibilité et la sécurité des informations.",
      "**La Data Science & l'IA (Prédire) :** Développer des algorithmes de Machine Learning et exploiter l'IA générative pour automatiser et anticiper.",
      '**La Data Analyse (Piloter) :** Transformer la donnée brute en tableaux de bord visuels et interactifs pour une prise de décision stratégique éclairée.',
    ],
    cta: { label: 'Voir les projets du pôle', href: '#projets' },
  },
  sectionsHeading: {
    eyebrow: 'Pôles d’expertise',
    title: 'Trois pôles, une seule chaîne de valeur',
    intro: 'Du stockage à la décision : chaque brique est conçue pour s’intégrer aux autres.',
  },
  useCases: {
    title: 'Projets & Réalisations (Use Cases)',
    intro: 'Des projets menés de bout en bout, du pipeline de données jusqu’au modèle en production.',
    projects: [
      { id: 'data-ia-urban', name: 'Urban Data Explorer', stack: ['Architecture Medallion', 'PostgreSQL', 'Docker'] },
      { id: 'data-ia-aisca', name: 'AISCA', stack: ['Python', 'RAG', 'SBERT', 'LLM'] },
      { id: 'data-ia-churn', name: 'Prédiction de Churn', stack: ['Python', 'Machine Learning', 'FastAPI', 'MLOps'] },
      { id: 'data-ia-my-social-network', name: 'My Social Network API', stack: ['Node.js', 'Express', 'MongoDB', 'JWT'] },
    ],
  },
  sections: [
    {
      id: 'data-engineering-cloud',
      title: 'Pôle Data Engineering & Cloud Architecture',
      intro:
        "La fondation technique de votre entreprise. Nous concevons des architectures scalables pour collecter, nettoyer et stocker vos données massives en toute sécurité.",
      groups: [
        {
          title: 'Architecture et Stockage de Données',
          items: [
            '**Bases de données & Data Lakes :** Conception de bases relationnelles (SQL) et non-relationnelles (NoSQL) adaptées à vos flux de données.',
            '**Pipelines ETL / ELT :** Création de flux automatisés pour extraire, transformer et charger la donnée (Data Integration).',
          ],
        },
        {
          title: 'Cloud & Industrialisation (MLOps)',
          items: [
            '**Déploiement Continu (CI/CD) :** Automatisation des mises en production pour garantir la fiabilité des applications et des modèles IA.',
            '**Infrastructures Scalables :** Conteneurisation (Docker, Kubernetes) et administration des ressources cloud (Infrastructure as Code).',
          ],
        },
      ],
    },
    {
      id: 'data-science-ia',
      title: 'Pôle Data Science & Développement IA',
      intro:
        'Des solutions algorithmiques avancées pour résoudre vos problématiques métiers complexes, optimiser vos processus et créer de nouveaux relais de croissance.',
      groups: [
        {
          title: 'Intelligence Artificielle & Générative',
          items: [
            "**IA Générative (LLM & RAG) :** Intégration de modèles de fondation sur vos données privées pour des solutions innovantes et sécurisées.",
            '**Traitement du Langage (NLP) :** Analyse de sentiments, classification sémantique et extraction de connaissances.',
          ],
        },
        {
          title: 'Machine Learning & Analyse Prédictive',
          items: [
            '**Modèles Prédictifs :** Anticipation des comportements, scoring (ex: prédiction de churn) et segmentation client.',
            '**Évaluation & Optimisation :** Comparaison de modèles et ajustement des hyperparamètres pour maximiser la performance et l\'écoresponsabilité.',
          ],
        },
      ],
    },
    {
      id: 'data-analyst-bi',
      title: 'Pôle Data Analyse & Gouvernance',
      intro:
        'Faites parler vos données en toute conformité. Nous transformons vos chiffres en atouts stratégiques visuels tout en assurant leur sécurité.',
      groups: [
        {
          title: 'Business Intelligence & Dataviz',
          items: [
            "**Tableaux de bord interactifs :** Conception d'interfaces de pilotage en temps réel avec Power BI et Streamlit.",
            "**Analyse Exploratoire :** Identification des tendances cachées et extraction d'insights exploitables pour la gouvernance.",
          ],
        },
        {
          title: 'Gouvernance & Sécurité des Données',
          items: [
            '**Management de la Donnée :** Mise en place d\'un cycle de vie de la donnée (traçabilité, archivage) respectant les réglementations (RGPD).',
            '**Qualité & Audit :** Monitoring continu pour garantir l\'adéquation et la propreté des données exploitées.',
          ],
        },
      ],
    },
  ],
  stack: {
    title: 'Stack Technologique & Outils',
    intro:
      'Un écosystème d\'outils modernes pour garantir la fiabilité, la scalabilité et la performance de vos projets data :',
    groups: [
      { label: 'Engineering & BDD', items: ['PostgreSQL', 'MongoDB', 'Redis', 'PySpark'] },
      { label: 'MLOps & Cloud', items: ['Docker', 'Kubernetes', 'Terraform', 'FastAPI', 'AWS / Vercel'] },
      { label: 'Data Science & IA', items: ['Scikit-Learn', 'XGBoost', 'SBERT / Hugging Face', 'Gemini API', 'Pandas'] },
      { label: 'Dataviz & BI', items: ['Power BI', 'Streamlit', 'Plotly', 'MapLibre'] },
    ],
  },
  closing: {
    title: 'De la donnée brute à l\'intelligence automatisée.',
    text: "Une maîtrise complète de la chaîne de valeur Data, de l'architecture serveur jusqu'au tableau de bord final.",
    cta: portfolioCta('data'),
  },
};

export const creationDigitale: Expertise = {
  slug: 'creation-digitale',
  pole: 'KVN HGS',
  navLabel: 'Création Digitale',
  seo: {
    title: 'Création Digitale, Web Design & E-commerce | Entité & Co',
    description:
      'Déployez votre identité en ligne. Du web design au e-commerce, en passant par le graphisme et les réseaux sociaux, confiez votre image au studio KVN HGS.',
  },
  hero: {
    eyebrow: 'Expertise — Création Digitale',
    title: 'Studio de Création Digitale',
    intro:
      "Votre présence en ligne est le premier point de contact entre vous et vos futurs clients. Elle se doit d'être irréprochable. Au sein d'Entité & Co, le studio créatif **KVN HGS** conçoit des écosystèmes digitaux sur-mesure, alliant esthétisme (UI), ergonomie (UX) et performance de conversion.",
    cta: { label: 'Parler de mon projet Web', href: '/contact?sujet=creation-digitale' },
  },
  sectionsHeading: {
    eyebrow: 'Savoir-faire',
    title: 'Du pixel à la conversion',
    intro: 'Deux pôles complémentaires pour construire, faire vivre et incarner votre marque en ligne.',
  },
  sections: [
    {
      id: 'web-e-commerce',
      title: 'Déployez et boostez votre activité (Web & E-commerce)',
      intro:
        'De la vitrine institutionnelle à la boutique en ligne complète, nous développons des plateformes performantes et optimisées pour les moteurs de recherche.',
      groups: [
        {
          title: 'Web Design & Développement (Site Vitrine)',
          items: [
            "**Conception UI/UX & Mobile First :** Des interfaces modernes, pensées pour l'utilisateur, offrant une navigation fluide et intuitive sur tous les écrans (smartphones, tablettes, ordinateurs).",
            '**Développement sur-mesure :** Utilisation de CMS reconnus (WordPress) et de technologies web modernes pour des sites rapides, sécurisés et dont vous gardez le contrôle total (interface administrateur).',
            '**Optimisation SEO :** Intégration des bonnes pratiques de référencement naturel dès la ligne de code et structuration du contenu (textes & images) pour garantir votre visibilité sur Google.',
          ],
        },
        {
          title: 'E-commerce & Marketplaces',
          items: [
            '**Boutiques en ligne performantes :** Création de sites e-commerce robustes via PrestaShop ou WooCommerce pour propulser vos ventes en ligne.',
            "**Expérience d'achat optimisée :** Mise en place de parcours clients sans friction, intégration de fiches produits attractives, et configuration des systèmes de paiement (Stripe, PayPal) et de livraison.",
            "**Stratégie Marketplace :** Déploiement, synchronisation et intégration de vos catalogues sur les grandes places de marché pour démultiplier vos canaux d'acquisition.",
          ],
        },
      ],
      cta: { label: 'Parler de mon projet Web', href: '/contact?sujet=creation-digitale' },
    },
    {
      id: 'graphisme-social-media',
      title: 'Incarnez votre marque (Graphisme & Social Media)',
      intro:
        'Une identité visuelle forte et une communication maîtrisée sont indispensables pour vous démarquer et fidéliser votre communauté.',
      groups: [
        {
          title: 'Graphisme & Identité Visuelle',
          items: [
            '**Branding (Création de marque) :** Conception de logos percutants, modernes et élaboration de chartes graphiques complètes pour assurer une image cohérente sur tous vos supports.',
            "**Supports de communication :** Création visuelle de vos assets numériques (bannières, illustrations) et conception pour l'impression (flyers, affiches, produits dérivés).",
          ],
        },
        {
          title: 'Réseaux Sociaux & Stratégie de Contenu',
          items: [
            "**Audit & Stratégie :** Analyse approfondie de votre présence actuelle et définition d'une ligne éditoriale alignée avec vos objectifs commerciaux.",
            '**Création de contenu :** Production de visuels attractifs, rédaction de publications engageantes et animation de vos communautés.',
            '**Planning éditorial :** Structuration et planification de vos prises de parole pour maintenir un lien constant et fidéliser votre audience.',
          ],
        },
      ],
    },
  ],
  stack: {
    title: 'Stack & Outils Créatifs',
    intro:
      "Nous maîtrisons les standards de l'industrie pour vous livrer des produits finis d'une qualité irréprochable :",
    groups: [
      {
        label: 'Web & E-commerce',
        items: ['WordPress', 'WooCommerce', 'PrestaShop', 'Figma (Prototypage UI)'],
      },
      {
        label: 'Création Visuelle',
        items: ['Suite Adobe', 'Photoshop', 'Illustrator', 'InDesign'],
      },
      {
        label: 'Social Media',
        items: ["Outils d'analyse d'audience", 'Création', 'Planification'],
      },
    ],
  },
  closing: {
    title: 'Déployez votre identité en ligne.',
    text: 'Du web design au e-commerce, en passant par le graphisme et les réseaux sociaux.',
    cta: portfolioCta('web'),
  },
};

export const impressionTextile: Expertise = {
  slug: 'impression-textile',
  pole: 'SFB',
  navLabel: 'Impression Textile',
  seo: {
    title: 'Impression Textile, Merchandising & Objets Publicitaires | Entité & Co',
    description:
      "Donnez vie à votre marque. Découvrez l'expertise SFB d'Entité & Co : marquage textile (sérigraphie, broderie) et objets publicitaires personnalisés.",
  },
  hero: {
    eyebrow: 'Expertise — Impression Textile',
    title: 'Impression Textile & Merchandising',
    intro:
      "Le digital connecte les gens, le physique marque les esprits. L'entité **SFB** transforme votre identité visuelle en produits tangibles. Que vous souhaitiez lancer votre propre marque de vêtements, équiper vos collaborateurs ou préparer un événement, nous assurons la production de vos supports physiques avec une qualité professionnelle.",
    cta: { label: 'Demander un devis textile', href: '/contact?sujet=impression-textile' },
  },
  sectionsHeading: {
    eyebrow: 'Savoir-faire',
    title: 'Du fichier au produit fini',
    intro: 'La technique de marquage et le support adaptés à chaque visuel, chaque budget et chaque usage.',
  },
  sections: [
    {
      id: 'marquage-textile',
      title: 'Marquage Textile Personnalisé',
      intro:
        'Du t-shirt promotionnel au sweat à capuche premium, nous habillons vos équipes et vos communautés en choisissant la technique de marquage la plus adaptée à votre visuel et à votre budget.',
      groups: [
        {
          title: "Nos techniques d'impression textile",
          items: [
            "**Broderie :** La touche haut de gamme et inaltérable. Idéale pour les polos d'entreprise, les casquettes (ex: Black Hound Sports) et les vestes.",
            "**Sérigraphie & Flocage :** Le standard de l'industrie, parfait pour les grandes séries, les logos épurés et les couleurs unies.",
            '**Impression Numérique (DTG) & DTF (Direct to Film) :** La solution parfaite pour les visuels complexes, les photographies ou les petites séries, garantissant des couleurs éclatantes sans perte de détails (ex: T-shirts Kayou).',
            "**Sublimation :** Technique d'imprégnation de la fibre, particulièrement adaptée pour l'équipement sportif ou les textiles techniques.",
          ],
        },
      ],
      cta: { label: 'Demander un devis textile', href: '/contact?sujet=impression-textile' },
    },
    {
      id: 'objets-publicitaires',
      title: 'Objets Publicitaires & Accessoires (Goodies)',
      intro:
        "Étendez la portée de votre marque au-delà de l'écran avec des objets utiles, mémorables et parfaits pour l'événementiel.",
      groups: [
        {
          title: 'Nos supports de communication physique',
          items: [
            "**Gobelets Réutilisables (Ecocups) :** L'incontournable pour vos festivals, salons, ou événements d'entreprise (ex: Projet CFDT / Enedis). Écologique et 100% personnalisable.",
            '**Stickers & Adhésifs :** Impression et découpe sur-mesure de vos logos pour que votre communauté puisse vous afficher partout.',
            "**Impression d'objets & Goodies :** Mugs, accessoires et supports de communication divers pour fidéliser vos clients et partenaires.",
          ],
        },
      ],
    },
  ],
  ecosystem: {
    title: "La force de l'écosystème Entité & Co",
    paragraphs: [
      'Pourquoi passer par nous plutôt que par un simple imprimeur en ligne ? Parce que le pôle de création digitale (**KVN HGS**) et le pôle impression (**SFB**) travaillent main dans la main. Nous concevons vos logos et vos designs graphiques en anticipant dès le premier coup de crayon les contraintes techniques de l\'impression.',
      "**Le résultat :** Fini les mauvaises surprises, les couleurs fades ou les fichiers refusés par l'imprimeur. Ce que vous voyez à l'écran est ce que vous tenez entre vos mains.",
    ],
  },
  closing: {
    title: 'Donnez vie à votre marque.',
    text: 'Marquage textile (sérigraphie, broderie) et objets publicitaires personnalisés.',
    cta: portfolioCta('textile'),
  },
};

export const expertises = [dataIa, creationDigitale, impressionTextile] as const;

const expertisesByLang: Record<Lang, readonly Expertise[]> = { fr: expertises, en: expertisesEn };

export const getExpertises = (lang: Lang): readonly Expertise[] => expertisesByLang[lang];

export const getExpertise = (slug: ExpertiseSlug, lang: Lang): Expertise => {
  const expertise = expertisesByLang[lang].find((item) => item.slug === slug);
  if (!expertise) throw new Error(`Expertise introuvable : « ${lang}/${slug} »`);
  return expertise;
};
