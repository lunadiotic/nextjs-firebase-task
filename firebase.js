// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBKlODxCRScM3sxhzlf7ETuEraWOlB4Jk",
  authDomain: "nextjs-155cd.firebaseapp.com",
  projectId: "nextjs-155cd",
  storageBucket: "nextjs-155cd.appspot.com",
  messagingSenderId: "58401479027",
  appId: "1:58401479027:web:35f87446c3fa37894d4d06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
export { db, auth, provider }