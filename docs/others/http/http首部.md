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