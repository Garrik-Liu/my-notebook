const path = require("path");

module.exports = (options = {}, ctx) => {
    return {
        define: {},
        clientRootMixin: path.resolve(__dirname, "clientRootMixin.js"),
    }
};