(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{462:function(t,v,_){"use strict";_.r(v);var a=_(0),r=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[_("router-link",{attrs:{to:"/计算机科学/网络/http/"}},[t._v("返回目录")])],1),t._v(" "),_("h1",{attrs:{id:"网络基础"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#网络基础"}},[t._v("#")]),t._v(" 网络基础")]),t._v(" "),_("h2",{attrs:{id:"tcp-ip"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip"}},[t._v("#")]),t._v(" TCP/IP")]),t._v(" "),_("p",[t._v("通常使用的网络（包括互联网）是在 TCP/IP 协议族的基础上运作的, HTTP 属于它内部的一个子集。")]),t._v(" "),_("p",[t._v("计算机与网络设备要相互通信，双方就必须基于相同的方法, 比如，如何探测到通信目标、由哪一边先发起通信、使用哪种语言进行通信、怎样结束通信等规则都需要事先确定。不同的硬件、操作系统之间的通信，所有的这一切都需要一种规则。而我们就把这种规则称为协议（protocol）。")]),t._v(" "),_("p",[t._v("协议中存在各式各样的内容。从电缆的规格到 IP 地址的选定方法、寻找异地用户的方法、双方建立通信的顺序，以及 Web 页面显示需要处理的步骤，等等。")]),t._v(" "),_("p",[t._v("互联网相关联的协议集合起来总称为 TCP/IP。也有说法认为，TCP/IP 是指 TCP 和 IP 这两种协议。")]),t._v(" "),_("h3",{attrs:{id:"tcp-ip-的分层管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip-的分层管理"}},[t._v("#")]),t._v(" TCP/IP 的分层管理")]),t._v(" "),_("p",[t._v("TCP/IP 协议族按层次分别分为以下 4 层："),_("strong",[t._v("应用层、传输层、网络层 和 数据链路层")]),t._v("。")]),t._v(" "),_("p",[t._v("把 TCP/IP 层次化是有好处的。比如，如果互联网只由一个协议统筹，某个地方需要改变设计时，就必须把所有部分整体替换掉。而分层之后只需把变动的层替换掉即可。把各层之间的接口部分规划好之后，每个层次内部的设计就能够自由改动了。")]),t._v(" "),_("p",[t._v("分层之后设计也变得简单, 比如应用层上的应用可以只考虑分派给自己的任务, 而不需要考虑别的层次做什么.")]),t._v(" "),_("h4",{attrs:{id:"应用层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#应用层"}},[t._v("#")]),t._v(" 应用层")]),t._v(" "),_("p",[t._v("应用层决定了向用户提供应用服务时通信的活动。")]),t._v(" "),_("p",[t._v("TCP/IP 协议族内预存了各类通用的应用服务。比如，FTP（File Transfer Protocol，文件传输协议）和 DNS（Domain Name System，域名系统）服务就是其中两类。")]),t._v(" "),_("p",[t._v("HTTP 协议也处于该层。")]),t._v(" "),_("h4",{attrs:{id:"传输层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#传输层"}},[t._v("#")]),t._v(" 传输层")]),t._v(" "),_("p",[t._v("传输层对上层应用层，提供处于网络连接中的两台计算机之间的数据传输。")]),t._v(" "),_("p",[t._v("在传输层有两个性质不同的协议：TCP（Transmission Control Protocol，传输控制协议）和 UDP（User Data Protocol，用户数据报协议）。")]),t._v(" "),_("h4",{attrs:{id:"网络层（又名网络互连层）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#网络层（又名网络互连层）"}},[t._v("#")]),t._v(" 网络层（又名网络互连层）")]),t._v(" "),_("p",[t._v("网络层用来处理在网络上流动的数据包。数据包是网络传输的最小数据单位。该层规定了通过怎样的路径（所谓的传输路线）到达对方计算机，并把数据包传送给对方。")]),t._v(" "),_("p",[t._v("与对方计算机之间通过多台计算机或网络设备进行传输时，网络层所起的作用就是在众多的选项内选择一条传输路线。")]),t._v(" "),_("h4",{attrs:{id:"链路层（又名数据链路层，网络接口层）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#链路层（又名数据链路层，网络接口层）"}},[t._v("#")]),t._v(" 链路层（又名数据链路层，网络接口层）")]),t._v(" "),_("p",[t._v("用来处理连接网络的硬件部分。包括控制操作系统、硬件的设备驱动、NIC（Network Interface Card，网络适配器，即网卡），及光纤等物理可见部分（还包括连接器等一切传输媒介）。硬件上的范畴均在链路层的作用范围之内。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://i.imgur.com/kWbSabC.png",alt:"05.d01z.006"}})]),t._v(" "),_("p",[t._v("假如作为发送端的客户端在应用层（HTTP 协议）发出一个想看某个 Web 页面的 HTTP 请求:")]),t._v(" "),_("ul",[_("li",[t._v("为了传输方便，在传输层（TCP 协议）把从应用层处收到的数据（HTTP 请求报文）进行分割, 并在各个报文上打上标记序号及端口号后转发给网络层。")]),t._v(" "),_("li",[t._v("在网络层（IP 协议），增加作为通信目的地的 MAC 地址后转发给链路层。")]),t._v(" "),_("li",[t._v("接收端的服务器在链路层接收到数据，按序往上层发送，一直到应用层。当传输到应用层，才能算真正接收到由客户端发送过来的 HTTP 请求。")])]),t._v(" "),_("p",[t._v("发送端在层与层之间传输数据时，每经过一层时必定会被打上一个该层所属的首部信息。反之，接收端在层与层传输数据时，每经过一层时会把对应的首部消去。")]),t._v(" "),_("p",[t._v("这种把数据信息包装起来的做法称为封装（encapsulate）。")]),t._v(" "),_("h2",{attrs:{id:"ip、tcp-和-dns"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ip、tcp-和-dns"}},[t._v("#")]),t._v(" IP、TCP 和 DNS")]),t._v(" "),_("h3",{attrs:{id:"负责传输的-ip-协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#负责传输的-ip-协议"}},[t._v("#")]),t._v(" 负责传输的 IP 协议")]),t._v(" "),_("p",[t._v("按层次分，IP（Internet Protocol）网际协议位于网络层。可能有人会把“IP”和“IP 地址”搞混，“IP”其实是一种协议的名称。")]),t._v(" "),_("p",[t._v("IP 协议的作用是把各种数据包传送给对方。而要保证确实传送到对方那里，则需要满足各类条件。其中两个重要的条件是 IP 地址和 MAC 地址（Media Access Control Address）。")]),t._v(" "),_("p",[t._v("IP 地址指明了节点被分配到的地址，MAC 地址是指网卡所属的固定地址。IP 地址可以和 MAC 地址进行配对。IP 地址可变换，但 MAC 地址基本上不会更改。")]),t._v(" "),_("blockquote",[_("p",[t._v("MAC 地址是一个用来确认网络设备位置的地址, 在网络中标识一个网卡. (网络设备身份证号)")])]),t._v(" "),_("h4",{attrs:{id:"使用-arp-协议凭借-mac-地址进行通信"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用-arp-协议凭借-mac-地址进行通信"}},[t._v("#")]),t._v(" 使用 ARP 协议凭借 MAC 地址进行通信")]),t._v(" "),_("p",[t._v("IP 间的通信依赖 MAC 地址。在网络上，通信的双方在同一局域网（LAN）内的情况是很少的，通常是经过多台计算机和网络设备中转才能连接到对方。而在进行中转时，会利用下一站中转设备的 MAC 地址来搜索下一个中转目标。这时，会采用 ARP 协议（Address Resolution Protocol）。"),_("strong",[t._v("ARP 是一种用以解析地址的协议，根据通信方的 IP 地址就可以反查出对应的 MAC 地址")]),t._v("。")]),t._v(" "),_("h3",{attrs:{id:"确保可靠性的-tcp-协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#确保可靠性的-tcp-协议"}},[t._v("#")]),t._v(" 确保可靠性的 TCP 协议")]),t._v(" "),_("p",[t._v("按层次分，TCP 位于传输层，提供可靠的字节流服务。")]),t._v(" "),_("p",[t._v("所谓的字节流服务（Byte Stream Service）是指，为了方便传输，"),_("strong",[t._v("将大块数据分割成以报文段（segment）为单位的数据包进行管理")]),t._v("。而可靠的传输服务是指，能够把数据准确可靠地传给对方。一言以蔽之，TCP 协议为了更容易传送大数据才把数据分割，而且 "),_("strong",[t._v("TCP 协议能够确认数据最终是否送达到对方")]),t._v("。")]),t._v(" "),_("h4",{attrs:{id:"三次握手"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三次握手"}},[t._v("#")]),t._v(" 三次握手")]),t._v(" "),_("p",[t._v("为了准确无误地将数据送达目标处，TCP 协议采用了"),_("strong",[t._v("三次握手")]),t._v("（three-way handshaking）策略。用 TCP 协议把数据包送出去后，TCP 不会对传送后的情况置之不理，它一定会向对方确认是否成功送达。握手过程中使用了 TCP 的标志（flag） —— SYN（synchronize） 和 ACK（acknowledgement）。")]),t._v(" "),_("p",[t._v("发送端首先发送一个带 SYN 标志的数据包给对方。接收端收到后，回传一个带有 SYN/ACK 标志的数据包以示传达确认信息。最后，发送端再回传一个带 ACK 标志的数据包，代表“握手”结束。")]),t._v(" "),_("p",[t._v("若在握手过程中某个阶段莫名中断，TCP 协议会再次以相同的顺序发送相同的数据包。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://i.imgur.com/RZEQabL.png",alt:"05.d01z.009"}})]),t._v(" "),_("h3",{attrs:{id:"负责域名解析的-dns-服务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#负责域名解析的-dns-服务"}},[t._v("#")]),t._v(" 负责域名解析的 DNS 服务")]),t._v(" "),_("p",[t._v("DNS（Domain Name System）服务是和 HTTP 协议一样位于应用层的协议。它提供域名到 IP 地址之间的解析服务。")]),t._v(" "),_("p",[t._v("计算机既可以被赋予 IP 地址，也可以被赋予主机名和域名。用户通常使用主机名或域名来访问对方的计算机，而不是直接通过 IP 地址访问。因为与 IP 地址的一组纯数字相比，用字母配合数字的表示形式来指定计算机名更符合人类的记忆习惯。")]),t._v(" "),_("p",[t._v("但是对于计算机来说理解名称就很困难了, \b 为了解决这个 \b 问题 DNS 服务应运而生。DNS 协议提供通过域名查找 IP 地址，或逆向从 IP 地址反查域名的服务。")]),t._v(" "),_("blockquote",[_("p",[t._v("域名（Domain Name）是由一串用点分隔的名字组成的 Internet 上某一台计算机或计算机组的名称，用于在数据传输时标识计算机的电子方位.")])]),t._v(" "),_("blockquote",[_("p",[t._v("主机名就是域名下具体的一台主机的名字")])]),t._v(" "),_("h3",{attrs:{id:"各种协议与-http-协议的关系"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#各种协议与-http-协议的关系"}},[t._v("#")]),t._v(" 各种协议与 HTTP 协议的关系")]),t._v(" "),_("p",[t._v("我们再通过这张图来了解下 IP 协议、TCP 协议和 DNS 服务在使用 HTTP 协议的通信过程中各自发挥了哪些作用。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://i.imgur.com/Wj5qY3G.png",alt:"05.d01z.011"}})]),t._v(" "),_("h2",{attrs:{id:"uri-和-url"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#uri-和-url"}},[t._v("#")]),t._v(" URI 和 URL")]),t._v(" "),_("p",[t._v("URL（Uniform Resource Locator，统一资源定位符）是使用 Web 浏览器等访问 Web 页面时需要输入的网页地址。")]),t._v(" "),_("p",[t._v("URI 是 Uniform Resource Identifier 统一资源标志符")]),t._v(" "),_("p",[t._v("简单说 URI 是身份证号, URL 是 \b 一个人的唯一地址")]),t._v(" "),_("p",[_("strong",[t._v("Uniform")])]),t._v(" "),_("p",[t._v("规定统一的格式可方便处理多种不同类型的资源，而不用根据上下文环境来识别资源指定的访问方式。另外，加入新增的协议方案（如 http: 或 ftp:）也更容易。")]),t._v(" "),_("p",[_("strong",[t._v("Resource")])]),t._v(" "),_("p",[t._v("资源的定义是 “可标识的任何东西”。不仅是文档文件、图像或服务（例如当天的天气预报）等能够区别于其他类型的，全都可作为资源。另外，资源不仅可以是单一的，也可以是多数的集合体。")]),t._v(" "),_("p",[_("strong",[t._v("Identifier")])]),t._v(" "),_("p",[t._v("表示可标识的对象。也称为标识符。")]),t._v(" "),_("p",[t._v("综上所述，"),_("strong",[t._v("URI 就是由某个协议方案表示的 资源的定位标识符。协议方案是指访问资源所使用的协议类型名称")]),t._v("。采用 HTTP 协议时，协议方案就是 HTTP. 除此之外，还有 ftp、mailto、telnet、file 等。标准的 URI 协议方案有 30 种左右.")]),t._v(" "),_("p",[_("strong",[t._v("通过 URL 找到资源是对网络位置进行标识，通过 URI 找到资源是通过对名称进行标识。可见 URL 是 URI 的子集")]),t._v("。")]),t._v(" "),_("h3",{attrs:{id:"uri-格式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#uri-格式"}},[t._v("#")]),t._v(" URI 格式")]),t._v(" "),_("p",[t._v("表示指定的 URI，要使用涵盖全部必要信息的绝对 URI、绝对 URL 以及相对 URL。相对 URL，是指从浏览器中基本 URI 处指定的 URL，形如 "),_("code",[t._v("/image/logo.gif")]),t._v("。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://i.imgur.com/ACPZc6Q.png",alt:"05.d01z.013"}})]),t._v(" "),_("p",[_("strong",[t._v("片段标识符")])]),t._v(" "),_("p",[t._v("使用片段标识符通常可标记出已获取资源中的子资源（文档内的某个位置）。")])])}),[],!1,null,null,null);v.default=r.exports}}]);