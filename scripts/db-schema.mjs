export const translatedFields = {
  menu_sezioni: ['label', 'nota'],
  menu_piatti: ['nome', 'desc'],
  menu_fissi: ['nome', 'incluso', 'portate'],
};
export const requiredColumns = {
  menu_sezioni: ['id', 'label', 'nota', 'tipo', 'ordine'],
  menu_piatti: ['id', 'sezione_id', 'nome', 'desc', 'prezzo', 'prezzi_multipli', 'special', 'ordine'],
  menu_fissi: ['id', 'nome', 'prezzo', 'incluso', 'portate', 'ordine'],
};
export function translationColumns(table) {
  return translatedFields[table].flatMap(field => ['en', 'es', 'de'].map(lang => `${field}_${lang}`));
}
export function missingTranslations(table, existing) {
  return translationColumns(table).filter(column => !existing.includes(column));
}
