(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{154:function(t,s,n){"use strict";n.r(s);var e=n(0),a=Object(e.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._m(1),n("p",[n("a",{attrs:{href:"https://nodejs.org/dist/latest-v8.x/docs/api/http.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("\bHTTP 文档"),n("OutboundLink")],1)]),n("p",[t._v("在 Node 标准库提供了 http 模块, 可以让 HTTP 协议 应用起来更简易.")]),t._m(2),t._m(3),n("p",[t._v("http.Server 是 http 模块中的 HTTP 服务器对象. 用 Node.js 做的所有基于 HTTP 协议的系统都是基于 http.Server 实现的.")]),n("p",[t._v("它提供了 一套封装级别很低的 API，仅仅是流控制和简单的消息解析，所有的高层功能都要通过它们接口来实现。")]),t._m(4),t._m(5),n("p",[t._v("HTTP 请求处理函数 接受两个参数, 分别是请求对象 ( request ) 和响应对象 ( response )")]),t._m(6),t._m(7),t._m(8),n("p",[n("a",{attrs:{href:"https://nodejs.org/dist/latest-v8.x/docs/api/http.html#http_class_http_server",target:"_blank",rel:"noopener noreferrer"}},[t._v("http.Server 文档"),n("OutboundLink")],1)]),n("p",[t._v("在讲解上面代码, 之前我们\b先来介绍一些知识.")]),t._m(9),t._m(10),n("p",[t._v("事件都继承自 EventEmitter，常用的几个有:")]),t._m(11),t._m(12),n("p",[t._v("是 HTTP 请求的信息. 一般由\nhttp.Server 创建，作为 request 或 response 事件的第一个参数传递. 通常简称 request 或 req.")]),t._m(13),n("p",[t._v("http.ServerResponse 是返回给客户端的信息，决定了用户最终能看到的结果。一般由\nhttp.Server 创建，作为 request 或 response 事件的第二个参数传递. 通常简称  response 或 res.")]),t._m(14),n("p",[t._v("首先在代码中, 我们创建一个 http.Server 实例, 然后监听 request 事件.")]),n("p",[t._v("http.Server 实例在创建时,\b 接收一个函数作为 requestListner 请求监听函数.")]),n("p",[t._v("当 request 事件触发了, request 事件向这个函数传递 req 和 res 两个对象, 同时该函数被\b回调执行.")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"核心模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#核心模块","aria-hidden":"true"}},[this._v("#")]),this._v(" 核心模块")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"http-模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-模块","aria-hidden":"true"}},[this._v("#")]),this._v(" HTTP 模块")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("模块中封装了一个高效的 HTTP 服务器对象 和 一个简易的 HTTP 客户端.\n"),s("code",[this._v("http.Server")]),this._v(" 是一个基于事件的 HTTP 服务器.\n"),s("code",[this._v("http.request")]),this._v(" 则是一个 HTTP 客户端工具，用于向 HTTP 服务器发起请求.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"http-服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-服务器","aria-hidden":"true"}},[this._v("#")]),this._v(" HTTP 服务器")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("先看个实际使用:")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("首先使用 "),s("code",[this._v("http.createServer")]),this._v(" 方法创建一个实例.  这个函数接受一个 HTTP 请求处理函数 (requestListner) 作为参数, 返回一个 http.Server 实例.")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// 引入 http 模块")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" http "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'http'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 创建实例")]),t._v("\nhttp"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("createServer")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("writeHead")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("200")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token string"}},[t._v("'Content-Type'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'text/plain'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("write")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'I am Garrik'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("end")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 在 3000 端口监听")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("listen")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("3000")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在上面的代码中, 我先在编写了 响应头部. 然后编写了 响应\b体. 然后通过 "),s("code",[this._v("res.end")]),this._v(" 结束并发送. 最后调用 "),s("code",[this._v("listen")]),this._v(" 函数去监听服务器的 3000 端口.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("知识点:")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("http.Server 的事件:")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("首先 http.Server 是一个"),s("strong",[this._v("基于事件")]),this._v("的 HTTP 服务器. 所有的请求都被封装为独立的事件， 开发者只需要对它的事件编写响应函数即可实现 HTTP 服务器的所有功能。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[n("p",[n("code",[t._v("request")]),t._v(":\n当收到客户端发来的请求时, 该事件触发.\n发送两个参数 req 和 res, ，分别是 "),n("code",[t._v("http.IncomingMessage")]),t._v(" 和 "),n("code",[t._v("http.ServerResponse")]),t._v(" 的实例，表示请求和响应信息。")])]),n("li",[n("p",[n("code",[t._v("connection")]),t._v(":\n当 TCP 连接建立时，该事件被触发，提供一个参数 socket，为 "),n("code",[t._v("net.Socket")]),t._v(" 的实例。\nconnection 事件的粒度要大于 request，因为客户端在 Keep-Alive 模式下可能会在同一个连接内发送多次请求。(粒度大意思就是事件被触发频率高, 个人理解.)")])]),n("li",[n("p",[n("code",[t._v("close")]),t._v(":\n当服务器关闭时，该事件被触发。注意不是在用户连接断开时。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("http.IncomingMessage:")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("http.ServerResponse:")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("代码解析:")])])}],!1,null,null,null);s.default=a.exports}}]);