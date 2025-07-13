import { app, auth, signInWithEmailAndPassword } from "./firebase.js";

console.log("app", app);

const loginHandler = async () => {
  try {
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");

    if (!email.value || !password.value) {
      alert("Required Field are missing");
      return;
    }
    const response = await signInWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    console.log("login response", response.user.uid);
    localStorage.setItem("uid", response.user.uid);
    window.location.replace("./dashboard.html")


  } catch (error) {
    alert(error.message);
  }
};

window.loginHandler = loginHandler;
