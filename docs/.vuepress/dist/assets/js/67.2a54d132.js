(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{157:function(t,v,_){"use strict";_.r(v);var i=_(0),a=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("div",{staticClass:"content"},[_("h1",{attrs:{id:"基础知识"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基础知识","aria-hidden":"true"}},[t._v("#")]),t._v(" 基础知识")]),_("h2",{attrs:{id:"浏览器结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器结构","aria-hidden":"true"}},[t._v("#")]),t._v(" 浏览器结构")]),_("p",[t._v("🤔  浏览器从输入一个网址到展现页面内容这个过程里, 发生了什么?")]),_("ul",[_("li",[t._v("在用户输入一个网址之后, 浏览器开启一个线程处理这个请求.")]),_("li"),_("li",[t._v("用 DNS 解析地址, 获取 IP 地址.  之后与目标服务器建立连接.")]),_("li",[t._v("进行 HTTP 协议对话, 浏览器向服务器发送请求报文")]),_("li",[t._v("Web 服务器处理请求")]),_("li",[t._v("服务器向浏览器返回响应报文")]),_("li",[t._v("浏览器开始下载 HTML 文档")]),_("li",[t._v("浏览器解析 HTML 文档结构, 建立 DOM 树, 并下载 HTML 文件内标记请求的 MIME 类型文件")]),_("li",[t._v("页面解析渲染 DOM, CSS 根据规则解析, 并结合 DOM 树进行页面内容布局和绘制.  JavaScript 根据 DOM API 操作 DOM, 执行相关的事件绑定函数.")])]),_("p",[t._v("一般认为, 浏览器由七部分构成:")]),_("ul",[_("li",[t._v("『 "),_("strong",[t._v("用户界面")]),t._v(" 』: 可见的软件界面. 地址栏, 书签, 前进后退, 等用户可见, 可操作的界面.")]),_("li",[t._v("『 "),_("strong",[t._v("网络模块")]),t._v(" 』: 用以开启网络线程, 发送请求或下载资源的模块")]),_("li",[t._v("『 "),_("strong",[t._v("浏览器引擎")]),t._v(" 』: 用以在用户界面和渲染引擎之间传送指令, 或者在客户端本地缓存中读取数据")]),_("li",[t._v("『 "),_("strong",[t._v("渲染引擎")]),t._v(' 』: 解析 DOM 文档 和 CSS 规则, 让样式显示在页面中.  平时所说的 "浏览器内核" 就是指渲染引擎')]),_("li",[t._v("『 "),_("strong",[t._v("UI 后端")]),t._v(" 』: 绘制基本的浏览器窗口内控件 ❓")]),_("li",[t._v("『 "),_("strong",[t._v("JavaScript 解释器")]),t._v(" 』: 用以解释和执行 JavaScript 代码, 例如 V8 引擎")]),_("li",[t._v("『 "),_("strong",[t._v("持久化数据储存")]),t._v(" 』: cookie, localStorage 等客户端储存技术")])]),_("p",[_("img",{attrs:{src:"https://i.imgur.com/M67aWS3.png",alt:"Screen Shot 2018-10-16 at 11.00.48 PM"}})]),_("h2",{attrs:{id:"渲染引擎简介"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#渲染引擎简介","aria-hidden":"true"}},[t._v("#")]),t._v(" 渲染引擎简介")]),_("p",[t._v("渲染引擎在浏览器中主要用于解析 HTML 文档 和 CSS 文档.  将 CSS 样式应用到 HTML 元素上.  并将 HTML 渲染到浏览器窗口以显示具体内容.")]),_("p",[t._v("具体步骤:")]),_("ol",[_("li",[t._v("解析 HTML 构建 DOM 树")]),_("li",[t._v("构建渲染树")]),_("li",[t._v("渲染树布局阶段")]),_("li",[t._v("绘制渲染树")])]),_("p",[t._v('渲染引擎会先将 HTML 文档解析成由多个 "DOM 元素对象节点" 构成的具有上下级关系的 "DOM 树" 结构.')]),_("p",[t._v('然后根据 DOM 树的节点顺序提取应用于对应节点的 CSS 规则, 计算 DOM 树的样式数据, 生成一个带 样式描述的 "DOM 渲染树"')]),_("p",[t._v('之后根据 DOM 渲染树的节点在页面中的尺寸和位置, 将各个节点放置在页面的对应位置上.  这个阶段主要是元素的 "布局属性" ('),_("code",[t._v("margin")]),t._v(", "),_("code",[t._v("padding")]),t._v(", "),_("code",[t._v("position")]),t._v(") 生效.")]),_("p",[t._v('最后再将 DOM 渲染树各个节点的颜色, 字体大小, 等等样式应用于上.  这个阶段主要是元素的 "显示样式" 生效.')]),_("p",[_("img",{attrs:{src:"https://i.imgur.com/dzV6BCA.png",alt:"Screen Shot 2018-10-16 at 11.00.37 PM"}})]),_("div",{staticClass:"warning custom-block"},[_("p",{staticClass:"custom-block-title"},[t._v("提示")]),_("p",[t._v('页面生成后, 如果页面元素位置发生改变, 就要重新从 "布局阶段" 开始渲染.  这个叫做 『 页面重排 』\n从 "绘制阶段" 开始, 也就是只有 "显示样式" 改变, 叫做 『 页面重绘 』')]),_("p",[t._v("渲染引擎对 DOM 树的解析和输出是逐行进行的.  页面中的 "),_("code",[t._v("<script>")]),t._v(" 标签会阻塞渲染")])]),_("h2",{attrs:{id:"数据持久化储存技术"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据持久化储存技术","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据持久化储存技术")]),_("p",[t._v("因为是应用在浏览器上的, 也可以简称为 『 浏览器缓存 』")]),_("p",[t._v('"浏览器缓存" 是用于本地保存数据并进行快速读取以避免重复资源请求的传输机制的统称.')]),_("p",[t._v("常用的缓存机制以下 9 种:")]),_("ul",[_("li",[t._v("『 "),_("strong",[t._v("HTTP 文件缓存")]),t._v(" 』: 基于 HTTP 协议的文件缓存机制.  根据 HTTP 响应头信息来判断是否从服务器获取文件, 还是读取本地缓存")]),_("li",[t._v("『 "),_("strong",[t._v("LocalStorage")]),t._v(" 』: HTML5 的本地缓存方案, 用于\b保存体积较大的数据")]),_("li",[t._v("『 "),_("strong",[t._v("SessionStorage")]),t._v(" 』: 和 LocalStorage 功能类似, 但是在浏览器关闭时 SessionStorage 会自动清空")]),_("li",[t._v("『 "),_("strong",[t._v("indexDB")]),t._v(" 』: 和 WEB SQL 类似")]),_("li",[t._v("『 "),_("strong",[t._v("WEB SQL")]),t._v(" 』: 用以储存较大量数据的缓存机制")]),_("li",[t._v("『 "),_("strong",[t._v("Cookie")]),t._v(" 』: Cookie 信息会随 HTTP 请求发到服务器")]),_("li",[t._v("『 "),_("strong",[t._v("CacheStorage")]),t._v(" 』: 在未来可代替 Application Cache")]),_("li",[t._v("『 "),_("strong",[t._v("Application Cache")]),t._v(" 』: 用于缓存静态资源文件")]),_("li",[t._v("『 "),_("strong",[t._v("Flash 缓存")]),t._v(" 』: 没啥用")])]),_("p",[t._v("现如今, \b还是 HTTP 缓存, localStorage, Cookie 更常用, 其他的了解就好.")])])}],!1,null,null,null);v.default=a.exports}}]);