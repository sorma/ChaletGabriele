'use client';

export default function GlobalError({ reset }) {
  return <html lang="it"><body>
    <h1>Pagina temporaneamente non disponibile / Page temporarily unavailable</h1>
    <button type="button" onClick={reset}>Riprova / Retry</button>
    <a href="tel:+39031963624">031 963624</a>
  </body></html>;
}
