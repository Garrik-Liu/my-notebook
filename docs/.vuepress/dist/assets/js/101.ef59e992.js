(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{152:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._m(1),a("p",[t._v('以编程角度来说, "模块" 指的是能够提供一定功能或数据的程序语句集合.  模块具备和外部联系的接口 (其他模块或程序调用该模块的方式)')]),a("p",[t._v("在 Node.js 中, 每个\b文件就被视为一个模块.  这个文件可能是 JavaScript \b编写的文件、JSON 或者用 C/C++ 编译的二进制文件.  通过对外接口来向外部暴露功能或者数据, 模块之间可以互相调用.")]),t._m(2),a("p",[t._v("随着开发复杂度的提升, 将代码都写在一处的传统开发方式, 显现出了很多问题:")]),t._m(3),t._m(4),a("p",[t._v('通过使用模块机制, 我们可以把一个复杂程序的各个功能拆分, 分别封装到不同的模块.  每个模块职责单一 (各管一件事, 之间没交集) 通过开发新模块, 和对已有模块的复用来实现各种功能.  这种开发方式被称为 "模块化开发".')]),a("p",[t._v("应用模块化\b开发, 使得各个功能都封装在独立的文件中, 分而治之, 互不干扰.  使得代码易于维护和复用.  同时每个模块中的变量也不会污染全局作用域, 避免了命名冲突.")]),t._m(5),a("p",[t._v("Node.js 参照 CommonJS 标准实现了模块机制.  CommonJS 是一套代码规范, 目的是为了构建 JavaScript 在浏览器之外的生态系统 (服务器端, 桌面端).  JavaScript 诞生之初只是为了写网页小脚本, 并不作为开发大型复杂应用的语言, 其自身有很多不足.  并且, 官方规范 (ECMAScript) 制定的时间较早, 涵盖范围较小, 对于后端开发而言, 例如文件系统, I/O 流, 模块系统, 等等方面都没有相应的标准.  基于种种的不足, CommonJS 规范致力于弥补 JavaScript 没有标准的缺陷, 让 JavaScript 有能力去开发复杂应用, 同时具备跨平台能力.")]),a("p",[t._v("下面是一个 Node.js 的模块使用示例:")]),t._m(6),t._m(7),t._m(8),a("p",[t._v("前文说, 在 Node.js 中, 每个\b文件就被视为一个模块.  这个文件可能是 JavaScript \b编写的文件、JSON 或者用 C/C++ 编译的二进制文件.")]),a("p",[t._v("模块可以分成三类:")]),t._m(9),t._m(10),t._m(11),a("p",[t._v('NPM 是随同 Node.js 一起安装的 "包管理工具".  通过它, 全世界开发者们可以简单方便地互相分享和借鉴各自的 Node.js 模块.  其让整个 Node.js 社区生态变得繁荣热闹.')]),t._m(12),a("p",[t._v("NPM 常见的使用场景有以下几种：")]),t._m(13),a("p",[t._v("具体的使用方法\b网上有很多教程, 这里就不赘述了.  不\b想自行查阅的话, 可以直接参考下面的链接:")]),a("p",[a("a",{attrs:{href:"https://www.npmjs.com.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm 官方文档"),a("OutboundLink")],1),a("a",{attrs:{href:"http://www.runoob.com/nodejs/nodejs-npm.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm \b使用介绍 - 菜鸟教程"),a("OutboundLink")],1)]),t._m(14),t._m(15),t._m(16),t._m(17),a("p",[t._v("先让我们来看看如何创建并把模块的内容导出.  在 Node.js 中, 一个文件就是一个模块.  创建模块的方法就是创建一个文件.")]),t._m(18),a("p",[t._v("示例:")]),t._m(19),t._m(20),t._m(21),t._m(22),a("p",[t._v("示例:")]),t._m(23),t._m(24),t._m(25),t._m(26),a("p",[t._v("可能有人会想可不可以这样写:")]),t._m(27),t._m(28),t._m(29),t._m(30),t._m(31),t._m(32),t._m(33),t._m(34),a("p",[t._v("这种方式下, 导出的就直接是基础类型的值.")]),t._m(35),t._m(36),t._m(37),a("p",[t._v("在模块中定义外部可访问接口的时候, 有两个方法:")]),t._m(38),t._m(39),t._m(40),t._m(41),t._m(42),t._m(43),t._m(44),t._m(45),t._m(46),a("p",[t._v("根据参数不同, 加载方式也有区别.")]),t._m(47),t._m(48),t._m(49),t._m(50),t._m(51),t._m(52),t._m(53),a("p",[t._v("在没有路径, 参数值直接为一个模块名的情况下:")]),t._m(54),t._m(55)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"模块机制介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块机制介绍","aria-hidden":"true"}},[this._v("#")]),this._v(" 模块机制介绍")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"什么是模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是模块","aria-hidden":"true"}},[this._v("#")]),this._v(" 什么是模块?")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"为什么要用模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么要用模块","aria-hidden":"true"}},[this._v("#")]),this._v(" 为什么要用模块?")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("strong",[t._v("很容易出现代码重复")]),t._v(".  开发人员很容易将一个功能的代码重复地写了好多遍.  这导致了如果日后功能需求出现了变更, 就要有多处代码需要被更改.  随着应用规模的增大, 代码会变得难以维护.")]),a("li",[a("strong",[t._v("难以确保代码质量")]),t._v(".  所有代码都混在一起, 实现不同功能的代码全都被写在一个文件中, 使得对于单个功能的独立测试变得困难.")]),a("li",[a("strong",[t._v("难以查错")]),t._v(".  所有代码都混在一起, 程序运行出现 BUG 了, 很难快速定位.")]),a("li",[a("strong",[t._v("性能浪费")]),t._v(".  因为代码都写在一个文件中, 在只调用文件中一段代码的时候, 也会导致整个文件都加载一遍.  这会使很多根本用不到的代码对性能造成浪费.")]),a("li",[a("strong",[t._v("难以多人写协作")]),t._v(".  所有代码都放在一个文件中, 使得多人协作变得困难.  开发人员难以确认其他人做了什么修改, 添加了什么东西.  很容易一个人出了错误, 导致整个程序崩溃.")]),a("li",[a("strong",[t._v("等等")]),t._v("...")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"模块化开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块化开发","aria-hidden":"true"}},[this._v("#")]),this._v(" 模块化开发")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"commonjs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commonjs","aria-hidden":"true"}},[this._v("#")]),this._v(" CommonJS")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在代码中, 开头通过 "),s("code",[this._v("require")]),this._v(" 方法引入了 Node.js 自带的 "),s("code",[this._v("http")]),this._v(" 模块.  并用此模块实现了一个 HTTP 服务器.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" http "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'http'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("myNodeServer")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    res"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("writeHead")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("200")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token string"}},[t._v("'Content-type'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v("'text/plain'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    res"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("write")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'Hello World'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    res"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("end")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nhttp"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("createServer")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myNodeServer"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("listen")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("3000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//监听 3000 端口")]),t._v("\n\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'Server is running!'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"模块分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块分类","aria-hidden":"true"}},[this._v("#")]),this._v(" 模块分类")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://i.imgur.com/euALZb9.png",alt:"Untitled Diagram(6)"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("『 "),a("strong",[t._v("核心模块")]),t._v(" 』: Node.js 自带的原生模块.  比如, "),a("code",[t._v("http")]),t._v(", "),a("code",[t._v("fs")]),t._v(", "),a("code",[t._v("url")]),t._v(".  其分\b为 C/C++ 编写的和 JavaScript 编写的两部分.  C/C++ 模块存放在 Node.js 源代码目录的 "),a("code",[t._v("src/")]),t._v(" 目录下.  JavaScript 模块存放在 "),a("code",[t._v("lib/")]),t._v(" 目录下.  \b")]),a("li",[t._v("『 "),a("strong",[t._v("文件模块")]),t._v(" 』: \b\b\b\b开发人员在本地写的模块.  加载时通过相对路径, 绝对路径来定位模块所在位置.")]),a("li",[t._v("『 "),a("strong",[t._v("第三方模块")]),t._v(" 』: 别人\b编写的模块, 通过包管理工具, 比如 npm, yarn, 可以将其从网络上引入到本地项目, 供己使用.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"npm-包管理器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm-包管理器","aria-hidden":"true"}},[this._v("#")]),this._v(" NPM 包管理器")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://i.imgur.com/5JwXSkk.png",alt:"1*EiKXXsymsyfZ5X46uFG3Xw"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("允许用户从 NPM 服务器下载别人编写的第三方模块到本地使用。")]),s("li",[this._v("允许用户从 NPM 服务器下载并安装别人编写的命令行程序到本地使用。")]),s("li",[this._v("允许用户将自己编写的模块或命令行程序上传到NPM服务器供别人使用。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"使用模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用模块","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用模块")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在了解了什么是模块之后, 让我们来看看如何在 Node.js 中实际应用模块机制.  在使用上, 可以很简单的分为三个步骤: "),s("strong",[this._v("创建, 导出, 引入")]),this._v(".  先创建一个模块, 然后导出功能或数据, 模块之间可以互相引入导出的内容.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("Node.js 提供了 "),a("code",[t._v("exports")]),t._v(" 和 "),a("code",[t._v("require")]),t._v(" 两个对象，其中 "),a("code",[t._v("exports")]),t._v(" 用于导出模块, "),a("code",[t._v("require")]),t._v(" 用于从外部引入另一个模块, 即获取模块的 "),a("code",[t._v("exports")]),t._v(" 对象.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"创建-导出模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建-导出模块","aria-hidden":"true"}},[this._v("#")]),this._v(" 创建 & 导出模块")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("通过 "),s("code",[this._v("exports")]),this._v(" 对象来指定一个模块的导出内容.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 文件名: nameModule.js")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Garrik'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nexports"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("setName")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newName"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" newName"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nexports"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("getName")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("在以上示例中, nameModule.js 文件通过 "),a("code",[t._v("exports")]),t._v(" 对象将 "),a("code",[t._v("setName")]),t._v(" 和 "),a("code",[t._v("getName")]),t._v(" 作为模块的访问接口.  其他的模块可以引入导出的 "),a("code",[t._v("exports")]),t._v(" 对象, 直接访问 "),a("code",[t._v("exports")]),t._v(" 对象的成员函数.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"引入模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引入模块","aria-hidden":"true"}},[this._v("#")]),this._v(" 引入模块")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在 Node.js 中, 通过 "),s("code",[this._v("require")]),this._v(" 函数来引入外界模块导出的内容.  "),s("code",[this._v("require")]),this._v(" 函数接受一个字符串作为路径参数, 函数根据这个字符串参数来进行模块查找. 找到后会返回目标模块导出的 "),s("code",[this._v("exports")]),this._v(" 对象.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 文件名: showNameModule.js")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" nameModule "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'./nameModule.js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nameModule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{attrs:{class:"token comment"}},[t._v("// 显示: Garrik")]),t._v("\n\nnameModule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'Xiang'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nameModule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 显示: Xiang")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("上面示例中, 通过 "),a("code",[t._v("require")]),t._v(" 引入了当前目录下 nameModule.js 导出的 "),a("code",[t._v("exports")]),t._v(" 对象, 并让一个本地变量指向引入模块的 "),a("code",[t._v("exports")]),t._v(" 对象.  之后在 showNameModule.js 文件中就可以使用 "),a("code",[t._v("getName")]),t._v(" 和 "),a("code",[t._v("setName")]),t._v(" 这两个方法了.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"module-exports-和-exports-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#module-exports-和-exports-的区别","aria-hidden":"true"}},[this._v("#")]),this._v(" module.exports 和 exports 的区别")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("在使用 "),a("code",[t._v("exports")]),t._v(" 对象导出内容时, 所有作为对外访问接口的属性和方法都是定义在 "),a("code",[t._v("exports")]),t._v(" 属性上的.  上面的例子中 "),a("code",[t._v("setName")]),t._v(" 和 "),a("code",[t._v("getName")]),t._v(" 方法都直接定义在 "),a("code",[t._v("exports")]),t._v(" 对象上.  那如果想直接导出一个对象, 或者基础类型值可不可以呢?")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Garrik'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nexports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果你试一下的话会发现, 最后引入的是一个空对象, 而不是你定义在 "),s("code",[this._v("exports")]),this._v(" 上的东西.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在使用 "),s("code",[this._v("exports")]),this._v(" \b的时候只能往这个对象里"),s("strong",[this._v("添加新的属性和方法, 而不能对其直接赋值")]),this._v(".  如果想直接导出一个对象, 或者基础类型值要使用 "),s("code",[this._v("module.exports")]),this._v(" 对象.  例如上面例子就可以改写成:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 文件名: nameModule.js")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Garrik'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  setName"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newName"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" newName"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  getName"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这样写的话, 就导出了一整个对象, "),s("code",[this._v("setName")]),this._v(" 和 "),s("code",[this._v("getName")]),this._v(" 方法是这个对象的成员函数.  而不是之前的 "),s("code",[this._v("exports")]),this._v(" 对象了.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("除此之外 "),s("code",[this._v("module.exports")]),this._v(" 还可以直接导出基础类型值:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 文件名: numMoule.js")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" num "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("123456")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" num"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 文件名: showNum.js")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" getNum "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'./numModule.js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// showNum.js 和 numModule.js 在同一目录下")]),t._v("\n\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("getNum"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 结果: 123456")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("可能还是很多人在疑惑 "),s("code",[this._v("exports")]),this._v(" 和 "),s("code",[this._v("module.exports")]),this._v(" 区别和关系.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("上面我说, 一个文件被另一个模块引入时, 会被做一些处理.  文件中代码并不被 Node 执行, 而是被打包进一个函数中, 然后 Node 执行这个函数.  打包函数会被传入 "),a("code",[t._v("exports")]),t._v("，"),a("code",[t._v("require")]),t._v("，"),a("code",[t._v("module")]),t._v("，"),a("code",[t._v("__filename")]),t._v("，"),a("code",[t._v("__dirname")]),t._v(" 这五个参数.  所有的这些参数都在 Node.js 执行函数时赋值, 并且只在当前的函数作用域中有效.  打包函数执行到最后, 返回 "),a("code",[t._v("module.exports")]),t._v(" 对象.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("其中, "),a("strong",[a("code",[t._v("exports")]),t._v(" 是 "),a("code",[t._v("module.exports")]),t._v(" 的引用")]),t._v(", "),a("code",[t._v("module")]),t._v(" 对象代表被打包进去的代码本身.  "),a("code",[t._v("module")]),t._v(" 的 "),a("code",[t._v("exports")]),t._v(" 对象用于指定一个模块的导出内容.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("exports"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Garrik'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Garrik'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在使用 "),s("code",[this._v("exports")]),this._v(" \b的时候只能往这个对象里添加新的属性和方法, 而不能对其直接赋值.  因为直接赋值会打破其对 "),s("code",[this._v("module.exports")]),this._v(" 的引用.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 这是可以的:")]),t._v("\nexports"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Garrik'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nexports"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gender "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Male'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 这是不可以的:")]),t._v("\nexports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Garrik'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" gender"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Male'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 应该用 module.exports:")]),t._v("\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Garrik'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" gender"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Male'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果想直接\b导出一个对象, 或基本类型值, \b应该使用 "),s("code",[this._v("module.exports")]),this._v(".")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 导出函数")]),t._v("\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" num "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 导出基本类型值")]),t._v("\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("123")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"require-的路径参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#require-的路径参数","aria-hidden":"true"}},[this._v("#")]),this._v(" require 的路径参数")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在用 "),s("code",[this._v("require")]),this._v(" 引入\b模块时, 路径参数可能有下面\b三种形式:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("相对路径: "),a("code",[t._v("./")]),t._v(" 开头 或 "),a("code",[t._v("../")]),t._v(" 开头")]),a("li",[t._v("绝对路径\b: "),a("code",[t._v("/")]),t._v(" 开头")]),a("li",[t._v("模块名 (例如: "),a("code",[t._v("http")]),t._v(", "),a("code",[t._v("fs")]),t._v(", "),a("code",[t._v("url")]),t._v(")")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"绝对路径-或相对路径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#绝对路径-或相对路径","aria-hidden":"true"}},[this._v("#")]),this._v(" 绝对路径, 或相对路径")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在指定了模块路径的情况下, Node.js 会去指定的位置加载模块.  但因为用 "),s("code",[this._v("require")]),this._v(" 来加载模块时可以省略文件后缀, 在省略的情况下, Node.js 会去猜测文件的类型.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("比方说我要去  "),s("code",[this._v("./modules/")]),this._v(" 目录下加载一个 "),s("code",[this._v("haha")]),this._v(" 模块.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" haha "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'./modules/haha'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("因为 "),s("code",[this._v("haha")]),this._v(" 没写文件后缀, Node.js 将执行的操作顺序为:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("按 js 文件来执行（先找对应路径当中是否有 haha.js 文件\b, 有就加载）")]),a("li",[t._v("按 json 文件来解析（若上面的 js 文件找不到时，则找对应路径当中的 haha.json 文件来加载）")]),a("li",[t._v("按照预编译好的 C++ 模块来执行（还没有, 寻找对应路径当中的 haha.node 文件来加载）")]),a("li",[t._v("若参数字符串为一个目录的路径, 就是说 "),a("code",[t._v("haha")]),t._v(" 为一个目录, 则先查找该文件夹下的 package.json 文件，然后再加载该文件当中 "),a("code",[t._v("main")]),t._v(" 字段所指定的入口文件.  若 package.json 文件当中没有 "),a("code",[t._v("main")]),t._v(" 字段，或者根本没有 package.json 文件，则再默认查找该文件夹下的 index.js 文件, 并作为模块来载入.")]),a("li",[t._v("要是还没有就拉倒吧!")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"无路径-直接模块名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#无路径-直接模块名","aria-hidden":"true"}},[this._v("#")]),this._v(" 无路径, 直接模块名:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" haha "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'haha'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("如果 "),a("code",[t._v("haha")]),t._v(" 是 Node.js 核心模块就直接加载.")]),a("li",[t._v("如果是第三方模块, 则依次从当前目录中的 node_modules 目录, 父级目录中的 node_modules 目录, 一直到根目录下的 node_modules 目录下去查找 "),a("code",[t._v("haha")]),t._v(" 的所在.  若有两个同名文件，则遵循就近原则。优先引入目录顺序靠前的模块.")]),a("li",[t._v("如果找到的 "),a("code",[t._v("haha")]),t._v(" 为一个目录, 则先查找该文件夹下的 package.json 文件，然后再加载该文件当中 "),a("code",[t._v("main")]),t._v(" 字段所指定的入口文件.  若 package.json 文件当中没有 "),a("code",[t._v("main")]),t._v(" 字段，或者根本没有 package.json 文件，则再默认查找该文件夹下的 index.js 文件, 并作为模块来载入.")]),a("li",[t._v("要是还没有就拉倒吧!")])])}],!1,null,null,null);s.default=e.exports}}]);