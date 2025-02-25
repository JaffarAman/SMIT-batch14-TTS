function greet() {
  alert("Hello User!");
}
// greet()

function getInputValue() {
  var userName = document.getElementById("userName");
  console.log("userName", userName.value);
}

function setInputValue() {
  var userName = document.getElementById("userName");
  console.log("userName", userName);
  userName.value = "Hello World!";
}

function getParaValue() {
  // console.log("get para")
  var para = document.getElementById("para");
  console.log("para", para.innerHTML);
}

function setParaValue() {
  console.log("set para");
  var para = document.getElementById("para");
  para.innerHTML = "HELLO WORLD!";
}

function changImage() {
  //   console.log("changImage");
  var img = document.getElementById("img");
  //   console.log("img", img.src);
  img.src = "./images/car2.jpg";
  img.width = "600";
  img.height = "500";
}

function mouseOutImage() {
  var img = document.getElementById("img");
  img.src = "./images/car1.jpg";
  img.width = "400";
  img.height = "300";
}

function bulbOn() {
  //   console.log("bulbOn");
  var bulbImg = document.getElementById("bulbImg");
  bulbImg.src = "./images/bulbOn.jpg";
}

function bulbOff() {
  console.log("bulbOff");
  var bulbImg = document.getElementById("bulbImg");
  bulbImg.src = "./images/bulbOff.jpg";
}

function onSubmit() {
  var name = document.getElementById("name");
  console.log("name", name.value.length);

  if (name.value.length >= 3) {
    console.log("GREEN");
    name.style.backgroundColor = "green";
  } else {
    name.style.backgroundColor = "red";
    console.log("RED");
  }
}
