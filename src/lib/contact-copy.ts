/** Textes du formulaire de contact transmis au script client (attribut `data-copy`). */
export interface ContactScriptCopy {
  required: string;
  requiredCheckbox: string;
  requiredSelect: string;
  invalidEmail: string;
  /** `{n}` : nombre d'erreurs. */
  errorsOne: string;
  errorsMany: string;
  /** `{email}` : adresse de contact. */
  opening: string;
  subject: string;
  labels: { name: string; company: string; email: string; phone: string; project: string };
}
