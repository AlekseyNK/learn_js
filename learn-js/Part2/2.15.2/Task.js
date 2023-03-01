"use strict"

function checkAge1(age) {
  return age>18 || ('Родители разрешили?');
}

function checkAge2(age) {
  return age > 18 ? true: ('Родители разрешили?');
}

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}

console.log(checkAge1(10));
console.log(checkAge1(20));

console.log(checkAge2(10));
console.log(checkAge2(20));