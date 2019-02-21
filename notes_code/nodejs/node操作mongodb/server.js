const http = require('http');
const url = require('url');
const fs = require('fs');
const querystring = require('querystring');
const MongoClient = require('mongodb').MongoClient;

const dbUrl = "mongodb://localhost:27017/";
const targetDB = "mytest";
const targetCol = "users";

const server = http.createServer(((req, res) => {
    const pathname = url.parse(req.url).pathname;

    if (pathname === "/") {
        fs.readFile('./index.html', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        })
    } else if (pathname === "/login") {
        const queryStr = url.parse(req.url).query;

        if (queryStr) {
            const queryObj = querystring.parse(queryStr);
            db(dbUrl, targetDB, targetCol, queryObj)
        }

        fs.readFile('./login.html', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        })

    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("404");
    }
}));

server.listen(3000, () => {
    console.log("监听 3000 端口!")
});

function db(dbUrl, targetDB, targetCol, data) {
    MongoClient.connect(dbUrl, { useNewUrlParser: true }, (err, db) => {
        if (err) {
            console.log(err);
        } else {
            const dbase = db.db(targetDB);

            console.log("数据库已连接");

            dbase.collection(targetCol).insertOne(data, (err, res) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("数据插入成功");

                    db.close();
                }
            });

        }
    });
}