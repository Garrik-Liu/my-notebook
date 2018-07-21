(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{162:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"基础概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础概念","aria-hidden":"true"}},[t._v("#")]),t._v(" 基础概念")]),a("p",[t._v("Node.js 是一个使用"),a("strong",[t._v("单线程, 事件驱动、非阻塞式 (异步式) I/O")]),t._v(" 的模型, 基于 "),a("strong",[t._v("Chrome V8 引擎")]),t._v("的 "),a("strong",[t._v("JavaScript 运行环境")]),t._v("。\b允许 J\bs 可以\b脱离浏览器去执行.")]),a("blockquote",[a("p",[t._v("要实现在后台运行 JavaScript 代码，代码需要先被解释然后正确的执行。Node.js 的原理正是如此，它使用了 Google 的 V8 虚拟机（ Google 的 Chrome 浏览器使用的 JavaScript 执行环境，来解释和执行 JavaScript 代码。")])]),a("h2",{attrs:{id:"单线程-非阻塞-i-o-和-事件驱动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单线程-非阻塞-i-o-和-事件驱动","aria-hidden":"true"}},[t._v("#")]),t._v(" 单线程, 非阻塞 I/O 和 事件驱动")]),a("p",[t._v("Node.js 最大的特点就是应用 非阻塞 I/O 与 事件驱动的编程模式。")]),a("h3",{attrs:{id:"什么是阻塞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是阻塞","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是阻塞?")]),a("p",[t._v("在说非阻塞\b之前, 先了解什么是阻塞.\n线程在执行中如果遇到磁盘读写或网络通信(统称为 I/O 操作)， 通常要耗费较长的时间.  这时候操作系统会剥夺这个线程的 CPU 控制权，使其暂停执行，同时将资源让给其他的工作线程，这种线程调度方式称为阻塞。\n当 I/O 操作完毕时，操作系统 将这个线程的阻塞状态解除，恢复其对CPU的控制权，令其继续执行。这种 I/O 模式就是通常的 "),a("strong",[t._v("阻塞式 I/O")])]),a("p",[t._v("相应地，异步式 I/O 则针对 所有 I/O 操作不采用阻塞的策略。当线程遇到 I/O 操作时，不会以阻塞的方式等待 I/O 操作 的完成或数据的返回. 而只是将 I/O 请求发送给操作系统，继续执行下一条语句。\n当操作 系统完成 I/O 操作时，以事件的形式通知执行 I/O 操作的线程，线程会在特定时候处理这个 事件。为了处理异步 I/O，线程必须有事件循环，不断地检查有没有未处理的事件，依次予以处理。这种 I/O 模式就是通常的 "),a("strong",[t._v("非阻塞式 I/O")])]),a("h3",{attrs:{id:"非阻塞好处"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#非阻塞好处","aria-hidden":"true"}},[t._v("#")]),t._v(" 非阻塞好处")]),a("p",[t._v("因为采用了非阻塞, 个线程永远在执行计算操作，这个线程所使用的 CPU 核心利用率几近是 100%，可以提高服务器的利用率, 提高系统吞吐量.")]),a("p",[t._v("假设我们有一项工作，可以分为两个计算部分和一个 I/O 部分，I/O 部分占的时间比计算多得多。如果我们使用阻塞 I/O，那么要想获得高并发就必须开启多个线程。而使用异步式 I/O 时，单线程即可胜任。")]),a("p",[a("img",{attrs:{src:"https://i.imgur.com/SW5NWqi.png",alt:"Screen Shot 2018-07-12 at 4.37.15 PM"}})]),a("p",[a("img",{attrs:{src:"https://i.imgur.com/FAfPumU.png",alt:"Screen Shot 2018-07-12 at 4.37.22 PM"}})]),a("p",[t._v("总而言之, 使用单线程事件驱动的异步式 I/O 可以\b避免服务器对于多线程的开销, 提高对服务器CPU性能的利用效率. 不好的\b地方, 可以就在于理解起来不直观\b吧.")]),a("p",[a("img",{attrs:{src:"https://i.imgur.com/PofEKRT.png",alt:"Screen Shot 2018-07-12 at 4.41.05 PM"}})]),a("h2",{attrs:{id:"回调函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回调函数","aria-hidden":"true"}},[t._v("#")]),t._v(" 回调函数")]),a("p",[t._v("在 Node.js 中，异步式 I/O 是通过回调函数来实现的。")]),a("p",[t._v("先看看代码的不同:")]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 同步式读取文件")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fs "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'fs'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" data "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" fs"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("readFileSync")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'file.txt'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'utf-8'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 异步式读取文件")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fs "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'fs'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfs"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("readFile")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'file.txt'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'utf-8'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("同步式读取代码将文件名作为参数传入 "),a("code",[t._v("fs.readFileSync")]),t._v(" 函 数，阻塞等待读取完成后，将文件的内容作为函数的返回值赋给 data 变量")]),a("p",[t._v("异步式读取文件是通过回调函数来实现的. fs.readFile 接收了三个参数， 第一个是文件名，第二个是编码方式，第三个是一个函数，我们称这个函数为回调函数。\n"),a("code",[t._v("fs.readFile")]),t._v(" 调用时所做的工作只是将异步式 I/O 请求发送给了操作系统，然后立即 返回并执行后面的语句，执行完以后进入事件循环监听事件。当 fs 接收到 I/O 请求完成的事件时，事件循环会主动调用回调函数以完成后续工作。")]),a("h2",{attrs:{id:"事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件")]),a("p",[t._v("Node.js 所有的异步 I/O 操作在完成时都会发送一个事件到事件队列。事件由 "),a("code",[t._v("EventEmitter")]),t._v(" 对象提供。")]),a("p",[t._v("EventEmitter 使用例子:")]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 引入 events 模块")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" events "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'events'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 创建 eventEmitter 对象")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" event "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("events"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EventEmitter")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 注册事件 \bsome_event")]),t._v("\nevent"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("on")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'some_event'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'some_event occured.'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 触发事件 some_event")]),t._v("\n    event"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("emit")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'some_event'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("代码运行一秒后, 控制台输出 'some_event occured'.")]),a("p",[t._v("运行机制是 "),a("code",[t._v("event")]),t._v(" 对象 注册了事件 "),a("code",[t._v("some_event")]),t._v(" 的一个监听器, 通过 setTimeout 在1000毫秒以后向 "),a("code",[t._v("event")]),t._v(" 对象发送事件 "),a("code",[t._v("some_event")]),t._v("，此时会调用绑定在 "),a("code",[t._v("some_event")]),t._v("监听器上的事件处理函数。")]),a("h2",{attrs:{id:"事件循环机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件循环机制","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件循环机制")]),a("p",[t._v("Node.js 在什么时候会进入事件循环呢? 答案是 Node.js 始终在事件循环中.")]),a("p",[t._v("Node.js 程序由事件循环开始，到事件循环结束，所有的逻辑都是事件的回调函数. 程序入口就是事件循环第一个事件的回调函数。事件的回调函数在执行的过程中，可能会发出 I/O 请求或 直接发射(emit)事件，执行完毕后再返回事件循环，事件循环会检查事件队列中有没有未处理的事件，直到程序结束。")]),a("p",[t._v("Node.js的事件循环对开发者是不可见, 所有的一切均被 EventEmitter 封装")]),a("p",[a("img",{attrs:{src:"https://i.imgur.com/6rc1C5Y.png",alt:"Screen Shot 2018-07-12 at 5.07.35 PM"}})])])}],!1,null,null,null);s.default=e.exports}}]);