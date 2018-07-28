# Cookie 和 Session

由于HTTP协议是无状态的，即不会记录客户端与服务端的连接信息。简单地说，当你浏览了一个页面，然后转到同一个网站的另一个页面，服务器无法认识到这是同一个浏览器在访问同一个网站。每一次的访问，都是没有任何关系的。 故而有时需要一种保存客户端对服务器的访问状态的机制. 

## Cookie 

cookie 是客户端请求服务器时，服务端记录的用户信息，存储在客户端, 下一次客户端发送请求时会将 cookie 一起发送。(就像令牌一样, 我是小钻风)

客户端第一次访问服务器的时候, 不携带 cookie, 服务器接到请求后, 会记录用户的信息, 然后在响应头中设置 set-cookie 头部. 客户端收到后进行储存，下一次再请求服务器时请求头中会加上 cookie 这一项，服务器通过 cookie 判断客户端是否曾经访问过该网站。

cookie 是有时限的，有一个属性 maxAge 可以设置 cookie 的存储时间，超过时间后 cookie 会被删除。cookie 一般用于用户的自动登录，记住密码等.

### 设置 set-cookie 头

在客户端第一次访问服务器的时候, 服务器要设置 set-cookie 然后响应给客户端.  在 Express 中, 这通过 `res.cookie()` 方法进行设置.

``` js
res.cookie(name, value [, options])
```

`name` 是 cookie 的名字, `value` 是 cookie 的值。`options` 对象是用来设置 set-cookie 头部的选项, 具体参数有:

![698230-20170713162242775-775602549](https://i.imgur.com/fNmf1ZT.png)

例子:

``` js
res.cookie('name', 'tobi', { domain: '.example.com', path: '/admin', secure: true });

res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
```

* HttpOnly 属性: 如果在 Cookie 中设置了"HttpOnly" 属性，那么通过程序(JS脚本、Applet等)将无法读取到 Cookie 信息，这样能有效的防止XSS攻击。HttpOnly 属性的目的是**防止程序获取 Cookie** 后进行攻击

* Secure 属性： 当设置为 true 时，表示创建的 Cookie 会被以安全的形式向服务器传输，也就是只能在 HTTPS 连接中被浏览器传递到服务器端进行会话验证. Secure属性是**防止信息在传递的过程中被监听捕获**后信息泄漏

* path 属性：指定可访问 Cookie 的目录。例如：`"page=shop; path=/shop"`;就表示当前 Cookie 仅能在客户端访问 `\shop` 时, 被发送到服务器。

* domain 属性：指定可访问 Cookie 的主机名. 主机名是指同一个域下的不同主机. 例如：`www.google.com`和 `gmail.google.com` 就是在 `google.com` 域名下的两个不同的主机名。默认情况下，一个主机中创建的 Cookie 在另一个主机下是不能被访问的， 但可以通过 domain 参数来实现对其的控制, 以 google 为例，要实现跨主机访问，可以写为：`"name=value; domain=.google.com"` 这样所有`google.com` 下的主机都可以访问该 Cookie。 

* Expires 属性：指定过期时间. 超过这个时间，Cookie将消失，不可访问。例如：如果要将 Cookie 设置为10天后过期，可以这样实现：`"name=garrik; expire=" + new Date(Date.now() + 10 * 24 * 3600 * 1000).toGMTString();`

* Max-Age 属性: 用于代替 Expires, Max-Age 的值 可以为正数，表示此 Cookie 从创建到过期所能存在的时间，以秒为单位，此 Cookie 会存储到客户端电脑，以 Cookie 文件形式保存. 不论关闭浏览器或关闭电脑，直到时间到才会过期。 可以为负数，表示此 Cookie 只是存储在浏览器内存里，只要关闭浏览器，此 Cookie 就会消失。maxAge 默认值为 -1。 还可以为 0，表示从客户端电脑或浏览器内存中删除此 Cookie。

### 删除 cookie

``` js
res.clearCookie(name [, options])
```

比如说: 

``` js
// 设置 cookie
app.use((req, res, next) => {
    res.cookie("name", "garrik");
    next();
});

// 删除 cookie
app.use(function(req, res, next) {
    res.clearCookie("name");
    next();
})
```

### cookie-parser

[文档](https://www.npmjs.com/package/cookie-parser)

`cookie-parser` 是 Express的 中间件，用来实现 cookie 的解析.

这个中间件会在 `req` 中添加一个 `cookies` 对象, 用来存放解析成键值对的 cookie. 并且还提供 cookie 签名, 等功能来提高安全性.

在原生的 Node 代码里面, 我们通过 `req.headers.cookie` 来获得请求头中的 cookie 的字符串形式.

``` js
app.use(function (req, res, next) {
  console.log(req.headers.cookie);
  next();
});
```
原生 Node 解析 `req.header.cookie` 字符串成对象:

``` js
app.use(function(req, res, next) {
    // 用于保存 cookie
    var Cookies = {};
    
    // 先确定 cookie 存在, 然后按照 ; 把字符串分割成数组, 然后遍历:
    req.headers.cookie && req.headers.cookie.split(';').forEach(( Cookie ) => {
        // 把单个的数组项按 = 分割成两部分:
        var parts = Cookie.split('=');
        
        // 把 cookie 按照键值对的形式保存在 Cookies 对象里.
        Cookies[parts[0].trim()] = (parts[ 1 ] || '').trim();
    });
    
    console.log(Cookies)
    
    next();
})
```

也可以用 [cookie 模块](https://www.npmjs.com/package/cookie)

通过 cookie-parser 中间件, cookie 的解析变得异常简单.

``` js
var cookieParser = require('cookie-parser');

//  使用中间件
app.use(cookieParser());

app.use(function (req, res, next) {
  console.log(req.cookies);
  next();
});
```

出于安全的考虑，防止cookie被篡改, 我们通常需要对 cookie 进行签名。

如果要加密, 服务器需要设置 `req.secret` 秘钥字符串, cookie-parser 就可以做这个事情:

在使用 cookie-parser 中间件的时候, 传入 secret 参数就好了:

``` js
app.use(cookieParser("secret"));
```

在设置好秘钥之后, 在创建 cookie 时要将 signed 选项 设置为 true:

``` js
res.cookie('username', 'garrik', {
    signed: true
});
```

这时再在客户端获得 cookie, 值就是加密后的一大串看不懂的字符了.  


![Screen Shot 2018-07-28 at 4.46.31 PM](https://i.imgur.com/FLDcQvT.png)

想在服务器获得客户端传过来的加密后的 cookie, 我们不能再用 `req.cookies` 了.

* `req.cookie` 用于获取未加密的 cookie, 只能获得未加密的, 加密的也不会以密码形式出现.
* `req.signeCookie` 用于获取未加密的cookie, 只能获得加密过的, 未加密的也不会出现.

## Session

session 和 cookie 的作用是一样的，也是存储用户信息，但是 session 是存储在服务器端的。

session 还需借助 cookie 将唯一标识 sessionID 存到客户端。当客户端访问服务器时，会生成一个全局唯一标识 sessionID，然后服务器会记录用户的信息然后存储到服务器 session 中，由于客户端下一次发送请求时, 服务器要知道来的是谁，故需要将 sessionID 发送到客户端，方法有三种，一种就是设置 set-cookie 头将 sessionID 发送到客户端，另一种就是 url 重写, 把 session id 直接附加在 URL 路径的后面。还有就是用 表单隐藏字段.

第二次请求该网站时，请求头中就会带上 cookie，cookie 的值是就是 sessionID。session 一般用于用户的身份验证，即利用 sessionID 判断用户是否合法。

再详细一点, 服务器使用一种类似于散列表的结构来保存信息,  当程序需要为某个客户端的请求创建一个 session 时，服务器首先检查这个客户端的请求里是否已包含了一个 session 标识 (session id), 如果已包含则说明以前已经为此客户端创建过 session，服务器就按照session id 把对应的 session 检索出来, 如果检索不到，会新建一个.  如果客户端请求不包含 session id，则为此客户端创建一个session 并且生成一个与此 session 相关联的 session id，然后在本次响应中返回给客户端保存。

### express-session

[文档](https://github.com/expressjs/session)

安装好中间件之后, 就要设置 session 中间件了:

``` js
app.use(cookieParser());

// 要放在 cookieParser 之后, 因为要用到 session id.
app.use(session({
    secret: 'my app secret', // 用来对session id相关的cookie进行签名
    
    saveUninitialized: false, // 是否自动保存未初始化的会话，建议false
    
    resave: false, // 是否每次都重新保存会话，建议false
    
    store: new MongoStore({ //创建新的mongodb数据库存储session
        host: 'localhost', //数据库的地址，本机的话就是127.0.0.1，也可以是网络主机
        port: 27017, //数据库的端口号
        db: 'test-app' //数据库的名称。
    }),
    
    name: 'test', //cookie 的 name，默认值是：connect.sid
    
    cookie: {
        maxAge: 10 * 1000
    }
}));
```

#### 常用参数:

* secret: 一个 String 类型的字符串，作为服务器端生成 session 的签名。

* name: 返回客户端的 cookie key 的名称，默认为 connect.sid,也可以自己设置。
* resave: (是否允许)当客户端并行发送多个请求时，其中一个请求在另一个请求结束时对 session 进行修改覆盖并保存。
默认为 true。但是(后续版本)有可能默认失效，所以最好手动添加。
* saveUninitialized: 初始化 session 时是否保存到存储。默认为 true， 但是(后续版本)有可能默认失效，所以最好手动添加。
* cookie: 设置返回到前端 key 的设置，默认值为 `{ path: ‘/', httpOnly: true, secure: false, maxAge: null } `

#### 使用实例:

``` js
app.use(cookieParser('secret'));
app.use(session({
 secret: 'secret',//与 cookieParser 中的一致
 resave: true,
 saveUninitialized:true
}));

// 保存 session
app.use((req, res, next) => {
  var user = {
    name: "garrik",
    gender: "male",
  };

  req.session.user = user;
})

// 就可以看到刚刚保存的 session 了
app.use((req, res) => {
    if (req.session.user) {
        console.log(req.session.user);
    } 

    res.end();
})
```



### cookie-session

## 区别 和 优缺点

* 最大的区别应该在于存储的地方不一样，cookie存储在客户端，session存储在服务器；
* 从安全性方面来说，cookie 存储在客户端，很容易被窃取，暴露用户信息，而 session 存储在服务器，被窃取的机会小很多，故session 的安全性比 cookie 高；
* 从性能方面来说，cookie 存储在浏览器端消耗的是用户的资源，相对比较分散，而 session 消耗的服务器的内存，会造成服务器端的压力；
* cookie 可以长期的存储在客户端，但是数量和大小都是有限制的, 单个cookie保存的数据不能超过4K；session 存在服务器的时间较短，但是没有大小的限制