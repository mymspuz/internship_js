let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(minVal, maxVal) {
    return function(element) {
        return element >= minVal && element <= maxVal;
    }
}

function inArray(src) {
    return function(element) {
        return src.includes(element);
    }
}

console.log(arr.filter(inBetween(3, 6)));
console.log(arr.filter(inArray([1, 2, 10])));