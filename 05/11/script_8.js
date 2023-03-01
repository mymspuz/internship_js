function formatDate(date) {
    const now = new Date();
    const diff = now - date;
    console.log(diff)
    const addZero = (value) => value.toString().length === 1 ? `0${value}` : value.toString();

    switch (true) {
        case diff < 1000:
            return 'прямо сейчас';
        case diff < (60 * 1000):
            return `${Math.round(diff / 1000)} сек. назад`;
        case diff < (60 * 60 * 1000):
            return `${Math.round(diff / (60 * 1000))} мин. назад`;
        default:
            const year = date.getFullYear();
            const month = addZero(date.getMonth() + 1);
            const day = addZero(date.getDate());
            const hour = addZero(date.getHours());
            const minute = addZero(date.getMinutes());
            return `${day}.${month}.${year} ${hour}:${minute}`;
    }
}

console.log(formatDate(new Date(new Date - 1)));
console.log(formatDate(new Date(new Date - 30 * 1000)));
console.log(formatDate(new Date(new Date - 5 * 60 * 1000)));
console.log(formatDate(new Date(new Date - 86400 * 1000)));