/**
 * Convertit le sous-ensemble Markdown inline utilisé dans les contenus migrés
 * (`**gras**`, `*italique*`) en HTML sûr : le texte est échappé avant conversion.
 */
const escapeHtml = (value: string): string =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');

export function inlineMarkdown(value: string): string {
  return escapeHtml(value)
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-fg">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>');
}
