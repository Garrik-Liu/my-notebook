const express = require('express');
const path = require('path');
const fs = require('fs');

const morgan = require("morgan")("short");

// 创建 express app 对象
const app = express();

// log middleware
// 使用 morgan 模块来记录日志更方便
app.use(morgan);

// static file server middleware
// 使用 express 自带的方法
const staticPath = path.join(__dirname, "static");
app.use(express.static(staticPath));

// 404 middleware
app.use((req, res) => {
    res.status(404);
    res.send("404 - 没有找到文件");
});

app.listen(3000, () => {
    console.log("开始监听 3000 端口请求:");
})