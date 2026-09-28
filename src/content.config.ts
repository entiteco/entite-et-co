import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { projectCategories } from '@/data/portfolio';

// Pages légales : texte extrait de migration-entite/global/informations_globales.md
const legal = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/legal' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    updated: z.coerce.date().optional(),
  }),
});

// Portfolio : un fichier Markdown par projet (frontmatter = fiche, corps = description).
const portfolio = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/portfolio' }),
  schema: z.object({
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
  }),
});

export const collections = { legal, portfolio };
