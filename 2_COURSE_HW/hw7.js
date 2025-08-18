function formatDateTime(date) {
    const days = ["воскресенье",  "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
    const month = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];

    let formattedDate = 'Дата: '+ date.getDate() + ' ' + month[date.getMonth()] + ' ' +  date.getFullYear() + ' — это ' + days[date.getDay()];
    let formattedTime = 'Время: ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

    return `${formattedDate}\n${formattedTime}`;

}

const myDate = new Date();
console.log(formatDateTime(myDate));