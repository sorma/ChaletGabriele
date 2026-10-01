export function releaseRequirements(site) {
  const missing = [];
  try {
    const url = new URL(site.url);
    if (url.protocol !== 'https:' || url.username || url.password || url.pathname !== '/' || url.search || url.hash) throw new Error();
  } catch { missing.push('url: dominio definitivo HTTPS, senza percorsi o query'); }
  for (const [key, label] of Object.entries({ legalName: 'ragione sociale del titolare', address: 'indirizzo completo', privacyEmail: 'email privacy', vatId: 'partita IVA' })) {
    if (!site.business?.[key]?.trim()) missing.push(`business.${key}: ${label}`);
  }
  if (site.business?.privacyEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(site.business.privacyEmail)) missing.push('business.privacyEmail: email non valida');
  for (const key of ['retention', 'legalBasis', 'internationalTransfers']) {
    if (!site.privacy?.[key]?.trim()) missing.push(`privacy.${key}: da confermare con il titolare`);
  }
  if (site.privacy?.approved !== true) missing.push('privacy.approved: informativa completa da approvare');
  if (site.termsApproved !== true) missing.push('termsApproved: condizioni di utilizzo/prenotazione da approvare');
  return missing;
}
