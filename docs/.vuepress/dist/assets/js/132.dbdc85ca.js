(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{346:function(a,t,s){"use strict";s.r(t);var n=s(0),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"spring-ioc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring-ioc"}},[a._v("#")]),a._v(" Spring IoC")]),a._v(" "),s("h2",{attrs:{id:"控制反转"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#控制反转"}},[a._v("#")]),a._v(" 控制反转")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("Ioc (Inversion of Control) 控制反转，也被称为『 依赖注入 Dependency Injection 』")]),a._v("；")]),a._v(" "),s("li",[a._v("IoC 是 Spring 容器的核心；")])]),a._v(" "),s("h3",{attrs:{id:"什么是-“控制反转”"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是-“控制反转”"}},[a._v("#")]),a._v(" 什么是 “控制反转”")]),a._v(" "),s("details",{staticClass:"custom-block details",attrs:{open:"open"}},[s("summary",[a._v("例子：")]),a._v(" "),s("p",[a._v("下面 👇 通过一个例子来解释 “控制反转”：")]),a._v(" "),s("ul",[s("li",[a._v("假如有个电影，男主角由刘德华饰演；")]),a._v(" "),s("li",[a._v("电影中有一场戏，刘德华要说 “对不起，我是警察”；")]),a._v(" "),s("li",[a._v("现在我们通过 Java 类，去表示这种关系：")])]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MovieXxx")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sceneXxx")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Protagonist")]),a._v(" xxx "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("LiuDeHua")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// LiuDeHua 实现了 Protagonist 类")]),a._v("\n    xxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("say")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"对不起，我是警察"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("ul",[s("li",[a._v("这种写法，使得 Protagonist 类，LiuDeHua 类与 MovieXxx 类耦合在了一起；")]),a._v(" "),s("li",[a._v("也就是角色，演员，剧本全部耦合在了一起；")]),a._v(" "),s("li",[a._v("当具体饰演的演员被替换时，剧本类的代码也需要被修改；")])]),a._v(" "),s("hr"),a._v(" "),s("ul",[s("li",[s("p",[a._v("对于这个例子，在 MovieXxx 类中，Protagonist 角色类一般是不会变动的，而具体演员类是有可能变动的；")])]),a._v(" "),s("li",[s("p",[a._v("所以我们把 LiuDeHua 类从中抽出来，然后从外部传入；")])]),a._v(" "),s("li",[s("p",[a._v("现在创造一个导演类，它负责剧本，角色，演员三者之间的协调控制；")])]),a._v(" "),s("li",[s("p",[a._v("它会创造一个 LiuDeHua 实例，然后再把它传入到 MovieXxx 实例中；")])]),a._v(" "),s("li",[s("p",[a._v("这样使得剧本和演员解耦；")])]),a._v(" "),s("li",[s("p",[s("strong",[a._v("具体的传入方式有三种：构造函数注入，属性注入，接口注入")]),a._v("；")])]),a._v(" "),s("li",[s("p",[s("strong",[a._v("Spring 中只支持 “构造函数注入” 和 “属性注入”")]),a._v("；")])])]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 构造函数注入：")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MovieXxx")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Protagonist")]),a._v(" xxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MovieXxx")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Protagonist")]),a._v(" xxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("xxx "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" xxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sceneXxx")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    xxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("say")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"对不起，我是警察"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 导演类")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Director")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("direct")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Protagonist")]),a._v(" xxx "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("LiuDeHua")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 通过构造函数注入 “刘德华” 实例")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MovieXxx")]),a._v(" movieXxx "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MovieXxx")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("xxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 属性注入：")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MovieXxx")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Protagonist")]),a._v(" xxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("setXxx")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Protagonist")]),a._v(" xxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("xxx "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" xxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sceneXxx")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    xxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("say")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"对不起，我是警察"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 导演类")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Director")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("direct")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Protagonist")]),a._v(" xxx "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("LiuDeHua")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 通过 Setter 方法注入 “刘德华” 实例")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MovieXxx")]),a._v(" movieXxx "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MovieXxx")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    movieXxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("setXxx")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("xxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])]),a._v(" "),s("ul",[s("li",[a._v("上面 👆 例子中的导演类就实现了 “"),s("strong",[a._v("控制反转")]),a._v("”；\n"),s("ul",[s("li",[a._v("“"),s("strong",[a._v("控制")]),a._v("” 指的是具体角色扮演者的控制权；")]),a._v(" "),s("li",[a._v("“"),s("strong",[a._v("反转")]),a._v("” 指的是这种控制权从 MovieXxx 剧本类中移除，转交到了导演的手中；")])])]),a._v(" "),s("li",[a._v("概括而言，"),s("strong",[a._v("即某一接口的具体实现类的选择权从调用类中移除，转交给一个第三方决定，以此来移除调用类对接口实现类的依赖")]),a._v("；")]),a._v(" "),s("li",[a._v("这种操作，用 “依赖注入” 来形容更加易于理解；")])]),a._v(" "),s("h3",{attrs:{id:"通过容器完成依赖注入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过容器完成依赖注入"}},[a._v("#")]),a._v(" 通过容器完成依赖注入")]),a._v(" "),s("ul",[s("li",[a._v("上面例子 🌰 中，导演类还是要手动进行具体演员类，剧本类的实例化，以及设置依赖关系的工作；")]),a._v(" "),s("li",[a._v("假如现在我们有一个专门负责选角的第三方机构，他们能帮导演去做选演员的工作，那么导演就可以专心去导戏了；")]),a._v(" "),s("li",[s("strong",[a._v("Spring 就可以帮我们去自动完成，底层实现类的实例化，依赖关系装配等工作，让我们可以专注于业务逻辑的开发")]),a._v("；")]),a._v(" "),s("li",[a._v("我们通过配置文件，或者注解，或者 Java 配置类，来描述类的实例的状态，以及类与类之间的依赖关系；")]),a._v(" "),s("li",[a._v("Spring 会根据我们提供的配置，自动完成类的初始化，和依赖注入的工作；")])]),a._v(" "),s("h2",{attrs:{id:"java-反射"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-反射"}},[a._v("#")]),a._v(" Java 反射")]),a._v(" "),s("h2",{attrs:{id:"spring-资源访问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring-资源访问"}},[a._v("#")]),a._v(" Spring 资源访问")]),a._v(" "),s("h3",{attrs:{id:"资源抽象接口（不重要）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#资源抽象接口（不重要）"}},[a._v("#")]),a._v(" 资源抽象接口（不重要）")]),a._v(" "),s("ul",[s("li",[a._v("Spring 自身设计了一个 "),s("strong",[a._v("Resource 接口")]),a._v("，它为应用提供了更方便的底层资源访问能力，该接口拥有应对不同资源类型的实现类；")]),a._v(" "),s("li",[a._v("Spring 框架使用 Resource 装在各种资源，包括配置文件资源；")]),a._v(" "),s("li",[a._v("下面 👇 是 Resource 接口，及具体实现类的关系图：")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-15-1-0-45.png",alt:"2020-3-15-1-0-45.png"}})]),a._v(" "),s("p",[s("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-15-1-7-0.png",alt:"2020-3-15-1-7-0.png"}})]),a._v(" "),s("p",[a._v("🌰 示例代码：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-15-1-9-10.png",alt:"2020-3-15-1-9-10.png"}})]),a._v(" "),s("h3",{attrs:{id:"资源加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#资源加载"}},[a._v("#")]),a._v(" 资源加载")]),a._v(" "),s("ul",[s("li",[a._v("直接使用 Resource 的各种实现类去访问资源，这种操作还是太底层，太麻烦了；")]),a._v(" "),s("li",[a._v("Spring 定义了一套更高级的资源加载的接口，并提供了实现类，这被称为 “"),s("strong",[a._v("资源加载器")]),a._v("”；")]),a._v(" "),s("li",[a._v("可以直接通过"),s("strong",[a._v("代表资源地址的特殊标识")]),a._v("，自动去调用对应的 Resource 实现类去访问资源；")])]),a._v(" "),s("h4",{attrs:{id:"资源地址表达式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#资源地址表达式"}},[a._v("#")]),a._v(" 资源地址表达式")]),a._v(" "),s("ul",[s("li",[a._v("下图是 Spring 支持的代表资源所在地址的特殊标识；")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-15-1-16-19.png",alt:"2020-3-15-1-16-19.png"}})]),a._v(" "),s("ul",[s("li",[a._v("一个需要注意的点是："),s("strong",[s("code",[a._v("classpath:")]),a._v(" 和 "),s("code",[a._v("classpath*:")]),a._v(" 前缀的区别")]),a._v("：\n"),s("ul",[s("li",[a._v("假如有多个 Jar 包或文件系统类路径都拥有一个相同的包名，例如 "),s("code",[a._v("com.garrik")]),a._v("；")]),a._v(" "),s("li",[s("code",[a._v("classpath:")]),a._v(" 只会在"),s("strong",[a._v("第一个")]),a._v("加载的包的类路径下查找目标资源；")]),a._v(" "),s("li",[s("code",[a._v("classpath*:")]),a._v(" 会在"),s("strong",[a._v("所有的")]),a._v(" Jar 包及类路径下查找目标资源；")])])]),a._v(" "),s("li",[s("code",[a._v("classpath*:")]),a._v(" 对于"),s("strong",[a._v("分模块打包")]),a._v("的应用非常有用；\n"),s("ul",[s("li",[a._v("假如一个名为 "),s("code",[a._v("garrik")]),a._v(" 的应用分成三个模块，一个模块对应一个配置文件；")]),a._v(" "),s("li",[a._v("分别是 "),s("code",[a._v("config1.xml")]),a._v("，"),s("code",[a._v("config2.xml")]),a._v("，"),s("code",[a._v("config3.xml")]),a._v("。并且都放到 "),s("code",[a._v("com.garrik")]),a._v(" 目录下；")]),a._v(" "),s("li",[a._v("现在把每个模块都单独打成 Jar 包；")]),a._v(" "),s("li",[s("code",[a._v("classpath*:com.garrik.config*.xml")]),a._v(" 可以成功加载这三个模块的配置文件；")])])]),a._v(" "),s("li",[a._v("资源地址中可以使用"),s("strong",[a._v("三种通配符")]),a._v("：\n"),s("ul",[s("li",[s("code",[a._v("？")]),a._v("：皮遏制文件名中的一个字符；")]),a._v(" "),s("li",[s("code",[a._v("*")]),a._v("：匹配文件名中的任意个字符；")]),a._v(" "),s("li",[s("code",[a._v("**")]),a._v("：匹配多层路径；")])])])]),a._v(" "),s("h4",{attrs:{id:"资源加载器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#资源加载器"}},[a._v("#")]),a._v(" 资源加载器")]),a._v(" "),s("ul",[s("li",[a._v("下图是 Spring 定义的资源加载器接口，及其实现类；")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-15-1-32-1.png",alt:"2020-3-15-1-32-1.png"}})]),a._v(" "),s("ul",[s("li",[a._v("ResoureLoader 接口的 "),s("code",[a._v("getResource")]),a._v(" 方法可以根据一个资源地址加载目标资源，但是它只支持带资源地址前端的表达式，不支持通配符；")]),a._v(" "),s("li",[a._v("ResourePatternLoader 的 "),s("code",[a._v("getResource")]),a._v(" 方法支持通配符；")]),a._v(" "),s("li",[a._v("PathMatchingResourcePatternResolver 是实现类；")])]),a._v(" "),s("p",[a._v("🌰 示例代码：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-15-1-36-44.png",alt:"2020-3-15-1-36-44.png"}})]),a._v(" "),s("h2",{attrs:{id:"beanfactory-applicationcontext"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#beanfactory-applicationcontext"}},[a._v("#")]),a._v(" BeanFactory & ApplicationContext")]),a._v(" "),s("ul",[s("li",[a._v("Spring 通过一个配置文件描述 Bean 及 Bean 之间的依赖关系；")]),a._v(" "),s("li",[a._v("利用 Java 语言的反射功能实例化 Bean 并建立 Bean 之间的依赖关系；")])]),a._v(" "),s("h3",{attrs:{id:"beanfactory-介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#beanfactory-介绍"}},[a._v("#")]),a._v(" BeanFactory 介绍")]),a._v(" "),s("ul",[s("li",[a._v("BeanFactory 被称作 “"),s("strong",[a._v("Bean 工厂")]),a._v("”：")]),a._v(" "),s("li",[a._v("BeanFactory 实例一般被称作 “"),s("strong",[a._v("IoC 容器")]),a._v("”；")]),a._v(" "),s("li",[a._v("BeanFactory 是一个类工厂，它可以创造并管理各种类的实例；")]),a._v(" "),s("li",[a._v("这些可被创建及管理的类，被称作 "),s("strong",[a._v("POJO")]),a._v("（ Plain Ordinary Java Object ），可以称为 “普通 Java 类” 或 “简单 Java 类”；")]),a._v(" "),s("li",[a._v("Spring 称那些被创建和管理的对象，也就是 POJO 的实例为 "),s("strong",[a._v("Bean")]),a._v("；")]),a._v(" "),s("li",[a._v("BeanFactory 接口中最重要的方法是 "),s("strong",[s("code",[a._v("getBean(String beanName)")])]),a._v("，用于从容器中返回指定名称的 Bean 对象；")])]),a._v(" "),s("h4",{attrs:{id:"beanfactory-的类体系结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#beanfactory-的类体系结构"}},[a._v("#")]),a._v(" BeanFactory 的类体系结构")]),a._v(" "),s("ul",[s("li",[a._v("Spring 为 BeanFactory 提供了多种实现；")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-15-2-14-42.png",alt:"2020-3-15-2-14-42.png"}})]),a._v(" "),s("ul",[s("li",[a._v("上图中的 XmlBeanFactory 已经被废弃，建议改成组合使用 XmlBeanDefinitionReader 和 DefaultListableBeanFactory 替代；")]),a._v(" "),s("li",[a._v("XmlBeanDefinitionReader 类是对 ResoureLoader 实现类的高级封装，用以读取 XML 格式的 Bean 配置文件；")])]),a._v(" "),s("h4",{attrs:{id:"beanfactory-使用示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#beanfactory-使用示例"}},[a._v("#")]),a._v(" BeanFactory 使用示例")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-15-2-21-51.png",alt:"2020-3-15-2-21-51.png"}}),a._v(" "),s("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-15-2-23-20.png",alt:"2020-3-15-2-23-20.png"}})]),a._v(" "),s("h3",{attrs:{id:"applicationcontext-介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#applicationcontext-介绍"}},[a._v("#")]),a._v(" ApplicationContext 介绍")]),a._v(" "),s("ul",[s("li",[a._v("ApplicationContext 被称作 “"),s("strong",[a._v("应用上下文")]),a._v("”；")]),a._v(" "),s("li",[a._v("建立在 BeanFactory 的基础之上，提供了更多面向应用的功能，更易于开发实际应用；")]),a._v(" "),s("li",[a._v("ApplicationContext 实例一般被称作 “"),s("strong",[a._v("Spring 容器")]),a._v("”；")]),a._v(" "),s("li",[a._v("在我们开发时，直接使用 ApplicationContext，不要用 BeanFactory。BeanFactory 过于底层了，没必要用；")])]),a._v(" "),s("h4",{attrs:{id:"applicationcontext-类体系结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#applicationcontext-类体系结构"}},[a._v("#")]),a._v(" ApplicationContext 类体系结构")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-15-2-27-26.png",alt:"2020-3-15-2-27-26.png"}})]),a._v(" "),s("ul",[s("li",[a._v("ApplicationContext 接口的主要实现类是：\n"),s("ul",[s("li",[a._v("ClassPathXmlApplicationContext：从类路径加载配置文件；\n"),s("ul",[s("li",[a._v("对于它来说，"),s("code",[a._v("com.garrik.xxx")]),a._v(" 等同于 "),s("code",[a._v("classpath:com.garrik.xxx")]),a._v("；")])])]),a._v(" "),s("li",[a._v("FileSystemXmlApplicationContext：从文件系统中加载配置文件；\n"),s("ul",[s("li",[s("ul",[s("li",[a._v("对于它来说，"),s("code",[a._v("com.garrik.xxx")]),a._v(" 等同于 "),s("code",[a._v("file:com.garrik.xxx")]),a._v("；")])])])])])])]),a._v(" "),s("li",[a._v("创建 Spring 容器时，可以传入一个包含多个配置文件的数组，Spring 会自动将它们整合在一起：")]),a._v(" "),s("li",[s("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-15-2-33-15.png",alt:"2020-3-15-2-33-15.png"}})]),a._v(" "),s("li",[a._v("在获取到 Application 实例后，就可以像 BeanFactory 一样，调用 getBean 返回 Bean 对象；")]),a._v(" "),s("li",[a._v("注意一个区别是：\n"),s("ul",[s("li",[a._v("BeanFactory 在初始化容器时，并未实例化 Bean 对象，直到第一次访问某个 Bean 时，才会实例化它；")]),a._v(" "),s("li",[a._v("ApplicationContext 在初始化容器时，就会实例化所有的 Bean 对象，这也让它的资源消耗更多一些；")])])])]),a._v(" "),s("h2",{attrs:{id:"bean-生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bean-生命周期"}},[a._v("#")]),a._v(" Bean 生命周期")]),a._v(" "),s("ul",[s("li",[a._v("Bean 生命周期由多个特定的生命阶段组成；")]),a._v(" "),s("li",[a._v("在 Spring 中，可以从两个层面定义 Bean 的生命周期：\n"),s("ul",[s("li",[a._v("Bean 的作用范围；")]),a._v(" "),s("li",[a._v("实例化 Bean 时所经历的一系类阶段；")])])])]),a._v(" "),s("h2",{attrs:{id:"bean-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bean-配置"}},[a._v("#")]),a._v(" Bean 配置")]),a._v(" "),s("h2",{attrs:{id:"基于注解的配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于注解的配置"}},[a._v("#")]),a._v(" 基于注解的配置")]),a._v(" "),s("h2",{attrs:{id:"基于-java-类的配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于-java-类的配置"}},[a._v("#")]),a._v(" 基于 Java 类的配置")])])}),[],!1,null,null,null);t.default=e.exports}}]);