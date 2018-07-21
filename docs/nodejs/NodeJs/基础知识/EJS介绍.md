# EJS 介绍

[EJS 文档](https://ejs.bootcss.com/)



EJS 是一套的模板语言, 是 "Embedded JavaScript" 的缩写, 通过在 HTML 文件内嵌入 JavaScript 代码来进行 HTML 模板渲染。(用 JS 生成 HTML)

因为 EJS 支持直接在标签内书写简单、直白的 JavaScript 代码。所以可以让你在不破坏 HTML 文档结构的情况下, 使用 JS.  显著减少学习成本.

## 后端用法

先安装:

``` bash
$ npm install ejs
```

在服务器代码上:

``` js
// 三种使用方法:

// data: 要传进去的数据, str: HTML 字符串

// 1. 
let template = ejs.compile(str, options);
template(data);

// 2.
ejs.render(str, data, options);

// 3. filename 是文件名(路径), 
ejs.renderFile(filename, data, options, function(err, str){

});
```

例子:

``` js
var ejs = require('ejs');
var data = "Hello World";

ejs.renderFile('views/index.ejs', {
    msg: data
}, function(err, str) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(str);
    res.end();
})
```

### 配置选项 option:

* `cache` 缓存编译后的函数，需要提供 `filename`
* `filename` 被 `cache` 参数用做键值，同时也用于 include 语句
* `context` 函数执行时的上下文环境
* `compileDebug` 当为 `false` 时不编译调试语句
* `client` 返回独立的编译后的函数
* `delimiter` 放在角括号中的字符，用于标记标签的开与闭
* `debug` 将生成的函数体输出
* `_with` 是否使用 `with() {}` 结构。如果为 `false`，所有局部数据将存储在 `locals` 对象上。
* `localsName` 如果不使用 `with` `，localsName` 将作为存储局部变量的对象的名称。默认名称是 `locals`
* `rmWhitespace` 删除所有可安全删除的空白字符，包括开始与结尾处的空格。对于所有标签来说，它提供了一个更安全版本的 `-%>` (在一行的中间并不会剔除标签后面的换行符)。
* `escape` 为 `<%=` 结构设置对应的转义（escape）函数。它被用于输出结果以及在生成的客户端函数中通过 `.toString()` 输出。(默认转义 XML)。


## 前端用法

EJS 模板文件 用 `.ejs` 作为后缀名.

例子:

``` html
<body>
    <h1><%= title %></h1>
    
    <!-- 如果 hello 传进来了, 则在 <p> 标签中显示 -->
    <% if(hello) { %>
        <p><%= hello %></p>
    <% } %>
    
</body>
```

模板中, `<% %>` 括起来的内容都会被编译成 Javascript, `<%= %>` 将括起来的变量名中的数据渲染到模板.

### 标签含义:

* `<%` '脚本' 标签，用于流程控制，无输出。
* `<%_` 删除其前面的空格符
* `<%=` 输出数据到模板（输出是转义 HTML 标签）
* `<%-` 输出非转义的数据到模板
* `<%#` 注释标签，不执行、不输出内容
* `<%%` 输出字符串 '<%'
* `%>` 一般结束标签
* `-%>` 删除紧随其后的换行符
* `_%>` 将结束标签后面的空格符删除

用 `<%=...%>` 输出变量，变量若包含 '<' '>' '&'等字符会被转义, 如果不希望变量值的内容被转义，那就这么用 `<%-... %>` 输出变量

###  包含 include:

通过 `include` 指令将相对于模板路径中的模板片段包含进来。

例如，如果存在 `"./views/users.ejs"` 和 `"./views/user/show.ejs"` 两个模板文件，你可以通过 `<%- include('user/show'); %>` 代码包含后者。

你可能需要能够输出**原始内容**的标签 (<%-) 用于 `include` 指令，避免对输出的 HTML 代码做转义处理。

``` html
<ul>
  <% users.forEach(function(user){ %>
    <%- include('user/show', {user: user}); %>
  <% }); %>
</ul>
```

### 实例代码:

#### for:

``` html
<% for(var i = 0; i < list.length; i++) { %>
  <% var user = list[i]; %>
    <tr>
      <td><%= user.name %></td>
      <td><%= user.age %></td>
    </tr>
<% } %>
```

#### if:

``` html
<% if(hello) { %>
    <p><%= hello %></p>
<% } %>
```

``` html
<% if (x === 1) { %>
    <p>Hello world!</p>
<% } else if (x === 2) { %>
    <p>Hi earth!</p>
<% } else { %>
    <p>Hey terra!</p>
<% } %>
```

#### swith:

``` html
<% switch (role) { %>
<% case 'Admin' : %>
    <p>Super Admin</p>
    <% break; %>

<% case 'eventAdmin' : %>
    <p>Event Admin</p>
    <% break; %>

<% case 'subAdmin' : %>
    <p>Sub Admin</p>
    <% break; %>

<% } %>
```
