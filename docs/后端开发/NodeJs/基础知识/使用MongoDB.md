# 使用 MongoDB 

::: danger 注意
以下内容过时, 请直接参照 3.x 版本文档.  [传送门](http://mongodb.github.io/node-mongodb-native/3.1/quick-start/quick-start/)
:::

## 创建数据库

要在 MongoDB 中创建一个数据库，首先我们需要先连接到 MongoDB 服务器

`MongoClient.connect` 方法可以让我们与 MongoDB 服务器建立连接.  

这个方法的第一个参数为 MongoBD 服务器的 URL.  例如: `mongodb://localhost:27017/mydb`.  在这个 URL 中 `localhost:27017` 为服务器的地址, `/mydb` 为我想要链接的数据库的名字.  如果数据库不存在，在与 MongoDB 服务器建立连接时, 会自动创建.  

最后一个参数是个回调函数, 连接建立之后被调用.  回调函数的第一个参数是错误信息, 如果没有错误则为 `null`.  第二个参数是 `db` 实例, 通过它来与数据库进行交互.

``` js
var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/mydb";
 
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  
  console.log("数据库已创建!");
  
  db.close();
});
```

## 创建集合 collection

使用 `createCollection()` 方法来创建集合

``` js

var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/mydb';

// 连接数据库
MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    
    console.log('数据库已创建');
    
    var dbase = db.db("mydb");

    dbase.createCollection('users', function (err, res) {
        if (err) throw err;
        
        console.log("创建集合!");
        
        db.close();
    });
});
```

## 数据库操作

### 插入文档 document

使用 `insertOne()`,
连接数据库 runoob 的 site 表，并插入一条数据条数据:

``` js
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    
    var dbase = db.db("runoob");
    
    var myobj = { name: "菜鸟教程", url: "www.runoob" };

    // MongoDB 会自动创建数据库和集合，所以使用前我们不需要手动去创建。
    dbase.collection("site").insertOne(myobj, (err, res) => {
        if (err) throw err;
        
        console.log("文档插入成功");
        
        db.close();
    });
});
```

插入多条数据可以使用 `insertMany()`：

``` js

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    
    var dbo = db.db("runoob");
    
    var myobj =  [
        { name: '菜鸟工具', url: 'https://c.runoob.com', type: 'cn'},
        { name: 'Google', url: 'https://www.google.com', type: 'en'},
        { name: 'Facebook', url: 'https://www.google.com', type: 'en'}
       ];
    
    dbo.collection("site").insertMany(myobj, function(err, res) {
        if (err) throw err;
        
        // res.insertedCount 为插入的条数。
        console.log("插入的文档数量为: " + res.insertedCount);
        
        db.close();
    });
});
```

### 查询数据

使用 `find()` 来查找数据, `find()` 可以返回匹配条件的所有数据。
如果未指定条件，`find()` 返回集合中的所有数据。 

返回集合中所有数据:

``` js
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    
    var dbo = db.db("runoob");
    
    // 返回集合中所有数据
    dbo.collection("site"). find({}).toArray(function(err, result) { 
        if (err) throw err;
        
        console.log(result);
        
        db.close();
    });
});
```

检索 name 为 "菜鸟教程" 的实例：

``` js
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    
    var dbo = db.db("runoob");
    
    // 查询条件
    var whereStr = {"name":'菜鸟教程'};  
    
    dbo.collection("site").find(whereStr).toArray(function(err, result) {
        if (err) throw err;
        
        console.log(result);
        
        db.close();
    });
});
```

### 更新数据

`updateOne()` 更新符合条件的第一个文档数据

``` js
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    
    var dbo = db.db("runoob");
    
    // 查询条件
    var whereStr = {"name":'菜鸟教程'}; 
    
    // 更新内容
    var updateStr = {$set: { "url" : "https://www.runoob.com" }};

    dbo.collection("site").updateOne(whereStr, updateStr, function(err, res) {
        if (err) throw err;
        
        console.log("文档更新成功");
        
        db.close();
    });
});
```

`updateMany()` 更新所有符合条件的文档数据

``` js
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    
    var dbo = db.db("runoob");
    
    var whereStr = {"type":'en'};  
    
    var updateStr = {$set: { "url" : "https://www.runoob.com" }};
    
    dbo.collection("site").updateMany(whereStr, updateStr, function(err, res) {
        if (err) throw err;
        

        // result.nModified 为更新的条数
        console.log(res.result.nModified + " 条文档被更新");
        
        db.close();
    });
});
```

### 删除数据

`deleteOne()`删除符合条件的第一条文档

将 name 为 "菜鸟教程" 的数据删除 :

``` js
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    
    var dbo = db.db("runoob");
    
    var whereStr = {"name":'菜鸟教程'};  
    
    dbo.collection("site").deleteOne(whereStr, function(err, obj) {
        if (err) throw err;
        
        console.log("文档删除成功");
        
        db.close();
    });
});
```

`deleteMany()`删除符合条件的所有文档

``` js
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    
    var dbo = db.db("runoob");
    
    var whereStr = { type: "en" }; 
    
    dbo.collection("site").deleteMany(whereStr, function(err, res) {
        if (err) throw err;
        
        // res.result.n 删除的条数。
        console.log(res.result.n + " 条文档被删除");
        
        db.close();
    });
});
```

### 排序

使用 `sort()` 方法，该方法接受一个参数，规定是升序(1)还是降序(-1)。

按 type 升序排列:

``` js
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    
    var dbo = db.db("runoob");
    
    var mysort = { type: 1 };
    
    dbo.collection("site").find().sort(mysort).toArray(function(err, result) {
        if (err) throw err;
        
        console.log(result);
        
        db.close();
    });
});
```

### 指定查询条数

使用 `limit()` 方法设置指定的返回条数，该方法只接受一个参数，指定了返回的条数。

``` js
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    
    var dbo = db.db("runoob");
    
    dbo.collection("site").find().limit(2).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
  });
});
```

使用 `skip()` 方法指定跳过的条数

``` js
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    
    var dbo = db.db("runoob");
    
    dbo.collection("site").find().skip(2).limit(2).toArray(function(err, result) {
        if (err) throw err;
        
        console.log(result);
        
        db.close();
  });
});
```

## 连接操作

mongoDB 不是一个关系型数据库，但我们可以使用 `$lookup` 来实现左连接。

例如我们有两个集合数据分别为：

``` js
// orders 集合
[
  { _id: 1, product_id: 154, status: 1 }
]

// products 集合
[
  { _id: 154, name: '笔记本电脑' },
  { _id: 155, name: '耳机' },
  { _id: 156, name: '台式电脑' }
]
```

``` js
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";
 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    
    var dbo = db.db("runoob");
    
    dbo.collection('orders').aggregate([
        { $lookup:
            {
                // 右集合
                from: 'products',  
                // 左集合 join字段         
                localField: 'product_id',
                // 右集合 join字段   
                foreignField: '_id',     
                // 新生成字段（类型array）   
                as: 'orderdetails'          
            }
        }
    ], function(err, res) {
    
    if (err) throw err;
    
    console.log(JSON.stringify(res));
    
    db.close();
});
```

## 删除集合

使用 `drop()` 方法来删除集合:

``` js
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    
    var dbo = db.db("runoob");
    
    // 删除 test 集合
    dbo.collection("test").drop(function(err, delOK) {  
        
        // 执行成功 delOK 返回 true，否则返回 false
        if (err) throw err;
        
        if (delOK) console.log("集合已删除");
        
        db.close();
    });
});
```

## 参考

* [Node.js 连接 MongoDB](http://www.runoob.com/nodejs/nodejs-mongodb.html)
* [MongoDB的应用](https://javascript.ruanyifeng.com/nodejs/mongodb.html#toc1)