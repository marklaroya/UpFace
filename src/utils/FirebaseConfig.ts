// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import {collection,getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq93FkNhrNS_7baONlsM7_sk-dBcH0QaA",
  authDomain: "zoom-clone-a61f3.firebaseapp.com",
  projectId: "zoom-clone-a61f3",
  storageBucket: "zoom-clone-a61f3.firebasestorage.app",
  messagingSenderId: "827155244850",
  appId: "1:827155244850:web:56d07b32bbee75dce0d92b",
  measurementId: "G-Q380VTNEYS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const userRef = collection(firebaseDB, "user");
export const meetingsRef = collection(firebaseDB, "meetings");

