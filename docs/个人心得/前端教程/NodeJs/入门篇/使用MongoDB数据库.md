# 使用 MongoDB 数据库

在这一节让我们开始学着在 Node.js 中使用 MongoDB 数据库.

## 什么是 MongoDB

『 MongoDB 』 是由 C++ 语言编写的, 基于分布式文件存储的数据库. 属于 NoSql (非关系型数据库) 的一种, 旨在为 WEB 应用提供可扩展的高性能数据存储解决方案.  

MongoDB 将数据存储为一个文档，数据结构由键值对 `key:value` 组成.  MongoDB 文档类似于 JSON 对象.  字段值可以包含其他文档，数组及文档数组.

下面就是一个 MongoDB 文档 (document) 示例:

``` json
{
    "name": "Garrik",
    "age": 21,
    "gender": "Male",
    "job": "Frontend Developer"
}
```

### 关系型数据库 & 非关系型数据库

前面说到 MongoDB 是属于非关系型数据库的一种, 那么什么是关系型? 什么是非关系型?

『 **关系型数据库** 』以 "行" 和 "列" 组成的 "二维表格" 形式来存储数据, 二维表格简称为称为表, 表又组成了数据库.  之所以称之为关系型数据库, 因为表与表之间采用了现实世界中实体 (entitiy) 与实体 (entitiy) 之间的关系模型.  表中存储格式化结构的数据，每个 "元组"（可以理解为二维表中的一行）的字段组成都是一样的.  即使不是每个元组都需要所有的字段，但数据库会为每个元组都分配所有的字段，这样的结构可以便于表与表之间进行连接等操作.  比较常见的关系型数据库有 Oracle, MySQL 等.

『 **非关系数据库** 』以 "键值对" 存储，它的结构不固定，每一个元组可以有不一样的字段，可以根据需要增加或减少一些自己的键值对，不会局限于固定的结构.  数据之间的关联性不强制, 使用起来要比关系型数据库更加灵活, 性能也有提升.  比较常见的非关系型数据库有  MongoDB, Redis 等

## MongoDB 基础概念

在具体讲如何使用 MongoDB 之前, 我要先介绍一些基本概念.

### 文档 (document)

『 **文档** 』是一组 "键值对" 的有序集合.  是 MongoDB 的核心概念.  文档的数据结构和 JSON 基本一样, 格式名称为 BSON, 是一种类似于 JSON 的二进制形式的存储格式.  下面是一个文档示例:

``` json
{
    "name": "Garrik",
    "age": 21
}
```

`"name"` 和 `"age"` 是这个文档的 "键" (key), `"Garrik"` 和 `21` 是 "值" (value)

文档中的值可以是多种不同的数据类型. 在一个集合中各个文档不需要设置相同的字段，并且相同的字段不需要相同的数据类型.

MongoDB 区分类型和大小写. 例如，下面的两个文档是不同的：

``` json
{"foo" : 3}
{"Foo" : "3"}
```

在给文档的 "键" 命名时还需要注意:
* 文档的键是字符串
* 键不能含有 `\0` (空字符)。这个字符用来表示键的结尾
* `.` 和 `$` 有特别的意义，只有在特定环境下才能使用
* 以下划线 `_ `开头的键是保留的 (不是严格要求的)
* 一个文档内不能有重复的键

### 集合 (collection)

『 **集合** 』就是一组文档，如果将 MongoDB 中的一个文档比喻为关系型数据库中的一行，那么一个集合就相当于一张表.  集合存在于数据库中，当第一个文档插入时，集合就会被创建.  集合没有固定的结构，一个集合里面的文档可以是各式各样的，这被称为 『 动态模式 』

下面是一个集合示例:

``` json
{
    "site": "www.baidu.com",
    "name": "百度"
}
{
    "site": "www.google.com",
    "name": "Google",
    "query": {
        "search": "前端开发"
    }
}
{
    "site": "www.zhihu.com",
    "name": "知乎",
    "username": "罐装汽水_Garrik"
}
```

虽然 MongoDB 对集合中的文档类型没有要求, 但通常情况下我们插入集合的数据都会有一定的关联性.  这样会降低查询特定文档的复杂度, 并且提升查询速度.

集合命名时需要注意:
* 集合名不能是空字符串。
* 集合名不能含有 `\0`（空字符)，这个字符表示集合名的结尾。
* 集合名不能以 `system.` 开头，这是为系统集合保留的前缀。
* 用户创建的集合名字不能含有保留字符 `$`。

### 数据库 (database)

『 **数据库** 』由多个集合组成.  在 MongoDB 中可以建立多个数据库。每个数据库都有独立的权限，即便是在磁盘上，不同的数据库也放置在不同的文件中。按照经验，我们将有关一个应用程序的所有数据都存储在同一个数据库中。要想在同一个 MongoDB 服务器上存放多个应用程序或者用户的数据，就需要使用不同的数据库。

MongoDB 的默认数据库为 `"db"`，该数据库存储在 `data` 目录中。

数据库名可以是满足以下条件的任意 UTF-8 字符串:
* 不是空字符串
* 不得含有 `空格`、`.`、`$`、`/`、`\` 和 `\0` (空字符)
* 数据库名区分大小写, 推荐全部小写
* 最多 64 字节

数据库最终会变成文件系统里的文件，而数据库名就是相应的文件名

文档, 表单, 数据库之间的关系如下图:

![Screen Shot 2018-10-14 at 5.48.11 PM](https://i.imgur.com/LhMQBtL.png)

## 安装 MongoDB & 可视化工具

这篇文章我不想过多讲安装步骤, 大家可以自行去查阅方法.

[Windows 平台安装 MongoDB - 菜鸟教程](http://www.runoob.com/mongodb/mongodb-window-install.html)
[Mac 平台安装 MongoDB - 菜鸟教程](http://www.runoob.com/mongodb/mongodb-osx-install.html)

为了更方便的管理 MongoDB 数据库, 我推荐使用 Studio 3T 可视化工具.

[Studio 3T - 官网](https://studio3t.com/)

使用方法可参照下面链接内容:

[Studio 3T 使用方法](https://blog.csdn.net/weixin_39999535/article/details/81383196)

## 在 Node.js 中使用 MongoDB

想要在 Node.js 中使用 MongoDB, 要先安装 [mongodb 模块](https://www.npmjs.com/package/mongodb), 具体步骤不赘述.  

### 创建数据库

要在 MongoDB 中创建一个数据库，首先我们需要创建一个 MongoClient 对象，然后配置好指定的 URL 和 端口号。 如果数据库不存在，MongoDB 将创建数据库并建立连接。

``` js
// 引入模块
var MongoClient = require('mongodb').MongoClient;

// 
var url = "mongodb://localhost:27017/runoob";
 
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  
  console.log("数据库已创建!");
  
  db.close();
});

```