"use strict"
// Task 3

// Создание класса Товар
class Product {
    constructor (name, price, quantity, description) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
      this.description = description;
   }
}

// Создание экземпляров класса Товар
let pr1 = new Product('Aaa', 2, 1, 'Bbb');
let pr2 = new Product('Ccc', 100, 2, 'Ddd');
let pr3 = new Product('Fdd', 100, 5, 'Ddd');
let pr4 = new Product('FFD', 100, 10, 'Aabc');
let pr5 = new Product('Aaaafd', 2, 20, 'Aabc');

// Массив, наполненный экземплярами класса Товар
let arrayOfProducts = [pr1, pr2, pr3, pr4, pr5];

// Объект для вызова соответсвующей функции поиска в поле класса
let objQueres = {
    'name' : executeQueryNameDescription,
    'price': executeQueryPriceQuantity,
    'quantity': executeQueryPriceQuantity,
    'description' : executeQueryNameDescription,
}
// Объект для вызова соответсвующей функции с типом условия поиска
let objFinders = {
    'contains' : findByContains,
    'starts' : findByStarts,
    'ends': findByEnds,
    'operations': findByOperations,
}

/*   
  Input: String, Array
  Output: Array
  Return: Возвращает список Товаров resultArrayOfProducts, для которых выполняется входящее условие inputQuery
*/
function getResultQuery (inputQuery, inputArrayOfProducts) {
    //Разделим запрос, на подзапросы и представим в виде списка
    let arrayInputQuery = inputQuery.split('&');

    // Выполним копирование массива во избежание изменения оригинала
    let resultArrayOfProducts = inputArrayOfProducts.slice();

    // Для каждого подзапроса вызовем соответсвующую функцию поиска из objQueres
    arrayInputQuery.forEach(element => {
        // Выделим из каждого подзапроса тип подзапроса (name, price и т.д.)
        let typeOfQuery = element.split('-')[0];
        let query = objQueres[typeOfQuery];
        
        //Результирующий массив с учетом подзапроса
        resultArrayOfProducts = query(element, resultArrayOfProducts);
    });

    return resultArrayOfProducts
}

/*   
  Input: String (подзапрос), Array(массив Товаров для проверки)
  Output: Array
  Return: Возвращает список Товаров для которых выполняется входящее условие подзапроса для имени или описания
*/

function executeQueryNameDescription (inputPartOfQuery, resultArrayOfProducts) {
    // Разделим запрос, результат представим в виде списка [поле класса, условие]
    let arrayInputPartOfQuery = inputPartOfQuery.split('-');

    // Вызывает соответствующую функцию поиска из objFinders в зависимости от типа условия
    let finder = objFinders[arrayInputPartOfQuery[1]];
    return finder(arrayInputPartOfQuery[0], arrayInputPartOfQuery[2], resultArrayOfProducts);
}

/*   
  Input: String (подзапрос), Array(массив Товаров для проверки)
  Output: Array
  Return: Возвращает список Товаров для которых выполняется входящее условие подзапроса для цены или количества
*/
function executeQueryPriceQuantity (inputPartOfQuery, resultArrayOfProducts) {
    let mathSigns = ['>=', '<=', '>', '<', '='];
    let sign

    let arrayInputPartOfQuery = inputPartOfQuery.split('-');

    // Поиск оператора в подзапросе
    for (let item of mathSigns) {
        if (inputPartOfQuery.includes(item)) {
            sign = item;
            break;
        }
    }
    // Убираем знак оператора в подзапросе
    arrayInputPartOfQuery[1] = arrayInputPartOfQuery[1].slice(sign.length)
    let finder = objFinders['operations']

    // finder (поле объекта, по которому проводится поиск; числовое значение подзапроса; оператор; массив Товаров для проверки)
    return finder(arrayInputPartOfQuery[0], arrayInputPartOfQuery[1], sign, resultArrayOfProducts)
}

// Функции поиска с типами условия: сontains, starts, ends

/*   
  Input: String(поле класса), String(строка, входящая в условие), Array(массив Товаров для проверки)
  Output: Array
  Return: Возвращает список Товаров для которых выполняется входящее условие подзапроса для имени или описания
*/

function findByContains (typeOfQuery, inputStr, resultArrayOfProducts) {
    resultArrayOfProducts = resultArrayOfProducts.filter(item => item[typeOfQuery].toLowerCase().includes(inputStr.toLowerCase()));
    return resultArrayOfProducts;
}

function findByStarts (typeOfQuery, inputStr, resultArrayOfProducts) {
    resultArrayOfProducts = resultArrayOfProducts.filter(item => item[typeOfQuery].toLowerCase().startsWith(inputStr.toLowerCase()));
    return resultArrayOfProducts;
}

function findByEnds (typeOfQuery, inputStr, resultArrayOfProducts) {
    resultArrayOfProducts = resultArrayOfProducts.filter(item => item[typeOfQuery].toLowerCase().endsWith(inputStr.toLowerCase()));
    return resultArrayOfProducts;
}

// Функции поиска с операторами: '>=', '<=', '>', '<', '='

/*   
  Input: String(поле класса), String(числовое значение подзапроса), String(оператор), Array(массив Товаров для проверки)
  Output: Array
  Return: Возвращает список Товаров для которых выполняется входящее условие подзапроса для цены или количества
*/

function findByOperations (typeOfQuery, value, sign, resultArrayOfProducts) {
    resultArrayOfProducts = resultArrayOfProducts.filter(item => doMath(item[typeOfQuery], value, sign));

    // Безопасная функция для выполнения сравнения с оператором sign между числовым значением поля класса item и числовым значением подзапроса value
    function doMath(item, value, sign) {
        let result;
        switch (sign) {
            case '=':
                result = item == value;
                break;
            case '>':
                result = item > value;
                break;
            case '<':
                result = item < value;
                break;
            case '>=':
                result = item >= value;
                break;
            case '<=':
                result = item <= value;
                break;
        }
        return result;
    }
    return resultArrayOfProducts;
}

console.log(getResultQuery("name-contains-fd&price-=2&quantity->5&description-ends-abc", arrayOfProducts))