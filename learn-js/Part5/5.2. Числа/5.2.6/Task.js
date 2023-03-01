"use strict"
function randomInteger (inputMin, inputMax) {
  let result = Math.random() * (inputMax - inputMin) + inputMin;
  result = Math.round(result)
  return result;
}

alert (randomInteger(1, 4))
alert (randomInteger(2, 6))