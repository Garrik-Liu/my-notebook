(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{187:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),a("p",[t._v("在 Node.js 模块系统中，每个文件都被视为独立的模块。这个文件可能是 JavaScript 代码、JSON 或者编译过的 C/C++ 扩展")]),a("p",[t._v("( 比如 http 是 Node.js 的一个核心模块，其内部是用 C++ 实现的，外部用 JavaScript 封装。)")]),a("p",[t._v("通过使用模块机制, 我们可以把一个复杂程序各个功能拆分, 分别封装到不同的文件. 在需要的时候引入相关的模块.\n这样做可以让代码的可读性, 复用性, 和易维护性够变得更高.")]),a("p",[t._v("Node.js 的模块机制实现参照了 CommonJS 标准.")]),t._m(1),a("p",[t._v("Node.js 使用 exports 对象 和 require 方法来管理模块依赖.")]),t._m(2),t._m(3),t._m(4),a("p",[t._v("在以上示例中，myModule.js 通过在 exports 对象指定 setName 和 getName 这两个方法, 两个匿名函数被\b导出了\b.")]),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),a("p",[t._v("模块大概可以分成: \b")]),t._m(11),t._m(12),a("p",[t._v("当它执行的时候, 经历下面五个步骤:")]),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),a("p",[t._v("每一个模块都有一个唯一的 id 属性来标示它。id 通常是文件的完整绝对路径.")]),a("p",[t._v("Node 模块和文件系统中的文件通常是一一对应的，引入一个模块需要把文件内容加载到内存中。")]),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),t._m(25),t._m(26),t._m(27),t._m(28),a("p",[t._v("如果指定了模块的绝对路径, 或者相对路径.")]),a("p",[t._v("例如:")]),t._m(29),t._m(30),a("p",[t._v("加载顺序为:")]),t._m(31),t._m(32),t._m(33),t._m(34),t._m(35),t._m(36),a("p",[t._v("Node 并不直接执行你所写的代码，而是把你的代码打包成函数后，执行这个函数。")]),a("p",[t._v("通过这样做，Node.js 实现了以下几点：")]),t._m(37),t._m(38),t._m(39),t._m(40),t._m(41),a("p",[t._v("在模块中定义外部可访问接口的时候, 有两个方法:")]),t._m(42),t._m(43),t._m(44),t._m(45),t._m(46),t._m(47),t._m(48),t._m(49),t._m(50),t._m(51),t._m(52),a("p",[t._v("模块在第一次加载后会被缓存。 多次调用同一模块不会导致模块的代码被执行多次。")]),a("p",[t._v("借助它, 可以返回“部分完成”的对象，从而允许加载依赖的依赖, 即使它们会导致循环依赖。")]),a("p",[t._v("如果想要多次执行一个模块，可以导出一个函数，然后调用该函数。")]),t._m(53),t._m(54),t._m(55),a("p",[t._v("例如以下情况:")]),t._m(56),a("p",[t._v("运行 module1.js 可以看到：")]),t._m(57),a("p",[t._v("在 module1 为加载完成的时候, 引入了 module2, 而 module2 又\b想要请求 module1. 结果是 module2 只\b引入了 未完成的 module1.\n只有 a 属性打印出来了，因为 b 和 c 是在请求了module2 并打印了 module1 之后才导出的。")]),a("hr"),t._m(58),t._m(59),t._m(60),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/nodejs/node/blob/v5.x/lib/module.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("module.js 源码"),a("OutboundLink")],1)]),a("li",[a("a",{attrs:{href:"http://nodejs.cn/api/modules.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node 官方文档"),a("OutboundLink")],1)]),a("li",[a("a",{attrs:{href:"https://github.com/yjhjstz/deep-into-node/blob/master/chapter2/chapter2-2.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入源码 - Chapter 2"),a("OutboundLink")],1)]),a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000009060866#articleHeader0",target:"_blank",rel:"noopener noreferrer"}},[t._v("在 Node.js 中引入模块：你所需要知道的一切都在这里"),a("OutboundLink")],1)]),a("li",[a("a",{attrs:{href:"https://github.com/DavidCai1993/my-blog/issues/26",target:"_blank",rel:"noopener noreferrer"}},[t._v("通过源码解析 Node.js 中一个文件被 require 后所发生的故事"),a("OutboundLink")],1)])]),t._m(61),a("ul",[a("li",[a("a",{attrs:{href:"https://gywbd.github.io/posts/2014/11/using-exports-nodejs-interface-design-pattern.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("exports的用法：Node.js模块的接口设计模式"),a("OutboundLink")],1)])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"模块机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块机制","aria-hidden":"true"}},[this._v("#")]),this._v(" 模块机制:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"创建-加载模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建-加载模块","aria-hidden":"true"}},[this._v("#")]),this._v(" 创建 & 加载模块:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("p",[this._v("exports 对象 指定一个模块所导出的内容")])]),s("li",[s("p",[this._v("require 方法 引入外界模块到\b当前文件.")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// myModule.js")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nexports"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("setName")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("setName"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" setName"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nexports"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("getName")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// getModule.js")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myModule "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'./myModule'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmyModule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Garrik"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myModule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在 getmodule.js 中通过 "),s("code",[this._v("require('./myModule')")]),this._v("加载这个模块，然后就可以直接访问 myModule.js 中定义在 exports 对象里的函数了。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"深入研究"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#深入研究","aria-hidden":"true"}},[this._v("#")]),this._v(" \b深入研究:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("require")]),this._v(" 源码:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// Loads a module at the given file path. Returns that module's")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// `exports` property.")]),t._v("\nModule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("require")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("assert")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token string"}},[t._v("'missing path'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("assert")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" path "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),a("span",{attrs:{class:"token string"}},[t._v("'string'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token string"}},[t._v("'path must be a string'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Module"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("_load")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("require()")]),this._v(" 函数是 "),s("code",[this._v("Module\b")]),this._v("对象 原型上的一个方法.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("接收一个路径 ("),a("code",[t._v("path")]),t._v(") 作为参数,  "),a("code",[t._v("assert")]),t._v(" 模块进行简单的 "),a("code",[t._v("path")]),t._v(" 变量的判断，需要传人的 "),a("code",[t._v("path")]),t._v(" 是一个 "),a("code",[t._v("string")]),t._v(" 类型。返回引入模块的 "),a("code",[t._v("module.exports")]),t._v(" 对象")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("核心模块 (本身自带)")]),s("li",[this._v("文件模块 (自己编写的本地模块)")]),s("li",[this._v("第三方模块 (通过包管理器安装的)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("模块文件的后缀 ( 例如: "),s("code",[this._v(".js")]),this._v(", "),s("code",[this._v(".json")]),this._v(", "),s("code",[this._v(".node")]),this._v(") 可以省略.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("p",[a("code",[t._v("Resolving")]),t._v(": 找到文件的绝对路径；")])]),a("li",[a("p",[a("code",[t._v("Loading")]),t._v(": 判断文件内容类型；")])]),a("li",[a("p",[a("code",[t._v("Wrapping")]),t._v(": 打包，给这个文件赋予一个私有作用范围")])]),a("li",[a("p",[a("code",[t._v("Evaluating")]),t._v(": VM 对加载的代码进行处理的地方；")])]),a("li",[a("p",[a("code",[t._v("Caching")]),t._v(": 缓存, 当再次需要用这个文件的时候，不需要重复一遍上面步骤。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"resolving-解析路径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resolving-解析路径","aria-hidden":"true"}},[this._v("#")]),this._v(" Resolving - 解析路径:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在每个模块中都有一个 "),s("code",[this._v("module")]),this._v("对象 ("),s("code",[this._v("Module")]),this._v(" 的实例) 作为当前模块的引用.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("module")]),this._v(" 对象\b可能看起来像下面这样:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Module "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 模块的标识符。 通常是完全解析后的文件名。")]),t._v("\n  id"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'.'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n  exports"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Garrik'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 最先引用该模块的模块")]),t._v("\n  parent"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("null")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 模块的完全解析后的文件名")]),t._v("\n  filename"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/Users/xiangliu/Desktop/testNode/myModules/myName.js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 模块是否已经加载完成，或正在加载中")]),t._v("\n  loaded"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 被该模块引用的模块对象")]),t._v("\n  children"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 模块的搜索路径")]),t._v("\n  paths"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n   "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/Users/xiangliu/Desktop/testNode/myModules/node_modules'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),a("span",{attrs:{class:"token string"}},[t._v("'/Users/xiangliu/Desktop/testNode/node_modules'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),a("span",{attrs:{class:"token string"}},[t._v("'/Users/xiangliu/Desktop/node_modules'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),a("span",{attrs:{class:"token string"}},[t._v("'/Users/xiangliu/node_modules'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),a("span",{attrs:{class:"token string"}},[t._v("'/Users/node_modules'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),a("span",{attrs:{class:"token string"}},[t._v("'/node_modules'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"路径参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路径参数","aria-hidden":"true"}},[this._v("#")]),this._v(" 路径参数:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在用"),s("code",[this._v("require()")]),this._v("引入\b模块时, 路径参数可能有下面\b三种形式:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("相对路径: "),a("code",[t._v("./")]),t._v("开头 或 "),a("code",[t._v("../")]),t._v("开头")]),a("li",[t._v("绝对路径\b: "),a("code",[t._v("/")]),t._v("开头")]),a("li",[t._v("\b模块名 (例如: "),a("code",[t._v("http")]),t._v(", "),a("code",[t._v("fs")]),t._v(", "),a("code",[t._v("url")]),t._v(")")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"无路径-直接模块名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#无路径-直接模块名","aria-hidden":"true"}},[this._v("#")]),this._v(" 无路径, 直接模块名:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果我引入了一个 "),s("code",[this._v("haha")]),this._v(" 模块，并没有指定它的路径的话：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" haha "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'haha'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Node 首先会去 "),s("code",[this._v("/lib")]),this._v(" 目录下查找, 看 "),s("code",[this._v("haha")]),this._v(" 是否是一个 Node 核心模块.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Node 会按照 "),s("code",[this._v("module.paths")]),this._v(" 所指定的文件目录顺序依次寻找 "),s("code",[this._v("haha")]),this._v(" 的所在。若有两个同名文件，则遵循就近原则。优先引入目录顺序靠前的模块.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("模块不一定非要是文件，也可以是个文件夹。我们可以在 node_modules 中创建一个 haha 文件夹，并且放一个 index.js 文件在其中。那么执行 "),s("code",[this._v("require('haha')")]),this._v(" 将会默认使用 index.js 文件.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("也可以手动控制指定到其他文件，修改 "),s("code",[this._v("package.json")]),this._v(" 的 "),s("code",[this._v("main")]),this._v(" 属性就可以。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"有路径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#有路径","aria-hidden":"true"}},[this._v("#")]),this._v(" 有路径:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" haha "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'./lib/haha'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("因为用 "),s("code",[this._v("require")]),this._v(" 来加载文件时可以省略扩展名, 所以在加载的时候, Node 会猜测文件的类型.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("按 js 文件来执行（先找对应路径当中是否有 haha.js 文件\b, 有就加载）")]),s("li",[this._v("按 json 文件来解析（若上面的 js 文件找不到时，则找对应路径当中的 haha.json 文件来加载）")]),s("li",[this._v("按照预编译好的 c++模块 来执行（还没有, 寻找对应路径当中的 haha.node 文件来加载）")]),s("li",[this._v("若参数字符串为一个目录（文件夹）的路径, 则自动先查找该文件夹下的 package.json 文件，然后再加载该文件当中 main字段 所指定的入口文件。（若 package.json 文件当中没有 main字段，或者根本没有 package.json 文件，则再默认查找该文件夹下的 index.js 文件, 并作为模块来载入。）")]),s("li",[this._v("要是还没有就玩蛋去吧!")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"loading-判断文件内容类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loading-判断文件内容类型","aria-hidden":"true"}},[this._v("#")]),this._v(" Loading 判断文件内容类型:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"wrapping-打包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wrapping-打包","aria-hidden":"true"}},[this._v("#")]),this._v(" Wrapping 打包:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("\b很明显, 我们不能访问被引入模块内除"),s("code",[this._v("module.exports")]),this._v(" 之外的东西.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这是因为在执行模块代码之前，Node.js 会使用一个如下的函数包装器将其包装, 可以用 "),s("code",[this._v("module")]),this._v("模块 的 "),s("code",[this._v("wrapper")]),this._v(" 属性来查看。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("exports"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" require"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" module"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __filename"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __dirname"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 模块的代码实际上在这里")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("它保持了顶层的变量（用 "),a("code",[t._v("var")]),t._v("、"),a("code",[t._v("const")]),t._v(" 或 "),a("code",[t._v("let")]),t._v(" 定义）作用在模块范围内，而不是全局对象。")]),a("li",[t._v("它有助于提供一些看似全局的但实际上是模块特定的变量，例如：\n"),a("ul",[a("li",[t._v("用于从模块中导出内容的 "),a("code",[t._v("module")]),t._v(" 和 "),a("code",[t._v("exports")]),t._v(" 对象。")]),a("li",[t._v("包含模块绝对文件名和目录路径的快捷变量 "),a("code",[t._v("__filename")]),t._v(" 和 "),a("code",[t._v("__dirname")]),t._v(" 。")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("这个打包函数有 5 个参数："),a("code",[t._v("exports")]),t._v("，"),a("code",[t._v("require")]),t._v("，"),a("code",[t._v("module")]),t._v("，"),a("code",[t._v("__filename")]),t._v("，"),a("code",[t._v("__dirname")]),t._v("。函数使变量看起来全局生效，但实际上只在模块内生效。所有的这些参数都在 Node 执行函数时赋值:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("code",[t._v("exports")]),t._v(" 定义成 "),a("code",[t._v("module.exports")]),t._v(" 的引用, 初始为 "),a("code",[t._v("{}")]),t._v(";")]),a("li",[a("code",[t._v("require")]),t._v(" 和 "),a("code",[t._v("module")]),t._v(" 对象都指向将要被包进去的\b代码实例 ==(这两个没太懂)==；")]),a("li",[a("code",[t._v("__filename")]),t._v(" 和 "),a("code",[t._v("__dirname")]),t._v(" 指这个打包模块的绝对路径和目录路径。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("打包函数的返回值是 "),s("code",[this._v("module.exports")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"exports-和-module-exports"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exports-和-module-exports","aria-hidden":"true"}},[this._v("#")]),s("code",[this._v("exports")]),this._v(" 和 "),s("code",[this._v("module.exports")]),this._v(":")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("exports"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Garrik'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Garrik'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("模块的 "),s("code",[this._v("module.exports")]),this._v(" 是用于指定一个模块所导出的内容，即可以通过 "),s("code",[this._v("require()")]),this._v(" 访问的内容。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("模块中的 "),s("code",[this._v("exports")]),this._v(" 变量实际上是 "),s("code",[this._v("module.exports")]),this._v(" 的一个引用.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("exports")]),this._v(" 和 "),s("code",[this._v("module.exports")]),this._v(" 指向同一块内存.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("使用 "),s("code",[this._v("exports")]),this._v(" \b的时候只能往这个对象里添加新的属性和方法, 而不能对其直接赋值. 如果想直接\b导出一个对象或者函数, \b应该使用 "),s("code",[this._v("module.exports")]),this._v(".")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 这是可以的:")]),t._v("\nexports"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Garrik'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nexports"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gender "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Male'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 这是不可以的:")]),t._v("\nexports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Garrik'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" gender"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Male'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 应该用 module.exports:")]),t._v("\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Garrik'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" gender"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Male'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("这是因为如果把 "),a("code",[t._v("exports")]),t._v(" 指向一个函数，那么相当于改变了 "),a("code",[t._v("exports")]),a("code",[t._v("的指向，exports")]),t._v(" 就不再是 "),a("code",[t._v("module.exports")]),t._v(" 引用了。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"evaluating-vm-对加载的代码进行处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#evaluating-vm-对加载的代码进行处理","aria-hidden":"true"}},[this._v("#")]),this._v(" Evaluating - VM 对加载的代码进行处理:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("require")]),this._v(" \b是一个函数, 也更是一个对象. 也有自己的属性.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"caching-所有的模块都会被缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#caching-所有的模块都会被缓存","aria-hidden":"true"}},[this._v("#")]),this._v(" Caching - 所有的模块都会被缓存:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("被引入的模块将被缓存在 "),s("code",[this._v("require.cache")]),this._v(" 这个对象中。从此对象中删除键值对将会导致下一次 "),s("code",[this._v("require")]),this._v(" 重新加载被删除的模块。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"循环"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#循环","aria-hidden":"true"}},[this._v("#")]),this._v(" 循环:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("当循环调用 "),s("code",[this._v("require()")]),this._v(" 时，一个模块可能在未完成执行时被返回。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// lib/module1.js")]),t._v("\nexports"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'./module2'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nexports"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nexports"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// lib/module2.js")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Module1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'./module1'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Module1"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" a"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("require")]),this._v(" 调用时的步骤:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://i.imgur.com/TedBZmq.jpg",alt:"nodejs-require"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"相关"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关","aria-hidden":"true"}},[this._v("#")]),this._v(" 相关:")])}],!1,null,null,null);s.default=e.exports}}]);