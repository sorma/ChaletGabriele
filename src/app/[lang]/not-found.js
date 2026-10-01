import Link from 'next/link';

export default function NotFound() {
  return <div className="container" style={{ paddingBlock: '4rem' }}>
    <h1>404</h1>
    <p>Pagina non trovata / Page not found.</p>
    <Link href="/it">Home</Link>
  </div>;
}
