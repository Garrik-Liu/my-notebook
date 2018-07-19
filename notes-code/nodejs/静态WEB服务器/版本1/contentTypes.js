const fs = require('fs');

function getType(ext, callback) {
    fs.readFile('./mimeTypes.json', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            let mimeTypes = JSON.parse(data.toString());
            let mimeType = mimeTypes[ext] || 'text/plain';

            callback(mimeType);
        }
    });
}

module.exports = {
    getType: getType,
}