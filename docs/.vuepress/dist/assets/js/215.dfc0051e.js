(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{429:function(t,a,s){"use strict";s.r(a);var v=s(0),r=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"数据库系统基本概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库系统基本概念"}},[t._v("#")]),t._v(" 数据库系统基本概念")]),t._v(" "),s("h2",{attrs:{id:"初步认识数据库系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初步认识数据库系统"}},[t._v("#")]),t._v(" 初步认识数据库系统")]),t._v(" "),s("h3",{attrs:{id:"数据、数据库、数据库管理系统、数据库系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据、数据库、数据库管理系统、数据库系统"}},[t._v("#")]),t._v(" 数据、数据库、数据库管理系统、数据库系统")]),t._v(" "),s("p",[s("strong",[t._v("数据")]),t._v("（Data）")]),t._v(" "),s("ul",[s("li",[s("ins",[t._v("是数据库中存储的基本对象，是描述事物的符号记录")]),t._v(";")]),t._v(" "),s("li",[t._v("描述事物的符号可以是数字，也可以是文字、图形、图像、声音、语言等。数据有多种表现形式，它们都可以经过数字化后存入计算机;")])]),t._v(" "),s("p",[s("strong",[t._v("数据库")]),t._v("（Database，简称 DB）")]),t._v(" "),s("ul",[s("li",[s("ins",[t._v("是长期储存在计算机内、有组织的、可共享的大量数据的集合")]),t._v(";")]),t._v(" "),s("li",[t._v("数据库中的数据按一定的数据模型组织、描述和储存;")]),t._v(" "),s("li",[t._v("具有较小的冗余度（redundancy）、较高的数据独立性（data independency）和易扩展性;")])]),t._v(" "),s("p",[s("strong",[t._v("数据库管理系统")]),t._v("（Database Management System，DBMS）")]),t._v(" "),s("ul",[s("li",[s("ins",[t._v("是位于用户与操作系统之间的数据库管理软件")]),t._v(";")]),t._v(" "),s("li",[t._v("平时所说的 MySQL, MongoDB, Oracle 就是 DBMS;")]),t._v(" "),s("li",[t._v("它的主要功能包括以下几个方面：\n"),s("ul",[s("li",[s("strong",[t._v("数据定义功能")]),t._v(": DBMS 提供数据定义语言（Data Definition Language，DDL），用户可以对数据库中的数据对象进行定义。")]),t._v(" "),s("li",[t._v("数据组织、存储和管理: DBMS 要分类组织、存储和管理各种数据，包括数据字典、用户数据、数据的存取路径等。")]),t._v(" "),s("li",[s("strong",[t._v("数据操纵功能")]),t._v(": DBMS 还提供数据操纵语言（Data Manipulation Language，DML），用户利用 DML 可以实现对数据库的基本操作，如查询、插入、删除和修改等。")]),t._v(" "),s("li",[s("strong",[t._v("数据库的事务管理和运行管理")]),t._v(": 数据库在建立、运用和维护时由数据库管理系统统一管理、统一控制，以保证数据的安全性、完整性、多用户对数据的并发使用及发生故障后的系统恢复。\n"),s("ul",[s("li",[s("strong",[t._v("事务管理")]),t._v(": 提供提高可靠性并避免并发操作错误的手段;")]),t._v(" "),s("li",[s("strong",[t._v("故障恢复")]),t._v(": 使数据库自动恢复到故障发生前正确状态的手段;")]),t._v(" "),s("li",[s("strong",[t._v("安全性控制")]),t._v(": 提供合法性检验, 避免无授权用户非法访问数据库的手段;")]),t._v(" "),s("li",[s("strong",[t._v("完整性控制")]),t._v(": 提供数据及数据操作正确性检查的手段;")])])]),t._v(" "),s("li",[s("strong",[t._v("数据库的建立和维护功能")]),t._v(": 数据库初始数据的输入、转换功能，数据库的转储、恢复功能，数据库的重组织功能和性能监视、分析功能等。")]),t._v(" "),s("li",[s("strong",[t._v("其他功能")]),t._v(": 数据库还提供 DBMS 与网络中其他软件系统的通信功能；异构数据库之间的互访和互操作功能等。")])])])]),t._v(" "),s("p",[s("strong",[t._v("SQL 结构化查询语言")]),t._v(" Structured Query Language:")]),t._v(" "),s("ul",[s("li",[s("ins",[t._v("用户使用 SQL 语言操作 DBMS")]),t._v(";")]),t._v(" "),s("li",[t._v('由 "数据定义语言 DDL", "数据操纵语言 DML", "数据控制语言 DCL" 组成;')]),t._v(" "),s("li",[t._v("由 ANSI（American National Standards Institute 美国国家标准化组织）制定标准的计算机语言;")]),t._v(" "),s("li",[t._v("不同的 DBMS 会有不同的 SQL 语言实现, 但都依照统一的 SQL 标准, 所以大体上都相同;")]),t._v(" "),s("li",[t._v("平时说的学习 MySQL 语言, 指的是学习名字叫做 MySQL 的 DBMS 数据库管理系统支持的 SQL 语言;")])]),t._v(" "),s("p",[s("strong",[t._v("数据库系统")]),t._v("（Database System，DBS）")]),t._v(" "),s("ul",[s("li",[s("ins",[t._v("指在计算机提供数据库功能的系统")]),t._v(";")]),t._v(" "),s("li",[t._v("由如下部件组成:\n"),s("ul",[s("li",[s("strong",[t._v("数据库")]),t._v(": 相互之间有关联关系的数据表集合;")]),t._v(" "),s("li",[s("strong",[t._v("数据库管理系统")]),t._v(": 用户管理数据库的一种系统软件;")]),t._v(" "),s("li",[s("strong",[t._v("数据库应用")]),t._v(": 提供给数据库系统使用者的具体应用程序;")]),t._v(" "),s("li",[s("strong",[t._v("数据库管理员")]),t._v(": 管理数据库, 并编写提供给用户的各种程序;")]),t._v(" "),s("li",[s("strong",[t._v("计算机系统")]),t._v(": 提供基础的数据库系统运行环境;")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-24-08-46-26.png",alt:"2020-05-24-08-46-26"}})]),t._v(" "),s("h3",{attrs:{id:"数据管理技术的产生与发展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据管理技术的产生与发展"}},[t._v("#")]),t._v(" 数据管理技术的产生与发展")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-06-09-14-12-17.png",alt:"2020-06-09-14-12-17"}})]),t._v(" "),s("h2",{attrs:{id:"数据模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据模型"}},[t._v("#")]),t._v(" 数据模型")]),t._v(" "),s("h3",{attrs:{id:"什么是数据模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是数据模型"}},[t._v("#")]),t._v(" 什么是数据模型")]),t._v(" "),s("p",[s("ins",[t._v("数据模型是对现实世界数据的抽象，是用来描述数据、组织数据和对数据进行操作的模型")]),t._v(";")]),t._v(" "),s("h4",{attrs:{id:"数据模型分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据模型分类"}},[t._v("#")]),t._v(" 数据模型分类")]),t._v(" "),s("p",[t._v("根据模型应用的不同目的，数据模型分为:")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("概念模型")]),t._v(":\n"),s("ul",[s("li",[t._v("是在对现实世界的各种数据进行抽象后, 提炼出来的一个概念上的模型;")]),t._v(" "),s("li",[t._v("也称信息模型，它按照 "),s("ins",[t._v("用户的观点")]),t._v(" 来对数据建模;")]),t._v(" "),s("li",[t._v('表示概念模型最常用的是 "实体-关系" 图, 也称 E-R 图;')]),t._v(" "),s("li",[t._v("主要用于数据库设计;")])])]),t._v(" "),s("li",[s("strong",[t._v("逻辑模型")]),t._v(":\n"),s("ul",[s("li",[t._v("逻辑模型就是要将概念模型具体化，就是要实现概念模型所描述的东西;")]),t._v(" "),s("li",[t._v("也称结构模型, 主要包括层次模型、网状模型、关系模型、面向对象模型和对象关系模型等;")]),t._v(" "),s("li",[t._v("它是按 "),s("ins",[t._v("计算机系统的观点")]),t._v(" 对数据建模;")]),t._v(" "),s("li",[t._v("主要用于 DBMS 的实现；")])])]),t._v(" "),s("li",[s("strong",[t._v("物理模型")]),t._v(":\n"),s("ul",[s("li",[t._v("是对数据最低层的抽象，它描述数据在系统内部的表示方式和存取方法，以及在磁盘或磁带上数据的存取方法;")]),t._v(" "),s("li",[t._v("是面向计算机系统的模型;")])])])]),t._v(" "),s("h4",{attrs:{id:"数据模型组成三要素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据模型组成三要素"}},[t._v("#")]),t._v(" 数据模型组成三要素")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("数据结构")]),t._v(" "),s("ul",[s("li",[t._v("描述数据库的组成对象以及对象之间的联系;")]),t._v(" "),s("li",[t._v("数据结构是所描述的对象类型的集合，是对系统静态特性的描述;")])])]),t._v(" "),s("li",[s("strong",[t._v("数据操作")]),t._v(":\n"),s("ul",[s("li",[t._v("是指对数据库中各种对象（型）的实例（值）允许执行的操作的集合，包括操作及有关的操作规则;")]),t._v(" "),s("li",[t._v("数据库主要有查询和更新（包括插入、删除、修改）两大类操作;")]),t._v(" "),s("li",[t._v("数据操作是对系统动态特性的描述。")])])]),t._v(" "),s("li",[s("strong",[t._v("数据的完整性约束条件")]),t._v(":\n"),s("ul",[s("li",[t._v("是一组完整性规则;")]),t._v(" "),s("li",[t._v("完整性规则是给定的数据模型中数据及其联系所遵守的制约和依存规则;")]),t._v(" "),s("li",[t._v("用以限定符合数据模型的数据库状态以及状态的变化，以保证数据的正确、有效、相容;")])])])]),t._v(" "),s("h3",{attrs:{id:"关系模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关系模型"}},[t._v("#")]),t._v(" 关系模型")]),t._v(" "),s("ul",[s("li",[t._v("『 "),s("strong",[t._v("关系型数据库")]),t._v(" 』采用『 "),s("strong",[t._v("关系模型")]),t._v(" 』作为数据的组织方式。")]),t._v(" "),s("li",[t._v("关系模型建立在严格的数学概念基础上。从用户观点看，关系模型由一组关系组成，每个『 "),s("strong",[t._v("关系")]),t._v(" 』的数据结构是一张规范化的『 "),s("strong",[t._v("二维表")]),t._v(" 』。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-24-15-05-29.png",alt:"2020-05-24-15-05-29"}})]),t._v(" "),s("ul",[s("li",[t._v("关系模型中的术语有以下几个：\n"),s("ul",[s("li",[s("strong",[t._v("关系")]),t._v("（Relation）：一个关系对应通常说的一张表。")]),t._v(" "),s("li",[s("strong",[t._v("元组")]),t._v("（Tuple）：表中的一行即为一个元组。")]),t._v(" "),s("li",[s("strong",[t._v("属性")]),t._v("（Attribute）：表中的一列即为一个属性，给每一个属性起一个名称即属性名。")]),t._v(" "),s("li",[s("strong",[t._v("码")]),t._v("（Key）：也称为码键。表中的某个属性或属性组，它可以唯一确定一个元组。")]),t._v(" "),s("li",[s("strong",[t._v("域")]),t._v("（Domain）：属性的取值范围。")]),t._v(" "),s("li",[s("strong",[t._v("分量")]),t._v("：元组中的一个属性值。")]),t._v(" "),s("li",[s("strong",[t._v("关系模式")]),t._v("：对关系的描述，一般表示为 "),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[s("svg",{staticStyle:{"vertical-align":"-0.566ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20.354ex",height:"2.262ex",viewBox:"0 -750 8996.4 1000"}},[s("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[s("g",{attrs:{"data-mml-node":"math"}},[s("g",{attrs:{"data-mml-node":"mi"}},[s("path",{attrs:{"data-c":"52",d:"M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z"}})]),s("g",{attrs:{"data-mml-node":"mo",transform:"translate(1036.8, 0)"}},[s("text",{attrs:{"data-variant":"normal",transform:"matrix(1 0 0 -1 0 0)","font-size":"884px","font-family":"serif"}},[t._v("（")])]),s("g",{attrs:{"data-mml-node":"msub",transform:"translate(1914.6, 0)"}},[s("g",{attrs:{"data-mml-node":"mi"}},[s("path",{attrs:{"data-c":"41",d:"M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"}})]),s("g",{attrs:{"data-mml-node":"mn",transform:"translate(750, -150) scale(0.707)"}},[s("path",{attrs:{"data-c":"31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}})])]),s("g",{attrs:{"data-mml-node":"mo",transform:"translate(3068.1, 0)"}},[s("path",{attrs:{"data-c":"2C",d:"M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"}})]),s("g",{attrs:{"data-mml-node":"msub",transform:"translate(3512.8, 0)"}},[s("g",{attrs:{"data-mml-node":"mi"}},[s("path",{attrs:{"data-c":"41",d:"M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"}})]),s("g",{attrs:{"data-mml-node":"mn",transform:"translate(750, -150) scale(0.707)"}},[s("path",{attrs:{"data-c":"32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"}})])]),s("g",{attrs:{"data-mml-node":"mo",transform:"translate(4666.3, 0)"}},[s("path",{attrs:{"data-c":"2C",d:"M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"}})]),s("g",{attrs:{"data-mml-node":"mo",transform:"translate(5111, 0)"}},[s("path",{attrs:{"data-c":"22EF",d:"M78 250Q78 274 95 292T138 310Q162 310 180 294T199 251Q199 226 182 208T139 190T96 207T78 250ZM525 250Q525 274 542 292T585 310Q609 310 627 294T646 251Q646 226 629 208T586 190T543 207T525 250ZM972 250Q972 274 989 292T1032 310Q1056 310 1074 294T1093 251Q1093 226 1076 208T1033 190T990 207T972 250Z"}})]),s("g",{attrs:{"data-mml-node":"mo",transform:"translate(6449.7, 0)"}},[s("path",{attrs:{"data-c":"2C",d:"M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"}})]),s("g",{attrs:{"data-mml-node":"msub",transform:"translate(6894.3, 0)"}},[s("g",{attrs:{"data-mml-node":"mi"}},[s("path",{attrs:{"data-c":"41",d:"M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"}})]),s("g",{attrs:{"data-mml-node":"mi",transform:"translate(750, -150) scale(0.707)"}},[s("path",{attrs:{"data-c":"6E",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"}})])]),s("g",{attrs:{"data-mml-node":"mo",transform:"translate(8396.4, 0)"}},[s("text",{attrs:{"data-variant":"normal",transform:"matrix(1 0 0 -1 0 0)","font-size":"884px","font-family":"serif"}},[t._v("）")])])])])])]),t._v(" "),s("ul",[s("li",[s("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[s("svg",{staticStyle:{"vertical-align":"-0.048ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"1.717ex",height:"1.593ex",viewBox:"0 -683 759 704"}},[s("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[s("g",{attrs:{"data-mml-node":"math"}},[s("g",{attrs:{"data-mml-node":"mi"}},[s("path",{attrs:{"data-c":"52",d:"M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z"}})])])])])]),t._v(" 是关系的名字;")],1),t._v(" "),s("li",[s("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[s("svg",{staticStyle:{"vertical-align":"-0.357ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"2.362ex",height:"1.977ex",viewBox:"0 -716 1044 873.8"}},[s("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[s("g",{attrs:{"data-mml-node":"math"}},[s("g",{attrs:{"data-mml-node":"msub"}},[s("g",{attrs:{"data-mml-node":"mi"}},[s("path",{attrs:{"data-c":"41",d:"M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"}})]),s("g",{attrs:{"data-mml-node":"mi",transform:"translate(750, -150) scale(0.707)"}},[s("path",{attrs:{"data-c":"69",d:"M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"}})])])])])])]),t._v(" 是属性;")],1)])],1)])])]),t._v(" "),s("p",[t._v("可以把关系和现实生活中的表格所使用的术语做一个对比，如下图所示:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-06-09-15-24-45.png",alt:"2020-06-09-15-24-45"}})]),t._v(" "),s("h2",{attrs:{id:"数据库系统结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库系统结构"}},[t._v("#")]),t._v(" 数据库系统结构")]),t._v(" "),s("h3",{attrs:{id:"三个层次"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三个层次"}},[t._v("#")]),t._v(" 三个层次")]),t._v(" "),s("p",[t._v("下图表示的一个数据库系统, 我们把 DBMS 管理的数据抽象成 "),s("ins",[t._v("三个层次")]),t._v(":")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("外部层次")]),t._v(" External Level:\n"),s("ul",[s("li",[t._v("用户能够看到与处理的数据, 是全局数据中的某一部分;")]),t._v(" "),s("li",[t._v("也称. "),s("strong",[t._v("用户层次")]),t._v(" User Level")])])]),t._v(" "),s("li",[s("strong",[t._v("概念层次")]),t._v(" Conceptual Level:\n"),s("ul",[s("li",[t._v("从全局角度管理的数据, 包含相关的关联约束;")]),t._v(" "),s("li",[t._v("也称, "),s("strong",[t._v("全局层次")]),t._v(", 逻辑层次 Logic Level;")])])]),t._v(" "),s("li",[s("strong",[t._v("内部层次")]),t._v(" Internal Level:\n"),s("ul",[s("li",[t._v("存储在介质上的数据;")]),t._v(" "),s("li",[t._v("也称, "),s("strong",[t._v("物理层次")]),t._v(" Physical Level;")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-24-14-08-23.png",alt:"2020-05-24-14-08-23"}})]),t._v(" "),s("h3",{attrs:{id:"模式-视图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模式-视图"}},[t._v("#")]),t._v(" 模式 & 视图")]),t._v(" "),s("p",[t._v("✏️ "),s("strong",[t._v("模式 Schema")]),t._v(": 是对数据库中数据的结构和特性的描述;")]),t._v(" "),s("p",[t._v("✏️ "),s("strong",[t._v("视图 View")]),t._v(": 是对数据库中的数据以某一种表现形式的具体展现;")]),t._v(" "),s("p",[t._v("模式是对数据的抽象, 视图是对数据的展示;")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-24-14-19-20.png",alt:"2020-05-24-14-19-20"}})]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("Tip")]),t._v(" "),s("p",[t._v("『 "),s("strong",[t._v("模型")]),t._v(" 』就像写作时, 必须从头往后, 从左往右, 顺序地写内容. 段落之间用一行空格隔开, 每个段落开头空两个字. 这是对所有作文结构的通用抽象.")]),t._v(" "),s("p",[t._v("『 "),s("strong",[t._v("模式")]),t._v(' 』就像是写作文时用的 "总分总" 的结构, 它只是定义了文章的结构, 而不管文章的具体内容. 它是对作文内容的抽象;')]),t._v(" "),s("p",[t._v("我们在作文纸上按照总分总的结构写完一篇完整的作文, 展示给老师看时, 展示的就是『 "),s("strong",[t._v("视图")]),t._v(" 』, 如果你写在了 word 文档里, 然后发邮件给老师看, 这是另外一种视图.")]),t._v(" "),s("p",[t._v("而作文的内容就是具体的『 "),s("strong",[t._v("实例")]),t._v(" 』")])]),t._v(" "),s("h3",{attrs:{id:"三层模式-三层视图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三层模式-三层视图"}},[t._v("#")]),t._v(" 三层模式 & 三层视图")]),t._v(" "),s("p",[t._v("DBMS 管理数据的三个层次上, 分别有各自对应的模式 Schema 和视图 View;")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-24-14-33-31.png",alt:"2020-05-24-14-33-31"}})]),t._v(" "),s("h3",{attrs:{id:"两层映像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#两层映像"}},[t._v("#")]),t._v(" 两层映像")]),t._v(" "),s("p",[t._v("映像: 将一种模式映射为另一种结构;")]),t._v(" "),s("p",[t._v("✏️ "),s("strong",[t._v("E-C Mapping")]),t._v(": 将外模式映射为概念模式, 从而实现概念视图向外部视图的转换. 用以向用户展示数据;")]),t._v(" "),s("p",[t._v("✏️ "),s("strong",[t._v("C-I Mapping")]),t._v(": 将概念模式映射为内模式, 从而实现概念视图向内部视图的转换. 用以存储和处理数据;")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-24-14-37-46.png",alt:"2020-05-24-14-37-46"}})]),t._v(" "),s("h3",{attrs:{id:"两个独立性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#两个独立性"}},[t._v("#")]),t._v(" 两个独立性")]),t._v(" "),s("p",[t._v("✏️ "),s("strong",[t._v("逻辑数据独立性")]),t._v(": 当概念模式发生变化, 可以不改变外部模式, 只需更改 E-C Mapping 映射, 从而用户察觉不到概念模式的变化;")]),t._v(" "),s("p",[t._v("✏️ "),s("strong",[t._v("物理数据独立性")]),t._v(": 当内部模式发生变化, 可以不改变概念模式, 只需改变 C-I Mapping 映射, 用户同样察觉不到变化;")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-24-14-47-06.png",alt:"2020-05-24-14-47-06"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);