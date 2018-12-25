(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{182:function(t,a,s){"use strict";s.r(a);var n=s(0),v=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用域","aria-hidden":"true"}},[t._v("#")]),t._v(" 作用域")]),s("h2",{attrs:{id:"什么是作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是作用域","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是作用域")]),s("p",[t._v("简单来说, 『 作用域 』就是一套用来储存变量, 操纵变量的"),s("strong",[t._v("规则")]),t._v(".")]),s("h3",{attrs:{id:"传统编译原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#传统编译原理","aria-hidden":"true"}},[t._v("#")]),t._v(" 传统编译原理")]),s("p",[t._v("尽管我们通常将 JavaScript 归类为“动态”或“解释执行”语言，但事实上它是一门编译语言。但与传统的编译语言不同，它不是提前编译的，JavaScript 的编译过程不是发生在构建之前的。简单地说，任何 JavaScript 代码片段在执行前都要进行编译（通常 就在 执行前）。")]),s("p",[t._v("在"),s("strong",[t._v("传统编译语言")]),t._v("的流程中，程序中的一段源代码在执行之前会经历三个步骤，统称为“编译”。")]),s("ul",[s("li",[s("p",[s("strong",[t._v("分词/词法分析")]),t._v("（Tokenizing/Lexing）\n将由字符组成的 字符串 分解成（对编程语言来说）有意义的 代码块，这些 代码块 被称为 『 词法单元（token） 』。例如，"),s("code",[t._v("var a = 2;")]),t._v(" 这段程序通常会被分解成为下面这些词法单元： "),s("code",[t._v("var")]),t._v(", "),s("code",[t._v("a")]),t._v(", "),s("code",[t._v("=")]),t._v(", "),s("code",[t._v("2")]),t._v(", "),s("code",[t._v(";")]),t._v(".")])]),s("li",[s("p",[s("strong",[t._v("解析/语法分析")]),t._v("（Parsing）\n将 『 词法单元流（数组） 』转换成一个由元素逐级嵌套所组成的代表了程序语法\n结构的树, 被称为 『 抽象语法树 』（Abstract Syntax Tree，AST）。"),s("code",[t._v("var a = 2;")]),t._v(" 的抽象语法树中可能会有一个叫作 "),s("code",[t._v("VariableDeclaration")]),t._v(" 的顶级节点，接下来是一个叫作 "),s("code",[t._v("Identifier")]),t._v(" （它的值是 "),s("code",[t._v("a")]),t._v(" ）的子节点，以及一个叫作 "),s("code",[t._v("AssignmentExpression")]),t._v(" 的子节点。 "),s("code",[t._v("AssignmentExpression")]),t._v(" 节点有一个叫作 "),s("code",[t._v("NumericLiteral")]),t._v(" （它的值是 "),s("code",[t._v("2")]),t._v(" ）的子节点。")])]),s("li",[s("p",[s("strong",[t._v("代码生成")]),t._v("\n将 抽象语法树 (AST) 转换为 可执行代码的过程 称被称为代码生成。这个过程与语言、目标平台等相关。简单来说就是有某种方法可以将 "),s("code",[t._v("var a = 2;")]),t._v(" 的 抽象语法树 (AST) 转化为一组『 机器指令 』，用来创建一个叫作 "),s("code",[t._v("a")]),t._v(" 的变量（包括分配内存等），并将一个值储存在 "),s("code",[t._v("a")]),t._v(" 中。")])])]),s("h3",{attrs:{id:"初步理解作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初步理解作用域","aria-hidden":"true"}},[t._v("#")]),t._v(" 初步理解作用域")]),s("p",[t._v("下面用拟人对话的形式, 模拟 "),s("code",[t._v("var a = 2;")]),t._v(" 这段代码的处理过程.")]),s("p",[t._v("参与到的角色有:")]),s("ul",[s("li",[s("p",[t._v("引擎\n从头到尾负责整个 JavaScript 程序的编译及执行过程。")])]),s("li",[s("p",[t._v("编译器\n引擎的好朋友之一，负责语法分析及代码生成等")])]),s("li",[s("p",[t._v("作用域\n引擎的另一位好朋友， 负责收集并维护所有声明的标识符（变量），并实施一套非常严格的规则，确定当前执行的代码对这些标识符的访问权限。")])])]),s("p",[t._v("编译器首先会将这段程序分解成词法单元，然后将词法单元解析成一个树结构。当编译器开始进行代码生成时，它会进行如下处理:")]),s("ul",[s("li",[s("p",[t._v("遇到 "),s("code",[t._v("var a")]),t._v(" ，编译器会询问作用域是否已经有一个该名称的变量存在于同一个作用域的集合中。如果是，编译器会忽略该声明，继续进行编译；否则它会要求作用域在当前作用域的集合中声明一个新的变量，并命名为 "),s("code",[t._v("a")])])]),s("li",[s("p",[t._v("接下来编译器会为引擎生成运行时所需的代码，这些代码被用来处理 "),s("code",[t._v("a = 2")]),t._v(" 这个赋值操作。 引擎运行时会首先询问作用域， 在当前的作用域集合中是否存在一个叫作 "),s("code",[t._v("a")]),t._v(" 的变量。 如果是，引擎就会使用这个变量；如果否，引擎会继续查找该变量.如果引擎最终找到了 "),s("code",[t._v("a")]),t._v(" 变量， 就会将 "),s("code",[t._v("2")]),t._v(" 赋值给它。 否则引擎就会抛出异常.")])])]),s("h3",{attrs:{id:"作用域嵌套"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用域嵌套","aria-hidden":"true"}},[t._v("#")]),t._v(" 作用域嵌套")]),s("p",[t._v("实际情况中，通常需要同时顾及几个作用域。当一个块或函数嵌套在另一个块或函数中时，就发生了作用域的嵌套。因此，在当前作用域中无法找到某个变量时，引擎就会在外层嵌套的作用域中继续查找，直到找到该变量，或抵达最外层的作用域（也就是全局作用域）为止。")]),s("h2",{attrs:{id:"词法作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#词法作用域","aria-hidden":"true"}},[t._v("#")]),t._v(" 词法作用域")]),s("p",[t._v("在第1章中，我们将“作用域”定义为一套规则，这套规则用来管理引擎如何在当前作用域以及嵌套的子作用域中根据标识符名称进行变量查找。")]),s("p",[t._v("作用域共有两种主要的工作模型。第一种是最为普遍的，被大多数编程语言所采用的 "),s("strong",[t._v("词法作用域")]),t._v("，另外一种叫作 "),s("strong",[t._v("动态作用域")])]),s("h3",{attrs:{id:"词法阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#词法阶段","aria-hidden":"true"}},[t._v("#")]),t._v(" 词法阶段")]),s("p",[t._v("大部分标准语言编译器的第一个工作阶段叫作"),s("strong",[t._v("词法化")]),t._v("（单词化）")]),s("p",[t._v("简单地说，"),s("strong",[t._v("词法作用域就是定义在词法阶段的作用域")]),t._v("。")]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("foo")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" a "),s("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("bar")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" a"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c "),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token function"}},[t._v("bar")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" b "),s("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("3")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("foo")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 2, 4, 12")]),t._v("\n")])])]),s("p",[t._v("在这个例子中有三个逐级嵌套的作用域。")]),s("p",[t._v("作用域的结构和互相之间的位置关系给引擎提供了足够的位置信息，引擎用这些信息来查找标识符的位置。")]),s("p",[t._v("作用域查找始终从运行时所处的最内部作用域开始，逐级向外或者说向上进行，直到遇见第一个匹配的标识符为止。"),s("strong",[t._v("作用域查找会在找到第一个匹配的标识符时停止。")])]),s("p",[t._v("引擎执行"),s("code",[t._v("console.log(..)")]),t._v("声明，并查找"),s("code",[t._v("a")]),t._v("、"),s("code",[t._v("b")]),t._v(" 和 "),s("code",[t._v("c")]),t._v(" 三个变量的引用。它首先从最内部的作用域，也就是"),s("code",[t._v("bar(..)")]),t._v("函数的作用域气泡开始查找。引擎无法在这里找到"),s("code",[t._v("a")]),t._v("，因此会去上一级到所嵌套的"),s("code",[t._v("foo(..)")]),t._v("的作用域中继续查找。在这里找到了"),s("code",[t._v("a")]),t._v("，因此引擎使用了这个引用。对"),s("code",[t._v("b")]),t._v("来讲也是一样的。而对"),s("code",[t._v("c")]),t._v("来说，引擎在"),s("code",[t._v("bar(..)")]),t._v("中就找到了它。")]),s("h3",{attrs:{id:"欺骗词法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#欺骗词法","aria-hidden":"true"}},[t._v("#")]),t._v(" 欺骗词法")]),s("p",[t._v("无论函数在哪里被调用，也无论它如何被调用，"),s("strong",[t._v("函数的词法作用域都只由函数被声明时所处的位置决定")]),t._v("。")]),s("p",[t._v("如果词法作用域完全由写代码期间函数所声明的位置来定义，怎样才能在运行时来“修改”（也可以说欺骗）词法作用域呢？")]),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),s("p",[t._v("欺骗词法作用域会导致性能下降。")])]),s("p",[t._v("JavaScript 中有两种机制来实现这个目的:")]),s("ul",[s("li",[s("code",[t._v("eval")])]),s("li",[s("code",[t._v("with")])])]),s("h4",{attrs:{id:"eval"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#eval","aria-hidden":"true"}},[t._v("#")]),s("code",[t._v("eval")])]),s("p",[s("code",[t._v("eval(..)")]),t._v(" 函数可以接受一个字符串为参数，并将其中的内容视为好像在书写时就存在于程序中这个位置的代码, 换句话说，可以在你写的代码中用程序生成代码并运行，就好像（词法期）代码就在那。")]),s("p",[t._v("在执行· 之后的代码时，引擎并不“在意”前面的代码是以动态形式插入进来，并对词法作用域的环境进行修改的。引擎只会如往常地进行词法作用域查找。")]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("foo")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token function"}},[t._v("eval")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" str "),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 欺骗！")]),t._v("\n    console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" a"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b "),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("foo")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"var b = 3;"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 1, 3")]),t._v("\n")])])]),s("p",[s("code",[t._v("var b = 3;")]),t._v(" 声明了一个新的变量 "),s("code",[t._v("b")]),t._v("。 因此它对已经存在的"),s("code",[t._v("foo(..)")]),t._v(" 的词法作用域进行了修改。也就是这段代码实际上在"),s("code",[t._v("foo(..)")]),t._v("内部创建了一个变量"),s("code",[t._v("b")]),t._v("，并遮蔽了外部（全局）作用域中的同名变量。")]),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),s("p",[t._v("在严格模式的程序中，"),s("code",[t._v("eval(..)")]),t._v(" 在运行时有其自己的词法作用域，意味着其中的声明无法修改所在的作用域。")])]),s("h4",{attrs:{id:"with"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#with","aria-hidden":"true"}},[t._v("#")]),s("code",[t._v("with")])]),s("p",[s("code",[t._v("with")]),t._v(" 通常被当作重复引用同一个对象中的多个属性的快捷方式")]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    a"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    b"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    c"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("3")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v('// 单调乏味的重复"obj"')]),t._v("\nobj"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nobj"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("3")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nobj"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("4")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 简单的快捷方式")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    a "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("3")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    b "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("4")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    c "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("5")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("再看另外一个例子：")]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("foo")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        a "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" o1 "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    a"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("3")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" o2 "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    b"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("3")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{attrs:{class:"token function"}},[t._v("foo")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" o1 "),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" o1"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n\n"),s("span",{attrs:{class:"token function"}},[t._v("foo")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" o2 "),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" o2"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n\nconsole"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" a "),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 2, a 被泄漏到全局作用域上了！")]),t._v("\n")])])]),s("p",[t._v("这个例子中创建了 "),s("code",[t._v("o1")]),t._v(" 和 "),s("code",[t._v("o2")]),t._v(" 两个对象。其中一个具有"),s("code",[t._v("a")]),t._v("属性，另外一个没有。"),s("code",[t._v("foo(..)")]),t._v(" 函数接受一个 "),s("code",[t._v("obj")]),t._v(" 参数，该参数是一个对象引用，并对这个对象引用执行了"),s("code",[t._v("with(obj) {..}")]),t._v("。")]),s("p",[t._v("在 "),s("code",[t._v("with")]),t._v(" 块内部，我们写的代码看起来只是对变量 "),s("code",[t._v("a")]),t._v(" 进行简单的词法引用，实际上就是一个\nLHS 引用，并将2 赋值给它。")]),s("p",[t._v("当我们将 "),s("code",[t._v("o1")]),t._v(" 传递进去，"),s("code",[t._v("a ＝ 2")]),t._v(" 赋值操作找到了"),s("code",[t._v("o1.a")]),t._v(" 并将"),s("code",[t._v("2")]),t._v(" 赋值给它.  而当 "),s("code",[t._v("o2")]),t._v(" 传递进去，"),s("code",[t._v("o2")]),t._v(" 并没有"),s("code",[t._v("a")]),t._v(" 属性，因此不会创建这个属性，"),s("code",[t._v("o2.a")]),t._v(" 保持 "),s("code",[t._v("undefined")]),t._v("。但是可以注意到一个奇怪的副作用，实际上"),s("code",[t._v("a = 2")]),t._v(" 赋值操作创建了一个全局的变量"),s("code",[t._v("a")]),t._v("。")]),s("p",[s("code",[t._v("with")]),t._v(" 可以"),s("strong",[t._v("将一个没有或有多个属性的对象处理为一个 完全隔离 的词法作用域")]),t._v("，因此这个对象的属性也会被处理为定义在这个作用域中的词法标识符。")]),s("p",[t._v("也就是， "),s("code",[t._v("o2")]),t._v(" 的作用域、"),s("code",[t._v("foo(..)")]),t._v(" 的作用域和全局作用域中都没有找到标识符"),s("code",[t._v("a")]),t._v("，因此当"),s("code",[t._v("a＝2")]),t._v(" 执行\n时，自动创建了一个全局变量（因为是非严格模式）。")]),s("h4",{attrs:{id:"性能问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#性能问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 性能问题")]),s("p",[s("code",[t._v("eval(..)")]),t._v(" 和 "),s("code",[t._v("with")]),t._v(" 会在运行时修改或创建新的作用域，以此来欺骗其他在书写时定义的词\n法作用域。")]),s("p",[t._v("但那又怎样呢？如果它们能实现更复杂的功能，并且代码更具有扩展性，难道不是非常好的功能吗？"),s("strong",[t._v("答案是否定的")]),t._v("。")]),s("p",[t._v("JavaScript 引擎会在编译阶段进行数项的性能优化。其中有些优化依赖于能够根据代码的词法进行静态分析，并预先确定所有变量和函数的定义位置，才能在执行过程中快速找到标识符。")]),s("p",[t._v("但如果引擎在代码中发现了"),s("code",[t._v("eval(..)")]),t._v(" 或"),s("code",[t._v("with")]),t._v("，它只能简单地假设关于标识符位置的判断都是无效的，因为无法在词法分析阶段明确知道"),s("code",[t._v("eval(..)")]),t._v(" 会接收到什么代码，这些代码会如何对作用域进行修改，也无法知道传递给"),s("code",[t._v("with")]),t._v(" 用来创建新词法作用域的对象的内容到底是什么。可能所有的优化可能都是无意义的，因此最简\n单的做法就是完全不做任何优化。"),s("strong",[t._v("如果没有这些优化，代码会运行得更慢")])]),s("p",[t._v("另外一个不推荐使用 "),s("code",[t._v("eval(..)")]),t._v(" 和 "),s("code",[t._v("with")]),t._v(" 的原因是会被 "),s("strong",[t._v("严格模式")]),t._v(" 所限制。")]),s("h2",{attrs:{id:"函数作用域-块作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数作用域-块作用域","aria-hidden":"true"}},[t._v("#")]),t._v(" 函数作用域 & 块作用域")]),s("p",[t._v("很多人认为 JavaScript 具有基于函数的作用域，意味着每声明一个函数都会为其自身创建一个作用域，而其他结构都不会创建作用域。但事实上这并不完全正确.")]),s("p",[t._v("函数作用域的含义是指，"),s("strong",[t._v("属于这个函数的全部变量都可以在整个函数的范围内使用及复用")])]),s("p",[t._v("对函数的传统认知就是先声明一个函数，然后再向里面添加代码。但反过来想也可以带来 一些启示：从所写的代码中挑选出一个任意的片段，然后用函数声明对它进行包装，实际 上就是把这些代码“隐藏”起来了。实际的结果就是"),s("strong",[t._v("在这个代码片段的周围创建了一个作用域")]),t._v(", 也就是说这段代码中的任 何声明（变量或函数）都将绑定在这个新创建的包装函数的作用域中.")]),s("h3",{attrs:{id:"为什么要-隐藏"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么要-隐藏","aria-hidden":"true"}},[t._v("#")]),t._v(' 为什么要 "隐藏"?')]),s("h4",{attrs:{id:"最小暴露原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最小暴露原则","aria-hidden":"true"}},[t._v("#")]),t._v(" 最小暴露原则")]),s("p",[t._v('有很多原因促成了这种基于作用域的隐藏方法。 它们大都是从 "最小特权原则" 中引申出来 的，也叫 "最小授权" 或 "最小暴露原则"。')]),s("p",[t._v("这个原则是指在软件设计中，应该"),s("strong",[t._v("最小限度地暴露必要内容")]),t._v("，而将其他内容都“隐藏”起来.")]),s("p",[t._v("如果所有的变量和函数\b都在全局作用域中可以访问, 这可能会暴漏过多的变量或函数，而这些变量或函数本应该是私有的.  正确的代码应该是可以阻止对这些变量或函数进行访问的。")]),s("h4",{attrs:{id:"避免冲突"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#避免冲突","aria-hidden":"true"}},[t._v("#")]),t._v(" 避免冲突")]),s("p",[t._v("“隐藏”作用域中的变量和函数所带来的另一个好处，是可以避免同名标识符之间的冲突.")]),s("p",[t._v("变量冲突的一个典型例子存在于全局作用域中。当程序中加载了多个第三方库时，如果它 们没有妥善地将内部私有的函数或变量隐藏起来，就会很容易引发冲突。")]),s("h3",{attrs:{id:"函数作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数作用域","aria-hidden":"true"}},[t._v("#")]),t._v(" 函数作用域")]),s("p",[t._v("我们已经知道， 在任意代码片段外部添加包装函数， 可以将内部的变量和函数定义“隐 藏”起来，外部作用域无法访问包装函数内部的任何内容。")]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("foo")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("3")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" a "),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 3")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n\nconsole"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" a "),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n")])])]),s("p",[t._v("上面这段代码中, 声明一个具名函数 "),s("code",[t._v("foo()")]),t._v(" ，意味着 "),s("code",[t._v("foo")]),t._v(" 这个名称本身“"),s("strong",[t._v("污染")]),t._v("”了所在作用域（在这个 例子中是全局作用域）。其次，必须显式地通过函数名调用这个函数才能运行其中的代码。")]),s("p",[t._v("如果函数不需要函数名（或者至少函数名可以不污染所在作用域），并且能够自动运行， 这将会更加理想。")]),s("p",[t._v("JavaScript 提供了能够同时解决这两个问题的方案:")]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("foo")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("3")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" a "),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 3")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\nconsole"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" a "),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n")])])]),s("p",[t._v("上面代码中, 函数会被"),s("strong",[t._v("当作函数表达式")]),t._v("而不是一个标准的函数声明来处理。")]),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),s("p",[t._v("区分函数声明和表达式最简单的方法是看 "),s("code",[t._v("function")]),t._v(" 关键字出现在声明中的位置.  如果 "),s("code",[t._v("function")]),t._v(" 是声明中的第一个词，那么就是一个函数声明，否则就是一个函数表达式。")])])])}],!1,null,null,null);a.default=v.exports}}]);