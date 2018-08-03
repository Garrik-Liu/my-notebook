(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{170:function(t,s,n){"use strict";n.r(s);var a=n(0),o=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),n("p",[t._v("由于HTTP协议是无状态的，即不会记录客户端与服务端的连接信息。简单地说，当你浏览了一个页面，然后转到同一个网站的另一个页面，服务器无法认识到这是同一个浏览器在访问同一个网站。每一次的访问，都是没有任何关系的。 故而有时需要一种保存客户端对服务器的访问状态的机制.")]),t._m(1),n("p",[t._v("cookie 是客户端请求服务器时，服务端记录的用户信息，存储在客户端, 下一次客户端发送请求时会将 cookie 一起发送。(就像令牌一样, 我是小钻风)")]),n("p",[t._v("客户端第一次访问服务器的时候, 不携带 cookie, 服务器接到请求后, 会记录用户的信息, 然后在响应头中设置 set-cookie 头部. 客户端收到后进行储存，下一次再请求服务器时请求头中会加上 cookie 这一项，服务器通过 cookie 判断客户端是否曾经访问过该网站。")]),n("p",[t._v("cookie 是有时限的，有一个属性 maxAge 可以设置 cookie 的存储时间，超过时间后 cookie 会被删除。cookie 一般用于用户的自动登录，记住密码等.")]),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),n("p",[t._v("例子:")]),t._m(7),t._m(8),t._m(9),t._m(10),n("p",[t._v("比如说:")]),t._m(11),t._m(12),n("p",[n("a",{attrs:{href:"https://www.npmjs.com/package/cookie-parser",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),n("OutboundLink")],1)]),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),n("p",[t._v("\b\n也可以用 "),n("a",{attrs:{href:"https://www.npmjs.com/package/cookie",target:"_blank",rel:"noopener noreferrer"}},[t._v("cookie 模块"),n("OutboundLink")],1)]),n("p",[t._v("通过 cookie-parser 中间件, cookie 的解析变得异常简单.")]),t._m(19),n("p",[t._v("出于安全的考虑，防止cookie被篡改, 我们通常需要对 cookie 进行签名。")]),t._m(20),n("p",[t._v("在\b\b使用 cookie-parser 中间件的时候, 传入 secret 参数就好了:")]),t._m(21),n("p",[t._v("在设置好秘钥之后, 在创建 cookie 时要将 signed 选项 \b设置为 true:")]),t._m(22),n("p",[t._v("这时再在客户端获得 cookie, 值就是加密后的一大串看不懂的字符了.")]),t._m(23),t._m(24),t._m(25),t._m(26),n("p",[t._v("session 和 cookie 的作用是一样的，也是存储用户信息，但是 session 是存储在服务器端的。")]),n("p",[t._v("session 还需借助 cookie 将唯一标识 sessionID 存到客户端。当客户端访问服务器时，会生成一个全局唯一标识 sessionID，然后服务器会记录用户的信息然后存储到服务器 session 中，由于客户端下一次发送请求时, 服务器要知道来的是谁，故需要将 sessionID 发送到客户端，方法有三种，一种就是设置 set-cookie 头将 sessionID 发送到客户端，另一种就是 url 重写, 把 session id 直接附加在 URL 路径的后面。还有就是用 表单隐藏字段.")]),n("p",[t._v("第二次请求该网站时，请求头中就会带上 cookie，cookie 的值是就是 sessionID。session 一般用于用户的身份验证，即利用 sessionID 判断用户是否合法。")]),n("p",[t._v("再详细一点, 服务器使用一种类似于散列表的结构来保存信息,  当程序需要为某个客户端的请求创建一个 session 时，服务器首先检查这个客户端的请求里是否已包含了一个 session 标识 (session id), 如果已包含则说明以前已经为此客户端创建过 session，服务器就按照session id 把对应的 session 检索出来, 如果检索不到，会新建一个.  如果客户端请求不包含 session id，则为此客户端创建一个session 并且生成一个与此 session 相关联的 session id，然后在本次响应中返回给客户端保存。")]),t._m(27),n("p",[t._v("\b"),n("a",{attrs:{href:"https://github.com/expressjs/session",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),n("OutboundLink")],1)]),n("p",[t._v("安装好中间件之后, 就要设置 session 中间件了:")]),t._m(28),t._m(29),t._m(30),t._m(31),t._m(32),t._m(33),t._m(34),t._m(35)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"cookie-和-session"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie-和-session","aria-hidden":"true"}},[this._v("#")]),this._v(" Cookie 和 Session")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"cookie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie","aria-hidden":"true"}},[this._v("#")]),this._v(" Cookie")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"设置-set-cookie-头"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置-set-cookie-头","aria-hidden":"true"}},[this._v("#")]),this._v(" 设置 set-cookie 头")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在客户端第一次访问服务器的时候, 服务器要设置 set-cookie 然后响应给客户端.  在 Express 中, 这通过 "),s("code",[this._v("res.cookie()")]),this._v(" 方法进行设置.")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("cookie")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("name")]),this._v(" 是 cookie 的名字, "),s("code",[this._v("value")]),this._v(" 是 cookie 的值。"),s("code",[this._v("options")]),this._v(" 对象是用来设置 set-cookie 头部的选项, 具体参数有:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://i.imgur.com/fNmf1ZT.png",alt:"698230-20170713162242775-775602549"}})])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("cookie")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'name'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'tobi'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" domain"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'.example.com'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" path"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/admin'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" secure"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nres"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("cookie")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'rememberme'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'1'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" expires"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Date")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Date"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("now")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("900000")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" httpOnly"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[n("p",[t._v('HttpOnly 属性: 如果在 Cookie 中设置了"HttpOnly" 属性，那么通过程序(JS脚本、Applet等)将无法读取到 Cookie 信息，这样能有效的防止XSS攻击。HttpOnly 属性的目的是'),n("strong",[t._v("防止程序获取 Cookie")]),t._v(" 后进行攻击")])]),n("li",[n("p",[t._v("Secure 属性： 当设置为 true 时，表示创建的 Cookie 会被以安全的形式向服务器传输，也就是只能在 HTTPS 连接中被浏览器传递到服务器端进行会话验证. Secure属性是"),n("strong",[t._v("防止信息在传递的过程中被监听捕获")]),t._v("后信息泄漏")])]),n("li",[n("p",[t._v("path 属性：指定可访问 Cookie 的目录。例如："),n("code",[t._v('"page=shop; path=/shop"')]),t._v(";就表示当前 Cookie 仅能在客户端访问 "),n("code",[t._v("\\shop")]),t._v(" 时, \b被发送到服务器。")])]),n("li",[n("p",[t._v("domain 属性：指定可访问 Cookie 的主机名. 主机名是指同一个域下的不同主机. 例如："),n("code",[t._v("www.google.com")]),t._v("和 "),n("code",[t._v("gmail.google.com")]),t._v(" 就是在 "),n("code",[t._v("google.com")]),t._v(" 域名下\b的两个不同的主机名。默认情况下，一个主机中创建的 Cookie 在另一个主机下是不能被访问的， 但可以通过 domain 参数来实现对其的控制, 以 google 为例，要实现跨主机访问，可以写为："),n("code",[t._v('"name=value; domain=.google.com"')]),t._v(" 这样所有"),n("code",[t._v("google.com")]),t._v(" 下的主机都可以访问该 Cookie。")])]),n("li",[n("p",[t._v("Expires 属性：指定过期时间. 超过这个时间，Cookie将消失，不可访问。例如：如果要将 Cookie 设置为10天后过期，可以这样实现："),n("code",[t._v('"name=garrik; expire=" + new Date(Date.now() + 10 * 24 * 3600 * 1000).toGMTString();')])])]),n("li",[n("p",[t._v("Max-Age 属性: 用于代替 Expires, Max-Age 的值 可以为正数，表示此 Cookie 从创建到过期所能存在的时间，以秒为单位，此 Cookie 会存储到客户端电脑，以 Cookie 文件形式保存. 不论关闭浏览器或关闭电脑，直到时间到才会过期。 可以为负数，表示此 Cookie 只是存储在浏览器内存里，只要关闭浏览器，此 Cookie 就会消失。maxAge 默认值为 -1。 还可以为 0，表示从客户端电脑或浏览器内存中删除此 Cookie。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"删除-cookie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除-cookie","aria-hidden":"true"}},[this._v("#")]),this._v(" 删除 cookie")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("clearCookie")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// 设置 cookie")]),t._v("\napp"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("use")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("cookie")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"name"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"garrik"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("next")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 删除 cookie")]),t._v("\napp"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("use")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("clearCookie")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"name"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("next")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"cookie-parser"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie-parser","aria-hidden":"true"}},[this._v("#")]),this._v(" cookie-parser")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("cookie-parser")]),this._v(" 是 Express的 中间件，用来实现 cookie 的解析.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这个中间件会在 "),s("code",[this._v("req")]),this._v(" 中添加一个 "),s("code",[this._v("cookies")]),this._v(" 对象, 用来存放解析成键值对的 cookie. 并且还提供 cookie 签名, 等功能来提高安全性.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在原生的 Node 代码里面, 我们通过 "),s("code",[this._v("req.headers.cookie")]),this._v(" 来获得请求头中的 cookie 的字符串形式.")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("app"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("use")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token function"}},[t._v("next")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("原生 \b\bNode 解析 "),s("code",[this._v("req.header.cookie")]),this._v(" 字符串成对象:")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("app"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("use")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 用于保存 cookie")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Cookies "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 先确定 cookie 存在, 然后按照 ; 把字符串分割成数组, 然后遍历:")]),t._v("\n    req"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" req"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("split")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("';'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("forEach")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" Cookie "),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// 把单个的\b数组项按 = 分割成两部分:")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" parts "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Cookie"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("split")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'='")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \n        "),n("span",{attrs:{class:"token comment"}},[t._v("// 把\b\b cookie 按照键值对的形式保存在 Cookies 对象里.")]),t._v("\n        Cookies"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("parts"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("trim")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parts"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("''")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("trim")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Cookies"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n    "),n("span",{attrs:{class:"token function"}},[t._v("next")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" cookieParser "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'cookie-parser'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("//  使用中间件")]),t._v("\napp"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("use")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token function"}},[t._v("cookieParser")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\napp"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("use")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookies"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token function"}},[t._v("next")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果要加密, 服务器需要设置 "),s("code",[this._v("req.secret")]),this._v(" 秘钥字符串, cookie-parser 就可以做这个事情:")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("app"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("use")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token function"}},[t._v("cookieParser")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"secret"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("cookie")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'username'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'garrik'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    signed"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://i.imgur.com/FLDcQvT.png",alt:"Screen Shot 2018-07-28 at 4.46.31 PM"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("想在服务器获得客户端传过来的加密后的 cookie, 我们不能再\b用 "),s("code",[this._v("req.cookies")]),this._v(" 了.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("req.cookie")]),this._v(" 用于获取未加密的 cookie, 只能获得未加密的, 加密的也不会以\b密码形式出现.")]),s("li",[s("code",[this._v("req.signeCookie")]),this._v(" 用于获取未加密的cookie, 只能\b获得加密过的, 未加密的也不会出现.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"session"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#session","aria-hidden":"true"}},[this._v("#")]),this._v(" Session")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"express-session"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#express-session","aria-hidden":"true"}},[this._v("#")]),this._v(" express-session")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("app"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("use")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token function"}},[t._v("cookieParser")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 要放在 cookieParser \b之后\b, 因为要用到 session id.")]),t._v("\napp"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("use")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token function"}},[t._v("session")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    secret"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'my app secret'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 用来对session id相关的cookie进行签名")]),t._v("\n    \n    saveUninitialized"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 是否自动保存未初始化的会话，建议false")]),t._v("\n    \n    resave"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 是否每次都重新保存会话，建议false")]),t._v("\n    \n    store"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("MongoStore")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("//创建新的mongodb数据库存储session")]),t._v("\n        host"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'localhost'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("//数据库的地址，本机的话就是127.0.0.1，也可以是网络主机")]),t._v("\n        port"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("27017")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("//数据库的端口号")]),t._v("\n        db"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'test-app'")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("//数据库的名称。")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    \n    name"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'test'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("//cookie 的 name，默认值是：connect.sid")]),t._v("\n    \n    cookie"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        maxAge"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("10")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1000")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"常用参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用参数","aria-hidden":"true"}},[this._v("#")]),this._v(" 常用参数:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("p",[this._v("secret: 一个 String 类型的字符串，作为服务器端生成 session 的签名。")])]),s("li",[s("p",[this._v("name: 返回客户端的 cookie key 的名称，默认为 connect.sid,也可以自己设置。")])]),s("li",[s("p",[this._v("resave: (是否允许)当客户端并行发送多个请求时，其中一个请求在另一个请求结束时对 session 进行修改覆盖并保存。\n默认为 true。但是(后续版本)有可能默认失效，所以最好手动添加。")])]),s("li",[s("p",[this._v("saveUninitialized: 初始化 session 时是否保存到存储。默认为 true， 但是(后续版本)有可能默认失效，所以最好手动添加。")])]),s("li",[s("p",[this._v("cookie: 设置返回到前端 key 的设置，默认值为 "),s("code",[this._v("{ path: ‘/', httpOnly: true, secure: false, maxAge: null }")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"使用实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用实例","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用实例:")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("app"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("use")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token function"}},[t._v("cookieParser")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'secret'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napp"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("use")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token function"}},[t._v("session")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n secret"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'secret'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token comment"}},[t._v("//与 cookieParser 中的一致")]),t._v("\n resave"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n saveUninitialized"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 保存 session")]),t._v("\napp"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("use")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" user "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"garrik"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    gender"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"male"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  req"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("session"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("user "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" user"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 就可以\b看到刚刚保存的 session 了")]),t._v("\napp"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("use")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("session"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("user"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("session"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("user"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n\n    res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("end")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"cookie-session"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie-session","aria-hidden":"true"}},[this._v("#")]),this._v(" cookie-session")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"区别-和-优缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#区别-和-优缺点","aria-hidden":"true"}},[this._v("#")]),this._v(" 区别 和 优缺点")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("最大的区别应该在于存储的地方不一样，cookie存储在客户端，session存储在服务器；")]),s("li",[this._v("从安全性方面来说，cookie 存储在客户端，很容易被窃取，暴露用户信息，而 session 存储在服务器，被窃取的机会小很多，故session 的安全性比 cookie 高；")]),s("li",[this._v("从性能方面来说，cookie 存储在浏览器端消耗的是用户的资源，相对比较分散，而 session 消耗的服务器的内存，会造成服务器端的压力；")]),s("li",[this._v("cookie 可以长期的存储在客户端，但是数量和大小都是有限制的, 单个cookie保存的数据不能超过4K；session 存在服务器的时间较短，但是没有大小的限制")])])}],!1,null,null,null);s.default=o.exports}}]);