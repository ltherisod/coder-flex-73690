// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADEDBycsB4sZuu3O223ELYJ6QZNVtFNVE",
  authDomain: "react-flex-73690.firebaseapp.com",
  projectId: "react-flex-73690",
  storageBucket: "react-flex-73690.firebasestorage.app",
  messagingSenderId: "100773318637",
  appId: "1:100773318637:web:518a0dd91fedcc1f02e1e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)