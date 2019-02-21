// 引入模块
const http = require('http');


const router = require('./router');

const port = 3001;

// 开启 HTTP 服务器
const server = http.createServer(((req, res) => {
    router(req, res);
}));

// 监听端口请求
server.listen(port, function() {
    console.log(`服务器正在监听 ${port} 端口`);
});