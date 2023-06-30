import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs, onSnapshot, query, orderBy, limit} from "@firebase/firestore";
import { getAuth } from "@firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAB2NVdIl_MI0stp_tnxY9hjGpPJChSvCo",
  authDomain: "phachat-b7597.firebaseapp.com",
  projectId: "phachat-b7597",
  storageBucket: "phachat-b7597.appspot.com",
  messagingSenderId: "47230423181",
  appId: "1:47230423181:web:a3b41a888cf859093a12c4"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const firestore = getFirestore(firebase);
export const auth = getAuth(firebase);
export const messagesRef = collection(firestore, 'messages');
export const q = query(messagesRef, orderBy("createdAt"), limit(3));


