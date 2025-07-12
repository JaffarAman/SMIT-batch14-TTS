import {
  addDoc,
  auth,
  collection,
  createUserWithEmailAndPassword,
  db,
  doc,
  setDoc,
} from "./firebase.js";

console.log("auth", auth);

const signupHandler = async () => {
  try {
    console.log("signupHandler");

    const firstName = document.querySelector("#firstName");
    const lastName = document.querySelector("#lastName");
    const mobileNumber = document.querySelector("#mobileNumber");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");

    console.log("firstName", firstName.value);
    console.log("lastName", lastName.value);
    console.log("mobileNumber", mobileNumber.value);
    console.log("email", email.value);
    console.log("password", password.value);
    // auth service
    const response = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    console.log("user", response);
    const userUId = response.user.uid;

    // user data store on firestore db
    const userObj = {
      firstName: firstName.value,
      lastName: lastName.value,
      mobileNumber: mobileNumber.value,
      email: email.value,
      uid: response.user.uid,
    };

    // const userRes = await addDoc(collection(db, "users"), userObj);
    const userRes = await setDoc(doc(db, "users", userUId), userObj);
    console.log("userRes", userRes);
  } catch (error) {
    console.log("error", error.message);
  }
};

window.signupHandler = signupHandler;
