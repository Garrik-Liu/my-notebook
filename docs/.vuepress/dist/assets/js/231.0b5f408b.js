(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{596:function(t,a,s){"use strict";s.r(a);var i=s(2),e=Object(i.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图"}},[t._v("#")]),t._v(" 图")]),t._v(" "),s("h2",{attrs:{id:"基础概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础概念"}},[t._v("#")]),t._v(" 基础概念")]),t._v(" "),s("p",[t._v("在树中，元素被称为节点，图中的元素叫作"),s("strong",[t._v("顶点")]),t._v("（vertex）。图中的一个顶点可以与任意其他顶点建立连接关系，这种关系叫作"),s("strong",[t._v("边")]),t._v("（edge）。跟顶点相连接的边的条数，叫做顶点的"),s("strong",[t._v("度")]),t._v("（degree）。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-15-0-52-53.png",alt:"2020-1-15-0-52-53.png"}})]),t._v(" "),s("p",[t._v("如果边的连接是有方向的，那这种图叫作 “"),s("strong",[t._v("有向图")]),t._v("”。同理，把边没有方向的图就叫作 “"),s("strong",[t._v("无向图")]),t._v("”。")]),t._v(" "),s("p",[t._v("在有向图中，我们把度分为"),s("strong",[t._v("入度")]),t._v("（In-degree）和"),s("strong",[t._v("出度")]),t._v("（Out-degree）：")]),t._v(" "),s("ul",[s("li",[t._v("入度：表示有多少条边指向这个顶点；")]),t._v(" "),s("li",[t._v("出度：表示有多少条边是以这个顶点为起点指向其他顶点；")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-15-0-54-40.png",alt:"2020-1-15-0-54-40.png"}})]),t._v(" "),s("p",[t._v("还有一种图叫，"),s("strong",[t._v("带权图")]),t._v("（weighted graph）。在带权图中，每条边都带有一个数字，叫做"),s("strong",[t._v("权重")]),t._v("（weight）。它表示两个顶点之间的关系。拿生活举例，\b 可能是两个城市之间的距离，高速公路上两个出入口之间的收费，等等。")]),t._v(" "),s("p",[t._v("\b::: details-open 例子：\n拿平时的社交软件举例：")]),t._v(" "),s("p",[t._v("在微信中，如果两个用户之间互加好友，那就在两者之间建立一条边。所以，整个微信的好友关系就可以用一张图来表示。其中，每个用户有多少个好友，对应到图中，就叫作顶点的度（degree）。")]),t._v(" "),s("p",[t._v("在微博中，如果用户 A 关注了用户 B，我们就在图中画一条从 A 到 B 的带箭头的边，来表示边的方向。如果用户 A 和用户 B 互相关注了，那我们就画一条从 A 指向 B 的边，再画一条从 B 指向 A 的边。")]),t._v(" "),s("p",[t._v("在微博中，入度就表示有多少粉丝，出度就表示关注了多少人。")]),t._v(" "),s("p",[t._v("在 QQ 中，我们可以用带权图，通过权重来表示 QQ 好友间的亲密度。\n:::")]),t._v(" "),s("h2",{attrs:{id:"如何储存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何储存"}},[t._v("#")]),t._v(" 如何储存")]),t._v(" "),s("p",[t._v("下面来看下，如何在内存中存储图这种数据结构。")]),t._v(" "),s("h3",{attrs:{id:"邻接矩阵存储方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#邻接矩阵存储方法"}},[t._v("#")]),t._v(" 邻接矩阵存储方法")]),t._v(" "),s("p",[t._v("图最直观的一种存储方法就是，"),s("strong",[t._v("邻接矩阵")]),t._v("（Adjacency Matrix）。")]),t._v(" "),s("p",[s("strong",[t._v("邻接矩阵的底层依赖一个二维数组")]),t._v("：")]),t._v(" "),s("ul",[s("li",[t._v("对于无向图来说，如果顶点 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("i")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("i")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.65952em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.65952em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit"},[t._v("i")])])])]),t._v(" 与顶点 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("j")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("j")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.65952em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.85396em","vertical-align":"-0.19444em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")])])])]),t._v(" 之间有边，我们就将 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("A")]),s("mo",[t._v("[")]),s("mi",[t._v("i")]),s("mo",[t._v("]")]),s("mo",[t._v("[")]),s("mi",[t._v("j")]),s("mo",[t._v("]")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("A[i][j]")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit"},[t._v("A")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathit"},[t._v("i")]),s("span",{staticClass:"mclose"},[t._v("]")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),s("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v(" 和 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("A")]),s("mo",[t._v("[")]),s("mi",[t._v("j")]),s("mo",[t._v("]")]),s("mo",[t._v("[")]),s("mi",[t._v("i")]),s("mo",[t._v("]")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("A[j][i]")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit"},[t._v("A")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),s("span",{staticClass:"mclose"},[t._v("]")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathit"},[t._v("i")]),s("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v(" 标记为 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mn",[t._v("1")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("1")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathrm"},[t._v("1")])])])]),t._v("；")]),t._v(" "),s("li",[t._v("对于有向图来说，如果顶点 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("i")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("i")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.65952em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.65952em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit"},[t._v("i")])])])]),t._v(" 到顶点 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("j")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("j")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.65952em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.85396em","vertical-align":"-0.19444em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")])])])]),t._v(" 之间，有一条箭头从顶点 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("i")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("i")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.65952em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.65952em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit"},[t._v("i")])])])]),t._v(" 指向顶点 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("j")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("j")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.65952em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.85396em","vertical-align":"-0.19444em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")])])])]),t._v(" 的边，那我们就将 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("A")]),s("mo",[t._v("[")]),s("mi",[t._v("i")]),s("mo",[t._v("]")]),s("mo",[t._v("[")]),s("mi",[t._v("j")]),s("mo",[t._v("]")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("A[i][j]")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit"},[t._v("A")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathit"},[t._v("i")]),s("span",{staticClass:"mclose"},[t._v("]")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),s("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v(" 标记为 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mn",[t._v("1")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("1")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathrm"},[t._v("1")])])])]),t._v("。同理，如果有一条箭头从顶点 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("j")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("j")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.65952em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.85396em","vertical-align":"-0.19444em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")])])])]),t._v(" 指向顶点 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("i")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("i")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.65952em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.65952em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit"},[t._v("i")])])])]),t._v(" 的边，我们就将 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("A")]),s("mo",[t._v("[")]),s("mi",[t._v("j")]),s("mo",[t._v("]")]),s("mo",[t._v("[")]),s("mi",[t._v("i")]),s("mo",[t._v("]")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("A[j][i]")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit"},[t._v("A")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),s("span",{staticClass:"mclose"},[t._v("]")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathit"},[t._v("i")]),s("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v(" 标记为 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mn",[t._v("1")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("1")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathrm"},[t._v("1")])])])]),t._v("；")]),t._v(" "),s("li",[t._v("对于带权图，数组中就存储相应的权重；")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-15-11-10-38.png",alt:"2020-1-15-11-10-38.png"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-15-11-18-44.png",alt:"2020-1-15-11-18-44.png"}})]),t._v(" "),s("p",[s("strong",[t._v("缺点")]),t._v("：")]),t._v(" "),s("p",[t._v("用邻接矩阵来表示一个图，虽然简单、直观，但是比较浪费存储空间。比如，对于无向图来说，如果 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("A")]),s("mo",[t._v("[")]),s("mi",[t._v("i")]),s("mo",[t._v("]")]),s("mo",[t._v("[")]),s("mi",[t._v("j")]),s("mo",[t._v("]")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("A[i][j]")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit"},[t._v("A")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathit"},[t._v("i")]),s("span",{staticClass:"mclose"},[t._v("]")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),s("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v(" 等于 1，那 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("A")]),s("mo",[t._v("[")]),s("mi",[t._v("j")]),s("mo",[t._v("]")]),s("mo",[t._v("[")]),s("mi",[t._v("i")]),s("mo",[t._v("]")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("A[j][i]")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit"},[t._v("A")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),s("span",{staticClass:"mclose"},[t._v("]")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathit"},[t._v("i")]),s("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v(" 也肯定等于 1。实际上，我们只需要存储一个就可以了。")]),t._v(" "),s("p",[t._v("还有，如果我们存储的是"),s("strong",[t._v("稀疏图")]),t._v("（Sparse Matrix），也就是说，顶点很多，但每个顶点的边并不多，那邻接矩阵的存储方法就更加浪费空间了。")]),t._v(" "),s("p",[s("strong",[t._v("优点")]),t._v("：")]),t._v(" "),s("p",[t._v("\b 首先，邻接矩阵的存储方式简单、直接，因为基于数组，所以在获取两个顶点的关系时，就非常高效。其次，用邻接矩阵存储图的另外一个好处是方便计算。这是因为，用邻接矩阵的方式存储图，可以将很多图的运算转换成矩阵之间的运算。")]),t._v(" "),s("h3",{attrs:{id:"邻接表存储方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#邻接表存储方法"}},[t._v("#")]),t._v(" 邻接表存储方法")]),t._v(" "),s("p",[t._v("图的另一种存储方法，"),s("strong",[t._v("邻接表")]),t._v("（Adjacency List）。")]),t._v(" "),s("p",[t._v("邻接表用链表法来储存图。"),s("strong",[t._v("图中每个顶点对应一条链表，链表中存储的是与这个顶点相连接的其他顶点")]),t._v("。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-15-11-19-23.png",alt:"2020-1-15-11-19-23.png"}})]),t._v(" "),s("p",[t._v("邻接矩阵存储起来比较浪费空间，但是使用起来比较节省时间。相反，邻接表存储起来比较节省空间，但是使用起来就比较耗时间。")]),t._v(" "),s("p",[t._v("就像图中的例子，如果我们要确定，是否存在一条从顶点 2 到顶点 4 的边，那我们就要遍历顶点 2 对应的那条链表，看链表中是否存在顶点 4。而且，链表的存储方式对缓存不友好。")]),t._v(" "),s("p",[t._v("在散列表那几节里，我讲到，在基于链表法解决冲突的散列表中，如果链过长，为了提高查找效率，我们可以将链表换成其他更加高效的数据结构，比如平衡二叉查找树。")]),t._v(" "),s("p",[t._v("对于图的邻接表存储，我们也"),s("strong",[t._v("可以将邻接表中的链表改成平衡二叉查找树")]),t._v("。实际开发中，我们可以选择用红黑树。这样，我们就可以更加快速地查找两个顶点之间是否存在边了。")]),t._v(" "),s("h2",{attrs:{id:"用图来储存微博中用户的友好关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用图来储存微博中用户的友好关系"}},[t._v("#")]),t._v(" 用图来储存微博中用户的友好关系")]),t._v(" "),s("p",[s("strong",[t._v("数据结构是为算法服务的，所以具体选择哪种存储方法，与期望支持的操作有关系")]),t._v("。针对微博用户关系，假设我们需要支持下面这样几个操作：")]),t._v(" "),s("ul",[s("li",[t._v("判断用户 A 是否关注了用户 B；")]),t._v(" "),s("li",[t._v("判断用户 A 是否被用户 B 关注；")]),t._v(" "),s("li",[t._v("用户 A 关注/取消关注用户 B；")]),t._v(" "),s("li",[t._v("根据用户名称的首字母排序，分页获取用户的 “粉丝” 列表；")]),t._v(" "),s("li",[t._v("根据用户名称的首字母排序，分页获取用户的 “关注” 列表。")])]),t._v(" "),s("p",[t._v("因为社交网络是一张"),s("strong",[t._v("稀疏图")]),t._v("，使用邻接矩阵存储比较浪费存储空间。所以，这里我们采用"),s("strong",[t._v("邻接表")]),t._v("来存储。")]),t._v(" "),s("p",[t._v("用一个邻接表来存储这种有向图是不够的。我们去查找某个用户关注了（指向了）哪些用户是容易的，但是如果要想知道某个用户都被哪些用户关注了（被指向），也就是用户的粉丝列表，是困难的。")]),t._v(" "),s("p",[t._v("所以，我们需要一个"),s("strong",[t._v("逆邻接表")]),t._v("。邻接表中存储了用户的关注关系，逆邻接表中存储的是用户的被关注关系。")]),t._v(" "),s("p",[t._v("对应到图上，邻接表中，每个顶点的链表中，存储的就是这个顶点指向的顶点，逆邻接表中，每个顶点的链表中，存储的是指向这个顶点的顶点。如果要查找某个用户关注了哪些用户，我们可以在邻接表中查找；如果要查找某个用户被哪些用户关注了，我们从逆邻接表中查找。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-15-11-38-14.png",alt:"2020-1-15-11-38-14.png"}})]),t._v(" "),s("p",[t._v("如果对于小规模的数据，比如社交网络中只有几万、几十万个用户，我们可以将整个社交关系存储在内存中。但是如果像微博那样有上亿的用户，数据规模太大，我们就无法全部存储在内存中了。")]),t._v(" "),s("p",[t._v("我们可以"),s("strong",[t._v("通过哈希算法等数据分片方式，将邻接表存储在不同的机器上")]),t._v("。你可以看下面这幅图，我们在机器 1 上存储顶点 1，2，3 的邻接表，在机器 2 上，存储顶点 4，5 的邻接表。逆邻接表的处理方式也一样。当要查询顶点与顶点关系的时候，我们就利用同样的哈希算法，先定位顶点所在的机器，然后再在相应的机器上查找。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-15-11-41-48.png",alt:"2020-1-15-11-41-48.png"}})]),t._v(" "),s("p",[t._v("除这些之外，我们也可以用数据库来储存 \b 图的关系。用下面这张表来存储这样一个图。为了高效地支持前面定义的操作，我们可以在表上建立多个索引，比如第一列、第二列，给这两列都建立索引。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-15-11-44-43.png",alt:"2020-1-15-11-44-43.png"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);