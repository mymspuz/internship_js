function sumInput() {
    const arrNumber = [];
    let resSum = 0;
    let userInput;
    do {
        userInput = prompt('Enter number:', '')
        if (userInput && isFinite(userInput)) {
            arrNumber.push(+userInput)
            resSum += +userInput;
        }
    } while (userInput && isFinite(userInput))

    return resSum;
}

sumInput();