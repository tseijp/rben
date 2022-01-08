/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    url: 'https://tseijp.github.io',
    title: 'RBEN 👺',
    tagline: 'RBEN are cool 👺',
    favicon: 'img/favicon.png',
    baseUrl: '/rben/',
    projectName: 'rben',
    onBrokenLinks: 'throw',
    organizationName: 'tseijp',
    onBrokenMarkdownLinks: 'warn',
    trailingSlash: false,
    presets: [
        ['@docusaurus/preset-classic', {docs: {
            id: 'documents',
            path: 'documents',
            routeBasePath: 'documents',
            editUrl: 'https://github.com/tseijp/rben/edit/master/examples/',
        }}],
    ],
    plugins: [
        ['@docusaurus/plugin-content-docs', {
            id: 'examples',
            path: 'examples',
            routeBasePath: 'examples',
            editUrl: 'https://github.com/tseijp/rben/edit/master/documents/'
        }],
        ['./plugin/src/pluginContentWasm.js', {}],
    ],
    themeConfig: {
        prism: {theme: require('prism-react-renderer/themes/vsDark')},
        navbar: {
            title: 'rben ',
            items: [
                {type: 'doc', docId: 'index', position: 'left', label: 'Documents', docsPluginId: 'documents'},
                {type: 'doc', docId: 'index', position: 'left', label: 'Examples', docsPluginId: 'examples'},
                {href: 'https://github.com/tseijp/rben', label: 'GitHub', position: 'right'},
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {title: 'Pages', items: [{label: 'Docs', to: '/documents'}]},
                {title: 'Community', items: [
                    {label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/rben'},
                    {label: 'Twitter', href: 'https://twitter.com/tseijp'},
                ]},
                {title: 'More', items: [{label: 'GitHub', href: 'https://github.com/tseijp/rben'}]},
            ],
            copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        }
    }
};
