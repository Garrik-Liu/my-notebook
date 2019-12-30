module.exports = {
    title: 'Garrik 的笔记',
    description: '这里是 Garrik 的前端笔记本',
    base: '/my-notebook/',
    markdown: {
        lineNumbers: false,
    },
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: 'Github', link: 'https://github.com/Garrik-Liu/my-notebook', target: 'blank', rel: '' },
        ],
        sidebar: 'auto',
        collapsable: true,
        lastUpdated: '上次更新',
        sidebarDepth: 2,
        activeHeaderLinks: false,
        nextLinks: true,
        prevLinks: true,
        smoothScroll: true,
    },

    plugins: [
        require('./components/goBack'), ['@vuepress/back-to-top', true],
        ['@vuepress/medium-zoom', true],
        ['@vuepress/last-updated', true],
        [
            'vuepress-plugin-container',
            {
                type: 'right',
                defaultTitle: '',
            },
        ],
        [
            'vuepress-plugin-container',
            {
                type: 'theorem',
                before: info => `<div class="theorem"><p class="title">${info}</p>`,
                after: '</div>',
            },
        ],
        [
            'vuepress-plugin-container',
            {
                type: 'theorem',
                before: info => `<div class="theorem"><p class="title">${info}</p>`,
                after: '</div>',
            },
        ],
        [
            'vuepress-plugin-container',
            {
                type: 'details',
                before: info => `<details class="custom-block details"><summary>${info}</summary>\n`,
                after: () => '</details>\n',
            },
        ],
    ],
}