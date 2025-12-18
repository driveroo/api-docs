import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Roo API Docs',
  tagline: 'ROO.AI developer documentation',
  favicon: 'img/favicon.ico',

  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://driveroo.github.io',
  baseUrl: '/api-docs/',

  organizationName: 'driveroo',
  projectName: 'api-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Doc pages are rendered via ApiItem from openapi theme
          docItemComponent: '@theme/ApiItem',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // Launch Mermaid in markdown
  markdown: {
    mermaid: true,
  },

  // 👇 Themes, that give ApiExplorer/ApiItem + Redux Provider / Also theme for Mermaid
  themes: [
      'docusaurus-theme-openapi-docs',
      '@docusaurus/theme-mermaid',
      ],

  // Plugin that generates MDX from OpenAPI
  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'openapi',
        docsPluginId: 'default',
        config: {
          publicApi: {
            specPath: 'openapi/public-api.v1.openapi.json',
            outputDir: 'docs/api/reference',
            sidebarOptions: {
              groupPathsBy: 'tag',
            },
          },
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Home',
      logo: {
        alt: 'Roo logo',
        src: 'https://roo.ai/wp-content/themes/roo/img/ico/roo-logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'API',
        },
        {
          href: 'https://github.com/driveroo/api-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'ROO.AI',
          items: [
            {
              label: 'Main site',
              href: 'https://roo.ai/',
            },
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'Help center',
              href: 'https://driveroo.atlassian.net/servicedesk/',
            },
            {
              label: 'User documentation',
              href: 'https://example.com',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/driveroo/api-docs',
            },
          ],
        },
      ],
      copyright: `© ROO.AI 2025 | Frontline Digital Automation`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
