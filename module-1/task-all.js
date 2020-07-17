// ///////////////////////////////////////////////////////
// // task 1
// ///////////////////////////////////////////////////////

// console.log("task-2");
// let name = "Генератор защитного поля";
// let price = 1000;
// console.log("Выбран «%s», цена за штуку %d кредитов", name, price);
// price = 2000;
// console.log("Выбран «%s», цена за штуку %d кредитов", name, price);

// ///////////////////////////////////////////////////////
// // task 2
// ///////////////////////////////////////////////////////

// console.log("task-2");
// let total = 100;
// let ordered = 20;
// let i;
// for (i = 0; i < 3; i++) {
//   if (ordered <= total) {
//     console.log(
//       "Заказ оформлен, вы заказали %d, с вами свяжется менеджер",
//       ordered
//     );
//   } else {
//     console.log("На складе недостаточно твоаров!");
//   }
//   ordered += 50;
// }

// ///////////////////////////////////////////////////////
// // task 3
// ///////////////////////////////////////////////////////

// console.log("task-3");
// const ADMIN_PASSWORD = "qwe";
// let password = prompt("введи пароль  *пароль=qwe", "");
// let message;
// if (password === null) {
//   message = "Отменено пользователем!";
// } else if (password === ADMIN_PASSWORD) {
//   message = "Добро пожаловать!";
// } else {
//   message = "Доступ запрещен, неверный пароль!";
// }

// alert(message);

// ///////////////////////////////////////////////////////
// // task 4
// ///////////////////////////////////////////////////////

// console.log("task-4");
// let credits = 7000;
// let pricePerDroid = 3000;
// let totalPrice = 0;
// let message;
// let numberDroid = prompt("Сколько дроидов вы хотите купить?", "1");
// if (numberDroid === null) {
//   message = "cancel";
// } else {
//   totalPrice = numberDroid * pricePerDroid;
//   if (totalPrice <= credits) {
//     credits -= totalPrice;
//     message = `Вы купили ${numberDroid} дроидов, на счету осталось ${credits} кредитов.`;
//   } else {
//     message = "Недостаточно средств на счету!";
//   }
// }
// alert(message);

// ///////////////////////////////////////////////////////
// // task 5
// ///////////////////////////////////////////////////////

// console.log("task-5");
// let priceCost = 0;
// let message;
// let point = prompt("введи куда").toLowerCase();
// if (point === null) {
//   message = "cancel";
//   alert(message);
// } else {
//   switch (point) {
//     case "китай":
//       priceCost = 100;
//       break;
//     case "чили":
//       priceCost = 250;
//       break;
//     case "австралия":
//       priceCost = 170;
//       break;
//     case "индия":
//       priceCost = 80;
//       break;
//     case "ямайка":
//       priceCost = 120;
//       break;
//     default:
//       message = "В вашей стране доставка не доступна";
//   }
//   if (priceCost > 0) {
//     alert(`Доставка в ${point} будет стоить ${priceCost} кредитов`);
//   } else {
//     alert(message);
//   }
// }

// ///////////////////////////////////////////////////////
// // task 6
// ///////////////////////////////////////////////////////

// console.log("task-6");
// let total = 0;
// let input;
// while ((input = prompt("введи число", "0")) !== null) {
//   total += parseInt(input, 10);
//   console.log(`сумма = ${total}`);
// }
// alert(`Общая сумма чисел равна ${total}`);
