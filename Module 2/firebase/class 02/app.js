import { addDoc, app, collection, db, getDocs } from "./firebase.js";

console.log("app", app);
console.log("db", db);

// const createUserData = () => {
//   const name = document.getElementById("name");
//   const age = document.getElementById("age");
//   const email = document.getElementById("email");
//   const gender = document.getElementById("gender");

//     console.log(name , "name")
//     console.log(age , "age")
//     console.log(email , "email")
//     console.log(gender , "gender")

// };

async function createUserData() {
  try {
    const name = document.getElementById("name");
    const age = document.getElementById("age");
    const email = document.getElementById("email");
    const gender = document.getElementById("gender");

    const userObj = {
      name: name.value,
      age: age.value,
      gender: gender.value,
      email: email.value,
    };

    console.log("userObj", userObj);

    // collection(db , "collectionName")
    const userCollection = collection(db, "users");
    // addDoc(collection , data)
    const response = await addDoc(userCollection, userObj);
    console.log("response", response);
  } catch (error) {
    console.log("error", error.message);
  }
}

const getUsersData = async () => {
  try {
    // const response = await getDocs(collection(db, "users"));
    // // console.log("response", response);
    // response.forEach((doc) => {
    //   console.log("doc", doc.data() , doc.id);
    // });

    // const response = await getDocs(collection(db, "users"));
    // // console.log("response" , response)
    // response.forEach((document) => {
    //   console.log("document", document.data() , document.id);
    // });

    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id}`);
      console.log(doc.data());
    });
  } catch (error) {
    console.log("error", error.message);
  }
};

// {}
// objName.keyName = keyValue
window.createUserData = createUserData;
window.getUsersData = getUsersData;
