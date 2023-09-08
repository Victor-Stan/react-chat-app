// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCURcMTXhCjTPcqMtmoKsHiX_qivqSBpg0",
  authDomain: "chatapp-4033a.firebaseapp.com",
  projectId: "chatapp-4033a",
  storageBucket: "chatapp-4033a.appspot.com",
  messagingSenderId: "894115007541",
  appId: "1:894115007541:web:75feb3ba6beddcf465f57c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);