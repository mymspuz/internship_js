function sum(x) {
    return function (y) {
        return x + y;
    }
}

console.log(sum(3)(2));
