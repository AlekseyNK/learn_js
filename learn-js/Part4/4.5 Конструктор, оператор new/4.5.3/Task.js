"use strict"

function Accumulator (stringVar) {
    if (this.value == undefined) {
        this.value = stringVar;
    }
    this.read = function () {
        let inputNumber = prompt('Введите число');
        this.value += +inputNumber;
    }
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();
alert( accumulator.value );