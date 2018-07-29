const express = require('express');
const morgan = require('morgan')("short");
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();

const url = "mongodb://localhost:27017/"
const targetDb = "product-manage";
const targetCol = "users";

const signKey = 'secret';

// 使用 ejs 模板引擎, 默认去 views 目录下面找 
app.set('view engine', 'ejs');

app.use(morgan);

// 解析 HTTP 请求体
// 解析 URL编码 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser(signKey));
app.use(session({
    secret: signKey,
    resave: false,
    saveUninitialized: true,
    cookie: {
        // 30分钟
        maxAge: 1000 * 60 * 30
    },
    rolling: true
}));

app.use(express.static('public'));

// 自定义中间件用于判断登录状态
app.use((req, res, next) => {
    if (req.url == '/login' || req.url == '/dologin') {
        next();
    } else {
        if (req.session.userinfo && req.session.userinfo.username != '') {
            /*配置全局变量  可以在任何模板里面使用*/
            app.locals['userinfo'] = req.session.userinfo;
            next();
        } else {
            res.redirect('/login');
        }
    }
});

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/dologin', (req, res) => {
    const userInput = req.body;

    MongoClient.connect(url, (err, db) => {
        if (err) {
            console.log(err);
        } else {
            const dbase = db.db(targetDb);

            dbase.collection(targetCol).find({ "username": userInput.username }).toArray((err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    if (result.length) {
                        if (result[0].password == userInput.password) {
                            console.log("登陆成功");

                            req.session.userinfo = result[0];
                        } else {
                            console.log("密码错误");
                        }
                    } else {
                        console.log("用户名不存在");
                    }
                    db.close();

                    res.redirect('/');
                }
            });
        }
    });
});

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/login');
        }
    })
})

app.get('/product', (req, res) => {
    res.render('product');
})

app.get('/product-add', (req, res) => {
    res.render('product-add');
})

app.get('/product-edit', (req, res) => {
    res.render('product-edit');
})

app.get('/product-delete', (req, res) => {
    res.send('删除商品');
})

app.listen(3000, () => {
    console.log("监听3000端口");
})