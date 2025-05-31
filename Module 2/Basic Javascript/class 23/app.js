// function greet() {
//   alert("HELLO WORLD");
// }

// greet()

// function getValue() {
//   //   console.log("getValue");

//   var inputElement = document.getElementById("userName");
//   console.log("inputElement", inputElement.value);
// }

function getInputValue() {
  //   console.log("getInputValue");
  //   var input = document.getElementById("userName");
  //   console.log("input", input.value);

  var userName = document.getElementById("userName");
  var password = document.getElementById("password");

  console.log("userNameInput", userNameInput.value);
  console.log("passwordInput", passwordInput.value);
}

function setValue() {
  //   console.log("setValue");
  var userName = document.getElementById("userName");
  var password = document.getElementById("password");
  password.value = "123456789";
  userName.value = "jaffaraman";
}

setValue();

document.write("HELLO 1 <br/> ");
document.write("HELLO 2" + "<br />");
document.write("HELLO 3");
