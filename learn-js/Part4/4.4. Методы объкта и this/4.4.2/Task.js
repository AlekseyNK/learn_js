"use strict"

let calculator = {
  read: read,
  sum: sum,
  mul: mul,
}

function read () {
  this.a = +prompt('Введите а');
  this.b = +prompt('Введите b');
}

function sum () {
  return this.a + this.b;
}

function mul () {
  return this.a * this.b;
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );