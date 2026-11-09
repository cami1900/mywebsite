import React, { useEffect, useRef, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

/** Cover + key figures shown at the top of the UlixArm project page. */
export function ManualHero({ cover, alt, stats }) {
  return (
    <div className={styles.hero}>
      <figure className={styles.cover}>
        <img src={useBaseUrl(cover)} alt={alt} loading="eager" />
      </figure>
      <dl className={styles.stats}>
        {stats.map((s) => (
          <div key={s.label} className={styles.stat}>
            <dt>{s.value}</dt>
            <dd>{s.label}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/** A row of manual pages; clicking one opens it full size. */
export function ManualPages({ pages }) {
  const base = useBaseUrl('/');
  const [open, setOpen] = useState(null);
  const dialog = useRef(null);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (open !== null && !d.open) d.showModal();
    if (open === null && d.open) d.close();
  }, [open]);

  const src = (p) => base + p.src.replace(/^\//, '');
  const current = open !== null ? pages[open] : null;

  return (
    <>
      <div className={styles.grid}>
        {pages.map((p, i) => (
          <figure key={p.src} className={styles.page}>
            <button type="button" onClick={() => setOpen(i)} aria-label={`Enlarge: ${p.title}`}>
              <img src={src(p)} alt={p.title} loading="lazy" />
              <span className={styles.no}>p. {p.page}</span>
            </button>
            <figcaption>
              <strong>{p.title}</strong>
              {p.text}
            </figcaption>
          </figure>
        ))}
      </div>

      <dialog
        ref={dialog}
        className={styles.dialog}
        onClose={() => setOpen(null)}
        onClick={(e) => e.target === dialog.current && setOpen(null)}
      >
        {current && (
          <>
            <button type="button" className={styles.close} onClick={() => setOpen(null)} aria-label="Close">
              ×
            </button>
            <img src={src(current)} alt={current.title} />
          </>
        )}
      </dialog>
    </>
  );
}
