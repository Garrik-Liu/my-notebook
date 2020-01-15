(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{366:function(t,a,r){"use strict";r.r(a);var Q=r(0),s=Object(Q.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"图"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#图"}},[t._v("#")]),t._v(" 图")]),t._v(" "),r("h2",{attrs:{id:"基础概念"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基础概念"}},[t._v("#")]),t._v(" 基础概念")]),t._v(" "),r("p",[t._v("在树中，元素被称为节点，图中的元素叫作"),r("strong",[t._v("顶点")]),t._v("（vertex）。图中的一个顶点可以与任意其他顶点建立连接关系，这种关系叫作"),r("strong",[t._v("边")]),t._v("（edge）。跟顶点相连接的边的条数，叫做顶点的"),r("strong",[t._v("度")]),t._v("（degree）。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-15-0-52-53.png",alt:"2020-1-15-0-52-53.png"}})]),t._v(" "),r("p",[t._v("如果边的连接是有方向的，那这种图叫作 “"),r("strong",[t._v("有向图")]),t._v("”。同理，把边没有方向的图就叫作 “"),r("strong",[t._v("无向图")]),t._v("”。")]),t._v(" "),r("p",[t._v("在有向图中，我们把度分为"),r("strong",[t._v("入度")]),t._v("（In-degree）和"),r("strong",[t._v("出度")]),t._v("（Out-degree）：")]),t._v(" "),r("ul",[r("li",[t._v("入度：表示有多少条边指向这个顶点；")]),t._v(" "),r("li",[t._v("出度：表示有多少条边是以这个顶点为起点指向其他顶点；")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-15-0-54-40.png",alt:"2020-1-15-0-54-40.png"}})]),t._v(" "),r("p",[t._v("\b::: details-open 例子：\n拿平时的社交软件举例：")]),t._v(" "),r("p",[t._v("在微信中，如果两个用户之间互加好友，那就在两者之间建立一条边。所以，整个微信的好友关系就可以用一张图来表示。其中，每个用户有多少个好友，对应到图中，就叫作顶点的度（degree）。")]),t._v(" "),r("p",[t._v("在微博中，如果用户 A 关注了用户 B，我们就在图中画一条从 A 到 B 的带箭头的边，来表示边的方向。如果用户 A 和用户 B 互相关注了，那我们就画一条从 A 指向 B 的边，再画一条从 B 指向 A 的边。")]),t._v(" "),r("p",[t._v("在微博中，入度就表示有多少粉丝，出度就表示关注了多少人。\n:::")]),t._v(" "),r("h2",{attrs:{id:"如何储存"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何储存"}},[t._v("#")]),t._v(" 如何储存")]),t._v(" "),r("p",[t._v("下面来看下，如何在内存中存储图这种数据结构。")]),t._v(" "),r("h3",{attrs:{id:"邻接矩阵存储方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#邻接矩阵存储方法"}},[t._v("#")]),t._v(" 邻接矩阵存储方法")]),t._v(" "),r("p",[t._v("图最直观的一种存储方法就是，"),r("strong",[t._v("邻接矩阵")]),t._v("（Adjacency Matrix）。")]),t._v(" "),r("p",[r("strong",[t._v("邻接矩阵的底层依赖一个二维数组")]),t._v("：")]),t._v(" "),r("ul",[r("li",[t._v("对于无向图来说，如果顶点 "),r("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[r("svg",{staticStyle:{"vertical-align":"-0.025ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"0.781ex",height:"1.52ex",viewBox:"0 -661 345 672"}},[r("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[r("g",{attrs:{"data-mml-node":"math"}},[r("g",{attrs:{"data-mml-node":"mi"}},[r("path",{attrs:{"data-c":"69",d:"M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"}})])])])])]),t._v(" 与顶点 "),r("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[r("svg",{staticStyle:{"vertical-align":"-0.462ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"0.932ex",height:"1.957ex",viewBox:"0 -661 412 865"}},[r("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[r("g",{attrs:{"data-mml-node":"math"}},[r("g",{attrs:{"data-mml-node":"mi"}},[r("path",{attrs:{"data-c":"6A",d:"M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z"}})])])])])]),t._v(" 之间有边，我们就将 "),r("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[r("svg",{staticStyle:{"vertical-align":"-0.566ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"5.925ex",height:"2.262ex",viewBox:"0 -750 2619 1000"}},[r("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[r("g",{attrs:{"data-mml-node":"math"}},[r("g",{attrs:{"data-mml-node":"mi"}},[r("path",{attrs:{"data-c":"41",d:"M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"}})]),r("g",{attrs:{"data-mml-node":"mo",transform:"translate(750, 0)"}},[r("path",{attrs:{"data-c":"5B",d:"M118 -250V750H255V710H158V-210H255V-250H118Z"}})]),r("g",{attrs:{"data-mml-node":"mi",transform:"translate(1028, 0)"}},[r("path",{attrs:{"data-c":"69",d:"M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"}})]),r("g",{attrs:{"data-mml-node":"mo",transform:"translate(1373, 0)"}},[r("path",{attrs:{"data-c":"5D",d:"M22 710V750H159V-250H22V-210H119V710H22Z"}})]),r("g",{attrs:{"data-mml-node":"mo",transform:"translate(1651, 0)"}},[r("path",{attrs:{"data-c":"5B",d:"M118 -250V750H255V710H158V-210H255V-250H118Z"}})]),r("g",{attrs:{"data-mml-node":"mi",transform:"translate(1929, 0)"}},[r("path",{attrs:{"data-c":"6A",d:"M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z"}})]),r("g",{attrs:{"data-mml-node":"mo",transform:"translate(2341, 0)"}},[r("path",{attrs:{"data-c":"5D",d:"M22 710V750H159V-250H22V-210H119V710H22Z"}})])])])])]),t._v(" 和 "),r("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[r("svg",{staticStyle:{"vertical-align":"-0.566ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"5.925ex",height:"2.262ex",viewBox:"0 -750 2619 1000"}},[r("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[r("g",{attrs:{"data-mml-node":"math"}},[r("g",{attrs:{"data-mml-node":"mi"}},[r("path",{attrs:{"data-c":"41",d:"M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"}})]),r("g",{attrs:{"data-mml-node":"mo",transform:"translate(750, 0)"}},[r("path",{attrs:{"data-c":"5B",d:"M118 -250V750H255V710H158V-210H255V-250H118Z"}})]),r("g",{attrs:{"data-mml-node":"mi",transform:"translate(1028, 0)"}},[r("path",{attrs:{"data-c":"6A",d:"M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z"}})]),r("g",{attrs:{"data-mml-node":"mo",transform:"translate(1440, 0)"}},[r("path",{attrs:{"data-c":"5D",d:"M22 710V750H159V-250H22V-210H119V710H22Z"}})]),r("g",{attrs:{"data-mml-node":"mo",transform:"translate(1718, 0)"}},[r("path",{attrs:{"data-c":"5B",d:"M118 -250V750H255V710H158V-210H255V-250H118Z"}})]),r("g",{attrs:{"data-mml-node":"mi",transform:"translate(1996, 0)"}},[r("path",{attrs:{"data-c":"69",d:"M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"}})]),r("g",{attrs:{"data-mml-node":"mo",transform:"translate(2341, 0)"}},[r("path",{attrs:{"data-c":"5D",d:"M22 710V750H159V-250H22V-210H119V710H22Z"}})])])])])]),t._v(" 标记为 "),r("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[r("svg",{staticStyle:{"vertical-align":"0"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"1.131ex",height:"1.507ex",viewBox:"0 -666 500 666"}},[r("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[r("g",{attrs:{"data-mml-node":"math"}},[r("g",{attrs:{"data-mml-node":"mn"}},[r("path",{attrs:{"data-c":"31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}})])])])])]),t._v("；")],1),t._v(" "),r("li",[t._v("对于有向图来说，如果顶点 "),r("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[r("svg",{staticStyle:{"vertical-align":"-0.025ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"0.781ex",height:"1.52ex",viewBox:"0 -661 345 672"}},[r("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[r("g",{attrs:{"data-mml-node":"math"}},[r("g",{attrs:{"data-mml-node":"mi"}},[r("path",{attrs:{"data-c":"69",d:"M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"}})])])])])]),t._v(" 到顶点 "),r("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[r("svg",{staticStyle:{"vertical-align":"-0.462ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"0.932ex",height:"1.957ex",viewBox:"0 -661 412 865"}},[r("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[r("g",{attrs:{"data-mml-node":"math"}},[r("g",{attrs:{"data-mml-node":"mi"}},[r("path",{attrs:{"data-c":"6A",d:"M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z"}})])])])])]),t._v(" 之间，有一条箭头从顶点 "),r("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[r("svg",{staticStyle:{"vertical-align":"-0.025ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"0.781ex",height:"1.52ex",viewBox:"0 -661 345 672"}},[r("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[r("g",{attrs:{"data-mml-node":"math"}},[r("g",{attrs:{"data-mml-node":"mi"}},[r("path",{attrs:{"data-c":"69",d:"M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"}})])])])])]),t._v(" 指向顶点 "),r("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[r("svg",{staticStyle:{"vertical-align":"-0.462ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"0.932ex",height:"1.957ex",viewBox:"0 -661 412 865"}},[r("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[r("g",{attrs:{"data-mml-node":"math"}},[r("g",{attrs:{"data-mml-node":"mi"}},[r("path",{attrs:{"data-c":"6A",d:"M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z"}})])])])])]),t._v(" 的边，那我们就将 "),r("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[r("svg",{staticStyle:{"vertical-align":"-0.566ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"5.925ex",height:"2.262ex",viewBox:"0 -750 2619 1000"}},[r("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[r("g",{attrs:{"data-mml-node":"math"}},[r("g",{attrs:{"data-mml-node":"mi"}},[r("path",{attrs:{"data-c":"41",d:"M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"}})]),r("g",{attrs:{"data-mml-node":"mo",transform:"translate(750, 0)"}},[r("path",{attrs:{"data-c":"5B",d:"M118 -250V750H255V710H158V-210H255V-250H118Z"}})]),r("g",{attrs:{"data-mml-node":"mi",transform:"translate(1028, 0)"}},[r("path",{attrs:{"data-c":"69",d:"M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"}})]),r("g",{attrs:{"data-mml-node":"mo",transform:"translate(1373, 0)"}},[r("path",{attrs:{"data-c":"5D",d:"M22 710V750H159V-250H22V-210H119V710H22Z"}})]),r("g",{attrs:{"data-mml-node":"mo",transform:"translate(1651, 0)"}},[r("path",{attrs:{"data-c":"5B",d:"M118 -250V750H255V710H158V-210H255V-250H118Z"}})]),r("g",{attrs:{"data-mml-node":"mi",transform:"translate(1929, 0)"}},[r("path",{attrs:{"data-c":"6A",d:"M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z"}})]),r("g",{attrs:{"data-mml-node":"mo",transform:"translate(2341, 0)"}},[r("path",{attrs:{"data-c":"5D",d:"M22 710V750H159V-250H22V-210H119V710H22Z"}})])])])])]),t._v(" 标记为 "),r("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[r("svg",{staticStyle:{"vertical-align":"0"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"1.131ex",height:"1.507ex",viewBox:"0 -666 500 666"}},[r("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[r("g",{attrs:{"data-mml-node":"math"}},[r("g",{attrs:{"data-mml-node":"mn"}},[r("path",{attrs:{"data-c":"31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}})])])])])]),t._v("。同理，如果有一条箭头从顶点 "),r("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[r("svg",{staticStyle:{"vertical-align":"-0.462ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"0.932ex",height:"1.957ex",viewBox:"0 -661 412 865"}},[r("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[r("g",{attrs:{"data-mml-node":"math"}},[r("g",{attrs:{"data-mml-node":"mi"}},[r("path",{attrs:{"data-c":"6A",d:"M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z"}})])])])])]),t._v(" 指向顶点 "),r("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[r("svg",{staticStyle:{"vertical-align":"-0.025ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"0.781ex",height:"1.52ex",viewBox:"0 -661 345 672"}},[r("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[r("g",{attrs:{"data-mml-node":"math"}},[r("g",{attrs:{"data-mml-node":"mi"}},[r("path",{attrs:{"data-c":"69",d:"M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"}})])])])])]),t._v(" 的边，我们就将 "),r("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[r("svg",{staticStyle:{"vertical-align":"-0.566ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"5.925ex",height:"2.262ex",viewBox:"0 -750 2619 1000"}},[r("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[r("g",{attrs:{"data-mml-node":"math"}},[r("g",{attrs:{"data-mml-node":"mi"}},[r("path",{attrs:{"data-c":"41",d:"M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"}})]),r("g",{attrs:{"data-mml-node":"mo",transform:"translate(750, 0)"}},[r("path",{attrs:{"data-c":"5B",d:"M118 -250V750H255V710H158V-210H255V-250H118Z"}})]),r("g",{attrs:{"data-mml-node":"mi",transform:"translate(1028, 0)"}},[r("path",{attrs:{"data-c":"6A",d:"M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z"}})]),r("g",{attrs:{"data-mml-node":"mo",transform:"translate(1440, 0)"}},[r("path",{attrs:{"data-c":"5D",d:"M22 710V750H159V-250H22V-210H119V710H22Z"}})]),r("g",{attrs:{"data-mml-node":"mo",transform:"translate(1718, 0)"}},[r("path",{attrs:{"data-c":"5B",d:"M118 -250V750H255V710H158V-210H255V-250H118Z"}})]),r("g",{attrs:{"data-mml-node":"mi",transform:"translate(1996, 0)"}},[r("path",{attrs:{"data-c":"69",d:"M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"}})]),r("g",{attrs:{"data-mml-node":"mo",transform:"translate(2341, 0)"}},[r("path",{attrs:{"data-c":"5D",d:"M22 710V750H159V-250H22V-210H119V710H22Z"}})])])])])]),t._v(" 标记为 "),r("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[r("svg",{staticStyle:{"vertical-align":"0"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"1.131ex",height:"1.507ex",viewBox:"0 -666 500 666"}},[r("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[r("g",{attrs:{"data-mml-node":"math"}},[r("g",{attrs:{"data-mml-node":"mn"}},[r("path",{attrs:{"data-c":"31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}})])])])])]),t._v("；")],1),t._v(" "),r("li",[t._v("对于带权图，数组中就存储相应的权重；")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-15-11-10-38.png",alt:"2020-1-15-11-10-38.png"}})]),t._v(" "),r("p",[r("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-15-11-18-44.png",alt:"2020-1-15-11-18-44.png"}})]),t._v(" "),r("p",[r("strong",[t._v("缺点")]),t._v("：")]),t._v(" "),r("p",[t._v("用邻接矩阵来表示一个图，虽然简单、直观，但是比较浪费存储空间。比如，对于无向图来说，如果 "),r("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[r("svg",{staticStyle:{"vertical-align":"-0.566ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"5.925ex",height:"2.262ex",viewBox:"0 -750 2619 1000"}},[r("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[r("g",{attrs:{"data-mml-node":"math"}},[r("g",{attrs:{"data-mml-node":"mi"}},[r("path",{attrs:{"data-c":"41",d:"M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"}})]),r("g",{attrs:{"data-mml-node":"mo",transform:"translate(750, 0)"}},[r("path",{attrs:{"data-c":"5B",d:"M118 -250V750H255V710H158V-210H255V-250H118Z"}})]),r("g",{attrs:{"data-mml-node":"mi",transform:"translate(1028, 0)"}},[r("path",{attrs:{"data-c":"69",d:"M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"}})]),r("g",{attrs:{"data-mml-node":"mo",transform:"translate(1373, 0)"}},[r("path",{attrs:{"data-c":"5D",d:"M22 710V750H159V-250H22V-210H119V710H22Z"}})]),r("g",{attrs:{"data-mml-node":"mo",transform:"translate(1651, 0)"}},[r("path",{attrs:{"data-c":"5B",d:"M118 -250V750H255V710H158V-210H255V-250H118Z"}})]),r("g",{attrs:{"data-mml-node":"mi",transform:"translate(1929, 0)"}},[r("path",{attrs:{"data-c":"6A",d:"M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z"}})]),r("g",{attrs:{"data-mml-node":"mo",transform:"translate(2341, 0)"}},[r("path",{attrs:{"data-c":"5D",d:"M22 710V750H159V-250H22V-210H119V710H22Z"}})])])])])]),t._v(" 等于 1，那 "),r("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[r("svg",{staticStyle:{"vertical-align":"-0.566ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"5.925ex",height:"2.262ex",viewBox:"0 -750 2619 1000"}},[r("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[r("g",{attrs:{"data-mml-node":"math"}},[r("g",{attrs:{"data-mml-node":"mi"}},[r("path",{attrs:{"data-c":"41",d:"M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"}})]),r("g",{attrs:{"data-mml-node":"mo",transform:"translate(750, 0)"}},[r("path",{attrs:{"data-c":"5B",d:"M118 -250V750H255V710H158V-210H255V-250H118Z"}})]),r("g",{attrs:{"data-mml-node":"mi",transform:"translate(1028, 0)"}},[r("path",{attrs:{"data-c":"6A",d:"M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z"}})]),r("g",{attrs:{"data-mml-node":"mo",transform:"translate(1440, 0)"}},[r("path",{attrs:{"data-c":"5D",d:"M22 710V750H159V-250H22V-210H119V710H22Z"}})]),r("g",{attrs:{"data-mml-node":"mo",transform:"translate(1718, 0)"}},[r("path",{attrs:{"data-c":"5B",d:"M118 -250V750H255V710H158V-210H255V-250H118Z"}})]),r("g",{attrs:{"data-mml-node":"mi",transform:"translate(1996, 0)"}},[r("path",{attrs:{"data-c":"69",d:"M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"}})]),r("g",{attrs:{"data-mml-node":"mo",transform:"translate(2341, 0)"}},[r("path",{attrs:{"data-c":"5D",d:"M22 710V750H159V-250H22V-210H119V710H22Z"}})])])])])]),t._v(" 也肯定等于 1。实际上，我们只需要存储一个就可以了。")],1),t._v(" "),r("p",[t._v("还有，如果我们存储的是"),r("strong",[t._v("稀疏图")]),t._v("（Sparse Matrix），也就是说，顶点很多，但每个顶点的边并不多，那邻接矩阵的存储方法就更加浪费空间了。")]),t._v(" "),r("p",[r("strong",[t._v("优点")]),t._v("：")]),t._v(" "),r("p",[t._v("\b 首先，邻接矩阵的存储方式简单、直接，因为基于数组，所以在获取两个顶点的关系时，就非常高效。其次，用邻接矩阵存储图的另外一个好处是方便计算。这是因为，用邻接矩阵的方式存储图，可以将很多图的运算转换成矩阵之间的运算。")]),t._v(" "),r("h3",{attrs:{id:"邻接表存储方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#邻接表存储方法"}},[t._v("#")]),t._v(" 邻接表存储方法")]),t._v(" "),r("p",[t._v("图的另一种存储方法，"),r("strong",[t._v("邻接表")]),t._v("（Adjacency List）。")]),t._v(" "),r("p",[t._v("邻接表用链表法来储存图。"),r("strong",[t._v("图中每个顶点对应一条链表，链表中存储的是与这个顶点相连接的其他顶点")]),t._v("。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-15-11-19-23.png",alt:"2020-1-15-11-19-23.png"}})]),t._v(" "),r("p",[t._v("邻接矩阵存储起来比较浪费空间，但是使用起来比较节省时间。相反，邻接表存储起来比较节省空间，但是使用起来就比较耗时间。")]),t._v(" "),r("p",[t._v("就像图中的例子，如果我们要确定，是否存在一条从顶点 2 到顶点 4 的边，那我们就要遍历顶点 2 对应的那条链表，看链表中是否存在顶点 4。而且，链表的存储方式对缓存不友好。")]),t._v(" "),r("p",[t._v("在散列表那几节里，我讲到，在基于链表法解决冲突的散列表中，如果链过长，为了提高查找效率，我们可以将链表换成其他更加高效的数据结构，比如平衡二叉查找树。")]),t._v(" "),r("p",[t._v("对于图的邻接表存储，我们也"),r("strong",[t._v("可以将邻接表中的链表改成平衡二叉查找树")]),t._v("。实际开发中，我们可以选择用红黑树。这样，我们就可以更加快速地查找两个顶点之间是否存在边了。")]),t._v(" "),r("h2",{attrs:{id:"用图来储存微博中用户的友好关系"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#用图来储存微博中用户的友好关系"}},[t._v("#")]),t._v(" 用图来储存微博中用户的友好关系")]),t._v(" "),r("p",[r("strong",[t._v("数据结构是为算法服务的，所以具体选择哪种存储方法，与期望支持的操作有关系")]),t._v("。针对微博用户关系，假设我们需要支持下面这样几个操作：")]),t._v(" "),r("ul",[r("li",[t._v("判断用户 A 是否关注了用户 B；")]),t._v(" "),r("li",[t._v("判断用户 A 是否被用户 B 关注；")]),t._v(" "),r("li",[t._v("用户 A 关注/取消关注用户 B；")]),t._v(" "),r("li",[t._v("根据用户名称的首字母排序，分页获取用户的 “粉丝” 列表；")]),t._v(" "),r("li",[t._v("根据用户名称的首字母排序，分页获取用户的 “关注” 列表。")])]),t._v(" "),r("p",[t._v("因为社交网络是一张"),r("strong",[t._v("稀疏图")]),t._v("，使用邻接矩阵存储比较浪费存储空间。所以，这里我们采用"),r("strong",[t._v("邻接表")]),t._v("来存储。")]),t._v(" "),r("p",[t._v("用一个邻接表来存储这种有向图是不够的。我们去查找某个用户关注了（指向了）哪些用户是容易的，但是如果要想知道某个用户都被哪些用户关注了（被指向），也就是用户的粉丝列表，是困难的。")]),t._v(" "),r("p",[t._v("所以，我们需要一个"),r("strong",[t._v("逆邻接表")]),t._v("。邻接表中存储了用户的关注关系，逆邻接表中存储的是用户的被关注关系。")]),t._v(" "),r("p",[t._v("对应到图上，邻接表中，每个顶点的链表中，存储的就是这个顶点指向的顶点，逆邻接表中，每个顶点的链表中，存储的是指向这个顶点的顶点。如果要查找某个用户关注了哪些用户，我们可以在邻接表中查找；如果要查找某个用户被哪些用户关注了，我们从逆邻接表中查找。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-15-11-38-14.png",alt:"2020-1-15-11-38-14.png"}})]),t._v(" "),r("p",[t._v("如果对于小规模的数据，比如社交网络中只有几万、几十万个用户，我们可以将整个社交关系存储在内存中。但是如果像微博那样有上亿的用户，数据规模太大，我们就无法全部存储在内存中了。")]),t._v(" "),r("p",[t._v("我们可以"),r("strong",[t._v("通过哈希算法等数据分片方式，将邻接表存储在不同的机器上")]),t._v("。你可以看下面这幅图，我们在机器 1 上存储顶点 1，2，3 的邻接表，在机器 2 上，存储顶点 4，5 的邻接表。逆邻接表的处理方式也一样。当要查询顶点与顶点关系的时候，我们就利用同样的哈希算法，先定位顶点所在的机器，然后再在相应的机器上查找。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-15-11-41-48.png",alt:"2020-1-15-11-41-48.png"}})]),t._v(" "),r("p",[t._v("除这些之外，我们也可以用数据库来储存 \b 图的关系。用下面这张表来存储这样一个图。为了高效地支持前面定义的操作，我们可以在表上建立多个索引，比如第一列、第二列，给这两列都建立索引。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-15-11-44-43.png",alt:"2020-1-15-11-44-43.png"}})])])}),[],!1,null,null,null);a.default=s.exports}}]);