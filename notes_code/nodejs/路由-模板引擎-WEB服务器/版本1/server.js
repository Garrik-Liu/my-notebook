// 引入模块
const http = require('http');
const url = require('url');

const port = 3001;

// 开启 HTTP 服务器
const server = http.createServer(((req, res) => {

    const pathname = url.parse(req.url).pathname;

    res.writeHead(200, { 'Content-Type': 'text/plain' });

    console.log(pathname);

    switch (pathname) {
        case '/':
            res.end('index');
            break;
        case '/about':
            res.end('about');
            break;
        default:
            res.end('404');
            break;
    }

}));

// 监听端口请求
server.listen(port, function() {
    console.log(`服务器正在监听 ${port} 端口`);
});