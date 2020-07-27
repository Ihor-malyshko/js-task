// // ///////////////////////////////////////////////////////
// // // task 1
// // ///////////////////////////////////////////////////////

// const Account = function (obj) {
//   this.login = obj.login;
//   this.email = obj.email;
// };

// Account.prototype.getInfo = function () {
//   console.log(`Login: ${this.login}, Email: ${this.email}`);
// };

// console.log(Account.prototype.getInfo); // function

// const mango = new Account({
//   login: "Mangozedog",
//   email: "mango@dog.woof",
// });

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: "Poly",
//   email: "poly@mail.com",
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com

// // ///////////////////////////////////////////////////////
// // // task 2
// // ///////////////////////////////////////////////////////

// const User = function (obj) {
//   this.name = obj.name;
//   this.age = obj.age;
//   this.followers = obj.followers;
// };

// User.prototype.getInfo = function () {
//   console.log(
//     `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
//   );
// };

// const mango = new User({
//   name: "Mango",
//   age: 2,
//   followers: 20,
// });

// mango.getInfo(); // User Mango is 2 years old and has 20 followers

// const poly = new User({
//   name: "Poly",
//   age: 3,
//   followers: 17,
// });

// poly.getInfo(); // User Poly is 3 years old and has 17 followers

// // ///////////////////////////////////////////////////////
// // // task 3
// // ///////////////////////////////////////////////////////

// class Storage {
//   constructor(arr) {
//     this.items = arr;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(arr) {
//     this.items.push(arr);
//   }
//   removeItem(item) {
//     this.items.splice(this.items.indexOf(item), 1);
//   }
// }

// const storage = new Storage([
//   "Нанитоиды",
//   "Пролонгер",
//   "Железные жупи",
//   "Антигравитатор",
// ]);
// console.table(storage);

// const items = storage.getItems();
// console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

// storage.addItem("Дроид");
// console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

// storage.removeItem("Пролонгер");
// console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

// // ///////////////////////////////////////////////////////
// // // task 4
// // ///////////////////////////////////////////////////////

// class StringBuilder {
//   constructor(value) {
//     this._value = value;
//   }
//   get value() {
//     return this._value;
//   }
//   set value(value) {
//     this._value = value;
//   }
//   append(str) {
//     this._value += str;
//     // this._value = this._value.split("").concat(str).join("");
//   }
//   prepend(str) {
//     this._value = str + this._value;
//     // this._value = str.concat(this._value);
//   }
//   pad(str) {
//     this._value = str + this._value + str;
//     // this._value = str.concat(this._value, str);
//   }
// }

// const builder = new StringBuilder(".");

// builder.append("^");
// console.log(builder.value); // '.^'

// builder.prepend("^");
// console.log(builder.value); // '^.^'

// builder.pad("=");
// console.log(builder.value); // '=^.^='

// // ///////////////////////////////////////////////////////
// // // task 5
// // ///////////////////////////////////////////////////////

// class Car {
//   /*
//    * Конструктор получает объект настроек.
//    *
//    * Добавь свойства будущеего экземпляра класса:
//    *  speed - текущая скорость, изначально 0
//    *  price - цена автомобиля
//    *  maxSpeed - максимальная скорость
//    *  isOn - заведен ли автомобиль, значения true или false. Изначально false
//    *  distance - общий киллометраж, изначально 0
//    */
//   constructor(maxSpeed = 0, price = 0, speed = 0, isOn = false, distance = 0) {
//     this.speed = speed;
//     this._price = price;
//     this.maxSpeed = maxSpeed;
//     this.isOn = isOn;
//     this.distance = distance;
//   }

//   /*
//    * Добавь геттер и сеттер для свойства price,
//    * который будет работать с свойством цены автомобиля.
//    */
//   get price() {
//     return this._price;
//   }

//   set price(value) {
//     if (!isNaN(value)) {
//       this._price = Number(value);
//     }
//   }

//   /*
//    * Добавь код для того чтобы завести автомобиль
//    * Записывает в свойство isOn значение true
//    */
//   turnOn() {
//     this.isOn = true;
//   }

//   /*
//    * Добавь код для того чтобы заглушить автомобиль
//    * Записывает в свойство isOn значение false,
//    * и сбрасывает текущую скорость в 0
//    */
//   turnOff() {
//     this.isOn = false;
//     this.speed = 0;
//   }

//   /*
//    * Добавялет к свойству speed полученное значение,
//    * при условии что результирующая скорость
//    * не больше чем значение свойства maxSpeed
//    */
//   accelerate(value) {
//     if (this.speed + value < this.maxSpeed) {
//       this.speed += value;
//     }
//   }

//   /*
//    * Отнимает от свойства speed полученное значение,
//    * при условии что результирующая скорость не меньше нуля
//    */
//   decelerate(value) {
//     if (this.speed - value > 0) {
//       this.speed -= value;
//     }
//   }

//   /*
//    * Добавляет в поле distance киллометраж (hours * speed),
//    * но только в том случае если машина заведена!
//    */
//   drive(hours) {
//     if (this.isOn) {
//       this.distance += this.speed * hours;
//     }
//   }

//   /*
//    * Добавь статический метод `getSpecs(car)`,
//    * который принимает объект-машину как параметр и выводит
//    * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
//    */
//   static getSpecs(obj) {
//     console.log(
//       `maxSpeed: ${obj.maxSpeed}, speed: ${obj.speed}, isOn: ${obj.isOn}, distance: ${obj.distance}, price: ${obj.price}`
//     );
//   }
// }

// const mustang = new Car(200, 2000);

// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000
