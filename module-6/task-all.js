// import users from "./users.js";

// // ///////////////////////////////////////////////////////
// // // task 1
// // ///////////////////////////////////////////////////////

// const getUserNames = (users) => {
//   // твой код
//   return users.map((user) => user.name);
// };

// console.log(getUserNames(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// // ///////////////////////////////////////////////////////
// // // task 2
// // ///////////////////////////////////////////////////////

// const getUsersWithEyeColor = (users, color) => {
//   // твой код
//   return users.filter((user) => user.eyeColor === color);
// };

// console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// // ///////////////////////////////////////////////////////
// // // task 3
// // ///////////////////////////////////////////////////////

// const getUsersWithGender = (users, gender) => {
//   // твой код
//   return users
//     .filter((user) => user.gender === gender)
//     .map((user) => user.name);
// };

// console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// // ///////////////////////////////////////////////////////
// // // task 4
// // ///////////////////////////////////////////////////////

// const getInactiveUsers = (users) => {
//   // твой код
//   return users.filter((user) => user.isActive == false);
// };

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// // ///////////////////////////////////////////////////////
// // // task 5
// // ///////////////////////////////////////////////////////

// const getUserWithEmail = (users, email) => {
//   // твой код
//   return users.find((user) => user.email === email);
// };

// console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

// // ///////////////////////////////////////////////////////
// // // task 6
// // ///////////////////////////////////////////////////////

// const getUsersWithAge = (users, min, max) => {
//   // твой код
//   return users.filter((user) => min <= user.age && user.age <= max);
// };

// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// // ///////////////////////////////////////////////////////
// // // task 7
// // ///////////////////////////////////////////////////////

// const calculateTotalBalance = (users) => {
//   // твой код
//   return users.reduce((value, user) => value + user.balance, 0);
// };

// console.log(calculateTotalBalance(users)); // 20916

// // ///////////////////////////////////////////////////////
// // // task 8
// // ///////////////////////////////////////////////////////

// const getUsersWithFriend = (users, friendName) => {
//   // твой код
//   return users
//     .map((user) =>
//       user.friends.some((friend) => friend === friendName) ? user.name : " "
//     )
//     .filter((name) => name !== " ");
// };

// console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

// // ///////////////////////////////////////////////////////
// // // task 9
// // ///////////////////////////////////////////////////////

// const getNamesSortedByFriendsCount = (users) => {
//   // твой код
//   return users.sort((a, b) => a.friends.length - b.friends.length);
// };

// console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// // ///////////////////////////////////////////////////////
// // // task 10
// // ///////////////////////////////////////////////////////

// const getSortedUniqueSkills = (users) => {
//   // твой код
//   return users
//     .reduce((allSkills, user) => {
//       allSkills.push(...user.skills);
//       return allSkills;
//     }, [])
//     .sort()
//     .filter((skills, index, arr) => arr.indexOf(skills) == index);
// };

// console.log(getSortedUniqueSkills(users));
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
