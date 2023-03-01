"use strict"

function unique(arr) {
  let result = []
  while (arr.length > 0) {
    let current = arr.shift();
    if (!arr.includes(current)) {
      result.push(current);
    }
  }
  return result
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O