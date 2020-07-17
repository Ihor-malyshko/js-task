// -1 
const findLongestWord = function(string) {
  // твой код
  let max = -1;
  let indexMax = -1;
  let array = string.split(' ');
  for (let i = 0; i < array.length; i++) {
    if (max < array[i].length) {
      max = array[i].length;
      indexMax = i;
    }
  }
  return array[indexMax];
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
