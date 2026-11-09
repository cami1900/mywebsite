import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const CEFR = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

const languages = [
  { code: 'IT', name: 'Italian', words: ['Ciao', 'Grazie', 'Piacere'], level: 6, note: 'Native' },
  { code: 'EN', name: 'English', words: ['Hello', 'Thanks', 'Cheers'], level: 5, note: 'C1 · IELTS' },
  { code: 'DE', name: 'German', words: ['Hallo', 'Danke', 'Servus'], level: 3, note: 'B1 · still learning' },
];

function useTicker(interval = 2600) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const id = setInterval(() => setTick((t) => t + 1), interval);
    return () => clearInterval(id);
  }, [interval]);
  return tick;
}

const path = [
  { place: 'Trento', what: 'B.Sc. Industrial Engineering' },
  { place: 'Gothenburg', what: 'Erasmus at Chalmers' },
  { place: 'Trento', what: 'M.Sc. Industrial Systems Eng.' },
  { place: 'Vienna', what: "Master's thesis · Operations Research" },
  { place: 'Munich', what: 'M.Sc. Science and Technology of Materials · TUM', now: true },
];

export default function Home() {
  const tick = useTicker();
  return (
    <Layout title="Home" description="Camilla Menon, Industrial Engineer">
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.portrait}>
            <svg className={styles.ring} viewBox="0 0 200 200" aria-hidden="true">
              <defs>
                <path
                  id="ringPath"
                  d="M100,100 m-88,0 a88,88 0 1,1 176,0 a88,88 0 1,1 -176,0"
                />
              </defs>
              <text>
                <textPath href="#ringPath" textLength="552">
                  Industrial Engineer · Operations · Materials · Munich ·
                </textPath>
              </text>
            </svg>
            <div
              className={styles.photo}
              role="img"
              aria-label="Camilla Menon"
              style={{ backgroundImage: 'url(/img/profile.jpg)' }}
            />
          </div>
          <div className={styles.intro}>
<p className={styles.eyebrow}>Industrial Engineer</p>
          <h1 className={styles.name}>
            Camilla <em>Menon</em>
          </h1>
          <p className={styles.lead}>
            Trained in operations research, production planning and
            manufacturing systems, now going deeper into materials science:
            how a material's structure and its process shape the final product.
          </p>
          </div>
        </section>

        <section className={styles.block}>
          <h2 className={styles.label}>Path</h2>
          <ol className={styles.path}>
            {path.map((p, i) => (
              <li key={i} className={p.now ? styles.now : undefined}>
                <span className={styles.place}>{p.place}</span>
                <span className={styles.what}>{p.what}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.block}>
          <h2 className={styles.label}>I speak</h2>
          <div className={styles.langs}>
            {languages.map((l, i) => {
              const current = (tick + i) % l.words.length;
              return (
                <article key={l.code} className={styles.lang} style={{ '--i': i }}>
                  <span className={styles.words} aria-label={l.words[0]}>
                    {l.words.map((w, j) => (
                      <span
                        key={w}
                        aria-hidden="true"
                        className={j === current ? styles.wordOn : styles.word}
                      >
                        {w}
                      </span>
                    ))}
                  </span>
                  <h3 className={styles.langName}>{l.name}</h3>
                  <ol className={styles.scale} aria-label={`Level ${l.note}`}>
                    {CEFR.map((c, k) => (
                      <li key={c} className={k < l.level ? styles.on : undefined}>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ol>
                  <p className={styles.note}>{l.note}</p>
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </Layout>
  );
}
