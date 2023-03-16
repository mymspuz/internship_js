function Rabbit() {
    this.name = 'Property Name';
}

// Rabbit.prototype = {}; - неверно

let rabbit = new Rabbit();

let rabbit2 = new rabbit.constructor();

console.log(rabbit2.name);

