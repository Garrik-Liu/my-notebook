(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{340:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"复杂度分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复杂度分析"}},[t._v("#")]),t._v(" 复杂度分析")]),t._v(" "),a("p",[t._v("简单说, 复杂度分析就是不用具体的测试数据来测试，就可以粗略地估计算法的执行效率的方法")]),t._v(" "),a("h2",{attrs:{id:"大-o-复杂度表示法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#大-o-复杂度表示法"}},[t._v("#")]),t._v(" 大 O 复杂度表示法")]),t._v(" "),a("p",[t._v("算法的执行效率，粗略地讲，就是算法代码执行的时间。")]),t._v(" "),a("p",[t._v("先举个例子:")]),t._v(" "),a("div",{staticClass:"language-C extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("看上面这一段代码, 求 1,2,3…n 的累加和.  估算一下这段代码的执行时间。这段代码的每一行都执行着类似的操作：读数据-运算-写数据。假设每行代码执行的时间都一样，为  unit_time。")]),t._v(" "),a("p",[t._v("第 2、3 行代码分别需要 1 个 unit_time 的执执行时间，第 4、5 行都运行了 n 遍，所以需要 "),a("code",[t._v("2n * unit_time")]),t._v(" 的执行时间，所以这段代码总的执行时间就是 "),a("code",[t._v("(2n+2) * unit_time")])]),t._v(" "),a("p",[t._v("可以看出来，所有代码的执行时间 T(n) 与"),a("strong",[t._v("每行代码的执行次数成正比")]),t._v("。")]),t._v(" "),a("p",[t._v("这个规律总结成一个公式:")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/lqlpF7W.png",alt:"22900968aa2b190072c985a08b0e92ef"}})]),t._v(" "),a("ul",[a("li",[a("code",[t._v("T(n)")]),t._v(" 我们已经讲过了，它表示代码执行的时间；")]),t._v(" "),a("li",[a("code",[t._v("n")]),t._v(" 表示数据规模的大小；")]),t._v(" "),a("li",[a("code",[t._v("f(n)")]),t._v(" 表示每行代码执行的次数总和。")]),t._v(" "),a("li",[a("code",[t._v("O")]),t._v(" 表示代码的执行时间 "),a("code",[t._v("T(n)")]),t._v(" 与 "),a("code",[t._v("f(n)")]),t._v(" 表达式成正比")])]),t._v(" "),a("p",[t._v("所以，上面例子用大 O 时间复杂度表示法表示就是 "),a("code",[t._v("T(n) = O(2n+2)")])]),t._v(" "),a("p",[t._v("大 O 时间复杂度实际上并不具体表示代码真正的执行时间，而是表示"),a("strong",[t._v("代码执行时间随数据规模增长的变化趋势")]),t._v("，所以，也叫作"),a("strong",[t._v("渐进时间复杂度，简称时间复杂度")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"时间复杂度分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#时间复杂度分析"}},[t._v("#")]),t._v(" 时间复杂度分析")]),t._v(" "),a("p",[t._v("如何分析一段代码的时间复杂度？我这儿有三个比较实用的方法可以分享给你。")]),t._v(" "),a("h3",{attrs:{id:"_1-只关注循环执行次数最多的一段代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-只关注循环执行次数最多的一段代码"}},[t._v("#")]),t._v(" 1. 只关注循环执行次数最多的一段代码")]),t._v(" "),a("p",[t._v("我们在分析一个算法、一段代码的时间复杂度的时候，也只关注循环执行次数最多的那一段代码就可以了。")]),t._v(" "),a("p",[t._v("这段核心代码执行次数的 n 的量级，就是整段要分析代码的时间复杂度。")]),t._v(" "),a("p",[t._v("还是前面的例子, 第 2, 3 行都是常量级执行时间, 对时间复杂度没有什么影响.  我们只关注 for 循环里面的代码就可以了.  循环中的代码被执行了 n 次, 所以复杂度就是  O(n)。")]),t._v(" "),a("h3",{attrs:{id:"_2-加法法则：总复杂度等于量级最大的那段代码的复杂度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-加法法则：总复杂度等于量级最大的那段代码的复杂度"}},[t._v("#")]),t._v(" 2. 加法法则：总复杂度等于量级最大的那段代码的复杂度")]),t._v(" "),a("p",[t._v("先看下面这一段代码:")]),t._v(" "),a("div",{staticClass:"language-C extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" sum_1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     sum_1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sum_1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" sum_2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" q "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" q "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     sum_2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sum_2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n \n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" sum_3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       sum_3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sum_3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("  i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n \n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" sum_1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" sum_2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" sum_3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这上面一有三个循环, 第一个循环里面代码执行了 100 次, 所以是一个常量的执行时间，跟 n 的规模无关。( 这里要记住, 无论常量级执行时间有多大, 都忽略掉, 因为我们研究是算法执行效率与数据规模"),a("strong",[t._v("增长")]),t._v("的变化趋势. )")]),t._v(" "),a("p",[t._v("第二个循环的复杂度是 O(n), 第三个是 O(n^2).")]),t._v(" "),a("p",[t._v("综合这三段代码的时间复杂度，我们取其中最大的量级。所以，整段代码的时间复杂度就为 O(n^2)。")]),t._v(" "),a("p",[t._v("也就是说："),a("strong",[t._v("总的时间复杂度就等于量级最大的那段代码的时间复杂度")])]),t._v(" "),a("h3",{attrs:{id:"_3-乘法法则：嵌套代码的复杂度等于嵌套内外代码复杂度的乘积"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-乘法法则：嵌套代码的复杂度等于嵌套内外代码复杂度的乘积"}},[t._v("#")]),t._v(" 3. 乘法法则：嵌套代码的复杂度等于嵌套内外代码复杂度的乘积")]),t._v(" "),a("p",[t._v("如果 "),a("code",[t._v("T1(n) = O(f(n))")]),t._v("，"),a("code",[t._v("T2(n) = O(g(n))")]),t._v("；那么 "),a("code",[t._v("T(n) = T1(n) * T2(n) = O(f(n)) * O(g(n)) = O(f(n) * g(n))")]),t._v(".")]),t._v(" "),a("p",[t._v("落实到具体的代码上，我们可以把乘法法则看成是嵌套循环")]),t._v(" "),a("div",{staticClass:"language-C extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" ret "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ret "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ret "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("我们单独看 "),a("code",[t._v("cal()")]),t._v(" 函数。假设 "),a("code",[t._v("f()")]),t._v(" 只是一个普通的操作, 那么 "),a("code",[t._v("cal()")]),t._v(" 函数的复杂度是 O(n).  但 "),a("code",[t._v("f()")]),t._v(" 函数的\b复杂度也是 O(n), 所以 "),a("code",[t._v("cal()")]),t._v(" 函数的复杂度就是, "),a("code",[t._v("T(n) = T1(n) * T2(n) = O(n*n) = O(n^2)")])]),t._v(" "),a("h2",{attrs:{id:"几种常见时间复杂度实例分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#几种常见时间复杂度实例分析"}},[t._v("#")]),t._v(" 几种常见时间复杂度实例分析")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/I1uuKxG.jpg",alt:"3723793cc5c810e9d5b06bc95325bf0a"}})]),t._v(" "),a("p",[t._v("我们可以粗略地分为两类，"),a("strong",[t._v("多项式量级")]),t._v(" 和 "),a("strong",[t._v("非多项式量级")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/sm2Lima.jpg",alt:"497a3f120b7debee07dc0d03984faf04"}})]),t._v(" "),a("p",[t._v("它们所花时间的比较")]),t._v(" "),a("h3",{attrs:{id:"非多项式量级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#非多项式量级"}},[t._v("#")]),t._v(" 非多项式量级")]),t._v(" "),a("p",[t._v("其中，非多项式量级只有两个："),a("code",[t._v("O(2n)")]),t._v(" 和 "),a("code",[t._v("O(n!)")]),t._v("。")]),t._v(" "),a("p",[t._v("我们把时间复杂度为非多项式量级的算法问题叫作 "),a("strong",[t._v("NP")]),t._v("（Non-Deterministic Polynomial，非确定多项式）问题。")]),t._v(" "),a("p",[t._v("当数据规模 n 越来越大时，非多项式量级算法的执行时间会急剧增加, 所以这是一种非常低效的算法")]),t._v(" "),a("h3",{attrs:{id:"多项式量级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多项式量级"}},[t._v("#")]),t._v(" 多项式量级")]),t._v(" "),a("h4",{attrs:{id:"_1-o-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-o-1"}},[t._v("#")]),t._v(" 1. O(1)")]),t._v(" "),a("p",[t._v("O(1) 只是常量级时间复杂度的一种表示方法，并不是指只执行了一行代码。")]),t._v(" "),a("p",[t._v("只要代码的执行时间不随 n 的增大而增长，这样代码的时间复杂度我们都记作 O(1)。")]),t._v(" "),a("h4",{attrs:{id:"_2-o-logn-、o-nlogn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-o-logn-、o-nlogn"}},[t._v("#")]),t._v(" 2. O(logn)、O(nlogn)")]),t._v(" "),a("p",[t._v("对数时间复杂度非常常见，同时也是最难分析的一种时间复杂度。")]),t._v(" "),a("p",[t._v("我们先来看一\b段代码:")]),t._v(" "),a("div",{staticClass:"language-C extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("从代码中可以看出，变量 i 的值从 1 开始取，每循环一次就乘以 2. 当大于 n 时，循环结束。")]),t._v(" "),a("p",[t._v("实际上，变量 i 的取值就是一个等比数列。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/lxW8Dfu.jpg",alt:"9b1c88264e7a1a20b5954be9bc4bec9a"}})]),t._v(" "),a("p",[t._v("所以，我们只要知道 x 值是多少，就知道这行代码执行的次数了")]),t._v(" "),a("p",[t._v("通过 "),a("code",[t._v("2 ^ x = n")]),t._v(" 求解 "),a("code",[t._v("x")]),t._v(". "),a("code",[t._v("x = log2n")]),t._v(" 这段代码的时间复杂度就是 "),a("code",[t._v("O(log2n)")]),t._v("。")]),t._v(" "),a("p",[t._v("实际上，不管是以 2 为底、以 3 为底，还是以 10 为底，我们可以把所有对数阶的时间复杂度都记为 "),a("code",[t._v("O(logn)")]),t._v("。\b")]),t._v(" "),a("p",[t._v("\b原因很简单, 就拿上面的例子举例.  "),a("code",[t._v("O(log2n) = O(logn / log2)")]),t._v(".  "),a("code",[t._v("O(log2)")]),t._v(" 是一个常量, 我们就把它忽略掉了")]),t._v(" "),a("h4",{attrs:{id:"_3-o-m-n-、o-m-n"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-o-m-n-、o-m-n"}},[t._v("#")]),t._v(" 3. O(m+n)、O(m*n)")]),t._v(" "),a("p",[t._v("先看代码:")]),t._v(" "),a("div",{staticClass:"language-C extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" sum_1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    sum_1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sum_1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" sum_2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    sum_2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sum_2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" sum_1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" sum_2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("从代码中可以看出，m 和 n 是表示两个数据规模。我们无法事先评估 m 和 n 谁的量级大，所以我们在表示复杂度的时候，就不能简单地利用加法法则，省略掉其中一个。所以，上面代码的时间复杂度就是 "),a("code",[t._v("O(m+n)")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"空间复杂度分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#空间复杂度分析"}},[t._v("#")]),t._v(" 空间复杂度分析")]),t._v(" "),a("p",[t._v("前面我讲过，时间复杂度的全称是渐进时间复杂度，表示"),a("strong",[t._v("算法的执行时间与数据规模之间的增长关系")]),t._v("。类比一下，空间复杂度全称就是渐进空间复杂度，表示"),a("strong",[t._v("算法的存储空间与数据规模之间的增长关系")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-C extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    print out a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("可以看到, 第 2 行代码中，我们申请了一个空间存储变量 i，它是常量阶的，跟数据规模 n 没有关系，所以我们可以忽略。 第 3 行申请了一个大小为 n 的 int 类型数组，除此之外，剩下的代码都没有占用更多的空间，所以整段代码的空间复杂度就是 "),a("code",[t._v("O(n)")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"时间复杂度进阶知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#时间复杂度进阶知识"}},[t._v("#")]),t._v(" 时间复杂度进阶知识")]),t._v(" "),a("h3",{attrs:{id:"最好、最坏情况时间复杂度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最好、最坏情况时间复杂度"}},[t._v("#")]),t._v(" 最好、最坏情况时间复杂度")]),t._v(" "),a("div",{staticClass:"language-C extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// n 表示数组 array 的长度")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" pos "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       pos "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" pos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("上面这段代码中, 要查找的变量 x 可能出现在数组的任意位置。如果数组中第一个元素正好是要查找的变量 x，那就不需要继续遍历剩下的 n-1 个数据了，那时间复杂度就是 O(1)。但如果数组中不存在变量 x，那我们就需要把整个数组都遍历一遍，时间复杂度就成了 O(n)。")]),t._v(" "),a("p",[t._v("为了表示代码在不同情况下的不同时间复杂度，我们需要引入三个概念：最好情况时间复杂度、最坏情况时间复杂度和平均情况时间复杂度。")]),t._v(" "),a("p",[a("strong",[t._v("最好情况时间复杂度就是，在最理想的情况下，，执行这段代码的时间复杂度。")])]),t._v(" "),a("p",[a("strong",[t._v("最坏情况时间复杂度就是，在最糟糕的情况下，执行这段代码的时间复杂度。")])]),t._v(" "),a("h3",{attrs:{id:"平均情况时间复杂度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#平均情况时间复杂度"}},[t._v("#")]),t._v(" 平均情况时间复杂度")]),t._v(" "),a("p",[t._v("为了更好地表示平均情况下的复杂度，我们需要引入另一个概念：平均情况时间复杂度，后面我简称为平均\b时间复杂度")]),t._v(" "),a("p",[t._v("还是拿上面找\b变量 X 在数组中的位置的例子:")]),t._v(" "),a("p",[t._v("要查找的变量 x 在数组中的位置，有 n+1 种情况："),a("strong",[t._v("在数组的 0～n-1 位置中和不在数组中")]),t._v("。")]),t._v(" "),a("p",[t._v("我们把每种情况下，查找需要遍历的元素个数累加起来，然后再除以 n+1，就可以得到需要遍历的元素个数的平均值，即：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/8ILNkFg.png",alt:"Screen Shot 2018-10-01 at 1.12.28 PM"}})]),t._v(" "),a("p",[t._v("咱们把刚刚这个公式简化之后，得到的平均时间复杂度就是 "),a("code",[t._v("O(n)")])]),t._v(" "),a("p",[t._v("但是上面这种计算方法其实存在问题.  我们知道，要查找的变量 x，要么在数组里，要么就不在数组里。我们假设在数组中与不在数组中的概率都为 1/2。要查找的数据出现在 0～n-1 这 n 个位置的概率也是一样的，为 1/n。根据概率乘法法则，要查找的数据出现在 0～n-1 中任意位置的概率就是 1/(2n)。")]),t._v(" "),a("p",[t._v("前面的推导过程中存在的最大问题就是，没有将各种情况发生的"),a("strong",[t._v("概率")]),t._v("考虑进去。如果我们把每种情况发生的概率也考虑进去，那平均时间复杂度的计算过程就变成了这样：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/FuO0HMx.png",alt:"Screen Shot 2018-10-01 at 1.16.45 PM"}})]),t._v(" "),a("p",[t._v("这个值就是概率论中的"),a("strong",[t._v("加权平均值")]),t._v("，也叫作"),a("strong",[t._v("期望值")]),t._v("，所以平均时间复杂度的全称应该叫"),a("strong",[t._v("加权平均时间复杂度")]),t._v("或者"),a("strong",[t._v("期望时间复杂度")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"均摊时间复杂度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#均摊时间复杂度"}},[t._v("#")]),t._v(" 均摊时间复杂度")]),t._v(" "),a("p",[t._v("均摊时间复杂度，听起来跟平均时间复杂度有点儿像。大部分情况下，我们并不需要区分最好、最坏、平均三种复杂度。平均复杂度只在某些特殊情况下才会用到，而均摊时间复杂度应用的场景比它更加特殊、更加有限。")]),t._v(" "),a("p",[t._v("下次再说:\n"),a("a",{attrs:{href:"https://time.geekbang.org/column/article/40447",target:"_blank",rel:"noopener noreferrer"}},[t._v("链接"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);