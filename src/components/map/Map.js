'use client';

import { useState } from 'react';
import styles from './Map.module.css';

export default function Map({ labels }) {
  const [loaded, setLoaded] = useState(false);
  return <div className={styles.container}>
    {loaded ? <>
      <iframe
        src="https://maps.google.com/maps?q=Polentoteca+Chalet+Gabriele+Piano+Rancio+Bellagio&output=embed&z=14"
        title={labels.title} className={styles.frame} allowFullScreen referrerPolicy="no-referrer"
      />
      <button type="button" onClick={() => setLoaded(false)}>{labels.close}</button>
    </> : <div className={styles.prompt}>
      <h3>{labels.title}</h3>
      <p>{labels.notice}</p>
      <button type="button" onClick={() => setLoaded(true)}>{labels.load}</button>
      <a href="https://www.google.com/maps/search/?api=1&query=Polentoteca+Chalet+Gabriele+Piano+Rancio+Bellagio" target="_blank" rel="noopener noreferrer">{labels.external}</a>
      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">{labels.privacy}</a>
    </div>}
  </div>;
}
