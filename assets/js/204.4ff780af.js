(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{418:function(t,s,a){"use strict";a.r(s);var i=a(0),v=Object(i.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"数据库系统基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库系统基本概念"}},[t._v("#")]),t._v(" 数据库系统基本概念")]),t._v(" "),a("h2",{attrs:{id:"初步认识数据库系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初步认识数据库系统"}},[t._v("#")]),t._v(" 初步认识数据库系统")]),t._v(" "),a("h3",{attrs:{id:"数据、数据库、数据库管理系统、数据库系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据、数据库、数据库管理系统、数据库系统"}},[t._v("#")]),t._v(" 数据、数据库、数据库管理系统、数据库系统")]),t._v(" "),a("p",[a("strong",[t._v("数据")]),t._v("（Data）")]),t._v(" "),a("ul",[a("li",[a("ins",[t._v("是数据库中存储的基本对象，是描述事物的符号记录")]),t._v(";")]),t._v(" "),a("li",[t._v("描述事物的符号可以是数字，也可以是文字、图形、图像、声音、语言等。数据有多种表现形式，它们都可以经过数字化后存入计算机;")])]),t._v(" "),a("p",[a("strong",[t._v("数据库")]),t._v("（Database，简称 DB）")]),t._v(" "),a("ul",[a("li",[a("ins",[t._v("是长期储存在计算机内、有组织的、可共享的大量数据的集合")]),t._v(";")]),t._v(" "),a("li",[t._v("数据库中的数据按一定的数据模型组织、描述和储存;")]),t._v(" "),a("li",[t._v("具有较小的冗余度（redundancy）、较高的数据独立性（data independency）和易扩展性;")])]),t._v(" "),a("p",[a("strong",[t._v("数据库管理系统")]),t._v("（Database Management System，DBMS）")]),t._v(" "),a("ul",[a("li",[a("ins",[t._v("是位于用户与操作系统之间的数据库管理软件")]),t._v(";")]),t._v(" "),a("li",[t._v("平时所说的 MySQL, MongoDB, Oracle 就是 DBMS;")]),t._v(" "),a("li",[t._v("它的主要功能包括以下几个方面：\n"),a("ul",[a("li",[a("strong",[t._v("数据定义功能")]),t._v(": DBMS 提供数据定义语言（Data Definition Language，DDL），用户可以对数据库中的数据对象进行定义。")]),t._v(" "),a("li",[t._v("数据组织、存储和管理: DBMS 要分类组织、存储和管理各种数据，包括数据字典、用户数据、数据的存取路径等。")]),t._v(" "),a("li",[a("strong",[t._v("数据操纵功能")]),t._v(": DBMS 还提供数据操纵语言（Data Manipulation Language，DML），用户利用 DML 可以实现对数据库的基本操作，如查询、插入、删除和修改等。")]),t._v(" "),a("li",[a("strong",[t._v("数据库的事务管理和运行管理")]),t._v(": 数据库在建立、运用和维护时由数据库管理系统统一管理、统一控制，以保证数据的安全性、完整性、多用户对数据的并发使用及发生故障后的系统恢复。\n"),a("ul",[a("li",[a("strong",[t._v("事务管理")]),t._v(": 提供提高可靠性并避免并发操作错误的手段;")]),t._v(" "),a("li",[a("strong",[t._v("故障恢复")]),t._v(": 使数据库自动恢复到故障发生前正确状态的手段;")]),t._v(" "),a("li",[a("strong",[t._v("安全性控制")]),t._v(": 提供合法性检验, 避免无授权用户非法访问数据库的手段;")]),t._v(" "),a("li",[a("strong",[t._v("完整性控制")]),t._v(": 提供数据及数据操作正确性检查的手段;")])])]),t._v(" "),a("li",[a("strong",[t._v("数据库的建立和维护功能")]),t._v(": 数据库初始数据的输入、转换功能，数据库的转储、恢复功能，数据库的重组织功能和性能监视、分析功能等。")]),t._v(" "),a("li",[a("strong",[t._v("其他功能")]),t._v(": 数据库还提供 DBMS 与网络中其他软件系统的通信功能；异构数据库之间的互访和互操作功能等。")])])])]),t._v(" "),a("p",[a("strong",[t._v("SQL 结构化查询语言")]),t._v(" Structured Query Language:")]),t._v(" "),a("ul",[a("li",[a("ins",[t._v("用户使用 SQL 语言操作 DBMS")]),t._v(";")]),t._v(" "),a("li",[t._v('由 "数据定义语言 DDL", "数据操纵语言 DML", "数据控制语言 DCL" 组成;')]),t._v(" "),a("li",[t._v("由 ANSI（American National Standards Institute 美国国家标准化组织）制定标准的计算机语言;")]),t._v(" "),a("li",[t._v("不同的 DBMS 会有不同的 SQL 语言实现, 但都依照统一的 SQL 标准, 所以大体上都相同;")]),t._v(" "),a("li",[t._v("平时说的学习 MySQL 语言, 指的是学习名字叫做 MySQL 的 DBMS 数据库管理系统支持的 SQL 语言;")])]),t._v(" "),a("p",[a("strong",[t._v("数据库系统")]),t._v("（Database System，DBS）")]),t._v(" "),a("ul",[a("li",[a("ins",[t._v("指在计算机提供数据库功能的系统")]),t._v(";")]),t._v(" "),a("li",[t._v("由如下部件组成:\n"),a("ul",[a("li",[a("strong",[t._v("数据库")]),t._v(": 相互之间有关联关系的数据表集合;")]),t._v(" "),a("li",[a("strong",[t._v("数据库管理系统")]),t._v(": 用户管理数据库的一种系统软件;")]),t._v(" "),a("li",[a("strong",[t._v("数据库应用")]),t._v(": 提供给数据库系统使用者的具体应用程序;")]),t._v(" "),a("li",[a("strong",[t._v("数据库管理员")]),t._v(": 管理数据库, 并编写提供给用户的各种程序;")]),t._v(" "),a("li",[a("strong",[t._v("计算机系统")]),t._v(": 提供基础的数据库系统运行环境;")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-24-08-46-26.png",alt:"2020-05-24-08-46-26"}})]),t._v(" "),a("h3",{attrs:{id:"数据管理技术的产生与发展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据管理技术的产生与发展"}},[t._v("#")]),t._v(" 数据管理技术的产生与发展")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-06-09-14-12-17.png",alt:"2020-06-09-14-12-17"}})]),t._v(" "),a("h2",{attrs:{id:"数据模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据模型"}},[t._v("#")]),t._v(" 数据模型")]),t._v(" "),a("h3",{attrs:{id:"什么是数据模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是数据模型"}},[t._v("#")]),t._v(" 什么是数据模型")]),t._v(" "),a("p",[a("ins",[t._v("数据模型是对现实世界数据的抽象，是用来描述数据、组织数据和对数据进行操作的模型")]),t._v(";")]),t._v(" "),a("h4",{attrs:{id:"数据模型分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据模型分类"}},[t._v("#")]),t._v(" 数据模型分类")]),t._v(" "),a("p",[t._v("根据模型应用的不同目的，数据模型分为:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("概念模型")]),t._v(":\n"),a("ul",[a("li",[t._v("是在对现实世界的各种数据进行抽象后, 提炼出来的一个概念上的模型;")]),t._v(" "),a("li",[t._v("也称信息模型，它按照 "),a("ins",[t._v("用户的观点")]),t._v(" 来对数据建模;")]),t._v(" "),a("li",[t._v('表示概念模型最常用的是 "实体-关系" 图, 也称 E-R 图;')]),t._v(" "),a("li",[t._v("主要用于数据库设计;")])])]),t._v(" "),a("li",[a("strong",[t._v("逻辑模型")]),t._v(":\n"),a("ul",[a("li",[t._v("逻辑模型就是要将概念模型具体化，就是要实现概念模型所描述的东西;")]),t._v(" "),a("li",[t._v("也称结构模型, 主要包括层次模型、网状模型、关系模型、面向对象模型和对象关系模型等;")]),t._v(" "),a("li",[t._v("它是按 "),a("ins",[t._v("计算机系统的观点")]),t._v(" 对数据建模;")]),t._v(" "),a("li",[t._v("主要用于 DBMS 的实现；")])])]),t._v(" "),a("li",[a("strong",[t._v("物理模型")]),t._v(":\n"),a("ul",[a("li",[t._v("是对数据最低层的抽象，它描述数据在系统内部的表示方式和存取方法，以及在磁盘或磁带上数据的存取方法;")]),t._v(" "),a("li",[t._v("是面向计算机系统的模型;")])])])]),t._v(" "),a("h4",{attrs:{id:"数据模型组成三要素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据模型组成三要素"}},[t._v("#")]),t._v(" 数据模型组成三要素")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("数据结构")]),t._v(" "),a("ul",[a("li",[t._v("描述数据库的组成对象以及对象之间的联系;")]),t._v(" "),a("li",[t._v("数据结构是所描述的对象类型的集合，是对系统静态特性的描述;")])])]),t._v(" "),a("li",[a("strong",[t._v("数据操作")]),t._v(":\n"),a("ul",[a("li",[t._v("是指对数据库中各种对象（型）的实例（值）允许执行的操作的集合，包括操作及有关的操作规则;")]),t._v(" "),a("li",[t._v("数据库主要有查询和更新（包括插入、删除、修改）两大类操作;")]),t._v(" "),a("li",[t._v("数据操作是对系统动态特性的描述。")])])]),t._v(" "),a("li",[a("strong",[t._v("数据的完整性约束条件")]),t._v(":\n"),a("ul",[a("li",[t._v("是一组完整性规则;")]),t._v(" "),a("li",[t._v("完整性规则是给定的数据模型中数据及其联系所遵守的制约和依存规则;")]),t._v(" "),a("li",[t._v("用以限定符合数据模型的数据库状态以及状态的变化，以保证数据的正确、有效、相容;")])])])]),t._v(" "),a("h3",{attrs:{id:"关系模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关系模型"}},[t._v("#")]),t._v(" 关系模型")]),t._v(" "),a("ul",[a("li",[t._v("『 "),a("strong",[t._v("关系型数据库")]),t._v(" 』采用『 "),a("strong",[t._v("关系模型")]),t._v(" 』作为数据的组织方式。")]),t._v(" "),a("li",[t._v("关系模型建立在严格的数学概念基础上。从用户观点看，关系模型由一组关系组成，每个『 "),a("strong",[t._v("关系")]),t._v(" 』的数据结构是一张规范化的『 "),a("strong",[t._v("二维表")]),t._v(" 』。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-24-15-05-29.png",alt:"2020-05-24-15-05-29"}})]),t._v(" "),a("ul",[a("li",[t._v("关系模型中的术语有以下几个：\n"),a("ul",[a("li",[a("strong",[t._v("关系")]),t._v("（Relation）：一个关系对应通常说的一张表。")]),t._v(" "),a("li",[a("strong",[t._v("元组")]),t._v("（Tuple）：表中的一行即为一个元组。")]),t._v(" "),a("li",[a("strong",[t._v("属性")]),t._v("（Attribute）：表中的一列即为一个属性，给每一个属性起一个名称即属性名。")]),t._v(" "),a("li",[a("strong",[t._v("码")]),t._v("（Key）：也称为码键。表中的某个属性或属性组，它可以唯一确定一个元组。")]),t._v(" "),a("li",[a("strong",[t._v("域")]),t._v("（Domain）：属性的取值范围。")]),t._v(" "),a("li",[a("strong",[t._v("分量")]),t._v("：元组中的一个属性值。")]),t._v(" "),a("li",[a("strong",[t._v("关系模式")]),t._v("：对关系的描述，一般表示为 "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("R")]),a("mtext",[t._v("（")]),a("msub",[a("mi",[t._v("A")]),a("mn",[t._v("1")])],1),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("msub",[a("mi",[t._v("A")]),a("mn",[t._v("2")])],1),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("msub",[a("mi",[t._v("A")]),a("mi",[t._v("n")])],1),a("mtext",[t._v("）")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("R（A_1, A_2, ..., A_n）")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.8777699999999999em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.00773em"}},[t._v("R")]),a("span",{staticClass:"mord cjk_fallback"},[t._v("（")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathdefault"},[t._v("A")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.30110799999999993em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[t._v("1")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[a("span")])])])])]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathdefault"},[t._v("A")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.30110799999999993em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[t._v("2")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[a("span")])])])])]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord"},[t._v(".")]),a("span",{staticClass:"mord"},[t._v(".")]),a("span",{staticClass:"mord"},[t._v(".")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathdefault"},[t._v("A")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.151392em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mathdefault mtight"},[t._v("n")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[a("span")])])])])]),a("span",{staticClass:"mord cjk_fallback"},[t._v("）")])])])])]),t._v(" "),a("ul",[a("li",[a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("R")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("R")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.00773em"}},[t._v("R")])])])])]),t._v(" 是关系的名字;")],1),t._v(" "),a("li",[a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("msub",[a("mi",[t._v("A")]),a("mi",[t._v("i")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("A_i")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.83333em","vertical-align":"-0.15em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathdefault"},[t._v("A")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.31166399999999994em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mathdefault mtight"},[t._v("i")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[a("span")])])])])])])])])]),t._v(" 是属性;")],1)])],1)])])]),t._v(" "),a("p",[t._v("可以把关系和现实生活中的表格所使用的术语做一个对比，如下图所示:")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-06-09-15-24-45.png",alt:"2020-06-09-15-24-45"}})]),t._v(" "),a("h2",{attrs:{id:"数据库系统结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库系统结构"}},[t._v("#")]),t._v(" 数据库系统结构")]),t._v(" "),a("h3",{attrs:{id:"三个层次"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三个层次"}},[t._v("#")]),t._v(" 三个层次")]),t._v(" "),a("p",[t._v("下图表示的一个数据库系统, 我们把 DBMS 管理的数据抽象成 "),a("ins",[t._v("三个层次")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("外部层次")]),t._v(" External Level:\n"),a("ul",[a("li",[t._v("用户能够看到与处理的数据, 是全局数据中的某一部分;")]),t._v(" "),a("li",[t._v("也称. "),a("strong",[t._v("用户层次")]),t._v(" User Level")])])]),t._v(" "),a("li",[a("strong",[t._v("概念层次")]),t._v(" Conceptual Level:\n"),a("ul",[a("li",[t._v("从全局角度管理的数据, 包含相关的关联约束;")]),t._v(" "),a("li",[t._v("也称, "),a("strong",[t._v("全局层次")]),t._v(", 逻辑层次 Logic Level;")])])]),t._v(" "),a("li",[a("strong",[t._v("内部层次")]),t._v(" Internal Level:\n"),a("ul",[a("li",[t._v("存储在介质上的数据;")]),t._v(" "),a("li",[t._v("也称, "),a("strong",[t._v("物理层次")]),t._v(" Physical Level;")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-24-14-08-23.png",alt:"2020-05-24-14-08-23"}})]),t._v(" "),a("h3",{attrs:{id:"模式-视图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模式-视图"}},[t._v("#")]),t._v(" 模式 & 视图")]),t._v(" "),a("p",[t._v("✏️ "),a("strong",[t._v("模式 Schema")]),t._v(": 是对数据库中数据的结构和特性的描述;")]),t._v(" "),a("p",[t._v("✏️ "),a("strong",[t._v("视图 View")]),t._v(": 是对数据库中的数据以某一种表现形式的具体展现;")]),t._v(" "),a("p",[t._v("模式是对数据的抽象, 视图是对数据的展示;")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-24-14-19-20.png",alt:"2020-05-24-14-19-20"}})]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Tip")]),t._v(" "),a("p",[t._v("『 "),a("strong",[t._v("模型")]),t._v(" 』就像写作时, 必须从头往后, 从左往右, 顺序地写内容. 段落之间用一行空格隔开, 每个段落开头空两个字. 这是对所有作文结构的通用抽象.")]),t._v(" "),a("p",[t._v("『 "),a("strong",[t._v("模式")]),t._v(' 』就像是写作文时用的 "总分总" 的结构, 它只是定义了文章的结构, 而不管文章的具体内容. 它是对作文内容的抽象;')]),t._v(" "),a("p",[t._v("我们在作文纸上按照总分总的结构写完一篇完整的作文, 展示给老师看时, 展示的就是『 "),a("strong",[t._v("视图")]),t._v(" 』, 如果你写在了 word 文档里, 然后发邮件给老师看, 这是另外一种视图.")]),t._v(" "),a("p",[t._v("而作文的内容就是具体的『 "),a("strong",[t._v("实例")]),t._v(" 』")])]),t._v(" "),a("h3",{attrs:{id:"三层模式-三层视图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三层模式-三层视图"}},[t._v("#")]),t._v(" 三层模式 & 三层视图")]),t._v(" "),a("p",[t._v("DBMS 管理数据的三个层次上, 分别有各自对应的模式 Schema 和视图 View;")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-24-14-33-31.png",alt:"2020-05-24-14-33-31"}})]),t._v(" "),a("h3",{attrs:{id:"两层映像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#两层映像"}},[t._v("#")]),t._v(" 两层映像")]),t._v(" "),a("p",[t._v("映像: 将一种模式映射为另一种结构;")]),t._v(" "),a("p",[t._v("✏️ "),a("strong",[t._v("E-C Mapping")]),t._v(": 将外模式映射为概念模式, 从而实现概念视图向外部视图的转换. 用以向用户展示数据;")]),t._v(" "),a("p",[t._v("✏️ "),a("strong",[t._v("C-I Mapping")]),t._v(": 将概念模式映射为内模式, 从而实现概念视图向内部视图的转换. 用以存储和处理数据;")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-24-14-37-46.png",alt:"2020-05-24-14-37-46"}})]),t._v(" "),a("h3",{attrs:{id:"两个独立性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#两个独立性"}},[t._v("#")]),t._v(" 两个独立性")]),t._v(" "),a("p",[t._v("✏️ "),a("strong",[t._v("逻辑数据独立性")]),t._v(": 当概念模式发生变化, 可以不改变外部模式, 只需更改 E-C Mapping 映射, 从而用户察觉不到概念模式的变化;")]),t._v(" "),a("p",[t._v("✏️ "),a("strong",[t._v("物理数据独立性")]),t._v(": 当内部模式发生变化, 可以不改变概念模式, 只需改变 C-I Mapping 映射, 用户同样察觉不到变化;")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-24-14-47-06.png",alt:"2020-05-24-14-47-06"}})])])}),[],!1,null,null,null);s.default=v.exports}}]);