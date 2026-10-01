import { getDictionary } from '@/i18n/dictionaries';

export const metadata = { title: 'Webcam', robots: { index: false, follow: false } };

export default async function Page({ params }) {
  const { lang } = await params;
  await getDictionary(lang);
  return null;
}
