import { db, doc, getDoc, updateDoc } from "./firebase.js";

const fetchUser = async () => {
  console.log("fetchUser");
  const uid = localStorage.getItem("uid");
  const userRes = await getDoc(doc(db, "users", uid));
  console.log("userRes", userRes.data());

  const userData = userRes.data();

  const firstname = document.querySelector("#firstname");
  const lastname = document.querySelector("#lastname");
  const email = document.querySelector("#email");
  const mobileNumber = document.querySelector("#mobileNumber");
  const dp = document.querySelector("#dp");

  firstname.value = userData.firstName;
  lastname.value = userData.lastName;
  email.value = userData.email;
  mobileNumber.value = userData.mobileNumber;
  dp.src = userData.imageUrl;
};

const fileHandler = async () => {
  try {
    const profilePic = document.querySelector("#profilePic");
    console.log("HELLO WORLD IMAGE", profilePic.files[0]);
    const file = profilePic.files[0];

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "batch14");
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/dbync9n3e/upload`,
      {
        method: "POST",
        body: formData,
      }
    ).then((res) => res.json());
    console.log("res", res.secure_url);

    //save image url on firestore database
    const uid = localStorage.getItem("uid");
    await updateDoc(doc(db, "users", uid), {
      imageUrl: res.secure_url,
    });
    alert("PROFILE PICTURE UPDATED!");
  } catch (error) {
    console.log("error", error.message);
  }
};

window.addEventListener("load", fetchUser);

window.fileHandler = fileHandler;
