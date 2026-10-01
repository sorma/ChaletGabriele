'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { errorLabels } from '@/i18n/ui';

export default function ErrorPage({ reset }) {
  const { lang } = useParams();
  const labels = errorLabels[lang] ?? errorLabels.it;
  return <div className="container" role="alert" style={{ paddingBlock: '4rem' }}>
    <h1>{labels.title}</h1>
    <p>{labels.text}</p>
    <button type="button" onClick={reset}>{labels.retry}</button>
    <Link href={`/${errorLabels[lang] ? lang : 'it'}`}>Home</Link>
  </div>;
}
