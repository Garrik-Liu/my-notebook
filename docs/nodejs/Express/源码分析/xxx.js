methods.forEach(function(method) {
    app[method] = function(path) {
        if (method === 'get' && arguments.length === 1) {
            // app.get(setting)
            return this.set(path);
        }
        this.lazyrouter();

        var route = this._router.route(path);
        route[method].apply(route, slice.call(arguments, 1));
        return this;
    };
});