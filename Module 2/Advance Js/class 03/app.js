// Arrow functions

// function greet(){
//     console.log("hello user")
// }

// greet()

// const greet = (userName = "") => {
//   console.log("HELLO" + userName);
// };

// greet();

// function sum(num1, num2) {
//   return num1 + num2;
// }

// const result = sum(50, 100);

// console.log("result", result);

// const sum = (num1, num2) => num1 + num2;
// const result = sum(100, 200);

// console.log("result", result);

// const foo = _ => {
//   console.log("name");
// };

// foo("jaffar");

// this

// console.log(this)

// const std = {
//   firstName: "Jaffar",
//   lastName: "Aman",
//   getFullName: function () {
//     console.log("this keyword", this);
//   },
// };

// std.getFullName();

// const std2 = {
//   firstName: "Jaffar",
//   lastName: "Aman",
//   getFullName: () => {
//     console.log("this keyword Arrow", this);
//     return std2.firstName + std2.lastName;
//   },
// };

// std2.getFullName();

// normal function => this function k parent ko
// arrow function => this keyword hamesha window obj

// spread opt OR REST opt

// Spread opt  three dots(...)

// const obj1 = {
//   name: "Jaffar",
// };

// const obj2 = {
//   age: 24,
// };

// const obj3 = { ...obj1, ...obj2 };

// console.log(obj3);

// const arr1 = [1, 2, 3, 4, 5];

// const arr2 = [ 6, 7,, ...arr1, 8, 9, 10];
// console.log(arr2);

// let name = "Jaffar";
// let userName = name;
// userName = "JAFFAR AMAN";
// console.log("name", name);
// console.log("username", userName);

// // reference => 12345
// const obj1 = {
//   a: 10,
// };

// const obj2 = obj1; //12345
// obj2.b = 20;

// obj2.a = 30;

// console.log("obj1", obj1);
// console.log("obj2", obj2);

// reference => 12345
// const obj1 = {
//   a: 10,
// };

// const obj2 = { ...obj1 }; //12345
// obj2.b = 20;

// obj2.a = 30;

// console.log("obj1", obj1);
// console.log("obj2", obj2);

// const obj1 = {
//   a: 10,
//   nestedObj: {
//     b: 100,
//   },
// };

// const obj2 = { ...obj1 };
// const obj2 = JSON.parse(JSON.stringify(obj1));

// obj1.a = 100;

// obj1.nestedObj.b = 500;

// console.log(obj2, "obj2");

// const foo = (num1, num2, ...num1) => {
//   console.log(num1, num2, rest);
// };

// foo(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// fetch

// https://fakestoreapi.com/products/

fetch("https://fakestoreapi.com/products/")
  .then((res) => {
    return res.json();
  })

  // success
  .then((result) => {
    console.log("result", result);
  })
  // error
  .catch((error) => {
    console.log("error", error);
  });
