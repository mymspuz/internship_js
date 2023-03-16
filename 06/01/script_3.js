const fib = (n) => {
    let result = 0;
    let first = 1;
    let second = 1;
    for (let i = 3; i <= n; i++) {
        result = first + second;
        first = second;
        second = result;
    }
    return result;
}

console.log(fib(3));
console.log(fib(7));
console.log(fib(77));