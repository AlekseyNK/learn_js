"use strict"

function read(inputNumber1, inputNumber2) {
  this.number1 = inputNumber1;
  this.number2 = inputNumber2;
  return {
    number1: this.number1,
    number2: this.number2
  };
}

function sum() {
  return this.number1 + this.number2
}

function mul () {
  return this.number1 * this.number2
}

let calculator = {
  read: read,
  sum: sum,
  mul: mul,
  number1: undefined,
  number2: undefined
};

console.log(calculator.read(2,3))
console.log(calculator.sum())
console.log(calculator.mul())