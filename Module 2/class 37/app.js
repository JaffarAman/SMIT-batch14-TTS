// var h1 = document.getElementById("h1");
// console.log(h1);

// var isCheck = h1.hasAttribute("class");
// var attrValue = h1.getAttribute("class");
// console.log("attrValue", attrValue);
// console.log("isCheck", isCheck);

// has
// get
// set
// h1.setAttribute(attrname , attrValue)
// h1.setAttribute("class", "newH1Heading");

// parent
var parent = document.getElementById("parent");
console.log("parent", parent.nodeName);
var h1Element = document.createElement("h1");
h1Element.innerHTML = "HELLO DOM";
console.log(h1Element, "h1Element");

h1Element.setAttribute("onclick", "foo()");
h1Element.style.color = "red";
h1Element.style.fontSize = "40px";

var h1Saylani = document.createElement("h1");
h1Saylani.innerHTML = "HELLO SAYLANI";
console.log("h1Saylani", h1Saylani);

parent.appendChild(h1Saylani);
parent.appendChild(h1Element);

function foo() {
  console.log("foo");
}
