(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{196:function(t,e,r){"use strict";r.r(e);var s=r(0),a=Object(s.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),r("p",[t._v("BOM(Browser Object Model) 是指浏览器对象模型, BOM 提供了独立于内容的、可以与浏览器窗口进行互动的对象结构。")]),t._m(1),r("p",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),r("OutboundLink")],1)]),t._m(2),t._m(3),t._m(4),t._m(5),r("p",[t._v("跨浏览器取得距离值:")]),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),r("p",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Location",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),r("OutboundLink")],1)]),t._m(15),r("p",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),r("OutboundLink")],1)]),t._m(16),r("p",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Screen",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),r("OutboundLink")],1)]),t._m(17),r("p",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/History",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),r("OutboundLink")],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"bom"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bom","aria-hidden":"true"}},[this._v("#")]),this._v(" BOM")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"window-对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#window-对象","aria-hidden":"true"}},[this._v("#")]),this._v(" window 对象")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("window")]),this._v(" 是 BOM 的核心对象, 表示浏览器的一个实例. 在浏览器中，"),e("code",[this._v("window")]),this._v(" 对象有双重角色，它既是通过 JavaScript 访问浏览器窗口的一个接口，又是 ECMAScript 规定的 "),e("code",[this._v("Global")]),this._v(" 对象。")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("在标签浏览器（比如Firefox）中，每个标签具有自己的 "),r("code",[t._v("window")]),t._v(" 对象, 同一个窗口的标签之间不会共享一个 "),r("code",[t._v("window")]),t._v(" 对象. 有一些方法，如 "),r("code",[t._v("window.resizeTo")]),t._v(" 和 "),r("code",[t._v("window.resizeBy")]),t._v(" 之类的方法会作用于整个窗口而不是 "),r("code",[t._v("window")]),t._v(" 对象所属的那个标签。一般而言，如果无法恰当地作用于标签，则会将其作用于窗口。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"窗口位置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#窗口位置","aria-hidden":"true"}},[this._v("#")]),this._v(" 窗口位置")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("在 Firefox 中 "),r("code",[t._v("screenX")]),t._v(" 和 "),r("code",[t._v("screenY")]),t._v(" 属性分别用于表示窗口相对于屏幕左边和上边的距离。IE、Safari、Opera 和Chrome 也都提供了 "),r("code",[t._v("screenLeft")]),t._v(" 和 "),r("code",[t._v("screenTop")]),t._v(" 属性来表示相同的位置信息.")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" leftPos "),r("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" window"),r("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("screenLeft "),r("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),r("span",{attrs:{class:"token string"}},[t._v('"number"')]),r("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" \n    window"),r("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("screenLeft "),r("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" window"),r("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("screenX"),r("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" topPos "),r("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" window"),r("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("screenTop "),r("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),r("span",{attrs:{class:"token string"}},[t._v('"number"')]),r("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v("\n    window"),r("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("screenTop "),r("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" window"),r("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("screenY"),r("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"窗口大小"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#窗口大小","aria-hidden":"true"}},[this._v("#")]),this._v(" 窗口大小")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("提供了4个属性确定一个窗口的大小:\n"),r("code",[t._v("innerWidth")]),t._v(": 浏览器视口（viewport）宽度, 如果存在垂直滚动条则包括它\n"),r("code",[t._v("innerHeight")]),t._v(": 浏览器窗口的视口（viewport）高度，如果存在水平滚动条，则包括它\n"),r("code",[t._v("outerWidth")]),t._v(": 获取浏览器窗口外部的宽度。表示整个浏览器窗口的宽度\n"),r("code",[t._v("outerHeight")]),t._v(": 整个浏览器窗口的高度")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://i.imgur.com/EiQ5mCk.png",alt:"Javascript-window-innerWidth"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"导航和打开窗口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#导航和打开窗口","aria-hidden":"true"}},[this._v("#")]),this._v(" 导航和打开窗口")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("window.open()")]),this._v(" 方法既可以导航到一个特定的URL，也可以打开一个新的浏览器窗口。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"间歇调用和超时调用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#间歇调用和超时调用","aria-hidden":"true"}},[this._v("#")]),this._v(" 间歇调用和超时调用")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"系统对话框"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#系统对话框","aria-hidden":"true"}},[this._v("#")]),this._v(" 系统对话框")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"location-对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#location-对象","aria-hidden":"true"}},[this._v("#")]),this._v(" location 对象")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"navigator-对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#navigator-对象","aria-hidden":"true"}},[this._v("#")]),this._v(" navigator 对象")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"screen-对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#screen-对象","aria-hidden":"true"}},[this._v("#")]),this._v(" screen 对象")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"history-对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#history-对象","aria-hidden":"true"}},[this._v("#")]),this._v(" history 对象")])}],!1,null,null,null);e.default=a.exports}}]);