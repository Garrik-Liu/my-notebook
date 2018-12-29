(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{160:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"适配器模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#适配器模式","aria-hidden":"true"}},[t._v("#")]),t._v(" 适配器模式")]),a("p",[t._v("适配器模式（Adapter）："),a("strong",[t._v("将一个类（对象）的接口（方法或者属性）转化成另外一个接口，以满足用户需求，使类（对象）之间接口的不兼容问题通过适配器得以解决")]),t._v("。")]),a("p",[t._v("简单来说, 适配器就像我们生活中用的转换插头.  在编程中, 适配器就是为两个代码库所写的代码兼容运行而书写的额外代码。有了这样的适配器，你就不需要特意地重写以前的功能代码了。你只需要让用以前的代码库所写的代码适配新代码库就可以了。")]),a("p",[t._v("假如说有一个 A 框架, 现在想让它适配 Jquery:")]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 定义框架")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("A")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("A")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 通过ID获取元素")]),t._v("\n"),a("span",{attrs:{class:"token constant"}},[t._v("A")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("g")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n　　"),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 为元素绑定事件")]),t._v("\n"),a("span",{attrs:{class:"token constant"}},[t._v("A")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("on")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n　　"),a("span",{attrs:{class:"token comment"}},[t._v("// 如果传递参数是字符串则以id处理，否则以元素对象处理")]),t._v("\n　　"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" dom "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" id "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'string'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("g")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" id"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n　　"),a("span",{attrs:{class:"token comment"}},[t._v("// 标准DOM2级添加事件方式")]),t._v("\n　　"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dom"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("addEventListener"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n　　　　dom"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n　　"),a("span",{attrs:{class:"token comment"}},[t._v("// IE DOM2级添加事件方式")]),t._v("\n　　"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dom"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attachEvent"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n　　　　dom"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("attachEvent")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'on'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" type"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n　　"),a("span",{attrs:{class:"token comment"}},[t._v("// 简易添加事件方式")]),t._v("\n　　"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n　　　　dom"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'on'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" type"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" fn"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n　　"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("首先 "),a("code",[t._v("g")]),t._v(" 方法是通过 "),a("code",[t._v("id")]),t._v(" 获取元素，所以通过 "),a("code",[t._v("$")]),t._v("（jQuery的简写名称）方法获取 jQuery 对象然后通过 "),a("code",[t._v("get")]),t._v(" 获取第一个成员即可，不过 "),a("code",[t._v("on")]),t._v(" 方法有些复杂，我们不能直接替换，因为 jQuery 和我们的 A 库在通过 "),a("code",[t._v("id")]),t._v(" 获取元素时是有区别的，jQuery的 "),a("code",[t._v("id")]),t._v(" 前面要加 "),a("code",[t._v("#")]),t._v("。")]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token constant"}},[t._v("A")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("g")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n　　"),a("span",{attrs:{class:"token comment"}},[t._v("// 通过jQuery获取jQuery对象，然后返回第一个成员")]),t._v("\n　　"),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("$")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("get")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token constant"}},[t._v("A")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("on")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n　　"),a("span",{attrs:{class:"token comment"}},[t._v("// 如果传递参数是字符串则以id处理，否则以元素对象处理")]),t._v("\n　　"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" dom "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" id "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'string'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("$")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'#'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" id"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("$")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n　　dom"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("on")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("除此之外, 另一个例子是将数组适配成对象:")]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("arrToObjAdapter")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n　　"),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n　　　　name "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" arr"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n　　　　type "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" arr"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n　　　　title "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" arr"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n　　　　data "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" arr"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n　　"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arr "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'JavaScript'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token string"}},[t._v("'book'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token string"}},[t._v("'前段编程语言'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'8月1日'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" adapterData "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("arrToObjAdapter")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("adapterData"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("　　"),a("span",{attrs:{class:"token comment"}},[t._v('// {name: "JavaScript", type: "book", title: "前段编程语言", data: "8月1日"}')]),t._v("\n")])])]),a("p",[t._v("在前后端开发时, 适配器它解决了前后端的数据依赖，前端程序不再为后端传递的数据所束缚，如果后端因为架构改变导致传递的数据结构发生变化，我们只需要写个适配器就可以放心了。")])])}],!1,null,null,null);s.default=o.exports}}]);