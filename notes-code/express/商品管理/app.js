const express = require('express');
const morgan = require('morgan')("short");
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();

const url = "mongodb://localhost:27017/"
const targetDb = "product-manage";
const targetCol = "users";

// 使用 ejs 模板引擎, 默认去 views 目录下面找 
app.set('view engine', 'ejs');

app.use(morgan);

// 解析 HTTP 请求体
// 解析 URL编码 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('login');
})

app.post('/dologin', (req, res) => {
    const data = req.body;

    MongoClient.connect(url, (err, db) => {
        if (err) {
            console.log(err);
        } else {
            const dbase = db.db(targetDb);

            dbase.collection(targetCol).find({ "username": data.username }).toArray((err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    if (result.length) {
                        if (result[0].password == data.password) {
                            console.log("登陆成功");
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