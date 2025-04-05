// console.log(1)
// console.log(2)
// console.log(3)

// alert("HELLO WORLD");

// primitive data types
// Data types
// String ==> 'A1@' =>
// Number ==> 4541352
// Boolean ==> true/false
// null =>
// undefined

// non primitive data types
// Array =>
// Object
// function =>

// firstName = "AMAN";
// firstName = firstName + "Aman";

// var userName = "Jaffar";

// // userName = userName + "Aman";
// userName += "Aman";
// console.log("userName", userName);

// var userName;
// console.log("userName", userName);

// "Jaffar" + "Aman"
// 10 + "20"

// +-*/%

// if ==> condition true
// else

// =
// ==
// ===

// var age = 20;
// if (age == 18) {
//   alert("ALLOW");
// } else {
//   alert("NOT ALLOW");
// }

// else if()

// var age = 25;
// if (age == 20) {
//   console.log("legend");
// } else if (age == 25) {
//   console.log("legend PRO");
// } else if (age == 30) {
//   console.log("legend PRO MAX");
// } else {
//   console.log("tm ghr jao!");
// }

// OR == > true || false ==> true
// AND ==> true && false ==> false
// AND ==> true && true ==> true

// var age = 30;
// if (age == 20 || age == 25 || age == 30) {
//   console.log("legend+");
// } else {
//   console.log("kuch b");
// }

// 18 > 18 ==> false
// 18 >= 18 ==> true
// 18 < 18 ==> false
// 18<=18 true

var email = "admin1@example.com";
var pass = "admin12345";

// if (email === "admin@example.com" && pass === "admin123") {
//   console.log("LOGIn");
// } else {
//   console.log("invalid email or password!");
// }

if (email === "admin@example.com") {
  if (pass == "admin123") {
    console.log("LOGIN");
  } else {
    console.log("invalid password");
  }
} else {
  console.log("INVALD EMAIl");
}

var htmlQuiz = false;
var cssQuiz = true;
var jsQuiz = true;

// if (htmlQuiz == true && cssQuiz == true && jsQuiz == true) {
//   console.log("passed");
// } else {
//   console.log("failed");
// }

if (htmlQuiz === true) {
  if (cssQuiz) {
    if (jsQuiz) {
      console.log("PASSED");
    } else {
      console.log("JS QUIZ FAIL");
    }
  } else {
    console.log("CSS QUIZ FAIL");
  }
} else {
  console.log("HTML QUIZ FAIL");
}
