function makeCounter() {
    counter.count = 0;

    function counter() {
        return counter.count++;
    }

    counter.decrease = () => counter.count--;
    counter.set = (value) => counter.count = value;

    return counter;
}

const counter = makeCounter()

console.log(counter())
console.log(counter())
console.log(counter.count)
console.log(counter.decrease())
console.log(counter.count)
console.log(counter.set(10))
console.log(counter.count)
