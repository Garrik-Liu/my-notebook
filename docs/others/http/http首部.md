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