"use strict"

let date = new Date(2012, 0, 3);  // 3 января 2012 года

let objDay = {
    0: 'Пн',
    1: 'Вт',
    2: 'Ср',
    3: 'Чт',
    4: 'Пт',
    5: 'Сб',
    6: 'Вс',
}

function getWeekDay(inputData) {
    return objDay[inputData.getDay()];
}

alert( getWeekDay(date) );        // нужно вывести "ВТ"