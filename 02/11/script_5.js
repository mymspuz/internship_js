let userName;
let userPass;

userName = prompt('Введите логин:', '');

if (userName === 'Админ') {
    userPass = prompt('Введите пароль:', '');
    if (userPass === 'Я главный') {
        alert('Здравствуйте!');
    } else if (!userPass) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }
} else if (!userName) {
    alert('Отменено');
} else {
    alert('Я вас не знаю');
}