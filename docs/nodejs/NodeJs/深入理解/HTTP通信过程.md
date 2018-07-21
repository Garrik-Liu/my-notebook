# HTTP 通信过程

## 创建一个 HTTP 服务器

``` js
const http = require('http');

const server = http.createServer((request, response) => {
  // magic happens here!
});
```

`http.createServer([options][, requestListener])` 创建一个 `http.Server` 实例. 接收一个函数作为  'request' 事件的监听函数.

`http.Server` 实例 同时也是一个 `events.EventEmitter` 对象实例

上面的代码等价于:

``` js
const http = require('http');
const server = http.createServer();
server.on('request', (request, response) => {
  // the same kind of magic happens here!
});
```

当服务器接收到 http 请求的时候, 就会在请求处理函数中去处理 `request`, `response` 对象, 而为了监听到客户端发过来的请求, 就需要用到 `listen` 方法.

`listen` 方法用于监听一个具体的服务器端口, 以来接收从客户端发到指定端口的请求.

``` js
server.listen(3000);
```

### 请求方法, URL 和 请求头部

[http.IncomingMessage 文档](https://nodejs.org/api/http.html#http_class_http_incomingmessage)

在处理请求的时候, 我们最先要看的一般就是 请求方法 和 请求 URL.

从客户端发过来的请求对象里面包含着这些属性, 可以很方便的获取到.

> 请求对象是 `http.IncomingMessage` 实例

`req.headers` 例子

``` js
{ host: 'localhost:3001',
  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:61.0) Gecko/20100101 Firefox/61.0',
  accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  'accept-language': 'zh-CN,en-GB;q=0.7,en;q=0.3',
  'accept-encoding': 'gzip, deflate',
  connection: 'keep-alive',
  'upgrade-insecure-requests': '1',
  'cache-control': 'max-age=0' }
```

### 请求体

当收到 `POST` 或 `PUT` 请求的时候, 请求体就尤为重要了.  

请求对象实现了 ReadableStream 接口, 所有的流都是 EventEmitter 的实例
(IncomingMessage 继承自 EventEmitter)

请求对象可以监听流的 `data` 和 `end` 事件,
`data` 事件向其回调函数传递一个 Buffer 类型的参数.
之后在 `end` 事件的回调函数中将所有数据 字符串化.

``` js
let body = [];
request.on('data', (chunk) => {
  body.push(chunk);
}).on('end', () => {
  body = Buffer.concat(body).toString();
  // at this point, `body` has the entire request body stored in it as a string
});
```

### 错误处理

因为 请求对象是一个 EventEmitter, 所以它可以接受 `error` 事件.  
如果不为 `error` 事件设置一个监听函数的话, 如果错误发生, 服务器就会崩停的.

``` js
request.on('error', (err) => {
  console.log(err);
});
```

最好向客户端返回一个 http 回应.

## 服务器做出回应

收到客户端发过来的请求后, 服务器就要向客户端返回一个响应了.

响应对象 是 `http.ServerResponse` 实例, 实现了 ` WritableStream` 接口.

### 状态码, 响应头, 响应头

响应状态码 默认是 200.

如果想设置的话, 可以通过 `statusCode` 属性.
``` js
response.statusCode = 404;
```

通过 `setHeader` 方法可以设置 响应头

``` js
response.setHeader('Content-Type', 'application/json');
response.setHeader('X-Powered-By', 'bacon');
```

通过 `writeHead`, 可以同时设置这两个:

``` js
response.writeHead(200, {
  'Content-Type': 'application/json',
  'X-Powered-By': 'bacon'
});
```

因为 响应对象 实现了 `WriteableStrem` 接口, 我们可以手动去写响应体

``` js
response.write('<html>');
response.write('<body>');
response.write('<h1>Hello, World!</h1>');
response.write('</body>');
response.write('</html>');
response.end();
```

`end()` 函数可以用来在流的最后添加数据, 上面代码也可以写成:

``` js
response.end('<html><body><h1>Hello, World!</h1></body></html>');
```

### 错误处理

``` js
response.on('error', (err) => {
    console.error(err);
});
```