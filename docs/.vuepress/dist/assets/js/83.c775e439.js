(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{283:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"自定义指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义指令"}},[t._v("#")]),t._v(" 自定义指令")]),t._v(" "),a("p",[t._v("在之前的学习里, 我们已经看到好多 Vue 指令了.  例如: "),a("code",[t._v("v-bind")]),t._v(", "),a("code",[t._v("v-on")]),t._v(", "),a("code",[t._v("v-if")]),t._v(" 等等.  虽然这些内置的指令已经功能强大到足以满足大部分的业务需求.  但是有的时候我们还是需要自己去对 DOM 进行底层操作.  这时候就需要我们去自定义指令了.")]),t._v(" "),a("h2",{attrs:{id:"注册指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册指令"}},[t._v("#")]),t._v(" 注册指令")]),t._v(" "),a("p",[t._v("注册自定义指令和注册组件的方式很像, 分为全局注册, 和局部注册.  比如现在我们希望注册一个 "),a("code",[t._v("v-focus")]),t._v(" 来让 "),a("code",[t._v("<input>")]),t._v(" 元素在初始化时自动获得焦点.")]),t._v(" "),a("p",[t._v("通过 "),a("code",[t._v("Vue.directive")]),t._v(" 方法我们可以全局注册一个指令:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("directive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'focus'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指令选项")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("局部注册的话就在所在 Vue 组件的选项对象中下的 "),a("code",[t._v("directives")]),t._v(" 属性中定义指令.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("#app")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    deirectives"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        focues"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指令选项")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("注册完之后你就可以在模板中的元素上使用这个 "),a("code",[t._v("v-focus")]),t._v(" 指令了.  注意, 注册的时候, 指令名不需要加 "),a("code",[t._v("v-")]),t._v(".")]),t._v(" "),a("p",[t._v("上面代码只是注册了指令, 具体的功能还没实现.  线面介绍自定义指令的各个选项.")]),t._v(" "),a("h2",{attrs:{id:"钩子函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#钩子函数"}},[t._v("#")]),t._v(" 钩子函数")]),t._v(" "),a("p",[t._v("自定义指令的选项是有几个钩子函数组成的.")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("bind")]),t._v(": 只调用一次, 指令第一次绑定到元素的时候调用, 可以定义一个在绑定时执行一次的初始化动作.")]),t._v(" "),a("li",[a("code",[t._v("inserted")]),t._v(": 被绑定元素插入父节点时调用")]),t._v(" "),a("li",[a("code",[t._v("update")]),t._v(": 被绑定元素所在的模板更新时调用")]),t._v(" "),a("li",[a("code",[t._v("componentUpdated")]),t._v(": 被绑定元素所在的模板完成一次更新周期时调用")]),t._v(" "),a("li",[a("code",[t._v("unbind")]),t._v(": 只调用一次, 指令从元素解绑时调用")])]),t._v(" "),a("h3",{attrs:{id:"钩子函数参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#钩子函数参数"}},[t._v("#")]),t._v(" 钩子函数参数")]),t._v(" "),a("p",[t._v("指令钩子函数会被传入以下参数:")]),t._v(" "),a("p",[t._v("我们可以根据想要实现的功能, 在不同的钩子函数内写不同的代码逻辑.  例如上面的 "),a("code",[t._v("v-focus")]),t._v(", 我们希望元素在插入到父节点的时候就调用, 那很显然我们要在 "),a("code",[t._v("inserted")]),t._v(" 钩子下写代码.")])])}),[],!1,null,null,null);s.default=e.exports}}]);