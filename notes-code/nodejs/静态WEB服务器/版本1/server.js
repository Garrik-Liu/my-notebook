// 引入模块
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// 引入 contentTypes 模块
const contentTypes = require('./contentTypes');

const port = 3001;


// 开启 HTTP 服务器
const server = http.createServer(((req, res) => {
    let reqUrlObj = url.parse(req.url);
    let fileExt = path.extname(reqUrlObj.pathname);
    let filePathname = reqUrlObj.pathname;

    // 根据不同的 访问 URL, 加载相应的静态资源, 没有就返回 404
    fs.readFile('public/' + filePathname, (err, data) => {
        if (err) {
            fs.readFile('public/html/404.html', (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Error: 找不到 " + filePathname);
                    res.writeHead(404, { "Content-Type": "text/html" });
                    res.write(data);
                    res.end();
                }
            });
        } else {
            // 通过 contentTypes 去获取不同 后缀名 对应的 Content-Tyoe, 然后返回响应
            contentTypes.getType(fileExt, (mimeType) => {

                console.log(req.method + " " + req.url);

                res.writeHead(200, { "Content-Type": mimeType });
                res.write(data);
                res.end();
            })
        }
    });
}));

// 监听端口
server.listen(port, function() {
    console.log(`服务器正在监听 ${port} 端口`);
});