(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{180:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"restful-api-设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#restful-api-设计","aria-hidden":"true"}},[t._v("#")]),t._v(" RESTful API 设计")]),s("p",[t._v('REST 全称是 Representational State Transfer，中文意思是 - "表述性 状态转化"。 REST 指的是一组架构约束条件和原则。 如果一个架构符合 REST 的约束条件和原则，我们就称它为 RESTful 架构。')]),s("p",[t._v("REST 本身并没有创造新的技术、组件或服务，而隐藏在 RESTful 背后的理念就是基于现有 Web 的特征和能力，更好地应用现有 Web 标准中的一些准则和约束。虽然 REST 本身受 Web 技术的影响很深， 但是理论上 REST 架构风格并不是绑定在 HTTP 上，只不过目前 HTTP 是唯一与 REST 相关的实例。 所以我们这里描述的 REST 也是通过 HTTP 实现的 REST。")]),s("p",[t._v('用我的话说: "REST 是基于 Web 标准的准则和约束, 目的是为了建立功能强、性能好、适宜通信的应用程序架构, HTTP 是实现 REST 的方法之一"')]),s("h2",{attrs:{id:"rest-名字理解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rest-名字理解","aria-hidden":"true"}},[t._v("#")]),t._v(" REST 名字理解")]),s("p",[t._v('"表述性 状态转化" - 到底什么意思 ?')]),s("p",[t._v('这个名字其实省略了主语。"表述性" 指的是 "资源" 的 "表述性"。所谓 "资源"，就是网络上的一个实体，或者说是网络上的一个具体信息。它可以是一段文本、一张图片、一首歌曲、一种服务，总之就是一个具体的实在。可以用一个URI（统一资源定位符）指向它，每种资源对应一个特定的 URI。URI 就成了每一个资源的地址或独一无二的识别符.')]),s("p",[t._v('"资源" 是一种信息实体，它可以有多种外在表现形式。我们把 "资源" 具体呈现出来的形式，叫做它的 "表述". 比如，文本可以用 txt 格式表现，也可以用 HTML 格式、XML 格式、JSON 格式表现，甚至可以采用二进制格式；图片可以用 JPG 格式表现，也可以用 PNG 格式表现。URI 应该只代表 "资源" 的位置。它的具体表现形式，应该在 HTTP 请求的头信息中用 Accept 和 Content-Type 字段指定，这两个字段才是对 "表述" 的描述。')]),s("p",[t._v('访问一个网站，就代表了客户端和服务器的一个互动过程。在这个过程中，势必涉及到数据和状态的变化。HTTP 协议，是一个无状态协议。这意味着，所有的状态都保存在服务器端。因此，如果客户端想要操作服务器，必须通过某种手段，让服务器端发生 "状态转化"。而这种转化是建立在表述层之上的，所以就是 "表述性状态转化"。')]),s("p",[t._v("在前端开发中, 客户端的手段就是 HTTP 方法, 四个表示操作方式的动词：GET、POST、PUT、DELETE。它们分别对应四种基本操作：")]),s("ul",[s("li",[s("code",[t._v("GET")]),t._v(" 用来获取资源")]),s("li",[s("code",[t._v("POST")]),t._v(" 用来新建资源（也可以用于更新资源）")]),s("li",[s("code",[t._v("PUT")]),t._v(" 用来更新资源")]),s("li",[s("code",[t._v("DELETE")]),t._v(" 用来删除资源")])]),s("p",[t._v("综合上面的解释，我们总结一下什么是 RESTful 架构：")]),s("ol",[s("li",[t._v("每一个 URI 代表一种资源；")]),s("li",[t._v("客户端和服务器之间，传递这种资源的某种表述")]),s("li",[t._v('客户端通过 HTTP 动词，对服务器端资源进行操作，实现 "表述性状态转化"。')])]),s("h2",{attrs:{id:"接口文档示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接口文档示例","aria-hidden":"true"}},[t._v("#")]),t._v(" 接口文档示例")]),s("h4",{attrs:{id:"用户列表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户列表","aria-hidden":"true"}},[t._v("#")]),t._v(" 用户列表")]),s("p",[t._v("用于获取用户列表，带分页功能")]),s("h4",{attrs:{id:"接口："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接口：","aria-hidden":"true"}},[t._v("#")]),t._v(" 接口：")]),s("p",[s("code",[t._v("GET /users")])]),s("h4",{attrs:{id:"请求参数："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求参数：","aria-hidden":"true"}},[t._v("#")]),t._v(" 请求参数：")]),s("table",[s("thead",[s("tr",[s("th",[t._v("名称")]),s("th",[t._v("类型")]),s("th",[t._v("定义")]),s("th",[t._v("必需")]),s("th",[t._v("默认值")]),s("th",[t._v("说明")])])]),s("tbody",[s("tr",[s("td",[t._v("keyword")]),s("td",[t._v("string")]),s("td",[t._v("查询关键词")]),s("td"),s("td",[s("code",[t._v('""')])]),s("td",[t._v("作用于"),s("code",[t._v("name")]),t._v("和"),s("code",[t._v("id")]),t._v("字段")])]),s("tr",[s("td",[t._v("page")]),s("td",[t._v("number")]),s("td",[t._v("页码")]),s("td"),s("td",[s("code",[t._v("1")])]),s("td")]),s("tr",[s("td",[t._v("role")]),s("td",[t._v("number")]),s("td",[t._v("角色")]),s("td"),s("td",[t._v("全部")]),s("td",[t._v("参考角色枚举说明")])]),s("tr",[s("td",[t._v("orderBy")]),s("td",[t._v("string")]),s("td",[t._v("排序字段名称")]),s("td"),s("td",[s("code",[t._v('"id"')])]),s("td",[t._v("可以使用"),s("code",[t._v('"id"')]),t._v("或"),s("code",[t._v('"name"')])])]),s("tr",[s("td",[t._v("order")]),s("td",[t._v("string")]),s("td",[t._v("排序方式")]),s("td"),s("td",[s("code",[t._v('"asc"')])]),s("td",[t._v("可以为"),s("code",[t._v('"asc"')]),t._v("或"),s("code",[t._v('"desc"')])])])])]),s("h4",{attrs:{id:"响应："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#响应：","aria-hidden":"true"}},[t._v("#")]),t._v(" 响应：")]),s("p",[s("strong",[t._v("成功：200")])]),s("p",[t._v("响应格式：JSON")]),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    totalCount"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("number"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // 总数\n    results"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{attrs:{class:"token property"}},[t._v('"id"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("number"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{attrs:{class:"token property"}},[t._v('"name"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("string"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{attrs:{class:"token property"}},[t._v('"role"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("number"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ..."),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // 角色，多个角色用数组表示\n            "),s("span",{attrs:{class:"token property"}},[t._v('"birthday"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("string"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // 生日使用YYYYMMDD格式\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        ...\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);a.default=e.exports}}]);