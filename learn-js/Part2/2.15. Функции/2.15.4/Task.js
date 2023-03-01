"use strict"

function pow(a, b) {
  if (a < 1 || b < 1) {
    return ('Необходимо ввести натуральное число');
  }
  return a ** b;
}

console.log(pow(2, 4))
console.log(pow(3, -1))