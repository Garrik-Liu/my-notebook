// 引入模块
const http = require('http');
const url = require('url');

// 引入 getStatic 模块
const getStatic = require('./module/getStatic');

const port = 3001;

// 开启 HTTP 服务器
const server = http.createServer(((req, res) => {
    // 解析请求 URL
    let reqUrlObj = url.parse(req.url);

    // 加载静态资源
    getStatic(req, res, 'public', reqUrlObj.pathname, 'public/html');
}));

// 监听端口请求
server.listen(port, function() {
    console.log(`服务器正在监听 ${port} 端口`);
});