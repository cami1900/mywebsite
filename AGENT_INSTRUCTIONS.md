# Agent Instructions — Camilla Menon Portfolio Website

This archive contains the **source** of a personal portfolio website built with
[Docusaurus 3](https://docusaurus.io/) (React-based static site generator).
Generated folders (`node_modules/`, `build/`, `.docusaurus/`) were intentionally
excluded; recreate them with the steps below.

## 1. Project layout

```
.
├── AGENT_INSTRUCTIONS.md     ← this file
├── package.json              ← scripts + dependencies (Docusaurus 3.x, React 19)
├── package-lock.json         ← exact dependency versions (use `npm ci`)
├── docusaurus.config.js      ← site title, URL, navbar, footer, presets
├── .gitignore
├── projects/                 ← project pages (Markdown), served at /projects/...
│   ├── index.md              ← "All projects" landing page (sidebar_position: 0)
│   ├── vrp-thesis.md
│   ├── pedrollo-bom-automation.md
│   └── formula-student-communications.md
├── src/
│   ├── pages/index.js        ← home page (React component)
│   ├── pages/index.module.css
│   └── css/custom.css        ← global theme styling
└── static/                   ← copied verbatim to the site root
    ├── files/CamillaMenon_CV.pdf   ← served at /files/CamillaMenon_CV.pdf
    └── img/
```

## 2. Prerequisites

- **Node.js ≥ 18** (developed with Node 26; Node 20 LTS or 22 LTS work fine).
  Check with `node -v`. Install via https://nodejs.org or `nvm install --lts`.
- **npm** (bundled with Node).

## 3. Setup

```bash
unzip mywebsite.zip -d mywebsite   # if not already extracted
cd mywebsite
npm ci                             # installs exact versions from package-lock.json
                                   # (fall back to `npm install` if npm ci fails)
```

## 4. Common commands

| Task | Command | Notes |
|---|---|---|
| Dev server with hot reload | `npm start` | Opens http://localhost:3000. Add `-- --host 0.0.0.0` to expose on LAN/WSL. |
| Production build | `npm run build` | Outputs static site into `build/`. Fails on broken links (`onBrokenLinks: 'throw'`). |
| Preview production build | `npm run serve` | Serves `build/` at http://localhost:3000. |
| Clear caches | `npx docusaurus clear` | Deletes `.docusaurus/` and `build/` if something behaves oddly. |

**Always run `npm run build` after changes** to verify there are no broken links or MDX errors.

## 5. How to make common changes

- **Site title / URL / navbar / footer / email link:** edit `docusaurus.config.js`.
  Values marked `// CHANGE ME` must be set before deployment — in particular
  `url` (currently placeholder `https://your-site.example.com`) and `baseUrl`
  (`'/'`, or `'/<repo-name>/'` for GitHub Pages project sites).
- **Add a project page:** create `projects/<slug>.md` with front matter:
  ```md
  ---
  sidebar_position: 4
  title: My New Project
  ---
  # My New Project
  ...
  ```
  Then add a link to it in `projects/index.md` (and on the home page in
  `src/pages/index.js` if it should be featured there).
- **Home page content/layout:** `src/pages/index.js` + `src/pages/index.module.css`.
- **Global colors/fonts:** `src/css/custom.css`. Google Fonts (Cormorant Garamond, Inter)
  are loaded via `stylesheets` in `docusaurus.config.js`.
- **Replace the CV:** overwrite `static/files/CamillaMenon_CV.pdf` (keep the name, or update
  every `pathname:///files/...` link in the config and Markdown).
- Links to static files use the `pathname:///files/...` form so Docusaurus doesn't
  try to resolve them as routes — keep that convention.
- The blog is disabled (`blog: false`). To enable it, set `blog: {}` and add a `blog/` folder.

## 6. Deployment

`npm run build` produces a fully static site in `build/` that can be hosted anywhere
(GitHub Pages, Netlify, Vercel, Cloudflare Pages, any static web server).
- Netlify/Vercel/Cloudflare: build command `npm run build`, output dir `build`.
- GitHub Pages: set `url`/`baseUrl` accordingly, then see
  https://docusaurus.io/docs/deployment#deploying-to-github-pages

## 7. Do not

- Do not edit or commit `.docusaurus/`, `build/`, or `node_modules/` — they are generated.
- Do not remove `package-lock.json`; it pins working dependency versions.
