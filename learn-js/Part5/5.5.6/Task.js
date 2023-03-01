"use strict"

let calc = new Calculator;

function Calculator () {
    this.calculate = function (inputRe) {
        let arr = inputRe.split(' ')
        return +arr[0] + +(arr[1] + arr[2]);
    }

    this.multiplication = function (inputRe) {
        let arr = inputRe.split(' ')
        return +arr[0] * +arr[2];
    }

    this.division = function (inputRe) {
        let arr = inputRe.split(' ')
        return +arr[0] / +arr[2];
    }

    this.exponentiate = function (inputRe) {
        let arr = inputRe.split(' ')
        return (+arr[0])**(+arr[2]);
    }
}

alert( calc.calculate("3 - 7") ); // 10
alert( calc.multiplication("3 * 7") ); // 21
alert( calc.division("21 / 3")); //3
alert( calc.exponentiate("3 ** 3")); //3