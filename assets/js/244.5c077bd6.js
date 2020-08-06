(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{459:function(t,_,v){"use strict";v.r(_);var a=v(0),r=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[v("router-link",{attrs:{to:"/计算机科学/网络/http/"}},[t._v("返回目录")])],1),t._v(" "),v("h1",{attrs:{id:"http-状态码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-状态码"}},[t._v("#")]),t._v(" HTTP 状态码")]),t._v(" "),v("p",[t._v("状态码的职责是当客户端向服务器端发送请求时，描述返回的请求结果。")]),t._v(" "),v("p",[t._v("借助状态码，用户可以知道服务器端是正常处理了请求，还是出现了错误。")]),t._v(" "),v("p",[t._v("状态码以 3 位数字 和 原因短语 组成。")]),t._v(" "),v("p",[t._v("数字中的第一位指定了响应类别，后两位无分类。响应类别有以下 5 种:")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("数字")]),t._v(" "),v("th",[t._v("类别")]),t._v(" "),v("th",[t._v("原因短语")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("1XX")]),t._v(" "),v("td",[t._v("Informational（信息性状态码）")]),t._v(" "),v("td",[t._v("接收的请求正在处理")])]),t._v(" "),v("tr",[v("td",[t._v("2XX")]),t._v(" "),v("td",[t._v("Success（成功状态码）")]),t._v(" "),v("td",[t._v("请求正常处理完毕")])]),t._v(" "),v("tr",[v("td",[t._v("3XX")]),t._v(" "),v("td",[t._v("Redirection（重定向状态码）")]),t._v(" "),v("td",[t._v("需要进行附加操作以完成请求")])]),t._v(" "),v("tr",[v("td",[t._v("4XX")]),t._v(" "),v("td",[t._v("Client Error（客户端错误状态码）")]),t._v(" "),v("td",[t._v("服务器无法处理请求")])]),t._v(" "),v("tr",[v("td",[t._v("5XX")]),t._v(" "),v("td",[t._v("Server Error（服务器错误状态码）")]),t._v(" "),v("td",[t._v("服务器处理请求出错")])])])]),t._v(" "),v("h2",{attrs:{id:"_2xx-成功"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2xx-成功"}},[t._v("#")]),t._v(" 2XX 成功")]),t._v(" "),v("p",[t._v("2XX 的响应结果表明请求被正常处理了。")]),t._v(" "),v("h3",{attrs:{id:"_200-ok"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_200-ok"}},[t._v("#")]),t._v(" 200 OK")]),t._v(" "),v("p",[t._v("表示从客户端发来的请求在服务器端被正常处理了。")]),t._v(" "),v("h3",{attrs:{id:"_204-no-content"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_204-no-content"}},[t._v("#")]),t._v(" 204 No Content")]),t._v(" "),v("p",[t._v("该状态码代表服务器接收的请求已成功处理，但在返回的响应报文中不含实体的主体部分。")]),t._v(" "),v("p",[t._v("比如，当从浏览器发出请求处理后，返回 204 响应，那么浏览器显示的页面不发生更新。")]),t._v(" "),v("p",[t._v("一般在只需要从客户端往服务器发送信息，而对客户端不需要发送新信息内容的情况下使用。")]),t._v(" "),v("h3",{attrs:{id:"_206-partial-content"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_206-partial-content"}},[t._v("#")]),t._v(" 206 Partial Content")]),t._v(" "),v("p",[t._v("该状态码表示客户端进行了范围请求，而服务器成功执行了这部分的 GET 请求。")]),t._v(" "),v("h2",{attrs:{id:"_3xx-重定向"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3xx-重定向"}},[t._v("#")]),t._v(" 3XX 重定向")]),t._v(" "),v("p",[t._v("3XX 响应结果表明浏览器需要执行某些特殊的处理以正确处理请求。")]),t._v(" "),v("h3",{attrs:{id:"_301-moved-permanently"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_301-moved-permanently"}},[t._v("#")]),t._v(" 301 Moved Permanently")]),t._v(" "),v("p",[t._v("永久性重定向。该状态码表示请求的资源已被分配了新的 URI，以后应使用资源现在新的 URI。")]),t._v(" "),v("p",[t._v("如果已经把资源对应的 URI 保存为书签了，这时应该按 Location 首部字段提示的 URI 重新保存。")]),t._v(" "),v("h3",{attrs:{id:"_302-found"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_302-found"}},[t._v("#")]),t._v(" 302 Found")]),t._v(" "),v("p",[t._v("临时性重定向。该状态码表示请求的资源已被分配了新的 URI，希望用户（本次）能使用新的 URI 访问。")]),t._v(" "),v("p",[t._v("302 状态码代表的资源不是被永久移动，只是临时性质的。换句话说，已移动的资源对应的 URI 将来还有可能发生改变。")]),t._v(" "),v("h3",{attrs:{id:"_303-see-other"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_303-see-other"}},[t._v("#")]),t._v(" 303 See Other")]),t._v(" "),v("p",[t._v("该状态码表示由于请求对应的资源存在着另一个 URI，应使用 GET 方法定向获取请求的资源。")]),t._v(" "),v("p",[t._v("303 状态码和 302 Found 状态码有着相同的功能，但 303 状态码明确表示客户端"),v("strong",[t._v("应当采用 GET 方法")]),t._v("获取资源")]),t._v(" "),v("p",[t._v("比如，当使用 POST 方法上传表单，其执行后的处理结果是希望客户端能以 GET 方法重定向到另一个 URI 上去时.")]),t._v(" "),v("blockquote",[v("p",[t._v("当 301、302、303 响应状态码返回时，几乎所有的浏览器都会把 POST 改成 GET，并删除请求报文内的主体，之后请求会自动再次发送。")])]),t._v(" "),v("blockquote",[v("p",[t._v("虽然 301、302 标准是禁止将 POST 方法改变成 GET 方法的，但实际使用时大家都会这么做。")])]),t._v(" "),v("h3",{attrs:{id:"_304-not-modified"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_304-not-modified"}},[t._v("#")]),t._v(" 304 Not Modified")]),t._v(" "),v("p",[t._v("该状态码表示客户端发送附带条件的请求时，服务器端允许请求访问资源，但因发生请求条件未满足的情况后，直接返回 304 Not Modified（服务器端资源未改变，可直接使用客户端未过期的缓存）。")]),t._v(" "),v("p",[t._v("304 状态码返回时，不包含任何响应的主体部分。304 虽然被划分在 3XX 类别中，但是"),v("strong",[t._v("和重定向没有关系")]),t._v("。")]),t._v(" "),v("blockquote",[v("p",[t._v("附带条件的请求是指采用 GET 方法的请求报文中包含 If-Match，If-Modified-Since，If-None-Match，If-Range，If-Unmodified-Since 中任一首部。")])]),t._v(" "),v("h3",{attrs:{id:"_307-temporary-redirect"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_307-temporary-redirect"}},[t._v("#")]),t._v(" 307 Temporary Redirect")]),t._v(" "),v("p",[t._v("临时重定向。该状态码与 302 Found 有着相同的含义。尽管 302 标准禁止 POST 变换成 GET，但实际使用时大家并不遵守。")]),t._v(" "),v("p",[t._v("307 会遵照标准，不会从 POST 变成 GET。但是，对于处理响应时的行为，每种浏览器有可能出现不同的情况。")]),t._v(" "),v("h2",{attrs:{id:"_4xx-客户端错误"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4xx-客户端错误"}},[t._v("#")]),t._v(" 4XX 客户端错误")]),t._v(" "),v("p",[t._v("4XX 的响应结果表明客户端是发生错误的原因所在。")]),t._v(" "),v("h3",{attrs:{id:"_400-bad-request"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_400-bad-request"}},[t._v("#")]),t._v(" 400 Bad Request")]),t._v(" "),v("p",[t._v("该状态码表示请求报文中存在语法错误。当错误发生时，需修改请求的内容后再次发送请求。另外，浏览器会像 200 OK 一样对待该状态码。")]),t._v(" "),v("h3",{attrs:{id:"_401-unauthorized"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_401-unauthorized"}},[t._v("#")]),t._v(" 401 Unauthorized")]),t._v(" "),v("p",[t._v("该状态码表示发送的请求需要有通过 HTTP 认证的认证信息。")]),t._v(" "),v("p",[t._v("返回含有 401 的响应必须包含一个适用于被请求资源的 WWW-Authenticate 首部用以质询（challenge）用户信息。")]),t._v(" "),v("p",[t._v("当浏览器初次接收到 401 响应，会弹出认证用的对话窗口。")]),t._v(" "),v("h3",{attrs:{id:"_403-forbidden"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_403-forbidden"}},[t._v("#")]),t._v(" 403 Forbidden")]),t._v(" "),v("p",[t._v("该状态码表明对请求资源的访问被服务器拒绝了。服务器端没有必要给出拒绝的详细理由，但如果想作说明的话，可以在实体的主体部分对原因进行描述，这样就能让用户看到了。")]),t._v(" "),v("h3",{attrs:{id:"_404-not-found"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_404-not-found"}},[t._v("#")]),t._v(" 404 Not Found")]),t._v(" "),v("p",[t._v("该状态码表明服务器上无法找到请求的资源。除此之外，也可以在服务器端拒绝请求且不想说明理由时使用。")]),t._v(" "),v("h2",{attrs:{id:"_5xx-服务器错误"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5xx-服务器错误"}},[t._v("#")]),t._v(" 5XX 服务器错误")]),t._v(" "),v("p",[t._v("5XX 的响应结果表明服务器本身发生错误。")]),t._v(" "),v("h3",{attrs:{id:"_500-internal-server-error"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_500-internal-server-error"}},[t._v("#")]),t._v(" 500 Internal Server Error")]),t._v(" "),v("p",[t._v("该状态码表明服务器端在执行请求时发生了错误。")]),t._v(" "),v("h3",{attrs:{id:"_503-service-unavailable"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_503-service-unavailable"}},[t._v("#")]),t._v(" 503 Service Unavailable")]),t._v(" "),v("p",[t._v("该状态码表明服务器暂时处于超负载或正在进行停机维护，现在无法处理请求.")]),t._v(" "),v("p",[t._v("如果事先得知解除以上状况需要的时间，最好写入 RetryAfter 首部字段再返回给客户端。")])])}),[],!1,null,null,null);_.default=r.exports}}]);