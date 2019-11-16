(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{169:function(t,e,r){"use strict";r.r(e);var s=r(0),a=Object(s.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("p",[r("router-link",{attrs:{to:"./"}},[t._v("返回目录")])],1),t._m(0),t._m(1),r("p",[t._v("请求访问文本或图像等资源的一端称为客户端，而提供资源响应的一端称为服务器端。")]),r("p",[t._v("应用 HTTP 协议时，必定是一端担任客户端角色，另一端担任服务器端角色")]),t._m(2),r("p",[t._v("客户端发出请求，服务器端回复响应. 换句话说, 从客户端开始建立通信，服务器端在没有接收到请求之前不会发送响应。")]),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),r("p",[t._v("HTTP 是一种不保存状态，即无状态（stateless）协议。HTTP 协议自身不保存之前发送过的 请求 或 响应 的信息.\n也就是说, 客户端不知道之前请求过什么, 服务器也不知道\b之前发过什么.")]),r("p",[t._v("这带来了简便,\b 也带来了不便.  比如说,\b 很多网页需要保存用户的登录状态. 为了解决这个问题, 前端引入了 Cookie 技术.")]),t._m(8),r("p",[t._v("HTTP 协议使用 URI 定位互联网上的资源。")]),r("p",[t._v("在\b客户端\b发送资源请求的时候, 需要在请求报文中指明 请求 URI. 指定请求 URI 的方式有很多。")]),r("p",[t._v("绝对 URI \b作为 请求 URI")]),t._m(9),r("p",[t._v("相对 URI 作为 请求 URI (\b当首部字段 Host 指明了 域名 或者 IP)")]),t._m(10),t._m(11),r("p",[t._v("HTTP 定义了一组请求方法, 以表明要对给定资源执行的操作。")]),t._m(12),r("p",[t._v("GET 方法用来请求访问已被 URI 识别的资源。服务器端解析资源后返回响应内容。")]),t._m(13),r("p",[t._v("POST 方法用来传输报文体的主体。虽然用 GET 方法也可以传输实体的主体，但一般不用 GET 方法进行传输，而是用 POST 方法。\n虽说 POST 的功能与 GET 很相似，但 POST 的主要目的并不是获取响应的主体内容。")]),t._m(14),r("p",[t._v("PUT 方法用来传输文件。就像 FTP 协议的文件上传一样，要求在请求报文的主体中包含文件内容，然后保存到请求 URI 指定的位置。")]),r("p",[t._v("但因为 HTTP/1.1 的 PUT 方法自身不带验证机制，任何人都可以上传文件 , 存在安全性问题，因此一般的 Web 网站不使用该方法。")]),t._m(15),r("p",[t._v("HEAD 方法和 GET 方法一样，只是不返回报文主体部分, 只返回响应头。用于确认 URI 的有效性及资源更新的日期时间等。")]),t._m(16),r("p",[t._v("DELETE 方法按请求 URI 删除指定的资源。\n但是，HTTP/1.1 的 DELETE 方法本身和 PUT 方法一样不带验证机制，所以一般的 Web 网站也不使用 DELETE 方法。")]),t._m(17),r("p",[t._v("OPTIONS 方法用来查询 请求 URI 指定的资源 所支持的方法。")]),t._m(18),r("p",[t._v("在 HTTP 协议的初始版本中，每进行一次 HTTP 通信就要断开一次 TCP 连接。")]),t._m(19),r("p",[t._v("在进行连续多次 HTTP 通信的时候, 频繁的连接和断开,会增加通信量的开销. (比如:一个 HTML 页面有很多图片,加载时就需要进行多次 HTTP 通信)")]),r("p",[t._v("为解决上述 TCP 连接的问题，HTTP 添加了支持持久连接的方法（HTTP Persistent Connections，也称为 HTTP keep-alive 或 HTTP connection reuse）")]),r("p",[t._v("持久连接的特点是，只要任意一端没有明确提出断开连接，则保持 TCP 连接状态。(挂起 ?)")]),t._m(20),r("p",[t._v("持久连接的好处在于减少了 TCP 连接的重复建立和断开所造成的额外开销，减轻了服务器端的负载。\n另外，减少开销的那部分时间，使 HTTP 请求和响应能够更早地结束，这样 Web 页面的显示速度也就相应提高了。")]),r("p",[t._v("在 HTTP/1.1 中，所有的连接默认都是持久连接.")]),t._m(21),r("p",[t._v("持久连接使得多数请求以管线化（pipelining）方式发送成为可能. (并行发送)")]),r("p",[t._v("从前发送请求后需等待并收到响应，才能发送下一个请求。管线化技术出现后，不用等待响应亦可直接发送下一个请求。")]),t._m(22),t._m(23),r("p",[t._v("HTTP 是无状态协议，它不对之前发生过的请求和响应的状态进行记忆。")]),r("p",[t._v("也就是说，无法根据之前的状态进行本次的请求处理。")]),r("p",[t._v("如果要求登录认证的 Web 页面本身无法进行状态的管理（不记录已登录的状态），那么每次跳转新页面就要再次登录, 或者要在每次请求报文中附加参数来管理登录状态。")]),r("p",[t._v("Cookie 技术通过在请求和响应报文中写入 Cookie 信息来控制客户端的状态。")]),r("p",[t._v("Cookie 会根据从服务器端发送的响应报文内的一个叫做 Set-Cookie 的首部字段信息，通知客户端保存 Cookie。")]),r("p",[t._v("当下次客户端再往该服务器发送请求时，客户端会自动在请求报文中加入 Cookie 值后发送出去。")]),r("p",[t._v("服务器端发现客户端发送过来的 Cookie 后，会去检查究竟是从哪一个客户端发来的连接请求，然后对比服务器上的记录，最后得到之前的状态信息。")]),r("p",[t._v("(就像, 去会所登记个会员卡, 第一次去的时候没卡, 登记好, 拿完卡, 下次去的时候, 会所就知道你是谁了)")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"http-协议简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-协议简介","aria-hidden":"true"}},[this._v("#")]),this._v(" HTTP 协议简介")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("简单来说, HTTP 协议 用于规定 服务器 和 客户端 之间通信的规则."),e("br"),this._v("\n通信的信息叫做 HTTP 报文. 请求端（客户端）的 HTTP 报文叫做请求报文，响应端（服务器端）的叫做响应报文。\nHTTP 报文可分为 报文头 和 报文体 两块。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"请求报文-与-响应报文-组成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求报文-与-响应报文-组成","aria-hidden":"true"}},[this._v("#")]),this._v(" 请求报文 与 响应报文 组成")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("请求报文组成: 请求方法 + 请求 URI + 协议版本 + (可选的请求首部字段 和 内容实体)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://i.imgur.com/pZbTmLG.png",alt:"Screen Shot 2018-07-10 at 11.49.11 AM"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("响应报文组成: 协议版本 + 状态码（表示请求成功或失败的数字代码）+ 用以解释状态码的原因短语 + (可选的响应首部字段 以及 实体主体)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://i.imgur.com/LhTUXaJ.png",alt:"Screen Shot 2018-07-10 at 11.53.22 AM"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"http-的-无状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-的-无状态","aria-hidden":"true"}},[this._v("#")]),this._v(" HTTP 的 无状态")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"资源定位-请求-uri"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#资源定位-请求-uri","aria-hidden":"true"}},[this._v("#")]),this._v(" 资源定位\b: 请求 URI")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("GET http://example.com/index.html HTTP/1.1\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("GET /index.html HTTP/1.1\nHost: example.com\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"告知意图-http-请求方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#告知意图-http-请求方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 告知意图\b: HTTP 请求方法")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"get-：获取资源-我想要"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-：获取资源-我想要","aria-hidden":"true"}},[this._v("#")]),this._v(" GET ：获取资源 (我想要...)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"post：传输实体主体-我要告诉你"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#post：传输实体主体-我要告诉你","aria-hidden":"true"}},[this._v("#")]),this._v(" POST：传输实体主体 (我要告诉你...)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"put：传输文件-我给你"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#put：传输文件-我给你","aria-hidden":"true"}},[this._v("#")]),this._v(" PUT：传输文件 (我给你...)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"head：获得报文首部-告诉我"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#head：获得报文首部-告诉我","aria-hidden":"true"}},[this._v("#")]),this._v(" HEAD：获得报文首部 (告诉我...)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"delete：删除文件-给我扔了"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#delete：删除文件-给我扔了","aria-hidden":"true"}},[this._v("#")]),this._v(" DELETE：删除文件 (给我扔了...)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"options：询问支持的方法-都能干啥"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options：询问支持的方法-都能干啥","aria-hidden":"true"}},[this._v("#")]),this._v(" OPTIONS：询问支持的方法 (都能干啥...)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"持久连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#持久连接","aria-hidden":"true"}},[this._v("#")]),this._v(" 持久连接")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://i.imgur.com/rBRpcmc.png",alt:"Screen Shot 2018-07-10 at 2.29.17 PM"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("v"),e("img",{attrs:{src:"https://i.imgur.com/h50ZprZ.png",alt:"Screen Shot 2018-07-10 at 2.34.34 PM"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"管线化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#管线化","aria-hidden":"true"}},[this._v("#")]),this._v(" 管线化")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://i.imgur.com/8OwuSKV.png",alt:"Screen Shot 2018-07-10 at 2.37.27 PM"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"使用-cookie-进行状态管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-cookie-进行状态管理","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用 Cookie 进行状态管理")])}],!1,null,null,null);e.default=a.exports}}]);