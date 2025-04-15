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
  editbtn.setAttribute("onclick", "editTodo(this)");

  // create delete btn
  var deletebtn = document.createElement("button");
  deletebtn.innerHTML = "Delete";
  deletebtn.setAttribute("onclick", "deleteTodo(this)");

  // create task completed btn
  var completebtn = document.createElement("button");
  completebtn.innerHTML = "complete";
  completebtn.setAttribute("onclick", "completeTodo(this)");

  liElement.append(editbtn);
  liElement.append(deletebtn);
  liElement.append(completebtn);

  console.log("liElement", liElement);
  listParent.append(liElement);
  input.value = "";
}

function editTodo(editBtn) {
  // editBtn.parentNode.firstChild.textContent = "HELLO WORLD";
  var editValue = prompt(
    "enter edit value",
    editBtn.previousSibling.textContent
  );
  if (!editValue) {
    alert("Enter enter edit value");
    return;
  }

  editBtn.previousSibling.textContent = editValue;

  // console.log("editValue", editValue);
  // console.log("editBtn", editBtn.previousSibling.textContent);
  // editBtn.previousSibling = editValue;
}

function deleteTodo(deletebtn) {
  console.log("deleteTodo()", deletebtn.parentNode);
  deletebtn.parentNode.remove();
}

function deleteAll() {
  listParent.innerHTML = "";
}

function completeTodo(btn) {
  console.log("btn", btn.parentNode);
  btn.parentNode.className = "liLine";
  
}
