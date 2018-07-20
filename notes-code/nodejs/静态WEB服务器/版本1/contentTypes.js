const fs = require('fs');

function getType(ext, callback) {
    // mimeTypes.json 保存了 不同文件后缀名 对应的 Content-Type 值
    fs.readFile('./mimeTypes.json', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            // 读取后, 将 JSON 解析成 JS 对象.
            let mimeTypes = JSON.parse(data.toString());

            // 如果找不到, 默认返回 'text/plain'
            let mimeType = mimeTypes[ext] || 'text/plain';

            // 用 回调函数 去返回 mimeType, 否则因为是异步, 返回的是 'undefined'
            callback(mimeType);
        }
    });
}

module.exports = {
    getType: getType,
}