# HTTP 首部 

HTTP 协议的请求和响应报文中必定包含 HTTP 首部

## HTTP 报文首部

首部内容 为 客户端和服务器 处理请求和响应 提供了所需要的信息。

### HTTP 请求报文

![Screen Shot 2018-07-11 at 12.14.08 PM](https://i.imgur.com/Ts3FoD8.png)

> 下面的示例是访问 http://hackr.jp 时，请求报文的首部信息。

```
GET / HTTP/1.1
Host: hackr.jp
User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64; rv:13.0) Gecko/20100101 Firefox/13.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*; q=0.8
Accept-Language: ja,en-us;q=0.7,en;q=0.3
Accept-Encoding: gzip, deflate
DNT: 1
Connection: keep-alive
If-Modified-Since: Fri, 31 Aug 2007 02:02:20 GMT
If-None-Match: "45bae1-16a-46d776ac"
Cache-Control: max-age=0
```

### HTTP 响应报文

![Screen Shot 2018-07-11 at 12.15.32 PM](https://i.imgur.com/5vOgyzu.png)

> 以下示例是之前请求访问 http://hackr.jp/ 时，返回的响应报文的首部信息。

```
HTTP/1.1 304 Not Modified
Date: Thu, 07 Jun 2012 07:21:36 GMT
Server: Apache
Connection: close
Etag: "45bae1-16a-46d776ac"
```

## HTTP 首部字段 

HTTP 首部字段是构成 HTTP 报文的要素之一。在客户端与服务器之间以 HTTP 协议进行通信的过程中，无论是请求还是响应都会使用首部字段，它能起到传递额外重要信息的作用。

使用首部字段是为了给浏览器和服务器提供报文主体大小、所使用的语言、认证信息等内容。

### HTTP 首部字段结构

HTTP 首部字段是由 首部字段名 和 字段值 构成的，中间用冒号“:” 分隔。

```
首部字段名: 字段值
```

> 例如，在 HTTP 首部中以 Content-Type 这个字段来表示报文主体的 对象类型。
> `Content-Type: text/html`

另外, 单个字段名 可以对应多个 字段值,
例如`Keep-Alive: timeout=15, max=100`

### 4 种 HTTP 首部字段类型

* **通用首部字段**（General Header Fields）
请求报文和响应报文两方都会使用的首部。

* **请求首部字段**（Request Header Fields）
从客户端向服务器端发送请求报文时使用的首部。补充了请求的附加内容、客户端信息、响应内容相关优先级等信息。

* **响应首部字段**（Response Header Fields）
从服务器端向客户端返回响应报文时使用的首部。补充了响应的附加内容，也会要求客户端附加额外的内容信息。

* **实体首部字段**（Entity Header Fields）
针对请求报文和响应报文的实体部分使用的首部。补充了资源内容更新时间等与实体有关的信息。

## HTTP/1.1 首部字段一览

HTTP/1.1 规范定义了如下 47 种首部字段。在 HTTP 协议通信交互中使用到的首部字段，不限于 RFC2616 中定义的 47 种首部字段。还有 Cookie、Set-Cookie 和 Content-Disposition 等在其他 RFC 中定义的首部字段.

这些非正式的首部字段统一归纳在 RFC4229 HTTP Header Field Registrations 中。

### 通用首部字段
首部字段名 | 说明
--- | ---
Cache-Control |	控制缓存的行为
Connection |	逐跳首部、连接的管理
Date 	|创建报文的日期时间
Pragma |	报文指令
Trailer |	报文末端的首部一览
Transfer-Encoding |	指定报文主体的传输编码方式
Upgrade |	升级为其他协议
Via 	|代理服务器的相关信息
Warning |	错误通知

### 请求首部字段
首部字段名 |	说明
--- | ---
Accept  |	用户代理可处理的媒体类型
Accept-Charset  |	优先的字符集
Accept-Encoding  |	优先的内容编码
Accept-Language  |	优先的语言（自然语言）
Authorization  |	Web认证信息
Expect  |	期待服务器的特定行为
From  |	用户的电子邮箱地址
Host  |	请求资源所在服务器
If-Match 	 |比较实体标记（ETag）
If-Modified-Since  |	比较资源的更新时间
If-None-Match  |	比较实体标记（与 If-Match 相反）
If-Range  |	资源未更新时发送实体 Byte 的范围请求
If-Unmodified-Since  |	比较资源的更新时间（与If-Modified-Since相反）
Max-Forwards  |	最大传输逐跳数
Proxy-Authorization  |	代理服务器要求客户端的认证信息
Range  |	实体的字节范围请求
Referer  |	对请求中 URI 的原始获取方
TE  |	传输编码的优先级
User-Agent 	 |HTTP 客户端程序的信息

### 响应首部字段

首部字段名 	| 说明
--- | ---
Accept-Ranges| 	是否接受字节范围请求
Age |	推算资源创建经过时间
ETag |	资源的匹配信息
Location |	令客户端重定向至指定URI
Proxy-Authenticate| 	代理服务器对客户端的认证信息
Retry-After| 	对再次发起请求的时机要求
Server |	HTTP服务器的安装信息
Vary |	代理服务器缓存的管理信息
WWW-Authenticate |	服务器对客户端的认证信息

### 实体首部字段

首部字段名 |	说明
--- | ---
Allow |	资源可支持的HTTP方法
Content-Encoding |	实体主体适用的编码方式
Content-Language |	实体主体的自然语言
Content-Length |	实体主体的大小（单位：字节）
Content-Location 	|替代对应资源的URI
Content-MD5 |	实体主体的报文摘要
Content-Range |	实体主体的位置范围
Content-Type 	|实体主体的媒体类型
Expires |	实体主体过期的日期时间
Last-Modified 	|资源的最后修改日期时间

## 通用首部字段

太多了, 没必要搬过来.

[原文链接](http://www.ituring.com.cn/book/miniarticle/74655)

## 请求首部字段 

请求首部字段是从客户端往服务器端发送请求报文中所使用的字段,
用于补充请求的附加信息、客户端信息、对响应内容相关的优先级等内容。

**Accept**

Accept 首部字段可通知服务器，客户端能够处理的媒体类型及媒体类型的相对优先级。

可使用 `type/subtype` 这种形式，一次指定多种媒体类型。

若想要给显示的媒体类型增加优先级，则使用 `q=` 来额外表示权重值，用分号 ; 进行分隔。

权重值 q 的范围是 0~1（可精确到小数点后 3 位），且 1 为最大值。不指定权重 q 值时，默认权重为 q=1.0。

```
Accept: text/plain; q=0.3, text/html
```

上面你这句话的意思就是, 如果资源有 HTML 格式的就给我, 如果没有 TEXT 文本格式也凑活.

**Accept-Charset**

Accept-Charset 首部字段可用来通知服务器, 客户端支持的字符集 及 字符集的相对优先顺序。
可一次性指定多种字符集。与首部字段 Accept 相同的是可用权重 q 值来表示相对优先级。

**Accept-Encoding**

Accept-Encoding 首部字段用来告知服务器用户代理支持的内容编码 (gzip, compress, deflate, identity...) 及内容编码的优先级顺序。

**Accept-Language**

首部字段 Accept-Language 用来告知服务器用户代理能够处理的自然语言集（指中文或英文等），以及自然语言集的相对优先级。可一次指定多种自然语言集。

**Authorization**

首部字段 Authorization 是用来告知服务器，用户代理的认证信息（证书值）。

通常，想要通过服务器认证的用户代理会在接收到返回的 401 状态码响应后，把首部字段 Authorization 加入请求中。

**Expect**

客户端使用首部字段 Expect 来告知服务器，期望出现的某种特定行为。。因服务器无法理解客户端的期望作出回应而发生错误时，会返回状态码 417 Expectation Failed。

不太懂?

**From**

首部字段 From 用来告知服务器使用用户代理的用户的电子邮件地址。

**Host**

首部字段 Host 会告知服务器，请求的资源所处的互联网主机名和端口号。

Host 首部字段在 HTTP/1.1 规范内是唯一一个**必须被包含在请求内的首部字段**。

因为可能出现单个服务器,同时部署多个域名. 每个域名都公用同一个 IP , 所以必须指明资源所在的具体位置.

**If-Match**

形如 If-xxx 这种样式的请求首部字段，都可称为条件请求。
服务器接收到附带条件的请求后，只有判断指定条件为真时，才会执行请求。

首部字段 If-Match，属附带条件之一，它会告知服务器匹配资源所用的实体标记（ETag）值。

服务器会比对 If-Match 的字段值和资源的 ETag 值，仅当两者一致时，才会执行请求。反之，则返回状态码 412 Precondition Failed 的响应。

**If-Modified-Since**

首部字段 If-Modified-Since，属附带条件之一，它会告知服务器若 If-Modified-Since 字段值早于资源的更新时间，则希望能处理该请求。
而在指定 If-Modified-Since 字段值的日期时间之后，如果请求的资源都没有过更新，则返回状态码 304 Not Modified 的响应。

If-Modified-Since 用于确认代理或客户端拥有的本地资源的有效性。

获取资源的更新日期时间，可通过确认首部字段 Last-Modified 来确定。

**If-None-Match**

首部字段 If-None-Match 属于附带条件之一。它和首部字段 If-Match 作用相反。

在 GET 或 HEAD 方法中使用首部字段 If-None-Match 可获取最新的资源。因此，这与使用首部字段 If-Modified-Since 时有些类似。

**If-Range**

首部字段 If-Range 属于附带条件之一。它告知服务器若指定的 If-Range 字段值（ETag 值或者时间）和请求资源的 ETag 值或时间相一致时，则作为范围请求处理。反之，则返回全体资源。

![Screen Shot 2018-07-11 at 5.13.56 PM](https://i.imgur.com/ACpmJjy.png)

**If-Unmodified-Since**

首部字段 If-Unmodified-Since 和首部字段 If-Modified-Since 的作用相反。它的作用的是告知服务器，指定的请求资源只有在字段值内指定的日期时间之后，未发生更新的情况下，才能处理请求。

如果在指定日期时间后发生了更新，则以状态码 412 Precondition Failed 作为响应返回。

**Max-Forwards**

通过 TRACE 方法或 OPTIONS 方法，发送包含首部字段 Max-Forwards 的请求时，该字段以十进制整数形式指定可经过的服务器最大数目。

服务器在往下一个服务器转发请求之前，会将 Max-Forwards 的值减 1 后重新赋值。

当服务器接收到 Max-Forwards 值为 0 的请求时，则不再进行转发，而是直接返回响应。

**Proxy-Authorization**

接收到从代理服务器发来的认证质询时，客户端会发送包含首部字段 Proxy-Authorization 的请求，以告知服务器认证所需要的信息。

这个行为是与客户端和服务器之间的 HTTP 访问认证相类似的，不同之处在于，认证行为发生在客户端与代理之间。

**Range**

对于只需获取部分资源的范围请求，包含首部字段 Range 即可告知服务器资源的指定范围。

接收到附带 Range 首部字段请求的服务器，会在处理请求之后返回状态码为 206 Partial Content 的响应。
无法处理该范围请求时，则会返回状态码 200 OK 的响应及全部资源。

**Referer**

首部字段 Referer 会告知服务器请求的原始资源的 URI。

客户端一般都会发送 Referer 首部字段给服务器。但当直接在浏览器的地址栏输入 URI，或出于安全性的考虑时，也可以不发送该首部字段。

因为原始资源的 URI 中的查询字符串可能含有 ID 和密码等保密信息，要是写进 Referer 转发给其他服务器，则有可能导致保密信息的泄露。

**TE**

首部字段 TE 会告知服务器客户端能够处理响应的传输编码方式及相对优先级。它和首部字段 Accept-Encoding 的功能很相像，但是用于传输编码。

**User-Agent**

首部字段 User-Agent 会将创建请求的浏览器 和 用户代理名称等信息传达给服务器。

## 响应首部字段 

响应首部字段是由服务器端向客户端返回响应报文中所使用的字段，
用于补充响应的附加信息、服务器信息，以及对客户端的附加要求等信息。

**Accept-Ranges**

首部字段 Accept-Ranges 是用来告知客户端服务器是否能处理范围请求，以指定获取服务器端某个部分的资源。

可指定的字段值有两种，可处理范围请求时指定其为 `bytes`，反之则指定其为 `none`。

**Age**

首部字段 Age 能告知客户端，源服务器在多久前创建了响应。字段值的单位为秒。

若创建该响应的服务器是缓存服务器，Age 值是指缓存后的响应再次发起认证到认证完成的时间值。

**ETag**

首部字段 ETag 能告知客户端实体标识。它是一种可将资源以字符串形式做唯一性标识的方式。

服务器会为每份资源分配对应的 ETag 值。

当资源更新时，ETag 值也需要更新。生成 ETag 值时，并没有统一的算法规则，而仅仅是由服务器来分配。

**强 ETag 值和弱 Tag 值**

强 ETag 值，不论实体发生多么细微的变化都会改变其值。

弱 ETag 值只用于提示资源是否相同。只有资源发生了根本改变，产生差异时才会改变 ETag 值。这时，会在字段值最开始处附加 W/。

**Location**

使用首部字段 Location 可以将响应接收方引导至某个与请求 URI 位置不同的资源。

基本上，该字段会配合 3xx ：Redirection 的响应，提供重定向的 URI。

几乎所有的浏览器在接收到包含首部字段 Location 的响应后，都会强制性地尝试对已提示的重定向资源的访问。

**Proxy-Authenticate**

首部字段 Proxy-Authenticate 会把由代理服务器所要求的认证信息发送给客户端。

**Retry-After**

首部字段 Retry-After 告知客户端应该在多久之后再次发送请求。

主要配合状态码 503 Service Unavailable 响应，或 3xx Redirect 响应一起使用。

**Server**

首部字段 Server 告知客户端当前服务器上安装的 HTTP 服务器应用程序的信息。

**WWW-Authenticate**

首部字段 WWW-Authenticate 用于 HTTP 访问认证。

它会告知客户端适用于访问请求 URI 所指定资源的认证方案（Basic 或是 Digest）和带参数提示的质询（challenge）。

状态码 401 Unauthorized 响应中，肯定带有首部字段 WWW-Authenticate。

## 实体首部字段

懒得写了 
[原文链接](http://www.ituring.com.cn/book/miniarticle/74658)

## 为 Cookie 服务的首部字段 

Cookie 的工作机制是用户识别及状态管理。
Web 服务器 为了管理用户的状态会通过 Web 浏览器，把一些数据临时写入用户的计算机内。
接着当用户访问该 Web服务器 时，可通过通信方式取回之前存放的 Cookie。

首部字段名 	| 说明 |	首部类型
--- | --- | ---
Set-Cookie |	开始状态管理所使用的Cookie信息 |	响应首部字段
Cookie |	服务器接收到的Cookie信息 	|请求首部字段

### Set-Cookie

```
Set-Cookie: status=enable; expires=Tue, 05 Jul 2011 07:26:31 GMT; path=/; domain=.hackr.jp;
```

当服务器准备开始管理客户端的状态时，会事先告知各种信息。

> Set-Cookie 字段的属性:

属性 |	说明
--- | ---
NAME=VALUE | 	赋予 Cookie 的名称和其值（必需项）
expires=DATE 	| Cookie 的有效期（若不明确指定则默认为浏览器关闭前为止）
path=PATH | 将服务器上的文件目录作为Cookie的适用对象（若不指定则默认为文档所在的文件目录）
domain=域名 | 	作为 Cookie 适用对象的域名 （若不指定则默认为创建 Cookie 的服务器的域名）
Secure | 	仅在 HTTPS 安全通信时才会发送 Cookie
HttpOnly 	| 加以限制，使 Cookie 不能被 JavaScript 脚本访问

### Cookie

```
Cookie: status=enable
```

首部字段 Cookie 会告知服务器，当客户端想获得 HTTP 状态管理支持时，就会在请求中包含从服务器接收到的 Cookie。