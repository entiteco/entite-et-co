import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { approachIconKeys, projectCategories } from '@/data/portfolio';

// Pages légales : texte extrait de migration-entite/global/informations_globales.md
const legal = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/legal' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    updated: z.coerce.date().optional(),
  }),
});

// Portfolio : un fichier Markdown par projet et par langue (fr/, en/) ; frontmatter = fiche,
// corps = description. Identifiant : `<lang>/<slug>`.
const portfolio = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/portfolio' }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        category: z.enum(projectCategories),
        client: z.string(),
        year: z.number().int(),
        /** Accroche affichée sur la carte (≤ 160 caractères). */
        summary: z.string().max(160),
        services: z.array(z.string()).min(1),
        tools: z.array(z.string()).default([]),
        /** Carte mise en avant (2 colonnes sur grand écran). */
        featured: z.boolean().default(false),
        /** Ordre d'affichage (croissant). */
        order: z.number().int(),
        /** Projet de démonstration (phase maquette) : à retirer avec les vraies réalisations. */
        demo: z.boolean().default(false),
        /** Visuel principal (chemin relatif au fichier .md, ex. `../../../assets/page-portfolio/…`). */
        cover: image().optional(),
        coverAlt: z.string().optional(),
        /** Visuels complémentaires affichés en grille en bas de la fiche projet. */
        gallery: z.array(image()).optional(),
        /** Introduction structurée (grille Bento) : remplace le corps Markdown dans la fiche. */
        intro: z
          .object({
            context: z.string(),
            approachIntro: z.string().optional(),
            approach: z
              .array(z.object({ icon: z.enum(approachIconKeys), title: z.string(), text: z.string() }))
              .min(1),
            deliverables: z.string(),
          })
          .optional(),
      })
      .refine((data) => !data.cover || data.coverAlt, {
        message: '`coverAlt` est requis lorsque `cover` est renseigné.',
        path: ['coverAlt'],
      }),
});

export const collections = { legal, portfolio };
