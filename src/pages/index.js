import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

const languages = [
  { word: 'Ciao', name: 'Italian', level: 'native', fill: 100 },
  { word: 'Hello', name: 'English', level: 'C1 · IELTS', fill: 85 },
  { word: 'Hallo', name: 'German', level: 'B1 · still learning', fill: 55 },
];

const path = [
  { place: 'Trento', what: 'B.Sc. Industrial Engineering' },
  { place: 'Gothenburg', what: 'Erasmus at Chalmers' },
  { place: 'Trento', what: 'M.Sc. Industrial Systems Eng.' },
  { place: 'Vienna', what: "Master's thesis · Operations Research" },
  { place: 'Munich', what: 'M.Sc. Science and Technology of Materials · TUM', now: true },
];

export default function Home() {
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
          <nav className={styles.links}>
            <Link to="/projects">Projects</Link>
            <span aria-hidden="true">·</span>
            <a href={useBaseUrl('/files/CamillaMenon_CV.pdf')} download>Download CV</a>
            <span aria-hidden="true">·</span>
            <a href="mailto:menoncamilla.2000@gmail.com">Email me</a>
          </nav>
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
            {languages.map((l) => (
              <div key={l.name} className={styles.lang}>
                <span className={styles.word}>{l.word}</span>
                <span className={styles.bar}>
                  <span style={{ width: `${l.fill}%` }} />
                </span>
                <span className={styles.meta}>
                  {l.name} <small>{l.level}</small>
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
