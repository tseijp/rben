/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    url: 'https://tseijp.github.io',
    title: 'rben 👺',
    tagline: 'rben are cool 👺',
    favicon: 'img/favicon.png',
    baseUrl: '/rben/',
    projectName: 'rben',
    onBrokenLinks: 'throw',
    organizationName: 'tseijp',
    onBrokenMarkdownLinks: 'warn',
    themeConfig: {
        prism: {theme: require('prism-react-renderer/themes/vsDark')},
        navbar: {
            title: 'rben ',
            items: [
                {type: 'doc', docId: 'intro', position: 'left', label: 'Documents'},
                {to: '/examples/intro', label: 'Examples', position: 'left'},
                {href: 'https://github.com/tseijp/rben', label: 'GitHub', position: 'right'},
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {title: 'Pages', items: [{label: 'Docs', to: '/documents/intro'}]},
                {title: 'Community', items: [
                    {label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/rben'},
                    {label: 'Twitter', href: 'https://twitter.com/tseijp'},
                ]},
                {title: 'More', items: [{label: 'GitHub', href: 'https://github.com/tseijp/rben'}]},
            ],
            copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        },
    },
    presets: [
        ['@docusaurus/preset-classic', {docs: {
            path: 'documents',
            routeBasePath: 'documents',
            editUrl: 'https://github.com/tseijp/rben/edit/master/examples/',
        }}],
    ],
    plugins: [
        ['./plugin/src/pluginContentWasm.js', {hello: "HI"}],
        ['@docusaurus/plugin-content-docs', {
            id: 'examples',
            path: 'examples',
            routeBasePath: 'examples',
        }],
    ],
};
