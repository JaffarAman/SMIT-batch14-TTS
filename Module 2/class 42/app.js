// console.log(document.childNodes[1].children[1].children[0]);

// var h1 = document.childNodes[1].children[1].children[0];

// console.log((h1.style.color = "red"));

// var pappaG = document.getElementById("pappaG");
// console.log(pappaG.children.length);
// console.log(pappaG.firstElementChild);
// console.log(pappaG.lastElementChild);
// var child1 = pappaG.firstElementChild;
// // console.log("child1", child1.nextElementSibling.nextElementSibling);
// var child3 = pappaG.lastElementChild;
// // console.log("child3", child3.previousElementSibling);
// // console.log("child3" , child3.nextElementSibling)

// console.log(child3.parentNode);

// var pappaG = document.getElementById("pappaG");
// // pappaG.className = "helloWorld";
// // console.log(pappaG.hasAttribute("id"));
// // console.log(pappaG.getAttribute("id"));
// console.log(pappaG.hasAttribute("class"));
// console.log(pappaG.setAttribute("class", "helloworld"));

// console.log(pappaG.attributes)

// var h1Element = document.createElement("h1");
// var h1Text = document.createTextNode("HELLO DOM");
// h1Element.appendChild(h1Text);
// console.log("h1Element", h1Element);

// console.log("h1Text", h1Text);

var parent = document.getElementById("parent");
var h1Element = document.createElement("h1");
h1Element.innerHTML = "HELLO DOM";

parent.appendChild(h1Element);
console.log(h1Element);
