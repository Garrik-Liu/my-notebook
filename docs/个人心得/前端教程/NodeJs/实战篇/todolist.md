# TODO LIST

在前面我们已经介绍过了 Node.js 的基本知识.  在这一篇, 让我们来试着用 Node.js, EJS 模板引擎 和 MongoDB 来搭建一个 TODO List 单页面应用.  

最终效果如下:

![todo](https://i.imgur.com/tu57EL4.gif)

## 项目分析

首先, 我们分析一下这个 APP 有什么功能.  
1. 展示已有任务
2. 添加新任务
3. 删除已有任务

然后我们来设计数据结构.  在这个项目里, 我们使用 MongoDB 数据库. 在其中, "文档" 作为基本数据单位, 由 "键值对" 组成.  在分析完应用所应有的功能之后, 我决定让一个 TODO 任务对应一个文档, 其包含两个键: 一个是作为唯一标识的 `"id"`; 一个是储存任务信息的 `"taskDetail"`

下面是一个数据示例:

``` json
{ 
    "id": ObjectID("000001"), // 类型: ObjectID
    "taskDetail": "任务信息"   //  类型: String
}
```

之后, 在 HTTP 路由上我们设计用以下接口来对应实现以上功能: 
* `/` (GET - 展现页面)
* `/addTask` (GET - 添加任务)
* `/deleteTask` (GET - 删除) 


## 搭建服务器骨架

接下来让我们开始写服务器代码的基本结构.  

在项目目录下新建 `app.js` 文件, 具体代码如下:

``` js
// 引入模块
var http = require('http');
var url = require('url');

// 创建 HTTP 服务器
var server = http.createServer(function(req, res) {
    // 解析请求 URL
    var urlObj = url.parse(req.url, true);
    
    // 路由
    switch (urlObj.pathname) {
        case "":
        case "/":
            // 展示已有任务
            break;
        case "/addTask":
            // 添加新任务
            break;
        case "/deleteTask":
            // 删除已有任务
            break;
        default:
            // 返回 404 - Not Found
            break;
    }
});

// 监听请求
server.listen(8080, function() {
    console.log("服务器启动, 监听 8080 端口:");
})
```

## 编写视图

在项目目录下新建 `views` 目录, 用来存放 EJS 模板文件.  在这个项目中我们需要 `index.ejs` 和 `404.ejs` 两个模板, 一个用来显示应用界面, 一个用来显示 404 错误信息.

``` bash
.
├── app.js
└── views
    ├── 404.ejs
    └── index.ejs
```

`index.ejs` 的代码如下:

``` html
<body>
    <div>
        <h1>TODO LIST</h1>
        <form action="/addTask" method="GET">
            <input type="text" name="taskDetail" placeholder="请输入任务..." />
            <input type="submit" value="提交">
        </form>
        <ul>
            <% for(var i = 0; i < tasks.length; i++) { %>
            <li>
            <span><%= tasks[i].taskDetail %></span>
            <a href="/deleteTask?id=<%= tasks[i]._id %>">删除</a>
            </li>
            <% } %>
        </ul>
    </div>
</body>
```

通过一个 `<form>` 来向服务器的 `/addTask` 路径提交请求来添加新任务.  

在 `<ul>` 标签中, 用从服务器传来的 `tasks` 数组来遍历渲染出已有的任务.  每个任务上有一个删除链接, 用来向服务器的 `/deleteTask` 路径发送请求来删除任务.  通过查询字符串中的 `id` 字段来指明具体要删除哪个任务.

`404.ejs` 的代码如下:

``` html
<body>
    <h1>404</h1>
</body>
```

## 编写 `"/"` 路由代码

客户端访问这个路由时, 服务器要先去数据库获取已有的任务数据, 并保存在数组中, 然后把数据传入模板来渲染出视图并响应给客户端.

那么首先, 我们用 NPM 安装 `mongodb` 和 `ejs` 模块.

``` bash
npm init
npm install ejs mongodb -save
```

之后编写 Node.js 代码:

``` js
// 引入模块
var http = require('http');
var url = require('url');
var ejs = require('ejs');
var MongoClient = require('mongodb').MongoClient;

// 数据库服务器地址
var mongoServerUrl = 'mongodb://localhost:27017';

var server = http.createServer(function(req, res) {
    var urlObj = url.parse(req.url, true);

    switch (urlObj.pathname) {
        case "":
        case "/":
            // MongoDB 客户端连接到 MongoDB 服务器
            MongoClient.connect(mongoServerUrl, function(err, client) {
                if (err) throw err;
                
                // 连接到 'todoDB' 数据库 (你的数据库名字不需要和我一样)
                var db = client.db('todoDb');

                // 获取 'todos' 集合实例 (你的数据库名字不需要和我一样)
                var collection = db.collection('todos');
                
                // 查找集合下所有的文档, 并以数组的形式返回
                collection.find({}).toArray(function(err, result) {
                    if (err) throw err;
                    
                    // 渲染视图并响应给客户端
                    ejs.renderFile('./views/index.ejs', { tasks: result }, function(err, str) {
                        if (err) throw err;

                        // MongoDB 客户端与服务器的链接断开, 
                        // 之后在其回调函数中发送响应
                        client.close(function() {
                            res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
                            res.write(str);
                            res.end();
                        });

                    });
                })
            });

            break;
// 代码省略...
```

## 编写 `"/addTask"` 路由代码

当客户端向 `/addTask` 提交表单时, 服务器获取它查询对象里 `taskDetail` 的值, 作为用户输入的任务详情.  之后在在 MongoDB 数据库中插入新文档. 

``` js
// 代码省略...
case "/addTask":
    // 获取任务详情 
    var taskDetail = urlObj.query.taskDetail;
    
    MongoClient.connect(mongoServerUrl, function(err, client) {
        if (err) throw err;
            
        var db = client.db('todoDb');
        var collection = db.collection('todos');

        // 插入新文档
        // 因为 MongoDB 自动为文档添加类型为 ObjectID 的 _id 主键
        // 所以我就不自己为每个任务创建 id 了
        collection.insertOne({ taskDetail: taskDetail }, function(err, result) {
            if (err) throw err;
            
            // 插入完文档, 断开 MongoDB 连接,
            // 让请求重定向到 '/' 路径下, 以来重新显示已有任务
            client.close(function() {
                res.writeHead(302, { 'Location': '/' });
                res.end();
            });
        });
    });

    break;
// 代码省略...
```

## 编写 `"/deleteTask"` 路由代码

当客户端向 `/deleteTask` 路径发送请求, 服务器获取查询对象中 `id` 的值.  之后去 MongoDB 数据库找到匹配的文档, 并删除. 

``` js
// 引入 mongodb 模块中的 ObjectID 函数.  
// 稍后用其来生成 ObjectID 类型的值
var ObjectID = require('mongodb').ObjectID;

// 代码省略...

case "/deleteTask":
    // 获取查询对象中的 id 值
    var targetId = urlObj.query.id;
    
    // 刚刚获取的 id 值的类型为 String
    // 我们还需要用其来生成对应的 ObjectID 值
    var targetObjectId = new ObjectID(targetId);

    MongoClient.connect(mongoServerUrl, function(err, client) {
        if (err) throw err;

        var db = client.db('todoDb');
        var collection = db.collection('todos');
        
        // 删除对应的文档
        collection.deleteOne({ _id: targetObjectId }, function(err, result) {
            if (err) throw err;

            client.close(function() {
                res.writeHead(302, { 'Location': '/' });
                res.end();
            });
        });
    });

    break;
// 代码省略...
```

## 处理错误请求

最后别忘了补全用以返回 404 错误信息的代码.

``` js
default:
    ejs.renderFile('./views/404.ejs', {}, function(err, str) {
        if (err) throw err;

        res.writeHead(404, { 'Content-Type': 'text/html;charset=utf-8' });
        res.write(str);
        res.end();
    });

    break;
```

至此所有的代码编写完毕.  试着运行一下吧!  
对了, 别忘了运行之前先启动 MongoDB 服务器, 并创建好数据库!


我的代码保存在 Github, 可以作为参考 - [传送门](https://github.com/Garrik-Liu/MyTutorials/tree/master/%5BNode-EJS-MongoDB%5D-TODO_01)









