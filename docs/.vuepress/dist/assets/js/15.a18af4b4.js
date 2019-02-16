(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{271:function(t,e,r){"use strict";r.r(e);var a=r(0),i=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("p",[r("router-link",{attrs:{to:"./"}},[t._v("返回目录")])],1),t._m(0),r("p",[t._v("状态码的职责是当客户端向服务器端发送请求时，描述返回的请求结果。")]),r("p",[t._v("借助状态码，用户可以知道服务器端是正常处理了请求，还是出现了错误。")]),r("p",[t._v("状态码以 3 位数字 和 原因短语 组成。")]),r("p",[t._v("数字中的第一位指定了响应类别，后两位无分类。响应类别有以下 5 种:")]),t._m(1),t._m(2),r("p",[t._v("2XX 的响应结果表明请求被正常处理了。")]),t._m(3),r("p",[t._v("表示从客户端发来的请求在服务器端被正常处理了。")]),t._m(4),r("p",[t._v("该状态码代表服务器接收的请求已成功处理，但在返回的响应报文中不含实体的主体部分。")]),r("p",[t._v("比如，当从浏览器发出请求处理后，返回 204 响应，那么浏览器显示的页面不发生更新。")]),r("p",[t._v("一般在只需要从客户端往服务器发送信息，而对客户端不需要发送新信息内容的情况下使用。")]),t._m(5),r("p",[t._v("该状态码表示客户端进行了范围请求，而服务器成功执行了这部分的 GET 请求。")]),t._m(6),r("p",[t._v("3XX 响应结果表明浏览器需要执行某些特殊的处理以正确处理请求。")]),t._m(7),r("p",[t._v("永久性重定向。该状态码表示请求的资源已被分配了新的 URI，以后应使用资源现在新的 URI。")]),r("p",[t._v("如果已经把资源对应的 URI 保存为书签了，这时应该按 Location 首部字段提示的 URI 重新保存。")]),t._m(8),r("p",[t._v("临时性重定向。该状态码表示请求的资源已被分配了新的 URI，希望用户（本次）能使用新的 URI 访问。")]),r("p",[t._v("302 状态码代表的资源不是被永久移动，只是临时性质的。换句话说，已移动的资源对应的 URI 将来还有可能发生改变。")]),t._m(9),r("p",[t._v("该状态码表示由于请求对应的资源存在着另一个 URI，应使用 GET 方法定向获取请求的资源。")]),t._m(10),r("p",[t._v("比如，当使用 POST 方法上传表单，其执行后的处理结果是希望客户端能以 GET 方法重定向到另一个 URI 上去时.")]),t._m(11),t._m(12),t._m(13),r("p",[t._v("该状态码表示客户端发送附带条件的请求时，服务器端允许请求访问资源，但因发生请求条件未满足的情况后，直接返回 304 Not Modified（服务器端资源未改变，可直接使用客户端未过期的缓存）。")]),t._m(14),t._m(15),t._m(16),r("p",[t._v("临时重定向。该状态码与 302 Found 有着相同的含义。尽管 302 标准禁止 POST 变换成 GET，但实际使用时大家并不遵守。")]),r("p",[t._v("307 会遵照标准，不会从 POST 变成 GET。但是，对于处理响应时的行为，每种浏览器有可能出现不同的情况。")]),t._m(17),r("p",[t._v("4XX 的响应结果表明客户端是发生错误的原因所在。")]),t._m(18),r("p",[t._v("该状态码表示请求报文中存在语法错误。当错误发生时，需修改请求的内容后再次发送请求。另外，浏览器会像 200 OK 一样对待该状态码。")]),t._m(19),r("p",[t._v("该状态码表示发送的请求需要有通过 HTTP 认证的认证信息。")]),r("p",[t._v("返回含有 401 的响应必须包含一个适用于被请求资源的 WWW-Authenticate 首部用以质询（challenge）用户信息。")]),r("p",[t._v("当浏览器初次接收到 401 响应，会弹出认证用的对话窗口。")]),t._m(20),r("p",[t._v("该状态码表明对请求资源的访问被服务器拒绝了。服务器端没有必要给出拒绝的详细理由，但如果想作说明的话，可以在实体的主体部分对原因进行描述，这样就能让用户看到了。")]),t._m(21),r("p",[t._v("该状态码表明服务器上无法找到请求的资源。除此之外，也可以在服务器端拒绝请求且不想说明理由时使用。")]),t._m(22),r("p",[t._v("5XX 的响应结果表明服务器本身发生错误。")]),t._m(23),r("p",[t._v("该状态码表明服务器端在执行请求时发生了错误。")]),t._m(24),r("p",[t._v("该状态码表明服务器暂时处于超负载或正在进行停机维护，现在无法处理请求.")]),r("p",[t._v("如果事先得知解除以上状况需要的时间，最好写入 RetryAfter 首部字段再返回给客户端。")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"http-状态码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-状态码","aria-hidden":"true"}},[this._v("#")]),this._v(" HTTP 状态码")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("数字")]),r("th",[t._v("类别")]),r("th",[t._v("原因短语")])])]),r("tbody",[r("tr",[r("td",[t._v("1XX")]),r("td",[t._v("Informational（信息性状态码）")]),r("td",[t._v("接收的请求正在处理")])]),r("tr",[r("td",[t._v("2XX")]),r("td",[t._v("Success（成功状态码）")]),r("td",[t._v("请求正常处理完毕")])]),r("tr",[r("td",[t._v("3XX")]),r("td",[t._v("Redirection（重定向状态码）")]),r("td",[t._v("需要进行附加操作以完成请求")])]),r("tr",[r("td",[t._v("4XX")]),r("td",[t._v("Client Error（客户端错误状态码）")]),r("td",[t._v("服务器无法处理请求")])]),r("tr",[r("td",[t._v("5XX")]),r("td",[t._v("Server Error（服务器错误状态码）")]),r("td",[t._v("服务器处理请求出错")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_2xx-成功"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2xx-成功","aria-hidden":"true"}},[this._v("#")]),this._v(" 2XX 成功")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_200-ok"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_200-ok","aria-hidden":"true"}},[this._v("#")]),this._v(" 200 OK")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_204-no-content"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_204-no-content","aria-hidden":"true"}},[this._v("#")]),this._v(" 204 No Content")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_206-partial-content"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_206-partial-content","aria-hidden":"true"}},[this._v("#")]),this._v(" 206 Partial Content")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_3xx-重定向"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3xx-重定向","aria-hidden":"true"}},[this._v("#")]),this._v(" 3XX 重定向")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_301-moved-permanently"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_301-moved-permanently","aria-hidden":"true"}},[this._v("#")]),this._v(" 301 Moved Permanently")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_302-found"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_302-found","aria-hidden":"true"}},[this._v("#")]),this._v(" 302 Found")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_303-see-other"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_303-see-other","aria-hidden":"true"}},[this._v("#")]),this._v(" 303 See Other")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("303 状态码和 302 Found 状态码有着相同的功能，但 303 状态码明确表示客户端"),e("strong",[this._v("应当采用 GET 方法")]),this._v("获取资源")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("当 301、302、303 响应状态码返回时，几乎所有的浏览器都会把 POST 改成 GET，并删除请求报文内的主体，之后请求会自动再次发送。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("虽然 301、302 标准是禁止将 POST 方法改变成 GET 方法的，但实际使用时大家都会这么做。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_304-not-modified"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_304-not-modified","aria-hidden":"true"}},[this._v("#")]),this._v(" 304 Not Modified")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("304 状态码返回时，不包含任何响应的主体部分。304 虽然被划分在 3XX 类别中，但是"),e("strong",[this._v("和重定向没有关系")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("附带条件的请求是指采用 GET 方法的请求报文中包含 If-Match，If-Modified-Since，If-None-Match，If-Range，If-Unmodified-Since 中任一首部。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_307-temporary-redirect"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_307-temporary-redirect","aria-hidden":"true"}},[this._v("#")]),this._v(" 307 Temporary Redirect")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_4xx-客户端错误"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4xx-客户端错误","aria-hidden":"true"}},[this._v("#")]),this._v(" 4XX 客户端错误")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_400-bad-request"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_400-bad-request","aria-hidden":"true"}},[this._v("#")]),this._v(" 400 Bad Request")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_401-unauthorized"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_401-unauthorized","aria-hidden":"true"}},[this._v("#")]),this._v(" 401 Unauthorized")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_403-forbidden"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_403-forbidden","aria-hidden":"true"}},[this._v("#")]),this._v(" 403 Forbidden")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_404-not-found"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_404-not-found","aria-hidden":"true"}},[this._v("#")]),this._v(" 404 Not Found")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_5xx-服务器错误"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5xx-服务器错误","aria-hidden":"true"}},[this._v("#")]),this._v(" 5XX 服务器错误")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_500-internal-server-error"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_500-internal-server-error","aria-hidden":"true"}},[this._v("#")]),this._v(" 500 Internal Server Error")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_503-service-unavailable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_503-service-unavailable","aria-hidden":"true"}},[this._v("#")]),this._v(" 503 Service Unavailable")])}],!1,null,null,null);e.default=i.exports}}]);