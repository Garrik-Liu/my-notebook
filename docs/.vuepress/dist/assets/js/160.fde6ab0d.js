(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{372:function(_,v,t){"use strict";t.r(v);var a=t(0),r=Object(a.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"基础概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础概念"}},[_._v("#")]),_._v(" 基础概念")]),_._v(" "),t("h2",{attrs:{id:"x86-架构基本概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#x86-架构基本概念"}},[_._v("#")]),_._v(" x86 架构基本概念")]),_._v(" "),t("ul",[t("li",[_._v("x86 架构：是值特定微处理器执行的一些计算机语言指令集")]),_._v(" "),t("li",[_._v("微处理器：将 CPU 组成的三部分和少量的外围电路集成封装在一块芯片内部，但是是与内存、外设接口分离。微处理器能完成取指令、执行指令，以及与外界存储器和逻辑部件交换信息等操作；")])]),_._v(" "),t("h3",{attrs:{id:"基本微机设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本微机设计"}},[_._v("#")]),_._v(" 基本微机设计")]),_._v(" "),t("p",[_._v("下图是一个假想机的基本设计：")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-28-20-27-4.png",alt:"2020-1-28-20-27-4.png"}})]),_._v(" "),t("ul",[t("li",[_._v("中央处理单元 CPU 是算计和逻辑操作的部件。其中包含：\n"),t("ul",[t("li",[_._v("有限数量的寄存器；")]),_._v(" "),t("li",[_._v("一个高频时钟（Clock）：对 CPU 内部操作与系统其他组件进行同步；")]),_._v(" "),t("li",[_._v("一个控制单元（Control Unit）：协调参与机器指令执行的步骤序列；")]),_._v(" "),t("li",[_._v("一个算术逻辑单元（Arithmetic Logic Unit）：执行算术运算（加法，减法），以及逻辑运算（AND，OR，NOT）；")])])]),_._v(" "),t("li",[_._v("CPU 通过主板上 CPU 插座的引脚与计算机其他部分相连；")]),_._v(" "),t("li",[_._v("内存储存单元（Memory Storage Unit）：\n"),t("ul",[t("li",[_._v("用于在程序运行时保存指令和数据；")]),_._v(" "),t("li",[_._v("它接收来自 CPU 的数据请求，将数据从随机储存器（RAM）传输到 CPU，并从 CPU 传输到内存；")])])]),_._v(" "),t("li",[_._v("总线（Bus）是一组并行线，用于将数据从计算机一个部分传输到另一个部分。一般分为四类：\n"),t("ul",[t("li",[_._v("数据总线：在 CPU 和内存间传输指令和数据；")]),_._v(" "),t("li",[_._v("I/O 总线：在 CPU 和系统输入/输出设备间传输数据；")]),_._v(" "),t("li",[_._v("控制总线：用二进制信号对所有连接在系统总线上的设备的行为进行同步；")]),_._v(" "),t("li",[_._v("地址总线：当前正在执行的指令在 CPU 和内存间传输数据时，CPU 通过地址总线来指定储存单元的地址；")])])]),_._v(" "),t("li",[_._v("时钟：\n"),t("ul",[t("li",[_._v("与 CPU 和系统总线相关的每一个操作都是由一个恒定速率的内部时钟脉冲来进行同步；")]),_._v(" "),t("li",[_._v("机器指令的基本时间单位是机器周期（machine cycle）或时钟周期（clock cycle）；")]),_._v(" "),t("li",[_._v("一个时钟周期的时长是一个完整时钟脉冲所需要的时间；")]),_._v(" "),t("li",[_._v("时钟周期持续时间用时钟速度的倒数来计算，而时钟速度则用每秒振荡数来衡量；")]),_._v(" "),t("li",[_._v("🌰 例如，一个每秒振荡 10 亿次（1GHz）的时钟，其时钟周期为 10 亿分之 1 秒（1 纳秒）")])])])]),_._v(" "),t("h3",{attrs:{id:"指令执行周期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#指令执行周期"}},[_._v("#")]),_._v(" 指令执行周期")]),_._v(" "),t("p",[_._v("CPU 在执行一条机器指令时，需要经过一系列预先定义好的步骤，这些步骤被称为"),t("strong",[_._v("指令执行周期")]),_._v("（instruction execution cycle）：")]),_._v(" "),t("p",[_._v("假设现在指令指针寄存器中已经有了想要执行指令的地址，下面就是执行步骤:")]),_._v(" "),t("ol",[t("li",[_._v("CPU 从被称为"),t("strong",[_._v("指令队列")]),_._v("（ instruction queue）的内存区域取得指令，之后立即增加指令指针的值。")]),_._v(" "),t("li",[_._v("CPU 对指令的二进制位模式进行译码。这种位模式可能会表示该指令有"),t("strong",[_._v("操作数")]),_._v("。\n"),t("ul",[t("li",[_._v("操作数（operand）是指操作过程中输入或输出的值。")]),_._v(" "),t("li",[_._v("例如，表达式 Z=X+Y 有两个输入操作数（X 和 Y），一个输出操作数（Z）")])])]),_._v(" "),t("li",[_._v("如果有操作数，CPU 就从寄存器和内存中取得操作数。有时，这步还包括了地址计算。")]),_._v(" "),t("li",[_._v("使用步骤 3 得到的操作数，CPU 执行该指令。同时更新部分"),t("strong",[_._v("状态标志位")]),_._v("，如零标志（Zero）、进位标志（Carry）和溢出标志（Overflow）")]),_._v(" "),t("li",[_._v("如果输出操作数也是该指令的一部分，则 CPU 还需要存放其执行结果。")])]),_._v(" "),t("p",[_._v("上述过程可以简化为三个步骤:")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("取指")]),_._v("（Fetch）")]),_._v(" "),t("li",[t("strong",[_._v("译码")]),_._v("（Decode）")]),_._v(" "),t("li",[t("strong",[_._v("执行")]),_._v("（Execute）")])]),_._v(" "),t("p",[_._v("下图是一个典型 CPU 中的数据流框图：")]),_._v(" "),t("ul",[t("li",[_._v("在从内存读取程序指令之前，将其地址放到地址总线上；")]),_._v(" "),t("li",[_._v("然后，内存控制器将所需代码送到内存数据总线上，存入代码高速缓存（code cache）；")]),_._v(" "),t("li",[_._v("指令指针的值决定下一条将要执行的指令；")]),_._v(" "),t("li",[_._v("指令由指令译码器分析，并产生相应的数值信号送往控制单元，其协调 ALU 和浮点单元")]),_._v(" "),t("li",[_._v("上图没有画出控制总线，但是其上传输的信号用系统时钟协调不同 CPU 部件之间的数据传输。")])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-28-21-59-7.png",alt:"2020-1-28-21-59-7.png"}})]),_._v(" "),t("h3",{attrs:{id:"读取内存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#读取内存"}},[_._v("#")]),_._v(" 读取内存")]),_._v(" "),t("h3",{attrs:{id:"加载并执行程序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加载并执行程序"}},[_._v("#")]),_._v(" 加载并执行程序")]),_._v(" "),t("h2",{attrs:{id:"_32-位-x86-处理器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_32-位-x86-处理器"}},[_._v("#")]),_._v(" 32 位 x86 处理器")]),_._v(" "),t("h2",{attrs:{id:"_64-位-x86-64-处理器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_64-位-x86-64-处理器"}},[_._v("#")]),_._v(" 64 位 x86-64 处理器")]),_._v(" "),t("h2",{attrs:{id:"典型-x86-计算机组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#典型-x86-计算机组件"}},[_._v("#")]),_._v(" 典型 x86 计算机组件")]),_._v(" "),t("h3",{attrs:{id:"主板"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主板"}},[_._v("#")]),_._v(" 主板")]),_._v(" "),t("h3",{attrs:{id:"内存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内存"}},[_._v("#")]),_._v(" 内存")]),_._v(" "),t("ul",[t("li",[_._v("只读储存器（ROM）")]),_._v(" "),t("li",[_._v("可擦除可编程只读储存器（EPROM）")]),_._v(" "),t("li",[_._v("动态随机访问储存器（DRAM）")]),_._v(" "),t("li",[_._v("静态随机访问储存器（SRAM）")]),_._v(" "),t("li",[_._v("图像随机访问储存器（VRAM）")]),_._v(" "),t("li",[_._v("互补金属氧化物半导体随机访问储存器（CMOSRAM）")])]),_._v(" "),t("h2",{attrs:{id:"输入输出系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#输入输出系统"}},[_._v("#")]),_._v(" 输入输出系统")])])}),[],!1,null,null,null);v.default=r.exports}}]);