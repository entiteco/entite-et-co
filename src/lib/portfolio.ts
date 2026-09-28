import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'portfolio'>;

/** Projets triés selon le champ `order`. */
export async function getProjects(): Promise<Project[]> {
  const projects = await getCollection('portfolio');
  return projects.sort((a, b) => a.data.order - b.data.order);
}

export const projectHref = (project: Project): string => `/portfolio/${project.id}`;
