(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{161:function(t,e,r){"use strict";r.r(e);var a=r(0),i=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),r("p",[t._v('NoSQL = Not Only SQL 意即"不仅仅是SQL"。泛指非关系型的数据库.')]),t._m(1),t._m(2),r("p",[t._v("表与表之间存在着关系，这种关系采用现实世界中实体( entitiy )与实体( entitiy )之间的关系模型. 关系型数据库中，表都是存储格式化结构的数据，每个元组（可以理解为二维表中的一行，在数据库中经常被称为记录）字段的组成都是一样的，即使不是每个元组都需要所有的字段，但数据库会为每个元组都分配所有的字段，这样的结构可以便于表与表之间进行连接等操作，但从另一个角度来说它也是关系数据库性能瓶颈的一个因素。")]),r("p",[t._v("现在流行的大型关系型数据库有Oracle、Microsoft SQL Server、MySQL等等。")]),t._m(3),t._m(4),t._m(5),r("p",[t._v("原子性很容易理解，也就是说事务里的所有操作要么全部做完，要么都不做，事务成功的条件是事务里的所有操作都成功，只要有一个操作失败，整个事务就失败，需要回滚。")]),r("p",[t._v("比如银行转账，从A账户转100元至B账户，分为两个步骤：1）从A账户取100元；2）存入100元至B账户。这两步要么一起完成，要么一起不完成，如果只完成第一步，第二步失败，钱会莫名其妙少了100元。")]),t._m(6),r("p",[t._v("一致性也比较容易理解，也就是说数据库要一直处于一致的状态，事务的运行不会改变数据库原本的一致性约束。")]),r("p",[t._v("例如现有完整性约束 a+b=10，如果一个事务改变了 a，那么必须得改变 b，使得事务结束后依然满足 a+b=10，否则事务失败。")]),t._m(7),r("p",[t._v("所谓的独立性是指并发的事务之间不会互相影响，如果一个事务要访问的数据正在被另外一个事务修改，只要另外一个事务未提交，它所访问的数据就不受未提交事务的影响。")]),r("p",[t._v("比如现在有个交易是从A账户转100元至B账户，在这个交易还未完成的情况下，如果此时B查询自己的账户，是看不到新增加的100元的。")]),t._m(8),r("p",[t._v("持久性是指一旦事务提交后，它所做的修改将会永久的保存在数据库上，即使出现宕机也不会丢失。")]),t._m(9),t._m(10),t._m(11),r("p",[t._v("NoSql又分为四大类数据库：")]),t._m(12),r("p",[t._v("它们的对比分析如下：")]),t._m(13),t._m(14),r("ul",[r("li",[r("a",{attrs:{href:"https://blog.csdn.net/qq_16313365/article/details/52232623",target:"_blank",rel:"noopener noreferrer"}},[t._v("MongoDB学习（一）初识NoSql及MongoDB"),r("OutboundLink")],1)]),r("li",[r("a",{attrs:{href:"http://www.runoob.com/mongodb/nosql.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("NoSQL 简介"),r("OutboundLink")],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"nosql-简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nosql-简介","aria-hidden":"true"}},[this._v("#")]),this._v(" NoSQL 简介")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"关系型-非关系型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关系型-非关系型","aria-hidden":"true"}},[this._v("#")]),this._v(" 关系型 & 非关系型")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("关系型")]),this._v("数据库以 行和列 的 二维表格 形式来存储数据, 一系列的行和列被称为表, 表又组成了数据库.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("非关系")]),this._v("数据库以键值对存储，它的结构不固定，每一个元组可以有不一样的字段，每个元组可以根据需要增加或减少一些自己的键值对，这样就不会局限于固定的结构，可以减少一些时间和空间的开销。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"关系型数据库遵循acid规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关系型数据库遵循acid规则","aria-hidden":"true"}},[this._v("#")]),this._v(" 关系型数据库遵循ACID规则")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_1、a-atomicity-原子性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、a-atomicity-原子性","aria-hidden":"true"}},[this._v("#")]),this._v(" 1、A (Atomicity) 原子性")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_2、c-consistency-一致性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、c-consistency-一致性","aria-hidden":"true"}},[this._v("#")]),this._v(" 2、C (Consistency) 一致性")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_3、i-isolation-独立性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、i-isolation-独立性","aria-hidden":"true"}},[this._v("#")]),this._v(" 3、I (Isolation) 独立性")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_4、d-durability-持久性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、d-durability-持久性","aria-hidden":"true"}},[this._v("#")]),this._v(" 4、D (Durability) 持久性")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"关系型-非关系型-对比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关系型-非关系型-对比","aria-hidden":"true"}},[this._v("#")]),this._v(" 关系型 & 非关系型 对比")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("特性")]),r("th",[t._v("优点")]),r("th",[t._v("缺点")])])]),r("tbody",[r("tr",[r("td",[t._v("关系型数据库")]),r("td",[t._v("1.采用关系模型来组织数据 "),r("br"),t._v(" 2.事务的一致性 "),r("br"),t._v(" 3. 一个关系型数据库是由关系模型（即二维表格模型）及其之间的关联关系组成的一个数据组织")]),r("td",[t._v("1.容易理解。二维表结构是非常贴近逻辑世界的一个概念，关系模型相对网状、层次等其他模型来说更易理解"),r("br"),t._v("2.使用方便。标准的sql语言使得操作关系数据库非常方便"),r("br"),t._v("3.易于维护。丰富的完整性（实体完整性、参照完整性和用户定义的完整性）大大降低了数据冗余和数据不一致的概率。"),r("br"),t._v("4.支持Sql及事务处理。可以进行复杂查询，事务支持使得其能保证数据一致性")])]),r("tr",[r("td",[t._v("非关系型(NoSql)")]),r("td",[t._v("1.以键值对存储"),r("br"),t._v("2.分布式"),r("br"),t._v("3.一般不支持ACID特性（即数据库事务特性：原子性、一致性、隔离性、持久性）"),r("br"),t._v("4.NoSql严格上讲不是一种数据库，应该是一种数据结构化存储方法的集合")]),r("td",[t._v("1.灵活的数据存储模型。数据结构不固定"),r("br"),t._v("2.易扩展。数据之间无耦合，非常容易扩展"),r("br"),t._v("3. 高性能。能够适应现代网络对数据库高并发读写请求以及对海量数据的高速访问能力，得益于它的无关系性"),r("br"),t._v("4.高可用。在不太影响性能的情况，就可以方便的实现高可用的架构。比如Cassandra，HBase模型，通过复制模型也能实现高可用。")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"nosql-分类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nosql-分类","aria-hidden":"true"}},[this._v("#")]),this._v(" NoSQL 分类")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("键值(Key-Value)存储数据库、")]),e("li",[this._v("列存储数据库、")]),e("li",[this._v("文档型数据库、")]),e("li",[this._v("图形(Graph)数据库。")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("分类")]),r("th",[t._v("Examples举例")]),r("th",[t._v("典型应用场景")]),r("th",[t._v("数据模型")]),r("th",[t._v("优点")]),r("th",[t._v("缺点")])])]),r("tbody",[r("tr",[r("td",[t._v("键值（key-value）")]),r("td",[t._v("Tokyo Cabinet/Tyrant，Redis，Voldemort，Oracle BDB")]),r("td",[t._v("内容缓存，主要用于处理大量数据的高访问负载，也用于一些日志系统等等。")]),r("td",[t._v("Key 指向 Value 的键值对，通常用hash table来实现")]),r("td",[t._v("查找速度快")]),r("td",[t._v("数据无结构化，通常只被当作字符串或者二进制数据")])]),r("tr",[r("td",[t._v("列存储数据库")]),r("td",[t._v("Cassandra, HBase, Riak")]),r("td",[t._v("分布式的文件系统")]),r("td",[t._v("以列簇式存储，将同一列数据存在一起")]),r("td",[t._v("查找速度快，可扩展性强，更容易进行分布式扩展")]),r("td",[t._v("功能相对局限")])]),r("tr",[r("td",[t._v("文档型数据库")]),r("td",[t._v("CouchDB，MongoDB")]),r("td",[t._v("Web应用（与Key-Value类似，Value是结构化的，不同的是数据库能够了解Value的内容）")]),r("td",[t._v("Key-Value对应的键值对，Value为结构化数据")]),r("td",[t._v("数据结构要求不严格，表结构可变，不需要像关系型数据库一样需要预先定义表结构")]),r("td",[t._v("查询性能不高，而且缺乏统一的查询语法。")])]),r("tr",[r("td",[t._v("图形(Graph)数据库")]),r("td",[t._v("Neo4J，InfoGrid，Infinite Graph")]),r("td",[t._v("社交网络，推荐系统等。专注于构建关系图谱")]),r("td",[t._v("图结构")]),r("td",[t._v("利用图结构相关算法。比如最短路径寻址，N度关系查找等")]),r("td",[t._v("很多时候需要对整个图做计算才能得出需要的信息，而且这种结构不太好做分布式的集群方案。")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考")])}],!1,null,null,null);e.default=i.exports}}]);