import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAaQ6krSFO7i3QmT8T6ZeAznj1w05GjWkM",
    authDomain: "u-abiri.firebaseapp.com",
    projectId: "u-abiri",
    storageBucket: "u-abiri.appspot.com",
    messagingSenderId: "629811020114",
    appId: "1:629811020114:web:eb8f6a907c281565d87a8b"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, {
  experimentalForceLongPolling: true,
  useFetchStreams: false,
});
export const auth = getAuth();
export const storage = getStorage(app);


