const express = require('express');
const path = require('path');
const fs = require('fs');

const morgan = require("morgan")("short");

// 创建 express app 对象
const app = express();

// log middleware
app.use((req, res, next) => {
    console.log('请求 URL: ' + req.url);
    console.log('请求 时间: ' + new Date());

    next();
});


// static file server middleware
app.use((req, res, next) => {
    // __dirname 总是指向被执行 js 文件的绝对路径
    const filePath = path.join(__dirname, "static", req.url);
    // fs.stat 获得文件相关信息
    fs.stat(filePath, (err, stats) => {
        if (err) {
            next();
        }

        // 判断是否是文件
        // 如果 fs.Stats 对象表示一个普通文件，则返回 true 。
        if (stats.isFile()) {
            // res.sendFile 返回 PATH参数 所指定的文件, 根据文件后缀, 自动设置响应头
            res.sendFile(filePath);
        } else {
            next();
        }
    });
});

// 404 middleware
app.use((req, res) => {
    res.status(404);
    res.send("404 - 没有找到文件");
});

app.listen(3000, () => {
    console.log("开始监听 3000 端口请求:");
})