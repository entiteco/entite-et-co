// Projets du portfolio : un dossier par langue (src/content/portfolio/<lang>/<slug>.md),
// identifiant de collection `<lang>/<slug>`, même slug d'une langue à l'autre.
import { getCollection, getEntry, type CollectionEntry } from 'astro:content';
import { languages, type Lang } from '@/i18n/ui';
import { localizePath } from '@/i18n/utils';

export type Project = CollectionEntry<'portfolio'>;

export const projectLang = (project: Project): Lang => {
  const lang = project.id.split('/')[0];
  if (!lang || !Object.hasOwn(languages, lang)) {
    throw new Error(`Projet hors dossier de langue : « ${project.id} »`);
  }
  return lang as Lang;
};

export const projectSlug = (project: Project): string =>
  project.id.slice(project.id.indexOf('/') + 1);

/** Projets de la langue `lang`, triés selon le champ `order`. */
export async function getProjects(lang: Lang): Promise<Project[]> {
  const projects = await getCollection('portfolio', (project) => projectLang(project) === lang);
  return projects.sort((a, b) => a.data.order - b.data.order);
}

export async function getProject(slug: string, lang: Lang): Promise<Project> {
  const project = await getEntry('portfolio', `${lang}/${slug}`);
  if (!project) throw new Error(`Projet portfolio introuvable : « ${lang}/${slug} »`);
  return project;
}

export const projectHref = (project: Project): string =>
  localizePath(`/portfolio/${projectSlug(project)}`, projectLang(project));
