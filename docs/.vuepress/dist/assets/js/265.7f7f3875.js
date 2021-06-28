(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{474:function(t,s,a){"use strict";a.r(s);var r=a(0),v=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"迭代器-组合模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#迭代器-组合模式"}},[t._v("#")]),t._v(" 迭代器 & 组合模式")]),t._v(" "),a("h2",{attrs:{id:"现实案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#现实案例"}},[t._v("#")]),t._v(" 现实案例")]),t._v(" "),a("ul",[a("li",[t._v("现在有两个餐馆。他们各自实现了自己的餐点类；")]),t._v(" "),a("li",[t._v("虽然两个人用了相同的菜单项类 MenuItem (单个菜的类)；")]),t._v(" "),a("li",[t._v("但是两个人用了不同的方式储存各自的菜单项；\n"),a("ul",[a("li",[t._v("A 用了 ArrayList();")]),t._v(" "),a("li",[t._v("B 用了数组；")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-23-18-28-35.png",alt:"2020-2-23-18-28-35.png"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-23-18-27-27.png",alt:"2020-2-23-18-27-27.png"}})]),t._v(" "),a("ul",[a("li",[t._v("如果想要同时打印出两个菜单的所有菜单项，就要实现两种不同的遍历方式；")]),t._v(" "),a("li",[t._v("如果又有其他店家采用了新的储存方式，我们就有要新加一种遍历方式；")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-23-18-30-46.png",alt:"2020-2-23-18-30-46.png"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-23-18-31-12.png",alt:"2020-2-23-18-31-12.png"}})]),t._v(" "),a("h4",{attrs:{id:"上面实现的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上面实现的问题"}},[t._v("#")]),t._v(" 上面实现的问题")]),t._v(" "),a("ul",[a("li",[t._v("遍历代码是针对两个菜单类的具体实现来编码的，而不是针对接口；")]),t._v(" "),a("li",[t._v("遍历代码需要知道每个菜单类内部是如何储存菜单项集合的，这违反了封装；")]),t._v(" "),a("li",[t._v("违反了开放-封闭原则，如果另一种储存方式的菜单类出现，我们就要改遍历代码；")]),t._v(" "),a("li",[t._v("有重复代码，上面用来两个 for-loop；")])]),t._v(" "),a("h2",{attrs:{id:"迭代器模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#迭代器模式"}},[t._v("#")]),t._v(" 迭代器模式")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("迭代器模式")]),t._v("："),a("strong",[t._v("提供一种方法顺序访问一个聚合对象中的每个元素，而又不暴露其内部的实现")]),t._v("；")]),t._v(" "),a("li",[t._v("我们需要创造一个迭代接口，接口中定义了用于遍历的方法；")]),t._v(" "),a("li",[t._v("之后再定义迭代器类，让它们去针对不同的集合类型，去实现迭代接口；")]),t._v(" "),a("li",[t._v("通过迭代模式，客户使用一种接口，透过迭代器对象就可以遍历不同类型的集合；")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-23-18-57-29.png",alt:"2020-2-23-18-57-29.png"}})]),t._v(" "),a("h2",{attrs:{id:"用迭代器改写案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用迭代器改写案例"}},[t._v("#")]),t._v(" 用迭代器改写案例")]),t._v(" "),a("ul",[a("li",[t._v("定义迭代接口；")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Iterator")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasNext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回布尔值，判断是否后面还有元素")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回下一个元素")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("分别实现各自的迭代类；")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-23-18-47-55.png",alt:"2020-2-23-18-47-55.png"}})]),t._v(" "),a("ul",[a("li",[t._v("改写菜单类，增加方法 "),a("code",[t._v("createIterator")]),t._v(" 去创建迭代器实例并返回；")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-23-18-51-15.png",alt:"2020-2-23-18-51-15.png"}})]),t._v(" "),a("ul",[a("li",[t._v("客户去使用迭代器进行遍历；")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-23-18-50-37.png",alt:"2020-2-23-18-50-37.png"}})]),t._v(" "),a("ul",[a("li",[t._v("上面的代码 Waitress 类和两个菜单类耦合在了一起；")]),t._v(" "),a("li",[t._v("因为两个菜单类都有相同的 "),a("code",[t._v("createIterator")]),t._v(" 方法，所以我们可以抽象出一个 Menu 接口；")]),t._v(" "),a("li",[t._v("这样让 Waitress 类针对 Menu 接口编程，就可以降低耦合性了；")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-23-18-56-40.png",alt:"2020-2-23-18-56-40.png"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-23-18-56-54.png",alt:"2020-2-23-18-56-54.png"}})]),t._v(" "),a("h2",{attrs:{id:"单一职责"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单一职责"}},[t._v("#")]),t._v(" 单一职责")]),t._v(" "),a("ul",[a("li",[t._v("上面的例子中，菜单类只负责储存菜单项集合，并不符合遍历集合；")]),t._v(" "),a("li",[t._v("如果我们让菜单类，即储存集合，又负责遍历集合；")]),t._v(" "),a("li",[t._v("那么我们就给了他两个变化的原因。集合储存方式改变时，我们要改变菜单类，遍历方式改变时，菜单类也要改变；")]),t._v(" "),a("li",[a("strong",[t._v("单一职责")]),t._v("："),a("strong",[t._v("一个类应该只有一个引起变化的原因")]),t._v("；")]),t._v(" "),a("li",[t._v("当类的变化原因增多时，出现 BUG 的几率也增加;")]),t._v(" "),a("li",[a("strong",[t._v("当一个模块或一个类被设计成只支持一组相关的功能时")]),t._v(",我们说它具有 “"),a("strong",[t._v("高内聚")]),t._v("”；")]),t._v(" "),a("li",[t._v("内聚用来度量一个类或模块，紧密地达成单一职责的程度；")])]),t._v(" "),a("hr"),t._v(" "),a("ul",[a("li",[t._v("🌰 下面 👇 的 Game 类就可以拆分成另外三个类：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-23-19-7-23.png",alt:"2020-2-23-19-7-23.png"}})]),t._v(" "),a("h2",{attrs:{id:"现实案例-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#现实案例-2"}},[t._v("#")]),t._v(" 现实案例")]),t._v(" "),a("ul",[a("li",[t._v("现在菜单出现了新的变化；")]),t._v(" "),a("li",[t._v("菜单之间可以嵌套；")]),t._v(" "),a("li",[t._v("我们需要能够在遍历所有的菜单上的菜单项；")]),t._v(" "),a("li",[t._v("也需要能够遍历指定的某个菜单；")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-23-19-39-24.png",alt:"2020-2-23-19-39-24.png"}})]),t._v(" "),a("h2",{attrs:{id:"组合模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组合模式"}},[t._v("#")]),t._v(" 组合模式")]),t._v(" "),a("ul",[a("li",[t._v("组合模式：允许你将对象组合成树形结构，来表现 “整体/部分” 的层次结构。组合能让客户已一致的方式处理个别对象以及组合对象；")]),t._v(" "),a("li",[t._v("组合模式让我们能够用树形方式创建对象的结构，树里面包含了组合以及个别的对象；")]),t._v(" "),a("li",[t._v("使用组合结构，我们能把相同的操作应用在组合和个别对象上；")]),t._v(" "),a("li",[t._v("也就是，在大多数情况下，我们可以 “忽略” 对象组合和个别对象之间的差别；")])]),t._v(" "),a("h4",{attrs:{id:"用组合模式设计菜单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用组合模式设计菜单"}},[t._v("#")]),t._v(" 用组合模式设计菜单")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-23-20-47-55.png",alt:"2020-2-23-20-47-55.png"}})]),t._v(" "),a("ul",[a("li",[t._v("先来实现菜单组件 MenuComponent；")]),t._v(" "),a("li",[t._v("菜单组件提供了一个接口，让菜单项（叶节点）和菜单（组合节点）共同使用；")]),t._v(" "),a("li",[t._v("菜单组价是个抽象类，里面定义了一堆接口，有的是给菜单项用的，有的是给菜单用的；")]),t._v(" "),a("li",[t._v("在菜单组件中，让方法默认抛出一个异常，这样如果菜单项或菜单不支持这个操作，他们不同做任何事情，直接继承实现就行了，默认就是抛出异常；")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-23-20-51-0.png",alt:"2020-2-23-20-51-0.png"}})]),t._v(" "),a("ul",[a("li",[t._v("实现菜单项，在树结构中是 “叶节点”；")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-23-20-54-14.png",alt:"2020-2-23-20-54-14.png"}})]),t._v(" "),a("ul",[a("li",[t._v("实现菜单。在树结构中是 “组合节点”；")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-23-20-55-49.png",alt:"2020-2-23-20-55-49.png"}})]),t._v(" "),a("ul",[a("li",[t._v("注意菜单类的 "),a("code",[t._v("print")]),t._v(" 方法的实现；")]),t._v(" "),a("li",[t._v("因为菜单是一个组合，其中包括菜单项和其他的菜单；")]),t._v(" "),a("li",[t._v("为了打印出它内部包含的所有菜品，我们采用递归的形式来实现；\n"),a("ul",[a("li",[t._v("先用迭代器来遍历集合中的每一项；")]),t._v(" "),a("li",[t._v("如果是菜单项就直接调用它的 "),a("code",[t._v("print")]),t._v(" 方法；")]),t._v(" "),a("li",[t._v("如果是其他菜单，就调用它的 "),a("code",[t._v("print")]),t._v(" 方法，进入一个新的遍历；")]),t._v(" "),a("li",[t._v("直到最后所有的项都遍历完，打印结束；")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-23-20-57-19.png",alt:"2020-2-23-20-57-19.png"}})]),t._v(" "),a("h2",{attrs:{id:"迭代器-组合模式-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#迭代器-组合模式-2"}},[t._v("#")]),t._v(" 迭代器 + 组合模式")]),t._v(" "),a("ul",[a("li",[t._v("在 👆 上面的例子中，我们实现了菜单类的 "),a("code",[t._v("print")]),t._v(" 方法。可以递归地打印出所有的菜品；")]),t._v(" "),a("li",[t._v("但是整个遍历都是自动的，我们不能再此过程中追踪每一个菜品；")]),t._v(" "),a("li",[t._v("我们希望能让客户可以灵活地控制遍历的每一步；")]),t._v(" "),a("li",[t._v("🌰 例如，服务员希望游走整个菜单，然后挑出所有的素菜；")]),t._v(" "),a("li",[t._v("通过 “迭代器 + 组合模式” 的形式，我们可以实现这个功能；")])]),t._v(" "),a("h4",{attrs:{id:"具体实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#具体实现"}},[t._v("#")]),t._v(" 具体实现")]),t._v(" "),a("ul",[a("li",[t._v("之前的菜单组件 MenuComponent 添加方法 "),a("code",[t._v("createIteration")]),t._v(" 用以返回迭代器；")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-23-21-10-38.png",alt:"2020-2-23-21-10-38.png"}})]),t._v(" "),a("ul",[a("li",[t._v("之后在 Menu 和 MenuItem 中分别实现这个方法：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-23-21-11-12.png",alt:"2020-2-23-21-11-12.png"}})]),t._v(" "),a("ul",[a("li",[t._v("因为菜单项 MenuItem 没什么可遍历的，所以返回一个空迭代器；")]),t._v(" "),a("li",[t._v("空迭代器的 "),a("code",[t._v("hasNext()")]),t._v(" 永远返回 false；")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-23-21-12-54.png",alt:"2020-2-23-21-12-54.png"}})]),t._v(" "),a("ul",[a("li",[t._v("实现组合迭代器 CompositeIterator；")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-23-21-15-3.png",alt:"2020-2-23-21-15-3.png"}})]),t._v(" "),a("h4",{attrs:{id:"实现素食菜单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现素食菜单"}},[t._v("#")]),t._v(" 实现素食菜单")]),t._v(" "),a("ul",[a("li",[t._v("现在有了追踪遍历过程的能力后。我们就可以挑选出所有的素食了；")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-23-21-17-30.png",alt:"2020-2-23-21-17-30.png"}})])])}),[],!1,null,null,null);s.default=v.exports}}]);