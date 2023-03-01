"use strict"

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = function () {
    let result = [];
    users.forEach(element => {
        result.push(element.name)
    });
    return result
}

alert( names() ); // Вася, Петя, Маша