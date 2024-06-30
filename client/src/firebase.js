// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-3.firebaseapp.com",
  projectId: "mern-blog-3",
  storageBucket: "mern-blog-3.appspot.com",
  messagingSenderId: "770009135185",
  appId: "1:770009135185:web:72ded3300fcb94e5006070",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
