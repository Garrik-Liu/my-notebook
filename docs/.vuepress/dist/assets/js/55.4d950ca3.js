(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{256:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"代理模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代理模式"}},[t._v("#")]),t._v(" 代理模式")]),t._v(" "),a("p",[a("strong",[t._v("由于一个对象不能直接引用另一个对象，所以需要通过代理对象在这两个对象之间起到中介的作用")]),t._v("。")]),t._v(" "),a("p",[t._v("假如, 有一个用户相册模块上传的照片量越来越大，导致服务器端需要将图片上传模块重新部署到另外一个域（可理解为另一台服务器）中，这样对于前端来说，用户上传图片的请求路径发生变化，指向其他服务器，这就导致跨域问题。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前域www.xx.com")]),t._v("\n$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n　　url "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://upload.xx.com/upload.php'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("　　success")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n　　　　"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 无法获取返回的数据")]),t._v("\n　　"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 浏览器控制台报错：XMLHttpRequest cannot load http://upload.xx.com/upload.php. No 'Access-Control-Allow-Origin' header is present on the requested resource.")]),t._v("\n")])])]),a("p",[t._v("由于JavaScript对安全访问因素的考虑，不允许跨域调用其他页面，这里的域你可以想象成域名，比如百度的域名http://www.baidu.com，淘宝的域名http://www.taobao.com，不同域名下的页面是不能直接调用的。这样百度域名下的页面是不允许直接调用淘宝页面。这也是一种JavaScript中因同源策略所定义的限制，不过仅此一点限制还不够，JavaScript还对同一域名不同的端口号、同一域名不同协议、域名和域名对应的IP、主域与子域、子域与子域等做了限制，都不能直接调用。")])])}),[],!1,null,null,null);s.default=e.exports}}]);