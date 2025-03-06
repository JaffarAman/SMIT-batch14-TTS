// console.log("HELLO WORLD..");

// attr
// class ==> className

// class

// function changePara() {
//   var para = document.getElementById("para");
//   //   console.log("changePara()", para.className);
//   //   para.className += " bigText";
//   //   console.log(para.classList);
//   //   para.classList.add("bigText");

//   para.classList.remove("bigText", "paraClass");
// }

// var heading = document.getElementsByClassName("heading");
// console.log("heading", heading);

// return [ element  , element , element ]
var headings = document.getElementsByClassName("heading");
// var headings = document.getElementsByTagName("h1");
// console.log("headings", headings[0].innerHTML);
// console.log("headings", headings[1].innerHTML);
// console.log("headings", headings[2].innerHTML);

for (var i = 0; i < headings.length; i++) {
  //   console.log(headings[i]);
  //   headings[i].style.backgroundColor = "black";
  //   headings[i].style.color = "white";
  if ((i + 1) % 2 == 0) {
    headings[i].style.backgroundColor = "black";
    headings[i].style.color = "white";
  }
}
