"use strict"

function camelize(str) {
  let arr = str.split("-");
  let result = [];
  let current;
  
  while (true) {
    if (arr.length == 0) break;
    current = arr.shift();
    if (current != '') {
      current = current[0].toUpperCase() + current.slice(1);
      result.push(current);
    }
  }
  return result.join('')
}

alert (camelize("background-color")) // == 'backgroundColor';
alert (camelize("list-style-image")) // == 'listStyleImage';
alert (camelize("-webkit-transition")) // == 'WebkitTransition';