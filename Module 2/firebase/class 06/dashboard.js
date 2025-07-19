import { addDoc, collection, db, doc, getDoc, getDocs } from "./firebase.js";

let userData;


const privateRouteCheck = () => {
  const uid = localStorage.getItem("uid");
  console.log("privateRouteCheck", uid);
  if(!uid){
    window.location.replace("./index.html")
  }

};


window.addEventListener("load" , privateRouteCheck)

const fetchUserData = async () => {
  const userUid = localStorage.getItem("uid");
  //   console.log("HELLO DASHBOARD", userUid);
  const user = await getDoc(doc(db, "users", userUid));
  console.log("user", user.data());
  userData = user.data();
};

const addTodo = async () => {
  try {
    const todoTitle = document.getElementById("todoTitle");
    const todoDesc = document.getElementById("todoDesc");

    if (!todoTitle.value || !todoDesc.value) {
      alert("required fields are missing!");
      return;
    }

    const todoObj = {
      title: todoTitle.value,
      desc: todoDesc.value,
      uid: userData.uid,
      userName: userData.firstName + " " + userData.lastName,
      userEmail: userData.email,
    };
    console.log("todoObj", todoObj);

    await addDoc(collection(db, "todos"), todoObj);
    alert("Todo Created!");
    fetchTodos()
  } catch (error) {
    alert(error.message);
  }
};

const fetchTodos = async () => {
  const querySnapShot = await getDocs(collection(db, "todos"));

  const tempArr = [];
  querySnapShot.forEach((doc) => {
    // console.log("doc", doc.data());
    // console.log("doc id", doc.id);
    const obj = {
      ...doc.data(),
      id: doc.id,
    };
    tempArr.push(obj);
    // console.log("obj", obj);
  });
  console.log("tempArr", tempArr);

  const cardListing = document.getElementById("cardListing");
  cardListing.innerHTML = ""
  for (const obj of tempArr) {
    console.log("obj", obj);

    cardListing.innerHTML += `<div class="cardContainer" >
            <h1> ${obj.title}  </h1>
            <h3>${obj.desc}</h3>
            <div>
              <p>${obj.userName}</p>
              <p>${obj.userEmail}</p>
            </div>
        </div>`;
  }
};

window.fetchUserData = fetchUserData;
window.addTodo = addTodo;
window.fetchTodos = fetchTodos;
