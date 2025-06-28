import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArkd664soBIPX0ycOE-ywYhZH7yJDHoko",
  authDomain: "smit-batch14.firebaseapp.com",
  projectId: "smit-batch14",
  storageBucket: "smit-batch14.firebasestorage.app",
  messagingSenderId: "638732930044",
  appId: "1:638732930044:web:400dce5985141c16270079",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { app, db, collection, addDoc, getDocs };

// https://www.gstatic.com/firebasejs/11.9.1/firebase-SERVICE-NAME.js
