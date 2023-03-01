function Accumulator(startingValue) {
    this.value = startingValue

    this.read = () => this.value += +prompt('Enter number: ', 0)
}

let accumulator = new Accumulator(10);
accumulator.read();
console.log(`current value: ${accumulator.value}`);