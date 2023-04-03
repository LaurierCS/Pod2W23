// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// paste config

console.log(firebaseConfig);

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);