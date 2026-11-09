import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const SITE = 'https://www.eagletrt.it/';

/* ---------- Hero ---------- */

export function EagleHero() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroText}>
        <p className={styles.eyebrow}>Formula Student · 2022 – 2024</p>
        <h1 className={styles.title}>
          Telling the story of an <em>electric race car</em>
        </h1>
        <p className={styles.subtitle}>
          From graphic designer to head of communications at E-Agle TRT, the
          University of Trento&rsquo;s Formula Student team.
        </p>
        <p className={styles.quote}>
          The car is judged on the track, but it&rsquo;s sponsors who make it
          possible. My job was to show them the engineering.
        </p>
        <div className={styles.actions}>
          <SiteButton />
          <span className={styles.meta}>
            E-Agle TRT · University of Trento
            <br />
            Figma · PowerPoint · team leadership
          </span>
        </div>
      </div>
      <figure className={styles.heroCar}>
        <span className={styles.speed} aria-hidden="true" />
        <div className={styles.heroImg}>
          <img
            src={useBaseUrl('/img/eagletrt/hydra.png')}
            alt="Render of Hydra, E-Agle TRT's 2024 electric race car"
          />
        </div>
        <figcaption>Hydra · 2024</figcaption>
      </figure>
    </header>
  );
}

export function SiteButton({ label = 'Visit eagletrt.it' }) {
  return (
    <a className={styles.button} href={SITE} target="_blank" rel="noopener noreferrer">
      {label}
      <svg viewBox="0 0 20 20" aria-hidden="true">
        <path d="M7 13L14 6m0 0H8.5M14 6v5.5" />
      </svg>
    </a>
  );
}

/* ---------- Key numbers ---------- */

const stats = [
  { value: '12', label: 'people led', note: 'photography, video and events' },
  { value: '2', label: 'seasons', note: 'Oct 2022 – Aug 2024' },
  { value: '3', label: 'race cars', note: 'Fenice, Fenice Evo, Hydra' },
  { value: '100+', label: 'students in the team', note: 'six divisions, one car a season' },
];

export function EagleNumbers() {
  return (
    <section className={styles.stats} aria-label="Key numbers">
      {stats.map((s) => (
        <div key={s.label} className={styles.stat}>
          <span className={styles.statValue}>{s.value}</span>
          <span className={styles.statLabel}>{s.label}</span>
          <span className={styles.statNote}>{s.note}</span>
        </div>
      ))}
    </section>
  );
}

/* ---------- Divisions ---------- */

const divisions = ['Dynamics & Control', 'Electronics', 'Software', 'Mechanics', 'Management', 'Communications'];

export function Divisions() {
  return (
    <ul className={styles.divisions} aria-label="Team divisions">
      {divisions.map((d) => (
        <li key={d} className={d === 'Communications' ? styles.mine : undefined}>
          {d}
          {d === 'Communications' && <small>my division</small>}
        </li>
      ))}
    </ul>
  );
}

/* ---------- Timeline ---------- */

const path = [
  {
    when: 'Oct 2022',
    role: 'Graphic designer',
    body: 'Joined the communications division, designing social media content and presentations in Figma and PowerPoint.',
  },
  {
    when: 'Sep 2023',
    role: 'Chief Technician of Communications',
    body: 'Took over the division: a team of 12 across photography, video production and event management, plus sponsor relations.',
  },
  {
    when: 'Aug 2024',
    role: 'End of the Hydra season',
    body: 'Wrapped up after two seasons and three cars.',
  },
];

export function Timeline() {
  return (
    <ol className={styles.timeline}>
      {path.map((p) => (
        <li key={p.when}>
          <span className={styles.when}>{p.when}</span>
          <h3>{p.role}</h3>
          <p>{p.body}</p>
        </li>
      ))}
    </ol>
  );
}

/* ---------- What I did ---------- */

const icons = {
  team: 'M7 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM1.5 17c0-3 2.5-5 5.5-5s5.5 2 5.5 5M13 12.2c2.8-.2 5.2 1.6 5.5 4.8',
  handshake: 'M2 7l4-3 4 2 4-2 4 3M2 7v5l5 4 3-2 3 2 5-4V7M7 10l3 2 3-2',
  story: 'M4 3h9l3 3v11H4V3Zm9 0v3h3M7 9h6M7 12h6M7 15h4',
};

const roles = [
  {
    icon: 'team',
    title: 'Leading the division',
    body: 'Coordinated 12 people across photography, video production and event management, and kept their work on track for deadlines and events.',
  },
  {
    icon: 'handshake',
    title: 'Sponsor relations',
    body: 'Managed the team’s relationships with sponsors and its technical communications.',
  },
  {
    icon: 'story',
    title: 'Engineering storytelling',
    body: 'Turned the car’s engineering into social media content and presentations that non-engineers could follow.',
  },
];

export function Roles() {
  return (
    <div className={styles.roles}>
      {roles.map((r) => (
        <article key={r.title} className={styles.role}>
          <svg viewBox="0 0 20 20" aria-hidden="true" className={styles.icon}>
            <path d={icons[r.icon]} />
          </svg>
          <h3>{r.title}</h3>
          <p>{r.body}</p>
        </article>
      ))}
    </div>
  );
}

const audiences = ['Sponsors', 'Trade fairs', 'Formula Student competitions', 'Social media'];

export function Audiences() {
  return (
    <p className={styles.audiences}>
      <span className={styles.audLabel}>Made for</span>
      {audiences.map((a) => (
        <span key={a} className={styles.chip}>{a}</span>
      ))}
    </p>
  );
}

/* ---------- Garage ---------- */

const cars = [
  { name: 'Fenice', year: 2022, src: '/img/eagletrt/fenice.png' },
  { name: 'Fenice Evo', year: 2023, src: '/img/eagletrt/fenice-evo.png' },
  { name: 'Hydra', year: 2024, src: '/img/eagletrt/hydra.png' },
];

export function Garage() {
  const base = useBaseUrl('/');
  return (
    <>
      <div className={styles.garage}>
        {cars.map((c) => (
          <figure key={c.name} className={styles.car}>
            <div className={styles.carImg}>
              <img src={base + c.src.replace(/^\//, '')} alt={`Render of ${c.name}, ${c.year}`} loading="lazy" />
            </div>
            <figcaption>
              <strong>{c.name}</strong>
              <span>{c.year}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <p className={styles.credit}>Renders: E-Agle TRT</p>
    </>
  );
}

/* ---------- Section + closing ---------- */

export function Section({ label, title, children }) {
  return (
    <section className={styles.section}>
      <p className={styles.eyebrow}>{label}</p>
      {title && <h2 className={styles.h2}>{title}</h2>}
      {children}
    </section>
  );
}

export function Closing() {
  return (
    <div className={styles.closing}>
      <p>
        <b>What I took away.</b> How to lead a team of volunteers to real
        deadlines, and how to explain a complex technical product to people
        who aren&rsquo;t engineers.
      </p>
      <SiteButton label="See the team" />
    </div>
  );
}
