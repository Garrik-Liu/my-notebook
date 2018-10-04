(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{164:function(t,a,e){"use strict";e.r(a);var s=e(0),r=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[t._m(0),e("p",[t._v("ECMAScript 6.0（以下简称 ES6）是在 2015 年 6 月正式发布的 JavaScript 下一代标准.")]),e("p",[t._v("ECMAScript 和 JavaScript 的关系是，前者是后者的规格，后者是前者的一种实现")]),e("p",[t._v("ECMAScript 2015（简称 ES2015）这个词，也是经常可以看到的。它与 ES6 是什么关系呢？")]),t._m(1),e("p",[t._v("2011 年，ECMAScript 5.1 版发布后，就开始制定 6.0 版了。因此，ES6 这个词的原意，就是指 JavaScript 语言的下一个版本。")]),e("p",[t._v("但是，因为这个版本引入的语法功能太多，而且制定过程当中，还有很多组织和个人不断提交新功能。事情很快就变得清楚了，不可能在一个版本里面包括所有将要引入的功能。常规的做法是先发布 6.0 版，过一段时间再发 6.1 版，然后是 6.2 版、6.3 版等等。")]),e("p",[t._v("但是，标准的制定者不想这样做。他们想让标准的升级成为常规流程：任何人在任何时候，都可以向标准委员会提交新语法的提案，然后标准委员会每个月开一次会，评估这些提案是否可以接受，需要哪些改进。如果经过多次会议以后，一个提案足够成熟了，就可以正式进入标准了。这就是说，标准的版本升级成为了一个不断滚动的流程，每个月都会有变动。")]),e("p",[t._v("标准委员会最终决定，标准在每年的 6 月份正式发布一次，作为当年的正式版本。接下来的时间，就在这个版本的基础上做改动，直到下一年的 6 月份，草案就自然变成了新一年的版本。这样一来，就不需要以前的版本号了，只要用年份标记就可以了。")]),e("p",[t._v("ES6 的第一个版本，就这样在 2015 年 6 月发布了，正式名称就是《ECMAScript 2015 标准》（简称 ES2015）。2016 年 6 月，小幅修订的《ECMAScript 2016 标准》（简称 ES2016）如期发布，这个版本可以看作是 ES6.1 版，因为两者的差异非常小（只新增了数组实例的includes方法和指数运算符），基本上是同一个标准。根据计划，2017 年 6 月发布 ES2017 标准。")]),e("p",[t._v("因此，ES6 既是一个历史名词，也是一个泛指，含义是 5.1 版以后的 JavaScript 的下一代标准，涵盖了 ES2015、ES2016、ES2017 等等，而 ES2015 则是正式名称，特指该年发布的正式版本的语言标准。本书中提到 ES6 的地方，一般是指 ES2015 标准，但有时也是泛指“下一代 JavaScript 语言”。")]),t._m(2),e("p",[t._v("任何人都可以向标准委员会（又称 TC39 委员会）提案，要求修改语言标准。")]),e("p",[t._v("一种新的语法从提案到变成正式标准，需要经历五个阶段。每个阶段的变动都需要由 TC39 委员会批准。")]),t._m(3),e("p",[t._v("一个提案只要能进入 Stage 2，就差不多肯定会包括在以后的正式标准里面。ECMAScript 当前的所有提案，可以在 TC39 的官方网站Github.com/tc39/ecma262查看。")]),e("p",[t._v("本书的写作目标之一，是跟踪 ECMAScript 语言的最新进展，介绍 5.1 版本以后所有的新语法。对于那些明确或很有希望，将要列入标准的新语法，都将予以介绍。")]),t._m(4),e("p",[e("a",{attrs:{href:"https://babeljs.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Babel"),e("OutboundLink")],1),t._v(" 是一个广泛使用的 ES6 转码器，可以将 ES6 代码转为 ES5 代码，从而在现有环境执行。")]),t._m(5),t._m(6),e("p",[t._v("基本格式如下:")]),t._m(7),e("p",[t._v("具体使用方法查阅文档: "),e("a",{attrs:{href:"https://babeljs.io/setup",target:"_blank",rel:"noopener noreferrer"}},[t._v("链接"),e("OutboundLink")],1)]),t._m(8),e("p",[e("a",{attrs:{href:"http://es6.ruanyifeng.com/#docs/intro",target:"_blank",rel:"noopener noreferrer"}},[t._v("ECMAScript 6 简介"),e("OutboundLink")],1)])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介","aria-hidden":"true"}},[this._v("#")]),this._v(" 简介")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"es6-与-ecmascript-2015-的关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6-与-ecmascript-2015-的关系","aria-hidden":"true"}},[this._v("#")]),this._v(" ES6 与 ECMAScript 2015 的关系")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"es6-与-ecmascript-2015-的关系-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6-与-ecmascript-2015-的关系-2","aria-hidden":"true"}},[this._v("#")]),this._v(" ES6 与 ECMAScript 2015 的关系")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("Stage 0 - Strawman（展示阶段）")]),a("li",[this._v("Stage 1 - Proposal（征求意见阶段）")]),a("li",[this._v("Stage 2 - Draft（草案阶段）")]),a("li",[this._v("Stage 3 - Candidate（候选人阶段）")]),a("li",[this._v("Stage 4 - Finished（定案阶段）")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"babel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel","aria-hidden":"true"}},[this._v("#")]),this._v(" Babel")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"babelrc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babelrc","aria-hidden":"true"}},[this._v("#")]),this._v(" .babelrc")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Babel 的配置文件是 "),a("code",[this._v(".babelrc")]),this._v("，存放在项目的根目录下。使用 Babel 的第一步，就是配置这个文件。该文件用来设置转码规则和插件.")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{attrs:{class:"token string"}},[t._v('"presets"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token comment"}},[t._v("//设定转码规则")]),t._v("\n  "),e("span",{attrs:{class:"token string"}},[t._v('"plugins"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),e("span",{attrs:{class:"token comment"}},[t._v("//设定插件")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考")])}],!1,null,null,null);a.default=r.exports}}]);