/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
let logItems1 = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];

let logItems2 = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

const logItems = function (array) {
  // твой код
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(`${i + 1} - ${array[i]}`);
  }
};

logItems(logItems1);

logItems(logItems2);
