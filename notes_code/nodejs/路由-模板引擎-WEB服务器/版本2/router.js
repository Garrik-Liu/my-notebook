const url = require('url');
const ejs = require('ejs');

module.exports = function(req, res) {
    const pathname = url.parse(req.url).pathname;

    res.writeHead(200, { 'Content-Type': 'text/html' });

    console.log(pathname);

    switch (pathname) {
        case '/':
            ejs.renderFile('./views/index.ejs', {
                msg: "I am Garrik",
            }, (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    res.end(data);
                }
            })
            break;
        default:
            ejs.renderFile('./views/404.ejs', {}, (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    res.end(data);
                }
            })
            break;
    }
}