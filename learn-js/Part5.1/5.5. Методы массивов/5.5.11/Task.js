"use strict"

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

function getAverageAge (inputArray) {
  let result = inputArray.reduce((sum, curreant) => sum + curreant.age, 0);
  return result / inputArray.length
}

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28