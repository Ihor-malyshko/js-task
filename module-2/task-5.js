const checkForSpam = function (message) {
  // твой код
  let str = message.toLowerCase();
  if (str.includes("spam") || str.includes("sale")) {
    return true;
  } else {
    return false;
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best Sale offers now!")); // true

console.log(checkForSpam("[SpAM] How to earn fast money?")); // true
