let user = {
    name: "Василий Иванович",
    age: 35
};

let newUser = JSON.stringify(user);
console.log(newUser);
newUser = JSON.parse(newUser);
console.log(newUser);