"use strict"
let inputNumber = prompt('Введите число больше 100')
while (inputNumber <101) {
   if (inputNumber== null) {
      alert ('Отмена');
      break;
   }
   inputNumber = prompt('Введите число больше 100')
}