"use strict"

function extractCurrencyValue(str) {
  return +str.slice(1);
}
let inputstr = prompt('Введите значение')
alert(extractCurrencyValue(inputstr))