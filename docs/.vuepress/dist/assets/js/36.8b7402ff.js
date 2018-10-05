(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{210:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),a("p",[a("a",{attrs:{href:"https://ejs.bootcss.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("EJS 文档"),a("OutboundLink")],1)]),a("p",[t._v('EJS 是一套的模板语言, 是 "Embedded JavaScript" 的缩写, 通过在 HTML 文件内嵌入 JavaScript 代码来进行 HTML 模板渲染。(用 JS 生成 HTML)')]),a("p",[t._v("因为 EJS 支持直接在标签内书写简单、直白的 JavaScript 代码。所以可以让你在不破坏 HTML 文档结构的情况下, 使用 JS.  显著减少学习成本.")]),t._m(1),a("p",[t._v("先安装:")]),t._m(2),a("p",[t._v("在服务器代码上:")]),t._m(3),a("p",[t._v("\b\n例子:")]),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),a("p",[t._v("例子:")]),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),t._m(25),t._m(26)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"ejs-介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ejs-介绍","aria-hidden":"true"}},[this._v("#")]),this._v(" EJS 介绍")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"后端用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#后端用法","aria-hidden":"true"}},[this._v("#")]),this._v(" 后端用法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ "),s("span",{attrs:{class:"token function"}},[this._v("npm")]),this._v(" "),s("span",{attrs:{class:"token function"}},[this._v("install")]),this._v(" ejs\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 三种使用方法:")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// data: 要传进去的数据, str: HTML 字符串")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 1. ")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" template "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" ejs"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("compile")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 2.")]),t._v("\nejs"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("render")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 3. filename 是文件名(路径), ")]),t._v("\nejs"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("renderFile")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filename"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" str"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ejs "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'ejs'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" data "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Hello World"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\bejs"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("renderFile")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'views/index.ejs'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    msg"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" data\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" str"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    res"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("writeHead")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("200")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token string"}},[t._v("'Content-Type'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v("'text/html'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    res"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("write")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    res"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("end")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"配置选项-option"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置选项-option","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置选项 option:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("code",[t._v("cache")]),t._v(" 缓存编译后的函数，需要提供 "),a("code",[t._v("filename")])]),a("li",[a("code",[t._v("filename")]),t._v(" 被 "),a("code",[t._v("cache")]),t._v(" 参数用做键值，同时也用于 include 语句")]),a("li",[a("code",[t._v("context")]),t._v(" 函数执行时的上下文环境")]),a("li",[a("code",[t._v("compileDebug")]),t._v(" 当为 "),a("code",[t._v("false")]),t._v(" 时不编译调试语句")]),a("li",[a("code",[t._v("client")]),t._v(" 返回独立的编译后的函数")]),a("li",[a("code",[t._v("delimiter")]),t._v(" 放在角括号中的字符，用于标记标签的开与闭")]),a("li",[a("code",[t._v("debug")]),t._v(" 将生成的函数体输出")]),a("li",[a("code",[t._v("_with")]),t._v(" 是否使用 "),a("code",[t._v("with() {}")]),t._v(" 结构。如果为 "),a("code",[t._v("false")]),t._v("，所有局部数据将存储在 "),a("code",[t._v("locals")]),t._v(" 对象上。")]),a("li",[a("code",[t._v("localsName")]),t._v(" 如果不使用 "),a("code",[t._v("with")]),a("code",[t._v("，localsName")]),t._v(" 将作为存储局部变量的对象的名称。默认名称是 "),a("code",[t._v("locals")])]),a("li",[a("code",[t._v("rmWhitespace")]),t._v(" 删除所有可安全删除的空白字符，包括开始与结尾处的空格。对于所有标签来说，它提供了一个更安全版本的 "),a("code",[t._v("-%>")]),t._v(" (在一行的中间并不会剔除标签后面的换行符)。")]),a("li",[a("code",[t._v("escape")]),t._v(" 为 "),a("code",[t._v("<%=")]),t._v(" 结构设置对应的转义（escape）函数。它被用于输出结果以及在生成的客户端函数中通过 "),a("code",[t._v(".toString()")]),t._v(" 输出。(默认转义 XML)。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"前端用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端用法","aria-hidden":"true"}},[this._v("#")]),this._v(" 前端用法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("\bEJS 模板文件 用 "),s("code",[this._v(".ejs")]),this._v(" 作为后缀名.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("<%= title %>"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    \n    "),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 如果 hello \b传进来了, 则在 <p> 标签中显示 --\x3e")]),t._v("\n    <% if(hello) { %>\n        "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("<%= hello %>"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    <% } %>\n    \n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("模板中, "),s("code",[this._v("<% %>")]),this._v(" 括起来的内容都会被编译成 Javascript, "),s("code",[this._v("<%= %>")]),this._v(" 将括起来的变量名中的数据渲染到模板.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"标签含义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标签含义","aria-hidden":"true"}},[this._v("#")]),this._v(" 标签含义:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("code",[t._v("<%")]),t._v(" '脚本' 标签，用于流程控制，无输出。")]),a("li",[a("code",[t._v("<%_")]),t._v(" 删除其前面的空格符")]),a("li",[a("code",[t._v("<%=")]),t._v(" 输出数据到模板（输出是转义 HTML 标签）")]),a("li",[a("code",[t._v("<%-")]),t._v(" 输出非转义的数据到模板")]),a("li",[a("code",[t._v("<%#")]),t._v(" 注释标签，不执行、不输出内容")]),a("li",[a("code",[t._v("<%%")]),t._v(" 输出字符串 '<%'")]),a("li",[a("code",[t._v("%>")]),t._v(" 一般结束标签")]),a("li",[a("code",[t._v("-%>")]),t._v(" 删除紧随其后的换行符")]),a("li",[a("code",[t._v("_%>")]),t._v(" 将结束标签后面的空格符删除")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("用 "),s("code",[this._v("<%=...%>")]),this._v(" 输出变量，变量若包含 '<' '>' '&'等字符会被转义, 如果不希望变量值的内容被转义，那就这么用 "),s("code",[this._v("<%-... %>")]),this._v(" 输出变量")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"包含-include"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#包含-include","aria-hidden":"true"}},[this._v("#")]),this._v(" 包含 include:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("通过 "),s("code",[this._v("include")]),this._v(" 指令将相对于模板路径中的模板片段包含进来。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("例如，如果存在 "),s("code",[this._v('"./views/users.ejs"')]),this._v(" 和 "),s("code",[this._v('"./views/user/show.ejs"')]),this._v(" 两个模板文件，你可以通过 "),s("code",[this._v("<%- include('user/show'); %>")]),this._v(" 代码包含后者。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("你可能需要能够输出"),s("strong",[this._v("原始内容")]),this._v("的标签 (<%-) 用于 "),s("code",[this._v("include")]),this._v(" 指令，避免对输出的 HTML 代码做转义处理。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  <% users.forEach(function(user){ %>\n    <%- include('user/show', {user: user}); %>\n  <% }); %>\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"实例代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例代码","aria-hidden":"true"}},[this._v("#")]),this._v(" 实例代码:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"for"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#for","aria-hidden":"true"}},[this._v("#")]),this._v(" for:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("<% for(var i = 0; i < list.length; i++) { %>\n  <% var user = list[i]; %>\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("tr")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("td")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("<%= user.name %>"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("td")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("td")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("<%= user.age %>"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("td")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("tr")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n<% } %>\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"if"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#if","aria-hidden":"true"}},[this._v("#")]),this._v(" if:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("<% if(hello) { %>\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("<%= hello %>"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n<% } %>\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("<% if (x === 1) { %>\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Hello world!"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n<% } else if (x === 2) { %>\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Hi earth!"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n<% } else { %>\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Hey terra!"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n<% } %>\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"swith"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#swith","aria-hidden":"true"}},[this._v("#")]),this._v(" swith:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("<% switch (role) { %>\n<% case 'Admin' : %>\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Super Admin"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    <% break; %>\n\n<% case 'eventAdmin' : %>\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Event Admin"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    <% break; %>\n\n<% case 'subAdmin' : %>\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Sub Admin"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    <% break; %>\n\n<% } %>\n")])])])}],!1,null,null,null);s.default=e.exports}}]);