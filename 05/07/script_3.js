let map = new Map();

map.set("name", "John");

let keys = map.keys(); // вернет итерируемый объект. Необходимо перевести его в массив, короче всего Array.from()

keys = Array.from(keys);

keys.push("more");

alert(keys);