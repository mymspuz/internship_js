function f(x) {
    alert(x);
}

function delay(func, valueDelay) {
    return function getDelay(data) {
        return setTimeout(() => func.call(func, data), valueDelay)
    }
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test1");
f1500("test2");