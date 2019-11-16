(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{223:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),n("p",[n("a",{attrs:{href:"http://www.expressjs.com.cn/guide/using-middleware.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Express文档链接"),n("OutboundLink")],1)]),t._m(1),n("p",[t._v("如果只用一个大函数来处理请求，随着项目的增大，这个函数会变得越来越难维护。\n使用中间件，来把这个大函数来分解成多个小函数，一次只处理一件事。")]),n("p",[t._v("从本质上来说，一个 Express 应用就是在调用各种中间件。")]),n("p",[t._v("从概念上讲，中间件是一种功能的封装方式。")]),n("p",[t._v("在使用上讲，中间件只是一个有 3 个参数的函数: 一个 请求对象、一个 响应对象 和一个 next 函数。(还有一种 4 个参数的形式，用来做错误处理）.\n当 next 函数被\b调用, Express 就会执行 中间件组 的下一个函数.")]),t._m(2),n("p",[t._v("可以把中间件想象成 水管。水从一端入，在到达出水口的过程中，会经历各种 仪表 和 阀门。而这个过程中最重要的就是顺序。在其中一个阀门中注入一种原料，流过这个阀门之后的水都会含有这种原料。")]),t._m(3),t._m(4),t._m(5),n("p",[t._v("由传入每个中间件的 next函数 控制在 “管道” 中的请求是否终止向下传。调用 next() 方法将控制权交给下一个中间件，否则请求就会挂起。")]),t._m(6),t._m(7),t._m(8),t._m(9),n("p",[t._v("误处理中间件和其他中间件定义类似，只是要使用 4 个参数，而不是 3 个 (err, req, res, next)。")]),t._m(10),t._m(11),n("p",[t._v("Express 内置了一个错误处理句柄，它可以捕获应用中可能出现的任意错误。这个缺省的错误处理中间件将被添加到中间件堆栈的底部。")]),t._m(12),n("p",[t._v("堆栈追踪信息并不会在生产环境中反馈到客户端。")]),t._m(13),t._m(14),t._m(15),t._m(16),n("p",[t._v("路由处理器的第一个参数必须是路径。")]),t._m(17),n("p",[t._v("中间件也可以将路径作为第一个参数，但它是可选的(如果忽略这个参数，它会匹配所 有路径)。\n路由处理器和中间件的参数中都有回调函数，这个函数有 2 个、3 个或 4 个参数。")]),t._m(18),t._m(19),t._m(20)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"中间件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#中间件","aria-hidden":"true"}},[this._v("#")]),this._v(" 中间件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概念","aria-hidden":"true"}},[this._v("#")]),this._v(" 概念")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://i.imgur.com/TGub4wG.png",alt:"Screen Shot 2018-07-23 at 1.32.46 PM"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"应用级中间件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用级中间件","aria-hidden":"true"}},[this._v("#")]),this._v(" 应用级中间件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在 Express 程序中，通过调用 "),s("code",[this._v("app.use")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("app"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("use")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v(" 其他代码 "),n("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://i.imgur.com/MVC9SgG.png",alt:"Screen Shot 2018-07-08 at 5.03.52 PM"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://i.imgur.com/Uba2gsE.png",alt:"Screen Shot 2018-07-08 at 5.05.47 PM"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("\b在 Node 中，请求对象 和 响应对象 只被传递进一个请求处理函数.\n但在 Express 中，请求对象 和 响应对象 被传递到一个 中间件\b堆栈（middleware stack）, 并且从第一个函数开始, 一直被传递到最后一个。 最后一个函数\b中, 必须调用 "),s("code",[this._v("res.end()")]),this._v(" 以来结束\b\b\b此次请求.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"错误处理中间件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#错误处理中间件","aria-hidden":"true"}},[this._v("#")]),this._v(" 错误处理中间件")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("app"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("use")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" req"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在应用中, 一般在其他 "),s("code",[this._v("app.use()")]),this._v(" 和路由调用后，最后定义错误处理中间件, 也就是说错误处理是放在最后的中间件.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果你向 "),s("code",[this._v("next()")]),this._v(" 传递了一个 "),s("code",[this._v("error")]),this._v(" ，而你并没有在错误处理句柄中处理这个 "),s("code",[this._v("error")]),this._v("，Express 内置的缺省错误处理句柄就是最后兜底的。最后错误将被连同堆栈追踪信息一同反馈到客户端。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("设置环境变量 NODE_ENV 为 “production” 就可以让应用运行在生产环境模式下。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"中间件-和-路由处理器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#中间件-和-路由处理器","aria-hidden":"true"}},[this._v("#")]),this._v(" 中间件 和 路由处理器")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("路由处理器（"),n("code",[t._v("app.get")]),t._v("，"),n("code",[t._v("app.post")]),t._v("，被统称为 "),n("code",[t._v("app.VERB")]),t._v("）可以被看作只处理特定 HTTP 请求的中间件。\n可以将 "),n("code",[t._v("app.use")]),t._v(" 看作可以处理全部 HTTP 请求的路由处理器。(基本上等同于 "),n("code",[t._v("app.all")]),t._v("）")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("app"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token keyword"}},[t._v("get")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'/'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("send")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'GET request to the homepage'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// 没有挂载路径的中间件，应用的每个请求都会执行该中间件")]),t._v("\napp"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("use")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'Time:'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Date"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("now")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token function"}},[t._v("next")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 挂载至 /user/:id 的中间件，任何指向 /user/:id 的请求都会执行它")]),t._v("\napp"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("use")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'/user/:id'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'Request Type:'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" req"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("method"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token function"}},[t._v("next")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("p",[this._v("如果有 2 个或 3 个参数，头两 个参数是 请求 和 响应对象，第三个参数是 next 函数。")])]),s("li",[s("p",[this._v("如果有 4 个参数，它就变成了 错误处理中间件，第一个参数变成了 error 对象，然后依次是 请求、响应 和 next 对象。")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("如果不调用 "),n("code",[t._v("next()")]),t._v("，请求会被挂起，也不会再有处理器或中间件做后续处理。\n如果你不调用 "),n("code",[t._v("next()")]),t._v("，则应该发送一个响应到客户端("),n("code",[t._v("res.send")]),t._v("、"),n("code",[t._v("res.json")]),t._v("、"),n("code",[t._v("res.render")]),t._v(" 等)\n如果你不这样做，请求会被挂起并最终导致超时。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果调用了 "),s("code",[this._v("next()")]),this._v("，一般就不要发送响应到客户端。如果你发送了，管道中后续的 中间件 或 路由处理器 还会执行，但它们发送的任何响应都会被忽略。")])}],!1,null,null,null);s.default=e.exports}}]);