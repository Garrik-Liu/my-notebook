const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const contentTypes = require('./contentTypes');

const port = 3000;

const server = http.createServer(((req, res) => {
    let reqUrlObj = url.parse(req.url);
    let fileExt = path.extname(reqUrlObj.pathname);
    let filePathname = reqUrlObj.pathname;

    console.log(req.method + " " + req.url);

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
            contentTypes.getType(fileExt, (mimeType) => {
                res.writeHead(200, { "Content-Type": mimeType });
                res.write(data);
                res.end();
            })
        }
    });
}));

server.listen(port, function() {
    console.log(`服务器正在监听 ${port} 端口`);
});