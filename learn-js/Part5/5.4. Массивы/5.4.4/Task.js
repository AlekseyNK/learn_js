"use strict"

function sumInput() {
  let numberInput = prompt('Введите число');
  let result = [];

  while (Boolean(Number(numberInput)) || numberInput == '0') {
    if (numberInput == '' || numberInput == null) {
      break;
    }
    result.push(numberInput);
    numberInput = prompt('Введите число') ;
  }

  let sum = 0
  for (let i of result) {
    sum += +i;
  }
  return (sum);
}

alert(sumInput())