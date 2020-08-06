module.exports = {
    title: "Garrik 的笔记",
    description: "这里是 Garrik 的前端笔记本",
    base: "/my-notebook/",
    //theme: 'default-prefers-color-scheme',
    markdown: {
        lineNumbers: false,
        extendMarkdown: (md) => {
            // 使用更多的 markdown-it 插件!
            md.use(require("markdown-it-ins"));
            md.use(require("markdown-it-mark"));
        },
    },
    themeConfig: {
        nav: [{
                text: "主页",
                link: "/",
            },
            {
                text: "Github",
                link: "https://github.com/Garrik-Liu/my-notebook",
                target: "blank",
                rel: "",
            },
        ],
        sidebar: "auto",
        collapsable: true,
        lastUpdated: "上次更新",
        sidebarDepth: 2,
        activeHeaderLinks: false,
        nextLinks: true,
        prevLinks: true,
        smoothScroll: true,
    },

    plugins: [
        "vuepress-plugin-mermaidjs", ["@vuepress/back-to-top", true],
        ["@vuepress/medium-zoom", true],
        ["@vuepress/last-updated", true],
        [
            "vuepress-plugin-container",
            {
                type: "right",
                defaultTitle: "",
            },
        ],
        [
            "vuepress-plugin-container",
            {
                type: "theorem",
                before: (info) => `<div class="theorem"><p class="title">${info}</p>`,
                after: "</div>",
            },
        ],
        [
            "vuepress-plugin-container",
            {
                type: "theorem",
                before: (info) => `<div class="theorem"><p class="title">${info}</p>`,
                after: "</div>",
            },
        ],
        [
            "vuepress-plugin-container",
            {
                type: "normal",
                before: (info) =>
                    `<div class="custom-block normal"><p class="title">${info}</p>`,
                after: "</div>",
            },
        ],
        [
            "vuepress-plugin-container",
            {
                type: "details",
                before: (info) =>
                    `<details class="custom-block details"><summary>${info}</summary>\n`,
                after: () => "</details>\n",
            },
        ],
        [
            "vuepress-plugin-container",
            {
                type: "details-open",
                before: (info) =>
                    `<details open="open" class="custom-block details"><summary>${info}</summary>\n`,
                after: () => "</details>\n",
            },
        ],
        [
            "@maginapp/vuepress-plugin-katex",
            {
                delimiters: "dollars",
            },
        ],
    ],
};