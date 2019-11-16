(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{209:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"实现-hello-world-http-服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现-hello-world-http-服务器"}},[t._v("#")]),t._v(' 实现 "Hello World" HTTP 服务器')]),t._v(" "),a("p",[t._v('在这一节, 我会先介绍 "客户端" 和 "服务器" 的概念.')]),t._v(" "),a("p",[t._v('然后我会简单介绍一下 "HTTP \b协议".')]),t._v(" "),a("p",[t._v('最后, 我们要试着搭建一个最简易的 HTTP 服务器.  当浏览器去向\b这个服务器发送请求的时候, 服务器会返回 "Hello World" 文本.')]),t._v(" "),a("h2",{attrs:{id:"客户端-服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端-服务器"}},[t._v("#")]),t._v(" 客户端 & 服务器")]),t._v(" "),a("p",[t._v("\b先思考, 平时我们在浏览器地址栏中, 输入网址按下回车之后, 网页是如何呈现在我们面前的?")]),t._v(" "),a("p",[t._v("很显然, \b我们想要访问的网页不是原本就保存在\b我们的电脑里的.  我们在浏览器中输入\b网址, 去网页文件所在的网络设备中去请求网页.  拥有网页的网络设别同意了我们的请求, 把网页返回给了浏览器.  之后浏览器再解析渲染网页文件, 使网页最终能呈现在我们面前.")]),t._v(" "),a("p",[t._v("像浏览器这样, 请求访问文本或图像等资源的一端称为"),a("strong",[t._v("客户端")]),t._v("，而提供资源响应的一端称为"),a("strong",[t._v("服务端")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"什么是-http-协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-http-协议"}},[t._v("#")]),t._v(" \b什么是 HTTP 协议")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN HTTP 文档"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("客户端和服务器之间是怎么交流信息, 传递数据的呢?  \b")]),t._v(" "),a("p",[t._v('网络之间的\b各种网络设备, 就像 "学校里说不同方言的同学", 大家想要交流就必须使用 "普通话".  各种网络设别之间想要通信也需要一套大家都认可的通信标准.')]),t._v(" "),a("p",[a("strong",[t._v("HTTP 协议")]),t._v(" (Hyper Text Transfer Protocol 超文本传输协议）就是 服务器 和 客户端 之间的"),a("strong",[t._v("通信规则")]),t._v(".")]),t._v(" "),a("p",[t._v("在应用 HTTP 协议时，必定是一端担任客户端角色，另一端担任服务器端角色")]),t._v(" "),a("p",[t._v("使用 HTTP 协议传输的信息叫做 "),a("strong",[t._v("HTTP 报文")]),t._v(". 请求端（客户端）的 HTTP 报文叫做"),a("strong",[t._v("请求报文")]),t._v("，响应端（服务器端）的叫做"),a("strong",[t._v("响应报文")]),t._v("。 HTTP 报文可分为 "),a("strong",[t._v("报文首部")]),t._v(" 和 "),a("strong",[t._v("报文主体")]),t._v(" 两块, 中间由一个空行分开.")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/n8ecmof.png",alt:"Untitled Diagram(2)"}})]),t._v(" "),a("h3",{attrs:{id:"请求报文-响应报文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求报文-响应报文"}},[t._v("#")]),t._v(" 请求报文 & 响应报文")]),t._v(" "),a("p",[a("strong",[t._v("\b『 请求报文组成 』")]),t._v(": 请求方法 + 请求 URI + HTTP 协议版本 + (可选的请求首部字段 和 内容实体)")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/pZbTmLG.png",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("『 响应报文组成 』")]),t._v(": HTTP 协议版本 + 状态码（表示请求成功或失败的数字代码）+ 用以解释状态码的原因短语 + (可选的响应首部字段 以及 实体主体)")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/LhTUXaJ.png",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("『 请求方法 』")]),t._v(":")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN - HTTP 请求方法\b 文档"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("HTTP 定义了一组请求方法, 以表明要对给定资源执行的操作。")]),t._v(" "),a("p",[t._v("常用的有:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("GET")]),t._v(": 用来请求服务器端指定的资源。使用 GET 的请求应该只用于获取数据。")]),t._v(" "),a("li",[a("code",[t._v("POST")]),t._v(": 用来发送数据给服务器. 虽然用 GET 方法也可以传输主体.  但一般不用 GET 方法进行传输，而是用 POST 方法。")]),t._v(" "),a("li",[t._v("\b"),a("code",[t._v("PUT")]),t._v(": 用于新增资源.  PUT 与 POST 方法的区别在于，PUT 方法调用一次与连续调用多次是等价的，而连续调用多次 POST 方法可能会有副作用，比如将一个订单重复提交多次。")]),t._v(" "),a("li",[a("code",[t._v("\bDELETE")]),t._v(": 用于删除指定的资源。")])]),t._v(" "),a("p",[t._v("除上面这些之外, 还有其他请求方法,\b 想了解可以\b自行查阅文档.")]),t._v(" "),a("p",[a("strong",[t._v("『 URI 』")]),t._v(":")]),t._v(" "),a("p",[t._v("HTTP 协议使用 "),a("strong",[t._v("URI 定位互联网上的资源")]),t._v('。也就是我们常说的 "网址".  多数情况下 URL 和 URI 说的是一回事.  这里不做过多论述.')]),t._v(" "),a("p",[t._v("下图是 URI 的\b各个组成部分")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/PNmbAh1.png",alt:"2824193-3b10e5ce8796c938"}})]),t._v(" "),a("p",[a("strong",[t._v("『 状态码 』")]),t._v(":")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status",target:"_blank",rel:"noopener noreferrer"}},[t._v(" MDN - HTTP 状态码 - 文档"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("状态码的职责是当客户端向服务器端发送请求时，描述服务器返回的请求结果。")]),t._v(" "),a("p",[t._v("借助状态码，用户可以知道服务器端是正常处理了请求，还是出现了错误。")]),t._v(" "),a("p",[t._v("状态码由 3 位数字 和 原因短语 组成。")]),t._v(" "),a("p",[t._v("数字中的第一位指定了响应类别，后两位无分类。响应类别有以下 5 种:")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/m3Qc4kc.png",alt:"Screen Shot 2018-09-26 at 4.31.44 PM"}})]),t._v(" "),a("p",[t._v("最常见的两个就是:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("200 OK")]),t._v(": 表示从客户端发来的请求在服务器端被正常处理了。")]),t._v(" "),a("li",[a("code",[t._v("404 Not Found")]),t._v(": 该状态码表明服务器上无法找到请求的资源。除此之外，也可以在服务器端拒绝请求且不想说明理由时使用。")])]),t._v(" "),a("p",[t._v("其余的状态码, 大家可以查阅文档, 这里就不介绍了.")]),t._v(" "),a("p",[a("strong",[t._v("『 首部字段 』")]),t._v(":")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers",target:"_blank",rel:"noopener noreferrer"}},[t._v("\bMDN - HTTP 首部字段 - 文档"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("首部字段, 为客户端和服务器, 处理请求和响应, 提供了所需要的信息。")]),t._v(" "),a("p",[t._v("HTTP 首部字段是由 首部字段名 和 字段值 构成的，中间用 "),a("code",[t._v(":")]),t._v(" 分隔。")]),t._v(" "),a("p",[t._v("例如:")]),t._v(" "),a("p",[t._v("在 HTTP 首部中以 Content-Type 这个字段来表示报文主体的类型。 "),a("code",[t._v("Content-Type: text/html")]),t._v(" 就是说, 报文主体的类型为 HTML.")]),t._v(" "),a("p",[t._v("\b更多首部字段我就不再这里\b介绍了, 大家可以根据需要查阅文档.")]),t._v(" "),a("h2",{attrs:{id:"使用-http-模块-实现一个-hello-world-服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-http-模块-实现一个-hello-world-服务器"}},[t._v("#")]),t._v(' 使用 HTTP 模块 实现一个 "Hello World" 服务器')]),t._v(" "),a("p",[a("a",{attrs:{href:"http://nodejs.cn/api/http.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP 模块 - 文档"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Node.js 自身提供的 "),a("code",[t._v("http")]),t._v(" 模块, 提供了 HTTP 服务器和客户端接口, 可以很便捷地应用 HTTP 协议.")]),t._v(" "),a("p",[t._v("下面我就介绍如何用 "),a("code",[t._v("http")]),t._v(' 模块实现一个响应 "Hello World" 给\b客户端的 Web 服务器:')]),t._v(" "),a("p",[t._v("首先, 新建一个 JavaScript 文件, 取名 "),a("code",[t._v("myServer.js")]),t._v(" , 当然你可以叫别的.")]),t._v(" "),a("p",[t._v("\b在文件开头先引用 "),a("code",[t._v("http")]),t._v(" 模块.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" http "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("然后调用 "),a("code",[t._v("http.createServer")]),t._v(' 函数创建并返回一个 HTTP 服务器.  这个函数接收一个\b回调函数作为参数.  \b服务器每次收到客户端发过来的 HTTP 请求会交给这个回调函数处理.  回调函数会受到两个参数, "请求对象" 和 "响应对象", 一般简写为 '),a("code",[t._v("req")]),t._v(" 和 "),a("code",[t._v("res")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" server "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 处理请求, 送出响应")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("服务器每次收到\b新的请求, 都会创建新的请求对象和响应对象.  从客户端发过来的请求报文会被解析, 然后作为请求对象的一部分.  在回调函数的内部, 你需要根据\b业务逻辑处理请求, 然后送出响应给客户端, 结束此次请求.")]),t._v(" "),a("p",[t._v('在本练习中, 我们要返回给客户端一个写有 "Hello World" 的纯文本.  在回调函数中我们需要用到三个\b响应对象上的函数:')]),t._v(" "),a("ul",[a("li",[a("code",[t._v("res.writeHead(statusCode[, statusMessage][, headers])")]),t._v(": 该方法会发送一个响应头给客户端.  第一个参数作为状态码, 最后一个参数 "),a("code",[t._v("headers")]),t._v(" 是响应头对象。 第二个参数 "),a("code",[t._v("statusMessage")]),t._v(" 是可选的状态描述。")]),t._v(" "),a("li",[a("code",[t._v("res.write(chunk[, encoding][, callback])")]),t._v(": 该方法会发送一块响应主体。 它可被多次调用，以便提供连续的响应主体片段。第一个参数是一个字符串或一个 Buffer 字节流, 如果是\b字符串的话, 第二个参数指定如何将它编码成一个字节流 (默认为 utf-8).  最后一个参数这里先不考虑.")]),t._v(" "),a("li",[a("code",[t._v("res.end([data][, encoding][, callback])")]),t._v(": 该方法会通知服务器，所有响应头和响应主体都已被发送，即服务器将其视为已完成。每次响应都必须调用这个方法来结束请求, 否则请求会被一直挂起.  如果传入 data 参数, 相当于调用 "),a("code",[t._v("res.write(data, encoding)")]),t._v(".")])]),t._v(" "),a("p",[t._v("那么根据需求我们知道:")]),t._v(" "),a("ul",[a("li",[t._v("响应成功, 状态码为 200.")]),t._v(" "),a("li",[t._v("响应回去的为纯文本, 需要设定响应头 "),a("code",[t._v("Content-Type")]),t._v(" 的值为 "),a("code",[t._v("text/plain")]),t._v(".")]),t._v(" "),a("li",[t._v('响应回去的主体是一个字符串 "Hello World".')])]),t._v(" "),a("p",[t._v("根据这两个信息, 我们就可以很\b轻松的写出请求处理函数内的代码:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" server "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("writeHead")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/plain'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("最后, 我们需要给 Web 服务器绑定一个端口.  为了让服务器可以提供多种服务, 不同请求会被发送到不同的端口.  只有发送到我们指定端口的 HTTP 请求会被上面的代码所处理.")]),t._v(" "),a("p",[t._v("我们使用 "),a("code",[t._v("server.listen")]),t._v(" 函数, 第一个参数为端口号, 最后一个参数是一个回调函数, 监听成功后调用.")]),t._v(" "),a("p",[t._v("在这里我用 "),a("code",[t._v("3000")]),t._v(" 作为端口号, 当然你也可以改成你喜欢的.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\b服务器启动成功!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"正在监听 3000 端口:"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("全部写完后代码为:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" http "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" server "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("writeHead")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/plain'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nserver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\b服务器启动成功!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"正在监听 3000 端口:"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("在命令行中输入 "),a("code",[t._v("node myServer.js")]),t._v(" ( 注意你的路径和文件名 )")]),t._v(" "),a("p",[t._v("服务器运行后, 可以在命令行看见")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/jkchEZQ.png",alt:"Screen Shot 2018-09-26 at 6.10.47 PM"}})]),t._v(" "),a("p",[t._v("然后在浏览器中登录 "),a("code",[t._v("localhost:3000")]),t._v(', 你就可以看见服务器响应给你的 "Hello World" 了.')]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/o9Dxynd.png",alt:"Screen Shot 2018-09-26 at 6.11.52 PM"}})]),t._v(" "),a("p",[t._v("现在你成功的返回了一条纯文本内容给\b客户端.  接下来, 你可以试着返回一个 HTML 文本吗?")]),t._v(" "),a("p",[a("strong",[t._v("Tip:")]),t._v(" "),a("code",[t._v("Content-Type")]),t._v(" 的值应改成什么?")])])}),[],!1,null,null,null);s.default=e.exports}}]);