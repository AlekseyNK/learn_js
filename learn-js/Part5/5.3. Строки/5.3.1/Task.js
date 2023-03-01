"use strict"

let inputStr = prompt('Введите строку');

function ucFirst(str) {
  let result = str[0].toUpperCase() + str.slice(1);
  return result
}

alert(ucFirst(inputStr))