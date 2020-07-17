//string строка
//quantity до какого симвала обрезать строку
const formatString = function (string, quantity = 40) {
  // твой код
  // return string.padEnd(43, "...");
  if (string.length > quantity) {
    return string.slice(0, quantity).padEnd(quantity + 3, "...");
  }
  return string;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(
  formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 10)
);
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien.", 5));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// вернется форматированная строка
