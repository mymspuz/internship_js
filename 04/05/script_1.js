// Если функция будет возвращать ссылку на один и тот же объект, то получиться.
let result = {}
function A() {
    return result
}

function B() {
    return result
}

console.log(new A() === new B())