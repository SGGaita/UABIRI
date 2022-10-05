import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "u-abiri.firebaseapp.com",
    projectId: "u-abiri",
    storageBucket: "u-abiri.appspot.com",
    messagingSenderId: "629811020114",
    appId: "1:629811020114:web:eb8f6a907c281565d87a8b"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);