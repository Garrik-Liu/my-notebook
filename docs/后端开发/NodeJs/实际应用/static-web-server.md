# 静态 WEB 服务器

[代码链接](https://github.com/Garrik-Liu/front-end-notebook/tree/notes-code/nodejs/%E9%9D%99%E6%80%81WEB%E6%9C%8D%E5%8A%A1%E5%99%A8)

## 原始版

项目目录:

``` bash
.
├── contentTypes.js
├── mimeTypes.json
├── public
│   ├── css
│   │   ├── 404.css
│   │   ├── about.css
│   │   └── index.css
│   └── html
│       ├── 404.html
│       ├── about.html
│       └── index.html
└── server.js
```

### 服务器代码:

``` js
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
            // 用 回调函数 去返回响应, 这样才能获得函数返回的 mimeType.
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
```

### 获取 'Content-Type' 的模块:

``` js
const fs = require('fs');

function getType(ext, callback) {
    // mimeTypes.json 保存了 不同文件后缀名 对应的 Content-Type 值
    fs.readFile('./mimeTypes.json', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            // 读取后, 将 JSON 解析成 JS 对象.
            let mimeTypes = JSON.parse(data.toString());

            // 如果找不到, 默认返回 'text/plain'
            let mimeType = mimeTypes[ext] || 'text/plain';

            // 用 回调函数 去返回 mimeType, 否则因为是异步, 返回的是 'undefined'
            callback(mimeType);
        }
    });
}

module.exports = {
    getType: getType,
}
```

## 重构版

项目目录:

``` bash
.
├── module
│   ├── getStatic.js
│   └── mimeTypes.js
├── public
│   ├── css
│   │   ├── 404.css
│   │   ├── about.css
│   │   └── index.css
│   └── html
│       ├── 404.html
│       ├── about.html
│       └── index.html
└── server.js
```

### 服务器代码

``` js
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
```

### 获取静态文件的模块

getStatic.js 是用来获取静态文件的模块

``` js
// 引入模块
const fs = require('fs');
const path = require('path');

// 引入 mimeType 模块
const mimeTypes = require('./mimeTypes');

// 导出模块
module.exports = function(req, res, staticPath, filePathname, errPath) {

    // 获得文件后缀名
    let fileExt = path.extname(filePathname);


    // 读取相应文件, 如果有错误返回 404
    fs.readFile(staticPath + filePathname, (err, data) => {
        if (err) {
            fs.readFile(errPath + '/404.html', (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    // 控制台显示 找不到相关文件
                    console.log("Error: 找不到 " + filePathname);

                    // 服务器返回 404 页面
                    res.writeHead(404, { "Content-Type": "text/html" });
                    res.write(data);
                    res.end();
                }
            });
        } else {
            getType(mimeTypes, fileExt, (mimeType) => {
                // 控制台显示 请求方式 和 请求 URL
                console.log(req.method + " " + req.url);

                // 服务器返回响应
                res.writeHead(200, { "Content-Type": mimeType });
                res.write(data);
                res.end();
            })

        }
    });
};

// 根据不同的 后缀名 去定义不同的 Content-Type
function getType(mimeTypes, ext, callback) {

    let mimeTypesObj = JSON.parse(mimeTypes);
    let mimeType = mimeTypesObj[ext] || 'text/plain';

    callback(mimeType);

};
```
