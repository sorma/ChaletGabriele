import '../globals.css';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import PageTransition  from '@/components/transition/page-transition';
import RouteTransition from '@/components/transition/route-transition';
import { getDictionary } from '@/i18n/dictionaries';

export const metadata = {
  title: 'Polentoteca Chalet Gabriele',
  description: 'Base Next.js moderna per la Polentoteca Chalet Gabriele.'
};

export default async function RootLayout({ children, params }) {
  // Await params as required by Next.js 15+ 
  const lang = (await params)?.lang || 'it';
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body suppressHydrationWarning>
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
