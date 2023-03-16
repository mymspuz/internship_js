if (!Function.prototype.defer) {
    Function.prototype.defer = function(n) {
        return (...args) => setTimeout(this, n, ...args);
    }
}

function f(a, b) {
    console.log(a + b);
}

f.defer(1000)(1, 2);