/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Amorphic Workshop',
  tagline: 'This workshop enables you to create a fully operational solutions',
  url: 'https://amorphicdata.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/core/favicon.ico',
  organizationName: 'AmorphicData', // Usually your GitHub org/user name.
  projectName: 'workshop', // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: true,
    hideableSidebar: true,
    image: 'img/core/logo.png',
    navbar: {
      // style: 'primary',
      title: 'Amorphic Workshop',
      logo: {
        alt: 'Amorphic Logo',
        src: 'img/core/logo.svg',
      },
      items: [
        {
          to: 'docs/use-cases',
          label: 'Use cases',
          position: 'left',
        },
        {
          to: 'docs/how-to',
          label: 'How-to',
          position: 'left',
        },
        {
          to: 'docs/snippets',
          label: 'Code Snippets',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Quick Links',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
            {
              label: 'Use cases',
              to: 'docs/use-cases',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/amorphic',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/showcase/amorphic/posts/?feedView=all',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Amorphic API Docs',
              href: 'https://amorphicdata.readthedocs.io/en/latest/',
            },
            {
              label: 'Amorphic Data',
              href: 'https://amorphicdata.com',
            },
            {
              label: 'Cloudwick Technologies',
              href: 'https://cloudwick.com',
            },
          ],
        },
      ],
      logo: {
        alt: 'Amorphic Logo',
        src: 'img/core/logo-white.svg',
        href: 'https://amorphicdata.com',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Amorphic Workshop, Built with Docusaurus.`,
    },
    prism: {
      defaultLanguage: 'python',
      theme: require('prism-react-renderer/themes/vsDark'),
      darkTheme: require('prism-react-renderer/themes/vsLight')
    },
    colorMode: {
      disableSwitch: true,
    },
    announcementBar: {
      id: 'support_us',
      content:
        'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="https://amorphicdata.com">this survey</a>',
      backgroundColor: '#0961bc',
      textColor: '#ffffff',
      isCloseable: true
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        finance: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass'
  ]
};
