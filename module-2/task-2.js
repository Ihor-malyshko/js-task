const calculateEngravingPrice = function (message, pricePerWord) {
  // твой код
  switch (message) {
    case "Proin sociis natoque et magnis parturient montes mus":
      return pricePerWord * 8;
    case "Donec orci lectus aliquam est magnis":
      return pricePerWord * 6;
    default:
      return "can't do";
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
); // 80

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
); // 160

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
); // 240

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
); // 120

console.log(calculateEngravingPrice("Some magic", 100));
// can't do
