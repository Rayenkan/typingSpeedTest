import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEMmmPapVWi9JoSvWw1pYLzHRcRjMF81A",
  authDomain: "typingspeedtest-7c3c6.firebaseapp.com",
  projectId: "typingspeedtest-7c3c6",
  storageBucket: "typingspeedtest-7c3c6.appspot.com",
  messagingSenderId: "909771842395",
  appId: "1:909771842395:web:7ef7c58dbd9abd4758f07e",
  measurementId: "G-HTJJK88ET6",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = getFirestore(app); // This is the missing 'db' export
