import { site } from '@/lib/site';
import styles from './LegalPage.module.css';

export default function LegalPage({ dict, type }) {
  const document = type === 'privacy' ? dict.privacy : dict.termini;
  const approved = type === 'privacy' ? site.privacy.approved : site.termsApproved;
  const fields = [
    [dict.legal.owner, site.business.legalName],
    [dict.legal.address, site.business.address],
    [dict.legal.email, site.business.privacyEmail],
    [dict.legal.vat, site.business.vatId],
    ...(type === 'privacy' ? [
      [dict.legal.retention, site.privacy.retention],
      [dict.legal.basis, site.privacy.legalBasis],
      [dict.legal.transfers, site.privacy.internationalTransfers],
    ] : []),
  ];
  return <article className={`container ${styles.page}`}>
    <h1>{document.title}</h1>
    <p>{document.lead}</p>
    {!approved && <p className={styles.draft} role="status">{dict.legal.draft}</p>}
    <dl className={styles.details}>
      {fields.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value || dict.legal.pending}</dd></div>)}
    </dl>
    {document.sections.map(section => <section key={section.title}><h2>{section.title}</h2><p>{section.text}</p></section>)}
    {type === 'privacy' && <p><a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">Cloudflare Privacy</a> · <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy</a> · <a href="https://www.garanteprivacy.it/" target="_blank" rel="noopener noreferrer">Garante Privacy</a></p>}
  </article>;
}
