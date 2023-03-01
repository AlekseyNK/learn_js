"use strict"

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

function summ_cash (obj){
  let result = 0
  for (let i in obj) {
      result = result + obj[i]
  }
  return result
}

console.log(summ_cash(salaries))