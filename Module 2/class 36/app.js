// var parent = document.getElementById("parent");
// // console.log("parent", parent.childNodes);
// // console.log("parent", parent.children);
// // console.log("firstChild", parent.firstChild);
// // console.log("firstChild", parent.firstElementChild);
// // console.log("lastChild", parent.lastElementChild);

// var child1 = parent.firstElementChild;
// console.log("child1", child1.nextElementSibling.nextElementSibling.parentNode);

var btn = document.getElementById("btn");
// old way
// btn.onclick = foo;

// new way
// btn.setAttribute("onclick", "foo()");
// btn.setAttribute("class", "myClass");

function foo() {
  //   console.log("HELLO WORLD!");
  //   var check = btn.hasAttribute("class");
  //   console.log("check", check);
  //   var checkValue = btn.getAttribute("class");
  //   console.log("checkValue", checkValue);
  // console.log(btn.attributes)
}

// create a h1 element

var parent = document.getElementById("parent");

var h1Element = document.createElement("h1");
h1Element.innerHTML = "HELLO SAYLANI";

parent.appendChild(h1Element);

console.log("h1Element", h1Element);
