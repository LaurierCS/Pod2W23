// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const config = {

};

console.log(config);

// Initialize Firebase
export const app = initializeApp(config);

export const db = getFirestore(app);