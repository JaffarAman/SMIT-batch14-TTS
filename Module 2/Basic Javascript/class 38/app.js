var parent = document.getElementById("parent");

function getTodoValue() {
  var input = document.getElementById("input");
  console.log("getTodoValue()", input.value);

  //create list using createElement
  var liElement = document.createElement("li");
  liElement.innerHTML = input.value;

  var editBtn = document.createElement("button");
  editBtn.innerHTML = "EDIT";
  console.log("editBtn", editBtn);

  liElement.appendChild(editBtn);

  console.log("liElement", liElement);
  parent.appendChild(liElement);
}
