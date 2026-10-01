import '../globals.css';
import '@fontsource-variable/cormorant-garamond';
import '@fontsource-variable/manrope';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import PageTransition  from '@/components/transition/page-transition';
import RouteTransition from '@/components/transition/route-transition';
import { getDictionary } from '@/i18n/dictionaries';
import { locales } from '@/i18n/config';
import { site, siteUrl } from '@/lib/site';

export const metadata = {
  title: { default: 'Polentoteca Chalet Gabriele', template: '%s | Polentoteca Chalet Gabriele' },
  ...(siteUrl() ? { metadataBase: new URL(siteUrl()) } : {}),
  robots: !site.url || !site.privacy.approved || !site.termsApproved ? { index: false, follow: false } : { index: true, follow: true },
};

export function generateStaticParams() {
  return locales.map(lang => ({ lang }));
}

export default async function RootLayout({ children, params }) {
  // Await params as required by Next.js 15+ 
  const lang = (await params)?.lang || 'it';
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} data-scroll-behavior="smooth">
      <body>
        {/* Curtain scuro — solo al primo accesso della sessione */}
        <PageTransition />

        <a className="skipLink" href="#contenuto">{dict.layout.vaiAlContenuto}</a>
        <Header dict={dict} lang={lang} />

        {/* Fade leggero su ogni cambio di pagina */}
        <RouteTransition>
          <main id="contenuto">{children}</main>
        </RouteTransition>

        <Footer dict={dict} lang={lang} />
      </body>
    </html>
  );
}
