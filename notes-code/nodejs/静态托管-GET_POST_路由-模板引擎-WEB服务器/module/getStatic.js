// 引入模块
const fs = require('fs');
const path = require('path');

// 引入 mimeType 模块
const mimeTypes = require('./mimeTypes');

// 导出模块
module.exports = function(req, res, staticPath, filePathname, errPath) {

    // 获得文件后缀名
    let fileExt = path.extname(filePathname);


    // 读取相应文件, 如果有错误返回 404
    fs.readFile(staticPath + filePathname, (err, data) => {
        if (err) {
            fs.readFile(errPath + '/404.html', (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    // 控制台显示 找不到相关文件
                    console.log("Error: 找不到 " + filePathname);

                    // 服务器返回 404 页面
                    res.writeHead(404, { "Content-Type": "text/html" });
                    res.write(data);
                    res.end();
                }
            });
        } else {
            getType(mimeTypes, fileExt, (mimeType) => {
                // 控制台显示 请求方式 和 请求 URL
                console.log(req.method + " " + req.url);

                // 服务器返回响应
                res.writeHead(200, { "Content-Type": mimeType });
                res.write(data);
                res.end();
            })

        }
    });
};

// 根据不同的 后缀名 去定义不同的 Content-Type
function getType(mimeTypes, ext, callback) {

    let mimeTypesObj = JSON.parse(mimeTypes);
    let mimeType = mimeTypesObj[ext] || 'text/plain';

    callback(mimeType);

};