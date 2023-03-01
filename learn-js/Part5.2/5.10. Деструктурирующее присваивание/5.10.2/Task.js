"use strict"

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function getTopSalary (salaries) {
  let maxCash = 0;
  let topSalaryName = null;

  for (let [name, cash] of Object.entries(salaries)) {
    if (cash > maxCash) {
      maxCash = cash;
      topSalaryName = name;
    }
  }
  return topSalaryName;
}

alert(getTopSalary(salaries))