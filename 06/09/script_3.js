function debounce(func, valueDelay) {
    let check = true;
    function isRun() {
        if (check) {
            check = false;
            func.apply(this, arguments);
            setTimeout(() => check = !check, valueDelay);
        }
    }

    return isRun
}

let f = debounce(alert, 1000);

f(1);
f(2);

setTimeout( () => f(3), 100);
setTimeout( () => f(4), 1100);
setTimeout( () => f(5), 1500);