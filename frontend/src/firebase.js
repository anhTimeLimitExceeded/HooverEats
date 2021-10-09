import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFlWj4ulrA8toLvVwwkrc38X58R8Yt-uA",
  authDomain: "hoovereats-67e7a.firebaseapp.com",
  databaseURL: "https://hoovereats-67e7a.firebaseio.com",
  projectId: "hoovereats-67e7a",
  storageBucket: "hoovereats-67e7a.appspot.com",
  messagingSenderId: "26063172720",
  appId: "1:26063172720:web:d225209f8ea2cd06f8b0b5",
  measurementId: "G-CQDQGN9PYR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default app;
export { GoogleAuthProvider, auth, signInWithPopup };
