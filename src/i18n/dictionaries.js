import 'server-only';

const dictionaries = {
  it: () => import('./locales/it.json').then((module) => module.default),
  en: () => import('./locales/en.json').then((module) => module.default),
  es: () => import('./locales/es.json').then((module) => module.default),
  de: () => import('./locales/de.json').then((module) => module.default),
};

export const getDictionary = async (locale) => {
  return dictionaries[locale]?.() ?? dictionaries.it();
};
