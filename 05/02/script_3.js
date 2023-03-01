function readNumber() {
    let userInput;
    do {
        userInput = prompt("Enter number", 0);
    } while (!isFinite(userInput))

    return !userInput ? null : Number(userInput)
}

console.log(readNumber())