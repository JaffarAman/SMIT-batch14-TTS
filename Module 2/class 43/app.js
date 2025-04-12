var parent = document.getElementById("parent");

function createh1() {
  var message = document.getElementById("message");
  console.log("message", message.value);

  if (!message.value) {
    alert("message required");
    return;
  }

  var h1Element = document.createElement("h1");
  h1Element.innerHTML = message.value;

  console.log("h1Element", h1Element);
  parent.appendChild(h1Element);

  message.value = "";
  //   parent.innerHTML = h1Element
}

// 0
// null
// undefined
// ""
// NaN
// false

// var str = ""

// // if(str == "" || str == 0 || str == false ){
// //   console.log("false value")
// // }

// if(!str){

// }

var listParent = document.getElementById("listParent");

function createNote() {
  var input = document.getElementById("input");
  console.log("createNote", input.value);
  if (!input.value) {
    alert("input field are required!");
    return;
  }

  // create li element
  var liElement = document.createElement("li");
  liElement.innerHTML = input.value;

  // create edit btn
  var editbtn = document.createElement("button");
  editbtn.innerHTML = "EDIT";

  // create delete btn
  var deletebtn = document.createElement("button");
  deletebtn.innerHTML = "Delete";

  liElement.append(editbtn);
  liElement.append(deletebtn);

  console.log("liElement", liElement);

  listParent.append(liElement);
}
