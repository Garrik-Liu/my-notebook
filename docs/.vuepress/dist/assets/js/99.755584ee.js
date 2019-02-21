(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{169:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),s("p",[t._v("DOM（文档对象模型）是针对HTML和XML文档的一个API（应用程序编程接口）, 将文档描绘成一个层次化的节点树, 并且允许开发者去操纵这些节点.  各家浏览器按照 DOM 标准实现了这套 API, 允许 JavaScript 去操纵这些节点.")]),s("p",[t._v("1998年10月 DOM 1 级规范成为 W3C 的推荐标准, 之后又有 DOM 2 级, DOM 3 级标准.")]),s("p",[s("a",{attrs:{href:"https://www.w3.org/DOM/DOMTR#dom1",target:"_blank",rel:"noopener noreferrer"}},[t._v("DOM 标准"),s("OutboundLink")],1)]),s("p",[t._v("A Web page is a document.  The Document Object Model (DOM) represents that same document so it can be manipulated.  The DOM is an object-oriented representation of the web page, which can be modified with a scripting language such as JavaScript.")]),t._m(1),s("p",[t._v("DOM 可以将任何 HTML 或 XML 文档描绘成一个由多层节点构成的结构。节点分为 12 种不同的类型，每种类型分别表示文档中不同的信息及（或）标记。节点之间的关系构成了层次, 在一个特定节点做为根节点的包含下, 所有的节点构成树形结构.")]),t._m(2),s("p",[t._v("每一段标记都可以通过树中的一个节点来表示. 共有 12 种节点类型，这些类型都继承自一个基类型。DOM1级定义了一个 Node 接口，在 JavaScript 中作为 Node 类实现, 所有节点类型都继承自 Node 类型，因此所有节点类型都共享着相同的基本属性和方法。")]),s("p",[t._v("每个节点都有一个 "),s("code",[t._v("nodeType")]),t._v(" 属性，用于表明节点的类型。节点类型由在 Node 类中定义的数值常量来表示，具体请查阅"),s("a",{attrs:{href:"http://www.w3school.com.cn/jsref/prop_node_nodetype.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),s("OutboundLink")],1)]),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Document#Methods",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN 文档"),s("OutboundLink")],1)]),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),s("p",[t._v("所有这些上述信息都存在于请求的 HTTP 头部，只不过是通过这些属性让我们能够在 JavaScript 中访问它们而已")]),t._m(17),s("p",[t._v("在网页开发中, 最常见的 DOM 操作就要数取得特定的某个或某组元素的引用，然后再执行一些操作了。\nDocument 类型为此提供了两个方法：")]),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Element",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN 文档"),s("OutboundLink")],1)]),t._m(23),t._m(24),t._m(25),t._m(26),s("p",[t._v("所有 HTML 元素都由 HTMLElement 类型表示，不是直接通过这个类型，也是通过它的子类型来表示。 HTMLElement 类型直接继承自 Element 并添加了一些属性。添加的这些属性分别对应于每个 HTML 元素中都存在的下列标准特性:")]),t._m(27),s("p",[t._v("上述这些属性都可以用来取得或修改元素对应的特性值。")]),t._m(28),s("p",[t._v("每个元素都有一或多个特性，这些特性的用途是给出相应元素或其内容的附加信息。操作特性的DOM方法主要有三个，分别是")]),t._m(29),t._m(30),t._m(31),t._m(32),t._m(33),t._m(34),t._m(35),t._m(36),t._m(37),t._m(38),t._m(39),t._m(40),t._m(41),t._m(42),t._m(43),t._m(44),s("p",[t._v("文本节点由 Text 类型表示，包含的是可以照字面解释的纯文本内容。")]),t._m(45),t._m(46),t._m(47),t._m(48),s("p",[t._v("Comment类型与Text类型继承自相同的基类")]),t._m(49),s("p",[t._v("CDATASection类型只针对基于XML的文档，表示的是CDATA区域。")]),t._m(50),t._m(51),t._m(52),t._m(53),t._m(54),t._m(55),s("p",[t._v('在所有节点类型中，只有 DocumentFragment 在文档中没有对应的标记。作为一个不存在的父节点, 用来 "包裹" 其他节点.')]),t._m(56),t._m(57),t._m(58),s("p",[t._v("元素的特性在DOM中以Attr类型来表示。尽管它们也是节点，但特性却不被认为是DOM文档树的一部分。")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"dom"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dom","aria-hidden":"true"}},[this._v("#")]),this._v(" DOM")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"节点层次"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#节点层次","aria-hidden":"true"}},[this._v("#")]),this._v(" 节点层次")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在 HTML 中, 文档节点是每个文档的根节点。"),e("code",[this._v("<html>")]),this._v("元素，我们称之为文档元素。文档元素是文档的最外层元素，文档中的其他所有元素都包含在文档元素中。每个文档只能有一个文档元素。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("文档中所有的节点之间都存在这样或那样的关系。节点间的各种关系可以用传统的家族关系来描述，相当于把文档树比喻成家谱。每个节点都有一个 "),e("code",[this._v("childNodes")]),this._v(" 属性，其中保存着一个 NodeList 对象。NodeList 是一种类数组对象，用于保存一组有序的节点, 可以通过 "),e("code",[this._v("[]")]),this._v(" 语法来访问 NodeList 的值. 但注意它并不是 Array 的实例。NodeList 对象是基于 DOM 结构动态执行查询的结果，因此 DOM 结构的变化能够自动反映在 NodeList 对象中。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("每个节点都有一个 "),s("code",[t._v("parentNode")]),t._v(" 属性，该属性指向文档树中的父节点。包含在 "),s("code",[t._v("childNodes")]),t._v(" 列表中的所有节点都具有相同的父节点，因此它们的 "),s("code",[t._v("parentNode")]),t._v(" 属性都指向同一个节点。包含在 "),s("code",[t._v("childNodes")]),t._v(" 列表中的每个节点相互之间都是同胞节点。通过使用列表中每个节点的 "),s("code",[t._v("previousSibling")]),t._v(" 和 "),s("code",[t._v("nextSibling")]),t._v(" 属性，可以访问同一列表中的其他节点。父节点的 "),s("code",[t._v("firstChild")]),t._v(" 和 "),s("code",[t._v("lastChild")]),t._v(" 属性分别指向其 "),s("code",[t._v("childNodes")]),t._v(" 列表中的第一个和最后一个节点。所有节点都有的最后一个属性是 "),s("code",[t._v("ownerDocument")]),t._v(" ，该属性指向表示整个文档的文档节点。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"danger custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),e("p",[this._v("并不是每种节点都有子节点。本章后面将会讨论不同节点类型之间的差异!")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"节点类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#节点类型","aria-hidden":"true"}},[this._v("#")]),this._v(" 节点类型")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"document-类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#document-类型","aria-hidden":"true"}},[this._v("#")]),this._v(" Document 类型")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("nodeType")]),t._v(" 的值为 9；")]),s("li",[s("code",[t._v("nodeName")]),t._v(' 的值为 "#document"；')]),s("li",[s("code",[t._v("nodeValue")]),t._v(" 的值为 "),s("code",[t._v("null")]),t._v("；")]),s("li",[s("code",[t._v("parentNode")]),t._v(" 的值为 "),s("code",[t._v("null")]),t._v("；")]),s("li",[s("code",[t._v("ownerDocument")]),t._v(" 的值为 "),s("code",[t._v("null")]),t._v("；")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("JavaScript通过 Document 类型表示文档。在浏览器中，"),e("code",[this._v("document")]),this._v(" 对象是 "),e("code",[this._v("HTMLDocument")]),this._v("（继承自"),e("code",[this._v("Document")]),this._v("类型）的一个实例.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"文档的子节点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文档的子节点","aria-hidden":"true"}},[this._v("#")]),this._v(" 文档的子节点")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("DOM 标准规定 Document 节点的子节点可以是 DocumentType、Element、ProcessingInstruction 或 Comment.  其内置的 "),e("code",[this._v("documentElement")]),this._v(" 属性始终指向 HTML 页面中的 "),e("code",[this._v("<html>")]),this._v(" 元素。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("作为 HTMLDocument 的实例，"),e("code",[this._v("document")]),this._v(" 对象还有一个 "),e("code",[this._v("body")]),this._v(" 属性，直接指向 "),e("code",[this._v("<body>")]),this._v(" 元素")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("document.doctype")]),this._v(" 返回当前文档的文档类型定义, 通常将 "),e("code",[this._v("<!DOCTYPE>")]),this._v(" 标签看成一个与文档其他部分不同的实体")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"文档信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文档信息","aria-hidden":"true"}},[this._v("#")]),this._v(" 文档信息")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("作为 HTMLDocument 的一个实例，"),e("code",[this._v("document")]),this._v(" 对象还有一些标准的 Document 对象所没有的属性。这些属性提供了 "),e("code",[this._v("document")]),this._v(" 对象所表现的网页的一些信息:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("title")]),t._v(": 包含着 "),s("code",[t._v("<title>")]),t._v(" 元素中的文本")]),s("li",[s("code",[t._v("URL")]),t._v(": 包含页面完整的URL（即地址栏中显示的URL）")]),s("li",[s("code",[t._v("domain")]),t._v(": 页面的域名")]),s("li",[s("code",[t._v("referrer")]),t._v(": 保存着链接到当前页面的那个页面的 URL")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"查找元素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查找元素","aria-hidden":"true"}},[this._v("#")]),this._v(" 查找元素")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("getElementById()")]),this._v(": 接收取得的元素的 ID。如果找到相应的元素则返回该元素")]),e("li",[e("code",[this._v("getElementsByTagName()")]),this._v(": 接受一要取得元素的标签名，而返回的是包含零或多个元素的 NodeList, 在HTML文档中，这个方法会返回一个 HTMLCollection 对象")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("HTMLCollection 对象中的项可以使用 "),e("code",[this._v("[]")]),this._v(" 语法来取得, 还有一个方法，叫做 "),e("code",[this._v("namedItem()")]),this._v("，使用这个方法可以通过元素的 "),e("code",[this._v("name")]),this._v(" 特性取得集合中的项。对命名的项也可以使用方括号语法来访问, 如下面代码:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("myimage.gif"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("myImage"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" images "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getElementsByTagName")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"img"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myImage "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" images"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("namedItem")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"myImage"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 或者")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myImage "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" images"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token string"}},[t._v('"myImage"')]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"element-类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#element-类型","aria-hidden":"true"}},[this._v("#")]),this._v(" Element 类型")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("nodeType")]),t._v(" 的值为 1；")]),s("li",[s("code",[t._v("nodeName")]),t._v(" 的值为元素的标签名；")]),s("li",[s("code",[t._v("nodeValue")]),t._v(" 的值为 "),s("code",[t._v("null")]),t._v("；")]),s("li",[s("code",[t._v("parentNode")]),t._v(" 的值为 Document 或 Element；")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("Element")]),this._v(" 类型用于表现XML或HTML元素，提供了对元素标签名、子节点及特性的访问。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("要访问元素的标签名，可以使用 "),s("code",[t._v("nodeName")]),t._v(" 属性，也可以使用 "),s("code",[t._v("tagName")]),t._v(" 属性, 在HTML中，标签名始终都以全部大写表示；比如一个 "),s("code",[t._v("<div>")]),t._v(" 元素的 "),s("code",[t._v("tagName")]),t._v(' 为 "DIV"')])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"html元素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#html元素","aria-hidden":"true"}},[this._v("#")]),this._v(" HTML元素")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("id")]),t._v("，元素在文档中的唯一标识符。")]),s("li",[s("code",[t._v("title")]),t._v("，有关元素的附加说明信息，一般通过工具提示条显示出来。")]),s("li",[s("code",[t._v("classNam")]),t._v("e，与元素的 "),s("code",[t._v("class")]),t._v(" 特性对应，即为元素指定的CSS类。没有将这个属性命名为class，是因为 class 是 ECMAScript 的保留字")]),s("li",[s("code",[t._v("lang")]),t._v("，元素内容的语言代码，很少使用。")]),s("li",[s("code",[t._v("dir")]),t._v('，语言的方向，值为"ltr"（left-to-right，从左至右）或"rtl"（right-to-left，从右至左），也很少使用。')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"取得特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#取得特性","aria-hidden":"true"}},[this._v("#")]),this._v(" 取得特性")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("getAttribute()")])]),e("li",[e("code",[this._v("setAttribute()")]),this._v(": 接受两个参数：要设置的特性名 和 值")]),e("li",[e("code",[this._v("removeAttribute()")]),this._v(": 彻底删除元素的特性。调用这个方法不仅会清除特性的值，而且也会从元素中完全删除特性")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("传递给 "),s("code",[t._v("getAttribute()")]),t._v(" 的特性名与实际的特性名相同。因此要想得到 "),s("code",[t._v("class")]),t._v(' 特性值，应该传入"class"而不是"className"\n通过 '),s("code",[t._v("getAttribute()")]),t._v(" 方法也可以取得自定义特性, 根据HTML5规范，自定义特性应该加上 "),s("code",[t._v("data-")]),t._v(" 前缀以便验证。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("myDiv"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("my_special_attribute")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hello!"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" value "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" div"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getAttribute")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"my_special_attribute"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("任何元素的所有公认的（非自定义的）特性，也都可以通过 DOM 元素本身的属性来访问。有两类特殊的特性，它们虽然有对应的属性名，但属性的值与通过 "),e("code",[this._v("getAttribute()")]),this._v(" 返回的值并不相同。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("style")]),t._v(", 用于通过CSS为元素指定样式。在通过"),s("code",[t._v("getAttribute()")]),t._v("访问时，返回的"),s("code",[t._v("style")]),t._v("特性值中包含的是CSS文本，而通过属性来访问它则会返回一个对象。")]),s("li",[t._v("事件处理程序, 例如"),s("code",[t._v("onclick")]),t._v(".  通过"),s("code",[t._v("getAttribute()")]),t._v("访问，则会返回相应代码的字符串。而在访问"),s("code",[t._v("onclick")]),t._v("属性时，则会返回一个JavaScript函数")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("由于存在这些差别，在通过 JavaScript 以编程方式操作 DOM 时，开发人员经常不使用 "),e("code",[this._v("getAttribute()")]),this._v("，而是只使用对象的属性。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"attributes-属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#attributes-属性","aria-hidden":"true"}},[this._v("#")]),e("code",[this._v("attributes")]),this._v(" 属性")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("attributes")]),this._v(" 属性中包含一个 NamedNodeMap，与 NodeList 类似，也是一个“动态”的集合。元素的每一个特性都由一个 Attr 节点表示, 每个节点都保存在 NamedNodeMap 对象中。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("attributes")]),this._v(" 属性中包含一系列节点，每个节点的 "),e("code",[this._v("nodeName")]),this._v(" 就是特性的名称，而节点的 "),e("code",[this._v("nodeValue")]),this._v(" 就是特性的值。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("一般来说，由于前面介绍的 "),s("code",[t._v("attributes")]),t._v(" 的方法不够方便，因此开发人员更多的会使用"),s("code",[t._v("getAttribute()")]),t._v("、"),s("code",[t._v("removeAttribute()")]),t._v("和"),s("code",[t._v("setAttribute()")]),t._v("方法。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"创建元素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建元素","aria-hidden":"true"}},[this._v("#")]),this._v(" 创建元素")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("使用"),e("code",[this._v("document.createElement()")]),this._v("方法可以创建新元素。这个方法只接受一个参数，即要创建元素的标签名。这个标签名在HTML文档中不区分大小写")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("要把新元素添加到文档树，可以使用"),e("code",[this._v("appendChild()")]),this._v("、"),e("code",[this._v("insertBefore()")]),this._v("或"),e("code",[this._v("replaceChild()")]),this._v("方法。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"text-类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#text-类型","aria-hidden":"true"}},[this._v("#")]),this._v(" Text 类型")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("nodeType")]),t._v(" 的值为 3；")]),s("li",[s("code",[t._v("nodeName")]),t._v(' 的值为"#text"；')]),s("li",[s("code",[t._v("nodeValue")]),t._v(" 的值为节点所包含的文本；")]),s("li",[s("code",[t._v("parentNode")]),t._v(" 是一个 Element；")]),s("li",[t._v("没有子节点。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("可以通过 "),e("code",[this._v("nodeValue")]),this._v(" 属性或 "),e("code",[this._v("data")]),this._v(" 属性访问Text节点中包含的文本, 使用下列方法可以操作节点中的文本。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("appendData(text)")]),t._v("：将text添加到节点的末尾。")]),s("li",[s("code",[t._v("deleteData(offset, count)")]),t._v("：从offset指定的位置开始删除count个字符。")]),s("li",[s("code",[t._v("insertData(offset, text)")]),t._v("：在offset指定的位置插入text。")]),s("li",[s("code",[t._v("replaceData(offset, count, text)")]),t._v("：用text替换从offset指定的位置开始到offset+ count为止处的文本。")]),s("li",[s("code",[t._v("splitText(offset)")]),t._v("：从offset指定的位置将当前文本节点分成两个文本节点。")]),s("li",[s("code",[t._v("substringData(offset, count)")]),t._v("：提取从offset指定的位置开始到offset+count为止处的字符串。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"commnet-类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commnet-类型","aria-hidden":"true"}},[this._v("#")]),this._v(" Commnet 类型")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("nodeType")]),t._v(" 的值为 8；")]),s("li",[s("code",[t._v("nodeName")]),t._v(' 的值为"#comment"；')]),s("li",[s("code",[t._v("nodeValue")]),t._v(" 的值为注释的内容；")]),s("li",[s("code",[t._v("parentNode")]),t._v(" 可能是Document或Element；")]),s("li",[t._v("没有子节点。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"cdatasection-类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cdatasection-类型","aria-hidden":"true"}},[this._v("#")]),this._v(" CDATASection 类型")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"documenttype-类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#documenttype-类型","aria-hidden":"true"}},[this._v("#")]),this._v(" DocumentType 类型")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("nodeType")]),t._v(" 的值为 10；")]),s("li",[s("code",[t._v("nodeName")]),t._v(" 的值为doctype的名称；")]),s("li",[s("code",[t._v("nodeValue")]),t._v(" 的值 "),s("code",[t._v("null")])]),s("li",[s("code",[t._v("parentNode")]),t._v(" 是 Document")]),s("li",[t._v("没有子节点。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("DocumentType包含着与文档的 "),e("code",[this._v("doctype")]),this._v(" 有关的所有信息，它具有下列特征：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在DOM1级中，DocumentType 对象不能动态创建，而只能通过解析文档代码的方式来创建。支持它的浏览器会把 DocumentType 对象保存在 "),e("code",[this._v("document.doctype")]),this._v(" 中")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"documentfragment-类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#documentfragment-类型","aria-hidden":"true"}},[this._v("#")]),this._v(" DocumentFragment 类型")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("nodeType")]),t._v(" 的值为 11；")]),s("li",[s("code",[t._v("nodeName")]),t._v(' 的值为"#document-fragment"；')]),s("li",[s("code",[t._v("nodeValue")]),t._v(" 的值 "),s("code",[t._v("null")])]),s("li",[s("code",[t._v("parentNode")]),t._v(" 是 "),s("code",[t._v("null")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("使用 "),e("code",[this._v("document.createDocumentFragment()")]),this._v(" 创建.  在将文档片段作为添加到文档树时，实际上只会将文档片段的所有子节点添加到相应位置上；文档片段本身永远不会成为文档树的一部分。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"attr-类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#attr-类型","aria-hidden":"true"}},[this._v("#")]),this._v(" Attr 类型")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("nodeType")]),t._v(" 的值为 2；")]),s("li",[s("code",[t._v("nodeName")]),t._v(" 的值是特性的名称；")]),s("li",[s("code",[t._v("nodeValue")]),t._v(" 的值是特性的值；")]),s("li",[s("code",[t._v("parentNode")]),t._v(" 是 "),s("code",[t._v("null")])])])}],!1,null,null,null);e.default=n.exports}}]);