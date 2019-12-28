module.exports = {
    title: 'Garrik 的笔记',
    description: '这里是 Garrik 的前端笔记本',
    base: '/my-notebook/',
    markdown: {
        lineNumbers: false,
        extendMarkdown: md => {
            // 使用更多的 markdown-it 插件!
            md.use(require('markdown-it-container'))
        }
    },
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
        ],
        sidebar: 'auto',
    }
}