function getSecondsToday() {
    const now = new Date();

    const year = now.getFullYear();
    const month = now.getMonth();
    const day = now.getDate();

    let startDay = new Date(year, month, day);

    return Math.round((now - startDay) / 1000);
}

alert(getSecondsToday());