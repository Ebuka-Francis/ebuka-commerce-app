"use client";
// import firebase from "firebase/app";
import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DB_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

export const initFirebase = initializeApp(firebaseConfig);
// export default function initFirebase() {
// if(!firebase.apps.length){
//     firebase.initializeApp(firebaseConfig);
// }
// }

// export function auth() {
//     if (typeof window !== 'undefined') {
//         firebase.auth();
//     }
// }
export const db = getFirestore();

const colRef = collection(db, "products");

getDocs(colRef).then((snapshot) => {
  let products = [];
  snapshot.docs.forEach((doc) => {
    products.push({ ...doc.data(), id: doc.id });
  });
  console.log(products);
}).catch(err => {
    console.log(err.message)
})

// export const handleAddDatas = () => {
//     addDoc(colRef, {
//         title:
//     })
// }
export const auth = getAuth(initFirebase);
export const googleProvider = new GoogleAuthProvider();
