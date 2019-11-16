(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{168:function(t,e,r){"use strict";r.r(e);var s=r(0),a=Object(s.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("p",[r("router-link",{attrs:{to:"./"}},[t._v("返回目录")])],1),t._m(0),r("p",[t._v("一台 Web 服务器可搭建多个独立域名的 Web 网站，也可作为通信路径上的中转服务器提升传输效率。")]),t._m(1),r("p",[t._v("即使物理层面只有一台服务器，只要使用虚拟主机的功能，则可以虚拟出有多台服务器。\n客户端使用 HTTP 协议访问服务器时，会经常采用类似 www.hackr.jp 这样的主机名和域名。")]),r("p",[t._v("在互联网上，域名通过 DNS 服务映射到 IP 地址（域名解析）之后访问目标网站。\n所以，如果一台服务器内托管了 www.tricorder.jp 和 www.hackr.jp 这两个域名，当收到请求时就需要弄清楚究竟要访问哪个域名。")]),r("p",[t._v("因为不同的域名不是在同一个服务器上,所以他们的 IP 是一样的.\n在相同的 IP 地址下，由于虚拟主机可以寄存多个不同主机名和域名的 Web 网站，因此在发送 HTTP 请求时，必须在 Host 首部内完整指定主机名或域名的 URI。")]),t._m(2),t._m(3),r("p",[t._v("这些应用程序和服务器可以将请求转发给通信线路上的下一站服务器，并且能接收从那台服务器发送的响应再转发给客户端。")]),t._m(4),r("p",[t._v("代理是一种有转发功能的应用程序，它扮演了位于服务器和客户端“中间人”的角色\n接收由客户端发送的请求并转发给服务器，同时也接收服务器返回的响应并转发给客户端。")]),t._m(5),r("p",[t._v("代理有多种使用方法，按两种基准分类。一种是是否使用缓存，另一种是是否会修改报文:")]),t._m(6),t._m(7),r("p",[t._v("网关是转发其他服务器通信数据的服务器, 接收从客户端发送来的请求时，它就像自己拥有资源的源服务器一样对请求进行处理。\n有时客户端可能都不会察觉，自己的通信目标是一个网关。")]),t._m(8),r("p",[t._v("利用网关可以由 HTTP 请求转化为其他协议通信")]),r("p",[t._v("网关的工作机制和代理十分相似。而网关能使通信线路上的服务器提供非 HTTP 协议服务。比如，网关可以连接数据库，使用 SQL 语句查询数据。")]),t._m(9),r("p",[t._v("隧道是在相隔甚远的客户端和服务器两者之间进行中转，并保持双方通信连接的应用程序。")]),t._m(10),r("p",[t._v("通过隧道的传输，可以和远距离的服务器安全通信。隧道本身是透明的，客户端不用在意隧道的存在")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"http-和-web-服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-和-web-服务器","aria-hidden":"true"}},[this._v("#")]),this._v(" HTTP 和 Web 服务器")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"用单台虚拟主机实现多个域名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用单台虚拟主机实现多个域名","aria-hidden":"true"}},[this._v("#")]),this._v(" 用单台虚拟主机实现多个域名")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"通信数据转发程序-：代理、网关、隧道"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通信数据转发程序-：代理、网关、隧道","aria-hidden":"true"}},[this._v("#")]),this._v(" 通信数据转发程序 ：代理、网关、隧道")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("HTTP 通信时，除客户端和服务器以外，还有一些用于"),e("strong",[this._v("通信数据转发")]),this._v("的应用程序，例如代理、网关和隧道。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代理","aria-hidden":"true"}},[this._v("#")]),this._v(" 代理")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://i.imgur.com/zWVtRLt.png",alt:"Screen Shot 2018-07-11 at 11.58.45 AM"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[e("strong",[this._v("缓存代理")]),this._v(":\n代理转发响应时，缓存代理（Caching Proxy）会预先将资源的副本（缓存）保存在代理服务器上。\n当代理再次接收到对相同资源的请求时，就可以不从源服务器那里获取资源，而是将之前缓存的资源作为响应返回。")])]),e("li",[e("p",[e("strong",[this._v("透明代理")]),this._v(":\n转发请求或响应时，不对报文做任何加工的代理类型被称为透明代理（Transparent Proxy）。反之，对报文内容进行加工的代理被称为非透明代理。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"网关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网关","aria-hidden":"true"}},[this._v("#")]),this._v(" 网关")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://i.imgur.com/qQLaWue.png",alt:"Screen Shot 2018-07-11 at 12.02.46 PM"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"隧道"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#隧道","aria-hidden":"true"}},[this._v("#")]),this._v(" 隧道")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://i.imgur.com/3apkSQP.png",alt:"Screen Shot 2018-07-11 at 11.59.33 AM"}})])}],!1,null,null,null);e.default=a.exports}}]);