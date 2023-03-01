function getWeekDay(date) {
    const nameDays = {
        '0': 'ВС',
        '1': 'ПН',
        '2': 'ВТ',
        '3': 'СР',
        '4': 'ЧТ',
        '5': 'ПТ',
        '6': 'СБ'
    };
    return nameDays[date.getDay().toString()];
}

console.log(getWeekDay(new Date(2012, 0, 3)));