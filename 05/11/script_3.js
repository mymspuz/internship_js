const getLocalDay = (date) => date.getDay() ? date.getDay() : 7

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getLocalDay(date) );