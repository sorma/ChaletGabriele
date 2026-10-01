import { getDictionary } from '@/i18n/dictionaries';
import LegalPage from '@/components/legal/LegalPage';
import { pageMetadata } from '@/lib/site';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return pageMetadata(lang, '/termini-e-condizioni', dict.termini.title, dict.termini.lead);
}

export default async function Page({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return <LegalPage dict={dict} type="terms" />;
}
