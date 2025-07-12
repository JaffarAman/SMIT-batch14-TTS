import { db, doc, getDoc } from "./firebase.js";

const fetchUserData = async () => {
  const userUid = localStorage.getItem("uid");
  //   console.log("HELLO DASHBOARD", userUid);
  const user = await getDoc(doc(db, "users", userUid));
  console.log("user", user.data());
};

window.fetchUserData = fetchUserData;
