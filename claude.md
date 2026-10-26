# CONTEXTE DU PROJET : REFONTE ENTITÉ & CO

Tu es un développeur web expert full-stack spécialisé dans la création de sites vitrines ultra-performants, modernes et optimisés pour le SEO.
Ta mission est de coder entièrement le nouveau site web "Entité & Co" pour remplacer l'ancien site WordPress.

**DIRECTIVE CRITIQUE - SKILLS :** Pour accomplir cette mission, tu dois impérativement t'appuyer sur tes capacités avancées en utilisant les fichiers de configuration de tes compétences : `skills/superpowers` et `skills/ui-ux-pro-max`. Applique rigoureusement les standards d'excellence, les animations et les patterns d'interface qui y sont définis.

**Philosophie de la marque :** "L'alliance de la technologie, de la créativité et de l'innovation. Un est tout, tout est un."
Le site est un hub centralisant les compétences d'un créateur digital pluridisciplinaire. L'objectif est de clarifier l'offre en abandonnant le jargon interne dans la navigation au profit d'une structure SEO-friendly.

---

# 1. STACK TECHNIQUE (STRICT)

Tu dois impérativement utiliser les technologies suivantes :

* **Framework :** Astro (Configuration pour un rendu statique ultra-rapide SSG).
* **Styling :** Tailwind CSS.
* **Langage :** TypeScript (Typage strict requis pour tous les composants).
* **Déploiement cible :** Vercel.
* **i18n :** routage natif Astro (`defaultLocale: 'fr'`, `locales: ['fr', 'en']`, `prefixDefaultLocale: false`) : français à la racine, anglais sous `/en` (mêmes slugs). Voir section 9.
* **Icônes :** Phosphor Icons (`@phosphor-icons/react/ssr`, noms suffixés `…Icon`, rendu statique sans JS), recommandé par `ui-ux-pro-max`. Logos de marque officiels : `LinkedinLogoIcon`, `InstagramLogoIcon`.

---

# 2. DESIGN SYSTEM & UI/UX

Basé sur l'identité visuelle historique et amplifié par les directives de `skills/ui-ux-pro-max`, le nouveau site doit dégager une atmosphère technologique, premium, mystérieuse et épurée.

* **Thème principal :** Dark Mode par défaut (Fonds très sombres, textes clairs), avec un **thème clair** disponible :
  * Bascule via la classe `.dark` sur `<html>` (variantes Tailwind `dark:`), bouton Soleil / Lune dans la Navbar (desktop et mobile).
  * Script anti-FOUC inline dans le `<head>` de `Layout.astro` : choix mémorisé (`localStorage.theme`) → `prefers-color-scheme` → sombre par défaut.
  * Couleurs exposées en tokens sémantiques (`bg-canvas`, `text-fg`, `text-fg-muted`, `text-accent`, `border-line`…) définis dans `src/styles/global.css` ; référence complète dans `design-system/entite-et-co/MASTER.md`.
* **Palette de Couleurs (Tailwind) :**
  * *Background :* Sombre `neutral-950` (`#0a0a0a`) / Clair `neutral-50` (`#fafafa`), avec de subtils dégradés et effets de grain.
  * *Texte Principal :* Sombre : blanc cassé (`#f3f4f6`) / Clair : `neutral-900`.
  * *Texte Secondaire :* Sombre : gris clair (`#9ca3af`) / Clair : `neutral-600`.
  * *Couleur d'Accentuation (Brand) :* Rouge vif / Vermillon (pour rappeler le "É" rouge du logo historique) : `#E60000` pour les fonds (boutons, puces). Pour le texte rouge, utiliser `text-accent` (`#ff3b3b` en sombre, `#c40000` en clair) afin de respecter le contraste AA.
* **Typographie :**
  * *Titres (H1, H2) :* Police sans-serif géométrique et moderne (ex: `Space Grotesk`, `Syne` ou `Clash Display`). Titres massifs et impactants.
  * *Corps de texte :* Police lisible et neutre (ex: `Inter` ou `Plus Jakarta Sans`).
* **Composants UI & Animations :**
  * Utilisation de *Glassmorphism* (fonds translucides avec flou) pour les cartes et la navigation fixe (Navbar).
  * Animations subtiles au scroll en CSS natif (`.reveal`, scroll-driven animations, zéro JS) pour l'apparition des éléments ; `prefers-reduced-motion` respecté.
  * Boutons d'appel à l'action (CTA) minimalistes avec effet de survol marqué (ex: fond transparent qui se remplit de rouge).
  * Les projets du portfolio doivent s'ouvrir dans des modales (Dialogs) fluides, sans recharger la page.
  * Cartes interactives (accueil, grille bento, projets) : classe `.card-hover` (`global.css`) : élévation `-translate-y-1`, liseré `border-brand/40`, ombre ; `translate` (compatible `.reveal`), désactivée si `prefers-reduced-motion`.
  * **Design sans images** : positionnement « Expert indépendant Data Engineering & IA », rendu typographique façon SaaS technique (grilles Bento, tags `font-mono`). Images autorisées sur le front : le **logo**, la **photo du fondateur** (À propos) et les **visuels des projets du portfolio** (`cover` + `gallery`, grille, modale et page projet). Accueil et expertises restent sans image.

---

# 3. NOUVEAU SITEMAP (ARCHITECTURE SEO)

Voici la structure exacte des pages et des routes à créer. *Note : Les anciens noms (XENA, KVN HGS, SFB) sont conservés dans le texte narratif des pages, mais pas dans les URLs ou la navigation principale.*

**Menu de navigation principal :**

* `Accueil` (Route: `/`)
* `Data & IA` (Route: `/expertises/data-ia`) -> *Anciennement XENA*
* `Création Digitale` (Route: `/expertises/creation-digitale`) -> *Anciennement KVN HGS*
* `Impression Textile` (Route: `/expertises/impression-textile`) -> *Anciennement SFB*
* `Portfolio` (Route: `/portfolio`) -> *Galerie unique avec filtres de catégories*
* `À Propos` (Route: `/a-propos`)
* `Contact` (Route: `/contact`)

**Footer (Liens annexes) :**

* Mentions Légales
* Politique de confidentialité

---

# 4. SOURCE DES DONNÉES (DOSSIER LOCAL)

Le contenu textuel et les assets visuels se trouvent dans le dossier local nommé `migration-entite/` situé à la racine du projet.
Tu dois lire les fichiers Markdown (`.md`) présents dans ces sous-dossiers pour injecter le vrai texte dans les pages que tu vas créer :

* `/migration-entite/global/` : Contient le logo, les informations du footer, les liens réseaux sociaux.
* `/migration-entite/page-accueil/` : Contient le texte H1, l'intro et la philosophie.
* `/migration-entite/page-data-ia/` : Contenu détaillé sur l'expertise IA, Data Science et Data Analysis.
* `/migration-entite/page-creation-digitale/` : Contenu sur le Web design, Graphisme, E-commerce, etc.
* `/migration-entite/page-impression-textile/` : Contenu sur le marquage textile et accessoires.
* `/migration-entite/page-a-propos/` : Contenu sur la vision de l'entreprise et le fondateur.

*Note pour le développeur IA :* Les images de ces dossiers vont dans `src/assets/<dossier-source>/` (et non `public/`) pour être optimisées par le composant `<Image />` d'Astro : voir section 7.

---

# 5. PLAN D'ACTION (INSTRUCTIONS D'EXÉCUTION)

Pour mener à bien cette mission, procède étape par étape. Ne tente pas de tout générer en une seule réponse.

**⚠️ RÈGLE D'OR CONCERNANT LES IMAGES (PLACEHOLDERS) :** *(valable jusqu'à la phase d'intégration des médias, voir section 7)*
Pour cette phase de développement, n'intègre **aucune véritable image**. Tu dois générer des espaces réservés (placeholders) élégants en utilisant Tailwind CSS (ex: un bloc `bg-neutral-900 border border-neutral-800 rounded-xl` centré avec une icône Phosphor et le texte "Ajouter une image" ou "Mockup Projet"). Cela permettra de valider la structure de la maquette avant l'intégration des médias finaux.

**Étape 0 : Scan et Apprentissage**

* Lis attentivement tes fichiers de compétences `skills/superpowers` et `skills/ui-ux-pro-max` et intègre leurs instructions.
* Scanne l'intégralité du dossier `migration-entite/` pour comprendre l'arborescence des données avant de coder.

**Étape 1 : Initialisation**

* Configure le projet Astro de base avec l'intégration Tailwind CSS et React (si nécessaire pour certains composants interactifs comme les modales).
* Configure le layout de base (`Layout.astro`) incluant les polices et la couleur de fond globale (Dark theme).

**Étape 2 : Composants Globaux**

* Crée la `Navbar` (transparente, sticky, responsive avec menu burger sur mobile).
* Crée le `Footer`.
* Crée les composants réutilisables (Boutons, Cartes de services avec espaces images vides, Titres de section).

**Étape 3 : Intégration des Pages**

* Lis le dossier `migration-entite/page-accueil/` et construis la page d'accueil (`index.astro`) en utilisant des bannières placeholders stylisées pour chaque section.
* Crée le système de routage pour le dossier `/expertises/` et génère les 3 pages d'expertise en lisant leurs dossiers respectifs.
* Génère les pages `a-propos`, `contact`, ainsi que les pages légales.

**Étape 4 : Le Portfolio Dynamique**

* Construis la page `/portfolio/` en créant une collection Astro (`src/content/portfolio/`) si pertinent, ou un tableau de données TypeScript centralisé.
* Génère une dizaine de projets fictifs avec des images de remplacement (placeholders) pour tester le rendu de la grille.
* Implémente le système de filtres visuels (Tous | Data | Web | Textile).

**Critères de validation finaux :**

* Le site doit obtenir un score de 100% sur Lighthouse (Performance, Accessibilité, Best Practices, SEO).
* Le design doit être parfaitement responsive (Mobile-first).

---

# 6. ÉTAT D'AVANCEMENT

* ✅ Étapes 0 à 4 terminées (commit `feat: dynamic portfolio collection, filters, and modal system (step 4)`).
* Portfolio : collection Astro `src/content/portfolio/*.md` (schéma dans `src/content.config.ts`), catégories dans `src/data/portfolio.ts`, helpers dans `src/lib/portfolio.ts`, composants dans `src/components/portfolio/`. Chaque projet a une page `/portfolio/[slug]` (SEO) et s'ouvre en modale depuis la grille.
* ✅ Médias réels intégrés (section 7) : logos, accueil, expertises, à propos ; portfolio réel : 6 projets textile (Balek, Kayou, CFDT Enedis, P4PBLUR, La Yeyette, Adelante Polo Team) et 2 projets web (La Yeyette au Rhum e-commerce, Pavillons de l'Atlantique), avec `cover` + `gallery`.
* Projets data réels (les projets `demo: true` ont été supprimés) : Prédiction de Churn, AISCA, Urban Data Explorer (`src/content/portfolio/data-ia-*.md`, logos dans `src/assets/page-portfolio/data-ia/`, `gallery: []`).
* Fiches Data & IA : texte dans le champ frontmatter `intro` (`context`, `approachIntro?`, `approach[]` avec `icon` parmi `approachIconKeys`, `deliverables`), rendu en grille Bento par `ProjectDetail.astro` (corps Markdown vide). Aucun visuel sur la fiche (`cover` sert uniquement à la carte de la grille). Études de cas interactives par slug dans `src/components/portfolio/case-studies/` (`FlowDiagram`, `StackSection`, iframes), centralisées dans `CaseStudy.astro`, affichées sur la page projet **et** dans la modale du portfolio (ids préfixés via `PrefixIds`, boutons de fin `ProjectActions.astro` avec « Ouvrir la page du projet » en modale) ; dashboard Urban servi depuis `public/urban-data-explorer/`.
* Projet « My Social Network API » (`data-ia-my-social-network`) : étude de cas `MySocialNetwork.astro` (terminal `ui/TerminalApi.astro` + `<Code />` Shiki, surface d'API calculée depuis l'export Postman `src/assets/page-portfolio/data-ia/projets-portfolio-data-ia-my-social-network.json`, diagramme ER `ui/MermaidDiagram.astro` chargé paresseusement au scroll).
* ✅ Pivot « Expert Data Engineering & IA » : accueil (carte « Cœur d'expertise » pleine largeur + « Compétences transverses »), les 3 expertises en grille Bento (`ExpertisePage.astro`, icônes dans `sectionIcons`), section « Projets & Réalisations (Use Cases) » sur Data & IA (`useCases` dans `expertises.ts`).
* ✅ Images retirées de l'accueil et des expertises (`ImagePlaceholder` et `expertise-images.ts` supprimés) ; conservées : logo, photo du fondateur, visuels du portfolio.
* ✅ i18n FR/EN (section 9).
* 🔜 Prochaine phase : déploiement Vercel (section 8).

---

# 7. INTÉGRATION DES VRAIS MÉDIAS (FIN DE LA RÈGLE D'OR)

> ⚠️ Depuis le pivot minimaliste, seuls le logo, la photo du fondateur et les visuels du portfolio sont affichés. Les projets étant rangés par langue (`src/content/portfolio/fr|en/`), les chemins d'image ont un niveau de plus : `cover: "../../../assets/page-portfolio/…"`, à renseigner dans les deux langues (`coverAlt` traduit).

* **Emplacement :** images de contenu dans `src/assets/` (optimisées par Astro : WebP, `width`/`height`, `srcset`, lazy-loading), un sous-dossier par page source : `global/`, `page-accueil/`, `page-data-ia/`, `page-creation-digitale/`, `page-impression-textile/`, `page-a-propos/`, `page-portfolio/<categorie-ou-projet>/` (ex. `page-portfolio/textile/entite_sfb_<client>_<visuel>.webp`). `public/` est réservé aux fichiers servis tels quels (favicon, `robots.txt`, images Open Graph).
* **Format des sources :** `.webp` uniquement (convertir avant d'ajouter), noms en minuscules sans espaces ni guillemets.
* **Portfolio :** schéma `portfolio` (`src/content.config.ts`) : `cover: image().optional()` + `coverAlt` (obligatoire si `cover`) + `gallery: z.array(image()).optional()`. Chemins **relatifs au fichier `.md`** : `cover: "../../assets/page-portfolio/textile/entite_sfb_kayou_1.webp"`. Champs requis : `title`, `category`, `client`, `year`, `summary` (≤ 160 car.), `services`, `order`. Tout champ hors schéma (ex. `expertise`) est ignoré.
* **Rendu :** `<ContentImage />` (`src/components/ui/ContentImage.astro`) remplace `<ImagePlaceholder />` dans le même cadre (ratios dans `src/lib/image-ratios.ts`, anti-CLS) ; `priority` pour le hero (`loading="eager"` + `fetchpriority="high"`). `fit="contain"` pour les produits / vêtements (portfolio) : visuel entier, sans rognage, fond `bg-white dark:bg-neutral-900`, sans bordure (la carte `glass` en a déjà une). `fit="cover"` (défaut) : rognage + `border-line`.
* **Pages statiques** : `import visuel from '@/assets/page-.../fichier.webp'` ; visuels des expertises centralisés dans `src/data/expertise-images.ts`.
* Toujours un `alt` descriptif en français ; sources ≤ 2560 px de large.

---

# 8. DÉPLOIEMENT VERCEL

* Rendu 100 % statique (`output: 'static'`) : **aucun adaptateur `@astrojs/vercel` requis**.
* `vercel.json` : preset `astro`, `npm run build` (`astro check` + build), sortie `dist/`, `cleanUrls` + `trailingSlash: false` (aligné sur `trailingSlash: 'never'` d'Astro), cache immuable sur `/_astro/*`, en-têtes de sécurité.
* Node ≥ 22.12 (champ `engines` de `package.json`, requis par Astro 7).
* `site: 'https://www.entite.co'` dans `astro.config.mjs` : à modifier si le domaine final change (canonical, sitemap, Open Graph).
* Procédure : pousser sur GitHub → importer le dépôt dans Vercel (réglages détectés automatiquement) → brancher le domaine.

---

# 9. INTERNATIONALISATION (FR / EN)

* **Routes :** pages FR dans `src/pages/`, EN dans `src/pages/en/` (mêmes slugs). Chaque route est un fichier mince qui rend un composant de page partagé (`src/components/pages/*Page.astro`, `ExpertisePage.astro`) avec `lang="fr"` ou `lang="en"`.
* **Dictionnaire UI :** `src/i18n/ui.ts` (navigation, footer, boutons, statuts) ; helpers dans `src/i18n/utils.ts` : `getLangFromUrl`, `useTranslations`, `localizePath` (préfixe `/en`, idempotent, ignore ancres / mailto), `translatePath` (sélecteur de langue + hreflang).
* **Contenus :** textes de page dans l'objet `copy` de chaque composant de page ; expertises : `src/data/expertises.ts` (FR) + `src/data/expertises.en.ts` (EN), via `getExpertises(lang)` / `getExpertise(slug, lang)`. Liens écrits **sans préfixe** dans les données : les composants les localisent.
* **Portfolio :** `src/content/portfolio/fr/*.md` et `src/content/portfolio/en/*.md` (même nom de fichier = même slug) ; id de collection `<lang>/<slug>` ; `getProjects(lang)`, `getProject(slug, lang)`, `projectSlug`, `projectHref` dans `src/lib/portfolio.ts`. Tout nouveau projet doit exister dans les deux dossiers.
* **Non traduit :** pages légales et 404 (FR uniquement) ; le sélecteur renvoie alors vers `/en`. Les paramètres d'URL restent `?categorie=` / `?sujet=`.
* **SEO :** `<html lang>`, `og:locale`, `<link rel="alternate" hreflang>` (fr, en, x-default) pour les pages traduites, alternatives hreflang dans le sitemap.
