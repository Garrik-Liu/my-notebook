const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const UsersInfo = require('./users').items;

const Port = 3000;
const App = express();

App.use(session({
    // cookie 的 name
    name: 'login/logout',
    // 用来对 session id 相关的 cookie 进行签名
    secret: 'chyingp',
    // 本地存储 session
    store: new FileStore(),
    // 是否自动保存未初始化的会话，建议 false
    saveUninitialized: false,
    // 是否每次都重新保存会话，建议 false
    resave: false,
    // 设置返回到前端 key 的设置
    cookie: {
        // 有效期
        maxAge: 10 * 1000
    }
}));

App.get('/', function(req, res, next) {
    var sess = req.session;
    var loginUser = sess.loginUser;
    var isLogined = !!loginUser;


});

// 登录接口
app.post('/login', function(req, res, next) {

    var user = findUser(req.body.username, req.body.password);

    if (user) {
        req.session.regenerate(function(err) {
            if (err) {
                res.json({ ret_code: 2, ret_msg: '登录失败' });
                return;
            }

            req.session.loginUser = user.name;
            res.json({ ret_code: 0, ret_msg: '登录成功' });
        });
    } else {
        res.json({ ret_code: 1, ret_msg: '账号或密码错误' });
    }
});

// 退出登录
app.get('/logout', function(req, res, next) {
    req.session.destroy(function(err) {
        if (err) {
            res.json({ ret_code: 2, ret_msg: '退出登录失败' });

            return;
        }

        res.redirect('/');
    });
});



App.listen(Port, () => {
    console.log("监听 ${Port} 端口:")
})