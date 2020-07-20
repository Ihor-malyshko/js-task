const max = function () {
  console.log(Math.max(...arguments));

  let max = 0;
  for (let el of [...arguments]) {
    el > max ? (max = el) : "";
  }
  console.log(max);
};

max(1, 2, 3, 4, 5, 6, 7, 8);
