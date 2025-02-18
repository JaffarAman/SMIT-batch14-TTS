function foo() {
  console.log("foo");
}

function mouseEnter() {
  console.log("mouseEnter");
}

function mouseOut() {
  console.log("mouseOut");
}

var longText =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio temporibus odio architecto mollitia? Assumenda libero vitae aliquam optio, tempore voluptas incidunt? Non doloremque facere dolorum, nesciunt incidunt esse animi. Repellat!";

var shortText = "Lorem ipsum dolor sit amet.";

function seeMore() {
  var paraElement = document.getElementById("paraElement");
  // console.log("seeMore", paraElement.innerHTML);
  paraElement.innerHTML = longText;
}

function seeLess() {
  var paraElement = document.getElementById("paraElement");
  // console.log("seeLess", paraElement);
  paraElement.innerHTML = shortText;
}

function bigImage() {
  var carImage = document.getElementById("carImage");
  console.log("bigImage()", carImage);
  carImage.width = "600";
  carImage.height = "400";
}
