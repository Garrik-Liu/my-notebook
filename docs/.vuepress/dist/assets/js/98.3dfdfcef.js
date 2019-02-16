(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{170:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._m(1),a("p",[t._v("可以使用侦听器（或处理程序）来预订事件，以便事件发生时执行相应的代码。这种在传统软件工程中被称为观察员模式的模型, 让页面的结构, 样式, 行为之间解耦")]),t._m(2),t._m(3),t._m(4),t._m(5),a("p",[t._v("IE的事件流叫做事件冒泡（event bubbling）")]),t._m(6),t._m(7),t._m(8),a("p",[t._v("Netscape Communicator团队提出的另一种事件流叫做事件捕获（event capturing）。")]),t._m(9),a("p",[t._v("事件捕获的用意在于在事件到达预定目标之前捕获它。")]),t._m(10),t._m(11),t._m(12),a("p",[t._v("首先发生的是事件捕获，为截获事件提供了机会。然后是实际的目标接收到事件。最后一个阶段是冒泡阶段，可以在这个阶段对事件做出响应。")]),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),a("p",[t._v("某个元素支持的每种事件，都可以使用一个与相应事件处理程序同名的HTML特性来指定。这个特性的值应该是能够执行的 JavaScript 代码")]),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),t._m(25),a("p",[t._v("所有DOM节点中都包含这两个方法，并且它们都接受3个参数：要处理的事件名、作为事件处理程序的函数 和 一个布尔值。")]),t._m(26),a("p",[t._v("添加的事件处理程序也是在其依附的元素的作用域中运行。使用DOM2级方法添加事件处理程序的主要好处是可以添加多个事件处理程序。")]),t._m(27),t._m(28),t._m(29),t._m(30),a("p",[t._v("大多数情况下，都是将事件处理程序添加到事件流的冒泡阶段，这样可以最大限度地兼容各种浏览器。最好只在需要在事件到达目标之前截获它的时候将事件处理程序添加到捕获阶段。如果不是特别需要，我们不建议在事件捕获阶段注册事件处理程序。")]),t._m(31),t._m(32),t._m(33),t._m(34),t._m(35),t._m(36),a("p",[a("a",{attrs:{href:"http://www.w3school.com.cn/jsref/dom_obj_event.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),a("OutboundLink")],1)]),t._m(37),t._m(38),t._m(39),t._m(40),t._m(41),t._m(42),t._m(43),t._m(44),t._m(45),t._m(46),t._m(47),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/Events",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN - 事件类型"),a("OutboundLink")],1)]),a("p",[t._v("直接看文档就好了!")]),t._m(48),a("p",[t._v("在JavaScript中，添加到页面上的事件处理程序数量将直接关系到页面的整体运行性能。首先，每个函数都是对象，都会占用内存；内存中的对象越多，性能就越差。其次，必须事先指定所有事件处理程序而导致的DOM访问次数，会延迟整个页面的交互就绪时间。")]),t._m(49),t._m(50),t._m(51),t._m(52)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件","aria-hidden":"true"}},[this._v("#")]),this._v(" 事件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("JavaScript与HTML之间的交互是通过事件实现的。事件，就是文档或浏览器窗口中发生的一些特定的"),s("strong",[this._v("交互瞬间")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"事件流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件流","aria-hidden":"true"}},[this._v("#")]),this._v(" 事件流")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("『 事件流 』描述的是从页面中接收事件的顺序")]),this._v("。如果你单击了某个按钮，他们都认为单击事件不仅仅发生在按钮上。换句话说，在单击按钮的同时，你也单击了按钮的容器元素，甚至也单击了整个页面。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("IE的事件流是"),s("strong",[this._v("事件冒泡流")])]),s("li",[this._v("Netscape Communicator的事件流是"),s("strong",[this._v("事件捕获流")]),this._v("。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"事件冒泡"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件冒泡","aria-hidden":"true"}},[this._v("#")]),this._v(" 事件冒泡")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("事件开始时由最具体的元素（文档中嵌套层次最深的那个节点）接收，然后逐级向上传播到较为不具体的节点（文档）")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"http://www.ituring.com.cn/figures/2012/Professional%20JavaScript%20for%20Web%20Developers%203rd%20Edition/16.d13z.01.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"事件捕获"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件捕获","aria-hidden":"true"}},[this._v("#")]),this._v(" 事件捕获")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("事件捕获的思想是不太具体的节点应该更早接收到事件，而最具体的节点应该最后接收到事件。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"http://www.ituring.com.cn/figures/2012/Professional%20JavaScript%20for%20Web%20Developers%203rd%20Edition/16.d13z.02.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"dom事件流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dom事件流","aria-hidden":"true"}},[this._v("#")]),this._v(" DOM事件流")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("“DOM2级事件”规定的事件流包括三个阶段："),s("strong",[this._v("事件捕获阶段, 处于目标阶段, 事件冒泡阶段")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"http://www.ituring.com.cn/figures/2012/Professional%20JavaScript%20for%20Web%20Developers%203rd%20Edition/16.d13z.03.png",alt:""}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("在DOM事件流中，实际的目标（"),a("code",[t._v("<div>")]),t._v("元素）在捕获阶段不会接收到事件。这意味着在捕获阶段，事件从document到"),a("code",[t._v("<html>")]),t._v("再到"),a("code",[t._v("<body>")]),t._v("后就停止了。下一个阶段是“处于目标”阶段，于是事件在"),a("code",[t._v("<div>")]),t._v("上发生，并在事件处理（后面将会讨论这个概念）中被看成冒泡阶段的一部分。然后，冒泡阶段发生，事件又传播回文档。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"事件处理程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件处理程序","aria-hidden":"true"}},[this._v("#")]),this._v(" 事件处理程序")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("事件就是用户或浏览器自身执行的某种动作")]),this._v("。诸如click、load 和 mouseover，都是事件的名字。而"),s("strong",[this._v("响应某个事件的函数就叫做事件处理程序")]),this._v("（或事件侦听器）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v('事件处理程序的名字以"on"开头，因此 click 事件的事件处理程序就是 '),s("code",[this._v("onclick")]),this._v("，")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"html事件处理程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html事件处理程序","aria-hidden":"true"}},[this._v("#")]),this._v(" HTML事件处理程序")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}},[t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("showMessage")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("alert")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Hello world!"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("button"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("value")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Click Me"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("onclick")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("showMessage()"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"dom0级事件处理程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dom0级事件处理程序","aria-hidden":"true"}},[this._v("#")]),this._v(" DOM0级事件处理程序")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("首先必须取得一个要操作的对象的引用。每个元素（包括 "),s("code",[this._v("window")]),this._v(" 和 "),s("code",[this._v("document")]),this._v(" ）都有自己的事件处理程序属性，这些属性通常全部小写，例如onclick。将这种属性的值设置为一个函数，就可以指定事件处理程序")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" btn "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"myBtn"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbtn"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("onclick")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("alert")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Clicked"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("使用DOM0级方法指定的事件处理程序被认为是元素的方法。因此，这时候的事件处理程序是在元素的作用域中运行；换句话说，程序中的 "),s("code",[this._v("this")]),this._v(" 引用当前元素。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"dom2级事件处理程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dom2级事件处理程序","aria-hidden":"true"}},[this._v("#")]),this._v(" DOM2级事件处理程序")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("“DOM2级事件”定义了两个方法，用于处理指定和删除事件处理程序的操作："),s("code",[this._v("addEventListener()")]),this._v("和"),s("code",[this._v("removeEventListener()")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("最后这个布尔值参数如果是"),s("code",[this._v("true")]),this._v("，表示在捕获阶段调用事件处理程序；如果是"),s("code",[this._v("false")]),this._v("，表示在冒泡阶段调用事件处理程序。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" btn "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"myBtn"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbtn"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"click"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("alert")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("通过"),s("code",[this._v("addEventListener()")]),this._v("添加的事件处理程序只能使用"),s("code",[this._v("removeEventListener()")]),this._v("来移除；移除时传入的参数与添加处理程序时使用的参数相同。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这也意味着通过"),s("code",[this._v("addEventListener()")]),this._v("添加的匿名函数将无法移除.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" btn "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"myBtn"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbtn"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"click"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("alert")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("//这里省略了其他代码")]),t._v("\n\nbtn"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("removeEventListener")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"click"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//没有用！")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("alert")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"ie事件处理程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ie事件处理程序","aria-hidden":"true"}},[this._v("#")]),this._v(" IE事件处理程序")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("IE实现了与DOM中类似的两个方法："),s("code",[this._v("attachEvent()")]),this._v("和"),s("code",[this._v("detachEvent()")]),this._v("。这两个方法接受相同的两个参数：事件处理程序名称与事件处理程序函数。由于IE8及更早版本只支持事件冒泡，所以通过"),s("code",[this._v("attachEvent()")]),this._v("添加的事件处理程序都会被添加到冒泡阶段。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" btn "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"myBtn"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbtn"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("attachEvent")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"onclick"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("alert")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Clicked"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("注意，"),a("code",[t._v("attachEvent()")]),t._v("的第一个参数是"),a("code",[t._v('"onclick"')]),t._v("，而非DOM的"),a("code",[t._v("addEventListener()")]),t._v("方法中的"),a("code",[t._v('"click"')]),t._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在IE中使用"),s("code",[this._v("attachEvent()")]),this._v("与使用DOM0级方法的主要区别在于事件处理程序的作用域。在使用DOM0级方法的情况下，事件处理程序会在其所属元素的作用域内运行；在使用"),s("code",[this._v("attachEvent()")]),this._v("方法的情况下，"),s("strong",[this._v("事件处理程序会在全局作用域中运行")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"事件对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件对象","aria-hidden":"true"}},[this._v("#")]),this._v(" 事件对象")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在触发DOM上的某个事件时，会产生一个事件对象"),s("code",[this._v("event")]),this._v("，这个对象中包含着所有与事件有关的信息。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("兼容DOM的浏览器会将一个"),s("code",[this._v("event")]),this._v("对象传入到事件处理程序中。无论指定事件处理程序时使用什么方法（DOM0级或DOM2级），都会传入"),s("code",[this._v("event")]),this._v("对象。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在事件处理程序内部，对象"),s("code",[this._v("this")]),this._v("始终等于"),s("code",[this._v("currentTarget")]),this._v("的值(注册了事件处理程序的那个元素)，而"),s("code",[this._v("target")]),this._v("则只包含事件的实际目标。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("onclick")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("alert")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentTarget "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("alert")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                   "),a("span",{attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("alert")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"myBtn"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("当单击这个例子中的按钮时，"),a("code",[t._v("this")]),t._v("和"),a("code",[t._v("currentTarget")]),t._v("都等于"),a("code",[t._v("document.body")]),t._v("，因为事件处理程序是注册到这个元素上的。然而，"),a("code",[t._v("target")]),t._v("元素却等于按钮元素，因为它是"),a("code",[t._v("click")]),t._v("事件真正的目标。由于按钮上并没有注册事件处理程序，结果"),a("code",[t._v("click")]),t._v("事件就冒泡到了"),a("code",[t._v("document.body")]),t._v("，在那里事件才得到了处理。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("要阻止特定事件的默认行为，可以使用"),a("code",[t._v("preventDefault()")]),t._v("方法。例如，链接的默认行为就是在被单击时会导航到其"),a("code",[t._v("href")]),t._v("特性指定的URL。但只有"),a("code",[t._v("cancelable")]),t._v("属性设置为"),a("code",[t._v("true")]),t._v("的事件，才可以使用"),a("code",[t._v("preventDefault()")]),t._v("来取消其默认行为。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" link "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"myLink"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlink"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("onclick")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    event"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("preventDefault")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("stopPropagation()")]),this._v("方法用于立即停止事件在DOM层次中的传播，即取消进一步的事件捕获或冒泡。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("事件对象的"),s("code",[this._v("eventPhase")]),this._v("属性，可以用来确定事件当前正位于事件流的哪个阶段。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("如果是在捕获阶段调用的事件处理程序，那么"),a("code",[t._v("eventPhase")]),t._v("等于"),a("code",[t._v("1")]),t._v("；")]),a("li",[t._v("如果事件处理程序处于目标对象上，则"),a("code",[t._v("eventPhase")]),t._v("等于"),a("code",[t._v("2")]),t._v("；")]),a("li",[t._v("如果是在冒泡阶段调用的事件处理程序，"),a("code",[t._v("eventPhase")]),t._v("等于"),a("code",[t._v("3")]),t._v("。\n这里要注意的是，尽管“处于目标”发生在冒泡阶段，但"),a("code",[t._v("eventPhase")]),t._v("仍然一直等于2。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"事件类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件类型","aria-hidden":"true"}},[this._v("#")]),this._v(" 事件类型")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"内存和性能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内存和性能","aria-hidden":"true"}},[this._v("#")]),this._v(" 内存和性能")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"事件委托"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件委托","aria-hidden":"true"}},[this._v("#")]),this._v(" 事件委托")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("对“事件处理程序过多”问题的解决方案就是事件委托。事件委托利用了事件冒泡，"),a("strong",[t._v("只指定一个事件处理程序，就可以管理某一类型的所有事件")]),t._v("。使用事件委托，只需在DOM树中尽量最高的层次上添加一个事件处理程序.  例如，"),a("code",[t._v("click")]),t._v("事件会一直冒泡到"),a("code",[t._v("document")]),t._v("层次。也就是说，我们可以为整个页面指定一个"),a("code",[t._v("onclick")]),t._v("事件处理程序，而不必给每个可单击的元素分别添加事件处理程序。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("myLinks"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("goSomewhere"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Go somewhere"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("doSomething"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Do something"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("sayHi"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Say hi"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" list "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"myLinks"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nEventUtil"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addHandler")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("list"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"click"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    event "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" EventUtil"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getEvent")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" target "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" EventUtil"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getTarget")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("switch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"doSomething"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"I changed the document\'s title"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("break")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"goSomewhere"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            location"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"http://www.wrox.com"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("break")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"sayHi"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{attrs:{class:"token function"}},[t._v("alert")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"hi"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("break")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);