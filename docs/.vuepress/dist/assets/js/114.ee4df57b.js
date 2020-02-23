(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{324:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"代理模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代理模式"}},[t._v("#")]),t._v(" 代理模式")]),t._v(" "),a("h2",{attrs:{id:"定义代理模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义代理模式"}},[t._v("#")]),t._v(" 定义代理模式")]),t._v(" "),a("ul",[a("li",[t._v("代理模式：为另一个对象提供一个替身，以让别人通过替身来控制对原本对象的访问；")]),t._v(" "),a("li",[t._v("一般来讲，被代理的对象会是远程的对象，创建开销比较大的对象，或者需要安全控制的对象；")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-22-23-55-32.png",alt:"2020-2-22-23-55-32.png"}})]),t._v(" "),a("ul",[a("li",[t._v("Subject 为 RealSubject 和 Proxy 提供了接口；")]),t._v(" "),a("li",[t._v("通过对统一接口的实现，Proxy 在 RealSubject 出现的地方能够替代它；")]),t._v(" "),a("li",[t._v("Proxy 代理并其他对象对 RealSubject 的访问；")]),t._v(" "),a("li",[t._v("Proxy 持有对 RealSubject 的引用，有时还会负责对他的创造和销毁；")]),t._v(" "),a("li",[t._v("所有客户想要与 RealSubject 交互必须通过 Proxy；")])]),t._v(" "),a("h2",{attrs:{id:"虚拟代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#虚拟代理"}},[t._v("#")]),t._v(" 虚拟代理")]),t._v(" "),a("ul",[a("li",[t._v("虚拟代理作为创建开销比较大的对象的替身；")]),t._v(" "),a("li",[t._v("通常在使用虚拟代理时，我们会在真正需要 “被代理对象” 时才创建被代理对象；")]),t._v(" "),a("li",[t._v("在此之前，我们就用虚拟代理对象，来代替真正想要的对象；")]),t._v(" "),a("li",[t._v("等真正需要的对象被创建好后，客户的请求还会通过代理被委托到目标对象上；")])]),t._v(" "),a("h4",{attrs:{id:"加载-cd-封面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加载-cd-封面"}},[t._v("#")]),t._v(" 加载 CD 封面")]),t._v(" "),a("ul",[a("li",[t._v("假如我想在一个音乐 APP 中加载 CD 封面；")]),t._v(" "),a("li",[t._v("因为网络请求会有一个等待时间，在真正的封面被加载来之前，我们需要一个虚拟代理，来先替代一下；")]),t._v(" "),a("li",[t._v("假设我们用 Swing 的 Icon 组件去显示封面；")]),t._v(" "),a("li",[t._v("再封面加载好之前，先用虚拟代理用 Icon 组件显示 “请稍等，封面加载中。。。”")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-23-0-4-0.png",alt:"2020-2-23-0-4-0.png"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-23-0-8-20.png",alt:"2020-2-23-0-8-20.png"}})]),t._v(" "),a("h2",{attrs:{id:"保护代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#保护代理"}},[t._v("#")]),t._v(" 保护代理")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("保护代理，是一种根据访问权限，决定客户是否被允许访问对象的代理")]),t._v("；")]),t._v(" "),a("li",[t._v("🌰 例如：比如有一个对象，通过保护代理，雇员只可以访问其中是几个方法，而经理就可以访问全部的方法；")]),t._v(" "),a("li",[t._v("🌰 保护代理就像是一个明星的经纪人，它会拦截所有外面打进来的电话。然后做一个筛选，只把有用的电话转接给明星；")])]),t._v(" "),a("h3",{attrs:{id:"java-动态代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-动态代理"}},[t._v("#")]),t._v(" Java 动态代理")]),t._v(" "),a("ul",[a("li",[t._v("我们可以利用 Java 的动态代理去实现保护代理；")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-23-10-47-55.png",alt:"2020-2-23-10-47-55.png"}})]),t._v(" "),a("ul",[a("li",[t._v("动态代理，利用 Java 的反射技术(Java Reflection)，在运行时创建一个动态代理类，实现一个或多个接口；")]),t._v(" "),a("li",[t._v("注意：动态代理的是接口，不是类，更不是抽象类；")]),t._v(" "),a("li",[t._v("于此同时，我们还要提供一个实现类 InvocationHandler 接口的实现类。客户对于 Proxy 上任何方法的调用都会被传入此类；")]),t._v(" "),a("li",[t._v("再通过 InvocationHandler 实现类来控制对 RealSubject 的对应方法的访问；")]),t._v(" "),a("li",[t._v("利用 Java 的 Proxy 类，调用 "),a("code",[t._v("Proxy.newProxyInstance()")]),t._v(" 方法就可以创建动态代理；")]),t._v(" "),a("li",[a("code",[t._v("Proxy.newProxyInstance()")]),t._v(" 方法有三个参数:\n"),a("ul",[a("li",[t._v("代理要实现的接口的 “类加载器”；")]),t._v(" "),a("li",[t._v("代理要实现的接口；")]),t._v(" "),a("li",[t._v("InvocationHandler 接口实现类；")])])])]),t._v(" "),a("h3",{attrs:{id:"现实案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#现实案例"}},[t._v("#")]),t._v(" 现实案例")]),t._v(" "),a("ul",[a("li",[t._v("现在我们有一个相亲 App；")]),t._v(" "),a("li",[t._v("里面每个人都可以给其他用户打分（喜欢 or 不喜欢）;")]),t._v(" "),a("li",[t._v("每个用户的个人信息，自己都可以改。但是自己的分数不可以改；")]),t._v(" "),a("li",[t._v("其他用户不可以改别人的个人信息。但是可以给别人打分；")])]),t._v(" "),a("p",[t._v("下面 👇 是用户类的接口 PersonBean：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-23-14-23-44.png",alt:"2020-2-23-14-23-44.png"}})]),t._v(" "),a("ul",[a("li",[t._v("根据需求我们知道，用户不能给自己评分，也不能改变别人的个人信息；用户只能给别人打分，并修改自己的信息；")]),t._v(" "),a("li",[t._v("可以使用保护代理来实现：\n"),a("ul",[a("li",[t._v("首先创建两个 InvocationHandler：\n"),a("ul",[a("li",[t._v("OwnerInvocationHandler 用来处理用户对自己 PersonBean 对象的请求；")]),t._v(" "),a("li",[t._v("NonOwnerInvocationHandler 处理用户对别人 PersonBean 对象的请求；")])])]),t._v(" "),a("li",[t._v("然后我们根据 PersonBean 接口创建一个动态代理；")])])])]),t._v(" "),a("p",[a("strong",[t._v("首先创建 InvocationHandler")]),t._v("：")]),t._v(" "),a("ul",[a("li",[t._v("当代理的方法被调用时，代理就会把这个调用转发给 InvocationHandler；")]),t._v(" "),a("li",[t._v("InvocationHandler 接口中只有一个 "),a("code",[t._v("invoke()")]),t._v(" 方法。不管代理被调用的是什么方法，最后 Handler 处理器被调用的一定是 "),a("code",[t._v("invoke")]),t._v(" 方法；")]),t._v(" "),a("li",[t._v("之后 "),a("code",[t._v("invoke")]),t._v(" 方法内部会去判断如何处理这个请求，可能会转发给 RealSubject 对象，也可能做其他的处理；")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// InvocationHandler 是 java.lang.reflect 包的一部分")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reflect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NonOwnerInvocationHandler")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InvocationHandler")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//把RealSubject要实例进来")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PersonBean")]),t._v(" person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 实例化时，保存对 RealSubject 的引用")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NonOwnerInvocationHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PersonBean")]),t._v(" person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("person "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("invoke")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" proxy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Method")]),t._v(" method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Throwable")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用户可以访问其他用户的信息")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果方法名是 get 开头，就允许调用")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("startsWith")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"get"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("invoke")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用户也可以给其他用户评分")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"setHotOrNotRating"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("invoke")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用户不可以改别人的信息，返回报错")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("startsWith")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"set"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IllegalAccessException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InvocationTargetException")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printStackTrace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//调用其他方法直接不理")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("创建 Proxy 类，并实例化 Proxy 对象")]),t._v("：")]),t._v(" "),a("ul",[a("li",[t._v("现在我们要根据 PersonBean 接口，去创建一个动态代理；")]),t._v(" "),a("li",[t._v("它会把客户对它的方法调用，转发给 👆 上面的两个 InvocationHandler；")]),t._v(" "),a("li",[t._v("需要分别创建两个方法用来获取 Proxy 类。一个针对 NonOwner，另一个针对 Owner；")]),t._v(" "),a("li",[t._v("使用 "),a("code",[t._v("Proxy.newProxyInstance")]),t._v(" 来创建动态代理，分别接受三个参数：\n"),a("ul",[a("li",[t._v("目标接口的类加载器；")]),t._v(" "),a("li",[t._v("目标接口；")]),t._v(" "),a("li",[t._v("调用处理器 InvocationHandler；")])])])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reflect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Proxy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这个类是客户的类；")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 客户在里面通过 getOwnerProxy 和 getNonOwnerProxy 方法获取动态代理；")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MatchMakingTestDrive")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PersonBean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOwnerProxy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PersonBean")]),t._v(" person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Proxy 代理是对 PersonBean 接口的实现；")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所以这里可以进行强制转型；")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PersonBean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Proxy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("newProxyInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getClassLoader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInterfaces")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OwnerInvocationHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PersonBean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getNonOwnerProxy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PersonBean")]),t._v(" person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PersonBean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Proxy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("newProxyInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getClassLoader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInterfaces")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NonOwnerInvocationHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[a("strong",[t._v("在测试类里面去检测功能是否实现把")]),t._v("：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-23-14-53-22.png",alt:"2020-2-23-14-53-22.png"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);