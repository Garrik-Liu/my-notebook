const express = require('express');
// 记录请求日志
const morgan = require('morgan')("short");
// 解析 HTTP 请求体
const bodyParser = require('body-parser');
// 操作 Mongo 数据库
const MongoClient = require('mongodb').MongoClient;
// 操作 session
const session = require('express-session');
// 操作 cookie
const cookieParser = require('cookie-parser');
// md5
const md5 = require('md5-node');

// 创建 express 实例
const app = express();

// 数据库相关变量
const DbUrl = "mongodb://localhost:27017/"
const TargetDb = "product-manage";
const TargetCol = "users";

// 用于 cookie 签名的 key
const signKey = 'secret';

// ----------------------------------------------------

// 使用 ejs 模板引擎, 默认去 views 目录下面找 
app.set('view engine', 'ejs');

app.use(morgan);

// 解析 HTTP 请求体
// 解析 URL编码 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 操作 cookie 和 session
app.use(cookieParser(signKey));
app.use(session({
    secret: signKey,
    resave: false,
    saveUninitialized: true,
    cookie: {
        // 有效时间 30分钟
        maxAge: 1000 * 60 * 30
    },
    rolling: true
}));

// 配置 public 目录为我们的静态资源目录
app.use(express.static('public'));

// app.locals 用于将值传递到所渲染的模板中
app.use((req, res, next) => {
    app.locals['userinfo'] = {};
    next();
})

// 自定义中间件用于判断登录状态
app.use((req, res, next) => {
    // 如果请求 是 访问登录页面(/login) 或 发送登录请求 (/dologin) 
    // 则服务器会检查
    if (req.url == '/login' || req.url == '/dologin') {

        if (req.session.userinfo && req.session.userinfo.username != '') {
            // 将 session 登录信息保存到全局登录信息(userinfo)
            app.locals['userinfo'] = req.session.userinfo;

        }

        next();

        // 如果请求 不是 访问登录页面(/login) 或 发送登录请求 (/dologin) 
        // 则服务器会检查 请求 session 中的登录信息, 如果不存在就跳转到登录页面
        // 存在就将登录信息保存到全局, 然后转到下一个中间件
    } else {
        if (req.session.userinfo && req.session.userinfo.username != '') {
            // 将 session 登录信息保存到全局登录信息(userinfo)
            app.locals['userinfo'] = req.session.userinfo;

            next();
        } else {
            res.redirect('/login');
        }
    }
});

// 主页
app.get('/', (req, res) => {
    res.render('index');
})

// 登录页
app.get('/login', (req, res) => {
    res.render('login');
})

// 商品列表页面
app.get('/product', (req, res) => {
    res.render('product');
})

// 以下是请求路由, 以上是页面路由
// ----------------------------------------------------

// 登录请求
app.post('/dologin', (req, res) => {
    // 获得用户输入
    const userInput = req.body;

    // 链接数据库
    MongoClient.connect(DbUrl, (err, db) => {
        if (err) {
            console.log(err);
        } else {
            const dbase = db.db(TargetDb);

            // 注: toArray() 返回 一个包含所有 匹配到的 documens 的数组.
            dbase.collection(TargetCol).find({ "username": userInput.username }).toArray((err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    // 如果 length 大于 0, 意味着匹配到了数据
                    if (result.length) {
                        // 判断匹配到的密码 和 用户输入是否相同, 相同则把登录信息保存在 session.
                        if (result[0].password == md5(userInput.password)) {
                            req.session.userinfo = result[0];

                            // 定义相关登录状态
                            console.log("登陆成功");
                        } else {
                            console.log("密码错误");
                        }
                    } else {
                        console.log("用户名不存在");
                    }
                    db.close();

                    // 跳转到主页. 如果登录成功会停留在主页, 登录失败会继续跳转到登录页
                    res.redirect('/');
                }
            });
        }
    });
});

// 登出请求
app.get('/logout', (req, res) => {

    // 清空 session, 然后跳转到登录页
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/login');
        }
    })
})

// 添加商品请求
app.get('/product-add', (req, res) => {

    res.send('product-add');
})

// 修改商品请求
app.get('/product-edit', (req, res) => {

    res.send('product-edit');
})

// 删除商品请求
app.get('/product-delete', (req, res) => {

    res.send('删除商品');
})

// 监听端口
app.listen(3000, () => {
    console.log("监听3000端口");
})