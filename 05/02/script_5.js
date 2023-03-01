function random(min, max) {
    let result;
    
    do {
        result = min + Math.random() * (max - min)
    } while (result === max)

    return result;
}

console.log(random(1, 6));
console.log(random(1, 6));
console.log(random(1, 6));
console.log(random(1, 6));