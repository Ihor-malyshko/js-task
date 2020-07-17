// ///////////////////////////////////////////////////////
// // task 1
// ///////////////////////////////////////////////////////
// let logItems1 = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];

// let logItems2 = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

// const logItems = function (array) {
//   // твой код
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// };

// logItems(logItems1);

// logItems(logItems2);

// ///////////////////////////////////////////////////////
// // task 2
// ///////////////////////////////////////////////////////
// const calculateEngravingPrice = function (message, pricePerWord) {
//   // твой код
//   switch (message) {
//     case "Proin sociis natoque et magnis parturient montes mus":
//       return pricePerWord * 8;
//     case "Donec orci lectus aliquam est magnis":
//       return pricePerWord * 6;
//     default:
//       return "can't do";
//   }
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     10
//   )
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     20
//   )
// ); // 160

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
// ); // 240

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
// ); // 120

// console.log(calculateEngravingPrice("Some magic", 100));
// // can't do

// ///////////////////////////////////////////////////////
// // task 3
// ///////////////////////////////////////////////////////

// // -1
// const findLongestWord = function (string) {
//   // твой код
//   let max = -1;
//   let indexMax = -1;
//   let array = string.split(" ");
//   for (let i = 0; i < array.length; i++) {
//     if (max < array[i].length) {
//       max = array[i].length;
//       indexMax = i;
//     }
//   }
//   return array[indexMax];
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

// console.log(findLongestWord("Google do a roll")); // 'Google'

// console.log(findLongestWord("May the force be with you")); // 'force'

// ///////////////////////////////////////////////////////
// // task 4
// ///////////////////////////////////////////////////////
// //string строка
// //quantity до какого симвала обрезать строку
// const formatString = function (string, quantity = 40) {
//   // твой код
//   // return string.padEnd(43, "...");
//   if (string.length > quantity) {
//     return string.slice(0, quantity).padEnd(quantity + 3, "...");
//   }
//   return string;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// // вернется оригинальная строка

// console.log(
//   formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 10)
// );
// // вернется форматированная строка

// console.log(formatString("Curabitur ligula sapien.", 5));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
//   )
// );
// // вернется форматированная строка

// ///////////////////////////////////////////////////////
// // task 5
// ///////////////////////////////////////////////////////
// const checkForSpam = function (message) {
//   // твой код
//   let str = message.toLowerCase();
//   if (str.includes("spam") || str.includes("sale")) {
//     return true;
//   } else {
//     return false;
//   }
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(checkForSpam("Latest technology news")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best Sale offers now!")); // true

// console.log(checkForSpam("[SpAM] How to earn fast money?")); // true

// ///////////////////////////////////////////////////////
// // task 6
// ///////////////////////////////////////////////////////
// let numbers = [];
// let input;

// while (input !== null) {
//   input = prompt("введи число", "0");
//   if (input === null) {
//     break;
//   }
//   if (!isNaN(Number(input))) {
//     numbers[numbers.length] = Number(input);
//     console.log(numbers);
//   } else {
//     alert("not a number, try again");
//   }
// }

// //todo прочитать про стрелочные функции, про "reduce", про прототипы
// let result = numbers.reduce((sum, current) => sum + current, 0);
// alert(result);

// ///////////////////////////////////////////////////////
// // task 7
// ///////////////////////////////////////////////////////

// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// const isLoginValid = function (login) {
//   // твой код
//   return 3 < login.length && login.length <= 16 ? true : false;
// };

// const isLoginUnique = function (allLogins, login) {
//   // твой код
//   for (let i = 0; i < allLogins.length; i++) {
//     if (login === allLogins[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const addLogin = function (allLogins, login) {
//   // твой код
//   if (!isLoginValid(login)) {
//     return "Ошибка! Логин должен быть от 4 до 16 символов";
//   }
//   if (!isLoginUnique(allLogins, login)) {
//     return "Такой логин уже используется!";
//   }
//   allLogins[allLogins.length] = login;
//   return "Логин успешно добавлен!";
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
// console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
// console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
