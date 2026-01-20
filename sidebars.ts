import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';
import referenceSidebar from './docs/reference/sidebar';

// Filter out the info page from the reference sidebar
const filteredReferenceSidebar = referenceSidebar.filter(
  (item) => item.type !== 'doc' || item.id !== 'reference/roo-ai-platform-api'
);

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Concepts',
      collapsed: false,
      items: [
        'concepts/typical-api-flow',
        'concepts/terminology-and-naming',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsed: false,
      items: [
        'guides/overview',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: false,
      items: filteredReferenceSidebar,
    },
  ],
};

export default sidebars;
