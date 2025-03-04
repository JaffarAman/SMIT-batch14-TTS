function inputFocus(input) {
  //   console.log("inputFocus", input);
  input.style.backgroundColor = "grey";
}

function inputBlur(input) {
  console.log("inputBlur()", input.value.length);
  //   input.style.backgroundColor = "white";
  //   input.style.border = "1px solid black";

  if (input.value.length >= 3) {
    input.style.backgroundColor = "green";
  } else {
    input.style.backgroundColor = "red";
  }
}

function paraHandler() {
  //   console.log("paraHandler()");
  var para = document.getElementById("para");
  //   console.log("para", para);
  para.className += " bigText";
}
