var listParent = document.getElementById("listParent");

// function createNote() {
//   var input = document.getElementById("input");
//   console.log("createNote", input.value);
//   if (!input.value) {
//     alert("input field are required!");
//     return;
//   }

//   // create li element
//   var liElement = document.createElement("li");
//   liElement.innerHTML = input.value;

//   // create edit btn
//   var editbtn = document.createElement("button");
//   editbtn.innerHTML = "EDIT";
//   editbtn.setAttribute("onclick", "editTodo(this)");

//   // create delete btn
//   var deletebtn = document.createElement("button");
//   deletebtn.innerHTML = "Delete";
//   deletebtn.setAttribute("onclick", "deleteTodo(this)");

//   // create task completed btn
//   var completebtn = document.createElement("button");
//   completebtn.innerHTML = "complete";
//   completebtn.setAttribute("onclick", "completeTodo(this)");

//   liElement.append(editbtn);
//   liElement.append(deletebtn);
//   liElement.append(completebtn);

//   console.log("liElement", liElement);
//   listParent.append(liElement);
//   input.value = "";
// }

function createNote() {
  var inputTitle = document.getElementById("inputTitle");
  var inputDesc = document.getElementById("inputDesc");

  if (!inputTitle.value || !inputDesc.value) {
    alert("Required field are missing");
    return;
  }

  var cardUI = `<div class="card" style="width: 18rem">
  <div class="card-body">
  <!-- Icon buttons -->
  <div class="position-absolute top-0 end-0 p-2 d-flex gap-2">
    <i class="fas fa-edit text-primary" style="cursor: pointer"  onclick="editTodo(this)" ></i>
    <i class="fas fa-trash-alt text-danger" style="cursor: pointer" onclick="deleteNote(this)"></i>
  </div> 
  
  <h5 class="card-title"> ${inputTitle.value}  </h5>

    <p class="card-text">
     ${inputDesc.value}
    </p>
  </div>
  
</div>`;

  console.log(cardUI);
  listParent.innerHTML += cardUI;
}

function editTodo(editBtn) {
  console.log("editBtn", editBtn.parentNode.nextElementSibling);
  var titleElement = editBtn.parentNode.nextElementSibling;

  var titleEditValue = prompt("Enter Title Value", titleElement.innerHTML);
  titleElement.innerHTML = titleEditValue;
  return;

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
