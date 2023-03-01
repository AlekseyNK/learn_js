'use strict'

// Проблема теста в том, что он использует одну и ту же функцию. Фактически выполняется одна и та же проверка, просто с разными значениями

it("Возводит x в степень n", function() {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});