// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// paste config
const firebaseConfig = {
  apiKey: "AIzaSyC0uX-MWgWGDouhJJWLCejBNT3IfaNKVZI",
  authDomain: "expense-tracker-5b047.firebaseapp.com",
  databaseURL: "https://expense-tracker-5b047-default-rtdb.firebaseio.com",
  projectId: "expense-tracker-5b047",
  storageBucket: "expense-tracker-5b047.appspot.com",
  messagingSenderId: "479377948780",
  appId: "1:479377948780:web:55b9af35e2518ce3d6d849",
  measurementId: "G-8HYESJ1JE5"
};

console.log(firebaseConfig);

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);