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