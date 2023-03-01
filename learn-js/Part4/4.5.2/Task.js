"use strict"

function Calculator (){
    this.read = function (inputnum1, inputnum2) {
        this.number1 = inputnum1;
        this.number2 = inputnum2;
    };

    this.sum = function () {
        return this.number1 + this.number2;
    };

    this.mul = function () {
        return this.number1*this.number2
    }
}

let calculator = new Calculator();

calculator.read(2, 6);
console.log( "Sum=" + calculator.sum() )
console.log ( "Mul=" + calculator.mul() )

