// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */

const repoName = 'imfp';

const config = {
  title: '쏙쏙 들어오는 함수형 코딩',
  tagline: '심플한 코드로 복잡한 소프트웨어 길들이기',
  url: 'https://dev-in-book.github.io',
  baseUrl: `/${repoName}/`,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'dev-in-book',
  projectName: "imfp",
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: `https://github.dev/dev-in-book/${repoName}/blob/main`,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: `https://github.dev/dev-in-book/${repoName}`,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '함수형 코딩',
        logo: {
          alt: 'dev-in-book',
          src: '../img/imfp.jpeg',
        },
        items: [
          {
            type: 'doc',
            docId: 'chapter_3',
            position: 'left',
            label: '📕 시작하기',
          },
          { to: '/blog', label: '👨‍👩‍👧‍👦 참여자', position: 'left' },
          {
            href: `https://github.dev/dev-in-book/${repoName}`,
            label: '⛳️ GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '함수형 코딩',
                to: '/docs/chapter_3',
              },
              {
                label: 'Member',
                href: '/blog/member',
              },
              {
                label: 'GitHub',
                href: `https://github.dev/dev-in-book/${repoName}`,
              },
            ],
          },
        ],
        copyright: `${new Date().getFullYear()} Dev in Book, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
