// ///////////////////////////////////////////////////////
// // task 1
// ///////////////////////////////////////////////////////

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
let arrKeys = Object.keys(user);

for (const iterator of arrKeys) {
  console.log(`${iterator}: ${user[iterator]}`);
}

// ///////////////////////////////////////////////////////
// // task 2
// ///////////////////////////////////////////////////////

const countProps = function (obj) {
  // твой код
  return Object.keys(obj).length;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countProps({})); // 0

console.log(countProps({ name: "Mango", age: 2 })); // 2

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3

// ///////////////////////////////////////////////////////
// // task 3
// ///////////////////////////////////////////////////////

const findBestEmployee = function (employees) {
  // твой код
  let max = 0;
  let answer = "";
  for (const key in employees) {
    if (employees[key] >= max) {
      max = employees[key];
      answer = key;
    }
  }
  return answer;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux

// ///////////////////////////////////////////////////////
// // task 4
// ///////////////////////////////////////////////////////

const countTotalSalary = function (employees) {
  // твой код
  let sum = 0;
  for (const key in employees) {
    if (employees.hasOwnProperty(key)) {
      sum += employees[key];
    }
  }
  return sum;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400

// ///////////////////////////////////////////////////////
// // task 5
// ///////////////////////////////////////////////////////

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  // твой код
  let answer = [];
  for (const iterator of arr) {
    for (const key in iterator) {
      if (key === prop) {
        answer.push(iterator[key]);
      }
    }
  }
  return answer;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

console.log(getAllPropValues(products, "category")); // []

// ///////////////////////////////////////////////////////
// // task 6
// ///////////////////////////////////////////////////////

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
  // твой код
  let sum = 0;
  for (const prodcut of allProdcuts) {
    if (prodcut.name === productName) {
      sum = prodcut.price * prodcut.quantity;
    }
  }
  return sum;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(calculateTotalPrice(products, "Радар")); // 5200

console.log(calculateTotalPrice(products, "Дроид")); // 2800

// ///////////////////////////////////////////////////////
// // task 7
// ///////////////////////////////////////////////////////

// Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 40,

  // История транзакций
  transactions: [
    { id: 1, type: "deposit", amount: 30 },
    { id: 2, type: "deposit", amount: 40 },
    { id: 3, type: "withdraw", amount: 10 },
    { id: 4, type: "withdraw", amount: 20 },
  ],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    // console.log(this.transactions[this.transactions.length - 1]);
    this.transactions.push({
      id: this.transactions.length + 1,
      type: type,
      amount: amount,
    });
    console.log(this.transactions[this.transactions.length - 1]);
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    this.createTransaction(amount, "deposit");
    return true;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      this.createTransaction(amount, "withdraw");
      return true;
    }
    return false;
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const iterator of this.transactions) {
      if (iterator.id === id) {
        return iterator;
      }
    }
    return "id not have";
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let sum = 0;
    for (const transaction of this.transactions) {
      // console.log(transaction);
      if (transaction.type == type) {
        sum += transaction.amount;
      }
    }
    return `сумма средств по транзакциям ${type}: ${sum}`;
  },
};

// console.log(account.getBalance());
// console.log(account.getTransactionDetails(3));
// console.log(account.getTransactionDetails(100));
// console.log(account.getTransactionTotal("deposit"));
// console.log(account.getTransactionTotal("withdraw"));

// account.createTransaction(10, "deposit");

console.log(account.getBalance());
account.deposit(10);
console.log(account.getBalance());
account.withdraw(20);
console.log(account.getBalance());
account.withdraw(200);
console.log(account.getBalance());

console.log(account.getTransactionTotal("withdraw"));
console.log(account.getTransactionTotal("deposit"));

for (let i = 1; i <= account.transactions.length; i++) {
  console.log(account.getTransactionDetails(i));
}
account.withdraw(200);
