"use strict"

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries (inputObj) {
  let result = Object.values(inputObj);
  return result.reduce((sum, current) => sum + current, 0)
}

alert( sumSalaries(salaries) ); // 650