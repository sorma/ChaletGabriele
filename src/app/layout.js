import './globals.css';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import PageTransition  from '@/components/transition/page-transition';
import RouteTransition from '@/components/transition/route-transition';

export const metadata = {
  title: 'Polentoteca Chalet Gabriele',
  description: 'Base Next.js moderna per la Polentoteca Chalet Gabriele.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {/* Curtain scuro — solo al primo accesso della sessione */}
        <PageTransition />

        <a className="skipLink" href="#contenuto">Vai al contenuto</a>
        <Header />

        {/* Fade leggero su ogni cambio di pagina */}
        <RouteTransition>
          <main id="contenuto">{children}</main>
        </RouteTransition>

        <Footer />
      </body>
    </html>
  );
}
