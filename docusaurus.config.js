// @ts-check
// ✏️ Edit the values marked with "CHANGE ME".

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Camilla Menon',                       // CHANGE ME
  tagline: 'Industrial Engineer · Operations, Supply Chain & Production',
  url: 'https://cami1900.github.io',        // GitHub Pages host
  baseUrl: '/mywebsite/',                   // repo name (GitHub Pages project site)
  organizationName: 'cami1900',
  projectName: 'mywebsite',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Inter:wght@400;500&display=swap',
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'projects',           // your project pages live in the /projects folder
          routeBasePath: 'projects',  // ...and show up at /projects/...
        },
        blog: false,                  // set to {} to enable a blog (add a /blog folder)
        theme: { customCss: './src/css/custom.css' },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Camilla Menon',             // CHANGE ME
      items: [
        { to: '/projects', label: 'Projects', position: 'left' },
        {
          href: 'pathname:///files/CamillaMenon_CV.pdf',
          download: 'CamillaMenon_CV.pdf',
          position: 'right',
          className: 'navbar-icon-link',
          html: `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v11"/><path d="m7 10 5 5 5-5"/><path d="M5 20h14"/></svg><span>Download CV</span>`,
        },
        {
          href: 'mailto:menoncamilla.2000@gmail.com',
          position: 'right',
          className: 'navbar-icon-link',
          html: `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="m3.5 6.5 8.5 6.5 8.5-6.5"/></svg><span>Email me</span>`,
        },
      ],
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Camilla Menon`, // CHANGE ME
    },
  },
};

module.exports = config;
