// ///////////////////////////////////////////////////////
// // task 1
// ///////////////////////////////////////////////////////

const Account = function (login, email) {
  this.login = login;
  this.email = email;
};

Account.prototype.getInfo = function () {
  console.log(`Login: ${this.login}, Email: ${this.email}`);
};

console.log(Account.prototype.getInfo); // function

const mango = new Account("Mangozedog", "mango@dog.woof");

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account("Poly", "poly@mail.com");

poly.getInfo(); // Login: Poly, Email: poly@mail.com

// ///////////////////////////////////////////////////////
// // task 2
// ///////////////////////////////////////////////////////

const User = function (name, age, followers) {
  this.name = name;
  this.age = age;
  this.followers = followers;
};

User.prototype.getInfo = function () {
  console.log(
    `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
  );
};

const mango = new User("Mango", 2, 20);

mango.getInfo(); // User Mango is 2 years old and has 20 followers

const poly = new User("Poly", 3, 17);

poly.getInfo(); // User Poly is 3 years old and has 17 followers

// ///////////////////////////////////////////////////////
// // task 3
// ///////////////////////////////////////////////////////

class Storage {
  constructor(arr) {
    this.items = arr;
  }
  getItems() {
    return this.items;
  }
  addItem(...arr) {
    this.items.push(...arr);
  }
  removeItem(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);
console.table(storage);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem("Дроид", "1", "2");
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem("Пролонгер");
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem("1");
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

// ///////////////////////////////////////////////////////
// // task 4
// ///////////////////////////////////////////////////////

// ///////////////////////////////////////////////////////
// // task 5
// ///////////////////////////////////////////////////////

// ///////////////////////////////////////////////////////
// // task 6
// ///////////////////////////////////////////////////////
