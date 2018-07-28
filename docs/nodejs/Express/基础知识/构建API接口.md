# 构建 API 接口

> API (Application Programming Interface, 应用程序编程接口)

其实 API 就是一种代码之间交互的一种方式, 例如，Express 中的 `app.use` 和 `app.get` 就属于在内部使用 API 。

## Express 驱动的 JSON API 服务

使用 Express 构建 API 实现的原理非常简单：通过 中间件 和 内置函数 解析网络请求 并将 JSON 数据和 HTTP 状态码封装到 响应对象 并返回给 客户端。

> 在这一篇里, API 返回的数据全部是 JSON.

Express 构建 API 的基本流程：
* 解析请求
* 设置 HTTP 状态码
* 返回响应数据

## CURD 操作 API

CURD 是对程序中 Create、Read、Update、Delete 四种业务动作的一个简称。(增删改查))

大多数的应用都会涉及到 CURD 操作。例如，对于一个图片分享应用来说，其中涉及图片的所有操作就是典型的 CRUD：

* 用户上传照片的行为对应就是 create 操作。
* 用户浏览照片的行为就是 read 操作。
* 用户更新照片的行为就是 update 操作。
* 用户删除照片的行为就是 delete 操作。

### HTTP 方法

HTTP 方法明确了对请求 URI 所标识资源进行的操作，而且方法是区分大小写的。

常用方法: 
* GET 是最常用的一个 HTTP 方法，它表示请求服务端资源。例如，加载网站首页、请求图片资源都使用的是 GET。虽然服务端的响应可能不同，但是 **GET 请求并不会改变服务器的资源**。例如，对某图片资源的一次或者多次请求并不会导致图片本身出现任何差别。
* POST 是另一个常用的 HTTP 方法。例如，创建新博客、上传照片、注册用户、清空购物车等业务都是使用 POST 。与 GET 不同的是：**每次 POST 请求都会导致服务端发生修改。**
* PUT 方法用于对已有记录的修改，所有我觉得它应该被称为 "UPDATE" 更为合适。例如，修改博客标题、修改用户昵称等操作都是 PUT 操作。另外，PUT 还具备 POST 的功能：就是当要修改的记录不存在时可以进行新建操作（非必需）。其次 PUT 还具有 GET 方法的特点：对同一 URL 的一次或多次 PUT 请求后的结果是一致的。
* DELETE 方法用于记录删除。例如，删除用户文章、删除网络照片。另外，与 PUT 一样同一删除请求无论是执行一次还是多次最终结果是一致的。

### 通过 HTTP 方法构建 CRUD 接口

CRUD 操作与之前四种 HTTP 方法存在对应关系：
* Create = POST
* Read = GET
* Update = PUT
* Delete = DELETE

## API 版本控制

在 Express 中可以使用 Router 中间件来实现 API 版本管理

通过把路由绑定在 Router 实例上, 然后再把 Router 挂载在特定路径上可以实现 API 版本控制

``` js
var express = require("express");
var api = express.Router();

api.get("/getSome", function(req, res) {
    res.send("Some Message...");
});


module.exports = api;
```

``` js
var express = require("express");
var apiVersion1 = require("./api1.js");

var app = express();

app.use("/v1", apiVersion1);

app.listen(3000, function() {
    console.log("App started on port 3000");
});
```

## 示例代码

实现一个指明 最大值 和 最小值, 返回随机数字的 API.

``` js
const express = require('express');
const app = express();

app.get('/random/:min/:max', (req, res) => {
    let min = parseInt(req.params.min);
    let max = parseInt(req.params.max);
    
    // 错误处理
    if (isNaN(min) || isNaN(max)) {
        res.status(400);
        res.json({ error: "Bad request." });
    } else {
        let result = Math.round((Math.random() * (max - min)) + min);
        
        res.json({ result: result });
    }
});

app.listen(3000, function() {
    console.log("监听 3000 端口!");
});
```