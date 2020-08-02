const path = require("path");
const mermaid = require("mermaid/dist/mermaid");

module.exports = (options = {}, ctx) => {
    mermaid.then(m => {
        m.initialize({
            startOnLoad: true
        });
        m.init();
    });
    return {
        define: {},
        clientRootMixin: path.resolve(__dirname, "clientRootMixin.js"),
    }
};