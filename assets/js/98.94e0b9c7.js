(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{312:function(t,e,r){"use strict";r.r(e);var a=r(0),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"bom"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bom"}},[t._v("#")]),t._v(" BOM")]),t._v(" "),r("p",[t._v("BOM(Browser Object Model) 是指浏览器对象模型, BOM 提供了独立于内容的、可以与浏览器窗口进行互动的对象结构。")]),t._v(" "),r("h2",{attrs:{id:"window-对象"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#window-对象"}},[t._v("#")]),t._v(" window 对象")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("code",[t._v("window")]),t._v(" 是 BOM 的核心对象, 表示浏览器的一个实例. 在浏览器中，"),r("code",[t._v("window")]),t._v(" 对象有双重角色，它既是通过 JavaScript 访问浏览器窗口的一个接口，又是 ECMAScript 规定的 "),r("code",[t._v("Global")]),t._v(" 对象。")]),t._v(" "),r("p",[t._v("在标签浏览器（比如Firefox）中，每个标签具有自己的 "),r("code",[t._v("window")]),t._v(" 对象, 同一个窗口的标签之间不会共享一个 "),r("code",[t._v("window")]),t._v(" 对象. 有一些方法，如 "),r("code",[t._v("window.resizeTo")]),t._v(" 和 "),r("code",[t._v("window.resizeBy")]),t._v(" 之类的方法会作用于整个窗口而不是 "),r("code",[t._v("window")]),t._v(" 对象所属的那个标签。一般而言，如果无法恰当地作用于标签，则会将其作用于窗口。")]),t._v(" "),r("h3",{attrs:{id:"窗口位置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#窗口位置"}},[t._v("#")]),t._v(" 窗口位置")]),t._v(" "),r("p",[t._v("在 Firefox 中 "),r("code",[t._v("screenX")]),t._v(" 和 "),r("code",[t._v("screenY")]),t._v(" 属性分别用于表示窗口相对于屏幕左边和上边的距离。IE、Safari、Opera 和Chrome 也都提供了 "),r("code",[t._v("screenLeft")]),t._v(" 和 "),r("code",[t._v("screenTop")]),t._v(" 属性来表示相同的位置信息.")]),t._v(" "),r("p",[t._v("跨浏览器取得距离值:")]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" leftPos "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" window"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("screenLeft "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"number"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" \n    window"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("screenLeft "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" window"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("screenX"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" topPos "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" window"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("screenTop "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"number"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("\n    window"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("screenTop "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" window"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("screenY"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),r("h3",{attrs:{id:"窗口大小"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#窗口大小"}},[t._v("#")]),t._v(" 窗口大小")]),t._v(" "),r("p",[t._v("提供了4个属性确定一个窗口的大小:\n"),r("code",[t._v("innerWidth")]),t._v(": 浏览器视口（viewport）宽度, 如果存在垂直滚动条则包括它\n"),r("code",[t._v("innerHeight")]),t._v(": 浏览器窗口的视口（viewport）高度，如果存在水平滚动条，则包括它\n"),r("code",[t._v("outerWidth")]),t._v(": 获取浏览器窗口外部的宽度。表示整个浏览器窗口的宽度\n"),r("code",[t._v("outerHeight")]),t._v(": 整个浏览器窗口的高度")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://i.imgur.com/EiQ5mCk.png",alt:"Javascript-window-innerWidth"}})]),t._v(" "),r("h3",{attrs:{id:"导航和打开窗口"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#导航和打开窗口"}},[t._v("#")]),t._v(" 导航和打开窗口")]),t._v(" "),r("p",[r("code",[t._v("window.open()")]),t._v(" 方法既可以导航到一个特定的URL，也可以打开一个新的浏览器窗口。")]),t._v(" "),r("h3",{attrs:{id:"间歇调用和超时调用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#间歇调用和超时调用"}},[t._v("#")]),t._v(" 间歇调用和超时调用")]),t._v(" "),r("h3",{attrs:{id:"系统对话框"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#系统对话框"}},[t._v("#")]),t._v(" 系统对话框")]),t._v(" "),r("h2",{attrs:{id:"location-对象"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#location-对象"}},[t._v("#")]),t._v(" location 对象")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Location",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"navigator-对象"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#navigator-对象"}},[t._v("#")]),t._v(" navigator 对象")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"screen-对象"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#screen-对象"}},[t._v("#")]),t._v(" screen 对象")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Screen",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),r("OutboundLink")],1)]),t._v(" "),r("h1",{attrs:{id:"history-对象"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#history-对象"}},[t._v("#")]),t._v(" history 对象")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/History",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),r("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);