(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{254:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"递归"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#递归","aria-hidden":"true"}},[t._v("#")]),t._v(" 递归")]),a("p",[t._v("递归是一种应用非常广泛的算法（或者编程技巧）")]),a("p",[t._v("假如你在站在一个队伍中, 你想知道你在队伍中的具体位置.  于是你就问站在你前面的那个人, 那么人也不清楚, 他就继续问他前面的人.  就这样一个一个地问下去, 一直问道站在队伍中的第一个人.  以他的位置为 '1', 之后他后面的人再在前一个人位置的基础上 '+1'.  一直把位置返回到你这里, 你就知道你的位置了.")]),a("p",[t._v("这就是一个非常标准的递归求解问题的分解过程，"),a("strong",[t._v("去的过程叫“递”, 回来的过程叫“归”")]),t._v("。")]),a("p",[t._v("所有的递归问题都可以用递推公式来表示, 刚刚这个生活中的例子，我们用递推公式将它表示出来就是这样的："),a("code",[t._v("f(n)=f(n-1)+1")]),t._v(" 其中，"),a("code",[t._v("f(1)=1")])]),a("p",[a("code",[t._v("f(n)")]),t._v(" 表示你想知道自己的位置，"),a("code",[t._v("f(n-1)")]),t._v(" 表示前面一个人所在的位置，"),a("code",[t._v("f(1)=1")]),t._v(" 表示第一个的人知道自己在第一个。")]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v('// 通过 "递归公式", 写出 "递归代码"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("x")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("x")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("x")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 结果为 10")]),t._v("\n")])])]),a("h2",{attrs:{id:"递归需要满足的三个条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#递归需要满足的三个条件","aria-hidden":"true"}},[t._v("#")]),t._v(" 递归需要满足的三个条件")]),a("p",[t._v("那究竟什么样的问题可以用递归来解决呢？我总结了三个条件，只要同时满足以下三个条件，就可以用递归来解决。")]),a("ol",[a("li",[a("strong",[t._v("一个问题的解可以分解为几个子问题的解")])])]),a("p",[t._v('子问题就是数据规模更小的问题。就像前面例子中, 将 "想知道自己所在位置" , 分解成 "想知道前一个人的位置"')]),a("ol",{attrs:{start:"2"}},[a("li",[a("strong",[t._v("这个问题与分解之后的子问题，除了数据规模不同，求解思路完全一样")])])]),a("p",[t._v('前面例子中, "想知道自己所在位置" 和 "想知道前一个人的位置" 的思路是一样的.')]),a("ol",{attrs:{start:"3"}},[a("li",[a("strong",[t._v("存在递归终止条件")])])]),a("p",[t._v("把问题分解为子问题，把子问题再分解为子子问题，一层一层分解下去，不能存在无限循环，这就需要有终止条件。")]),a("p",[t._v("前面例子中, 站在一个的人, 它知道自己的位置为 '1', 不需要再问别人.")]),a("h2",{attrs:{id:"如何编写递归代码？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何编写递归代码？","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何编写递归代码？")]),a("p",[t._v("写递归代码最关键的是"),a("strong",[t._v("写出递推公式，找到终止条件")]),t._v("，剩下将递推公式转化为代码就很简单了。")]),a("p",[t._v("例题:")]),a("p",[t._v("假如这里有 n 个台阶，每次你可以跨 1 个台阶或者 2 个台阶，请问走这 n 个台阶有多少种走法？")]),a("p",[t._v("如果有 7 个台阶，你可以 2，2，2，1 这样子上去，也可以 1，2，1，1，2 这样子上去，总之走法有很多，那如何用编程求得总共有多少种走法呢？")]),a("p",[t._v("实际上，可以根据第一步的走法把所有走法分为两类:")]),a("ul",[a("li",[t._v("第一步走了 1 个台阶")]),a("li",[t._v("第一步走了 2 个台阶")])]),a("p",[t._v("所以 n 个台阶的走法就等于先走 1 阶后, n-1 个台阶的走法, 加上先走 2 阶后，n-2 个台阶的走法。用公式表示就是：")]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("f(n) = f(n-1) + f(n-2)\n")])])]),a("p",[t._v("当有一个台阶时，我们不需要再继续递归，就只有一种走法。所以 f(1)=1。当剩两个台阶时, 有两种走法, 一步走完或者分两步来走。")]),a("p",[t._v("递归终止条件和刚刚得到的递推公式放到一起就是这样的：")]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("f(1) = 1;\nf(2) = 2;\nf(n) = f(n-1) + f(n-2)\n")])])]),a("p",[t._v("递归代码:")]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("x")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("x")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("x")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token function"}},[t._v("x")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("50")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("计算机擅长做重复的事情，所以递归正和它的胃口。而我们人脑更喜欢平铺直叙的思维方式。当我们看到递归时，我们总想把递归平铺展开，脑子里就会循环，一层一层往下调，然后再一层一层返回，试图想搞清楚计算机每一步都是怎么执行的，这样就很容易被绕进去.")]),a("p",[t._v("那正确的思维方式应该是怎样的呢？")]),a("p",[a("strong",[t._v("如果一个问题 A 可以分解为若干子问题 B、C、D，你可以假设子问题 B、C、D 已经解决，在此基础上思考如何解决问题 A")]),t._v("。")]),a("p",[t._v("而且，你只需要思考问题 A 与子问题 B、C、D 两层之间的关系即可，不需要一层一层往下思考子问题与子子问题.")]),a("h2",{attrs:{id:"递归代码要警惕堆栈溢出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#递归代码要警惕堆栈溢出","aria-hidden":"true"}},[t._v("#")]),t._v(" 递归代码要警惕堆栈溢出")]),a("p",[t._v("在实际的软件开发中，编写递归代码时，很容易堆栈溢出。而堆栈溢出会造成系统性崩溃，后果会非常严重。")]),a("p",[t._v("函数调用会使用栈来保存临时变量。每调用一个函数，都会将临时变量封装为栈帧压入内存栈，等函数执行完成返回时，才出栈。如果递归求解的数据规模很大，调用层次很深，一直压入栈，就会有堆栈溢出的风险。")]),a("p",[t._v("如何避免出现堆栈溢出呢？")]),a("p",[t._v("我们可以通过在代码中限制递归调用的最大深度的方式来解决这个问题.  但这种做法并不能完全解决问题，因为最大允许的递归深度跟当前线程剩余的栈空间大小有关，事先无法计算。所以，如果最大深度比较小，比如 10、50，就可以用这种方法, 否则这种方法并不是很实用。")]),a("h2",{attrs:{id:"递归代码要警惕重复计算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#递归代码要警惕重复计算","aria-hidden":"true"}},[t._v("#")]),t._v(" 递归代码要警惕重复计算")]),a("p",[a("img",{attrs:{src:"https://i.imgur.com/EsiFkX0.jpg",alt:"e7e778994e90265344f6ac9da39e01bf"}})]),a("p",[t._v("想要计算 f(5)，需要先计算 f(4) 和 f(3)，而计算 f(4) 还需要计算 f(3)，因此，f(3) 就被计算了很多次，这就是重复计算问题。")]),a("p",[t._v("为了避免重复计算，我们可以通过一个数据结构（比如散列表）来保存已经求解过的 f(k)。")]),a("p",[t._v("当递归调用到 f(k) 时，先看下是否已经求解过了。如果是，则直接从散列表中取值返回，")]),a("h2",{attrs:{id:"怎么将递归代码改写为非递归代码？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#怎么将递归代码改写为非递归代码？","aria-hidden":"true"}},[t._v("#")]),t._v(" 怎么将递归代码改写为非递归代码？")]),a("p",[t._v("递归有利有弊，利是递归代码的表达力很强，写起来非常简洁；而弊就是空间复杂度高、有堆栈溢出的风险、存在重复计算、过多的函数调用会耗时较多等问题。所以，在开发过程中，我们要根据实际情况来选择是否需要用递归的方式来实现。")]),a("p",[t._v("比如前面排队的那个问题就可以改写成下面这样:")]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("x")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// \b\b\b可确定的第一个人位置为 '1'")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{attrs:{class:"token operator"}},[t._v("++")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        result "),a("span",{attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token function"}},[t._v("x")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("笼统地讲，所有的递归代码都可以改为这种"),a("strong",[t._v("迭代循环")]),t._v("的非递归写法。因为递归本身就是借助栈来实现的，只不过我们使用的栈是系统或者虚拟机本身提供的，如果我们自己在内存堆上实现栈，手动模拟入栈、出栈过程，这样任何递归代码都可以改写成看上去不是递归代码的样子。")]),a("p",[t._v("但本质并没有变，而且也并没有解决前面讲到的某些问题，徒增了实现的复杂度.")]),a("p",[t._v("极客时间版权所有: https://time.geekbang.org/column/article/41440")]),a("p",[t._v("极客时间版权所有: https://time.geekbang.org/column/article/41440")]),a("p",[t._v("极客时间版权所有: https://time.geekbang.org/column/article/41440")]),a("p",[t._v("极客时间版权所有: https://time.geekbang.org/column/article/41440")]),a("p",[t._v("极客时间版权所有: https://time.geekbang.org/column/article/41440")]),a("p",[t._v("极客时间版权所有: https://time.geekbang.org/column/article/41440")]),a("p",[t._v("极客时间版权所有: https://time.geekbang.org/column/article/41440")]),a("p",[t._v("极客时间版权所有: https://time.geekbang.org/column/article/41440")]),a("p",[t._v("极客时间版权所有: https://time.geekbang.org/column/article/41440")]),a("p",[t._v("极客时间版权所有: https://time.geekbang.org/column/article/41440\n极客时间版权所有: https://time.geekbang.org/column/article/41440")]),a("p",[t._v("极客时间版权所有: https://time.geekbang.org/column/article/41440")]),a("p",[t._v("极客时间版权所有: https://time.geekbang.org/column/article/41440")]),a("p",[t._v("极客时间版权所有: https://time.geekbang.org/column/article/41440")]),a("p",[t._v("极客时间版权所有: https://time.geekbang.org/column/article/41440")]),a("p",[t._v("极客时间版权所有: https://time.geekbang.org/column/article/41440")]),a("p",[t._v("极客时间版权所有: https://time.geekbang.org/column/article/41440")]),a("p",[t._v("极客时间版权所有: https://time.geekbang.org/column/article/41440")]),a("p",[t._v("极客时间版权所有: https://time.geekbang.org/column/article/41440")]),a("p",[t._v("极客时间版权所有: https://time.geekbang.org/column/article/41440\n极客时间版权所有: https://time.geekbang.org/column/article/41440")])])}],!1,null,null,null);s.default=e.exports}}]);