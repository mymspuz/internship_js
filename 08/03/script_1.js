if (!Function.prototype.defer) {
    Function.prototype.defer = function(n) {
        setTimeout(this, n);
    }
}

function f() {
    alert("Hello!");
}

f.defer(1000);