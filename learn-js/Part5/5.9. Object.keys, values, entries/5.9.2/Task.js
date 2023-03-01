"use strict"

let user = {
  name: 'John',
  age: 30
};

function count (inputObj) {
  result = Object.keys(inputObj);
  return result.lenght;
}

alert( count(user) ); // 2