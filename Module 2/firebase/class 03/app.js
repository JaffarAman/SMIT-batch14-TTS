import {
  app,
  db,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "./firebase.js";

const bodyEle = document.querySelector("#getDataElement");

// console.log("app", app);

// console.log("db", db);

// const createData = async () => {
//   console.log("createData");
// };

async function createData() {
  try {
    console.log("createData");

    const userData = {
      firstName: "Jaffar",
      lastName: "Aman",
      email: "jaffaraman@gmail.com",
      isActive: true,
    };

    const userCollection = collection(db, "users");
    const response = await addDoc(userCollection, userData);
    console.log("response", response);
  } catch (error) {
    console.log("error", error.message);
  }
}

const getUserData = async () => {
  try {
    // const querySnapshot = await getDocs(collection(db, "users"));
    // // console.log("querySnapshot ", querySnapshot );
    // querySnapshot.forEach((doc)=>{
    //     console.log("doc"  , doc.data())
    //     console.log("doc id"  , doc.id)
    // })
    console.log("fetching");
    const querySnapshot = await getDocs(collection(db, "users"));
    const tempArr = [];
    querySnapshot.forEach((doc) => {
      // console.log(doc.data());
      // console.log(doc.id);
      const obj = {
        id: doc.id,
        ...doc.data(),
      };
      tempArr.push(obj);
    });

    console.log("tempArr", tempArr);
  } catch (error) {
    console.log("error", error.message);
  }
};

const deleteData = async () => {
  try {
    // await deleteDoc(doc(database , collectionName , docID - UID))
    await deleteDoc(doc(db, "users", "7o5REOKgySjge0wSbiVs"));
    alert("Data deleted");
  } catch (error) {}
};

const updateData = async () => {
  try {
    const updateObj = {
      isActive: false,
      email: "jaffar@gmail.com",
    };

    await updateDoc(doc(db, "users", "AhjV9Qz6zrYMS1NrblZ8"), updateObj);
    alert("updated successfully");
  } catch (error) {
    alert(error.message);
  }
};

// var a = {}
// a.propName = propValue

bodyEle.addEventListener("click" , getUserData)

window.createData = createData;
// window.getUserData = getUserData;
window.deleteData = deleteData;
window.updateData = updateData;
