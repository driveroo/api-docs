import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'API',
      collapsed: false,
      items: [
        'api/overview',
        {
          type: 'category',
          label: 'API reference',
          collapsed: false,
          items: [
            {
              type: 'category',
              label: 'User API',
              collapsed: false,
              items: [
                'api/reference/create-company-user',
                'api/reference/list-company-users',
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;