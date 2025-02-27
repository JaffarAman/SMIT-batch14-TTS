// function changeImg(kuchB) {
//   console.log("kuchB", kuchB);
//   // var image = document.getElementById("img");
//   // console.log("changeImg", image);
// }

// function foo(btn) {
//   console.log("btn", btn);
// }

function handleImg(ele, event) {
  console.log("handleImg", ele, event);
  // ele.src = "./images/car2.jpg";
  if (event === "over") {
    ele.src = "./images/car2.jpg";
  } else {
    ele.src = "./images/car1.jpg";
  }
}

function bulbHandler(btnElement) {
  // console.log("bulbImg", bulbImg, btnElement);
  // bulbImg.src = "./images/bulbOn.jpg";
  // btnElement.innerHTML = "OFF"

  console.log(btnElement.innerHTML, "btn text");
  var bulbImg = document.getElementById("bulbImg");
  if (btnElement.innerHTML == "ON") {
    bulbImg.src = "./images/bulbOn.jpg";
    btnElement.innerHTML = "OFF";
  } else {
    //OFF IMAGE
    bulbImg.src = "./images/bulbOff.jpg";
    btnElement.innerHTML = "ON";
  }
}

function handleStyling(btnEle) {
  console.log("btnEle", btnEle);
  btnEle.style.backgroundColor = "black";
  btnEle.style.color = "white";
  btnEle.style.border = "2px solid red";
  // btnEle.style.cssFloat = "2px solid red";
}
