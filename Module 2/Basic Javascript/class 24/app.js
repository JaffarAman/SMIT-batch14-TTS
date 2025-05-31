// function foo() {
//   alert("Hello World");
// }
// var a;

// a = "JAFFAR"

// foo()

// prompt()
// console.log("HELLO WORLD");

// function getInputValue() {
//   var inputField = document.getElementById("userName");
//   // console.log("inputField", inputField);
//   // console.log(inputField.value, "input value");
// }

function login() {
  // console.log("login()");

  var emailAddress = document.getElementById("emailAddress");
  var password = document.getElementById("password");
  console.log("email", emailAddress.value);
  // console.log("password", password.value);

  console.log("password", password.placeholder);
}
var a = 10;
function setValues() {
  // console.log("setValues");
  var firstName = document.getElementById("firstName");
  var lastName = document.getElementById("lastName");
  // console.log("firstName" , firstName)
  // console.log("lastName" , lastName)
  // console.log(a)
  // console.log(firstName.value)
  // a = 20
  firstName.value = "JAFFAR";
  lastName.value = "AMAN"
}
