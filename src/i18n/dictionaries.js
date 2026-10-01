import 'server-only';
import { notFound } from 'next/navigation';
import { isLocale } from './config';

const dictionaries = {
  it: () => import('./locales/it.json').then((module) => module.default),
  en: () => import('./locales/en.json').then((module) => module.default),
  es: () => import('./locales/es.json').then((module) => module.default),
  de: () => import('./locales/de.json').then((module) => module.default),
};

export const getDictionary = async (locale) => {
  if (!isLocale(locale)) notFound();
  return dictionaries[locale]();
};
