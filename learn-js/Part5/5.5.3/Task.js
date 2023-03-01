"use strict"

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

function filterRangeInPlace (inputArr, start, stop) {
  let len = inputArr.length - 1;
  while (len >= 0) {
    if (inputArr[len] < start || inputArr[len] > stop) {
      inputArr.splice(len, 1);
    }
    len -= 1;
  }
}

alert( arr ); // [3, 1]