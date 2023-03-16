function f(a) {
    console.log(a);
}

function throttle(func, valueDelay) {
    let check = true;
    let lastCallFunc = null;
    let lastCallArgs = null;

    function isRun() {
        if (check) {
            check = false;
            func.apply(this, arguments);
            setTimeout(() => {
                check = !check;
                if (lastCallFunc) {
                    isRun.apply(lastCallFunc, lastCallArgs);
                    lastCallFunc = null;
                    lastCallArgs = null;
                }
            }, valueDelay);
        } else {
            lastCallFunc = this;
            lastCallArgs = arguments;
        }
    }

    return isRun
}

let f1000 = throttle(f, 1000);

f1000(1);
f1000(2);
f1000(3);