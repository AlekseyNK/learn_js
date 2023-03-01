"use strict"

function formatDate(date) {
  let diff = new Date() - date;
  if (diff < 1000) {
    return 'прямо сейчас';
  }

  let sec = Math.floor(diff / 1000);
  if (sec < 60) {
    return sec + ' сек. назад';
  }

  let min = Math.floor(diff / 60000);
  if (min < 60) {
    return min + ' мин. назад';
  }

  let result = date;
  result  = [
    '0' + result .getDate(),
    '0' + (result .getMonth() + 1),
    '' + result .getFullYear(),
    '0' + result .getHours(),
    '0' + result .getMinutes()
  ].map(item => item.slice(-2));

  result = result .slice(0, 3).join('.') + ' ' + result .slice(3).join(':');
  return result;
}

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"