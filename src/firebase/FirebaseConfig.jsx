// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDP3UAYrBgWRMAjXUUM_QM0LURw8LKUDE",
  authDomain: "myblog-dbf73.firebaseapp.com",
  projectId: "myblog-dbf73",
  storageBucket: "myblog-dbf73.appspot.com",
  messagingSenderId: "292525988371",
  appId: "1:292525988371:web:a7145827ed4f537d3b3de6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage  = getStorage(app);

export {fireDb, auth, storage}