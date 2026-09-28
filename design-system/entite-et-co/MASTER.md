# Design System Master File — Entité & Co

> **LOGIC:** When building a specific page, first check `design-system/entite-et-co/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file. Otherwise, follow the rules below.
>
> **Precedence:** `CLAUDE.md` (brief client) > ce fichier > recommandations brutes de `ui-ux-pro-max`.
> Généré via `search.py "creative digital studio AI portfolio dark premium" --design-system --variance 6 --motion 4 --density 3`,
> puis réaligné sur CLAUDE.md (la sortie brute proposait un accent blanc, Archivo, une modale blanche et GSAP — écartés).

**Project:** Entité & Co · **Updated:** 2026-09-28
**Design Dials:** Variance 6/10 (Balanced / Modern) · Motion 4/10 (Standard) · Density 3/10 (Spacious)
**Source des tokens :** `src/styles/global.css` (bloc `@theme`). Ne jamais écrire de hex bruts dans les composants.

---

## Couleurs (tokens Tailwind)

| Rôle | Token / classe | Valeur | Usage |
|------|----------------|--------|-------|
| Background | `bg-ink` | `#050505` | Fond global (+ halos rouges et grain via `.bg-atmosphere`) |
| Surface | `bg-ink-soft` / `.glass` | `#0c0c0c` / `white/3% + blur` | Cartes, navbar, modales |
| Texte principal | `text-gray-100` | `#f3f4f6` | Titres, corps |
| Texte secondaire | `text-gray-400` | `#9ca3af` | Descriptions (7.6:1 sur ink) |
| Brand (fill) | `bg-brand` | `#e60000` | Fonds de CTA, pastilles — texte blanc dessus (4.8:1) |
| Brand hover | `bg-brand-hover` | `#ff1a1a` | Survol des fills |
| Brand (texte) | `text-brand-bright` | `#ff3b3b` | Texte/icônes accent sur fond noir (5.7:1) |
| Bordures | `border-white/10` | — | Séparateurs, contours glass |
| Focus ring | `outline-brand-bright` | `#ff3b3b` | 2px, offset 4px (global `:focus-visible`) |

⚠️ Ne jamais utiliser `text-brand` (#e60000) pour du texte courant sur fond noir : 4.3:1 < AA.

## Typographie

- **Titres :** Space Grotesk Variable (`font-display`), 600–700, `tracking-tight`, `text-balance`.
- **Corps :** Inter Variable (`font-sans`), 400, `leading-relaxed`, min 16px.
- Self-hosted via `@fontsource-variable/*`, subset latin préchargé. Pas de Google Fonts CDN (Lighthouse).
- Échelle : 14 / 16 / 18 / 20 / 24 / 36 / 48 / 72 / 96px. Eyebrow : 12–14px, `uppercase tracking-[0.3em]`.

## Espacement & layout

- Container unique : `.container-site` (`max-w-7xl px-5 sm:px-8`).
- Sections : `py-24 sm:py-32` (densité 3/10 = spacieux). Grilles : `gap-6` / `gap-8`.
- Breakpoints testés : 375 / 768 / 1024 / 1440. Mobile-first, `min-h-dvh` plutôt que `100vh`.
- Z-index : `base 0` · `overlay 10` · `nav 30` · `modal 50` (tokens `--z-index-*`).
- Navbar fixe flottante : le contenu réserve `pt-28` en haut de page (fixed-element-offset).

## Rayons & élévation

- Boutons : `rounded-full`. Cartes : `rounded-2xl`. Modales : `rounded-3xl`.
- Élévation par la transparence et les bordures (glass), pas par des ombres portées lourdes.
- Glow brand autorisé au hover des cartes : `shadow-[0_0_40px_-12px_rgb(230_0_0/0.5)]`.

## Composants

### Boutons (`Button.astro`)
- **primary** : fond transparent + bordure brand, remplissage rouge qui monte au survol (`::before` en `scale-y`, transform only), texte blanc.
- **secondary / ghost** : bordure `white/15`, survol `bg-white/5` + bordure `white/30`.
- Hauteur min 48px (≥ 44px touch target), `cursor-pointer`, transitions 200–300ms `ease-out-expo`.
- Icône Lucide optionnelle à droite, `aria-hidden`, translate-x au survol.

### Cartes de service (`ServiceCard.astro`)
- `.glass rounded-2xl`, placeholder image en tête, titre, texte, liste à puces, lien.
- Survol : bordure `brand/40` + glow, aucune translation qui décale le layout.
- Toute la carte n'est pas un lien : seul le CTA est focusable (lecture d'écran propre).

### Placeholders d'images (`ImagePlaceholder.astro`) — RÈGLE D'OR phase maquette
- `bg-neutral-900 border border-neutral-800 rounded-xl`, ratio réservé (`aspect-*`) pour zéro CLS.
- Icône Lucide `ImagePlus` + libellé ("Ajouter une image" / "Mockup Projet"), `role="img"` + `aria-label`.

### Titres de section (`SectionHeading.astro`)
- Eyebrow brand-bright (numéro/label) + H2 massif + intro gray-400 (max 65ch).
- Niveau de titre configurable (`as="h2" | "h3"`) pour respecter la hiérarchie.

### Modales (portfolio, Étape 4)
- Fond overlay `bg-ink/80 backdrop-blur` (blur = signal de dismiss), panneau `.glass` sombre — jamais blanc.
- `<dialog>` natif ou React, focus trap, fermeture Échap + bouton visible, retour du focus au déclencheur.

## Motion

- **Apparition au scroll :** `.reveal` — CSS scroll-driven (`animation-timeline: view()`), zéro JS. Stagger via `style="--reveal-start: N%"` (décalage de plage, ~6–8 % par élément).
- Pas de GSAP ni Framer Motion par défaut (budget JS / Lighthouse 100). À réévaluer seulement si un besoin précis l'exige.
- Easing : `ease-out-expo` à l'entrée ; sorties ~65% de la durée d'entrée.
- Transform/opacity uniquement. 1–2 éléments animés max par vue.
- `prefers-reduced-motion: reduce` → rendu final immédiat.

## Anti-patterns

- ❌ Emojis comme icônes (Lucide uniquement, stroke 1.5–2, tailles cohérentes)
- ❌ Hex bruts dans les composants — utiliser les tokens
- ❌ Hover qui décale le layout (scale sur cartes en grille)
- ❌ Focus invisible / supprimé
- ❌ Texte rouge `#e60000` sur noir
- ❌ Jargon interne (XENA, KVN HGS, SFB) dans la navigation ou les URLs — autorisé dans le texte narratif
- ❌ Blocs de texte massifs sans respiration (anti-pattern "Heavy text")

## Pre-Delivery Checklist

- [ ] Icônes Lucide, pas d'emoji ; icônes décoratives `aria-hidden`
- [ ] `cursor-pointer` + feedback de survol sur tout élément cliquable
- [ ] Transitions 150–300ms, transform/opacity only
- [ ] Contraste ≥ 4.5:1 (texte), focus visible 3:1
- [ ] `prefers-reduced-motion` respecté
- [ ] Responsive 375 / 768 / 1024 / 1440, aucun scroll horizontal
- [ ] Aucun contenu masqué par la navbar fixe (ni élément focusé)
- [ ] Hiérarchie de titres séquentielle, un seul H1 par page
- [ ] Cibles tactiles ≥ 44px, espacement ≥ 8px
