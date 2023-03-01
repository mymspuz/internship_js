// Вызовет ошибку
// function makeUser() {
//     return {
//         name: "John",
//         ref: this
//     };
// }
// alert(user.ref.name);

function makeUser() {
    return {
        name: "John",
        ref() {
            return this;
        }
    };
}

let user = makeUser();

alert(user.ref().name);