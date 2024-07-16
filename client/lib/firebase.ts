import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHk35gL5V0uwZyGL_6RLD_5ZhtwQoPYNA",
  authDomain: "noorsupgr.firebaseapp.com",
  projectId: "noorsupgr",
  storageBucket: "noorsupgr.appspot.com",
  messagingSenderId: "871623859652",
  appId: "1:871623859652:web:a78a1065bcd0cb15ead891",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
