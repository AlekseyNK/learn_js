"use strict"
let inputNumber = prompt('Введите число')
if (inputNumber < 2) {
   inputNumber = prompt('Введите целое положительное число больше 2')
}
else if (inputNumber == 2) {
   alert(inputNumber)
}
else {
   for (let i=2; i <= inputNumber; ++i) {
      let j = 2
      loop: while (j <= i){
         if (i%j == 0 && i!=j) break loop;
         ++j;
         if (i==j) alert(i);
      }
   }
}
