import React, { useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const PDF = '/files/CamillaMenon_Master_Thesis.pdf';

/* ---------- Hero ---------- */

export function ThesisHero() {
  return (
    <header className={styles.hero}>
      <p className={styles.eyebrow}>Master's thesis · 2025</p>
      <h1 className={styles.title}>
        Familiar routes, <em>shorter</em> routes
      </h1>
      <p className={styles.subtitle}>
        Route consistency in the Periodic Vehicle Routing Problem: a
        multi-objective approach for waste collection.
      </p>
      <p className={styles.question}>
        When waste volumes change, is the shortest new route really the best
        one, or is a route the driver already knows worth keeping?
      </p>
      <div className={styles.actions}>
        <DownloadButton />
        <span className={styles.meta}>
          University of Trento · research at the University of Vienna
          <br />
          Python · PyVRP · metaheuristics · 105 pages
        </span>
      </div>
    </header>
  );
}

export function DownloadButton({ label = 'Download the thesis' }) {
  return (
    <a className={styles.button} href={useBaseUrl(PDF)} download>
      <svg viewBox="0 0 20 20" aria-hidden="true">
        <path d="M10 3v10m0 0l-4-4m4 4l4-4M4 16h12" />
      </svg>
      {label}
      <small>PDF · 8.8 MB</small>
    </a>
  );
}

/* ---------- Key numbers ---------- */

const stats = [
  { value: '−1.3%', label: 'total distance', note: 'vs. re-optimizing for distance alone' },
  { value: '+6.6', unit: 'pts', label: 'route consistency', note: 'same scenario, 75/25 weighting' },
  { value: '32', label: 'benchmark instances', note: 'standard PVRP set, 20–417 customers' },
];

export function KeyNumbers() {
  return (
    <section className={styles.stats} aria-label="Key results">
      {stats.map((s) => (
        <div key={s.label} className={styles.stat}>
          <span className={styles.statValue}>
            {s.value}
            {s.unit && <small>{s.unit}</small>}
          </span>
          <span className={styles.statLabel}>{s.label}</span>
          <span className={styles.statNote}>{s.note}</span>
        </div>
      ))}
    </section>
  );
}

/* ---------- Approach ---------- */

const steps = [
  {
    n: '01',
    title: 'Simulate a disruption',
    body:
      'Starting from 32 standard benchmark instances, I changed each customer’s waste volume using a Gamma distribution, keeping the total constant, to mimic holidays, seasons or a missed collection day.',
  },
  {
    n: '02',
    title: 'Build the usual routes',
    body:
      'An assignment heuristic sets each customer’s collection days, then PyVRP optimizes each day. This gives the routine plan drivers know, plus a distance-only plan for the disrupted week.',
  },
  {
    n: '03',
    title: 'Re-optimize for both goals',
    body:
      'An Adaptive Variable Neighborhood Search (A-VNS) with seven move types and 2-/3-opt minimizes a weighted sum of distance and dissimilarity, learning which moves pay off as it runs.',
  },
];

export function Approach() {
  return (
    <ol className={styles.steps}>
      {steps.map((s) => (
        <li key={s.n} className={styles.step}>
          <span className={styles.stepNum}>{s.n}</span>
          <h3>{s.title}</h3>
          <p>{s.body}</p>
        </li>
      ))}
    </ol>
  );
}

export function Objective() {
  return (
    <div className={styles.formula} role="img"
      aria-label="Minimize w-delta times relative distance plus w-phi times (1 minus similarity), with the two weights summing to 1">
      <span className={styles.formulaLabel}>Objective</span>
      <span className={styles.formulaBody}>
        min&nbsp; <i>w</i><sub>d</sub>·<span className={styles.term}>distance<small>relative to usual plan</small></span>
        &nbsp;+&nbsp; <i>w</i><sub>s</sub>·<span className={styles.term}>(1 − similarity)<small>to the usual routes</small></span>
      </span>
      <span className={styles.formulaNote}>
        weights tested: 100/0 · 75/25 · 50/50 · 25/75 · 0/100
      </span>
    </div>
  );
}

/* ---------- Similarity measures ---------- */

// Small route glyphs: grey = usual route, accent = what the metric counts as shared.
const P = [[10, 40], [30, 15], [55, 30], [80, 12], [105, 35], [90, 55], [55, 55], [25, 58]];
const pathOf = (pts) => pts.map((p, i) => `${i ? 'L' : 'M'}${p[0]},${p[1]}`).join(' ') + ' Z';
const seg = (a, b) => `M${P[a][0]},${P[a][1]} L${P[b][0]},${P[b][1]}`;

function Glyph({ kind }) {
  return (
    <svg className={styles.glyph} viewBox="0 0 115 68" aria-hidden="true">
      <path d={pathOf(P)} className={styles.gBase} />
      {kind === 'arcseq' && (
        <path d={`${seg(1, 2)} ${seg(2, 3)} L${P[4][0]},${P[4][1]}`} className={styles.gHit} />
      )}
      {kind === 'arcset' && (
        <path d={`${seg(0, 1)} ${seg(2, 3)} ${seg(4, 5)} ${seg(6, 7)} ${seg(7, 0)}`} className={styles.gHit} />
      )}
      {P.map((p, i) => (
        <circle
          key={i}
          cx={p[0]}
          cy={p[1]}
          r={kind === 'nodes' ? 4.5 : 3}
          className={kind === 'nodes' ? styles.gNodeHit : styles.gNode}
        />
      ))}
    </svg>
  );
}

const metrics = [
  {
    kind: 'nodes',
    name: 'Nodes-set',
    who: 'For the collector',
    body: 'Does the truck still serve the same customers over the week, in any order?',
  },
  {
    kind: 'arcseq',
    name: 'Arc-sequences',
    who: 'For the driver',
    body: 'How long is the longest unbroken stretch of a day’s route that stays the same?',
  },
  {
    kind: 'arcset',
    name: 'Arcs-set',
    who: 'For the driver',
    body: 'How many of a day’s road segments are still driven, wherever they appear?',
  },
];

export function Metrics() {
  return (
    <div className={styles.metrics}>
      {metrics.map((m) => (
        <article key={m.name} className={styles.metric}>
          <Glyph kind={m.kind} />
          <span className={styles.metricWho}>{m.who}</span>
          <h3>{m.name}</h3>
          <p>{m.body}</p>
        </article>
      ))}
    </div>
  );
}

/* ---------- Trade-off chart (Table 5.6, Nodes-set measure) ---------- */

const tradeoff = [
  { w: '100/0', dist: 0, cons: 0, note: 'Distance only (starting point)' },
  { w: '75/25', dist: -1.3, cons: 6.6, note: 'Shorter and more familiar', best: true },
  { w: '50/50', dist: 3.1, cons: 13.9 },
  { w: '25/75', dist: 11.4, cons: 15.6 },
  { w: '0/100', dist: 49.2, cons: 24.1, note: 'Consistency only' },
];

const W = 640, H = 330;
const M = { l: 52, r: 24, t: 24, b: 52 };
const X = [-5, 50], Y = [0, 25];
const sx = (v) => M.l + ((v - X[0]) / (X[1] - X[0])) * (W - M.l - M.r);
const sy = (v) => H - M.b - ((v - Y[0]) / (Y[1] - Y[0])) * (H - M.t - M.b);
const fmt = (v, d = 1) => `${v > 0 ? '+' : v < 0 ? '−' : ''}${Math.abs(v).toFixed(d)}`;

export function TradeoffChart() {
  const [active, setActive] = useState(1);
  const [showTable, setShowTable] = useState(false);
  const a = tradeoff[active];
  const line = tradeoff.map((d, i) => `${i ? 'L' : 'M'}${sx(d.dist)},${sy(d.cons)}`).join(' ');

  return (
    <figure className={styles.chart}>
      <figcaption className={styles.chartHead}>
        <span className={styles.chartTitle}>
          The trade-off: more weight on consistency, more familiar routes, longer distance
        </span>
        <span className={styles.chartSub}>
          Nodes-set measure, averaged over solved instances. Each point is one weighting (distance / consistency).
        </span>
      </figcaption>

      {!showTable ? (
        <div className={styles.plot}>
          <svg viewBox={`0 0 ${W} ${H}`} role="img"
            aria-label="Connected dot chart: as the consistency weight rises from 0 to 100 percent, consistency gain grows from 0 to 24 points while distance change goes from -1.3 percent to +49 percent.">
            {/* "better than distance-only" band */}
            <rect x={sx(X[0])} y={M.t} width={sx(0) - sx(X[0])} height={H - M.t - M.b} className={styles.band} />
            {/* grid + axes */}
            {[0, 5, 10, 15, 20, 25].map((v) => (
              <g key={`y${v}`}>
                <line x1={M.l} x2={W - M.r} y1={sy(v)} y2={sy(v)} className={v === 0 ? styles.axis : styles.grid} />
                <text x={M.l - 10} y={sy(v)} dy="0.35em" textAnchor="end" className={styles.tick}>{v === 0 ? '0' : `+${v}`}</text>
              </g>
            ))}
            {[0, 10, 20, 30, 40, 50].map((v) => (
              <g key={`x${v}`}>
                <line x1={sx(v)} x2={sx(v)} y1={H - M.b} y2={H - M.b + 5} className={styles.axis} />
                <text x={sx(v)} y={H - M.b + 20} textAnchor="middle" className={styles.tick}>{v === 0 ? '0%' : `+${v}%`}</text>
              </g>
            ))}
            <line x1={sx(0)} x2={sx(0)} y1={M.t} y2={H - M.b} className={styles.zero} />
            <text x={W - M.r} y={H - 8} textAnchor="end" className={styles.axisLabel}>Distance vs. distance-only plan →</text>
            <text x={M.l} y={M.t - 10} className={styles.axisLabel}>↑ Consistency gain (pts)</text>

            <path d={line} className={styles.line} />

            {tradeoff.map((d, i) => (
              <g key={d.w}
                className={styles.pt}
                tabIndex={0}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                aria-label={`${d.w}: distance ${fmt(d.dist)}%, consistency ${fmt(d.cons)} points`}>
                <circle cx={sx(d.dist)} cy={sy(d.cons)} r="16" className={styles.hit} />
                <circle cx={sx(d.dist)} cy={sy(d.cons)} r={i === active ? 7 : 5}
                  className={d.best ? styles.dotBest : styles.dot} />
                <text x={sx(d.dist) + (d.dist > 40 ? -12 : 12)} y={sy(d.cons) - 10}
                  textAnchor={d.dist > 40 ? 'end' : 'start'} className={styles.ptLabel}>{d.w}</text>
              </g>
            ))}
          </svg>

          <div className={styles.readout} aria-live="polite">
            <span className={styles.readoutW}>{a.w}</span>
            <span><b>{fmt(a.dist)}%</b> distance</span>
            <span><b>{fmt(a.cons)}</b> pts consistency</span>
            {a.note && <span className={styles.readoutNote}>{a.note}</span>}
          </div>
        </div>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr><th>Weights (dist / cons)</th><th>Distance change</th><th>Consistency gain</th></tr>
          </thead>
          <tbody>
            {tradeoff.map((d) => (
              <tr key={d.w}><td>{d.w}</td><td>{fmt(d.dist)}%</td><td>{fmt(d.cons)} pts</td></tr>
            ))}
          </tbody>
        </table>
      )}

      <button type="button" className={styles.toggle} onClick={() => setShowTable(!showTable)}>
        {showTable ? 'Show chart' : 'Show as table'}
      </button>
    </figure>
  );
}

/* ---------- Findings ---------- */

const findings = [
  {
    title: 'You don’t always have to choose',
    body:
      'With a 75/25 weighting, routes became both shorter (−1.3%) and more familiar (+6.6 pts) than the distance-only plan.',
  },
  {
    title: 'Customer sets matter most',
    body:
      'Nodes-set consistency gave the biggest gains in every scenario. Arcs-set came second and Arc-sequences third.',
  },
  {
    title: 'Familiarity differs for the collector and the driver',
    body:
      'Improving node consistency (collector) lowered arc consistency (driver), and the reverse was also true.',
  },
  {
    title: 'You can see it on the map',
    body:
      'As the consistency weight increases, the new routes look more and more like the original ones.',
  },
];

export function Findings() {
  return (
    <ul className={styles.findings}>
      {findings.map((f, i) => (
        <li key={f.title}>
          <span className={styles.findNum}>{i + 1}</span>
          <div>
            <h3>{f.title}</h3>
            <p>{f.body}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

/* ---------- Section wrapper ---------- */

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
        <b>Next steps.</b> Model less tidy demand (seasonal, tourist and
        snow-day spikes where the total changes), and run the search from the
        usual routes instead, adjusting them only as much as the new volumes
        require.
      </p>
      <DownloadButton label="Read the full thesis" />
    </div>
  );
}
