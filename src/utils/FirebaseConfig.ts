// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import {collection,getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZhOpev1m2tjcLxcEeUip2DQgsCLxTSas",
  authDomain: "upface-d0a42.firebaseapp.com",
  projectId: "upface-d0a42",
  storageBucket: "upface-d0a42.firebasestorage.app",
  messagingSenderId: "901607864829",
  appId: "1:901607864829:web:77fce1a216a260b7d58194",
  measurementId: "G-9PCPYGDVGB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const userRef = collection(firebaseDB, "user");
export const meetingsRef = collection(firebaseDB, "meetings");

