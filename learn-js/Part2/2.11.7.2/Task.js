"use strict"

let age = prompt('Введите возраст')

if (!(age >= 14 && age <= 90)){
    alert('Проверка прошла')
}
else {
    alert('Проверка не прошла')
}