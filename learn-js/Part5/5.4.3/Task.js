"use strict"

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // добавляем функцию массив с индексом 2. вызываем функцию, функция ссылается на массив и соотвественно его выдаст. 