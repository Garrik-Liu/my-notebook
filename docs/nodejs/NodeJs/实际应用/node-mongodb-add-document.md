# Node.js 连接 MongoDB

使用原生 Node.js 代码连接 MongoDB 数据库, 并且在 collection 中添加 document.

## 服务器代码:

``` js
const http = require('http');
const url = require('url');
const fs = require('fs');

// 用于解析客户端发过来的 query
const querystring = require('querystring');

// 数据库客户端
const MongoClient = require('mongodb').MongoClient;

// 数据库 URL
const dbUrl = "mongodb://localhost:27017/";

// 具体 database 的名字
const targetDB = "mytest";

// 具体 collection 的名字
const targetCol = "users";

const server = http.createServer(((req, res) => {
    const pathname = url.parse(req.url).pathname;

    if (pathname === "/") {
        fs.readFile('./index.html', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        })
    } else if (pathname === "/login") {
        // 获取 query
        const queryStr = url.parse(req.url).query;
        
        // 如果有 query 发过来, 把它写入数据库
        if (queryStr) {
            // 把 query 解析成对象
            const queryObj = querystring.parse(queryStr);

            // 调用 自定义的数据库操作函数
            db(dbUrl, targetDB, targetCol, queryObj)
        }
        
        // 返回给 客户端 的响应
        fs.readFile('./login.html', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        })

    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("404");
    }
}));

server.listen(3000, () => {
    console.log("监听 3000 端口!")
});
```

## 自定义数据库操作函数

``` js
function db(dbUrl, targetDB, targetCol, data) {
    // 连接数据库
    MongoClient.connect(dbUrl, { useNewUrlParser: true }, (err, db) => {
        if (err) {
            console.log(err);
        } else {
            // 获取数据库中具体的 database
            const dbase = db.db(targetDB);

            console.log("数据库已连接");
            
            // 操作具体的 collection
            dbase.collection(targetCol).insertOne(data, (err, res) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("数据插入成功");
                    
                    // 关闭数据库
                    db.close();
                }
            });
        }
    });
}
```