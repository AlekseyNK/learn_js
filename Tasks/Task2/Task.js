"use strict"

// Task 2

/*
При использовании данного модуля считаем, что соблюдены следующие условия:
- Входные числа имеют тип String (вводятся, например, посредством promt());
- Входные числа записаны корректно;
- Вводятся положительные целые числа;
 */


function getSum (num1, num2) {
  let result = [];
  let number1;
  let number2;

  // Сортируем числа по разрядам, чтобы number1 >= number2
  // После сортировки каждое число предствляем в виде массива разрядов с типом Number
  if (num1.length >= num2.length) {
    number1 = Array.from(num1).reverse().map(i => Number(i));
    number2 = Array.from(num2).reverse().map(i => Number(i));
  } else {
    number1 = Array.from(num2).reverse().map(i => Number(i));
    number2 = Array.from(num1).reverse().map(i => Number(i));
  }

  // Складываем поразрядно
  for (let i = 0; i < number1.length; ++i) {
    number2[i] = (number2[i] == undefined) ? 0: number2[i];
    result[i] = number1[i] + number2[i];
    if (result[i] > 9) {
      result[i] -= 10;
      number1[i+1] = (number1[i+1] == undefined) ? 1: number1[i+1] + 1;
    }
  }
  return result.reverse().join("");
}


function getSubtraction (num1, num2) {
  let result = [];
  let number1;
  let number2;
  let minus = '';

  // Сортируем числа по разрядам, чтобы number1 >= number2
  // После сортировки каждое число предствляем в виде массива разрядов с типом Number
  // Если num2>=num1, записываем знак '-' в начале строки
  if (num1 == num2) {
    return '0';
  } else if (num1.length > num2.length || (num1.length == num2.length && num1 > num2)) {
    number1 = Array.from(num1).reverse().map(i => Number(i));
    number2 = Array.from(num2).reverse().map(i => Number(i));
  } else {
    number1 = Array.from(num2).reverse().map(i => Number(i));
    number2 = Array.from(num1).reverse().map(i => Number(i));
    minus = '-';
  }

  // Вычитание поразрядно
  for (let i = 0; i < number1.length; ++i) {
    number2[i] = (number2[i] == undefined) ? 0 : number2[i];
    result[i] = number1[i] - number2[i];
    if (result[i] < 0) {
      result[i] = 10 + number1[i] - number2[i];
      number1[i+1] = number1[i+1] - 1
    }
  }

  //Убираем '0' перед числом
  while (result[result.length-1] == 0){
    result.pop()
  }

  result.push(minus);
  return result.reverse().join('');
}


function getMultiplication (num1, num2) {

  if (num1 == '0' || num2 == '0') return 0

  let result = '0';
  let currentResult = [];
  let currentNumber = 0;
  let number1;
  let number2;

  // Сортируем числа по разрядам, чтобы number1 >= number2
  // После сортировки каждое число предствляем в виде массива разрядов с типом Number
  if (num1.length >= num2.length) {
    number1 = Array.from(num1).reverse().map(i => Number(i));
    number2 = Array.from(num2).reverse().map(i => Number(i));
  } else {
    number1 = Array.from(num2).reverse().map(i => Number(i));
    number2 = Array.from(num1).reverse().map(i => Number(i));
  }
  // Умножаем в столбик (каждый разряд второго числа помножается на второе число). currentNumber попадает в следующий разряд
  for (let i = 0; i < number2.length; ++i) {
    for (let j = 0; j < number1.length; ++j) {
      currentResult[j] = number2[i] * number1[j] + currentNumber;
      if (currentResult[j] > 9) {
        currentNumber = Math.floor(currentResult[j]/10);
        currentResult[j] = currentResult[j] % 10;
      } else {
        currentNumber = 0;
      }
    }
    
    if (currentNumber > 0) currentResult.push(currentNumber);

    // Добавляем количество 0, соответсвующее номеру разряда(индекс числа в массиве number 2)
    currentResult = currentResult.reverse().join('') + '0'.repeat(i);
    // Складываем текущий результат, перед последующим умножением на разряд второго числа
    result = getSum (result, currentResult);
    currentNumber = 0;
    currentResult = [];
  }
  return result;
}

function getDivision (num1, num2) {
  if (num2 == '0' || num2 == null) return Infinity;
  let number1 = num1;
  let number2 = num2;
  let countZeros;
  let result = '0';
  let fraction = '';

  while (number1.length > number2.length || (number1.length == number2.length && number1 >= number2)) {

    // Увеличиваем разрядность делителя на разницу разрядов между делимым и делителем и вычитаем.
    if (number1.length - number2.length >=2) {
      countZeros = '0'.repeat(number1.length - number2.length - 1);
      number1 = getSubtraction(number1, number2 + countZeros);
      result = getSum(result, ('1' + countZeros));
    } else {
      number1 = getSubtraction(number1, number2);
      result = getSum(result, ('1'));
    }
  }

  // реализация дроби с точностью до 2-х знаков
  if ((number2.length - number1.length) < 3) {
    fraction = (number1.slice(0,3)/number2.slice(0,3)).toFixed(2);
    fraction = (fraction.slice(2) == '00') ? '': fraction.slice(1);
  }

  // Чтобы убрать дробную часть - убрать fraction
  return result + fraction;
}

//Tests

let num1 = prompt('Введите первое число')
let num2 = prompt('Введите второе число')



//alert (getSum(num1, num2))
//alert (getSubtraction(num1, num2))
//alert (getMultiplication(num1, num2))
alert (getDivision(num1, num2))