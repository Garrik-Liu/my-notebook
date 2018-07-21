(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{174:function(e,s,t){"use strict";t.r(s);var r=t(0),a=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"基本指南"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本指南","aria-hidden":"true"}},[e._v("#")]),e._v(" 基本指南")]),t("h2",{attrs:{id:"什么是-express"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-express","aria-hidden":"true"}},[e._v("#")]),e._v(" 什么是 Express ?")]),t("p",[e._v("Node.js 基于 Chrome 的 V8引擎，使 JavaScript 可以脱离于浏览器，在服务器上运行。")]),t("p",[e._v("因为 Node.js 只提供一些底层功能，开发者需要在此基础上编写很多冗长的代码。")]),t("p",[e._v("Express 作为一个轻量框架，可以让 Node.js 程序编写更简单。")]),t("p",[e._v("Express 之于 Node.js，就像 jQuery 之于 JavaScript;")]),t("h3",{attrs:{id:"一个-node-js-程序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一个-node-js-程序","aria-hidden":"true"}},[e._v("#")]),e._v(" 一个 Node.js 程序")]),t("p",[e._v("假如创建一个 Node.js 服务器, 这整个程序就是一个 JavaScript 函数。这整个程序所做的事情就是接收请求，然后根据请求的内容去返回相应响应。比如说浏览器请求主页，它就会返回一个 HTML 文件。")]),t("p",[e._v("在不用 Express 的情况下，过程就像\b下图：")]),t("p",[t("img",{attrs:{src:"https://i.imgur.com/pSx1DBJ.png",alt:"Screen Shot 2018-07-09 at 11.43.22 AM"}})]),t("p",[e._v("JavaScript 函数接收请求，在这里\b被称作 request handler。")]),t("p",[e._v("Node.js's HTTP server 处理 客户端 与 函数 之间的连接，所以我不用去管什么网络协议问题。")]),t("p",[e._v("在函数之中，它接收两个参数，请求对象 和 响应对象。")]),t("p",[e._v("\bNode.js 程序简单来说就是处理 请求 和 响应。\b没有很复杂，但是因为原生提供的功能比较底层，所以代码量很大。使用框架可以让编写更简洁。")]),t("p",[t("img",{attrs:{src:"https://i.imgur.com/g9ccPiM.png",alt:"Screen Shot 2018-07-09 at 11.52.16 AM"}})]),t("p",[e._v("不用于\b原生代码里写一个\b巨大的 request handler。Express 把它根据请求内容拆分成很多小函数，有的处理所以的请求，有的只处理 GET 请求，有的只处理针对一个\b特定 URL 的请求，等等。")]),t("h3",{attrs:{id:"express-核心"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#express-核心","aria-hidden":"true"}},[e._v("#")]),e._v(" Express 核心")]),t("p",[e._v("中间件：把一个大处理函数分解成小函数，用于处理请求，多个\b中间件构成一个中间件链。每一段中间件处理指定请求内容。")]),t("p",[e._v("路由\b：不同于中间件什么请求都处理，路由只处理对应的 客户端发送过来的 URL 或者 HTTP\b方法。")])])}],!1,null,null,null);s.default=a.exports}}]);