function getLastDayOfMonth(year, month) {
    const result = new Date();
    result.setFullYear(year);
    result.setMonth(month + 1);
    result.setDate(0);
    return result.getDate();
}

alert( getLastDayOfMonth(2012, 0) ); // 31
alert( getLastDayOfMonth(2012, 1) ); // 29
alert( getLastDayOfMonth(2013, 1) ); // 28