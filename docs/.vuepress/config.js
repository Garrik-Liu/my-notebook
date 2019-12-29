module.exports = {
    title: 'Garrik 的笔记',
    description: '这里是 Garrik 的前端笔记本',
    base: '/my-notebook/',
    theme: '@vuepress/theme-default',
    markdown: {
        lineNumbers: false,
    },
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
        ],
        sidebar: 'auto',
    },

    plugins: [
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
    ],
}