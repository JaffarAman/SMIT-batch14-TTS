import {
  collection,
  db,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "./firebase.js";

const privateRouteCheck = () => {
  const uid = localStorage.getItem("uid");
  console.log("privateRouteCheck", uid);
  if(!uid){
    window.location.replace("./index.html")
  }

};


window.addEventListener("load" , privateRouteCheck)


const fetchMyTodos = async () => {
  //   console.log("fetchMyTodos");
  const userUid = localStorage.getItem("uid");

  //   const todoRef = collection(db, "todos");
  //   const q = query(todoRef, where("uid", "==", userUid));
  //   const querySnapShot = await getDocs(q);

  const querySnapShot = await getDocs(
    query(collection(db, "todos"), where("uid", "==", userUid))
  );

  console.log("querySnapShot", querySnapShot);
  const tempArr = [];
  querySnapShot.forEach((doc) => {
    console.log("doc data", doc.data());
    const obj = {
      ...doc.data(),
      id: doc.id,
    };
    tempArr.push(obj);
  });

  const cardListing = document.getElementById("cardListing");
  cardListing.innerHTML = "";
  for (const obj of tempArr) {
    console.log("obj", obj);

    cardListing.innerHTML += `<div class="cardContainer" >
            <h1> ${obj.title}  </h1>
            <h3>${obj.desc}</h3>
            <div>
              <p>${obj.userName}</p>
              <p>${obj.userEmail}</p>
            </div>
            <button id=${obj.id} onclick="deleteTodo(this)" >DELETE</button>
            <button id=${obj.id} onclick="editTodo(this)" >EDIT</button>
        </div>`;
  }
};

const deleteTodo = async (ele) => {
  console.log("deleteTodo", ele.id);
  await deleteDoc(doc(db, "todos", ele.id));
  alert("deleted");
  fetchMyTodos();
};

const editTodo = async (ele) => {
  console.log("editTodo", ele.id);

  const editTitle = prompt("title");
  const editDesc = prompt("desc");

  const updateObj = {
    title: editTitle,
    desc: editDesc,
  };

  await updateDoc(doc(db, "todos", ele.id), updateObj);
  alert("todo udpated");
  fetchMyTodos()
};

window.fetchMyTodos = fetchMyTodos;
window.deleteTodo = deleteTodo;
window.editTodo = editTodo;
