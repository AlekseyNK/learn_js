let map = new Map();

map.set("name", "John");

//let keys = map.keys(); //итерируемый объект, поэтому ошибка

let keys = Array.from(map.keys()); // массив

keys.push("more");
alert(keys);