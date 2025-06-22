// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArkd664soBIPX0ycOE-ywYhZH7yJDHoko",
  authDomain: "smit-batch14.firebaseapp.com",
  projectId: "smit-batch14",
  storageBucket: "smit-batch14.firebasestorage.app",
  messagingSenderId: "638732930044",
  appId: "1:638732930044:web:7e4d7dc51951b4a9270079",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { app, db };
