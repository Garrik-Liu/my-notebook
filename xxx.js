var x = {
    sayHi: function() {
        return 'hi';
    }
}

var y = function() {}
var z = function() {}

y.prototype = x;
z.prototype = x;

y.prototype.sayBye = function() {
    return 'bye';
}

console.log(z.prototype)