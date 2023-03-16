function printNumbersTimeOut(from, to) {
    let start = from;
    let timerId = setTimeout(function view() {
        console.log(start);
        start++;
        if (start <= to) {
            timerId = setTimeout(view, 1000);
        } else {
            clearTimeout(timerId);
        }
    }, 1000);
}

function printNumbersInterval(from, to) {
    let start = from;
    let timerId = setInterval(() => {
        console.log(start);
        start++;
        if (start > to) {
            clearInterval(timerId);
        }
    }, 1000);
}

printNumbersInterval(1, 10);