// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKKIb5s-EmroKz9XJIIyAi1KhLtJQn-v0",
  authDomain: "smit-batch14-573f2.firebaseapp.com",
  projectId: "smit-batch14-573f2",
  storageBucket: "smit-batch14-573f2.firebasestorage.app",
  messagingSenderId: "734578915401",
  appId: "1:734578915401:web:62a4db2037f92b409a6798",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const auth = getAuth(app);
export { app, db, auth };
