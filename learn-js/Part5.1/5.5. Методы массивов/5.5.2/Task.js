"use strict"

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (совпадающие значения)

alert( arr ); // 5,3,8,1 (без изменений)

function filterRange (inArr, start, end) {
  let result = []
  inArr.forEach(element => {
    if (element >= start && element <= end) {
      result.push(element);
    }
  });
  return result;
}