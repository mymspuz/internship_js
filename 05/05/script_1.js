function camelize(str) {
    const src = str.split('-');
    const transformArr = src.map((value, index) => index === 0 ? value : value[0].toUpperCase() + value.slice(1));
    return transformArr.join('');
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));