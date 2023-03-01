"use strict"

// Task 1.1

/*   
  Input: String
  Output: String
  Return: Приводит строку к нижнему регистру. Первую букву строки приводит к верхнему регистру
*/

function setTitle (inputStr) {
  let result = inputStr.toLowerCase();
  return result[0].toUpperCase() + result.slice(1);
}

// Task 1.2

/*   
  Input: String
  Output: String
  Return: Возвращает строку с корректно расставленными пробелами
*/

function setSpaces (inputStr) {
  let punctuationMarks = [',', '.', '?', '!', ':', ';'];
  inputStr = inputStr.trim();

  // Удаление повторяющихся пробелов
  while (inputStr.includes('  ')) {
    inputStr = inputStr.slice(0, inputStr.indexOf('  ')) + inputStr.slice(inputStr.indexOf('  ') + 1);
  }

  // Удаление пробелов до и после знаков пунктуации, вставка пробела после знака пунктуации
  punctuationMarks.forEach(element => {
    if (inputStr.includes(element)) {
      let array = inputStr.split(element);
      for (let i = 0; i < array.length; i++) {
        array[i] = array[i].trim();
      }
      inputStr = array.join(element + ' ');
    }
  });

  return inputStr;
}

// Task 1.3. Считается, что входная строка соответствует правилам грамматики

/*   
  Input: String
  Output: Integer
  Return: Возвращает число слов в строке
*/

function getCountOfWords (inputStr) {
  let array = inputStr.split(' ');
  return array.length;
}

// Task 1.4. Считается, что входная строка соответствует правилам грамматики

/*   
  Input: String
  Output: Object
  Return: Возвращает число повторений для каждого уникального слова
*/

function getCountOfUniqueWords (inputStr) {
  // Проверка на пустую входную строку
  if (inputStr.trim() == '' || inputStr == null) return undefined;

  // Удаление знаков пунктуации
  let punctuationMarks = [',', '.', '?', '!', ':', ';'];
  punctuationMarks.forEach(element => {
    while (inputStr.includes(element)) {
      inputStr = inputStr.slice(0, inputStr.indexOf(element)) + inputStr.slice(inputStr.indexOf(element) + 1);
    }
  });

  // Перевод строки в массив слов с последующим формированием объекта result, содержащим информацию об их количестве
  let array = inputStr.split(' ');
  let result = {};
  while (array.length) {
    let element = array.pop();
    if (result[element] == undefined) {
      result[element] = 1;
    } else {
      result[element] += 1;
    }
  }
  return result;
}

/*   
  Input: String
  Output: undefined
  Return: Не возвращает значения. Представляет число повторений для каждого уникального слова посредством alert()
*/

function showCountOfUniqueWords (inputStr) {
  let objectOfcountUniqueWords = getCountOfUniqueWords(inputStr);
  if (objectOfcountUniqueWords == undefined) {
    alert ('Ваша строка пуста. Отмена')
    return
  }
  alert( 'Количество уникальных слов в вашей строке:' )
  let arrayOfNumbers = Array.from (new Array(19), (x,i) => String(i));
  let arrayOfNumbersLow = arrayOfNumbers.slice(2, 5)
  let arrayOfNumbersHigh = ['0'].concat(arrayOfNumbers.slice(5))

  for (let word in objectOfcountUniqueWords) {
    let strCount = String(objectOfcountUniqueWords[word])
    let result = (arrayOfNumbersHigh.includes(strCount.slice(-2))) ?  ( word + ": " +strCount + " слов" ):
    (arrayOfNumbersLow.includes(strCount.slice(-1))) ?  ( word + ": " +strCount + " слова" ):
    ( word + ": " +strCount + " слово" )

    alert (result)
  }
}


// Тесты

/* let strToTitle = prompt ( 'Введие строку для преобразования к нижнему регистру, кроме первой буквы' )
alert ( setTitle(strToTitle) ) */

/* let strSetSpaces = prompt ( 'Введите строку, в которой необходимо корректно расставить пробелы' )
alert ( setSpaces(strSetSpaces)) */

/* let strGetCountOfWords = prompt ( 'Введите строку для подсчета количества слов' )
alert ( getCountOfWords(strGetCountOfWords) ) */

let strShowCountOfUniqueWords = prompt ( 'Введите строку для подсчета количества уникальных слов' )
console.log( getCountOfUniqueWords(strShowCountOfUniqueWords) )
showCountOfUniqueWords( strShowCountOfUniqueWords )

