function getSecondsToTomorrow() {
    const now = new Date();

    const year = now.getFullYear();
    const month = now.getMonth();
    const day = now.getDate();

    const endDay = new Date(year, month, day);
    endDay.setDate(day + 1);

    return Math.round((endDay - now) / 1000)
}