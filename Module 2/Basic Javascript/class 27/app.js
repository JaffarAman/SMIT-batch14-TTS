// function greet(userName) {
//   alert("HELLO " + userName);
// }

// greet("JAFFAR AMAN")

function getValue(number) {
  console.log("getValue", number);
  var input = document.getElementById("input");
  input.value += number;
}

function equalTo() {
  var input = document.getElementById("input");
  // console.log("input", input.value);
  var result = eval(input.value);
  console.log("result", result);
  input.value = result;
}

function allClear() {
  var input = document.getElementById("input");
  // console.log(input.value);
  input.value = "";
}

function clearValue() {
  var input = document.getElementById("input");

  // console.log("clearValue", input.value);
  // console.log("clearValue", input.value.slice(0, -1));
  var editValue = input.value.slice(0, -1);
  input.value = editValue;
}
