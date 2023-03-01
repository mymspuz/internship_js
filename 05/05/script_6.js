function Calculator() {
    this.operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    }

    this.calculate = function(str) {
        const divide = str.split(' ');
        const a = +divide[0];
        const operation = divide[1];
        const b = +divide[2];

        if (!this.operations[operation] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.operations[operation](a, b);
    };

    this.addMethod = function(newName, newOperation) {
        this.operations[newName] = newOperation;
    };
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

console.log(powerCalc.calculate("2 ** 3"));
console.log(powerCalc.calculate("2 * 3"));
console.log(powerCalc.calculate("3 / 2"));
console.log(powerCalc.calculate("2 ? 3"));
console.log(powerCalc.calculate("2 + 3"));
console.log(powerCalc.calculate("2 - 3"));
