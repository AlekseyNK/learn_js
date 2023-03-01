"use strict"
function random (inputMin, inputMax) {
  let result = Math.random() * (inputMax - inputMin) + inputMin;
  return result;
}

alert (random(1, 4))
alert (random(2, 6))