function Calculator() {

    this.read = () => {
        this.numFirst = +prompt('Enter first number: ', 0);
        this.numSecond = +prompt('Enter second number', 0);
    };

    this.sum = () => this.numFirst + this.numSecond;

    this.mul = () => this.numFirst * this.numSecond;
}

let calculator = new Calculator();
calculator.read();

console.log(`sum = ${calculator.sum()}`);
console.log(`mul = ${calculator.mul()}`);