(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{286:function(t,a,s){"use strict";s.r(a);var r=s(0),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[t._v("#")]),t._v(" 数据类型")]),t._v(" "),s("p",[t._v("JavaScript 有七种内置类型：")]),t._v(" "),s("ul",[s("li",[t._v("基本类型\n"),s("ul",[s("li",[t._v("空值（ null ）")]),t._v(" "),s("li",[t._v("未定义（ undefined ）")]),t._v(" "),s("li",[t._v("布尔值（ boolean ）")]),t._v(" "),s("li",[t._v("数字（ number ）")]),t._v(" "),s("li",[t._v("字符串（ string ）")]),t._v(" "),s("li",[t._v("符号（ symbol ）")])])]),t._v(" "),s("li",[t._v("引用类型\n"),s("ul",[s("li",[t._v("对象（ object ）")])])])]),t._v(" "),s("h2",{attrs:{id:"基本类型-引用类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本类型-引用类型"}},[t._v("#")]),t._v(" 基本类型 & 引用类型")]),t._v(" "),s("h3",{attrs:{id:"栈内存-堆内存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#栈内存-堆内存"}},[t._v("#")]),t._v(" 栈内存 & 堆内存")]),t._v(" "),s("p",[t._v('在 JavaScript 中，每一个数据都需要一个内存空间。内存空间又被分为两种，"栈内存" (stock) 与 "堆内存" (heap)。')]),t._v(" "),s("h4",{attrs:{id:"栈内存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#栈内存"}},[t._v("#")]),t._v(" 栈内存")]),t._v(" "),s("p",[t._v('栈是一个 "后进先出" 的结构。当把数据放入栈时，我们把数据 Push 进入；当从栈取出数据时，我们把数据 Pop 出来。')]),t._v(" "),s("h4",{attrs:{id:"堆内存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#堆内存"}},[t._v("#")]),t._v(" 堆内存")]),t._v(" "),s("p",[t._v("堆（英语：Heap）是计算机科学中的一种特别的树状数据结构。")]),t._v(" "),s("p",[t._v("堆\b内存允许程序在运行时动态地申请某个大小的内存空间。")]),t._v(" "),s("h3",{attrs:{id:"基本类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本类型"}},[t._v("#")]),t._v(" 基本类型")]),t._v(" "),s("p",[t._v("除 Object 以外的所有类型都是不可变的（值本身无法被改变）, 这些类型被称为 『 基本类型/原始数据类型 』 ( primitive values )")]),t._v(" "),s("p",[t._v('基本类型在内存中 "占据空间小、大小固定" ，他们的值保存在栈内存中，按 "值" 来进行访问.')]),t._v(" "),s("p",[t._v("原始值是不可更改的, 你只能给代表它的变量重新赋值，将原来的值覆盖.")]),t._v(" "),s("p",[t._v("拿字符串举例, 要改变某个变量保存的字符串，首先要销毁原来的字符串，然后再用另一个包含新值的字符串填充该变量.")]),t._v(" "),s("h3",{attrs:{id:"引用类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引用类型"}},[t._v("#")]),t._v(" 引用类型")]),t._v(" "),s("p",[t._v('引用类型 "占据空间大、大小不固定", 储存在堆内存中。按 "引用" 来进行访问.')]),t._v(" "),s("p",[t._v("当创建一个引用类型时, 堆内存为这个值分配空间.  因为其大小不固定, 所有不能储存在栈内存中.  但其内存地址大小固定, 因此将引用类型的内存地址储存在栈内存中.")]),t._v(" "),s("p",[t._v("当查询引用类型的变量时, 先从栈内存读取内存地址, 然后在去堆内存找实际的值.")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.loli.net/2019/02/23/5c710090063a3.png",alt:"7c13147ecfecd8a6ce7f0b5a9782dd30"}})]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("指针?")]),t._v(" "),s("p",[t._v("在计算机科学中，指针（英语：Pointer），是编程语言中的一类数据类型及其对象或变量.  "),s("strong",[t._v("用来表示或存储一个存储器地址，这个地址的值直接指向存在该地址的对象的值。")])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("储存器?")]),t._v(" "),s("p",[t._v("存储器（Memory）是现代信息技术中用于保存信息的记忆设备。在数字系统中，"),s("strong",[t._v("只要能保存二进制数据的都可以是存储器")]),t._v(". 在系统中，具有实物形式的存储设备也叫存储器，如内存条、TF卡等。")])]),t._v(" "),s("h2",{attrs:{id:"类型简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类型简介"}},[t._v("#")]),t._v(" 类型简介")]),t._v(" "),s("h4",{attrs:{id:"undefined"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#undefined"}},[t._v("#")]),t._v(" Undefined")]),t._v(" "),s("p",[t._v("Undefined 类型只有一个值，即 "),s("code",[t._v("undefined")]),t._v(".  当一个变量被声明, 但没被初始化时, 其值为 "),s("code",[t._v("undefined")]),t._v(".")]),t._v(" "),s("h4",{attrs:{id:"null"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#null"}},[t._v("#")]),t._v(" Null")]),t._v(" "),s("p",[t._v("Null 类型只有一个值："),s("code",[t._v("null")]),t._v(", 表示一个空对象指针.")]),t._v(" "),s("p",[t._v("如果定义的变量准备用于保存对象，那么最好将该变量初始化为 "),s("code",[t._v("null")]),t._v(" 而不是其他值.")]),t._v(" "),s("h4",{attrs:{id:"boolean"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#boolean"}},[t._v("#")]),t._v(" Boolean")]),t._v(" "),s("p",[t._v("Boolean 类型只有两个字面值："),s("code",[t._v("true")]),t._v(" 和 "),s("code",[t._v("false")])]),t._v(" "),s("h4",{attrs:{id:"number"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#number"}},[t._v("#")]),t._v(" Number")]),t._v(" "),s("p",[t._v("JavaScript 使用 IEEE 754 标准的双精度 64 位 (8字节) 二进制格式的值 "),s("code",[t._v("( -(2^63 - 1) 到 2^63 - 1)")]),t._v(" 作为 Number 类型.")]),t._v(" "),s("h4",{attrs:{id:"string"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#string"}},[t._v("#")]),t._v(" String")]),t._v(" "),s("p",[t._v("String 类型用于表示文本数据.  由 16位 Unicode 字符组成. 在创建时, 由双引号（\"）或单引号（'）起始或者结束.")]),t._v(" "),s("p",[t._v("在字符串中每个字符占据一个位置, 第一个元素的索引为 0，下一个是索引 1，依此类推。")]),t._v(" "),s("h4",{attrs:{id:"symbol"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#symbol"}},[t._v("#")]),t._v(" Symbol")]),t._v(" "),s("p",[t._v("Symbol 类型的值由 "),s("code",[t._v("Symbol()")]),t._v(" 创建.  Symbol 值是唯一且不可改变的.")]),t._v(" "),s("p",[t._v("该类型通常被用作一个对象属性的键值.")]),t._v(" "),s("h4",{attrs:{id:"object"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object"}},[t._v("#")]),t._v(" Object")]),t._v(" "),s("p",[t._v("在计算机科学中, 对象是指内存中的可以被 标识符引用的一块区域.")]),t._v(" "),s("p",[t._v("在 Javascript 里，对象可以被看作是一组属性和方法的集合。")]),t._v(" "),s("h2",{attrs:{id:"单体内置对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单体内置对象"}},[t._v("#")]),t._v(" 单体内置对象")]),t._v(" "),s("p",[t._v('ECMA-262 对内置对象的定义是："'),s("strong",[t._v("由 ECMAScript 实现提供的、不依赖于宿主环境的对象，这些对象在 ECMAScript 程序执行之前就已经存在了")]),t._v('"。\n意思就是说，开发人员不必显式地实例化内置对象，因为它们已经实例化了。可以在全局作用域里访问到它们')]),t._v(" "),s("p",[t._v("具体的内容可以直接参考下面 👇 链接:")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN 单体内置对象"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"global-对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#global-对象"}},[t._v("#")]),t._v(" Global 对象")]),t._v(" "),s("p",[s("strong",[t._v("所有在全局作用域中定义的属性和函数，都是 Global 对象的属性")]),t._v("。")]),t._v(" "),s("p",[t._v("ECMAScript 没有指出如何直接访问 Global对象，但浏览器将这个全局对象作为 "),s("code",[t._v("window")]),t._v(" 对象的一部分加以实现.  因此，在全局作用域中声明的所有变量和函数，在浏览器上就都成为了 "),s("code",[t._v("window")]),t._v(" 对象的属性。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" color "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"red"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sayColor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sayColor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//"red"')]),t._v("\n")])])]),s("h2",{attrs:{id:"类型转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类型转换"}},[t._v("#")]),t._v(" 类型转换")]),t._v(" "),s("p",[t._v("JavaScript 中有两种类型转换："),s("strong",[t._v("显式")]),t._v(" 与 "),s("strong",[t._v("隐式")]),t._v("。")]),t._v(" "),s("p",[t._v("显式的类型转换就是 你可以在代码中看到的类型由一种转换到另一种，而隐式的类型转换多是某些运算可能存在的隐式副作用而引发的类型转换。")]),t._v(" "),s("h3",{attrs:{id:"基本包装类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本包装类型"}},[t._v("#")]),t._v(" 基本包装类型")]),t._v(" "),s("p",[t._v("为了便于操作基本类型值，ECMAScript 还提供了3个特殊的对象："),s("code",[t._v("Boolean()")]),t._v("、"),s("code",[t._v("Number()")]),t._v(" 和 "),s("code",[t._v("String()")]),t._v(". 每当读取一个基本类型值的时候，后台就会创建一个对应的基本包装类型实例，从而让我们能够调用一些方法来操作这些数据。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"some text"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("substring")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("上面这段代码执行时, 后台自动做了如下处理:")]),t._v(" "),s("ol",[s("li",[t._v("创建 String 类型的一个实例；")]),t._v(" "),s("li",[t._v("在 String 实例上调用指定的方法；")]),t._v(" "),s("li",[t._v("销毁这个实例;")])]),t._v(" "),s("h4",{attrs:{id:"生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("new")]),t._v(" 操作符创建的对象实例，在执行流离开当前作用域之前都一直保存在内存中。而自动创建的基本包装类型的实例，则只存在于一行代码的执行瞬间。这意味着我们不能在运行时为基本类型值添加属性和方法。")]),t._v(" "),s("p",[t._v("要注意的是，使用 "),s("code",[t._v("new")]),t._v(" 调用基本包装类型的构造函数，与直接调用同名的转型函数是不一样的。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"25"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" number "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//转型函数")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//"number"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//构造函数")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//"object"')]),t._v("\n")])])]),s("h3",{attrs:{id:"显式转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#显式转换"}},[t._v("#")]),t._v(" 显式转换")]),t._v(" "),s("h3",{attrs:{id:"隐式转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#隐式转换"}},[t._v("#")]),t._v(" 隐式转换")]),t._v(" "),s("h3",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")]),t._v(" == & ===")])])}),[],!1,null,null,null);a.default=e.exports}}]);