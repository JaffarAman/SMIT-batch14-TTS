// function add(num1 = 0, num2 = 0) {
//   console.log("num1", num1);
//   console.log("nu2", num2);
//   console.log("add", num1 + num2);
// }

// add(100, 200);

// function add(num1 = 0, num2 = 0) {
//   var a = num1 + num2

// }

// var result = add(300, 200);

// console.log(result, "result");

// Local vs global scope
// var userName = "jaffar";

// var => function scope variable

// function foo() {
//   var userName = "jaffar";
// }

// foo();

// console.log("userName", userName);

// var userName = "jaffar";

// function foo() {
//   var userName = "Jaffar Aman";
// }
// console.log(userName, "userName");

// foo();

function foo() {
  var username = document.getElementById("username");

  console.log("username", username.value);
}

function setInputValue() {
  var username = document.getElementById("username");

  username.value = "SMIT";
}

function changeImg(imgEle, key) {
  // console.log("changeImg", key);
  // if (key == "in") {
  //   imgEle.src =
  //     "https://cdn.pixabay.com/photo/2012/04/12/23/47/car-30984_1280.png";
  //   imgEle.style.border = "1px solid red";
  // } else {
  //   imgEle.src =
  //     "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mikebirdy-170811.jpg&fm=jpg";
  //   imgEle.style.border = "none";
  // }
  // imgEle.className += " car1";

  // imgEle.classList.add("car");
  imgEle.classList.remove("bike");
}

// foo();
