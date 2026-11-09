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
        { href: 'pathname:///files/CamillaMenon_CV.pdf', label: 'Download CV', position: 'left' },
        { href: 'mailto:menoncamilla.2000@gmail.com', label: 'Email me', position: 'right' },
      ],
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Camilla Menon`, // CHANGE ME
    },
  },
};

module.exports = config;
