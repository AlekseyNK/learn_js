"use strict"

function readNumber () {
    let inputNumber
    while (true) {
        inputNumber = prompt('Введите число')
        if (inputNumber == '' || inputNumber == null){
            alert (null);
            break;
        }
        else if (Boolean(Number(inputNumber)) == true || inputNumber == '0') {
            alert (inputNumber);
            break;
        }
    }
}
readNumber()

