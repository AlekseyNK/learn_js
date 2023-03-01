"use strict"
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // Если убрать конструкцию else то работа функции не изменится
    return confirm('Родители разрешили?');
  }
}
