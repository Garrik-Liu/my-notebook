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