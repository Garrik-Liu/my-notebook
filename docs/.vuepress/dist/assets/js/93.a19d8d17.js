(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{309:function(s,t,a){"use strict";a.r(t);var e=a(0),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"基本指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本指南"}},[s._v("#")]),s._v(" 基本指南")]),s._v(" "),a("h2",{attrs:{id:"什么是-express"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-express"}},[s._v("#")]),s._v(" 什么是 Express ?")]),s._v(" "),a("p",[s._v("Node.js 基于 Chrome 的 V8引擎，使 JavaScript 可以脱离于浏览器，在服务器上运行。但 Node.js 也只提供了构建应用所需的基本底层接口和特性。开发者需要在此基础上编写很多冗长的代码。")]),s._v(" "),a("p",[s._v("Express 是一个基于 Node.js 封装的上层服务框架，以中间件, 路由, 模板引擎为核心, 提供了很多简单易用的 API 和 新工具, 为原生 HTTP 模块提供了很多新功能.")]),s._v(" "),a("p",[s._v("Express 之于 Node.js，就像 jQuery 之于 JavaScript;")]),s._v(" "),a("h3",{attrs:{id:"一个-node-js-程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一个-node-js-程序"}},[s._v("#")]),s._v(" 一个 Node.js 程序")]),s._v(" "),a("p",[s._v("假如创建一个 Node.js 服务器, 这整个程序就是一个 JavaScript 函数。这整个程序所做的事情就是接收请求，然后根据请求的内容去返回相应响应。比如说浏览器请求主页，它就会返回一个 HTML 文件。")]),s._v(" "),a("p",[s._v("在不用 Express 的情况下，过程就像\b下图：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/pSx1DBJ.png",alt:"Screen Shot 2018-07-09 at 11.43.22 AM"}})]),s._v(" "),a("p",[s._v("JavaScript 函数接收请求，在这里\b被称作 request handler。")]),s._v(" "),a("p",[s._v("Node.js's HTTP server 处理 客户端 与 函数 之间的连接，所以我不用去管什么网络协议问题。")]),s._v(" "),a("p",[s._v("在函数之中，它接收两个参数，请求对象 和 响应对象。")]),s._v(" "),a("p",[s._v("\bNode.js 程序简单来说就是处理 请求 和 响应。\b没有很复杂，但是因为原生提供的功能比较底层，所以代码量很大。使用框架可以让编写更简洁。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/g9ccPiM.png",alt:"Screen Shot 2018-07-09 at 11.52.16 AM"}})]),s._v(" "),a("p",[s._v("不用x像\b原生代码里写一个\b巨大的 request handler。Express 把它根据请求内容拆分成很多小函数，有的处理所有的请求，有的只处理 GET 请求，有的只处理针对一个\b特定 URL 的请求，等等。")]),s._v(" "),a("h3",{attrs:{id:"一个-express-程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一个-express-程序"}},[s._v("#")]),s._v(" 一个 Express 程序")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 引入模块")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" express "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'express'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 建立 express app")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("express")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello World!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"监听3000端口"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("h3",{attrs:{id:"express-的-最小化-理念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#express-的-最小化-理念"}},[s._v("#")]),s._v(' Express 的 "最小化" 理念')]),s._v(" "),a("p",[s._v("Express 框架的编程规范非常灵活, 并不会给你的代码限制在一个固定刻板的结构内.")]),s._v(" "),a("p",[s._v("因为模块化机制, 程序以 Express 框架为主体, 结合各种外部第三方类库, 去实现想要的具体功能.")]),s._v(" "),a("p",[s._v("这种最小化理念也是一把双刃剑。一方面，Express 非常灵活可靠，而且不会引入那些无用的代码。另一方面，与其他框架相比这种简洁不可避免导致了部分功能缺失。这意味需要在程序架构上做更多的功课，并且在出现问题后要花时间去寻找第三方模块。离开箱即用还差一点。")]),s._v(" "),a("p",[s._v("有人喜欢灵活多变的框架，而有人则喜欢那些结构固定的框架。Express 本身并不关注程序架构，所以程序员可以根据偏好自行选择。由于对程序有着绝对控制权，所以一旦你做出不明智的决策，那么后面的坑你就慢慢爬吧。")]),s._v(" "),a("p",[s._v("对于大型框架和极简框架的优劣，从来都没有固定的正确答案，所以我们无须太过纠结。这里，我只希望你记住 Express 是一个极简框架。")]),s._v(" "),a("h2",{attrs:{id:"express-核心"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#express-核心"}},[s._v("#")]),s._v(" Express 核心")]),s._v(" "),a("p",[s._v("一直都在说, Express 让 Node.js 编写变的简单, 但是具体是怎么做到的呢?")]),s._v(" "),a("p",[s._v("这主要是依靠于 Express 的三个核心特性:")]),s._v(" "),a("ul",[a("li",[s._v("Middleware")]),s._v(" "),a("li",[s._v("Routing")]),s._v(" "),a("li",[s._v("Sub-application")])]),s._v(" "),a("h3",{attrs:{id:"中间件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中间件"}},[s._v("#")]),s._v(" 中间件")]),s._v(" "),a("p",[s._v("\b在原生的 Node Web 程序里, 服务器接收客户端发来的请求, 然后经过请求处理函数( request handler )处理后, 返回\b给客户端一个响应.")]),s._v(" "),a("p",[s._v("这个请求处理函数往往随着需求的增加而增大, 最后难以管理. 在 Express 里, 大函数被\b拆分成了多个小函数, 每个函数只处理一个小任务, 这些小处理函数就被称作 "),a("strong",[s._v("中间件")])]),s._v(" "),a("p",[s._v("\b中间件再根据\b执行的\b先后顺序构成 中间件链条.")]),s._v(" "),a("p",[s._v("中间件最大的特点就是其相对来说比较标准，这也意味着开发者可以通过为 Express 开发中间件来拓展其功能。 使用其他人所写的中间件也十分容易.")]),s._v(" "),a("h3",{attrs:{id:"路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由"}},[s._v("#")]),s._v(" 路由\b")]),s._v(" "),a("p",[s._v("不同于中间件什么请求都处理，路由定义了 请求路径 和 请求 HTTP 方法 与 请求处理函数 之间的映射关系,")]),s._v(" "),a("p",[s._v("简单来说, 路由根据 客户端请求的 URL 和 HTTP\b 方法 来决定处理的方式.")]),s._v(" "),a("p",[s._v("类似于中间件，路由的处理也是通过处理函数进行定义的。而不同的行为会调用不同的处理函数。")]),s._v(" "),a("p",[s._v("举例说明, 客户端想要访问网站的主页, 客户端向 路径 "),a("code",[s._v("/index")]),s._v(" 发送 GET 请求. 服务器接收到请求后, 就开始查自己是否定义了关于 "),a("code",[s._v("/index")]),s._v(" 路径 GET 方法的请求处理函数. 之后找到了, 函数里说要返回给客户端主页的 HTML 文件. 执行函数, 发送响应到客户端.")]),s._v(" "),a("p",[s._v("Express 中的中间件和路由相辅相成。例如上面例子里, 你可以一边记录客户端的请求日志，同时当用户访问具体路径时做出相应的响应。")]),s._v(" "),a("h3",{attrs:{id:"子应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#子应用"}},[s._v("#")]),s._v(" 子应用")]),s._v(" "),a("p",[s._v("在 Node.js 中一个文件就被视为一个模块, 通过模块化, 让 Node 程序更易于管理和维护.  在 Express 的帮助下, 每个模块都可以写成一个 Express 应用.  在 Express 术语中这些子应用被称为路由器。")]),s._v(" "),a("p",[s._v("在编写大型程序时, 可以将其拆分成多个子应用, 每个应用只负责一部分特定的功能.")]),s._v(" "),a("p",[s._v("例如，在应用中可能存在管理后台、单页应用、API 接口 等等几个子模块。这时，你就可以将这些子模块作为一个子应用来实现。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/EV6WNHC.png",alt:"b0b96894f7720a3664d5c74cc8a1976f"}})]),s._v(" "),a("h2",{attrs:{id:"为什么选择-express"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么选择-express"}},[s._v("#")]),s._v(" 为什么选择 Express")]),s._v(" "),a("p",[s._v("因为 Express 基于 Node.js, 对于前端开发人员来说, 相较与学习一个新的后端语言( Ruby, Python ), 直接使用 JavaScript 显然更简单, 学习成本最低. 使用纯 JavaScript 技术栈就可以进行全栈开发是最主要的原因.")]),s._v(" "),a("p",[s._v("Express 经常被用于写 单页应用( SPA ), SPA 在前端重度依赖 JavaScript，而且通常需要一个服务器组件。大多数服务器只需要简单的提供 HTML、CSS 和 JavaScript，但是有时候 REST API 也是常规需求。Express 可以同时完成这两件任务，既可以提供 HTML 也非常适合构建 API 。 Express 相对较低的学习曲线使得前端开发者在几乎无需学习新内容的情况下搭建一个 SPA 服务。")])])}),[],!1,null,null,null);t.default=r.exports}}]);