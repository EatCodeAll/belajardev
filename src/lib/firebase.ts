import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration for Belajardev
const firebaseConfig = {
  apiKey: "AIzaSyBK9l5ujWqG5PQqMIYzg-WBpLFIVoDmniI",
  authDomain: "belajardev-e02f8.firebaseapp.com",
  projectId: "belajardev-e02f8",
  storageBucket: "belajardev-e02f8.firebasestorage.app",
  messagingSenderId: "1034543707708",
  appId: "1:1034543707708:web:b654da0f90f998808e3539",
  measurementId: "G-PQZMQ7N6X0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
