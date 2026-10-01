import { readFileSync } from 'node:fs';
import { releaseRequirements } from './release-requirements.mjs';

const site = JSON.parse(readFileSync(new URL('../src/config/site.json', import.meta.url), 'utf8'));
const missing = releaseRequirements(site);
if (missing.length) {
  console.error('Pubblicazione non pronta. Completare src/config/site.json:\n' + missing.map(item => `- ${item}`).join('\n'));
  process.exitCode = 1;
} else console.log('Configurazione di pubblicazione completa.');
