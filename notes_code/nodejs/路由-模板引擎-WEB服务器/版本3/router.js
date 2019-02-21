const url = require('url');
const ejs = require('ejs');

module.exports = function(req, res) {
    const pathname = url.parse(req.url).pathname;
    const method = req.method.toLowerCase();

    console.log(pathname);

    switch (pathname) {
        case '/':
            ejs.renderFile('./views/index.ejs', {
                msg: "I am Garrik",
            }, (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(data);
                }
            })
            break;
        case '/login':
            ejs.renderFile('./views/login.ejs', {}, (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(data);
                }
            })
            break;
        case '/dologin':
            if (method == "post") {
                var postData = "";
                req.on('data', (chunk) => {
                    postData += chunk;
                });

                req.on('end', () => {
                    console.log("POST: ")
                    console.log(postData);

                    res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
                    res.end(`<script>
                        alert("数据发送成功!");
                        history.back();
                    </script>`);
                })
            } else if (method == 'get') {
                const query = url.parse(req.url).query

                console.log("GET: ")
                console.log(query);

                res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
                res.end(`<script>
                        alert("数据发送成功!");
                        history.back();
                    </script>`);
            }
            break;
        default:
            ejs.renderFile('./views/404.ejs', {}, (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(data);
                }
            })
            break;
    }
}