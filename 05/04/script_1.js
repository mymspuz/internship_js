let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert( fruits.length ); // ["Яблоки", "Груша", "Апельсин", "Банан"] - т.к. это не копия, а лишь ссылка на тот же массив.